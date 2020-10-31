import React from 'react';
import {useHomeStyles} from '../theme';
import {Tweet} from '../../../components/tweet';




export const FullTweet: React.FC = ():React.ReactElement  => {

    const classes = useHomeStyles();
    debugger
    return (
        <div>
          твит
            {/*<Tweet key={tweet._id} classes={classes} {...tweet} />*/}
        </div>
    )
}
