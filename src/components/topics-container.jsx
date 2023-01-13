import { useEffect } from "react"

function TopicsContainer( {topics, setTopics, setArticles, currentArticle}) {


const handleClick = (topic) => {
    fetch(`https://bobbys-nc-news.onrender.com/api/articles?topic=${topic.slug}`)
        .then((response) => response.json())
        .then((data) =>{
            setArticles(data.articles)
        })
      }


    useEffect(()=>{
        fetch(`https://bobbys-nc-news.onrender.com/api/topics`)
        .then((response) => response.json())
        .then((data) =>{
            setTopics(data.topics)
        })
      },[setTopics])

      if (currentArticle === null)
      return (
        <div>
          {topics.map((topic) => {
            return <button onClick={(event) => handleClick(topic)}>{topic.slug}</button>;
          })}
        </div>
      );
}

export default TopicsContainer