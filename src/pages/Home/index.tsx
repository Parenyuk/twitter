import {
    Container,
    Grid,
    Paper,
    Typography,
    InputAdornment,
} from '@material-ui/core';
import React from 'react';


import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';
import {SideMenu} from '../../components/SideMenu';
import {AddTweetForm} from '../../components/AddTweetForm';
import { Tweet } from '../../components/tweet';
import { useHomeStyles } from './theme';
import {SearchTextField} from '../../components/SearchTextField';







export const Home = () => {
  const classes = useHomeStyles();
    const mediaQuery = useMediaQuery('(max-width: 900px)');

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} mediaQuery={mediaQuery}/>
                </Grid>
                <Grid item xs={6}>

                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                            <AddTweetForm
                                user={{
                                    avatarUrl:
                                        'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                                }}
                                classes={classes}
                            />
                        </Paper>
                        {[
                            ...new Array(20).fill(
                                <Tweet
                                    text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                                    user={{
                                        fullname: 'Glafira Zhur',
                                        username: 'GlafiraZhur',
                                        avatarUrl:
                                            'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                                    }}
                                    classes={classes}
                                />,
                            ),
                        ]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <div style={{position: 'relative'}} >
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />

                        {/*<Paper className={classes.rightSideBlock}>*/}
                        {/*    <Paper className={classes.rightSideBlockHeader} variant="outlined">*/}
                        {/*        <b>Актуальные темы</b>*/}
                        {/*    </Paper>*/}
                        {/*    <List>*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="Санкт-Петербург"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        Твитов: 3 331*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="#коронавирус"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        Твитов: 163 122*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="Беларусь"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        Твитов: 13 554*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*    </List>*/}
                        {/*</Paper>*/}
                        {/*<Paper className={classes.rightSideBlock}>*/}
                        {/*    <Paper className={classes.rightSideBlockHeader} variant="outlined">*/}
                        {/*        <b>Кого читать</b>*/}
                        {/*    </Paper>*/}
                        {/*    <List>*/}
                        {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                        {/*            <ListItemAvatar>*/}
                        {/*                <Avatar*/}
                        {/*                    alt="Remy Sharp"*/}
                        {/*                    src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"*/}
                        {/*                />*/}
                        {/*            </ListItemAvatar>*/}
                        {/*            <ListItemText*/}
                        {/*                primary="Dock Of Shame"*/}
                        {/*                secondary={*/}
                        {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                        {/*                        @FavDockOfShame*/}
                        {/*                    </Typography>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*            <Button color="primary">*/}
                        {/*                <PersonAddIcon />*/}
                        {/*            </Button>*/}
                        {/*        </ListItem>*/}
                        {/*        <Divider component="li" />*/}
                        {/*    </List>*/}
                        {/*</Paper>*/}

                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
