import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Icofont from 'react-icofont';

import VideoEmbed from '../../VideoEmbed';
import IdeaNetworkOverlay from '../IdeaNetworkOverlay';

function VideoContainer(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="m-2 mb-4 video-description">
          <div className="m-0 p-2 d-flex justify-content-between align-items-center">
            <div>
              <img src={props.creativePic} alt={props.creativeName} className="profile mr-3 mt-2" />
              <b>{props.creativeName}</b>
            </div>
            <div>
              <Button className="btn-xs mr-3" onClick={handleShow}>
                View Portfolio &nbsp;
                <Icofont size="1" icon="play-alt-1" />
              </Button>
              <Button className="btn-xs" variant="success">
                Add to Shortlist &nbsp;
                <Icofont size="1" icon="ui-add" />
              </Button>
            </div>
          </div>
          <VideoEmbed videoLink={props.videoLink} />
          <div className="mx-3">
            <div className="py-2 d-flex justify-content-between align-items-center">
              <h4 className="font-weight-bold">
                {props.clientName} | {props.videoName}
              </h4>
              <p className="gray">{props.budget}</p>
            </div>
          </div>


          <Modal className="creativeModal" show={show} onHide={handleClose}>
            <Modal.Body>
              <IdeaNetworkOverlay
                  {...props}
                  creativePic={props.creativePic}
                  creativeName={props.creativeName}
                  bio="My name is mike and I am a 34-year-old filmmaker from New Zealand with 10 years of experience in commercial filmmaking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetu metus vel ante euismod consectetur. Maecenas tristique cursus vulputate. Donec facilisis ullamcorper tellus at rhoncus. Duis vitae libero tortor. "
                  name = "Janek Po"
                  rating = "5.0"
                  jobs = "18"
                  industry = "E-commerce"
                  expertise = {['animation','event video']}
                  language = "French"
                  location = "United States"
                  client = "Nike"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" size="sm" onClick={handleClose}>
                Return
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
}

export default VideoContainer;

