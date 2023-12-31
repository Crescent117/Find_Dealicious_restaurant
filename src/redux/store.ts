import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import searchListReducer from "./SearchList/reducer" 
import { composeWithDevTools } from 'redux-devtools-extension';
import trustBestReducer from "./TrustBest/reducer"

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  searchList: searchListReducer,
  trustBest: trustBestReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;