import React, {useState} from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import {Button, Hidden, IconButton, Typography} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useHomeStyles} from '../pages/Home/theme';
import {ModalBlock} from './ModalBlock';
import {AddTweetForm} from './AddTweetForm';
import userPhoto from ' ./../assets/image/userPhoto.jpg'

type SideMenuProps = {
    classes: ReturnType<typeof useHomeStyles>;
    mediaQuery: ReturnType<typeof useMediaQuery>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes, mediaQuery,}: SideMenuProps): React.ReactElement => {

   const [visibleAddTweet, setvisibleTweet] = useState<boolean>(false)

    const handleClickOpenAddTweet = () => {
        setvisibleTweet(true)
    }

    const handleCloseAddTweet = () => {
        setvisibleTweet(false)
    }



    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} aria-label="" color="primary">
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                   <Hidden smDown>
                       <Typography className={classes.sideMenuListItemLabel} variant="h6">
                           Поиск
                       </Typography>
                   </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Уведомления
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Сообщения
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Закладки
                    </Typography>
                        </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Список
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">
                        Профиль
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button
                                  onClick={handleClickOpenAddTweet}
                                    className={classes.sideMenuTweetButton}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                >
                                    <Hidden smDown>Твитнуть</Hidden>
                                    <Hidden mdUp>
                                        <CreateIcon  />
                                    </Hidden>
                                </Button>
                    <ModalBlock title={''} onClose={handleCloseAddTweet} visible={visibleAddTweet}>
                        <AddTweetForm classes={classes}  user={{
                            avatarUrl:
                            'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                        }} />
                    </ModalBlock>

            </li>
        </ul>
    );
};


// import React from 'react';
// import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
// import ListIcon from '@material-ui/icons/ListAltOutlined';
// import UserIcon from '@material-ui/icons/PermIdentityOutlined';
// import { Button, IconButton, Typography } from '@material-ui/core';
//
// import { useHomeStyles } from '../pages/Home';
// import CreateIcon from '@material-ui/icons/Create';
// import Hidden from '@material-ui/core/Hidden';
//
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { useHomeStyles } from '../pages/Home/theme';
// import { ModalBlock } from './ModalBlock';
// import { AddTweetForm } from './AddTweetForm';
//
// interface SideMenuProps {
//     classes: ReturnType<typeof useHomeStyles>;
//     export const SideMenu: React.FC<SideMenuProps> = ({
//                                                           classes,
//                                                       }: SideMenuProps): React.ReactElement => {
//     const [visibleAddTweet, setSetVisibleAddTweet] = React.useState<boolean>(false);
//
//     const handleClickOpenAddTweet = () => {
//     setSetVisibleAddTweet(true);
// };
//
// const onCloseAddTweet = () => {
//     setSetVisibleAddTweet(false);
// };
//
// return (
//     <ul className={classes.sideMenuList}>
//         <li className={classes.sideMenuListItem}>
//             <li className={classes.sideMenuListItem}>
//                 <div>
//                     <SearchIcon className={classes.sideMenuListItemIcon} />
//                     <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                         Поиск
//                     </Typography>
//                     <Hidden smDown>
//                         <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                             Поиск
//                         </Typography>
//                     </Hidden>
//                 </div>
//             </li>
//             <li className={classes.sideMenuListItem}>
//                 <div>
//                     <NotificationIcon className={classes.sideMenuListItemIcon} />
//
//                     <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                         Уведомления
//                     </Typography>
//                     <Hidden smDown>
//                         <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                             Уведомления
//                         </Typography>
//                     </Hidden>
//                 </div>
//             </li>
//             <li className={classes.sideMenuListItem}>
//                 <div>
//                     <MessageIcon className={classes.sideMenuListItemIcon} />
//
//                     <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                         Сообщения
//                     </Typography>
//                     <Hidden smDown>
//                         <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                             Сообщения
//                         </Typography>
//                     </Hidden>
//                 </div>
//             </li>
//             <li className={classes.sideMenuListItem}>
//                 <div>
//                     <BookmarkIcon className={classes.sideMenuListItemIcon} />
//
//                     <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                         Закладки
//                     </Typography>
//                     <Hidden smDown>
//                         <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                             Закладки
//                         </Typography>
//                     </Hidden>
//                 </div>
//             </li>
//             <li className={classes.sideMenuListItem}>
//                 <div>
//                     <ListIcon className={classes.sideMenuListItemIcon} />
//
//                     <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                         Список
//                     </Typography>
//                     <Hidden smDown>
//                         <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                             Список
//                         </Typography>
//                     </Hidden>
//                 </div>
//             </li>
//             <li className={classes.sideMenuListItem}>
//                 <div>
//                     <UserIcon className={classes.sideMenuListItemIcon} />
//
//                     <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                         Профиль
//                     </Typography>
//                     <Hidden smDown>
//                         <Typography className={classes.sideMenuListItemLabel} variant="h6">
//                             Профиль
//                         </Typography>
//                     </Hidden>
//                 </div>
//             </li>
//             <li className={classes.sideMenuListItem}>
//                 <Button
//                     onClick={handleClickOpenAddTweet}
//                     className={classes.sideMenuTweetButton}
//                     variant="contained"
//                     color="primary"
//                     fullWidth>
//                     Твитнуть
//                     <Hidden smDown>Твитнуть</Hidden>
//                     <Hidden mdUp>
//                         <CreateIcon />
//                     </Hidden>
//                 </Button>
//                 <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
//                     <div style={{ width: 550 }}>
//                         <AddTweetForm maxRows={15} classes={classes} />
//                     </div>
//                 </ModalBlock>
//             </li>
//     </ul>
// );
