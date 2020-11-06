import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState,} from './actionCreators';

import {AddFormState, LoadingState, Tweet} from './contracts/state';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {FetchAddTweetActionType, TweetsActionsType} from './contracts/actionTypes';


// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    }
    catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({ payload }:  FetchAddTweetActionType) {
    try {
        const data: Tweet = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: 'Victor Parenyuk',
                username: 'sauber',
                avatarUrl: 'https://source.unsplash.com/random/100*100?5',
            },
        };
        const item = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS,  fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET,  fetchAddTweetRequest)
}
