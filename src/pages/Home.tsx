import React from 'react';
import {Avatar, Container, Grid, IconButton, List, ListItem, Paper, TextField, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {makeStyles} from '@material-ui/core/styles';


export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        fontSize: 40,
        margin: '10px 0',
    },
    logoIcon: {
        fontsize: 36
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',

    },
    sideMenuListLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 30,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '20px 15px',
        '& h6': {
            fontWeight: 800
        }
    },

    // hover: {
    //     '&:hover': {
    //         color: theme.palette.primary.main,
    //         // color: 'green'
    //     },
// },
}))


export const Home = () => {

    const classes = useHomeStyles();

    return (
        <Container maxWidth={'md'} className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} size="small">
                                <TwitterIcon color="primary" className={classes.logoIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <HomeIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton></li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <SearchIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant='h6'>Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant='h6'>Уведомления</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant='h6'>Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant='h6'>Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <ListIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant='h6'>Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton size="small">
                                <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant='h6'>Профиль</Typography>
                        </li>
                    </ul>

                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'><Typography
                            variant='h6'>Главная</Typography></Paper>
                    </Paper>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <Avatar alt="User Avatar"
                                        src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
                            </Grid>
                            <Grid item xs={11}>
                           <b>Lola</b>      @Lola

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <TextField id="filled-basic" label="Поиск в Твиттере" variant="filled" fullWidth>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </TextField>
                </Grid>
            </Grid>
        </Container>
    )
}
