// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

// Internal Dependencies
import MeetupRsvpList from './meetupRsvpList'

const styles = {
  card: {
    borderRadius: 8,
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    minWidth: 275,
    margin: '20px 0px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 40,
    textAlign: 'left',
    width: '80%'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const column2Styles = {
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left'
}

function SimpleCard(props) {
  const {
    classes,
    event
  } = props;

  function displayDescription() {
    return { __html: event.description };
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {event.local_date}
          </Typography>
          <Typography variant="headline" component="h2" style={{ fontWeight: 700 }}>
            {event.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Venue: {event.venue.name}
          </Typography>
          <p dangerouslySetInnerHTML={displayDescription()} />
        </CardContent>
        <CardActions style={column2Styles}>
          <Typography component="p">
            {event.venue.address_1}
          </Typography>
          <Typography component="p">
            {event.venue.city}, {event.venue.state}
          </Typography>
          <MeetupRsvpList eventId={event.id} />
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);