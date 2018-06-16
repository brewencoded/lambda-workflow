import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BookList from './BookList';
import BookDetails from './BookDetails';
import Dialog from './Dialog';

const endpoint = 'https://tcqwrw7oq0.execute-api.us-east-1.amazonaws.com/dev/api';

const BasicExample = () => (
  <Router>
      <div>
        <Route path="/" render={(props) => <Home {...props}/>} />
      </div>
  </Router>
);
  
function Header(props) {
    return (
        <div>
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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showDialog: false
        };
        this.hideDialog = this.hideDialog.bind(this);
    }
    componentWillMount() {
        axios.get(endpoint)
        .then(({ data }) => {
            this.setState({
                data: data.data.Items,
                showDialog: !!data.data.Items.find(book => book.num_available < 5)
            });
        });
    }
    showDialog() {
        this.setState({
            ...this.state,
            showDialog: true
        });
    }
    hideDialog() {
        this.setState({
            ...this.state,
            showDialog: false
        });
    }
    render() {
        return (
            <div>
                <Header />
                <Dialog open={this.state.showDialog} closeDialog={this.hideDialog}/>
                <Route exact path="/" {...this.props} render={(props) => <BookList data={this.state.data} {...props}/>}/>
                <Route path="/details/:id" render={(props) => <BookDetails data={this.state.data} {...props}/>}/>
            </div>
        )
    }
}


export default BasicExample;

