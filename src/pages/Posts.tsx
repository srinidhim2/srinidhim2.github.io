import React, { useEffect, useState } from 'react';
import { Post, Profile } from '../types';
import PostCard from '../components/PostCard';
import './Posts.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/posts.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Failed to load posts:', err));

    fetch(process.env.PUBLIC_URL + '/data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to load projects:', err));

    fetch(process.env.PUBLIC_URL + '/data/profile.json')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('Failed to load profile:', err));
  }, []);

  if (!profile) {
    return <div className="posts-page"><p className="loading">Loading...</p></div>;
  }

  return (
    <div className="posts-page">
      {/* Profile Header - Instagram Style */}
      <header className="ig-profile-header">
        <div className="ig-avatar-wrapper">
          <img
            src={process.env.PUBLIC_URL + profile.avatar}
            alt={profile.name}
            className="ig-avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://via.placeholder.com/150x150/161b22/58a6ff?text=' +
                encodeURIComponent(profile.name.charAt(0));
            }}
          />
        </div>
        <div className="ig-profile-info">
          <div className="ig-username-row">
            <h1 className="ig-username">{profile.username}</h1>
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-follow-btn"
              >
                Follow
              </a>
            )}
          </div>
          <div className="ig-stats">
            <div className="ig-stat">
              <span className="ig-stat-number">{posts.length}</span>
              <span className="ig-stat-label">posts</span>
            </div>
            <div className="ig-stat">
              <span className="ig-stat-number">{projects.length}</span>
              <span className="ig-stat-label">projects</span>
            </div>
          </div>
          <div className="ig-bio">
            <h2 className="ig-fullname">{profile.name}</h2>
            <p className="ig-bio-text">{profile.bio}</p>
          </div>
        </div>
      </header>

      {/* Mobile Stats */}
      <div className="ig-mobile-stats">
        <div className="ig-stat">
          <span className="ig-stat-number">{posts.length}</span>
          <span className="ig-stat-label">posts</span>
        </div>
        <div className="ig-stat">
          <span className="ig-stat-number">{projects.length}</span>
          <span className="ig-stat-label">projects</span>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="ig-tabs">
        <button className="ig-tab active">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
          </svg>
          POSTS
        </button>
      </div>

      {/* Posts Grid */}
      <div className="ig-posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="empty-state">No posts yet. Add them to /public/data/posts.json</p>
      )}
    </div>
  );
};

export default Posts;
