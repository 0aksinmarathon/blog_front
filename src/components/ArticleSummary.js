import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        margin: 50,
    },
    content: {
        padding:  5,
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

export default function ArticleSummary({title, body, id}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <Typography className={classes.title} color="textSecondary">
                    {title}
                </Typography>
                <Divider/>
                <Typography className={classes.body} align='center'>
                    {body}
                </Typography>
            </CardContent>
            <Divider/>
            <CardActions>
                <Link to={`/article/${id}`}>
                <Button size="small">Continue Reading...</Button>
                </Link>
            </CardActions>

        </Card>
    );
}
