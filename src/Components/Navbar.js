import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import AddEvent  from './AddEvent';
import Events from './Events';
import Grid from '@material-ui/core/Grid';
import EditEvents from './EditEvents';
import { connect } from 'react-redux';
import LocationCityIcon from '@material-ui/icons/LocationCity';

//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }, 
    title: {
      flexGrow: 1,
    },
    addButton : {
        marginRight: 10,
        marginTop:10,
        textDecoration: 'none'
    }
  }));

function Navbar(props) {
    const classes = useStyles();
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <LocationCityIcon/> Bangalore Tech Event
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* Define Route */}
                <Switch>
                    <Route path="/add-event">
                        <Grid container justify="flex-end"><br></br>
                            <Link to="/" className={classes.addButton}>
                                <Button variant="contained" color="secondary">
                                    <ArrowBackIosIcon/> <span>Back</span>
                                </Button>
                            </Link>
                        </Grid><br></br><br></br>
                        <AddEvent />
                    </Route>
                    <Route path="/edit-event/:id">
                        <Grid container justify="flex-end"><br></br>
                            <Link to="/" className={classes.addButton}>
                                <Button variant="contained" color="secondary">
                                <ArrowBackIosIcon/> <span>Back</span>
                                </Button>
                            </Link>
                        </Grid><br></br><br></br>
                        <EditEvents />
                    </Route>
                    <Route path="/">
                        <Grid container justify="flex-end"><br></br>
                            <Link to="/add-event" className={classes.addButton}>
                                <Button variant="contained" color="secondary">
                                    <AddIcon/> <span>Add Event</span>
                                </Button>
                            </Link>
                        </Grid><br></br><br></br>
                        <Grid container spacing={3}>
                           { props.posts.map((post, index) => <Events key={index} name={post.name} id={post.id} />) }
                        </Grid>
                        
                    </Route>
                </Switch>


            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Navbar);