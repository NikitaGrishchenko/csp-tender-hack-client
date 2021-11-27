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
        store.commit("notice/setNoticeList", res.data);
        store.commit("notice/setNoticeCount", res.data.length);
      })
      .catch((e) => {
        console.error(e);
      });
    setTimeout(() => {
      getUserNotice();
    }, 2500);
  };

  const getGroupsEvents = () => {
    api
      .get(`notice/groups-events/`)
      .then((res) => {
        store.commit(
          "notice/setGroupsEvents",
          res.data.filter(
            (item) => !(item.h !== 0 && item.l !== 0 && item.m !== 0)
          )
        );
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getUserNoticeById = (id) => {
    api
      .get(`notice/detail/${id}`)
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
        router.push({
          path: "/",
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return {
    userNotice,
    getUserNotice,
    getUserToken,
    getUserNoticeById,
    getGroupsEvents,
  };
}
