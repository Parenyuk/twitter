import {AddFormState, LoadingState, TweetsState} from './contracts/state';
import {RootStateType} from '../../store';
import {createSelector} from 'reselect'

export const selectTweets = (state: RootStateType): TweetsState => state.tweets

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);


export const selectIsTweetsLoading = (state: RootStateType): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded= (state: RootStateType): boolean => selectLoadingState(state) === LoadingState.LOADED;



export const selectLoadingState = (state: RootStateType): LoadingState => selectTweets(state).loadingState;

export const selectAddFormState = (state: RootStateType): AddFormState => selectTweets(state).addFormState;


