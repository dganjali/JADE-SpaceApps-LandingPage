from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Optional
import numpy as np

app = FastAPI(title="JADE SpaceApps Mock API")


@app.get('/')
async def root():
    return JSONResponse({
        "message": "JADE Autonomous Satellite Servicing System API",
        "status": "operational",
        "endpoints": {
            "docs": "/docs",
            "predict_rul": "/api/v1/predict_rul",
            "dock_guidance": "/api/v1/dock_guidance"
        }
    })


class TelemetrySample(BaseModel):
    timestamp: str
    voltage: float
    current: float
    temp_c: float
    charge_cycles: int


class PredictRequest(BaseModel):
    agent_id: str
    series: List[TelemetrySample]


class PredictResponse(BaseModel):
    rul_hours: float
    failure_prob: float
    anomalies: List[dict]
    confidence: float


@app.post('/api/v1/predict_rul', response_model=PredictResponse)
async def predict_rul(req: PredictRequest):
    # Mocked logic: simple heuristic based on voltage drop and cycles
    voltages = np.array([s.voltage for s in req.series])
    cycles = req.series[-1].charge_cycles if req.series else 0
    slope = 0.0
    if len(voltages) > 1:
        slope = float(voltages[-1] - voltages[0]) / len(voltages)

    rul = max(0.0, 2000 - cycles - (slope * 1000))
    failure_prob = min(1.0, max(0.0, (-slope) * 0.1 + (cycles / 10000)))
    anomalies = []
    if np.any(voltages < 3.0):
        anomalies.append({'sensor': 'voltage', 'score': 0.9, 'explanation': 'low_voltage'})

    return PredictResponse(rul_hours=float(rul), failure_prob=float(failure_prob), anomalies=anomalies, confidence=0.85)


class DockRequest(BaseModel):
    relative_pos: List[float]
    relative_vel: Optional[List[float]] = None
    vision_lock: bool = False


class DockResponse(BaseModel):
    thruster_vector: List[float]
    alignment_state: str


@app.post('/api/v1/compute_thruster_vector', response_model=DockResponse)
async def compute_thruster(req: DockRequest):
    # Very simple PD controller mock
    kp = 0.6
    kd = 0.4
    pos = np.array(req.relative_pos)
    vel = np.array(req.relative_vel) if req.relative_vel else np.zeros_like(pos)
    thrust = (kp * pos + kd * vel).tolist()
    state = 'LOCKED' if np.linalg.norm(pos) < 0.05 else 'ADJUST'
    return DockResponse(thruster_vector=thrust, alignment_state=state)
