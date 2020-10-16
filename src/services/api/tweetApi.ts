import axios from 'axios';
import { Tweet } from '../../redux/ducks/tweets/contracts/state';



export const TweetApi = {
    fetchTweetData(id: string): Promise<Tweet> {
        return axios.get(`/tweet/${id}`).then( ({data}) => data)
    }
}
