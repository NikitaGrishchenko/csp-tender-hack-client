<template>
  <div class="main-container q-pa-md">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="primary">
        <q-toolbar class="bg-black text-white">
          <q-btn flat round dense to="/" icon="home" />
          <q-toolbar-title class="main-title c-accent">
            Computerhandwerker, Spulke und partnerzen
          </q-toolbar-title>
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

export default defineComponent({
  name: "MainLayout",

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
.c-accent
  color: $accent
.secondary
  background: $secondary
.main
  &-title
    font-size: 1rem
  &-layout__link
    margin: 0px 20px
.main-layout__link
  text-decoration: none
</style>
