import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    position: "absolute",
    top: "50%"
  },
  input: {
    display: "none"
  }
});

const Compare = props => {
  const { classes } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.handleCompare}
      >
        Compare
      </Button>
    </div>
  );
};

export default withStyles(styles)(Compare);
