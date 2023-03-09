import { useEffect, useState } from "react"
import { patchArticleVote } from "../api"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
            <p class="article-votes" >Votes: {articleVotes}</p>
            <button class={incVotes === 1 ? "article-votes-button-active" : "article-votes-button"} disabled={incVotes !== 0} onClick={(event) => handleUpVoteClick()}>
                <ArrowDropUpIcon fontSize="large" color="white"/>
            </button>
            <button class={incVotes === -1 ? "article-votes-button-active" : "article-votes-button"} disabled={incVotes !== 0} onClick={(event) => handleDownVoteClick()}>
                <ArrowDropDownIcon fontSize="large" color="white"/>
            </button>
        </div>
    )
}

export default ArticleVotes