# Deployment Guide - Auroriqa

## Vercel Deployment (Recommended)

### 1. Connect Repository
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### 2. Environment Variables
Add these in Vercel Dashboard:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX (optional)
```

### 3. Domain Setup
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your domain: `auroriqa.com`
3. Configure DNS:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### 4. Performance Optimization
Already configured in `next.config.mjs`:
- Image optimization
- Compression
- Minification
- Code splitting

## Alternative: Custom Server

### Requirements
- Node.js 18+
- PM2 for process management
- Nginx as reverse proxy

### Build
```bash
npm run build
```

### Start
```bash
npm start
# or with PM2
pm2 start npm --name "auroriqa" -- start
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name auroriqa.com www.auroriqa.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment

### 1. Verify SEO
- [ ] Check sitemap: https://auroriqa.com/sitemap.xml
- [ ] Check robots.txt: https://auroriqa.com/robots.txt
- [ ] Test meta tags with social preview tools
- [ ] Verify structured data with Google Rich Results Test

### 2. Submit to Search Engines
```bash
# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters
```

### 3. Performance Testing
```bash
# Lighthouse
npx lighthouse https://auroriqa.com

# PageSpeed Insights
https://pagespeed.web.dev/
```

### 4. Monitoring Setup
- Google Analytics
- Google Search Console
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)

## Security

### Headers (Already configured)
```javascript
// next.config.mjs
{
  headers: [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Performance Issues
- Check Next.js Image optimization
- Enable Vercel Analytics
- Use Vercel Speed Insights
- Optimize large images

### SEO Not Indexing
- Verify robots.txt allows crawling
- Submit sitemap in Search Console
- Check for meta noindex tags
- Wait 2-4 weeks for initial indexing
