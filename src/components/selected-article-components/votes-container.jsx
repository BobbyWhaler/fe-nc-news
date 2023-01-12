import { useEffect, useState } from "react"
import sendArticleVote from "../api"

function ArticleVotes({article, articleVotes, setArticleVotes}) {

const [err, setErr] = useState(null)
let inc_votes = 0

useEffect(() => {
    setArticleVotes(article.votes)
}, [setArticleVotes, article.votes])

// need to figure out how to make it only increment once.

const handleUpVoteClick = (article) => {
    inc_votes = 1
    if (article.votes === articleVotes)
    setArticleVotes(articleVotes + 1);
    setErr(null);
    sendArticleVote(article, inc_votes, setArticleVotes, setErr)
    };

const handleDownVoteClick = () => {
    inc_votes = -1
    if (articleVotes === article.votes) {
    setArticleVotes(articleVotes - 1);
    setErr(null);
    sendArticleVote(article, inc_votes, setArticleVotes, setErr)
    }
}
    if (err) return <p>{err}</p>;
    return (
        <div class="article-votes-container">
            <p>Votes: {articleVotes}</p>
            <button onClick={(event) => handleUpVoteClick(article)}>Up Vote</button>
            <button onClick={(event) => handleDownVoteClick()}>Down Vote</button>
        </div>
    )
}

export default ArticleVotes