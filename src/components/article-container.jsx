function ArticleContainer({ article }) {

    return (
    <div>
    <h2>{article.title}</h2>
    <p>by {article.author}</p>
    <div>Votes{article.votes} /\ \/</div>
    </div>
    )
}

export default ArticleContainer