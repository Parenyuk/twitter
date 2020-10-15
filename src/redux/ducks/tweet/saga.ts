import { takeEvery, call, put } from 'redux-saga/effects'
import {LoadingState} from './contracts/state';
import {setTweetLoadingState, TweetActionsType} from './contracts/actionTypes';
import {TweetApi} from '../../../services/api/tweetApi';




// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetApi.fetchTweet);
        yield put(setTweet(items));
        console.log(items)
    }
    catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA,  fetchTweetsRequest)
}
