function SelectedArticleContainer({ article }) {

    return (
    <div>
    <h2>{article.title} by {article.author}</h2>
    <p>{article.body}</p>
    <div>votes /\ \/</div>
    </div>
    )
}

export default SelectedArticleContainer