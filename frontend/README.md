This frontend scaffold contains:

- Next.js app skeleton
- React Three Fiber scene placeholder (Hero)
- TailwindCSS config

To run locally:

1. cd frontend
2. npm install
3. npx tsc --noEmit   # optional: run TypeScript checks
4. npm run dev

Note: `@react-three/drei` was removed from the scaffold package.json because a pinned version did not exist in the registry; if you want the controls and helpers from `drei` add a compatible version later (for example `npm i @react-three/drei@10.26.7` or the latest available).