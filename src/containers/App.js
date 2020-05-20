import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: "",
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }


    render() {
        const { robots, searchfield } = this.state;
        const robotsFiltered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return (
            <div id="cnt">
                <h1 id="main-heading">RoboFriends</h1>
                <SearchBox searcheChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={robotsFiltered} />
                </Scroll>
            </div>
        );
    }

}




export default App;