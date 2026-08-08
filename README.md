<div align="center">

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white" />

</div>

<br />

<div align="center">
  <h1>🛕 Sri Vana Venu Gopala Swamy Temple</h1>
  <p><strong>Official Website — Devaragudipalle, Chittoor District, Andhra Pradesh</strong></p>
  <p>A production-quality, fully responsive temple website built with React + Vite.</p>
</div>

---

## 🌟 Live Preview

> Open `index.html` after building, or run locally with `npm run dev`.

---

## 📖 About the Temple

The **Sri Vana Venu Gopala Swamy Temple** is a sacred shrine located at **Devaragudipalle**, near Penumuru in the **Chittoor district of Andhra Pradesh**.

- 📍 **Address:** 9772+GFV, Devaragudipalle, Andhra Pradesh 517167
- ⏰ **Opening Hours:** Every **Saturday, 9:00 AM – 3:00 PM**
- 🙏 **Weekly Ritual:** Pala Abhishekam & Annadanam (free meals) for all visitors every Saturday
- ✨ **Legend:** The main deity is believed to have manifested from a sacred stone that grows over time — a phenomenon that, by local tradition, gave the village its name *Devaragudipalle*

---

## ✨ Website Features

| Section | Description |
|---|---|
| 🏠 **Hero Banner** | Full-screen temple hero image with gold/maroon TTD-style design |
| 📋 **Quick Info Cards** | Timings, address, contact at a glance |
| 📖 **About Section** | Temple history, legend, and beliefs |
| 🕯️ **Timings & Poojas** | Detailed pooja schedule and special event list |
| 🖼️ **Gallery** | 8 real temple photos with lightbox and navigation |
| 📤 **Community Upload** | Devotees can upload photos/videos and submit via WhatsApp |
| 💰 **Donations** | Contact card with Call & WhatsApp for donations (bank details coming soon) |
| 📍 **Location** | Embedded Google Maps + full address details |
| 📢 **Announcements Ticker** | Scrolling info bar for Saturday timings and events |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### 1. Clone the Repository

```bash
git clone https://github.com/purushotham-24/Sri-Vana-Venu-Gopala-Swamy.git
cd Sri-Vana-Venu-Gopala-Swamy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open your browser at: **http://localhost:5173**

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

### 5. Preview the Production Build

```bash
npm run preview
```

---

## 🗂️ Project Structure

```
sri-vana-venu-gopala-swamy-temple/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                  # Temple images (temple-1.jpg ... temple-8.jpg)
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation with mobile hamburger
│   │   ├── Hero.jsx             # Full-screen hero section
│   │   ├── QuickInfo.jsx        # Info cards (timings, location, contact)
│   │   ├── About.jsx            # Temple history and legend
│   │   ├── Timings.jsx          # Pooja schedule and special events
│   │   ├── Gallery.jsx          # Photo gallery + community upload section
│   │   ├── Donations.jsx        # Donation contact section
│   │   ├── Location.jsx         # Google Maps embed + address
│   │   └── Footer.jsx           # Footer with links and credits
│   ├── config/
│   │   └── templeData.js        # ⚙️ All temple data (name, timings, contact, etc.)
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React entry point
│   └── styles.css               # Global CSS (maroon + gold TTD-style theme)
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Customization

All temple-specific data is centralized in one file:

**`src/config/templeData.js`**

Edit this file to update:
- Temple name, location, address
- Opening hours and pooja timings
- Phone numbers and WhatsApp links
- Donation contact details
- Announcement ticker messages

---

## 🎨 Design System

The website uses a **TTD-inspired heritage design** with:

| Token | Value |
|---|---|
| Primary Color | `#5C1523` (Maroon) |
| Accent Color | `#C5A059` (Gold) |
| Background | `#FDFBF7` (Cream) |
| Font (Headings) | Playfair Display (serif) |
| Font (Body) | Inter (sans-serif) |

---

## 📞 Contact

For donations, queries, or photo submissions:

- 📱 **Phone / WhatsApp:** +91 94415 51500
- 🗺️ **Location:** Devaragudipalle, Chittoor District, AP 517167
- ⏰ **Temple Hours:** Saturdays 9:00 AM – 3:00 PM

---

## 🙏 Acknowledgements

- Deity photography by local devotees
- Built with ❤️ for the devotee community of Sri Vana Venu Gopala Swamy

---

<div align="center">
  <sub>🛕 May Lord Sri Vana Venu Gopala Swamy bless all devotees 🙏</sub>
</div>
