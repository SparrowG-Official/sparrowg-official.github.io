# Quick Setup Guide

This guide will help you set up the SparrowG Learning website with contact form functionality.

## Contact Information

The website includes the following contact details:
- **Email**: support@sparrowg.com
- **Phone**: (949) 301-7356
- **Address**: 123 Innovation Street, Tech City, TC 12345

Form submissions will be sent to: **support@sparrowg.com**

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your Resend API key:

```env
RESEND_API_KEY=re_your_api_key_here
```

To get a Resend API key:
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy and paste it into your `.env` file

**Note**: The code currently uses `onboarding@resend.dev` for testing, which works immediately. To send from your custom domain (`sparrowg.com`), see [RESEND_DOMAIN_SETUP.md](./RESEND_DOMAIN_SETUP.md).

### 3. Run Development Server

For frontend only (without email functionality):
```bash
npm run dev
```

For full application with email functionality:

**Option A: Build first, then run server**
```bash
npm run build
npm start
```

**Option B: Dev mode with hot reload**
```bash
# Terminal 1 - Run Vite dev server
npm run dev

# Terminal 2 - Run backend server
npm run server:dev
```

The application will be available at:
- Frontend: http://localhost:5173 (Vite dev)
- Full app with backend: http://localhost:3000

## Testing the Contact Form

1. Navigate to the contact section on the homepage
2. Fill out the form:
   - Select user type (Parent, School/Teacher, or Corporate)
   - Enter your name and email
   - Optionally add phone number
   - Enter subject and message
3. Click "Send Message"
4. Check `support@sparrowg.com` for the email

## Project Structure

```
sparrowg-learning-takes-flight/
├── src/
│   ├── components/
│   │   ├── ContactSection.tsx    # Contact form component
│   │   └── ...
│   └── pages/
│       └── Index.tsx              # Main page (includes ContactSection)
├── api/
│   ├── contact.ts                 # Serverless function (DigitalOcean/Vercel)
│   └── package.json
├── server.js                      # Express server (alternative deployment)
├── .env.example                   # Environment variables template
├── DEPLOYMENT.md                  # Detailed deployment guide
└── package.json
```

## Deployment Options

### Option 1: DigitalOcean App Platform (Recommended)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick steps:
1. Connect your GitHub repository
2. Configure build settings
3. Add `RESEND_API_KEY` environment variable
4. Deploy

### Option 2: Traditional Server (Droplet)

1. Set up DigitalOcean Droplet
2. Install Node.js 20+
3. Clone repository
4. Set up environment variables
5. Build and run:
   ```bash
   npm install
   npm run build
   npm start
   ```

### Option 3: Vercel

The API is compatible with Vercel serverless functions:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Add `RESEND_API_KEY` in Vercel dashboard
4. Deploy

## Environment Variables

### Required

- `RESEND_API_KEY` - Your Resend API key for sending emails

### Optional

- `PORT` - Server port (default: 3000)

## Domain Configuration

Since your domain is registered with **Hostinger** but the site is hosted on **DigitalOcean**:

1. **DNS Management**: Keep DNS management in Hostinger
2. **Point to DigitalOcean**: Add A record pointing to DigitalOcean IP
3. **Email Sending**: Configure Resend DNS records in Hostinger

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed DNS configuration.

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify API endpoint is accessible (check Network tab)
- Ensure `RESEND_API_KEY` is set correctly

### Emails not being sent
- Verify Resend API key is valid
- Check Resend dashboard for errors
- Verify domain is verified in Resend (for production)

### CORS errors
- Ensure you're running the backend server
- Check that API endpoint matches your domain
- Verify CORS headers in API handler

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Update dependencies: `npm update`

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start Express server (requires build first)
- `npm run server:dev` - Start Express server with hot reload
- `npm run lint` - Run ESLint

## Support

For questions or issues:
- Email: support@sparrowg.com
- Phone: (949) 301-7356
- Documentation: [DEPLOYMENT.md](./DEPLOYMENT.md)

## Next Steps

1. ✅ Contact form is ready
2. Set up Resend account
3. Configure domain DNS
4. Deploy to DigitalOcean
5. Test contact form in production
6. Monitor email delivery in Resend dashboard
