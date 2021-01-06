import './App.css';
import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },

        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    }
));


export default function ButtonAppBar() {
    const classes = useStyles();
    const [isDrawerOpen, shiftDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        shiftDrawer(open);
    };

    const DrawerList = () => (
        <div>
            <List>
                <Link to="/">
                    <ListItem button key="home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </Link>
                <Link to="/about">
                    <ListItem button key="about">
                        <ListItemIcon>
                            <EmojiPeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItem>
                </Link>
                <Link to="/article">
                    <ListItem button key="articles">
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Articles"/>

                    </ListItem>
                </Link>
                <Link to="/counter">
                    <ListItem button key="counter">
                        <ListItemIcon>
                            <AddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Counter"/>

                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    onClick={toggleDrawer(true)}>
                            <MenuIcon/>
                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                            ブログ的な
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {DrawerList()}
                </div>
            </Drawer>
        </React.Fragment>
    );
}
