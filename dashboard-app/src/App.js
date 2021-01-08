import './body.css';
import 'antd/dist/antd.css';
import React from 'react';
import '@ant-design/compatible';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import Header from './components/Header';
import WebSocketTransport from '@cubejs-client/ws-transport';
const API_URL = "https://cubejs-heroku-demo-roi.herokuapp.com";
const CUBEJS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTAwNDE5MjUsImV4cCI6MTYxMDEyODMyNX0.XPDqJeZ_UG0RGYXU5qj70QbpI-PpO0pVvglmUd3p3mQ";
const cubejsApi = cubejs({
  transport: new WebSocketTransport({
    authorization: CUBEJS_TOKEN,
    apiUrl: API_URL.replace('https', 'ws')
  })
});

const AppLayout = ({
  children
}) => <Layout style={{
  height: '100%'
}}>
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>;

const App = ({
  children
}) => <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>;

export default App;