import React from 'react';

import IdeaNetworkDescription from './IdeaNetwork/IdeaNetworkDescription';
import IdeaNetworkFilterList from './IdeaNetwork/IdeaNetworkFilterList';
import IdeaNetworkHero from './IdeaNetwork/IdeaNetworkHero';
import IdeaNetworkShortlist from './IdeaNetwork/IdeaNetworkShortlist';
import IdeaNetworkVideoList from './IdeaNetwork/IdeaNetworkVideoList';

function IdeaNetwork() {
    return (
        <div>
          IdeaNetwork component
          <IdeaNetworkShortlist />
          <IdeaNetworkHero />
          <IdeaNetworkDescription />
          <IdeaNetworkFilterList />
          <IdeaNetworkVideoList />
        </div>
    );
}

export default IdeaNetwork;

