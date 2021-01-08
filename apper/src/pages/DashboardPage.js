import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
import cubejs from '@cubejs-client/core';
const API_URL = "https://cubejs-heroku-demo-roi.herokuapp.com";
const CUBEJS_TOKEN = "07f309641c5ae974ac25fb0975771e3df5ca573de5f36283883c9a09fd07862ffbf2c3f02beeb41cd6c3dc37395f429dec4b7a867941ced63e4a456b787044b7";
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});
const DashboardItems = [];

const DashboardPage = () => {
  const dashboardItem = item => <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} cubejsApi={cubejsApi} />
      </DashboardItem>
    </Grid>;

  const Empty = () => <div style={{
    textAlign: 'center',
    padding: 12
  }}>
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>;

  return DashboardItems.length ? <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard> : <Empty />;
};

export default DashboardPage;