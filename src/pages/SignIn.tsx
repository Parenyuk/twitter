import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '80%',
        top: '52%',
        transform: 'translate(-50%, -50%)',
        width: '220%',
        height: '200%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 350,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40
    },
    blueSideListInfoIcon: {
        fontSize: 30,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45,

    },
    loginSideWrapper: {
        width: '380px',
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20

    },
    button: {
        fontWeight: 700,
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    }

}))


export const SignIn = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li><Typography className={classes.blueSideListInfoItem} variant='h6'> <SearchIcon
                        className={classes.blueSideListInfoIcon}/> Читайте те, що вам цікаво.</Typography></li>
                    <li><Typography className={classes.blueSideListInfoItem} variant='h6'> <PeopleOutlineIcon
                        className={classes.blueSideListInfoIcon}/> Послухайте, про що говорять люди.</Typography>
                    </li>
                    <li><Typography className={classes.blueSideListInfoItem} variant='h6'><ChatBubbleOutlineIcon
                        className={classes.blueSideListInfoIcon}/> Долучайтеся до розмов.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
                    <Typography variant='h4' className={classes.loginSideTitle}>Дізнайтеся, що відбувається у світі
                        просто зараз</Typography>
                    <Typography><b>
                        Приєднуйтеся до Твіттера вже сьогодні.
                    </b>
                    </Typography>
                    <Button style={{marginBottom: 15}} variant='contained' color='primary'
                            fullWidth>Зареєструватись</Button>
                    <Button variant='outlined' color='primary' fullWidth>Увійти</Button>
                </div>
            </section>
        </div>
    )
}
