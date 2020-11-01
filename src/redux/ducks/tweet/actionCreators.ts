import {
    FetchTweetActionType,
    SetTweetDataActionType,
    SetTweetLoadingStateType,
    TweetActionsType
} from './contracts/actionTypes';
import { TweetState } from './contracts/state';



export const setTweetData = (payload: TweetState['data']): SetTweetDataActionType => ({
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
