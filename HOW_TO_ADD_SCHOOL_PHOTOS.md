# How to Add Your School Photos - Quick Guide

## Step-by-Step Instructions

### 1. Locate the Images Folder

Navigate to this folder on your computer:
```
icon_for_change_website/public/images/schools/kontoh/
```

**Full path**: `/home/appiah/Documents/projects/Icon For Change/icon_for_change_website/public/images/schools/kontoh/`

---

### 2. Prepare Your Photos

You need **7 photos** of Kontoh Educational Complex:

| Photo | Description | Where It Appears |
|-------|-------------|------------------|
| **main.jpg** | Main school building or campus | Home page featured section & Schools page hero |
| **building.jpg** | School exterior | Schools page gallery |
| **students.jpg** | Students learning/activities | Schools page gallery |
| **classroom.jpg** | Inside a classroom | Schools page gallery |
| **playground.jpg** | Sports/play area | Schools page gallery |
| **library.jpg** | Library or study area | Schools page gallery |
| **activities.jpg** | School events/programs | Schools page gallery |

---

### 3. Photo Requirements

**Format**: JPG or JPEG
**Size**: 1200px - 1920px wide (landscape orientation preferred)
**File Size**: Under 2MB each
**Quality**: Clear, well-lit photos

---

### 4. Copy Photos to Folder

**Option A: Using File Manager (Graphical)**
1. Open your file manager
2. Navigate to: `/home/appiah/Documents/projects/Icon For Change/icon_for_change_website/public/images/schools/kontoh/`
3. Copy your 7 photos into this folder
4. Rename them to match the names above (main.jpg, building.jpg, etc.)

**Option B: Using Terminal**
```bash
# Navigate to the images directory
cd "/home/appiah/Documents/projects/Icon For Change/icon_for_change_website/public/images/schools/kontoh/"

# Copy your photos here (replace /path/to/your/photos with actual path)
cp /path/to/your/photos/school_main_photo.jpg ./main.jpg
cp /path/to/your/photos/school_building.jpg ./building.jpg
cp /path/to/your/photos/school_students.jpg ./students.jpg
cp /path/to/your/photos/school_classroom.jpg ./classroom.jpg
cp /path/to/your/photos/school_playground.jpg ./playground.jpg
cp /path/to/your/photos/school_library.jpg ./library.jpg
cp /path/to/your/photos/school_activities.jpg ./activities.jpg
```

---

### 5. Verify Photos Are Added

Run this command to check:
```bash
cd "/home/appiah/Documents/projects/Icon For Change/icon_for_change_website/public/images/schools/kontoh/"
ls -lh
```

You should see:
```
main.jpg
building.jpg
students.jpg
classroom.jpg
playground.jpg
library.jpg
activities.jpg
README.md
.gitkeep
```

---

### 6. Test the Website

**Start Development Server:**
```bash
cd "/home/appiah/Documents/projects/Icon For Change/icon_for_change_website"
npm run dev
```

**Open Browser:**
- Home page: http://localhost:5173
- Schools page: http://localhost:5173/schools

**Check:**
- Scroll down home page to "Our School" section - main.jpg should appear
- Click "Schools" in navigation or "Learn More" button
- All 7 photos should display on the schools page

---

### 7. If Images Don't Show

**Checklist:**
- [ ] Photos are in correct folder: `/public/images/schools/kontoh/`
- [ ] File names are EXACTLY: main.jpg, building.jpg, students.jpg, etc. (lowercase, .jpg extension)
- [ ] Photos are JPG/JPEG format (not PNG, not .JPG with uppercase)
- [ ] Photos are not corrupted (can open them in image viewer)
- [ ] Cleared browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Development server is running

**Still not working?**
The website has fallback images, so it won't break. But to fix:
1. Check file names match EXACTLY (Linux is case-sensitive!)
2. Try renaming: `mv Main.jpg main.jpg` (if accidentally uppercase)
3. Check file permissions: `chmod 644 *.jpg`

---

## Example: Adding Photos Step-by-Step

Let's say your school photos are on your Desktop in a folder called "Kontoh_Photos":

```bash
# 1. Navigate to school images folder
cd "/home/appiah/Documents/projects/Icon For Change/icon_for_change_website/public/images/schools/kontoh/"

# 2. Copy and rename your photos
cp ~/Desktop/Kontoh_Photos/IMG001.jpg ./main.jpg
cp ~/Desktop/Kontoh_Photos/IMG002.jpg ./building.jpg
cp ~/Desktop/Kontoh_Photos/IMG003.jpg ./students.jpg
cp ~/Desktop/Kontoh_Photos/IMG004.jpg ./classroom.jpg
cp ~/Desktop/Kontoh_Photos/IMG005.jpg ./playground.jpg
cp ~/Desktop/Kontoh_Photos/IMG006.jpg ./library.jpg
cp ~/Desktop/Kontoh_Photos/IMG007.jpg ./activities.jpg

# 3. Verify files
ls -lh

# 4. Go back to project root and start server
cd "/home/appiah/Documents/projects/Icon For Change/icon_for_change_website"
npm run dev
```

---

## Privacy Reminder

Before uploading photos with students:
- ✅ Obtain written consent from parents/guardians
- ✅ Consider blurring faces if you don't have consent forms
- ✅ Avoid capturing names, addresses, or personal info
- ✅ Focus on activities and the learning environment

---

## Quick Tips

### Optimizing Large Photos:
If your photos are too large (over 2MB), compress them:

**Online Tools:**
- https://tinyjpg.com
- https://squoosh.app
- https://compressor.io

**Linux Command Line:**
```bash
# Install imagemagick if not installed
sudo apt install imagemagick

# Resize and compress a photo
convert input.jpg -resize 1920x1080 -quality 85 output.jpg
```

### Taking Good School Photos:
- **Lighting**: Natural light works best - take photos during daytime
- **Angle**: Capture wide shots showing the full building/area
- **Focus**: Ensure photos aren't blurry
- **Composition**: Show activity and engagement, not just empty rooms
- **Variety**: Mix of indoor/outdoor, students/facilities, learning/playing

---

## What Happens Next?

Once photos are added:
1. **Home Page** will display main.jpg in the "Our School" featured section
2. **Schools Page** (`/schools`) will show a beautiful gallery with all 7 photos
3. Visitors can click "Learn More" to see full school details
4. Visitors can click "Support the School" to donate

---

## Need Help?

If you're stuck:
1. Read the detailed guide: `/public/images/schools/kontoh/README.md`
2. Check the summary: `SCHOOL_INTEGRATION_SUMMARY.md` in project root
3. Ensure photos meet requirements (JPG, under 2MB, good quality)
4. Try clearing browser cache
5. Restart development server

---

**That's it! Your school will now be beautifully showcased on your NGO website! 🎓📚**