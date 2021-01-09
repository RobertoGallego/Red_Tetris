import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Article } from "./articleItem"
import { AddArticle } from "./addArticle"
import { addArticle, removeArticle } from "../../redux/action/actions-creators"
import { Dispatch } from "redux"

const App: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    )

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f2f2f2", padding: "30px", margin: "10px" }}>
            <div>
                <h1>Write an article</h1>
                <AddArticle saveArticle={saveArticle} />
                <div style={{ margin: 100 }}></div>
                { articles.map((article: IArticle) => (
                    <Article
                        key={article.id}
                        article={article}
                        removeArticle={removeArticle}
                    />
                ))}
            </div>
        </div>
    )
}

export default App