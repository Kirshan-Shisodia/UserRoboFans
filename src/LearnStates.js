// import React from 'react';
// import CardList from './CardList';
// import { robots } from './robots';
// import SearchBox from './SearchBox';


// class App extends React.Component {
//     constructor(){
//         super()
//         this.state ={
//             message : 'RoboFan',
//             robots : robots,
//             searchfield : ''
//         }
//     }

//     onSearchChange = (event) => {
//         this.setState({searchfield : event.target.value})
//     }

//     changeMessage = () => {
//         this.setState = {message : 'No record Found!'}
//     }

//     render(){
//         const filteredRobots = this.state.robots.filter(robot =>{
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })
//         return(
//             <>
//             <div>
//                 <h1>{this.state.message}</h1>
//                 < SearchBox searchChange={this.onSearchChange} />
//                 < CardList robots={filteredRobots} />

//                 {filteredRobots.length === 0 ? this.changeMessage : ""}
//             </div>
//             </>
//         );
//     }
// }