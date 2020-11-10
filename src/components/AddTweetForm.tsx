import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Button, CircularProgress, Grid, IconButton, Paper, TextField} from '@material-ui/core';
import GifIcon from '@material-ui/icons/Gif';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PollIcon from '@material-ui/icons/Poll';
import MoodIcon from '@material-ui/icons/Mood';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import {useHomeStyles} from '../pages/Home/theme';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddTweet} from '../redux/ducks/tweets/actionCreators';
import {selectAddFormState} from '../redux/ducks/tweets/selectors';
import Snackbar from '@material-ui/core/Snackbar';
import {AddFormState} from '../redux/ducks/tweets/contracts/state';


type PropsType = {
    classes: ReturnType<typeof useHomeStyles>
    user: {
        avatarUrl: string
    }
}


export const AddTweetForm: React.FC<PropsType> = ({user, classes}: PropsType) => {

    const dispatch = useDispatch();

    const addFormState = useSelector( selectAddFormState);



    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false );




    const handleCloseSnackBar = () => {
        setOpenSnackBar(false)
    }

    useEffect(()=> {
        if (addFormState === AddFormState.ERROR) {
            setOpenSnackBar(true)
        }
    }, [addFormState])


    const [text, setText] = useState<string>('');
    const textLimitPercent = (text.length / 280) * 100

    const maxTextLength = 280;

    const handleTextArea = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        if (e.currentTarget && e.currentTarget.value.length <= maxTextLength) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text) )
        setText('')
    }


    return (
        <Paper className={classes.addTweetFormWrapper}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackBar}
                onClose={handleCloseSnackBar}
                message="Error when adding tweet"

            />
            <Grid container className={classes.addTweetForm}>
                <Grid item xs={1} spacing={4}>
                    <Avatar alt={'user photo'} src={user.avatarUrl} /*src={userPhoto}*//>
                </Grid>
                <Grid item xs={11} className={classes.addTweetFormBorder}>
                    <TextField  style={{minWidth: '35vw'}}

                        placeholder={`Что происходит?`} onChange={handleTextArea} value={text} multiline={true}
                               rows={2} rowsMax={5} size={'medium'}
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
                            disabled={!text || textLimitPercent == 100}
                            onClick={handleClickAddTweet}


                    >  {addFormState === AddFormState.LOADING ? <CircularProgress color={'secondary'} size={16} /> : 'твитнуть' }
                       </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
