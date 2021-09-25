import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Logon from '../pages/Logon';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path="/" component={Logon} />
    </Switch>
);

export default AuthRoutes;