import {Action} from 'redux';
import {LoadingState, TweetsState, Tweet} from './contracts/state';

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADIND_STATE = 'tweets/SET_LOADIND_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET ='tweets/ADD_TWEET'
}
export type SetTweetsActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export type FetchAddTweetActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string;
}
export type AddTweetActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
}

export type FetchTweetsActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.FETCH_TWEETS;
}


export type SetTweetsLoadingStateType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.SET_LOADIND_STATE;
    payload: LoadingState;
}
export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateType => ({
    type: TweetsActionsType.SET_LOADIND_STATE,
    payload,
});



export const setTweets = (payload: TweetsState['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionType => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});

export const addTweet = (payload: Tweet): AddTweetActionType => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
});

export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
});



export type TweetsActions = SetTweetsActionType
    | SetTweetsLoadingStateType
    | FetchTweetsActionType
