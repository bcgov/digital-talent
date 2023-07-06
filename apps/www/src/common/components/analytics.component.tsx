'use client';

import { enableLinkClickTracking, LinkClickTrackingPlugin } from '@snowplow/browser-plugin-link-click-tracking';
import { newTracker, trackPageView } from '@snowplow/browser-tracker';
import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    newTracker('rt', 'spm.apps.gov.bc.ca', {
      appId: 'Snowplow_standalone_OCIO',
      cookieLifetime: 86500 * 548,
      platform: 'web',
      contexts: {
        webPage: true,
      },
      plugins: [LinkClickTrackingPlugin()],
    });

    enableLinkClickTracking();
    trackPageView();
  }, []);

  return <div />;
}
