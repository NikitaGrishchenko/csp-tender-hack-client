import { ref } from "vue";
import { api } from "$axios";
import { route } from "quasar/wrappers";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export function useApi() {
  const router = useRouter();
  const store = useStore();
  let userNotice = ref([]);

  const getUserNotice = () => {
    api
      .get(`notice/list/`)
      .then((res) => {
        userNotice.value = res.data;
        store.commit("notice/setNoticeList", userNotice.value);
        store.commit("notice/setNoticeCount", userNotice.value.length);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getUserToken = (data) => {
    api
      .post(`auth/token/`, data)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        router.push({
          path: "/",
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return { userNotice, getUserNotice, getUserToken };
}
