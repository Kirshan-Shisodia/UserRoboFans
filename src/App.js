import React from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import Message from './Message';
import "./App.css"
import Scroll from './Scroll';
import Popup from './Popup';

class App extends React.Component {
    constructor() {
        super()
        this.state ={
            robots : [],
            searchfield : "",
            popup : false,
        }
    }

    onSearchChange = (event) => {
       this.setState({searchfield : event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(user => {
            this.setState({robots : user});
        })
    }

    openPopup = () => {
        this.setState({popup: true});
    }

    closePopup = () => {
        this.setState({popup: false});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !filteredRobots.length ?
            <h1>Loading........</h1>
        :

        (
            <React.Fragment>
                {this.state.popup ? <Popup  closePopup = {this.closePopup} /> : ""}
            <div className="tc">
                <Message message={filteredRobots.length === 0 ? "No Record Found" : "RoboFans"}/>
                <button onClick={this.openPopup}>Popup</button>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                  < CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            </React.Fragment>
        );
    }
    
}

export default App;