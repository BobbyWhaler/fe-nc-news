import ArticleVotes from "./selected-article-components/votes-container"

function SelectedArticleContainer({ article, articleVotes, setArticleVotes, setCommentsActive, commentsActive  }) {

    const onCommentsButtonClick = (() => {
        if (!commentsActive) { setCommentsActive(true) } else if (commentsActive) setCommentsActive(false)
    })
    return (
    <div class="selected-article-container">
    <h2 class="article-header">{article.title}
    <p class="article-author">by {article.author}</p></h2>
    <div class="article-body">{article.body}</div>
    <div class="article-bottom-bar">
    <button className={commentsActive ? "article-comments-button-active" : "article-comments-button"} onClick={onCommentsButtonClick}>Comments</button>
    <div style={{flex: 1}}></div>
    <ArticleVotes
    article={article}
    articleVotes={articleVotes}
    setArticleVotes={setArticleVotes}/>
    </div>
    </div>
    )
}

export default SelectedArticleContainer