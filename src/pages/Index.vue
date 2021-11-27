<template>
  <q-page class="index-page q-pa-md">
    Уведомления пользователя
    <span v-if="userNotice">{{ userNotice }}</span>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useApi } from "@composables/useApi";

export default defineComponent({
  setup() {
    const { userNotice, getUserNotice } = useApi();

    onMounted(() => {
      getUserNotice();
    });

    return {
      userNotice,
    };
  },
});
</script>

<style lang="sass" scoped></style>
