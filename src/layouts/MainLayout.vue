<template>
  <div class="main-container q-pa-md">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="primary">
        <q-toolbar class="bg-black text-white">
          <q-btn flat round dense to="/" icon="home" />
          <q-toolbar-title class="header-title c-accent">
            Computerhandwerker, Spulke und partnerzen
          </q-toolbar-title>
          <SubscribeOnPush />
          <q-btn stretch flat label="Settings" to="/notice/settings" />
          <q-btn stretch flat label="Login" to="/login" />
          <q-btn flat round dense to="/notice" icon="assignment_ind">
            <q-badge floating color="red">{{
              $store.state.notice.noticeCount
            }}</q-badge>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMeta } from "quasar";
import SubscribeOnPush from "@components/SubscribeOnPush";

export default defineComponent({
  name: "MainLayout",
  components: {
    SubscribeOnPush,
  },

  setup() {
    const activeTab = ref(0);
    const linksList = [
      {
        id: 0,
        title: "Уведомления",
        link: "/",
      },
      {
        id: 1,
        title: "Авторизация",
        link: "/login",
      },
    ];

    useMeta(() => {
      return {
        title: "CSP",
      };
    });

    return {
      linksList,
      activeTab,
    };
  },
});
</script>

<style lang="sass">
.main-container
  background: #e7eef7
.c-accent
  color: $accent
.secondary
  background: $secondary
.header-title
  font-size: 1rem
.main
  &-layout__link
    margin: 0px 20px
.main-layout__link
  text-decoration: none
</style>
