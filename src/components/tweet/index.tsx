import React from 'react';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home/theme';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchDeleteTweetRequest} from '../../redux/ducks/tweets/saga';

type TweetProps = {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username : string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes, _id}: TweetProps): React.ReactElement  => {

    const dispatch = useDispatch();


    const deleteTweet = () => {
        if(_id) {
            dispatch(fetchDeleteTweetRequest(_id))
            // console.log(_id)
        }

    }

    return (
        <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper} >
        <Paper  className={`${classes.tweet} ${classes.tweetsHeader}`} variant="outlined">

                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя ${user.fullname}`}
                            src={user.avatarUrl}
                        />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {text}
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
                       <button onClick={deleteTweet} >X</button>
                    </Grid>
                </Grid>
        </Paper>
        </Link>
    );
};

