import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "trastpay/user-management-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "trastpay/получить-список-пользователей",
          label: "Получить список пользователей",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "trastpay/создать-нового-пользователя",
          label: "Создать нового пользователя",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "trastpay/получить-пользователя-по-id",
          label: "Получить пользователя по ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "trastpay/обновить-пользователя-по-id",
          label: "Обновить пользователя по ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "trastpay/удалить-пользователя",
          label: "Удалить пользователя",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
