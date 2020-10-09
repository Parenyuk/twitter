import React, {ChangeEvent, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Button, TextField, Grid, Box, Paper, IconButton, CircularProgress} from '@material-ui/core';
import {useHomeStyles} from '../pages/Home';
import GifIcon from '@material-ui/icons/Gif';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PollIcon from '@material-ui/icons/Poll';
import MoodIcon from '@material-ui/icons/Mood';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import userPhoto from './../assets/image/photo1.jpg'

type PropsType = {
    classes: ReturnType<typeof useHomeStyles>
    user: {
        avatarUrl: string
    }
}


export const AddTweetForm: React.FC<PropsType> = ({user, classes}: PropsType) => {

    // const [progress, setProgress] = useState<number>(0);

    // const progressCount = (e:any) => {
    //     // return console.log(e.currentTarget.length)
    //     return Number(e.currentTarget.length)
    // }
    // useEffect(()=> {
    //     // if(progressCount == 5) {
    //     //     setProgress(5)
    //     // }
    //     // else if(progressCount == 10) {
    //     //     setProgress(10)
    //     // }
    //     // setProgress(progressCount)
    //     //setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    // }, [progressCount])

    const [text, setText] = useState<string>('');
    const textLimitPercent = (text.length / 280) * 100

    const handleTextArea = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.currentTarget && e.currentTarget.value.length <= 10) {
            setText(e.currentTarget.value)
        }
    }


    return (
        <Paper className={classes.addTweetFormWrapper}>
            <Grid container className={classes.addTweetForm}>
                <Grid item xs={1} spacing={4}>
                    <Avatar alt={'user photo'} src={userPhoto}/>
                </Grid>
                <Grid item xs={11} className={classes.addTweetFormBorder}>
                    <TextField  style={{minWidth: '35vw'}}

                        placeholder={`Что происходит?`} onChange={handleTextArea} value={text} multiline={true}
                               rows={2} rowsMax={5} size={'medium'}
                                disabled={textLimitPercent == 100}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={9} className={classes.addTweetIconButtons}>
                    <IconButton color='primary'>
                        <AddPhotoAlternateIcon/>
                    </IconButton>
                    <IconButton color='primary'>
                        <GifIcon/>
                    </IconButton>
                    <IconButton color='primary'>
                        <PollIcon/>
                    </IconButton>
                    <IconButton color='primary'>
                        <MoodIcon/>
                    </IconButton>
                    <IconButton color='primary'>
                        <InsertInvitationIcon/>
                    </IconButton>

                </Grid>
                <Grid item xs={1}>
                {text &&
                <IconButton color='primary' className={classes.addFormCircleProgress}>
                    <CircularProgress variant={'static'} value={textLimitPercent}
                    style={textLimitPercent === 100 ? {color: 'red'} : {}}
                    />
                    <CircularProgress style={{color: 'rgba(0, 0, 0, 0.1)'}} variant={'static'} value={100}/>
                </IconButton>}
                </Grid>
                <Grid  item xs={2} >

                    <Button className={classes.addTweetButton}
                            variant="contained"
                            color="primary"
                            disabled={textLimitPercent == 100}
                    >
                        Твитнуть</Button>
                </Grid>

            </Grid>
        </Paper>
    )
}
