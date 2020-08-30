import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Editor from './components/Editor';
import Footer from './components/Footer';
import RhymeList from './components/RhymeList';
import Alert from './components/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Alert />
        {/* <Nav /> */}
        <Editor className="col-8" />
        <RhymeList className="col-4" />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
