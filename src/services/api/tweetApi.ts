import axios from 'axios';
import {TweetState} from '../../redux/ducks/tweet/contracts/state';



export const TweetApi = {
    fetchTweet(): Promise<TweetState['items']> {
        return axios.get('/tweets').then( ({data}) => data)
    }
}
