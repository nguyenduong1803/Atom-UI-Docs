import componentRoutes from "./common";
import userRoutes from "./user";

const routes = [{ ...userRoutes }, { ...componentRoutes }];
export default routes;
