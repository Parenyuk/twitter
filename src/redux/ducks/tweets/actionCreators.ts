import {
    SetAddFormStateActionType,
    SetTweetsLoadingStateType,
    TweetsActionsType,
    SetTweetsActionType,
    FetchAddTweetActionType,
    FetchTweetsActionType,
    AddTweetActionType, DeleteTweetActionType
} from './contracts/actionTypes';
import { AddFormState, TweetsState, Tweet, LoadingState } from './contracts/state';

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateType => ({
    type: TweetsActionsType.SET_LOADIND_STATE,
    payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionType => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
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

export const deleteTweet = (payload: string): DeleteTweetActionType => ({
    type: TweetsActionsType.DELETE_TWEET,
    payload,
});


export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS,
});


export type TweetsActions = SetTweetsActionType
    | SetTweetsLoadingStateType
    | FetchTweetsActionType
    | FetchAddTweetActionType
    | AddTweetActionType
    | SetAddFormStateActionType
|  DeleteTweetActionType
