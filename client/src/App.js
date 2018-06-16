import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BookList from './BookList';
import BookDetails from './BookDetails';

const endpoint = 'https://tcqwrw7oq0.execute-api.us-east-1.amazonaws.com/dev/api';

let id = 0;
function createData(name, available, author, description) {
  id += 1;
  return { id, name, available, author, description };
}

const data = [
  createData('Frozen yoghurt', 2, "auth 1", "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",),
  createData('Ice cream sandwich', 4, "auth 2", 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'),
  createData('Eclair', 6, "auth 3", 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'),
  createData('Cupcake', 305, "auth 4", 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'),
  createData('Gingerbread', 10, "auth 5", 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'),
];

const BasicExample = () => (
  <Router>
      <div>
        <Route exact path="/" render={(props) => <Home data={data} {...props}/>} />
        <Route exact path="/details/:id" render={(props) => <BookDetails data={data} {...props}/>}/>
      </div>
  </Router>
);

const styles = {
    root: {
      flexGrow: 1,
    },
  };
  
function Header(props) {
    return (
        <div >
        <AppBar position="static" color="default">
            <Toolbar>
            <Typography variant="title" color="inherit">
                <Link to="/">Books</Link>
            </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

const Home = (props) => (
  <div>
    <Header />
    <BookList {...props}/>
  </div>
);

export default BasicExample;

