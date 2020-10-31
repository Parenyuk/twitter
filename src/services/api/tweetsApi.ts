import axios from 'axios';
import {Tweet, TweetsState} from '../../redux/ducks/tweets/contracts/state';


export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets').then( ({data}) => data)
    },
    fetchTweetData(id: string): Promise<Tweet> {
        return axios.get(`/tweet/${id}`).then( ({data}) => data)
    }
}
