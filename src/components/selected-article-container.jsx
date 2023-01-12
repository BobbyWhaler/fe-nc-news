import ArticleVotes from "./selected-article-components/votes-container"

function SelectedArticleContainer({ article, articleVotes, setArticleVotes }) {

    return (
    <div class="selected-article-container">
    <h2 class="article-header"> {article.title}</h2>
    <p class="article-author">by {article.author}</p>
    <p class="article-body">{article.body}</p>
    <ArticleVotes
    article={article}
    articleVotes={articleVotes}
    setArticleVotes={setArticleVotes}/>
    </div>
    )
}

export default SelectedArticleContainer