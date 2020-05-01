import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
// ./reducers/index.js
import reducer from "./reducers";

const promise = createPromise({ types: { fulfilled: "success" } });
const middleware = applyMiddleware(promise, thunk, createLogger());

export default createStore(reducer, middleware);
