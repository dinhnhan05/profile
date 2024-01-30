/*import logo from './logo.svg';*/
import React from 'react';
import Profile from './Profile';
import { injectSpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div>
      <Profile />
      <SpeedInsights />
    </div>
  );
};

export default App;
