/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { precacheAndRoute } from 'workbox-precaching'

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('push', function (event) {
  const notification = event.data;

  console.log(notification);
  event.waitUntil(
    self.registration.showNotification("CSP", {
      body: notification.text(),
      // icon: '/static/img/icon-512.png',
      // badge: '/static/img/icon-96.png',
      // tag: 'alert'
    })
  );
});
