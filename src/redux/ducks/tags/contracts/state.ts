export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = "ERROR",
    NEVER = "NEVER",
    LOADING = 'LOADING',
}

export type Tag = {
    _id: string;
    name: string;
    count: number;

}

export type TagsState = {
    items: Tag[];
    loadingState: LoadingState;
}
