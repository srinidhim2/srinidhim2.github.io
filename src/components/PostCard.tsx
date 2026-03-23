import React, { useState, useCallback, useEffect } from 'react';
import { Post } from '../types';
import './PostCard.css';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = post.images ?? [];
  const total = images.length;

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((i) => (i - 1 + total) % total);
    },
    [total]
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((i) => (i + 1) % total);
    },
    [total]
  );

  // keyboard navigation
  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + total) % total);
      if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % total);
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal, total]);

  const openModal = () => {
    setCurrentIndex(0);
    setShowModal(true);
  };

  return (
    <>
      {/* Grid Thumbnail — always shows first image */}
      <div className="post-grid-item" onClick={openModal}>
        <img
          src={process.env.PUBLIC_URL + images[0]}
          alt={post.caption}
          className="post-grid-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://via.placeholder.com/400x400/161b22/58a6ff?text=Post+' + post.id;
          }}
        />
        <div className="post-grid-overlay">
          <div className="post-grid-stats">
            <span>❤️ {post.likes}</span>
          </div>
        </div>
        {/* Multi-photo indicator */}
        {total > 1 && (
          <div className="post-multi-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm16-1H4a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1zM22 8v10a2 2 0 01-2 2H6v-1h14a1 1 0 001-1V8h1z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Modal with Carousel */}
      {showModal && (
        <div className="post-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="post-modal" onClick={(e) => e.stopPropagation()}>
            <button className="post-modal-close" onClick={() => setShowModal(false)}>✕</button>

            <div className="post-modal-content">
              {/* Carousel */}
              <div className="carousel">
                <img
                  src={process.env.PUBLIC_URL + images[currentIndex]}
                  alt={`${post.caption} — ${currentIndex + 1} of ${total}`}
                  className="carousel-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/600x600/161b22/58a6ff?text=Photo+' + (currentIndex + 1);
                  }}
                />

                {total > 1 && (
                  <>
                    <button className="carousel-arrow left" onClick={prev}>&#8249;</button>
                    <button className="carousel-arrow right" onClick={next}>&#8250;</button>

                    {/* Dot indicators */}
                    <div className="carousel-dots">
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
                          onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                        />
                      ))}
                    </div>

                    {/* Counter */}
                    <div className="carousel-counter">{currentIndex + 1} / {total}</div>
                  </>
                )}
              </div>

              {/* Details */}
              <div className="post-modal-details">
                <p className="post-modal-caption">{post.caption}</p>
                <div className="post-modal-meta">
                  <span className="post-modal-likes">❤️ {post.likes} likes</span>
                  <span className="post-modal-date">{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;

