import adminAnswerRoute from "./admin-answer";
import adminClassListRoute from "./admin-classList";
import adminComponentRoute from "./admin-component";
import adminQuestionRoute from "./admin-question";

const adminRoutes = {
  prefix: "/admin/",
  routes: [
    {
      path: "component",
      route: adminComponentRoute,
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
