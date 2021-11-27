<template>
  <div class="main-container q-pa-md">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="primary">
        <q-toolbar class="flex justify-center">
          <q-toolbar-title class="main-title c-accent">
            Computerhandwerker, Spulke und partnerzen
          </q-toolbar-title>
          <q-btn
            flat
            type="a"
            :href="'https://github.com/NikitaGrishchenko/CSP-client'"
            :target="'_blank'"
            color="accent"
            label="Client"
            icon="mdi-github"
          />
          <q-btn
            flat
            type="a"
            :href="'https://github.com/NikitaGrishchenko/CSP-server'"
            :target="'_blank'"
            color="accent"
            label="Server"
            icon="mdi-github"
          />
        </q-toolbar>

        <q-tabs v-model="activeTab">
          <router-link
            v-for="link in linksList"
            :key="link.id"
            :to="link.link"
            class="main-layout__link c-accent"
          >
            <q-tab :name="link.id" :label="link.title" />
          </router-link>
        </q-tabs>
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
