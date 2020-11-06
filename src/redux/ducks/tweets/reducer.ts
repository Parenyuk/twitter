import produce, {Draft} from 'immer';
import {AddFormState, LoadingState, TweetsState} from './contracts/state';
import {TweetsActions } from './actionCreators';
import { TweetsActionsType } from './contracts/actionTypes';


export const initialTweetsState: TweetsState = {
    items: [],
    addFormState: AddFormState.NEVER,
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {


    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetsActionsType.SET_LOADIND_STATE:
            draft.loadingState = action.payload;
            break;
        case TweetsActionsType.ADD_TWEET:
            draft.items.push(action.payload);
            draft.loadingState = LoadingState.LOADING;
            draft.addFormState = AddFormState.NEVER;
            break;

        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING;
            break;
        default:
            break;

    }
}, initialTweetsState)
