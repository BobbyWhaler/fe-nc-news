function ArticleContainer({ article }) {

    return (
    <div class="article-container">
    <h2>{article.title}</h2>
    <p>Topic: {article.topic}</p>
    <p>by {article.author}</p>
    <div>Votes{article.votes}</div>
    </div>
    )
}

export default ArticleContainer