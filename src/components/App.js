import React from "react";
import Tabletop from "tabletop";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import ActivityCatSelect from "./ActivityCatSelect";
import ActivityTypeSelect from "./ActivityTypeSelect";
import SearchButton from "./SearchButton";
import RestartButton from "./RestartButton";
import ActivityDetail from "./ActivityDetail";
import PDFDocument from './PDFDocument'

class App extends React.Component {
  state = {
    selectedCatOption: null,
    selectedTypeOption: null,
    typeOptions: [],
    data: [],
    results: [],
    lastChecked: false,
    pdf: null
  };

  componentDidMount() {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1xLx18xgSrM8YE0FdoZFsiEH95xXUJgT4kDv4ktT-Njg/edit?usp=sharing",
      callback: data => {
        this.setState({
          data: data
        });
      },
      simpleSheet: true
    });
  }

  onHandleTypeSelect = selectedTypeOption => {
    this.setState({
      selectedTypeOption: selectedTypeOption.value
    });
  };

  onHandleCatSelect = selectedCatOption => {
    this.setState({
      selectedCatOption: selectedCatOption.value
    });

    if (selectedCatOption.value === "Activity (art & craft)") {
      this.setState({
        typeOptions: [
          { value: "1101- Art class", label: "Art Class" },
          {
            value: "1103- Sewing, knitting, crochet",
            label: "Sewing, knitting, crochet"
          }
        ]
      });
    } else if (selectedCatOption.value === "Activity (social)") {
      this.setState({
        typeOptions: [
          { value: "1401- Book club", label: "Book club" },
          {
            value: "1408- Film / theatre visits",
            label: "Film and Theatre visits"
          }
        ]
      });
    } else if (selectedCatOption.value === "Activity (wellbeing)") {
      this.setState({
        typeOptions: [
          { value: "1504- Pilates", label: "Pilates" },
          { value: "1507- Tai chi", label: "Tai chi" }
        ]
      });
    }
  };

  onHandleClick = () => {
    const results = this.state.data.filter(obj => {
      return (
        obj[this.state.selectedCatOption] === this.state.selectedTypeOption
      );
    });
    this.setState({
      results
    });
  };

  onHandleRestartSearch = () => {
    this.setState({
      results: [],
      typeOptions: []
    });
  };

  onHandlePrint = (pdf) => {
    console.log(typeof pdf)
    this.setState({pdf}, function() {
      console.log(this.state.pdf)
    })
  }

  render() {
    return (
      <div className="container">
        <Router>
          <ActivityCatSelect handleChange={this.onHandleCatSelect} />
          <ActivityTypeSelect
            typeOptions={this.state.typeOptions}
            handleChange={this.onHandleTypeSelect}
          />
          <div className="button-container">
            <SearchButton handleClick={this.onHandleClick} />
            <RestartButton handleRestartSearch={this.onHandleRestartSearch} />
          </div>
          <div>
            <label htmlFor="lastChecked">Last Checked</label>
            <input 
              id="lastChecked" 
              type="checkbox"
              value={this.state.lastChecked}
              onChange={() => this.setState({lastChecked: !this.state.lastChecked})} 
            />
          </div>
          <ActivityDetail 
            results={this.state.results} 
            clickPrint={this.onHandlePrint}
            lastChecked={this.state.lastChecked}
          />
          <Switch>
            <Route 
              path="/pdf" 
              render={() => (
                <PDFDocument data={this.state.pdf} />
              )} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
