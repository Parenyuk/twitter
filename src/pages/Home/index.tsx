import {
    Container,
    Grid,
    Paper,
    Typography,
    InputAdornment, List, ListItem, ListItemText, Divider, ListItemAvatar, Button, Avatar, IconButton,
} from '@material-ui/core';
import React, {useEffect} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';
import {SideMenu} from '../../components/SideMenu';
import {AddTweetForm} from '../../components/AddTweetForm';
import {Tweet} from '../../components/tweet';
import {useHomeStyles} from './theme';
import {SearchTextField} from '../../components/SearchTextField';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTweets} from '../../redux/ducks/tweets/actionCreators';
import {selectIsTweetsLoading, selectTweetsItems} from '../../redux/ducks/tweets/selectors';
import { CircularProgress } from '@material-ui/core';
import {fetchTags} from '../../redux/ducks/tags/actionCreators';
import {Tags} from '../../components/Tags';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { Route } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Home = () => {

    const dispatch = useDispatch();


    const classes = useHomeStyles();
    const mediaQuery = useMediaQuery('(max-width: 900px)');
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);





    useEffect(() => {
        dispatch((fetchTweets()));
        dispatch((fetchTags()))
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} mediaQuery={mediaQuery}/>
                </Grid>
                <Grid item xs={6}>

                    <Paper className={classes.tweetsWrapper} variant="outlined">

                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Route path="/home:any" >
                           <IconButton color={'primary'} >
                               <ArrowBackIcon/>
                           </IconButton>
                            </Route>

                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant="h6">Твиты</Typography>
                            </Route>

                            <Route path="/home/tweet" >
                                <IconButton color={'primary'} >
                                    <ArrowBackIcon/>
                                </IconButton>
                                <Typography variant="h6">Твитнуть</Typography>
                            </Route>
                        </Paper>





                           <Route path={['/home', '/home /search']} exact >
                           <Paper>
                               <AddTweetForm
                                   user={{
                                       avatarUrl:
                                           'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                                   }}
                                   classes={classes}
                               />
                           </Paper>
                       </Route>
                        <Route path={'/home'} exact >
                            { isLoading
                                ? <div className={classes.tweetsCentered} ><CircularProgress color={'secondary'} /></div>
                                : tweets.map( (tweet) => (
                                    <Tweet key={tweet._id} classes={classes} {...tweet} />
                                ))
                            }
                        </Route>
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <div  className={classes.rightSide} >
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes}/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Of Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
