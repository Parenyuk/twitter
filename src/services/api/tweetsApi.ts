import axios from 'axios';
import {TweetsState} from '../../redux/ducks/tweets/contracts/state';


export const TweeetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets').then( ({data}) => data)
    }
}
