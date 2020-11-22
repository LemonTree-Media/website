import React from 'react';

import VideoContainer from './IdeaNetworkVideoList/VideoContainer';
import jacob from '../../assets/jacob.jpeg';

function IdeaNetworkVideoList() {
    return (
        <div className="mx-medium mb-5 d-flex justify-content-between flex-wrap text-center">
          <VideoContainer
              videoLink="https://player.vimeo.com/video/396527090?color=e84c4d&title=0&byline=0&portrait=0"
              creativePic={jacob}
              creativeName="Janek P."
              portfolioLink=""
              clientName="Nike"
              videoName="Just Do It"
              budget="$$$$"
          />
        </div>
    );
}

export default IdeaNetworkVideoList;

