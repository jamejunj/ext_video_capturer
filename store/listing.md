# Chrome Web Store — Listing Content

Copy each block into the matching field in the Developer Dashboard.

---

## 1. Store listing tab

### Name
```
Video Capturer
```

### Summary (max 132 chars — also used as manifest `description`)
```
Capture the current frame of any HTML5 video on a page as a full-resolution PNG. Save or copy it to the clipboard in one click.
```

### Category
```
Tools
```
(alternative: Photos)

### Language
```
English
```

### Description (English)
```
Video Capturer grabs the exact frame you are watching from any HTML5 video and turns it into a full-resolution PNG image — no screenshots, no cropping, no player controls in the way.

HOW IT WORKS
1. Open a page with a video and pause (or play) it at the moment you want.
2. Click the Video Capturer icon.
3. Every video on the page is captured and shown as a preview.
4. Click "Save PNG" to download the image, or "Copy" to put it straight on your clipboard.

FEATURES
• Captures at the video's native resolution (e.g. 1920×1080), not your screen size
• Detects every <video> element on the page at once
• One-click download as PNG
• One-click copy to clipboard — paste directly into chat, docs, or image editors
• Shows the resolution of each capture
• Clean interface with automatic light and dark mode

PRIVACY
Video Capturer works entirely inside your browser. It does not collect, store, or send any data. Captured images exist only in the popup until you save or copy them.

LIMITATIONS
• Videos protected by DRM (e.g. Netflix, Disney+) cannot be captured — the browser blocks access to their frames.
• Some videos served from another domain without CORS headers may not be capturable.
• Reload the page after installing the extension so it can detect videos on tabs that were already open.
```

### คำอธิบาย (Thai — add via "Add localized listing" → ไทย)
```
Video Capturer จับภาพเฟรมที่คุณกำลังดูจากวิดีโอ HTML5 บนหน้าเว็บ และบันทึกเป็นไฟล์ PNG ความละเอียดเต็ม โดยไม่ต้องแคปหน้าจอหรือครอปภาพเอง

วิธีใช้
1. เปิดหน้าเว็บที่มีวิดีโอ แล้วหยุดหรือเล่นไปยังจังหวะที่ต้องการ
2. คลิกไอคอน Video Capturer
3. ระบบจะจับภาพวิดีโอทุกตัวบนหน้าและแสดงตัวอย่าง
4. กด "Save PNG" เพื่อดาวน์โหลด หรือ "Copy" เพื่อคัดลอกภาพไปยังคลิปบอร์ด

ความสามารถ
• จับภาพที่ความละเอียดจริงของวิดีโอ (เช่น 1920×1080) ไม่ใช่ขนาดหน้าจอ
• ตรวจจับวิดีโอทุกตัวบนหน้าพร้อมกัน
• ดาวน์โหลดเป็น PNG ได้ในคลิกเดียว
• คัดลอกภาพไปยังคลิปบอร์ดได้ทันที นำไปวางในแชท เอกสาร หรือโปรแกรมแต่งภาพได้เลย
• แสดงความละเอียดของภาพแต่ละภาพ
• รองรับโหมดสว่างและโหมดมืดอัตโนมัติ

ความเป็นส่วนตัว
ส่วนขยายทำงานภายในเบราว์เซอร์ทั้งหมด ไม่เก็บ ไม่บันทึก และไม่ส่งข้อมูลใด ๆ ออกไป

ข้อจำกัด
• ไม่สามารถจับภาพวิดีโอที่มีการป้องกัน DRM (เช่น Netflix, Disney+)
• วิดีโอบางตัวที่โหลดจากโดเมนอื่นโดยไม่มี CORS อาจจับภาพไม่ได้
• หลังติดตั้ง ให้รีโหลดหน้าเว็บที่เปิดค้างไว้ก่อนใช้งาน
```

### Graphic assets (must be prepared)
| Asset | Size | Required |
|---|---|---|
| Store icon | 128×128 PNG | Yes |
| Screenshot | 1280×800 or 640×400 (1–5 images) | Yes, at least 1 |
| Small promo tile | 440×280 | Optional (recommended) |
| Marquee promo tile | 1400×560 | Optional |

Suggested screenshots:
1. Popup open on a video page showing a capture with "Copy" and "Save PNG"
2. Popup showing multiple videos captured at once
3. Empty state ("No video was found on this page") in dark mode

---

## 2. Privacy practices tab

### Single purpose description
```
Video Capturer has a single purpose: to capture the currently displayed frame of HTML5 video elements on the active web page and let the user save or copy that frame as a PNG image.
```

### Permission justification — Host permission (content script on `<all_urls>`)
```
The extension injects a content script on all pages so that, when the user clicks the extension icon, it can find <video> elements on whatever site the user is currently viewing and draw the current frame onto a canvas to produce a PNG. Videos can appear on any website, so the extension cannot know in advance which domains to request. The script does nothing until the user opens the popup, does not read or modify page content other than <video> elements, and sends no data anywhere outside the browser.
```

### Remote code
```
No, I am not using remote code.
```
Justification (if asked):
```
All JavaScript is packaged inside the extension. No external scripts, eval, or remotely hosted code are used.
```

### Data usage — check NONE of the data categories
- [ ] Personally identifiable information
- [ ] Health information
- [ ] Financial and payment information
- [ ] Authentication information
- [ ] Personal communications
- [ ] Location
- [ ] Web history
- [ ] User activity
- [ ] Website content

Then tick all three certifications:
- [x] I do not sell or transfer user data to third parties, outside of the approved use cases
- [x] I do not use or transfer user data for purposes that are unrelated to my item's single purpose
- [x] I do not use or transfer user data to determine creditworthiness or for lending purposes

### Privacy policy URL
Not strictly required when no user data is collected, but recommended. Host the text below (e.g. GitHub Pages / Gist) and paste the URL.

```
Privacy Policy — Video Capturer

Last updated: October 15, 2026

Video Capturer does not collect, store, transmit, or share any personal data or browsing information.

When you click the extension icon, it reads the current frame of video elements on the active tab and displays it in the extension popup. This processing happens entirely on your device. Captured images are never uploaded; they are only saved to your computer or copied to your clipboard when you explicitly choose to do so.

The extension does not use cookies, analytics, tracking, or any third-party services.

Contact: jame.jpwn@gmail.com
```

---

## 3. Distribution tab
- Visibility: **Public** (or **Unlisted** for testing first)
- Regions: **All regions**
- Pricing: **Free**

---

## 4. Account tab (one-time)
- Contact email: verify it in the dashboard
- Publisher display name: (your name or brand)
