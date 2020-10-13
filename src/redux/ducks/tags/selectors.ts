import {LoadingState, TagsState} from './contracts/state';
import {RootStateType} from '../../store';
import {createSelector} from 'reselect'

export const selectTags = (state: RootStateType): TagsState => state.tags

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);


export const selectIsTagsLoading = (state: RootStateType): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded= (state: RootStateType): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootStateType): LoadingState => selectTags(state).loadingState;
