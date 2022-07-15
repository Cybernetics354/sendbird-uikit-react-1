import React from 'react';
import ReactDOM from 'react-dom';

import { App as SendBirdApp } from '../dist';
import '../dist/dist/index.css';

const YOUR_APP_ID = '7FE9002E-FFA4-4221-8910-1853B799B934';
const USER_ID = 'lorem';

ReactDOM.render(
  <React.StrictMode>
    <SendBirdApp
      appId={YOUR_APP_ID}
      userId={USER_ID}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
