import React from "react";
import Tabletop from "tabletop";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Loading from './Loading'
import ActivityCatSelect from "./ActivityCatSelect";
import ActivityTypeSelect from "./ActivityTypeSelect";
import SearchButton from "./SearchButton";
import ActivityDetail from "./ActivityDetail";
import PDFDocument from './PDFDocument'

class App extends React.Component {
  state = {
    loading: false,
    selectedCatOption: null,
    selectedTypeOption: null,
    typeOptions: [],
    data: [],
    results: [],
    town: '',
    pdf: []
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      Tabletop.init({
        key:
        "https://docs.google.com/spreadsheets/d/1fCEncFdCd_Fy1HbuBQrqvVWr4RNE5VOt4eRyDGxY6Cg/edit?usp=sharing",
        callback: data => {
          this.setState({
            data: data
          });
          this.setState({ loading: false })
        },
        simpleSheet: true
      });
    })
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
    } else if (selectedCatOption.value === "Activity (music & drama)") {
      this.setState({
        typeOptions: [
          { value: "1300- Playing CDs", label: "Playing CDs" },
          { value: "1302- Theatre", label: "Theatre" },
          { value: "1303- Concert", label: "Concert" },
          { value: "1304- Singing", label: "Singing" },
          { value: "1305- Drama class", label: "Drama class" },
          { value: "1306- Playing an instrument", label: "Playing an instrument" },
          { value: "1307- Listening to music", label: "Listening to music" },
        ]
      })
    } else if (selectedCatOption.value === "Activity (sport & active games)") {
      this.setState({
        typeOptions: [
          { value: "1641- Martial arts", label: "Martial arts" },
          { value: "1642- Boxing", label: "Boxing" },
          { value: "1605- Netball", label: "Netball" },
          { value: "1603- Football", label: "Football" },
          { value: "1623- Table tennis", label: "Table tennis" },
          { value: "1608- Disability sports", label: "Disability sports" },
          { value: "1663- Lawn bowls", label: "Lawn bowls" },
          { value: "1621- Badminton", label: "Badminton" },
          { value: "1601- Basketball", label: "Basketball" },
          { value: "1624- Tennis", label: "Tennis" },
          { value: "1610- Boccia", label: "Boccia" },
          { value: "1611- Athletics", label: "Athletics" },
          { value: "1606- Rounders / baseball", label: "Rounders / baseball" },
          { value: "1612- Footgolf", label: "Footgolf" },
          { value: "1662- Golf", label: "Golf" },
          { value: "1602- Cricket", label: "Cricket" },
          { value: "1609- Archery", label: "Archery" },
          { value: "1613- Tag Rugby", label: "Tag rugby" },
          { value: "1607- Rugby", label: "Rugby" },
          { value: "1622- Squash", label: "Squash" },
          { value: "1614- Triathlon", label: "Triathlon" },
          { value: "1625 - Volleyball", label: "Volleyball" },
        ]
      })
    } else if (selectedCatOption.value === "Learning topic") {
      this.setState({
        typeOptions: [
          { value: "1701- ESOL", label: "ESOL" },
          { value: "1704- IT", label: "IT" },
          { value: "1705- Languages", label: "Languages" },
          { value: "1707- Religion", label: "Religion" },
          { value: "1709- General education", label: "General education" },
          { value: "1711- Philosophy", label: "Philosophy" },
          { value: "1700- Novels and their TV adaptations", label: "Novels and TV adaptions" },
          { value: "1710- Maths", label: "Maths" },
        ]
      })
    } else if (selectedCatOption.value === "Advice category") {
      this.setState({
        typeOptions: [
          { value: "2021- Dementia", label: "Dementia" },
          { value: "2018- Peer support", label: "Peer support" },
          { value: "2021- Dementia", label: "Dementia" },
          { value: "2002- Health", label: "Health" },
          { value: "2003- Housing", label: "Housing" },
          { value: "2007- General advice", label: "General advice" },
          { value: "2009- Advocacy", label: "Advocacy" },
          { value: "2020- Relaxation therapy", label: "Relaxation therapy" },
          { value: "2011- Counselling/psychotherapy", label: "Counselling / psychotherapy" },
          { value: "2006- Employment / training", label: "Employment / training" },
          { value: "2005- Financial", label: "Financial" },
          { value: "2008- Disability issues", label: "Disability issues" },
          { value: "2014- Day care / respite", label: "Day care / respite" },
          { value: "2001- Benefits", label: "Benefits" },
          { value: "2016- Care / social services", label: "Care / social services" },
          { value: "2010- Foodbank", label: "Foodbank" },
          { value: "2012- Home / community library", label: "Home / community library" },
          { value: "2017- Education", label: "Education" },
          { value: "2015- Community support / befriending", label: "Community support / befriending" },
          { value: "2022- Mindfulness", label: "Mindfulness" },
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

  onHandleLocationInput = (e) => {
    this.setState({town: e.target.value})
  }

  onHandlePrint = (pdf) => {
    localStorage.setItem('PDFData', JSON.stringify(pdf))
  }

  render() {
    return (
      // show inputs only when loading is complete
      this.state.loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Router>
            <ActivityCatSelect handleChange={this.onHandleCatSelect} value={this.state.selectedCatOption} />
            <ActivityTypeSelect
              typeOptions={this.state.typeOptions}
              handleChange={this.onHandleTypeSelect}
            />
            <div className="button-container">
              <SearchButton handleClick={this.onHandleClick} />
            </div>
            <div className="filters">
              <div>
                <label htmlFor="location">Search by town: </label>
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
              town={this.state.town}
            />
            <Switch>
              <Route 
                path="/pdf" 
                render={() => (
                  <PDFDocument selectedTypeOption={this.state.selectedTypeOption} />
                )} 
              />
            </Switch>
          </Router>
        </div>
      ) 
    );
  }
}

export default App;
