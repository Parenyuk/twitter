import {Action} from 'redux';
import {TweetsState} from './contracts/state';

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS'
}
export type SetTweetsActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];

}
export type FetchTweetsActionType  = Action<TweetsActionsType> &  {
    type: TweetsActionsType.FETCH_TWEETS;

}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
});
export type TweetsActions = SetTweetsActionType


