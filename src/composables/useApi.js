import { ref } from "vue";
import { api } from "$axios";

export function useApi() {
  let userNotice = ref([]);

  const getUserNotice = () => {
    api
      .get(`notice/list/`)
      .then((res) => {
        userNotice.value = res.data;
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
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return { userNotice, getUserNotice, getUserToken };
}
