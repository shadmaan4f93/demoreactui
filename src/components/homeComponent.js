import React, { Fragment } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { uploadVideo } from '../redux/action/uploadVideoAction';
import { setIsloadingTrue } from '../redux/action/loadingAction';
import {clearUploadedMessage} from '../redux/action/uploadedVideoMessageAction'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import uuid from 'uuid'


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      videoURL: null,
      videoSnapshotURl: null,
      formErrors: { title: '', description: '', videoURL: '' },
      titleValid: false,
      descriptionValid: false,
      videoURLValid: false
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
    }, () => {
      this.validateField(name, value)
    })
    if(this.props.isUploadedSuccess){
      this.props.clearUploadedMessage();
    }
  }
  handleFileChange = (event) => {
    let name = event.target.name;
    let selectedFile = event.target.files[0];
    let myFileee = URL.createObjectURL(selectedFile);
    this.setState({
      [name]: selectedFile,
      videoSnapshotURl: myFileee
    }, () => {
      this.validateField(name, selectedFile)
    })
    if(this.props.isUploadedSuccess){
      this.props.clearUploadedMessage();
    }
   

  }
  handleFormSubmit = () => {
    let mediaObj = {
      id: uuid.v4(),
      title: this.state.title,
      description: this.state.description,
      videoURL: this.state.videoURL,
      videoSnapshotURl: this.state.videoSnapshotURl
    }
    this.props.setIsloadingTrue()
    this.props.uploadVideo(mediaObj)
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    let descriptionValid = this.state.descriptionValid;
    let videoURLValid = this.state.videoURLValid;
    debugger;

    switch (fieldName) {
      case 'title':
        titleValid = value.length >= 6;;
        fieldValidationErrors.title = titleValid ? '' : ' is invalid';
        break;
      case 'description':
        descriptionValid = value.length >= 6;
        fieldValidationErrors.description = descriptionValid ? '' : ' is too short';
        break;
      case 'videoURL':
        videoURLValid = value.name;
        fieldValidationErrors.videoURL = videoURLValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      titleValid: titleValid,
      descriptionValid: descriptionValid,
      videoURLValid: videoURLValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.titleValid && this.state.descriptionValid && this.state.videoURLValid });
  }
  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  componentWillUnmount(){
    if(this.props.isUploadedSuccess){
      this.props.clearUploadedMessage();
    }
  }
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col>
              <div className="card form-container">
                <div className="card-body">
                  <div className="form-group">
                    <label >Title:</label>
                    <input type="text" name="title" onChange={this.handleChange}  className={`form-control ${this.errorClass(
                  this.state.formErrors.title
                )}`}  id="formGroupExampleInput" placeholder="Please Enter Title" />
                <label className="info-text">Min 6 Characters</label>
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea name='description' onChange={this.handleChange}
                    className={`form-control ${this.errorClass(
                      this.state.formErrors.description
                    )}`}
                   ></textarea>
                    <label className="info-text">Min 6 Characters</label>
                  </div>
                  <div className="form-group">
                    <label >Example file input</label>
                    <input type="file" name="videoURL" onChange={this.handleFileChange} className="form-control-file" id="exampleFormControlFile1" />
                  </div>
                  <button disabled={!this.state.formValid} type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </div>
                <div>{this.props.isUploadedSuccess&&
                    <div class="alert alert-success" role="alert">
  Video Successfully Uploaded
</div>}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="loaderClass">
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                visible={this.props.isLoading}
              />
            </div>
                 
          </Row>

        </Container>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  uploadVideo: uploadVideo,
  setIsloadingTrue: setIsloadingTrue,
  clearUploadedMessage:clearUploadedMessage
}

const mapStateToProps = function (state) {
  return {
    isLoading: state.isLoading.isLoading,
    isUploadedSuccess:state.isUploadedSuccess.isUploadedSuccess
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
