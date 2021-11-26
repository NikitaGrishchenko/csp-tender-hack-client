<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    Notification.requestPermission(function (status) {
      console.log("Notification permission status:", status);
    });
    function displayNotification() {
      if (Notification.permission == "granted") {
        navigator.serviceWorker.getRegistration().then(function (reg) {
          reg.showNotification("Hello world!");
        });
      }
    }
    displayNotification()
  },
});
</script>
