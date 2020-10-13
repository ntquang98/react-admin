import React from 'react';
import {
  Toolbar,
  Typography
} from '@material-ui/core';
import { Layout, AppBar } from 'react-admin';
import Menu from './menu';

const CustomAppBar = props => {
  return (
    <AppBar {...props}>
      <Toolbar>
        <Typography variant="h6" id="react-admin-title" />
      </Toolbar>
    </AppBar>
  )
}

const MyLayout = props => <Layout {...props} menu={Menu} />;

export default MyLayout;