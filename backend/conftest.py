import sys
from pathlib import Path

# Ensure backend/ (this file's parent) is on sys.path so tests can import `app`.
root = Path(__file__).resolve().parent
if str(root) not in sys.path:
    sys.path.insert(0, str(root))
