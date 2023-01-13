import ArticleContainer from './article-container'
import SelectedArticleContainer from './selected-article-container'
import { useState, useEffect } from "react";

function ArticlesFeed(
    {currentArticle,
    setCurrentArticle,
    setCurrentArticleComments,
    articles,
    setArticles} ) {

    
    const [articleVotes, setArticleVotes] = useState(0)

    const handleArticleClick = (article) => {
        setCurrentArticle(article)
        fetch(`https://bobbys-nc-news.onrender.com/api/articles/${article.article_id}/comments`)
        .then((response) => response.json())
        .then((data) =>{
            setCurrentArticleComments(data.comments)
            
        })
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
      },[setArticles])
    
    if (currentArticle !== null) {
        return (
        <div className="article-feed">
            <SelectedArticleContainer
            article={currentArticle}
            articleVotes={articleVotes}
            setArticleVotes={setArticleVotes}/>
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
        <ArticleContainer
        article={article}
        setCurrentArticleComments={setCurrentArticleComments}
        articleVotes={articleVotes}
        setArticleVotes={setArticleVotes}/>
        <button onClick={(event) => handleArticleClick(article)}>Select Artical</button>
        </div>
        )
    })}
    </div>)
}

export default ArticlesFeed