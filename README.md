# Srinidhi M — Portfolio

A personal portfolio website built with React + TypeScript. Features two pages:
- **Portfolio** — Hero, skills grid, and project cards
- **Posts** — Instagram-style profile page with a 3-column post grid

Live at: **https://srinidhim2.github.io/portfolio**

---

## Project Structure

```
portfolio/
 public/
    data/
       projects.json      Add / edit projects here
       posts.json         Add / edit posts here
       profile.json       Your name, bio, username, social links
    assets/
        posts/             Post images (e.g. post1.png)
        projects/          Project cover images (e.g. project1.png)
        profile/           Your avatar image (avatar.png)
 src/                       React source code (no need to touch for content)
```

---

## How to Add a New Project

1. **Add the cover image** to `public/assets/projects/` (e.g. `project4.png`)

2. **Open** `public/data/projects.json` and append a new entry:

```json
{
  "id": 4,
  "title": "Your Project Title",
  "description": "A short description of what the project does.",
  "image": "/assets/projects/project4.png",
  "technologies": ["Python", "FastAPI", "Docker"],
  "github": "https://github.com/srinidhim2/your-repo",
  "live": "",
  "date": "2026-03-07"
}
```

> Leave `"live"` empty (`""`) if there is no live demo link.
> The **projects count** on the Posts page updates automatically.

---

## How to Add a New Post

1. **Add the post image** to `public/assets/posts/` (e.g. `post7.png`)

2. **Open** `public/data/posts.json` and append a new entry:

```json
{
  "id": 7,
  "image": "/assets/posts/post7.png",
  "caption": "Your caption for the post",
  "likes": 0,
  "date": "2026-03-07"
}
```

> The **posts count** on the Posts page updates automatically.

---

## How to Update Your Profile Picture

1. Place your photo in `public/assets/profile/` named **`avatar.png`**
   - Recommended size: **400x400 px** or larger (square)
   - Supported formats: `.png`, `.jpg`, `.webp`

2. Ensure `public/data/profile.json` has:

```json
{
  "avatar": "/assets/profile/avatar.png"
}
```

---

## How to Update Profile Info

Edit `public/data/profile.json`:

```json
{
  "name": "Your Full Name",
  "username": "your_github_username",
  "bio": "Developer Engineer | Backend & AI/ML Enthusiast",
  "avatar": "/assets/profile/avatar.png",
  "social": {
    "github": "https://github.com/your_username",
    "linkedin": "https://linkedin.com/in/your_profile",
    "twitter": ""
  }
}
```

---

## Running Locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000/portfolio`

---

## Deploying to GitHub Pages

### First-time setup

1. Create a GitHub repository named **`portfolio`** under your account (`srinidhim2`)

2. Add the remote and push your code:

```bash
git remote add origin https://github.com/srinidhim2/portfolio.git
git push -u origin main
```

### Deploy

```bash
npm run deploy
```

This command:
1. Runs `npm run build` — creates an optimized production bundle
2. Pushes the `build/` folder to the `gh-pages` branch automatically

### Enable GitHub Pages (one-time)

In your GitHub repository  **Settings**  **Pages**:
- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / `/ (root)`
- Click **Save**

Your site will be live at: `https://srinidhim2.github.io/portfolio`

### Subsequent updates

After adding new posts, projects, images, or any content change:

```bash
npm run deploy
```

---

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router v6](https://reactrouter.com/) — HashRouter (GitHub Pages compatible)
- [gh-pages](https://github.com/tschaub/gh-pages) for deployment
- No backend — all content driven by JSON files in `public/data/`
