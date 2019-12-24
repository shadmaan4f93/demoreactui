import React, { Fragment } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { uploadVideo } from '../redux/action/uploadVideoAction';
import { setIsloadingTrue } from '../redux/action/loadingAction'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


class RemoveVideosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      videoURL: null,
      videoSnapshotURl: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  handleFileChange = (event) => {
    let name = event.target.name;
    let selectedFile = event.target.files[0];
    let myFileee = URL.createObjectURL(selectedFile);
    this.setState({
      [name]: selectedFile,
      videoSnapshotURl: myFileee
    })

  }
  handleFormSubmit = () => {
    let mediaObj = {
      title: this.state.title,
      description: this.state.description,
      videoURL: this.state.videoURL,
      videoSnapshotURl: this.state.videoSnapshotURl
    }
    this.props.setIsloadingTrue()
    this.props.uploadVideo(mediaObj)
  }

  render() {
    return (
      <Fragment>
     Remove Videos Component  Coming Soon
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  uploadVideo: uploadVideo,
  setIsloadingTrue: setIsloadingTrue
}

const mapStateToProps = function (state) {
  return {
    uploadedVideos: state.uploadedVideos.uploadedVideos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveVideosComponent);
