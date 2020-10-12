import {
    Container,
    Grid,
    Paper,
    Typography,
    InputAdornment,
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


export const Home = () => {

    const dispatch = useDispatch();


    const classes = useHomeStyles();
    const mediaQuery = useMediaQuery('(max-width: 900px)');
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);



    useEffect(() => {
        dispatch((fetchTweets()))
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
                            <Typography variant="h6">Главная</Typography>
                            <AddTweetForm
                                user={{
                                    avatarUrl:
                                        'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                                }}
                                classes={classes}
                            />
                        </Paper>
                        { isLoading
                            ? <div className={classes.tweetsCentered} ><CircularProgress color={'secondary'} /></div>
                            : tweets.map( (tweet) => (
                                <Tweet key={tweet._id} text={tweet.text} classes={classes} user={tweet.user}/>
                                ))
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <div style={{position: 'relative', marginTop: 20}}>
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

                        {/*<Paper className={classes.rightSideBlock}>*/}
                        {/*    <Paper className={classes.rightSideBlockHeader} variant="outlined">*/}
                        {/*        <b>Актуальные темы</b>*/}
                        {/*    </Paper>*/}
                        {/*    <List>*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="Санкт-Петербург"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        Твитов: 3 331*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="#коронавирус"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        Твитов: 163 122*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="Беларусь"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        Твитов: 13 554*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*    </List>*/}
                        {/*</Paper>*/}
                        {/*<Paper className={classes.rightSideBlock}>*/}
                        {/*    <Paper className={classes.rightSideBlockHeader} variant="outlined">*/}
                        {/*        <b>Кого читать</b>*/}
                        {/*    </Paper>*/}
                        {/*    <List>*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemAvatar>*/}
                        {/*                <Avatar*/}
                        {/*                    alt="Remy Sharp"*/}
                        {/*                    src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"*/}
                        {/*                />*/}
                        {/*            </ListItemAvatar>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="Dock Of Shame"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        @FavDockOfShame*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*            <Button color="primary">*/}
                        {/*                <PersonAddIcon />*/}
                        {/*            </Button>*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*    </List>*/}
                        {/*</Paper>*/}

                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
