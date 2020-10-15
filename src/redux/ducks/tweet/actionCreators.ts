import {Tweet} from '../tweets/contracts/state';
import {
    FetchTweetActionType,
    SetTweetDataActionType,
    SetTweetLoadingStateType,
    TweetActionsType
} from './contracts/actionTypes';



export const setTweetData = (payload: Tweet): SetTweetDataActionType => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});



export const fetchTweet = (): FetchTweetActionType => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
});



export type TweetActions = SetTweetLoadingStateType
    | SetTweetDataActionType
    | FetchTweetActionType
