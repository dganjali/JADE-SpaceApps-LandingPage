from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_predict_rul_empty_series():
    resp = client.post('/api/v1/predict_rul', json={'agent_id': 'r1', 'series': []})
    assert resp.status_code == 200
    body = resp.json()
    assert 'rul_hours' in body


def test_compute_thruster():
    resp = client.post('/api/v1/compute_thruster_vector', json={'relative_pos': [0.1, 0.0, 0.0], 'relative_vel': [0.0, 0.0, 0.0]})
    assert resp.status_code == 200
    body = resp.json()
    assert 'thruster_vector' in body
