import privateRoute from "./PrivateRoutes";
import publicRoutes from "./PublicRoutes";


const routes = [
    ...privateRoute,
    ...publicRoutes
]

export default routes;