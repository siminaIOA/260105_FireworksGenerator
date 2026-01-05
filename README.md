# 260105_FireworksGenerator

260105_FireworksGenerator is a local Three.js fireworks sandbox that spawns dense, stylized detonations on a black sky with flashlight pops, curved trajectories, and a heavy bias toward perfectly rounded spherical bursts.

## Features
- Expanded blast catalog with new shapes and motion styles
- Strong spherical bias with boosted droops, long trails, and mega droop variants
- Spaghetti curl trails with curl-noise motion, extra droop, and denser trail sampling
- Snowflake-style drifting trajectories on a subset of blasts
- Solid, intense color palette with Ferrari red spherical bursts and limited rainbow use
- Lightning-style center flashes with colored cores and secondary flash bursts
- Non-spherical chaos: flips, rotations, mirroring, and cross emphasis

## Getting Started
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Controls
- Click on the canvas to detonate a firework at the cursor position

## Deployment
Live demo: https://siminaIOA.github.io/260105_FireworksGenerator/

Build locally with relative asset paths:
1. `npm install`
2. `npm run build -- --base=./`

Deploy to GitHub Pages (keeps `main` clean by using a worktree):
1. `git worktree add ../260101_FireworksGenerator_gh-pages gh-pages`
2. Copy the build output into the worktree root:
   - Remove old `assets/` + `index.html`
   - Copy `dist/*` from the main repo into the worktree root
   - Add `.nojekyll`
3. Commit and push from the `gh-pages` worktree:
   - `git add -A`
   - `git commit -m "Deploy build"`
   - `git push`
