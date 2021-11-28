<template>
  <q-page class="index-page q-pa-md">
    <!-- {{ userNotice }} -->
    <p class="main-title">Уведомления пользователя</p>
    <q-card v-if="groupsEvents" class="row bg-red-10">
      <div class="col-2 q-pa-md flex items-center justify-center">
        <q-btn class="notice-all bg-white" @click="getUserNotice"
          >Все уведомления</q-btn
        >
      </div>
      <div
        @click="getOneGroupNoticeList(group.id)"
        class="col-2 q-pa-md"
        v-for="group in groupsEvents"
        :key="group.id"
      >
        <q-card
          flat
          bordered
          style="border-radius: 8px; min-height: 104px"
          class="text-center cursor-pointer flex items-center justify-center"
        >
          <div class="row justify-center">
            <div class="groupNotice-card__header q-pa-md">
              {{ group.name }} ({{ group.count }})
            </div>
          </div>

          <!-- <div class="row q-pa-sm">
            <div v-if="group.h !== 0" class="col-4">
              <q-btn round class="groupNotice-card__value bg-red-9 text-white">
                {{ group.h }}</q-btn
              >
            </div>
            <div v-if="group.m !== 0" class="col-4">
              <q-btn
                round
                class="groupNotice-card__value bg-yellow-9 text-white"
              >
                {{ group.m }}</q-btn
              >
            </div>
            <div v-if="group.l !== 0" class="col-4">
              <q-btn
                round
                class="groupNotice-card__value bg-green-9 text-white"
              >
                {{ group.l }}</q-btn
              >
            </div>
          </div> -->
        </q-card>
      </div>
    </q-card>
    <div class="row justify-center q-mt-md">
      <div
        id="virtual-scroll-target"
        style="max-height: 70vh"
        class="col-3 q-pa-md scroll"
      >
        <q-virtual-scroll :items="filteredNotice" separator>
          <template v-slot="{ item }">
            <q-card
              @click="openToDetail(item.id)"
              class="q-mb-md"
              :class="getStyleCardNotice(item)"
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
                      <!-- {{ item.notice.event.priority }} -->
                    </p>
                  </div>
                  <div class="col-2">
                    <q-btn size="sm" icon="mdi-package-down" round />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </template>
        </q-virtual-scroll>
      </div>
      <div style="max-height: 70vh" class="col-6">
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

export default defineComponent({
  setup() {
    const { getUserNotice, getGroupsNoticeList, getOneGroupNoticeList } =
      useApi();
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const userNotice = computed({
      get: () => store.state.notice.noticeList,
    });

    const groupsEvents = computed({
      get: () => store.state.notice.groupsEvents,
    });
    // Фильтрация по группе уведомлений

    const filteredNotice = computed(() =>
      _.orderBy(userNotice.value, "notice.event.priority", "desc")
    );

    const getStyleCardNotice = (item) => {
      if (item.notice.event.priority === 1) {
        return "notice-card--low";
      } else if (item.notice.event.priority === 2) {
        return "notice-card--middle";
      } else return "notice-card--high";
    };

    // открытие детального просмотра компонента NoticeDetail
    const openToDetail = (noticeId) => {
      _.isInteger(noticeId) &&
        router.push({
          path: "/notice/" + noticeId,
        });
    };

    onMounted(() => {
      getUserNotice();
      getGroupsNoticeList();
    });

    return {
      userNotice,
      groupsEvents,
      getUserNotice,
      openToDetail,
      filteredNotice,
      getOneGroupNoticeList,
      getStyleCardNotice,
    };
  },
});
</script>

<style lang="sass" scoped>
.index-page
  max-height: 100vh
  background: #e7eef7
.notice-card
  &--low
    border-right: 5px solid green
  &--middle
    border-right: 5px solid yellow
  &--high
    border-right: 5px solid red
.notice
  &-all
    padding: 10px
    height: 60%
</style>
