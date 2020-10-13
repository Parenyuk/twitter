import {Action} from 'redux';
import {LoadingState} from '../tweets/contracts/state';
import {TagsState} from './contracts/state';


export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADIND_STATE = 'tags/SET_LOADIND_STATE'
}

export type SetTagsActionType  = Action<TagsActionsType> &  {
    type: TagsActionsType.SET_TAGS;
    payload: TagsState['items'];
}
export type FetchTagsActionType  = Action<TagsActionsType> &  {
    type: TagsActionsType.FETCH_TAGS;

}


export type SetTagsLoadingStateType  = Action<TagsActionsType> &  {
    type: TagsActionsType.SET_LOADIND_STATE;
    payload: LoadingState;
}
export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateType => ({
    type: TagsActionsType.SET_LOADIND_STATE,
    payload,
});



export const setTags = (payload: TagsState['items']): SetTagsActionType => ({
    type: TagsActionsType.SET_TAGS,
    payload,
});



export const fetchTags = (): FetchTagsActionType => ({
    type: TagsActionsType.FETCH_TAGS,
});



export type TagsActions = SetTagsActionType
    | SetTagsLoadingStateType
    | FetchTagsActionType
