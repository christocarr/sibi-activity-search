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
    town: '',
    pdf: []
  };

  componentDidMount() {
    Tabletop.init({
      key:
      "https://docs.google.com/spreadsheets/d/1fCEncFdCd_Fy1HbuBQrqvVWr4RNE5VOt4eRyDGxY6Cg/edit?usp=sharing",
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
          { value: "1103- Sewing, knitting, crochet", label: "Sewing, knitting, crochet" },
          { value: "1105- Pottery", label: "Pottery" },
          { value: "1106- Sculpting", label: "Sculpting" },
          { value: "1110- Photography", label: "Photography" },
          { value: "1111- Painting", label: "Painting" },
          { value:"1112- Drawing", label: "Drawing" },
          { value: "1113- DIY", label: "DIY" },
          { value: "1114- Glasswork", label: "Glasswork" },
          { value: "1115- Jewellery making", label: "Jewellery making" }
        ]
      });
    } else if (selectedCatOption.value === "Activity (social)") {
      this.setState({
        typeOptions: [
          { value: "1400- Tea Parties", label: "Tea parties" },
          { value: "1401- Book club", label: "Book club" },
          { value: "1402- Reading group/club", label: "Reading group" },
          { value: "1403- Lunch club", label: "Lunch club" },
          { value: "1404- Social drop-in", label: "Social drop-in" },
          { value: "1405- Discussion, lectures", label: "Discussion and lectures" },
          { value: "1406- Befriending", label: "Befriending" },
          { value: "1407- Bingo", label: "Bingo" },
          { value: "1408- Film / theatre visits", label: "Film and Theatre visits" },
          { value: "1409- Writing club", label: "Writing club" },
          { value: "1410- Day trips", label: "Day trips" },
          { value: "1411- Quiz", label: "Quiz" },
          { value: "1412- Parent/carer and toddler", label: "Parent/carer and toddler" },
          { value: "1413- Tea/coffee morning", label: " Tea/coffee morning" },
          { value: "1414- Community action and forums", label: "Community action and forums" },
        ]
      });
    } else if (selectedCatOption.value === "Activity (wellbeing)") {
      this.setState({
        typeOptions: [
          { value: "1501- Aerobics", label: "Aerobics" },
          { value: "1502- Aqua fit", label: "Aqua fit" },
          { value: "1503- Keep fit", label: "Keep fit" },
          { value: "1504- Pilates", label: "Pilates" },
          { value: "1505- Self defence", label: "Self defence" },
          { value: "1506- Religious services", label: "Religious services" },
          { value: "1507- Tai chi", label: "Tai chi" },
          { value: "1508- Yoga", label: "Yoga" },
          { value: "1509- Zumba", label: "Zumba" },
          { value: "1510- PIYO", label: "PIYO" },
          { value: "1511- Trampoline", label: "Trampoline" },
          { value: "1521- Cycling", label: "Cycling" },
          { value: "1522- Dance", label: "Dance" },
          { value: "1523- Gardening", label: "Gardening" },
          { value: "1525- Jogging / running", label: "Running and jogging" },
          { value: "1526- Meditation", label: "Meditation" },
          { value: "1528- Swimming", label: "Swimming" },
          { value: "1529- Walking", label: "Walking" },
          { value: "1530- Cookery", label: "Cookery" },
          { value: "1531- Spiritual wellbeing", label: "Spiritual wellbeing" },
          { value: "1532- Diet club", label: "Diet club" },
          { value: "1533- Alternative Therapy", label: "Alternative therapy" },
          { value: "1534- Massage", label: "Massage" },
          { value: "1535- Sauna", label: "Sauna" },
        ]
      });
    } else if (selectedCatOption.value === "Activity (board & card games)") {
      this.setState({
        typeOptions: [
          { value: "1201- Backgammon", label: "Backgammon" },
          { value: "1203- Chess", label: "Chess" },
          { value: "1204- Dominoes", label: "Dominoes" },
          { value: "1205- Scrabble", label: "Scrabble" },
          { value: "1206- Card games", label: "Card games" },
          { value: "1207- Bridge", label: "Bridge" },
          { value: "1208- Classic board games", label: "Classic board games" },
        ]
      })
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

  onHandleLocationInput = (e) => {
    this.setState({town: e.target.value})
  }

  onHandlePrint = (pdf) => {
    localStorage.setItem('PDFData', JSON.stringify(pdf))
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
          <div className="filters">
            <div>
              <label htmlFor="lastChecked">Only show activities that were checked</label>
              <input 
                id="lastChecked" 
                type="checkbox"
                value={this.state.lastChecked}
                onChange={() => this.setState({lastChecked: !this.state.lastChecked})} 
              />
            </div>
            <div>
              <label htmlFor="location">Search for town: </label>
              <input
                id="location"
                type="text"
                value={this.state.town}
                onChange={this.onHandleLocationInput}
              />
            </div>
          </div>
          <ActivityDetail 
            results={this.state.results} 
            clickPrint={this.onHandlePrint}
            lastChecked={this.state.lastChecked}
            town={this.state.town}
          />
          <Switch>
            <Route 
              path="/pdf" 
              render={() => (
                <PDFDocument />
              )} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
