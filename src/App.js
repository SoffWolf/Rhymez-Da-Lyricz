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
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
      <Container>
        <Row>
          <Col sm={8}>
            <Editor />
          </Col>
          <Col sm={4}>
            <RhymeList />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </Provider>
  );
}

export default App;
