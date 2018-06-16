import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const pageStyles = {
    paddingTop: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  const book = props.data.find(bk => bk.id.toString() === props.match.params.id.toString());
  const { name, author, description } = book;
  return (
    <div style={pageStyles}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/book_placeholder.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography component="p" color="textSecondary">
            By: {author}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/" size="small" color="primary">Back To Books</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);