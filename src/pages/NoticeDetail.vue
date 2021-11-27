<template>
  <q-page class="index-page q-pa-md">
    <q-card v-if="userNotice">
      <q-card-section v-if="userNotice.is_viewed">
        <div class="row justify-between">
          <div class="col-4">
            <div class="notice-viewed notice-viewed__false">
              <p class="notice-viewed__text">Не прочитано</p>
            </div>
          </div>
          <div class="col-4">
            {{ userNotice.date_of_send }}
          </div>
        </div>
      </q-card-section>
      <q-card-section v-else>
        <div class="row justify-between items-center">
          <div class="col-4">
            <div class="notice-viewed notice-viewed__true">
              <p class="notice-viewed__text">Прочитано</p>
            </div>
          </div>
          <div class="col-6">
            <p class="notice-card__date text-right">
              {{ userNotice.date_of_send }}
            </p>
          </div>
          <div class="col-2 text-right">
            <q-btn size="sm" icon="mdi-package-down" round />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <p class="notice-card__header">
          {{ userNotice.notice?.event?.title }}
        </p>
      </q-card-section>
      <q-card-section>
        <p class="notice-card__text">
          {{ userNotice.notice?.text }}
        </p></q-card-section
      >
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

<style lang="sass" scoped>
.index-page
  min-height: 0 !important
</style>
