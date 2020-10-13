import {tweetsSaga} from './ducks/tweets/saga';
import { all } from 'redux-saga/effects';
import { tagsSaga } from './ducks/tags/saga';

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga()
    ])
}
