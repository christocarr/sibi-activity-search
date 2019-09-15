import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PDFDocument from '../src/components/PDFDocument'

import "./styles.css";

function Index() {
  return (
    <div className="index">
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/pdf" component={PDFDocument} />
        </Switch>
      </Router>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
