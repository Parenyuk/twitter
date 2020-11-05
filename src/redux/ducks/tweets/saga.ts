import { takeEvery, call, put } from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from './actionCreators';

import {LoadingState, Tweet} from './contracts/state';
import { TweetsApi } from '../../../services/api/tweetsApi';




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

// export function* addTweetsRequest(payload: Tweet) {
//     try {
//         const items = yield call(TweetsApi.addTweet, payload);
//         yield put(addTweet(items));
//         console.log(items)
//     }
//     catch (e) {
//         yield put(setTweetsLoadingState(LoadingState.ERROR))
//     }
// }


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,  fetchTweetsRequest)
}
