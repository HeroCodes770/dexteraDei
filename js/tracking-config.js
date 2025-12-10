/**
 * Comprehensive Tracking Configuration
 * Replace the placeholder IDs with your actual tracking IDs
 */

window.TrackingConfig = {
  // Google Analytics 4 (GA4) - Get from https://analytics.google.com
  GA4_MEASUREMENT_ID: 'G-WLH6CL0Z78', // ✅ Configured - Your GA4 Measurement ID
  
  // Google Tag Manager - Get from https://tagmanager.google.com
  GTM_CONTAINER_ID: 'GTM-XXXXXXX', // Replace with your GTM Container ID
  
  // Facebook Pixel - Get from https://business.facebook.com/events_manager
  FACEBOOK_PIXEL_ID: 'XXXXXXXXXXXXXXX', // Replace with your Facebook Pixel ID
  
  // LinkedIn Insight Tag - Get from https://www.linkedin.com/campaignmanager/
  LINKEDIN_PARTNER_ID: 'XXXXXX', // Replace with your LinkedIn Partner ID
  
  // Twitter Pixel - Get from https://ads.twitter.com/
  TWITTER_PIXEL_ID: 'XXXXXX', // Replace with your Twitter Pixel ID
  
  // Microsoft Clarity - Get from https://clarity.microsoft.com/
  MICROSOFT_CLARITY_ID: 'XXXXXXXXXX', // Replace with your Clarity Project ID
  
  // Hotjar - Get from https://www.hotjar.com/
  HOTJAR_ID: 'XXXXXXXXXX', // Replace with your Hotjar Site ID
  
  // Enable/Disable tracking features
  features: {
    ga4: true,
    gtm: true,
    facebook: true,
    linkedin: true,
    twitter: true,
    clarity: true,
    hotjar: true,
    enhancedEcommerce: true,
    scrollTracking: true,
    formTracking: true,
    videoTracking: true,
    outboundLinkTracking: true
  }
};

