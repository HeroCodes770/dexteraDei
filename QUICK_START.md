# 🚀 Quick Start - Tracking Setup

## Step 1: Get Your Tracking IDs

### Essential (Start Here):
1. **Google Analytics 4** → [analytics.google.com](https://analytics.google.com)
   - Get ID: `G-XXXXXXXXXX`
   
2. **Facebook Pixel** → [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
   - Get ID: `1234567890123456`

### Optional (Add Later):
3. **Microsoft Clarity** (Free heatmaps) → [clarity.microsoft.com](https://clarity.microsoft.com)
4. **LinkedIn Pixel** → [linkedin.com/campaignmanager](https://www.linkedin.com/campaignmanager)
5. **Twitter Pixel** → [ads.twitter.com](https://ads.twitter.com)
6. **Hotjar** → [hotjar.com](https://www.hotjar.com)

---

## Step 2: Update Configuration File

Open `js/tracking-config.js` and replace the placeholder IDs:

```javascript
window.TrackingConfig = {
  GA4_MEASUREMENT_ID: 'G-YOUR-ACTUAL-ID-HERE',        // ← Replace this
  FACEBOOK_PIXEL_ID: 'YOUR-PIXEL-ID-HERE',            // ← Replace this
  // ... add others as you get them
};
```

---

## Step 3: Test It Works

1. Open your website
2. Press `F12` (open Developer Tools)
3. Go to **Console** tab
4. Look for: "GA4 not configured" or "Facebook Pixel not configured"
5. If you see warnings, your IDs aren't set yet (that's OK)
6. If no errors, tracking is working!

---

## Step 4: View Your Data

### Google Analytics:
- **Real-time visitors**: [analytics.google.com](https://analytics.google.com) → Reports → Realtime
- **All analytics**: Reports → Engagement → Overview

### Facebook:
- **Website visitors**: [business.facebook.com/events_manager](https://business.facebook.com/events_manager) → Your Pixel → Overview

---

## 📊 What You Can Track

✅ **Who visits** - Demographics, location, device  
✅ **How they find you** - Google, Facebook, direct, etc.  
✅ **What they do** - Pages viewed, clicks, scroll depth  
✅ **When they convert** - Form submissions, phone clicks  
✅ **Where they struggle** - Heatmaps, session recordings  

---

## ⚡ Need Help?

See the full guide: `TRACKING_SETUP_GUIDE.md`

---

**That's it! Once you add your IDs, tracking starts automatically.** 🎉

