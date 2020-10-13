import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './pages/Dashboard';
import authProvider from './provider/authProvider';
//import dataProvider from './provider/dataProvider';
import Login from './pages/Login';
import theme from './theme';
import MyLayout from './layout';
import data from './provider/data'
import users from './pages/users';
import customRoutes from './customRoutes';

/* const httpClient = (url, options = {}) => {
    if(!options.headers){
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
} */

const App = () => (
    <Admin
        theme={theme}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={data}
        loginPage={Login}
        layout={MyLayout}
        customRoutes={customRoutes}
    >
        <Resource {...users} />
        <Resource name="currency" list={ListGuesser} />
        <Resource name="accounts" list={ListGuesser} />
        <Resource name="admin_users" list={ListGuesser} />
    </Admin>
);

export default App;
