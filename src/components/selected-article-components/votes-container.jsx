import { useEffect, useState } from "react"
import { patchArticleVote } from "../api"

function ArticleVotes({article, articleVotes, setArticleVotes}) {

const [err, setErr] = useState(null)
const [incVotes, setIncVotes] = useState(0)

useEffect(() => {
    setArticleVotes(article.votes)
}, [setArticleVotes, article.votes])

const handleUpVoteClick = () => {
    setIncVotes(1)
    if (article.votes === articleVotes) {
    setArticleVotes(articleVotes + 1);
    setErr(null);
    patchArticleVote(article, 1, setArticleVotes, setErr)
    }
}

const handleDownVoteClick = () => {
    setIncVotes(-1)
    if (articleVotes === article.votes) {
    setArticleVotes(articleVotes - 1);
    setErr(null);
    patchArticleVote(article, -1, setArticleVotes, setErr)
    }
}
    if (err) return <p>{err}</p>;
    return (
        <div class="article-votes-container">
            <p>Votes: {articleVotes}</p>
            <button disabled={incVotes !== 0} onClick={(event) => handleUpVoteClick()}>Up Vote</button>
            <button disabled={incVotes !== 0} onClick={(event) => handleDownVoteClick()}>Down Vote</button>
        </div>
    )
}

export default ArticleVotes