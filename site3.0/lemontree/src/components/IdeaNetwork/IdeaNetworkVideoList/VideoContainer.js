import React from 'react';
import Button from 'react-bootstrap/Button';
import Icofont from 'react-icofont';

import VideoEmbed from '../../VideoEmbed';

function VideoContainer(props) {
    return (
        <div className="m-2 mb-4">
          <VideoEmbed videoLink={props.videoLink} />
          <div className="video-description m-0 p-3 d-flex justify-content-between align-items-center">
            <div>
              <img src={props.creativePic} alt={props.creativeName} className="profile mr-3 mt-2" />
              <b>{props.creativeName}</b>
            </div>
            <div>
              <Button className="btn-xs mr-3">
                View Portfolio &nbsp;
                <Icofont size="1" icon="play-alt-1" />
              </Button>
              <Button className="btn-xs" variant="success">
                Add to Shortlist &nbsp;
                <Icofont size="1" icon="ui-add" />
              </Button>
            </div>
          </div>
          <div>
            <div className="p-2 d-flex justify-content-between">
              <h4 className="font-weight-bold">
                {props.clientName} | {props.videoName}
              </h4>
              <p className="gray">{props.budget}</p>
            </div>
          </div>
        </div>
    );
}

export default VideoContainer;

