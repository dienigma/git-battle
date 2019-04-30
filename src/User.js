import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    height: 100,
    width: 400,
    margin: "0 auto"
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class User extends React.Component {
  state = {
    spacing: "40"
  };

  render() {
    const { classes, handleChangeOne, handleChangeTwo } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            <Grid>
              <Paper className={classes.paper}>
                <form>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    onChange={handleChangeOne}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.paper}>
                <form>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    onChange={handleChangeTwo}
                  />
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
