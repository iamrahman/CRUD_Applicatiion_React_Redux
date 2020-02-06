import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginLeft: 15,
    marginTop: 15,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Events(props) {

    function editComponent() {
        props.dispatch({type:'EDIT_POST',id: props.id});
        props.history.push('/edit-event/' + props.id);
    }
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
        <Grid item md={3}>
            <Card>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={props.name ? props.name : '--'}
                    subheader={props.key}
                />
                <CardMedia
                    className={classes.media}
                    image="https://secure.meetupstatic.com/photos/event/a/9/2/f/600_486643311.jpeg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This {props.id} impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="delete events" color="secondary" onClick={()=> props.dispatch({type:'DELETE_POST',id: props.id})}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" color="primary" onClick= {editComponent}>
                        <EditIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
  );
}

export default connect() (withRouter(Events));