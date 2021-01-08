import './body.css';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import Header from './components/Header';
const API_URL = "https://cubejs-heroku-demo-roi.herokuapp.com";
const CUBEJS_TOKEN = "07f309641c5ae974ac25fb0975771e3df5ca573de5f36283883c9a09fd07862ffbf2c3f02beeb41cd6c3dc37395f429dec4b7a867941ced63e4a456b787044b7";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const AppLayout = ({
  children
}) => {
  const classes = useStyles();
  return <div className={classes.root}>
      <Header />
      <div>{children}</div>
    </div>;
};

const App = ({
  children
}) => <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>;

export default App;