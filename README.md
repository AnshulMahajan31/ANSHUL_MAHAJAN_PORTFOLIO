# Engineering Portfolio - Production Deployment Guide

## 1. Overview
This project is a high-performance static website built with HTML5, CSS3, and JavaScript. It is optimized for speed, accessibility, and responsiveness. This guide covers the deployment process for production environments.

## 2. Infrastructure & Hosting
We recommend **Vercel** or **Netlify** for hosting this static site. These platforms provide:
- Global CDN (Content Delivery Network)
- Automatic SSL (HTTPS)
- DDoS Protection
- Continuous Deployment via Git

### Prerequisites
- A GitHub/GitLab/Bitbucket account
- A Vercel or Netlify account
- A registered domain name (optional, but recommended)

## 3. Deployment Steps (Automated via Vercel)

1.  **Push Code to GitHub**:
    Ensure all files (including `vercel.json` and `robots.txt`) are committed to your repository.
    ```bash
    git add .
    git commit -m "Prepare for production deployment"
    git push origin main
    ```

2.  **Connect to Vercel**:
    - Log in to Vercel Dashboard.
    - Click "Add New..." -> "Project".
    - Import your GitHub repository.
    - **Framework Preset**: Select "Other" (or leave as detected).
    - **Root Directory**: Ensure it points to `main portfolio` (or wherever `main.html` resides).
    - Click **Deploy**.

3.  **Domain Configuration**:
    - Go to Vercel Project Settings -> Domains.
    - Add your custom domain (e.g., `www.yourname.com`).
    - Follow the DNS configuration instructions (CNAME/A records) provided by Vercel.

## 4. Configuration Files
- **`vercel.json`**: Controls headers (security, caching).
- **`robots.txt`**: Instructions for search engine crawlers.
- **`404.html`**: Custom error page.
- **`index.html`**: The main entry point.

## 5. Security Features
The included `vercel.json` enforces strict security policies:
- **HSTS**: Forces HTTPS for 2 years.
- **X-Content-Type-Options**: Prevents MIME type sniffing.
- **X-Frame-Options**: Prevents clickjacking (DENY).
- **X-XSS-Protection**: Enables browser XSS filtering.
- **CSP**: Restricts content sources to self and trusted domains (Google Fonts/Analytics).

## 6. Performance & Analytics
- **Caching**: Static assets (images, css, js) are cached for 1 year (`max-age=31536000`).
- **Compression**: Gzip/Brotli is enabled automatically by Vercel Edge Network.
- **Analytics**: Google Analytics 4 snippet is included in `main.html`.
    - *Action Required*: Replace `G-XXXXXXXXXX` with your actual Measurement ID in `main.html`.

## 7. Monitoring & Maintenance
- **Uptime**: Use a service like UptimeRobot to monitor your URL.
- **Updates**: Simply push changes to the `main` branch. Vercel will auto-deploy.
- **Rollbacks**: In Vercel Dashboard, go to "Deployments", click the three dots on a previous deployment, and select "Redeploy" or "Promote to Production".

## 8. Troubleshooting
- **404 on Assets**: Check `script.js` and `data.js` for correct relative paths. (Fixed in recent updates).
- **Styles Not Loading**: Ensure `style.css` is in the same directory or correctly referenced.
- **Analytics Not Tracking**: Verify your Measurement ID and check browser console for CSP errors.

## Support
For issues, contact the developer at [Your Email].
