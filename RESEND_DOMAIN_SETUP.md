# Resend Domain Setup Guide

## Current Status
✅ Using `onboarding@resend.dev` for testing (emails will work immediately)
⏳ Need to verify `sparrowg.com` for production use

## Why You're Getting This Error

Resend requires domain verification before you can send emails from your custom domain (`noreply@sparrowg.com`). This prevents spam and ensures email deliverability.

## Quick Fix (Testing Only)

The code has been updated to use `onboarding@resend.dev` which works immediately for testing. This allows you to:
- Test the contact form functionality
- Verify emails are being sent
- Check email formatting

**Limitation**: Emails from `onboarding@resend.dev` may end up in spam folders.

## Setting Up Your Custom Domain (Production)

### Step 1: Add Domain in Resend

1. Go to [Resend Domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. You'll see a prompt asking for a subdomain like `updates.example.com`

### Why a Subdomain?

Resend recommends using a subdomain for transactional emails to:
- Protect your main domain's email reputation
- Separate marketing emails from transactional emails
- Improve deliverability

**Recommended options for SparrowG**:
- `mail.sparrowg.com` (for all transactional emails)
- `contact.sparrowg.com` (specifically for contact form)
- `notifications.sparrowg.com` (if you plan other automated emails)

### Step 2: Choose Your Setup

#### Option A: Subdomain (Recommended)

1. In Resend, enter: `mail.sparrowg.com`
2. Resend will provide DNS records to add

**Your emails will be sent from**: `noreply@mail.sparrowg.com`

#### Option B: Root Domain

1. In Resend, enter: `sparrowg.com`
2. Resend will provide DNS records to add

**Your emails will be sent from**: `noreply@sparrowg.com`

### Step 3: Add DNS Records in Hostinger

After adding the domain in Resend, you'll receive DNS records to add:

1. **Login to Hostinger**
   - Go to your domain management panel
   - Select `sparrowg.com`
   - Navigate to DNS settings

2. **Add the following records** (Resend will provide exact values):

   **SPF Record (TXT)**
   ```
   Type: TXT
   Name: @ (or mail if using subdomain)
   Value: v=spf1 include:amazonses.com ~all
   TTL: 3600
   ```

   **DKIM Record (TXT)**
   ```
   Type: TXT
   Name: resend._domainkey (or resend._domainkey.mail if using subdomain)
   Value: [Long string provided by Resend]
   TTL: 3600
   ```

   **DMARC Record (TXT)** - Optional but recommended
   ```
   Type: TXT
   Name: _dmarc (or _dmarc.mail if using subdomain)
   Value: v=DMARC1; p=none; rua=mailto:support@sparrowg.com
   TTL: 3600
   ```

3. **Save the records**

### Step 4: Verify Domain

1. Return to Resend dashboard
2. Click **"Verify"** next to your domain
3. Verification usually takes 1-15 minutes (sometimes up to 48 hours for DNS propagation)

### Step 5: Update Code for Production

Once verified, update the email sender:

**If using subdomain (mail.sparrowg.com)**:
```javascript
from: 'SparrowG Contact Form <noreply@mail.sparrowg.com>',
```

**If using root domain (sparrowg.com)**:
```javascript
from: 'SparrowG Contact Form <noreply@sparrowg.com>',
```

Files to update:
- [server.js](./server.js) - Line 38
- [api/contact.ts](./api/contact.ts) - Line 56

## Example: Complete DNS Setup in Hostinger

Here's what your Hostinger DNS records should look like (using subdomain `mail.sparrowg.com`):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | [Your DigitalOcean IP] | 3600 |
| CNAME | www | sparrowg.com | 3600 |
| TXT | mail | v=spf1 include:amazonses.com ~all | 3600 |
| TXT | resend._domainkey.mail | [Resend DKIM value] | 3600 |
| TXT | _dmarc.mail | v=DMARC1; p=none; rua=mailto:support@sparrowg.com | 3600 |

## Testing After Setup

1. **Check DNS propagation**:
   ```bash
   nslookup -type=TXT resend._domainkey.mail.sparrowg.com
   ```

2. **Send a test email** from Resend dashboard

3. **Test your contact form**

4. **Check email headers** to verify SPF/DKIM are passing

## Troubleshooting

### Domain not verifying
- Wait 1-2 hours for DNS propagation
- Double-check DNS records in Hostinger
- Ensure no typos in TXT record values
- Try using Resend's "Refresh" button

### Emails still going to spam
- Ensure SPF and DKIM are verified (check Resend dashboard)
- Add DMARC record
- Build sender reputation by sending consistent, legitimate emails
- Ask recipients to mark as "Not Spam"

### Wrong DNS records
- Resend shows exact values needed
- Copy-paste carefully (especially DKIM - it's long!)
- Some DNS providers need special formatting for long TXT records

## Current Configuration

**Testing (Current)**:
- From: `onboarding@resend.dev`
- To: `support@sparrowg.com`
- Status: ✅ Working immediately

**Production (After Setup)**:
- From: `noreply@mail.sparrowg.com` (or `noreply@sparrowg.com`)
- To: `support@sparrowg.com`
- Status: ⏳ Requires domain verification

## Recommended Approach

1. **Now**: Test with `onboarding@resend.dev` to verify functionality
2. **Today**: Set up `mail.sparrowg.com` subdomain in Resend
3. **Today**: Add DNS records in Hostinger
4. **Wait 1-24 hours**: DNS verification
5. **Update code**: Change from address to `noreply@mail.sparrowg.com`
6. **Deploy**: Push to production with verified domain

## Support

- **Resend Docs**: https://resend.com/docs/dashboard/domains/introduction
- **Resend Support**: https://resend.com/support
- **DNS Help**: Contact Hostinger support if DNS changes aren't working
