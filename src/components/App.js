import React from "react";
import Tabletop from "tabletop";
import ActivityCatSelect from "../components/ActivityCatSelect";
import ActivityTypeSelect from "../components/ActivityTypeSelect";
import Button from "../components/Button";
import RestartButton from "../components/RestartButton";
import ActivityDetail from "../components/ActivityDetail";

class App extends React.Component {
  state = {
    selectedCatOption: null,
    selectedTypeOption: null,
    typeOptions: [],
    data: [],
    results: []
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

  onHandleTypeSelect = selectedTypeOption => {
    this.setState({
      selectedTypeOption: selectedTypeOption.value
    });
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
      results: []
    });
  };

  render() {
    return (
      <div>
        <ActivityCatSelect handleChange={this.onHandleCatSelect} />
        <ActivityTypeSelect
          typeOptions={this.state.typeOptions}
          handleChange={this.onHandleTypeSelect}
        />
        <div className="button-container">
          <Button handleClick={this.onHandleClick} />
          <RestartButton handleRestartSearch={this.onHandleRestartSearch} />
        </div>
        <ActivityDetail results={this.state.results} />
      </div>
    );
  }
}

export default App;
