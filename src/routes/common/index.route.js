import commonAnswerRoute from "./common-answer";
import commonClassListRoute from "./common-classList";
import commonComponentRoute from "./common-component";
import commonComponentDetailRoute from "./common-componentDetail";
import commonQuestionRoute from "./common-question";

const commonRoutes = {
  prefix: "/",
  routes: [
    {
      path: "component",
      route: commonComponentRoute,
    },
    {
      path: "component-detail",
      route: commonComponentDetailRoute,
    },
    {
      path: "class-list",
      route: commonClassListRoute,
    },
    {
      path: "answer",
      route: commonAnswerRoute,
    },
    {
      path: "question",
      route: commonQuestionRoute,
    },
  ],
};

export default commonRoutes;
