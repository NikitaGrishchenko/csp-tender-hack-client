const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");
const path = require("path");

module.exports = configure(function (ctx) {
  return {
    supportTS: false,

    boot: ["axios", "capacitor"],

    css: ["app.sass"],

    extras: [
      "mdi-v5",
      "roboto-font",
      "material-icons",
    ],
    build: {
      vueRouterMode: "history",

      chainWebpack(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
        chain.resolve.alias.set(
          "@composables",
          path.resolve(__dirname, "./src/composables/")
        );
        chain.resolve.alias.set(
          "@components",
          path.resolve(__dirname, "./src/components/")
        );
        chain.resolve.alias.set(
          "@pages",
          path.resolve(__dirname, "./src/pages/")
        );
        chain.resolve.alias.set(
          "$axios",
          path.resolve(__dirname, "./src/boot/axios/")
        );
      },
    },
    devServer: {
      https: false,
      port: 8080,
      open: true,
    },
    framework: {
      config: {},
      plugins: ["Meta",'Loading','Notify','Dialog'],
    },
    animations: [],
    pwa: {
      manifest: {
      },
      metaVariables: {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        appleTouchIcon120: 'icons/apple-icon-120x120.png',
        appleTouchIcon180: 'icons/apple-icon-180x180.png',
        appleTouchIcon152: 'icons/apple-icon-152x152.png',
        appleTouchIcon167: 'icons/apple-icon-167x167.png',
        appleSafariPinnedTab: 'icons/safari-pinned-tab.svg',
        msapplicationTileImage: 'icons/ms-icon-144x144.png',
        msapplicationTileColor: '#000000'
      },
      metaVariablesFn (manifest) {
        return [
          {
            tagName: 'meta',
            attributes: {
              name: 'theme-color',
              content: '#ff0'
            }
          },

          {
            tagName: 'link',
            attributes: {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: 'icons/icon-180.png'
            },
            closeTag: false
          }
        ]
      },
      extendWebpackCustomSW (cfg) {
      },
      chainWebpackCustomSW (chain) {
      }
    },
    capacitor: {
      hideSplashscreen: true,
      capacitorCliPreparationParams: ["sync", ctx.targetName],
      appName: "CSP",
      version: "0.1",
      description: "",
    },
  };
});
