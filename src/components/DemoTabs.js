import React, { Component } from 'react';
import '../App.css';
import DemoTodo from './DemoTodo';

class DemoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      searchQuery: '',
      data: [],
      page: 1,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { page } = this.state;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState(prevState => ({
          data: [...prevState.data, ...data],
          page: prevState.page + 1,
          loading: false,
        }));
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  handleLoadMore = () => {
    this.setState({ loading: true }, () => {
      this.fetchData();
    });
  };

  handleTabClick = (tabNumber) => {
    this.setState({ activeTab: tabNumber });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  renderToDoList = () => {
    switch (this.state.activeTab) {
      case 1:
        return <DemoTodo />
      case 2:
        return <DemoTodo />
      case 3:
        return <DemoTodo />
      case 4:
        return <DemoTodo />
      case 5:
        return <DemoTodo />
      default:
        return <DemoTodo />
    }
  }

  render() {
    const { activeTab, searchQuery, data, loading, error } = this.state;
    console.log("SHRI 00 data --", data);

    if (error) {
      return <div>Error: {error.message}</div>;
    }

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
      <div className="tab-content">
        <DemoTodo />
      </div>

      {/* <div>
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        {loading && <p>Loading...</p>}
        {!loading && (
          <button onClick={this.handleLoadMore} disabled={loading}>
            Load More
          </button>
        )}
      </div> */}
      </React.Fragment>
    );
  }
}

export default DemoTabs;
