
export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = "ERROR",
    NEVER = "NEVER"
}


export type Tweet = {
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
