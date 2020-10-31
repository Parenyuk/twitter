import {makeStyles, Theme} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },

        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            width: 80,
        },
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450,
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetWrapper: {
        textDecoration: 'none',
    },
    addTweetForm: {


    },
    addTweetFormWrapper: {
        // display: 'flex'
    },
    addTweetFormBorder: {
        borderBottomLength: '4 50px',
        borderBottomColor: theme.palette.text.secondary,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        fontSize: '24px',
        margin: '0 0 10px',
        padding: '0 0  10px',
    },
    addTweetButton: {

        width: 100,
        marginRight: 30,
    },
    addTweetIconButtons: {
        paddingLeft: 30,
    },
    tweetsCentered: {
        textAlign: 'center',
        marginTop: 50,
    },
    addFormCircleProgress: {
        alignSelf: 'flex-end',
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },

    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            textDecoration: 'none',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },

}));
