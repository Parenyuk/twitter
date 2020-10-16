import { call, put, takeLatest } from 'redux-saga/effects'
import {LoadingState} from './contracts/state';
import {FetchTweetActionType, setTweetLoadingState, TweetActionsType} from './contracts/actionTypes';
import {TweetApi} from '../../../services/api/tweetApi';
import {setTweetData} from './actionCreators';




// Our worker Saga: will perform the async increment task
export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetActionType) {
    try {

        const data = yield call(TweetApi.fetchTweetData, tweetId);
        yield put(setTweetData(data));
        console.log(data)
    }
    catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA,  fetchTweetDataRequest)
}
