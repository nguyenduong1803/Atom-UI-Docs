import adminRoutes from "./admin/index.route";
import commonRoutes from "./common/index.route";
import userRoutes from "./user";

const routes = [{ ...userRoutes }, { ...commonRoutes },{...adminRoutes}];
export default routes;
