import React, {useEffect} from 'react';
import {useHomeStyles} from '../theme';
import {Tweet} from '../../../components/tweet';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTweetData, setTweetData} from '../../../redux/ducks/tweet/actionCreators';
import {
    selectIsTweetLoading,
    selectTweetData
} from '../../../redux/ducks/tweet/selectors';
import {Avatar, CircularProgress, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';




export const FullTweet: React.FC = ():React.ReactElement | null  => {

    const classes = useHomeStyles();
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)


   const dispatch = useDispatch()
    const params: {id?: string} = useParams();
   const id = params.id;


   useEffect(() => {
       if (id) {
           dispatch(fetchTweetData(id))
           //  console.log(id)
       }
        return () => {
           dispatch(setTweetData(undefined))
        }
   }, [dispatch,id])

    if(isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        )
    }
    if(tweetData) {
        // return  <Tweet  classes={classes} {...tweetData}/>
        return (
            <Paper  className={`${classes.tweet} ${classes.tweetsHeader}`} variant="outlined">

                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                            src={tweetData.user.avatarUrl}
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{tweetData.user.fullname}</b>&nbsp;
                            <div>
                                <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                                <span className={classes.tweetUserName}>·</span>&nbsp;
                                <span className={classes.tweetUserName}>1 ч</span>
                            </div>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {tweetData.text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton>
                                    <CommentIcon style={{ fontSize: 20 }} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepostIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ShareIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        )

    }

    return null;


}
