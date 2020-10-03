import React from 'react';
import {Grid, IconButton, List, ListItem, Paper, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export const Home = () => {
    return (
        <div>
            <section>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <ul>
                            <li>
                                <IconButton size="small">
                                    <TwitterIcon color="primary"/>
                                </IconButton>
                            </li>
                            <li>
                                <IconButton size="small">
                                    <HomeIcon/>
                                </IconButton></li>
                            <li>
                                <IconButton size="small">
                                    <SearchIcon/>
                                </IconButton>
                                <Typography variant='h6'>Поиск</Typography>
                            </li>
                            <li>
                                <IconButton size="small">
                                    <NotificationsNoneIcon/>
                                </IconButton>
                                <Typography variant='h6'>Уведомления</Typography>
                            </li>
                            <li>
                                <IconButton size="small">
                                    <MailOutlineIcon/>
                                </IconButton>
                                <Typography variant='h6'>Сообщения</Typography>
                            </li>
                            <li>
                                <IconButton size="small">
                                    <BookmarkBorderIcon/>
                                </IconButton>
                                <Typography variant='h6'>Закладки</Typography>
                            </li>
                            <li>
                                <IconButton size="small">
                                    <ListIcon/>
                                </IconButton>
                                <Typography variant='h6'>Список</Typography>
                            </li>
                            <li>
                                <IconButton size="small">
                                    <PermIdentityIcon/>
                                </IconButton>
                                <Typography variant='h6'>Профиль</Typography>
                            </li>
                        </ul>

                    </Grid>
                    <Grid item xs={7}>
                        <Paper>xs=6</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>xs=6</Paper>
                    </Grid>
                </Grid>
            </section>
        </div>
    )
}
