<template>
  <q-btn @click="subscribe">Подписаться на Push уведомления</q-btn>
</template>
<script>
import { useUtils } from "@composables/useUtils";
import { useApi } from "@composables/useApi";

export default {
  setup() {
    const { urlB64ToUint8Array } = useUtils();
    const { subscribeOnPush } = useApi();
    const subscribe = () => {
      Notification.requestPermission().then((status) => {
        console.log(status);
        if (status === "granted") {
          navigator.serviceWorker.getRegistration().then((registration) => {
            registration.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array(
                  process.env.PUBLIC_VAPID_KEY
                ),
              })
              .then((subscription) => {
                console.log(subscription);
                const data = {
                  webpush: {
                    endpoint: subscription.toJSON().endpoint,
                    key_auth: subscription.toJSON().keys.auth,
                    key_secret: subscription.toJSON().keys.key_p256dh,
                  },
                };
                subscribeOnPush(data);
              });
          });
        } else {
          alert("Ваш браузер не поддерживает Push-уведомления!");
        }
      });
    };

    return {
      subscribe,
    };
  },
};
</script>
