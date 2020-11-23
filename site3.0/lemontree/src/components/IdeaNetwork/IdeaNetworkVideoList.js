import React, { useContext } from "react";

import VideoContainer from "./IdeaNetworkVideoList/VideoContainer";
// import Filter from "./IdeaNetworkFilterList/Filter";
import { IdeaNetworkContext } from "../../contexts/IdeaNetworkContext";
// import IdeaNetworkContext from '../../contexts/IdeaNetworkContext';

function IdeaNetworkVideoList() {
  const { videoType, industry, videoStyle, budget, ideas } = useContext(
    IdeaNetworkContext
  );
  //pass what's changed in the context and display video containers
  return (
    <VideoContainer
      videoType={videoType}
      industry={industry}
      videoStyle={videoStyle}
      budget={budget}
      ideas={ideas}
    />
  );
}

export default IdeaNetworkVideoList;
