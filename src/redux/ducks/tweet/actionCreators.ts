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



export const fetchTweetData = (payload: string): FetchTweetActionType => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
});



export type TweetActions = SetTweetLoadingStateType
    | SetTweetDataActionType
    | FetchTweetActionType
