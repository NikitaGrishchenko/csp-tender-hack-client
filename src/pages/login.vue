<template>
  <q-page class="login-page q-pa-md">
    Авторизироваться

    <q-input v-model.trim="username" label="Логин" type="text"></q-input>
    <q-input v-model.trim="password" label="Пароль" type="password"></q-input>

    <q-btn class="mr-3" color="primary" @click="handleSubmit()"
      >Отправить</q-btn
    >
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useApi } from "@composables/useApi";

export default defineComponent({
  setup() {
    const { getUserToken } = useApi();
    let username = ref("");
    let password = ref("");

    const handleSubmit = () => {
      if (username.value !== "" && password.value !== "") {
        const data = {
          username: username.value,
          password: password.value,
        };
        getUserToken(data);
      }
    };
    return {
      handleSubmit,
      username,
      password,
    };
  },
});
</script>

<style lang="sass" scoped></style>
