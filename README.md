# Wedding Website

A minimalistic wedding website I built for my own wedding celebration. Feel free to fork it and adapt it for yours!

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for scroll animations
- **Google Sheets** as a backend for RSVP responses (via Google Apps Script)

## Sections

- **Hero** — Event title, date, and location
- **Schedule** — Timeline of the day's events
- **Accommodation** — Lodging info for guests
- **Gift Registry** — Registry link (placeholder)
- **RSVP** — Form with invitation code protection, connected to Google Sheets
- **FAQ** — Venue, time, dress code details with a map link

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_GOOGLE_SCRIPT_URL=your_google_apps_script_url
VITE_RSVP_CODE=your_invitation_code
```

- `VITE_GOOGLE_SCRIPT_URL` — The deployed Google Apps Script web app URL that receives RSVP form submissions and writes them to a Google Sheet.
- `VITE_RSVP_CODE` — A code guests must enter to submit the RSVP form (prevents random submissions).

## Google Sheets Setup

1. Create a Google Sheet with columns: `Timestamp`, `Name`, `Email`, `Attending`, `Guests`, `Message`
2. Go to **Extensions > Apps Script** and add:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.attending,
    data.guests,
    data.message
  ]);
  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy as a **Web app** (access: Anyone) and copy the URL into your `.env`.

## Deploying to Vercel

1. Import the repo on [vercel.com](https://vercel.com)
2. Framework preset: **Vite**
3. Add both environment variables (`VITE_GOOGLE_SCRIPT_URL`, `VITE_RSVP_CODE`)
4. Deploy

## Customizing for Your Wedding

- Update names, date, and location in `src/components/wedding/HeroSection.tsx`
- Update schedule times in `src/components/wedding/ScheduleSection.tsx`
- Update FAQ content in `src/components/wedding/FAQSection.tsx`
- Replace images in `src/assets/`
- Change the color palette in `src/index.css` (CSS custom properties)
- Change fonts in `tailwind.config.ts`

## Design

- Warm ivory/cream and gold color palette
- Cormorant Garamond script font for headings
- Raleway for body text
- Botanical line-art florals throughout
- Alternating cream/gold section backgrounds
- Smooth scroll-triggered animations
