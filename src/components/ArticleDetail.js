import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import Comment from "./Comment";


function ArticleDetail() {
    const {id} = useParams();
    const [article, setArticle] = useState();
    const [comments, setComments] = useState()

    useEffect(async () => {
        const article_res = await axios.get(`${process.env.REACT_APP_API_URL}/article/${id}`);
        setArticle(article_res.data)
        const comment_res = await axios.get(`${process.env.REACT_APP_API_URL}/comment?article=${id}`);
        // const comment_res = await axios.get(`${process.env.REACT_APP_API_URL}/comment`);
        setComments(comment_res.data);
        console.debug(comment_res.data)
    }, [])

    return (<div>
            {
                article ?
                    <React.Fragment>
                        <h1>{article.title}</h1>
                        <h5>{article.body}</h5>
                    </React.Fragment> : null

            }
             <h2>Comments</h2>
            {comments ? comments.map(comment => (
                <Comment user_id={comment.user} body={comment.body} />
            )) : "Be the first to post a comment"
            }
        </div>
    );
}

export default ArticleDetail;

