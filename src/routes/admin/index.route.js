import adminAnswerRoute from "./admin-answer";
import adminClassListRoute from "./admin-classList";
import adminComponentRoute from "./admin-component";
import adminComponentDetail from "./admin-componentDetail";
import adminQuestionRoute from "./admin-question";

const adminRoutes = {
  prefix: "/admin/",
  routes: [
    {
      path: "component",
      route: adminComponentRoute,
    },
    {
      path: "component-detail",
      route: adminComponentDetail,
    },
    {
      path: "class-list",
      route: adminClassListRoute,
    },
    {
      path: "question",
      route: adminQuestionRoute,
    },
    {
      path: "answer",
      route: adminAnswerRoute,
    },
  ],
};

export default adminRoutes;
