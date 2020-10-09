import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Button, TextField, Grid, Box} from '@material-ui/core';
import {useHomeStyles} from '../pages/Home';

type PropsType = {
    classes: ReturnType<typeof useHomeStyles>
    user: {
        avatarUrl: string
    }
}


export const AddTweetForm: React.FC<PropsType> = ({user, classes}: PropsType) => {
    return (
        <div>
            <Grid container  className={classes.addTweetForm} >
                <Grid item xs={1} spacing={4} >
                    <Avatar alt={''} src={user.avatarUrl}/>
                </Grid>
                <Grid item xs={11} className={classes.addTweetFormBorder} >
                    <TextField placeholder={`Что происходит?`} />
                </Grid>
                {/*<Box borderBottom={1} />*/}
                </Grid>

        <Button
            className={classes.addTweetButton}
            variant="contained"
            color="primary"
        >Твитнуть</Button>
        </div>
    )
}
