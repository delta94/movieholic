// imports the React Javascript Library
import React from "react";

import './profile-avatar-container.styles.scss';

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


//Tabs
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  input: {
    display: "none"
  },
  img: {
    width: 200,
    height: 256,
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

class ProfileAvatarContainer extends React.Component {
  state = {
    mainState: "uploaded",
    imageUploaded: 0,
    selectedFile: "avatar.jpg"
  };

  handleUploadClick = event => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log(url); 

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  renderUploadedState() {
    const { classes} = this.props;
    

    return (
      <Grid container direction="column" alignItems="center">
        <Grid item >
          <img
            alt="avatar"
            width="100%"
            className={classes.img}
            src={this.state.selectedFile}
          />
        </Grid>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Select Image
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  }

  render() {
    const { classes} = this.props;
    return (
      <div className={classes.root}>
        <Card className={this.props.cardName}>
          {this.state.mainState === "uploaded" && this.renderUploadedState()}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProfileAvatarContainer);

