import { call, put,  takeEvery } from 'redux-saga/effects'
import {LoadingState} from './contracts/state';
import {FetchTweetActionType, setTweetLoadingState, TweetActionsType} from './contracts/actionTypes';
import {setTweetData} from './actionCreators';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {Tweet} from '../tweets/contracts/state';




// Our worker Saga: will perform the async increment task
export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetActionType) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data[0]));
        // console.log(data)
    }
    catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA,  fetchTweetDataRequest)
}
