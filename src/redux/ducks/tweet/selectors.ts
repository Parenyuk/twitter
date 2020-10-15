import {LoadingState, TweetState} from './contracts/state';
import {RootStateType} from '../../store';
import {createSelector} from 'reselect'

export const selectTweet = (state: RootStateType): TweetState => state.tweet

export const selectTweetItems = createSelector(selectTweet, (tweet) => tweet.data);


export const selectIsTweetLoading = (state: RootStateType): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded= (state: RootStateType): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectLoadingState = (state: RootStateType): LoadingState => selectTweet(state).loadingState;


