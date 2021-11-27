<template>
  <q-page class="index-page q-pa-md">
    <q-card v-if="userNotice">
      <q-card-section>{{ userNotice }}</q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, watch, onMounted } from "vue";
import { useApi } from "@composables/useApi";
import { useRoute } from "vue-router";
import _ from "lodash";

export default defineComponent({
  setup() {
    const { getUserNoticeById, userNotice } = useApi();
    const route = useRoute();
    onMounted(() => {
      !_.isNil(route.params.noticeId) &&
        getUserNoticeById(route.params.noticeId);
    });
    watch(
      () => route.params.noticeId,
      () => {
        !_.isNil(route.params.noticeId) &&
          getUserNoticeById(route.params.noticeId);
      }
    );

    return {
      userNotice,
    };
  },
});
</script>

<style lang="sass" scoped></style>
