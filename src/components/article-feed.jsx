import ArticleContainer from './article-container'
import { useState, useEffect } from "react";

function ArticlesFeed() {

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        fetch(`https://bobbys-nc-news.onrender.com/api/articles`)
        .then((response) => response.json())
        .then((data) =>{
            setArticles(data.articles)
        })
      },[])

    return (
    <div>{articles.map((article) => {
        return <ArticleContainer article={article}/>
    })}
    </div>
    )
}

export default ArticlesFeed