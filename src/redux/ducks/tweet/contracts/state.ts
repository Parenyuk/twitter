import {Tweet} from '../../tweets/contracts/state';

export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = "ERROR",
    NEVER = "NEVER",
    LOADING = 'LOADING',
}




export type TweetState = {
    data?: Tweet;
    loadingState: LoadingState;
}
