import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import './Conferences.css';

import {
  Drawer,
  Divider,
  AppBar,
  Box,
  ListItem,
  ListItemIcon,
  List,
  Toolbar,
  Typography,
  ListItemText,
  IconButton,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import cours from '../../data/cours';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '../../modal/Modal';

const drawerWidth = 240;

function Conferences(props) {
  const [data, setData] = useState('');

  const GridRowsProp = [
    { id: 1, col1: 'Tawhid', col2: 'Abou-houzayfa', col3: '12/12/2021' },
    {
      id: 2,
      col1: "La crainte d'Allah",
      col2: 'Abou-houzayfa',
      col3: '12/12/2021',
    },
    { id: 3, col1: 'La sunnah', col2: 'Abou-houzayfa', col3: '12/12/2021' },
  ];

  const GridColDef = [
    { field: 'col1', headerName: 'Titre du Cour', width: 250 },
    { field: 'col2', headerName: 'Nom du precheur', width: 250 },
    { field: 'col3', headerName: 'Date', width: 250 },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {cours.map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Link
              to={text.link}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ListItemText primary={text.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const datafilter = (GridRowsProp) => {
    return GridRowsProp.filter(
      (item) => item.col1.toLowerCase().indexOf(data) > -1
    );
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link
              to="/dashboard"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              dashboard
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 12,
          }}
        >
          Conférences
        </Typography>
        <div className="containt__input">
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="rechercher le cour"
            className="input"
          />

          <Modal />
        </div>
        {console.log(data)}
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={datafilter(GridRowsProp)} columns={GridColDef} />
        </div>
      </Box>
    </Box>
  );
}

Conferences.propTypes = {
  window: PropTypes.func,
};

export default Conferences;
