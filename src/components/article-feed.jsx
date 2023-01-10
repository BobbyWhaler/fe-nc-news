import ArticleContainer from './article-container'
import { useState, useEffect } from "react";

function ArticlesFeed( {setCurrentArticleComments}) {

    const [articles, setArticles] = useState([])
    const [currentArticle, setCurrentArticle] = useState(null)

    const handleArticleClick = (article) => {
        setCurrentArticle(article)
      }
    const handleBackClick = () => {
        setCurrentArticle(null)
    }
    
    useEffect(()=>{
        fetch(`https://bobbys-nc-news.onrender.com/api/articles`)
        .then((response) => response.json())
        .then((data) =>{
            setArticles(data.articles)
        })
      },[])
    
    if (currentArticle !== null) {
        return (
        <div className="article-feed">
            <div>
                <ArticleContainer article={currentArticle} setCurrentArticleComments={setCurrentArticleComments}/>
            </div>
            <button onClick={(event) => handleBackClick()}>
                Back to Articles
            </button>
        </div>
        )
    } else return (
    <div className="article-feed">
        {articles.map((article) => {
        return (
        <div>
        <div>
        <ArticleContainer article={article} setCurrentArticleComments={setCurrentArticleComments}/>
        </div>
        <button onClick={(event) => handleArticleClick(article)}>Select Artical</button>
        </div>
        )
    })}
    </div>)
}

export default ArticlesFeed