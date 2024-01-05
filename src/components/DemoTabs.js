import React, { Component } from 'react';
import '../App.css';

class DemoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      searchQuery: '',
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const apiUrl = 'https://api.scaleserp.com/search?api_key=demo&q=pizza'
    fetch(apiUrl)
      .then((response) => {
        console.log("SHRI 00 response --", response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, error: null });
      })
      .catch((error) => {
        this.setState({ data: null, error });
      });
  }

  handleTabClick = (tabNumber) => {
    this.setState({ activeTab: tabNumber });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { activeTab, searchQuery, data } = this.state;
    //console.log("SHRI 00 data --", data);
    return (
      <React.Fragment>
      <div className="tabs-container">
        {[1, 2, 3, 4, 5].map((tabNumber) => (
          <div
            key={tabNumber}
            className={`tab ${activeTab === tabNumber ? 'active' : ''}`}
            onClick={() => this.handleTabClick(tabNumber)}
          >
            Tab {tabNumber}
          </div>
        ))}
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={this.handleSearchChange}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="tab-content">{`Content for Tab ${activeTab}`}</div>

      </React.Fragment>
    );
  }
}

export default DemoTabs;
