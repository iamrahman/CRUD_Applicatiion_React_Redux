import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Container } from '@material-ui/core';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class AddEvent extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        location: '',
        description: ''
    }
    this.inputRef = React.createRef();  // It will Create Refrence
  }

  nameHandler = (event) => {
    this.setState({
        name : event.target.value
    });
  }

  locationHandler = (event) => {
    this.setState({
      location : event.target.value
    });
  }

  descriptionHandler = (event) => {
    this.setState({
      description : event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.id = Math.random();
    const data = this.state;
    this.props.dispatch({ type:'ADD_POST', data}); // Dispatch The Value
    this.props.history.push('/');
  }


  render() {
    return (
      <div>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Card style={ {minWidth: 390}}>
            <form onSubmit={this.handleSubmit}>
                    <Grid item lg={12}>
                      <h3>Add Event</h3>
                    </Grid>
                    <Grid item lg={12}>
                      <Input value={this.state.name} onChange={this.nameHandler} style={ {minWidth: 300}} placeholder="Enter Event Name"/>
                    </Grid><br></br>
                    <Grid item lg={12} sm={6}>
                      <Input value={this.state.location} onChange={this.locationHandler} style={ {minWidth: 300}} placeholder="Enter Location Name"/>
                    </Grid><br></br>
                    <Grid item lg={12} sm={6}>
                      <Input value={this.state.description} onChange={this.descriptionHandler} style={ {minWidth: 300}} placeholder="Enter Description"/>
                    </Grid><br></br>
                    <Grid item>
                      <Button type="submit" variant="contained" color="primary" size="large">Save</Button>
                    </Grid> <br></br>
              </form>
        </Card>
      </Grid>
      </div>
    );
  }
}

export default connect() (withRouter(AddEvent));
