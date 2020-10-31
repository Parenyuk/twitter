import React, {useEffect} from 'react';
import {useHomeStyles} from '../theme';
import {Tweet} from '../../../components/tweet';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTweetDataRequest} from '../../../redux/ducks/tweet/saga';
import {fetchTweetData} from '../../../redux/ducks/tweet/actionCreators';
import {selectTweet, selectTweetData} from '../../../redux/ducks/tweet/selectors';




export const FullTweet: React.FC = ():React.ReactElement  => {

    const classes = useHomeStyles();
    const tweetData = useSelector(selectTweetData)


   const dispatch = useDispatch()
    const params: {id?: string} = useParams();
   const id = params.id;

   useEffect(() => {
       if (id) {
           dispatch(fetchTweetData(id))
       }

   }, [])


    return <Tweet  classes={classes} {...tweetData} />
}
