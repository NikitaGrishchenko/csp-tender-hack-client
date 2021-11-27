<template>
  <q-page class="index-page q-pa-md">
    Уведомления пользователя
    <q-card v-for="notice in userNotice" :key="notice.id">
      <q-card-section>{{ notice }}</q-card-section>
      <q-card-actions>
        <q-btn :to="`/notice/${notice.id}`">Подробнее</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, computed } from "vue";
import { useApi } from "@composables/useApi";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { getUserNotice } = useApi();
    const route = useRoute();
    const store = useStore();
    const userNotice = computed({
      get: () => store.state.notice.noticeList,
    });
    console.log(route.params.noticeId);
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
