import React from "react";
import { Route } from "react-router-dom";
import * as BookAPI from "./BookAPI";
import "./App.css";

class BookApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BookAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  shelve = [
    { key: "currentlyReading", name: "currently Reading" },
    { key: "wantToRead", name: "want to read" },
    { key: "read", name: "read" },
  ];

  changeShelf = () =>{
    
  }

  render() {
    const {books} = this.state;
    return (
      <div className="app">
          <Route path ="/search" />
          <Route exact path = '/' />
      </div>
    );
  }
}

export default BookApp;
