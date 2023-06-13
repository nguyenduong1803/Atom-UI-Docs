import authRoute from "./auth.route";

const userRoutes = {
  prefix: "/",
  routes: [
    {
      path: "auth",
      route: authRoute,
    },
  ],
};

export default userRoutes;
