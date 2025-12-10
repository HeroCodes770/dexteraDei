/**
 * Comprehensive User Tracking & Analytics Implementation
 * Tracks all user interactions, behaviors, and conversions
 */

(function() {
  'use strict';

  // Load configuration
  const config = window.TrackingConfig || {};
  
  /**
   * Google Analytics 4 Implementation
   */
  function initGA4() {
    if (!config.features.ga4 || !config.GA4_MEASUREMENT_ID || config.GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('GA4 not configured. Please add your GA4 Measurement ID in tracking-config.js');
      return;
    }

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', config.GA4_MEASUREMENT_ID, {
      'send_page_view': true,
      'anonymize_ip': true, // GDPR compliance
      'cookie_flags': 'SameSite=None;Secure'
    });

    // Track page views
    trackPageView();
  }

  /**
   * Google Tag Manager Implementation
   */
  function initGTM() {
    if (!config.features.gtm || !config.GTM_CONTAINER_ID || config.GTM_CONTAINER_ID === 'GTM-XXXXXXX') {
      console.warn('GTM not configured. Please add your GTM Container ID in tracking-config.js');
      return;
    }

    // GTM script in head
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',config.GTM_CONTAINER_ID);

    // GTM noscript in body
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.GTM_CONTAINER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }

  /**
   * Facebook Pixel Implementation
   */
  function initFacebookPixel() {
    if (!config.features.facebook || !config.FACEBOOK_PIXEL_ID || config.FACEBOOK_PIXEL_ID === 'XXXXXXXXXXXXXXX') {
      console.warn('Facebook Pixel not configured. Please add your Pixel ID in tracking-config.js');
      return;
    }

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', config.FACEBOOK_PIXEL_ID);
    fbq('track', 'PageView');
  }

  /**
   * LinkedIn Insight Tag
   */
  function initLinkedIn() {
    if (!config.features.linkedin || !config.LINKEDIN_PARTNER_ID || config.LINKEDIN_PARTNER_ID === 'XXXXXX') {
      return;
    }

    _linkedin_partner_id = config.LINKEDIN_PARTNER_ID;
    window._linkedin_partner_id = _linkedin_partner_id;
    (function(){var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})();
  }

  /**
   * Twitter Pixel
   */
  function initTwitter() {
    if (!config.features.twitter || !config.TWITTER_PIXEL_ID || config.TWITTER_PIXEL_ID === 'XXXXXX') {
      return;
    }

    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    twq('init', config.TWITTER_PIXEL_ID);
    twq('track', 'PageView');
  }

  /**
   * Microsoft Clarity - Heatmaps and Session Recordings
   */
  function initClarity() {
    if (!config.features.clarity || !config.MICROSOFT_CLARITY_ID || config.MICROSOFT_CLARITY_ID === 'XXXXXXXXXX') {
      return;
    }

    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", config.MICROSOFT_CLARITY_ID);
  }

  /**
   * Hotjar - User Behavior Analytics
   */
  function initHotjar() {
    if (!config.features.hotjar || !config.HOTJAR_ID || config.HOTJAR_ID === 'XXXXXXXXXX') {
      return;
    }

    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:config.HOTJAR_ID,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  }

  /**
   * Track Page View
   */
  function trackPageView() {
    const pagePath = window.location.pathname + window.location.search;
    const pageTitle = document.title;
    
    // GA4
    if (window.gtag) {
      gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.href
      });
    }

    // Facebook
    if (window.fbq) {
      fbq('track', 'PageView');
    }

    // Twitter
    if (window.twq) {
      twq('track', 'PageView');
    }
  }

  /**
   * Track Scroll Depth
   */
  function trackScrollDepth() {
    if (!config.features.scrollTracking) return;

    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set();

    function checkScroll() {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          
          if (window.gtag) {
            gtag('event', 'scroll_depth', {
              scroll_depth: threshold,
              page_path: window.location.pathname
            });
          }
        }
      });
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  /**
   * Track Form Interactions
   */
  function trackFormInteractions() {
    if (!config.features.formTracking) return;

    // Track form views
    document.querySelectorAll('form').forEach(form => {
      const formId = form.id || form.name || 'unnamed_form';
      
      // Track when form becomes visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (window.gtag) {
              gtag('event', 'form_view', {
                form_id: formId,
                form_name: formId
              });
            }
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(form);

      // Track form submissions
      form.addEventListener('submit', function(e) {
        const formData = new FormData(form);
        const formFields = {};
        formData.forEach((value, key) => {
          formFields[key] = value ? 'filled' : 'empty'; // Don't send actual data for privacy
        });

        if (window.gtag) {
          gtag('event', 'form_submit', {
            form_id: formId,
            form_name: formId,
            form_fields: Object.keys(formFields).length
          });
        }

        if (window.fbq) {
          fbq('track', 'Lead', {
            content_name: formId
          });
        }

        if (window.twq) {
          twq('track', 'Submit', {
            form_id: formId
          });
        }
      });

      // Track field interactions
      form.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('focus', function() {
          if (window.gtag) {
            gtag('event', 'form_field_focus', {
              form_id: formId,
              field_name: field.name || field.id || 'unnamed_field'
            });
          }
        });
      });
    });
  }

  /**
   * Track Link Clicks
   */
  function trackLinkClicks() {
    document.querySelectorAll('a[href]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const linkText = this.textContent.trim() || this.getAttribute('aria-label') || 'unnamed_link';
        const isExternal = href && (href.startsWith('http') && !href.includes(window.location.hostname));
        const isEmail = href && href.startsWith('mailto:');
        const isPhone = href && href.startsWith('tel:');
        const isDownload = href && /\.(pdf|doc|docx|xls|xlsx|zip|rar)$/i.test(href);

        const eventData = {
          link_url: href,
          link_text: linkText.substring(0, 100), // Limit length
          link_location: window.location.pathname
        };

        if (window.gtag) {
          if (isExternal) {
            gtag('event', 'click', {
              ...eventData,
              event_category: 'outbound',
              event_label: 'External Link'
            });
          } else if (isEmail) {
            gtag('event', 'click', {
              ...eventData,
              event_category: 'contact',
              event_label: 'Email Link'
            });
          } else if (isPhone) {
            gtag('event', 'click', {
              ...eventData,
              event_category: 'contact',
              event_label: 'Phone Link'
            });
          } else if (isDownload) {
            gtag('event', 'file_download', {
              ...eventData,
              file_name: href.split('/').pop()
            });
          } else {
            gtag('event', 'click', {
              ...eventData,
              event_category: 'navigation',
              event_label: 'Internal Link'
            });
          }
        }
      });
    });
  }

  /**
   * Track Button Clicks
   */
  function trackButtonClicks() {
    document.querySelectorAll('button, .btn, [role="button"]').forEach(button => {
      button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim() || this.getAttribute('aria-label') || this.className || 'unnamed_button';
        const buttonId = this.id || 'no_id';

        if (window.gtag) {
          gtag('event', 'button_click', {
            button_text: buttonText.substring(0, 100),
            button_id: buttonId,
            page_path: window.location.pathname
          });
        }
      });
    });
  }

  /**
   * Track Video Interactions
   */
  function trackVideoInteractions() {
    if (!config.features.videoTracking) return;

    document.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"]').forEach(video => {
      // Track video plays, pauses, completions
      if (video.tagName === 'VIDEO') {
        video.addEventListener('play', () => {
          if (window.gtag) {
            gtag('event', 'video_play', {
              video_title: video.getAttribute('title') || 'unnamed_video',
              page_path: window.location.pathname
            });
          }
        });

        video.addEventListener('pause', () => {
          if (window.gtag) {
            gtag('event', 'video_pause', {
              video_title: video.getAttribute('title') || 'unnamed_video',
              page_path: window.location.pathname
            });
          }
        });

        video.addEventListener('ended', () => {
          if (window.gtag) {
            gtag('event', 'video_complete', {
              video_title: video.getAttribute('title') || 'unnamed_video',
              page_path: window.location.pathname
            });
          }
        });
      }
    });
  }

  /**
   * Track Time on Page
   */
  function trackTimeOnPage() {
    const startTime = Date.now();
    
    // Track every 30 seconds
    setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      if (window.gtag && timeOnPage % 30 === 0) {
        gtag('event', 'time_on_page', {
          time_seconds: timeOnPage,
          page_path: window.location.pathname
        });
      }
    }, 30000);

    // Track on page unload
    window.addEventListener('beforeunload', () => {
      const totalTime = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag) {
        gtag('event', 'page_exit', {
          time_on_page: totalTime,
          page_path: window.location.pathname
        });
      }
    });
  }

  /**
   * Track Social Media Shares
   */
  function trackSocialShares() {
    document.querySelectorAll('a[href*="twitter"], a[href*="facebook"], a[href*="linkedin"], a[href*="share"]').forEach(link => {
      link.addEventListener('click', function() {
        const platform = this.href.includes('twitter') ? 'twitter' :
                        this.href.includes('facebook') ? 'facebook' :
                        this.href.includes('linkedin') ? 'linkedin' : 'other';

        if (window.gtag) {
          gtag('event', 'share', {
            method: platform,
            content_type: 'page',
            item_id: window.location.pathname
          });
        }
      });
    });
  }

  /**
   * Track Project Modal Views
   */
  function trackProjectViews() {
    document.querySelectorAll('.popup-with-zoom-anim, [data-popup]').forEach(trigger => {
      trigger.addEventListener('click', function() {
        const projectId = this.getAttribute('href') || this.getAttribute('data-popup') || 'unknown';
        
        if (window.gtag) {
          gtag('event', 'view_item', {
            item_id: projectId,
            item_name: this.textContent.trim().substring(0, 100),
            content_type: 'project',
            page_path: window.location.pathname
          });
        }

        if (window.fbq) {
          fbq('track', 'ViewContent', {
            content_type: 'product',
            content_ids: [projectId]
          });
        }
      });
    });
  }

  /**
   * Track Contact Form Submissions
   */
  function trackContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        // Wait a bit to ensure form submission is processed
        setTimeout(() => {
          if (window.gtag) {
            gtag('event', 'generate_lead', {
              currency: 'USD',
              value: 0,
              page_path: window.location.pathname
            });
          }

          if (window.fbq) {
            fbq('track', 'Lead');
          }

          if (window.twq) {
            twq('track', 'CompleteRegistration');
          }
        }, 1000);
      });
    }
  }

  /**
   * Initialize all tracking
   */
  function init() {
    // Initialize tracking scripts
    initGA4();
    initGTM();
    initFacebookPixel();
    initLinkedIn();
    initTwitter();
    initClarity();
    initHotjar();

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTracking);
    } else {
      initTracking();
    }
  }

  function initTracking() {
    // Initialize event tracking
    trackScrollDepth();
    trackFormInteractions();
    trackLinkClicks();
    trackButtonClicks();
    trackVideoInteractions();
    trackTimeOnPage();
    trackSocialShares();
    trackProjectViews();
    trackContactForm();
  }

  // Start initialization
  init();

})();

