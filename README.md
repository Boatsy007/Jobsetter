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

## Current pilot operating model

The website currently states:

- 14-day JobSetter Revenue Recovery Pilot
- $0 JobSetter pilot service fee
- no automatic rollover to paid service
- up to 20 eligible new enquiries during the pilot
- up to 15 open quotes selected for recovery
- up to 25 reactivation contacts
- standard coverage Monday-Friday, 8am-6pm in the client's local business time
- new leads: up to 5 contact attempts across up to 5 business days
- open quotes: up to 4 follow-up attempts during the pilot
- reactivation contacts: up to 3 attempts during the pilot
- ongoing standard plan: $2,490 + GST/month
- ongoing standard volume: up to 80 new enquiries, 40 quote-follow-up records and 100 reactivation contacts/month
- ongoing service is month-to-month

Strong pilot fit is currently defined in the lead scoring logic as:

- 30+ new enquiries/month OR $25,000+ of open quotes suitable for follow-up
- average job value around $750+
- capacity to accept more work in the next 30 days

Keep these statements aligned with the actual client agreement before accepting pilots.

## CRM timing

HubSpot is optional at launch. The site can operate with a lead webhook or Resend notification first, then move to HubSpot after the production website/domain setup is ready.

## Calendly booking

The website is ready for Calendly. Add the public scheduling URL in Vercel:

```
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/...
```

Strong-fit leads are saved first, then sent to Calendly with name/email prefilled. Configure the Calendly event's post-booking redirect to:

```
https://YOUR-PRODUCTION-DOMAIN/pilot-confirmed
```

That page fires the `Pilot Call Booked` analytics event.
