# JADE-SpaceApps-LandingPage
Landing Page repository

This repository contains a technical blueprint and a scaffold for a high-fidelity landing page:

- `docs/TECHNICAL_BLUEPRINT.md` — the full design and implementation blueprint
- `frontend/` — Next.js + React-Three-Fiber scaffold (Hero prototype)
- `backend/` — FastAPI mocked endpoints for predictive maintenance and docking
- `.github/workflows/` — CI for frontend and backend

To run backend locally:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

To run frontend locally:

```bash
cd frontend
npm install
npm run dev
```

Next steps: flesh out each section, add GLTF assets, implement GSAP ScrollTrigger flows, integrate real ML model, and add CI/CD deployment steps to Vercel and container registry.
# JADE-SpaceApps-LandingPage
Landing Page repository
