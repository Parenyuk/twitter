import produce, {Draft} from 'immer';
import {LoadingState, TweetsState} from './contracts/state';
import {TweetsActions, TweetsActionsType} from './actionCreators';


export const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    // const {type, payload} = action;

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
        default:
            break;

    }

    // if(type === TweetsActionsType.SET_TWEETS) {
    //     draft.items = payload;
    //     draft.loadingState = LoadingState.LOADED;
    // }
    // if(type === TweetsActionsType.SET_LOADIND_STATE) {
    //     draft.loadingState = payload;
    // }
}, initialTweetsState)
