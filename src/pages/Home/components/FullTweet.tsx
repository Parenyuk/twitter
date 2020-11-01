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
import {CircularProgress} from '@material-ui/core';




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
        return  <Tweet  classes={classes} {...tweetData}/>

    }

    return null;


}
