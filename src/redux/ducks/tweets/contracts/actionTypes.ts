import {Action} from 'redux';
import {TweetsState, AddFormState, Tweet, LoadingState} from './state';


export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADIND_STATE = 'tweets/SET_LOADIND_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}

export type SetTweetsActionType = Action<TweetsActionsType> & {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export type FetchAddTweetActionType = Action<TweetsActionsType> & {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string;
}

export type SetAddFormStateActionType = Action<TweetsActionsType> & {
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}

export type AddTweetActionType = Action<TweetsActionsType> & {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
}


export type FetchTweetsActionType = Action<TweetsActionsType> & {
    type: TweetsActionsType.FETCH_TWEETS;
}


export type SetTweetsLoadingStateType = Action<TweetsActionsType> & {
    type: TweetsActionsType.SET_LOADIND_STATE;
    payload: LoadingState;
}
