import loader from "./slice/loader";
import user from "./slice/user";
import blog from "./slice/blog";

const rootReducer = {
    loader,
    user,
    blog
}

export default rootReducer;