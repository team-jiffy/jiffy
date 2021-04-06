import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../../App';
import PageA from '../../containers/PageA';
import PageB from '../../containers/PageB';
import PageC from '../../containers/PageC';

class ReactRouter extends Component {
    render() {
        return (
            <div> 
                
                    <Switch>
                        <Route path="/" component={App} exact />  
                        <Route path="/pagea" component={PageA} exact />
                        <Route path="/pageb" component={PageB} exact />
                        <Route path="/pagec" component={PageC} exact />
                    </Switch>
             
            </div>
        );
    }
}

export default ReactRouter;