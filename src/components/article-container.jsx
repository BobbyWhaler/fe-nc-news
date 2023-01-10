function ArticleContainer({ article, setCurrentArticleComments }) {

    const handleCommentsClick = (article_id) => {
        fetch(`https://bobbys-nc-news.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => response.json())
        .then((data) =>{
            setCurrentArticleComments(data.comments)
            
        })
    }

    return (
    <div>
    <h2>{article.title} by {article.author}</h2>
    <p>{article.body}</p>
    <div>votes /\ \/</div>
    <button onClick={(event) => handleCommentsClick(article.article_id)}>Comments</button>
    </div>
    )
}

export default ArticleContainer