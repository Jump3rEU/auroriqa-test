# Google Analytics Configuration

## Setup Instructions

1. Create Google Analytics 4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to your environment variables:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Google Tag Manager (Optional)

For more advanced tracking, use GTM:

1. Create GTM container at https://tagmanager.google.com
2. Get your GTM ID (format: GTM-XXXXXXX)
3. Add to environment variables:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Implementation

Already implemented in the app with:
- Page view tracking
- Event tracking
- Conversion tracking
- Cookie consent integration

## Privacy

Make sure to:
- Update privacy policy
- Implement cookie consent
- Anonymize IP addresses
- Comply with GDPR/CCPA
