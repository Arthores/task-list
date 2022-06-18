import React from 'react';
import ReactDOM from 'react-dom/client';
import Note from './Note';
import Provider from './provider/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <Note />
    </React.StrictMode>
  </Provider>
);

