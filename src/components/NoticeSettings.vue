<template>
  <q-page class="login-page q-pa-md">
    <div class="row">
      <div class="col-12"></div>
      <div v-if="settings" class="col-12">
        <q-expansion-item
          switch-toggle-side
          expand-separator
          v-for="s in settings"
          :label="s.title"
          :key="s.id"
        >
          <q-card>
            <q-card-section>
              <p
                class="q-pb-md flex justify-between"
                v-for="item in s.sub"
                :key="item.id"
              >
                <span>
                  {{ item.title }}
                </span>

                <q-btn-dropdown flat rounded dropdown-icon="settings">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label class="flex justify-between items-center"
                          >Web клиент

                          <q-toggle indeterminate-value="true" color="green" />
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label class="flex justify-between items-center"
                          >Telegram

                          <q-toggle indeterminate-value="true" color="green" />
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <q-item-label class="flex justify-between items-center"
                          >Email

                          <q-toggle indeterminate-value="true" color="green" />
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const TRUE = true;
    const FALSE = false;
    const settings = [
      {
        id: 1,
        title: "КОТИРОВОЧНЫЕ СЕССИИ",
        sub: [
          {
            id: 1,
            title: "Ответ c офертой на приглашение на участие в торгах",
          },

          {
            id: 2,
            title: "Уведомление владельцу о несостоявшейся котировочной сессии",
          },

          {
            id: 3,
            title: "Уведомление владельцу о победе в котировочной сессии",
          },

          {
            id: 4,
            title: "Уведомление владельцу об окончании котировочной сессии",
          },

          { id: 5, title: "Уведомление о блокировке котировочных сессий" },

          {
            id: 6,
            title: "Уведомление о невыполнении обязательств поставщиком",
          },

          { id: 7, title: "Уведомление о новой ставке в котировочной сессии" },

          { id: 8, title: "Уведомление о подаче заявки на участие в торгах" },
        ],
      },
      {
        id: 8,
        title: "ЗАКУПКА ПО ПОТРЕБНОСТИ",
      },
      {
        id: 8,
        title: "ПРЯМАЯ ЗАКУПКА",
      },
      {
        id: 2,
        title: "ОФЕРТЫ И СТЕ",
        sub: [
          {
            id: 1,
            title: "Ответ c офертой на приглашение на участие в торгах",
          },

          {
            id: 2,
            title: "Уведомление владельцу о несостоявшейся котировочной сессии",
          },

          {
            id: 3,
            title: "Уведомление владельцу о победе в котировочной сессии",
          },

          {
            id: 4,
            title: "Уведомление владельцу об окончании котировочной сессии",
          },

          { id: 5, title: "Уведомление о блокировке котировочных сессий" },

          {
            id: 6,
            title: "Уведомление о невыполнении обязательств поставщиком",
          },

          { id: 7, title: "Уведомление о новой ставке в котировочной сессии" },

          { id: 8, title: "Уведомление о подаче заявки на участие в торгах" },
        ],
      },
      {
        id: 3,
        title: "УПРАВЛЕНИЕ УЧЕТНОЙ ЗАПИСЬЮ И ОБЩЕСТВЕННЫЕ ОБСУЖДЕНИЯ",
        sub: [
          {
            id: 1,
            title: "Ответ c офертой на приглашение на участие в торгах",
          },

          {
            id: 2,
            title: "Уведомление владельцу о несостоявшейся котировочной сессии",
          },

          {
            id: 3,
            title: "Уведомление владельцу о победе в котировочной сессии",
          },

          {
            id: 4,
            title: "Уведомление владельцу об окончании котировочной сессии",
          },

          { id: 5, title: "Уведомление о блокировке котировочных сессий" },

          {
            id: 6,
            title: "Уведомление о невыполнении обязательств поставщиком",
          },

          { id: 7, title: "Уведомление о новой ставке в котировочной сессии" },

          { id: 8, title: "Уведомление о подаче заявки на участие в торгах" },
        ],
      },
      {
        id: 4,
        title: "ПУБЛИЧНЫЙ ПРОФИЛЬ КОМПАНИИ",
        sub: [],
      },
      {
        id: 4,
        title: "ТЕХПОДДЕРЖКА",
        sub: [],
      },
    ];
    return {
      settings,
    };
  },
});
</script>

<style lang="sass" scoped></style>
