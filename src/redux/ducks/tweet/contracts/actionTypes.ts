import {Action} from 'redux';
import {Tweet} from '../../tweets/contracts/state';
import {LoadingState, TweetState} from './state';

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweets/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweets/FETCH_TWEET_DATA',
    SET_LOADIND_STATE = 'tweets/SET_LOADIND_STATE'
}
export type SetTweetDataActionType  = Action<TweetActionsType> &  {
    type: TweetActionsType.SET_TWEET_DATA
    payload: TweetState['data'];
}
export type FetchTweetActionType  = Action<TweetActionsType> &  {
    type: TweetActionsType.FETCH_TWEET_DATA;
    payload: string;

}



export type SetTweetLoadingStateType  = Action<TweetActionsType> &  {
    type: TweetActionsType.SET_LOADIND_STATE;
    payload: LoadingState;
}
export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateType => ({
    type: TweetActionsType.SET_LOADIND_STATE,
    payload,
});
