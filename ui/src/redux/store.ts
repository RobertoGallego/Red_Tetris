import thunk from "redux-thunk"
import reducer from "./action/action-reducer";
import { createStore, applyMiddleware, Store } from "redux"

const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

export default store;