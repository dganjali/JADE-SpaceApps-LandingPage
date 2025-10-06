# Media Files Guide

## 📁 Where to Put Your Media Files

Place your media files in the appropriate folders below. The website will automatically load them from these locations.

---

## 📊 **Predictive Maintenance Section**
**Location:** `/public/images/`

### Files needed:
1. **`rul-timeline.png`** or **`rul-timeline.jpg`**
   - Remaining Useful Life (RUL) timeline graph
   - Shows predictive maintenance timeline visualization

2. **`health-status.png`** or **`health-status.jpg`**
   - Health status chart/dashboard
   - Shows satellite component health indicators

---

## 🎥 **Navigation & Docking Section**
**Location:** `/public/videos/`

### Files needed:
1. **`gazebo.mp4`** ✅ (you have this!)
   - Gazebo simulation video showing autonomous navigation
   - Should demonstrate GPS/IMU navigation

2. **`yolo-detection.mp4`** or **`yolo-detection.webm`**
   - YOLO computer vision detection video
   - Should show satellite detection and tracking

---

## 🦾 **Robotic Arms Section**
**Location:** `/public/videos/`

### Files needed:
1. **`arm-gripping.mp4`** or **`arm-gripping.webm`**
   - Robotic arm gripping demonstration
   - Shows the arm grabbing and holding objects

2. **`tool-operation.mp4`** or **`tool-operation.webm`**
   - Tool operation demo (spinning screwdriver, etc.)
   - Shows the arm using tools for repairs

---

## 📝 File Naming Convention

**Images:** Use lowercase with hyphens
- ✅ `rul-timeline.png`
- ✅ `health-status.jpg`
- ❌ `RUL_Timeline.PNG`
- ❌ `Health Status.jpg`

**Videos:** Use lowercase with hyphens
- ✅ `gazebo-simulation.mp4`
- ✅ `yolo-detection.webm`
- ❌ `Gazebo_Simulation.MP4`
- ❌ `YOLO Detection.mov`

---

## 🎬 Supported Formats

### Images:
- `.png` (recommended for charts/graphs)
- `.jpg` / `.jpeg` (recommended for photos)
- `.webp` (for optimized web delivery)

### Videos:
- `.mp4` (recommended - best browser support)
- `.webm` (good compression, modern browsers)
- **Note:** Keep videos under 50MB for best performance

---

## 🔗 How Files Are Referenced

Once you place files in the folders, they're automatically available at:

- **Images:** `/images/your-file-name.png`
- **Videos:** `/videos/your-file-name.mp4`

Example:
```
/public/images/rul-timeline.png  →  Accessible at /images/rul-timeline.png
/public/videos/gazebo-simulation.mp4  →  Accessible at /videos/gazebo-simulation.mp4
```

---

## ✅ Quick Checklist

- [ ] `rul-timeline.png` → `/public/images/`
- [ ] `health-status.png` → `/public/images/`
- [ ] `gazebo-simulation.mp4` → `/public/videos/`
- [ ] `yolo-detection.mp4` → `/public/videos/`
- [ ] `arm-gripping.mp4` → `/public/videos/`
- [ ] `tool-operation.mp4` → `/public/videos/`

---

## 🚀 After Adding Files

1. Place your files in the appropriate folders
2. Make sure file names match exactly (lowercase, hyphens)
3. The website will automatically load them - no code changes needed!
4. If running dev server, it should hot-reload automatically
5. If files don't appear, restart the dev server: `npm run dev`

---

## 💡 Tips

- **Optimize images** before uploading (compress large files)
- **Keep videos short** (30 seconds or less for demos)
- **Use descriptive names** so you remember what each file is
- **Test locally** before deploying to Vercel
