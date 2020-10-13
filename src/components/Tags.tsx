import React, {ReactElement} from 'react';
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from '@material-ui/core';
import {useHomeStyles} from '../pages/Home/theme';
import {useSelector} from 'react-redux';
import {selectIsTagsLoaded,  selectTagsItems} from '../redux/ducks/tags/selectors';
import {Link} from 'react-router-dom';


type TagsProps = {
    classes: ReturnType<typeof useHomeStyles>
}



export const Tags: React.FC<TagsProps> = ( {classes}:TagsProps ): ReactElement | null => {

    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded)

    if(!isLoaded) {
        return null
    }


    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {items.map((obj) => (
                    <React.Fragment key={obj._id}>
                        <ListItem className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${obj.name}`}>
                                <ListItemText
                                    primary={obj.name}
                                    secondary={
                                        <Typography component="span" variant="body2" >
                                            Твитов: {obj.count}
                                        </Typography>
                                    }
                                />
                            </Link>
                        </ListItem>
                        <Divider component="li" />
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
};


