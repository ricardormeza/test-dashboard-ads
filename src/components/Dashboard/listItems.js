import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FaceIcon from '@material-ui/icons/Face';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

/** fin sidebar */

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
        <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="Grupal / Individual" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Mejorando Tú Vivienda" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ChangeHistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Tu CrediGas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessibilityIcon />
      </ListItemIcon>
      <ListItemText primary="Formació y Desarrollo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="Capital Humano" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsActiveIcon />
      </ListItemIcon>
      <ListItemText primary="Noticias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Manual ADS" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);