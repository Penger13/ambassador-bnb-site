# Ambassador B&B and Inn Next Door

A cozy Victorian bed & breakfast website for Ambassador B&B and the Inn Next Door in Stratford, Ontario.

## Live Site

[https://ambassadorbbstratford.com](https://ambassadorbbstratford.com)

## Features

- **8 room pages** — 4 B&B guest rooms and 4 Inn suites
- **Click-to-rotate image galleries** on every room page
- **Breakfast gallery** with 7 rotating photos
- **Common sitting areas gallery**
- **Theatre gallery** featuring all four Stratford Festival venues
- **Rotating guest reviews** with real testimonials from Booking.com, Google, and Expedia
- **Online booking integration** via GuestServe
- **Restaurant recommendations** with direct links
- **Policies page** with cancellation, smoking, pets, and check-in details
- **Fully responsive** design for mobile, tablet, and desktop

## Tech Stack

- HTML5
- CSS3 (custom, with CSS variables)
- JavaScript (vanilla, no frameworks)
- Hosted on **Cloudflare Pages**
- DNS managed via **Cloudflare**

## File Structure
/
├── index.html (homepage)
├── policies.html (policies page)
├── style.css (all site styles)
├── script.js (mobile menu, galleries, review rotator)
├── room-yellow.html (B&B Room 1)
├── room-blue-2.html (B&B Room 2)
├── room-blue-3.html (B&B Room 3)
├── room-green.html (B&B Room 4)
├── room-luxury-suite.html (Inn Suite 1)
├── room-deluxe-suite.html (Inn Suite 2)
├── room-premium-suite.html (Inn Suite 3)
├── room-king-suite.html (Inn Suite 4)
└── images/ (all photos and graphics)

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Or use **VS Code Live Server** for a local server with auto-refresh

No build step, no dependencies — just open the files and edit.

## Deployment

The site is hosted on **Cloudflare Pages** and deployed automatically on every push to the `main` branch.

**Workflow:**
1. Make changes locally
2. `git add . && git commit -m "description" && git push`
3. Cloudflare auto-deploys in ~30 seconds

## DNS & Domain

- **Domain:** `ambassadorbbstratford.com`
- **Registrar:** IONOS (domain registration only)
- **Nameservers:** Cloudflare (`jack.ns.cloudflare.com`, `alice.ns.cloudflare.com`)
- **Hosting:** Cloudflare Pages
- **SSL:** Automatic via Cloudflare

## Image Guidelines

- Use **lowercase filenames** with hyphens (e.g., `room-yellow-1.jpg`)
- **Lowercase extensions** (`.jpg`, not `.JPG`) — Cloudflare is case-sensitive
- Keep photos under 500 KB for fast loading
- Recommended resolution: 1920×1080 for hero images, 800×600 for cards

## License & Trademark Notice

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

**Trademark Notice:**
"Ambassador B&B", "Ambassador's Inn Next Door", and all related names, logos, designs, and slogans are **registered trademarks** of Ambassador B&B and Inn Next Door, established since 2014. These marks may not be used without explicit written permission.

**What you CAN do:**
- ✅ Use the code as a reference for learning
- ✅ Adapt the code logic for your own projects
- ✅ Build similar websites using the code patterns

**What you CANNOT do:**
- ❌ Use the "Ambassador B&B" name or branding
- ❌ Copy the exact design, images, or photographs
- ❌ Claim this work as your own
- ❌ Use the code for commercial purposes without attribution

For permission requests, please contact: pengfuyang@gmail.com