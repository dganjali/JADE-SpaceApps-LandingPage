# Autonomous Satellite Servicing System — Technical Website Blueprint

Last updated: 2025-10-05

This document is a complete technical blueprint for the Autonomous Satellite Servicing System (LEO Satellite Repair Robot) landing site. It covers the visual layout, technical content, implementation details, data contracts, animations, integrations (simulation + ML + ROS2), test strategy, deployment and next steps.

## High-level goal
Create a professional, highly technical, and visually immersive landing site that explains the system across seven sections (Hero → Footer). The site should be performant, accessible, and suitable to present to engineers, investors, and agency partners.

## 1) Site outline (mapped to requested sections)
- Hero (Title Slide): 3D orbit animation, animated text reveal, parallax. (Three.js + R3F + GSAP) 
- Problem + Solution: split two-column layout with technical callouts and animated docking vector.
- System Overview: scroll-synced 3D CAD model with subsystem stops (Hardware, Software, Orbital Dynamics, GNC).
- Impact: quantified counters, before/after infographics, Earth-night background with repair glows.
- Market & Business Model: animated charts and subscription tiers.
- Next Steps: horizontal timeline with CAD zooms for future features.
- Footer: contact, links, looping subtle orbit animation.

## 2) Tech stack (recommended)
- Frontend: Next.js 14 (app router), React 18+.
- 3D rendering: react-three-fiber (R3F) + three.js; GLTF models exported from Blender.
- Animations: GSAP with ScrollTrigger for scroll-synced sequencing; use RAF-friendly GSAP plugin integration with R3F.
- Styling: TailwindCSS + custom CSS variables for theme (dark, teal, accent).
- CV: YOLOv8 running in a containerized inference service (Ultralytics + OpenCV for preprocessing).
- ML: PyTorch for RUL model (BiLSTM), packaged behind a Flask or FastAPI microservice.
- Robotics & Control: ROS 2 Foxy/Galactic for on-robot control stacks; bridge telemetry to backend via ROS2 ↔ WebSocket relay for live dashboards.
- Simulation: Gazebo / Ignition (Jetty integration) for microgravity tests; capture videos for background/overlays.
- Deployment: Vercel for frontend; Docker + Kubernetes (or ECS) for backend ML and ROS bridges.

## 3) UX & Visual Implementation Notes
- Keep each section responsive and keyboard accessible.
- Prioritize 60fps for all 3D/scroll animations. Use LOD for GLTF models and compressed textures (Basis/WEBP). 
- Progressive enhancement: provide a static fallback (hero poster image) and disable heavy 3D for low-power devices via prefers-reduced-motion or WebGL capability checks.
- Use semantic HTML and Lighthouse best practices.

## 4) Section-by-section technical design

### Hero (Title Slide)
- Visuals: a 3D LEO scene: low-poly Earth, multiple small satellites in orbit, and the servicing robot performing a slow orbit pass.
- Implementation:
  - R3F Scene component with an orbital system manager to animate satellite positions parametric to time.
  - Use custom shader for atmosphere glow and starfield; cursor-driven parallax via small camera offset transform.
  - Animated text reveal with GSAP timeline synchronized to orbit speed.
  - Rotating label overlay (HTML overlay or sprite): "3D-printed modular arms | YOLOv8 CV | Cold Gas Thrusters | Predictive Maintenance Model".
- Performance: freeze the scene after 10s of inactivity or reduce detail on mobile.

### Problem + Solution (Split Layout)
- Layout: CSS grid/two-column. Left: problem cards with animated counters/graphs. Right: vector animation of docking sequence (SVG + Lottie or R3F micro-scene).
- Code-callouts: small monospace panels that appear on scroll; render code snippets from structured JSON so they're copy-paste friendly.

### System Overview (Core)
- Master canvas: large R3F canvas anchored behind page content. Use ScrollTrigger to map scroll progress to camera orbit around the GLTF CAD model.
- Implementation breakdown by stops:
  - Stop 1 — Hardware: highlight arms, show annotation overlays, animate joint rotations.
  - Stop 2 — Software: overlay telemetry panels, show model diagrams (LSTM architecture), show data pipeline graph.
  - Stop 3 — Orbital Dynamics: render approach trajectory, draw velocity vectors and LaTeX-rendered equations in overlay cards (KaTeX).
  - Stop 4 — GNC: small interactive demo snippet (play/pause) of docking control loop with PD gains sliders for educational exploration.
- Interaction: mouse hover over components shows technical stats (DOF, torque, material) in a floating HUD.

### Impact
- Four quadrant layout with animated counters. Implement numeric counters using GSAP countTo plugin.
- Data source: CSV / JSON example dataset; animate multiple runs for effect.

### Market & Business Model
- Animated bar/stacked charts built with D3 or Recharts (React-friendly). Provide download/print-friendly version.

### Next Steps
- Horizontal timeline implemented with a scroll-snap container; each card triggers a micro-animation in the 3D scene (tool swap, refuel, new arm).

### Footer
- Minimal contact and resources; provide quick links to PDF whitepaper, GitHub repo, and research dataset.

## 5) Data contracts and APIs
Provide deterministic, typed contracts for telemetry, ML inference and control commands.

### Telemetry (from satellite/robot)
- Channel: ROS2 topic and/or WebSocket. Also a nightly S3 upload in NDJSON for training.
- JSON schema (example):
  {
    "timestamp": "2025-10-05T12:00:00Z",
    "agent_id": "robot-01",
    "position": {"x": 6871.0, "y": -350.2, "z": 125.3},
    "velocity": {"vx": -1.2, "vy": 7.3, "vz": 0.02},
    "imu": {"accel": [0.001, -0.0004, 0.0001], "gyro": [0.0008,0.0002,0.0001]},
    "battery": {"voltage": 14.8, "current": 2.3, "temp_c": 22.1, "charge_cycles": 423},
    "camera_sync_ts": 1633450000
  }

### Predictive Maintenance API
- Endpoint: POST /api/v1/predict_rul
- Request JSON: {"agent_id":"robot-01","series": [{timestamp, voltage, current, temp_c, charge_cycles}, ...]}
- Response JSON: {"rul_hours": 2400, "failure_prob": 0.03, "anomalies": [{sensor:"battery",score:0.78,explaination:"voltage_drop"}], "confidence": 0.92}
- Error modes: 400 for malformed payload; 503 if model unavailable; 429 for rate limit.

### Docking / Guidance RPC
- Endpoint (simulation): POST /api/v1/compute_thruster_vector
- Request: {"relative_pos": [x,y,z],"relative_vel":[vx,vy,vz],"vision_lock":true}
- Response: {"thruster_vector": [tx,ty,tz],"alignment_state":"OK/ADJUST/LOCKED","timestamp":...}

### ROS2 topics mapping (bridge to Web)
- /robot/telemetry (sensor_msgs/Custom) → WebSocket topic telemetry.{agent}
- /robot/cmd_thrusters (geometry_msgs/Vector3) → POST /api/v1/cmd_thrusters (simulation mode)

## 6) ML model & training pipeline
- Model: BiLSTM for RUL with input sequences of windowed telemetry (N timesteps × features). Use PyTorch Lightning for clean training loops.
- Features: voltage, current, temp, charge_cycles, derived features (delta_voltage, temp_gradient).
- Loss: asymmetric loss — MSE for RUL regression + focal loss for anomaly labels.
- Explainability: SHAP or Integrated Gradients per prediction; store top-3 contributing features in response.
- Reproducible pipeline:
  - Data ingest (S3/NDJSON) → feature engineering (PySpark or pandas) → train/test/val split by mission → train with Lightning → save model artifact + torchscript.
  - Containerize with Docker; expose via FastAPI with GPU support (nvidia/cuda base image) or CPU fallback.

## 7) Simulation (Gazebo) integration
- Keep reproducible Gazebo worlds that approximate LEO (microgravity) and include URDF for robot.
- Produce rendered videos (mp4/webm) for background or small demonstrators. Consider WebM with alpha channel for overlays.
- Provide recorded rosbag files for demo telemetry ingestion and playback in the dashboard.

## 8) Frontend implementation details (key components)
- pages/app structure (Next.js app/router):
  - app/layout.tsx — global providers (R3F Canvas provider, Theme, Toasts)
  - app/page.tsx — sections assembled in order
  - components/Scene/OrbitCanvas.tsx — R3F canvas and scene manager
  - components/Section/Hero.tsx, ProblemSolution.tsx, SystemOverview.tsx, Impact.tsx, Market.tsx, Roadmap.tsx, Footer.tsx
  - components/HUD/TelemetryPanel.tsx, CodeCallout.tsx, KaTeXCard.tsx
- Key integrations:
  - useScroll (R3F) to sync with GSAP ScrollTrigger. Use `lerp` smoothing for camera movement.
  - Load GLTF with draco compression + meshopt.
  - Render LaTeX with KaTeX (pre-render on server for SEO-critical equations or render client-side lazily).

## 9) Contract / small API spec (short)
- Inputs: telemetry series JSON (see schema), relative_pose vectors.
- Outputs: RUL estimate (hours), failure probability, thruster_vector for docking.
- Error modes: Malformed input (400), model unavailable (503), auth invalid (401), rate-limit (429).
- Success criteria: API responds < 200ms for cached/common cases (local tests); < 500ms for cold start.

## 10) Edge cases & risk mitigation
- Missing telemetry or sparse data: model returns confidence < 0.5 and flags as "insufficient data".
- Network partitions: dashboard uses last-known state and shows staleness indicators.
- WebGL unsupported: provide high-quality fallback SVG/PNG and static video.
- Over-animated pages causing motion sickness: respect `prefers-reduced-motion` and provide an "Accessibility" toggle.

## 11) Quality gates & testing
- Build: Next.js build (production) — pass.
- Lint: ESLint + Prettier configured.
- Types: TypeScript strict mode for all front-end code.
- Unit tests: Jest for UI logic + Vitest recommended for React components; PyTest for Python model code.
- Integration tests: Playwright end-to-end tests for key pages and critical flows (hero loads, predict API returns output, simulation video loads).
- Model tests: deterministic model unit tests using known fixture telemetry series and expected RUL tolerance.

## 12) CI / CD
- GitHub Actions workflows:
  - frontend-lint-test-build.yml — runs on PRs: install, lint, test, build.
  - backend-model-ci.yml — tests model training on small subset; builds Docker image.
  - deploy.yml — deploy frontend to Vercel and push Docker images to registry; staging before production.

## 13) Accessibility & SEO
- Render important copy (title, hero subtitle, section headings) in HTML for SEO. Use server-side rendering for initial hero snapshot.
- All interactive elements keyboard-accessible; images + 3D interactive canvas have appropriate aria labels and fallback descriptions.

## 14) Assets list & Blender/GLTF pipeline
- Source: Blender project (.blend)
- Export steps: bake animations → export GLTF (draco + meshopt) → generate LODs and thumbnails.
- Provide a small helper script: blender_automation.py to export consistent GLTFs.

## 15) Example snippets (pseudo-production-ready)
- Scroll-linked camera update (pseudocode):

  // map scroll progress [0..1] to camera spherical coords
  target = {
    theta: lerp(startTheta, endTheta, scrollProgress),
    phi: lerp(startPhi, endPhi, scrollProgress),
    radius: lerp(startR, endR, ease(scrollProgress))
  }
  camera.position.setFromSpherical(target)
  camera.lookAt(model.position)

- Thruster computation (snippet):

  if (target_locked) {
      pos_error = target - current
      thrust = Kp * pos_error + Kd * vel_error
      update_thrusters(thrust)
  }

## 16) Roadmap / Implementation milestones (3-month plan)
- Week 1–2: scaffolding Next.js + R3F scene + hero prototype (static GLTF + basic orbit).
- Week 3–4: Problem/Solution and System Overview stops; implement ScrollTrigger camera control.
- Week 5–6: ML service prototype + sample /predict_rul endpoint (mocked); telemetry format agreed.
- Week 7–8: Integrate Gazebo recorded videos; implement Impact and Market sections.
- Week 9–12: polishing, accessibility, Playwright e2e tests, CI and deployment to Vercel.

## 17) Deliverables for engineering handoff
- Repo with Next.js project skeleton and components as above.
- `docs/` (this blueprint) and `assets/` with GLTF files and videos.
- API Swagger/OpenAPI spec for inference and docking endpoints.
- Dockerfiles for model inference and ROS-WebSocket bridge.
- Example rosbag and minimal Gazebo world.

## 18) Small extras / optional features
- Live demo mode: interactive simplified docking demo powered by 2D physics (matter-js) for low-power devices.
- Telemetry replay: UI to replay recorded rosbags/stored NDJSON through the scene.
- Whitepaper PDF generator: export an annotated snapshot of the CAD with highlighted subsystem text for quick sharing.

---

If you want, I can:
- scaffold the Next.js + R3F project and add a working Hero prototype (GLTF placeholder + GSAP animation), or
- generate the OpenAPI spec and a small mocked Flask/FastAPI server for /predict_rul and /compute_thruster_vector.

Tell me which of those you'd like first and I'll scaffold it in the repo with tests and CI.
