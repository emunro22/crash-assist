# Crash Assist Recovery — Setup Guide

## Push to GitHub

The git repo is initialized and committed. To push to GitHub:

**Option A — GitHub CLI (recommended):**
```bash
cd crash-assist-recovery
gh auth login          # authenticate once
gh repo create crash-assist-recovery --public --source=. --remote=origin --push
```

**Option B — Manual:**
1. Go to https://github.com/new
2. Create a public repo named `crash-assist-recovery`
3. Then run:
```bash
cd crash-assist-recovery
git push -u origin main
```

---

## Environment Variables

Set these in Vercel → Project Settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `ADMIN_PASSWORD` | Your chosen admin portal password |
| `ADMIN_SESSION_SECRET` | Random 32+ char string for token signing |
| `RESEND_API_KEY` | From resend.com dashboard |
| `RESEND_FROM_EMAIL` | Verified sender email (e.g. noreply@crashassistrecovery.co.uk) |
| `WHATSAPP_ACCESS_TOKEN` | Meta/WhatsApp Business API token (optional) |
| `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp Business phone number ID (optional) |
| `WHATSAPP_APP_SECRET` | Webhook signature secret (optional) |
| `WHATSAPP_WEBHOOK_VERIFY_TOKEN` | Webhook verification token (optional) |

---

## Local Development

```bash
cd crash-assist-recovery
npm install
cp .env.example .env.local
# Fill in .env.local with your values
npm run dev
```

---

## Deploy to Vercel

```bash
vercel --prod
```
Or connect the GitHub repo in the Vercel dashboard for automatic deployments.

---

## Admin Portal

Visit `/admin` and enter the `ADMIN_PASSWORD` you configured.

From the admin dashboard:
- **Blog tab** → Click "🌱 Seed 22 Posts" to populate all blog posts
- **Gallery tab** → Upload your work photos
- **Customers tab** → Track jobs and send WhatsApp review requests

---

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v3 + Framer Motion
- **Database**: Neon PostgreSQL (serverless)
- **Email**: Resend
- **Storage**: Vercel Blob (for images)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel
