
export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = "ERROR",
    NEVER = "NEVER",
    LOADING = 'LOADING',
}


export type Tweet = {
    _id: string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}


export type TweetsState = {
    items: Tweet[];
    loadingState: LoadingState;
}
