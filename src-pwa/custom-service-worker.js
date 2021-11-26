/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { precacheAndRoute } from 'workbox-precaching'

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('push', function(event) {
  // var message = JSON.parse(event.data.text()); //
  console.log(event);
  console.log("test");
  event.waitUntil(
    self.registration.showNotification("message", {
      body: "message",
    })
  );
});
