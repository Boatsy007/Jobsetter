# JobSetter

Next.js marketing and lead-capture site for JobSetter.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production setup

The pilot form now saves the lead **before** opening any booking calendar. Configure at least one persistence method in Vercel Project Settings → Environment Variables.

### Lead persistence

Recommended:

```
LEAD_WEBHOOK_URL=https://your-crm-or-automation-webhook
```

The API posts a JSON payload containing the contact details, qualification fields, UTM data and Revenue Leak Audit result.

Alternatively, notifications can be delivered through Resend:

```
RESEND_API_KEY=...
RESEND_FROM_EMAIL=JobSetter Leads <leads@your-verified-domain.com>
LEAD_NOTIFICATION_EMAIL=hello@jobsetter.com.au
```

The form intentionally returns an error if no lead persistence destination is configured. This prevents the website from pretending a lead was captured when it was not.

### Live booking

To send a successfully saved lead into a live calendar:

```
NEXT_PUBLIC_BOOKING_URL=https://your-booking-page
```

The lead is saved first. Only after a successful save does the browser continue to the booking page.

### Analytics

The site includes `@vercel/analytics` page-view tracking and funnel events. Enable **Web Analytics** in the Vercel project dashboard.

Tracked funnel events include:

- Diagnostic Started
- Diagnostic Completed
- Journey Viewed
- Nav Click
- Pilot CTA
- Pilot Form Validation Error
- Pilot Lead Saved
- Booking Opened

No contact PII is sent in custom analytics events.

### Founder video

Optional:

```
NEXT_PUBLIC_FOUNDER_VIDEO_URL=https://...
```

Without a video URL, the page shows the real founder identity and a reserved video slot.

### Real call demo

Only add a call recording after obtaining the required consent and appropriately removing customer-identifying information.

```
NEXT_PUBLIC_CALL_DEMO_URL=https://...
```

The call-demo section is completely hidden until that environment variable exists.

## First verified case study

The homepage is ready to surface the first real case study near the top of the funnel.

Update:

```
app/data/caseStudy.js
```

Set `published: true` only after the client metrics and any quote have been verified and permission to publish has been obtained.

## Current pilot terms

The homepage currently states:

- 14-day JobSetter Revenue Recovery Pilot
- $0 JobSetter pilot service fee
- ongoing pricing agreed before the pilot begins
- no automatic rollover to paid service
- ongoing service begins only if the client chooses to continue after Day 14
- continuing service is cancel-anytime

Keep these statements aligned with the actual client agreement before accepting pilots.
