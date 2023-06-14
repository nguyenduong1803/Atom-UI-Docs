import commonAnswerRoute from "./common-answer";
import commonClassListRoute from "./common-classList";
import commonComponentRoute from "./common-component";
import commonQuestionRoute from "./common-question";

const commonRoutes = {
  prefix: "/",
  routes: [
    {
      path: "component",
      route: commonComponentRoute,
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
