import componentRoute from "./component.route";

const componentRoutes = {
  prefix: "/",
  routes: [
    {
      path: "component",
      route: componentRoute,
    },
  ],
};

export default componentRoutes;
