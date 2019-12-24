import React, { Fragment } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { uploadVideo } from '../redux/action/uploadVideoAction';
import { setIsloadingTrue } from '../redux/action/loadingAction'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import '../App.css'


class ViewVideosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      videoURL: null,
      videoSnapshotURl: null,
      selectedVideoURL: null,
      selectedVideosID: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSelectedVideo = this.handleSelectedVideo.bind(this)
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

  handleSelectedVideo = (receiveddata) => {
    var player = document.getElementById("videoPlayer");
    var currentVID = document.getElementById("currentVID");
    var selectedLocalVID = receiveddata.videoURL;
    currentVID.setAttribute("src", URL.createObjectURL(selectedLocalVID));
    player.load();
    player.play();
    let myUrl = URL.createObjectURL(receiveddata.videoURL);
    this.setState({
      selectedVideoURL: myUrl,
      selectedVideosID: receiveddata.id
    })
  }

  render() {debugger;
    return (
      <Fragment>

        <div class="container">
          <div class="row">
            <div class="col-4 video-listing">
              {this.props.uploadVideo && this.props.uploadedVideos.map((data, index) => {
                return (<div key={index} className={data.id == this.state.selectedVideosID ? 'media active-video' : 'media'} onClick={this.handleSelectedVideo.bind(this, data)}>
                  <video src={data.videoSnapshotURl} class="video-thumbnail" alt="..." />
                  <div class="media-body">
                    <h5 class="mt-0">{data.title}</h5>
                    {data.description}
                  </div>
                </div>
                )
              })}
            </div>
            <div class="col-8">

              <div>{this.props.uploadedVideos.length>0 &&
                <video muted controls id="videoPlayer" style={{ width: '100%', height: '400px' }}>
                  <source id="currentVID" src={this.state.selectedVideoURL} />
                  Your browser does not support HTML5 video.
       </video>}
       {
         this.props.uploadedVideos.length<=0 &&<p>Please add some videos</p>
       }
              </div>
            </div>


          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewVideosComponent);
