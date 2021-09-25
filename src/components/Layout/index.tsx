import React from 'react';

import { Grid } from './styles';

import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (
    <Grid>
        <Topbar />
        <Sidebar />
        <Content>
            { children }
        </Content>
    </Grid>
);


export default Layout;