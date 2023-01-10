import React from 'react'

function ArticleContainer({ article }) {

    return (
    <box>
    <h2>{article.title} by {article.author}</h2>
    <p>{article.body}</p>
    <div>votes /\ \/</div>
    <button>Comments</button>
    </box>
    )
}

export default ArticleContainer