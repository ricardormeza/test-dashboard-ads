import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Link from '@material-ui/core/Link';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { LineStyle } from "@material-ui/icons";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Album from "./Album";
import GrupalIndividual from "./GrupalIndividual";

/** estilos de listItems */
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import FaceIcon from "@material-ui/icons/Face";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

/** fin estilos de listItems */

/** Import example SIDEBAR */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MejorandotuVivienda from "./MejorandotuVivienda";
import TucrediGas from "./TucrediGas";
import FormacionDesarrollo from "./FormacionDesarrollo";
import CapitalHumano from "./CapitalHumano";
import Noticias from "./Noticias";
import ManualAds from "./ManualAds";
import Panel from "./Panel";
// const classes = useStyles();
// fixedHeightPaperconst fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>homes!</div>,
    main: () => (
      <Grid item xs={12} md={8} lg={9}>
        <Paper className="">
          <Panel />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/grupal-individual",
    exact: true,
    sidebar: () => <div>homes!</div>,
    main: () => (
      <Grid item xs={12} md={8} lg={9}>
        <Paper className="">
          <GrupalIndividual />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/mejorandotuvivienda",
    sidebar: () => <div>bubblegum!</div>,
    main: () => (
      <Grid item xs={12} md={4} lg={3}>
        <Paper className="">
          <MejorandotuVivienda />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/tucredigas",
    sidebar: () => <div>shoelaces!</div>,
    main: () => (
      <Grid item xs={12}>
        <Paper className="">
          <TucrediGas />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/formacionydesarrollo",
    sidebar: () => <div>shoelaces!</div>,
    main: () => (
      <Grid item xs={12}>
        <Paper className="">
          <FormacionDesarrollo />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/capitalhumano",
    sidebar: () => <div>shoelaces!</div>,
    main: () => (
      <Grid item xs={12}>
        <Paper className="">
          <CapitalHumano />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/noticias",
    sidebar: () => <div>shoelaces!</div>,
    main: () => (
      <Grid item xs={12}>
        <Paper className="">
          <Noticias />
        </Paper>
      </Grid>
    ),
  },
  {
    path: "/manualads",
    sidebar: () => <div>shoelaces!</div>,
    main: () => (
      <Grid item xs={12}>
        <Paper className="">
          <ManualAds />
        </Paper>
      </Grid>
    ),
  },
];

/** FIN Import example SIDEBAR */

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Alternativa 19 del Sur
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // fixedHeightPaperconst fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Mercadotecnia Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <LineStyle />
              </ListItemIcon>
              <Link to="/">
                <ListItemText primary="Panel" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <Link to="/grupal-individual">
                <ListItemText primary="Grupal / Individual" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <Link to="/mejorandotuvivienda">
                <ListItemText primary="Mejorando Tú Vivienda" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ChangeHistoryIcon />
              </ListItemIcon>
              <Link to="/tucredigas">
                <ListItemText primary="Tu CrediGas" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <Link to="/formacionydesarrollo">
                <ListItemText primary="Formació y Desarrollo" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <Link to="/capitalhumano">
                <ListItemText primary="Capital Humano" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <Link to="/Noticias">
                <ListItemText primary="Noticias" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <Link to="/manualads">
                <ListItemText primary="Manual ADS" />
              </Link>
            </ListItem>
          </List>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                // children={<route.sidebar />}
              />
            ))}
          </Switch>
          {/*  esto es lo que se repetia dejabo del menu del MAIN AL MAIN
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Switch>
                <Grid container spacing={3}>
                  {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main />}
                    />
                  ))}
                </Grid>
              </Switch>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main> */}
          <Divider />
          {/* <List>{secondaryListItems}</List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Grid container spacing={3}>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Grid>
            </Switch>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </Router>
    </div>
  );
}
