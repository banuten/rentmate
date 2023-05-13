import { Fragment } from 'react';
import classes from './layout.module.css';

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.container}>
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;
