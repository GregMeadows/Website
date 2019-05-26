import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import { HomePage } from './components/Homepage';

export const App: FunctionComponent = observer(() => {

  return (
    <div className="App">
      <HomePage />
    </div>
  );

});