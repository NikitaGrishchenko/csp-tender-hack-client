<template>
  <q-page class="index-page q-pa-md">
    <p class="main-title">Уведомления пользователя</p>
    <div class="row justify-center">
      <div
        id="virtual-scroll-target"
        style="max-height: 70vh"
        class="col-3 q-pa-md scroll"
      >
        <q-virtual-scroll :items="userNotice" separator>
          <template v-slot="{ item }">
            <q-card
              @click="openToDetail(item.id)"
              class="q-mb-md"
              :class="
                !item.is_viewed
                  ? 'notice-card__bg-true'
                  : 'notice-card__bg-false'
              "
              :key="item.id"
            >
              <q-card-section v-if="item.is_viewed">
                <div class="row justify-between">
                  <div class="col-4">
                    <div class="notice-viewed notice-viewed__false">
                      <p class="notice-viewed__text">Не прочитано</p>
                    </div>
                  </div>
                  <div class="col-4">
                    {{ item.date_of_send }}
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
                    <p class="notice-card__date">
                      {{ item.date_of_send }}
                    </p>
                  </div>
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="row justify-between items-top">
                  <div class="col-10">
                    <p class="notice-card__title">
                      {{ item.notice.event.title }}
                    </p>
                  </div>
                  <div class="col-2">
                    <q-btn size="sm" icon="mdi-package-down" round />
                  </div>
                </div>
              </q-card-section>
              <!-- <q-card-actions>
                <q-btn :to="`/notice/${item.notice.id}`">Подробнее</q-btn>
              </q-card-actions> -->
            </q-card>
          </template>
        </q-virtual-scroll>
      </div>
      <div class="col-6 bg-red">
        <router-view></router-view>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, computed } from "vue";
import { useApi } from "@composables/useApi";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import _ from "lodash";
// import NoticeDetail from "./NoticeDetail.vue";

export default defineComponent({
  // components: {
  //   NoticeDetail,
  // },
  setup() {
    const { getUserNotice } = useApi();
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const userNotice = computed({
      get: () => store.state.notice.noticeList,
    });

    const openToDetail = (noticeId) => {
      _.isInteger(noticeId) &&
        router.push({
          path: "/notice/" + noticeId,
        });
    };

    onMounted(() => {
      getUserNotice();
    });
    console.log(userNotice);
    return {
      userNotice,
      openToDetail,
    };
  },
});
</script>

<style lang="sass" scoped>
.index-page
  max-height: 100vh
.notice
  &-card
    &__bg
      &-true
        background: #c6eef2
      &-false
        background: var(--q-accent)
    &__date
      font-size: .8rem
    &__title
      font-size: .8rem
  &-viewed
    padding: 5px
    width: 100%
    border-radius: 8px
    font-size: .8rem
    text-align: center
    &__text

    &__false
      background: #ccc
    &__true
      color: #167c85
      background: #167c851a
      border: 1px solid #167c851a
</style>
