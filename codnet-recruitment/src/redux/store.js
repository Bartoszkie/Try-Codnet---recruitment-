import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
//Middlewares
import logger from "redux-logger";
//Roots
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
