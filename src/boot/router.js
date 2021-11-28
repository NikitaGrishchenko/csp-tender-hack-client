import { boot } from "quasar/wrappers";
import { LocalStorage } from "quasar";

export default boot(({ router, store }) => {
  const PUBLIC_PATHS = ["/login",];
  const unAuthenticatedAndPrivatePage = (path) =>
    !PUBLIC_PATHS.includes(path) &&
    !(LocalStorage.has("access_token")) &&
    !(LocalStorage.has("refresh_token"));
  router.beforeEach((to, from, next) => {
    if (unAuthenticatedAndPrivatePage(to.path)) {
      next(`/login?next=${to.path}`);
    } else {
      next();
    }
  });
});
