import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
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
                <ul>
                    <li><Typography>Читайте те, що вам цікаво.</Typography> </li>
                    <li><Typography>Послухайте, про що говорять люди.</Typography></li>
                    <li><Typography>Долучайтеся до розмов.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
              <div>
                  <TwitterIcon   />
                  <Typography>Дізнайтеся, що відбувається у світі просто зараз</Typography>
                  <Typography>Приєднуйтеся до Твіттера вже сьогодні.</Typography>
                  <Button variant='contained' color='primary' >Зареєструватись</Button>
                  <Button variant='outlined' color='primary'>Увійти</Button>
              </div>
            </section>
        </div>
    )
}
