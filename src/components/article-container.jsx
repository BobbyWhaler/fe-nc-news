import React from 'react'

function ArticleContainer({ article }) {

    return (
    <box>
    <h1>{article.title} by {article.author}</h1>
    <p>{article.body}</p>
    <button>Comments</button>
    </box>
    )
}

export default ArticleContainer