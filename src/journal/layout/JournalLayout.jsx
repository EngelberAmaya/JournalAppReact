// import { Box, Toolbar } from "@mui/material"
// import { NavBar, SideBar } from "../components"

import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import { LogoutOutlined, TurnedInNot } from "@mui/icons-material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from "../../store/auth";

const drawerWidth = 270;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

// const drawerWidth = 280;

// eslint-disable-next-line react/prop-types
export const JournalLayout = ({ children }) => {

    // <Box sx={{ display: 'flex'}}>

    //     <NavBar drawerWidth = {drawerWidth} />

    //     <SideBar drawerWidth = {drawerWidth} />

    //     <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

    //         <Toolbar />

    //         { children }

    //     </Box>
    
    // </Box>

    const dispatch = useDispatch();

    const { displayName } = useSelector(state => state.auth)
    
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };


    const onLogout = () => {
        //console.log('onLogout');
        dispatch(startLogout());
    }



    return (

        <Box sx={{ display: 'flex' }}>
            <AppBar position="absolute" open={open}>
                <Toolbar  sx={{ pr: '24px' }}>
                    
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}>
                             <MenuIcon />
                    </IconButton>

                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        JournalApp
                    </Typography>

                    <IconButton color="error" onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <Typography variant="h6" noWrap component='div' sx={{ fontSize: 18}}>
                            {displayName}
                        </Typography>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril'].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={' texto'}/>
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    p: 3
                }}
            >
                 <Toolbar />
                 {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> */}

                    { children }

                 {/* </Container> */}
            </Box>

        </Box>
    )
}