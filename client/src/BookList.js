import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 0.5,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
});

const navigate = (data, navigator) => navigator.push({
    pathname: `/details/${data.id}`
});

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow >
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell numeric>Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow key={n.id} hover onClick={() => navigate(n, props.history)}>
                <TableCell scope="row">
                    {n.id}
                </TableCell>
                <TableCell >{n.name}</TableCell>
                <TableCell numeric>{n.num_available}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);