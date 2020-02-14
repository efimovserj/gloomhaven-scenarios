import Env from "../helpers/Env";
import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

export default Env.isDevelopment() ? configureStoreDev : configureStoreProd;
