import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
    root: {
        marginLeft: 10,
    },
    content: {
        padding: 5,
    },
    title: {
        fontSize: 20,
        paddingLeft: 20,
        textAlign: 'left',
    },
    body: {
        fontSize: 15,
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginLeft: "auto",
        marginRight: "auto",
        maxHeight: 70,
        margin: 5,
    },
});

export default function Comment({user_id, body}) {
    const classes = useStyles();
    const [user, setUser] = useState()

    useEffect(async () => {
        const article_res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${user_id}`);
        setUser(article_res.data)
    }, [])
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <Typography className={classes.title} align='center'>
                    {user ? `By ${user.name}`: null}
                </Typography>
                <Divider/>
                <Typography className={classes.body} align='center'>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
}
