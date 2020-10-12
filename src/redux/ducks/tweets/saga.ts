import { takeEvery, call, put } from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from './actionCreators';
import { TweeetsApi} from '../../../services/api/tweetsApi';
import {LoadingState} from './contracts/state';




// Our worker Saga: will perform the async increment task
export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweeetsApi.fetchTweets);
        yield put(setTweets(items));
        console.log(items)
    }
    catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,  fetchTweetsRequest)
}
