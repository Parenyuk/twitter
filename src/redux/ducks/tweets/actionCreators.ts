import {Action} from 'redux';
import {LoadingState, TweetsState} from './contracts/state';

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADIND_STATE = 'tweets/SET_LOADIND_STATE'
}
export type SetTweetsActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
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



export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
});



export type TweetsActions = SetTweetsActionType
    | SetTweetsLoadingStateType
    | FetchTweetsActionType
