import React from 'react';

import Filter from './IdeaNetworkFilterList/Filter';

const OPTIONS = {
    "Video Type" : [
      { value: "All", label: "All" },
      { value: "Commercial", label: "Commercial" },
      { value: "Short Film", label: "Short Film" },
      { value: "Short Documentary", label: "Short Documentary" },
      { value: "Animation", label: "Animation" },
      { value: "Event Video", label: "Event Video" },
      { value: "Interview", label: "Interview" },
      { value: "Drone Video", label: "Drone Video" },
      { value: "Virtual Reality", label: "Virtual Reality" },
      { value: "Augmented Reality", label: "Augmented Reality" }
    ],
    "Industry" : [
        { value: "All", label: "All" },
        { value: "B2C", label: "B2C" },
        { value: "B2B", label: "B2B" },
        { value: "Food", label: "Food" },
        { value: "Tech", label: "Tech" },
        { value: "Ecommerce", label: "Ecommerce" },
        { value: "Fashion", label: "Fashion" },
        { value: "Sustainability", label: "Sustainability" },
        { value: "Gaming", label: "Gaming" },
        { value: "Entertainment", label: "Entertainment" },
        { value: "Education", label: "Education" },
        { value: "Sports", label: "Sports" },
        { value: "Retail", label: "Retail" },
        { value: "Healthcare", label: "Healthcare" },
        { value: "Energy", label: "Energy" },
        { value: "Automobile", label: "Automobile" },
        { value: "Beauty", label: "Beauty" },
    ],
    "Video Style" : [
        { value: "All", label: "All" },
        { value: "Dynamic", label: "Dynamic" },
        { value: "Tech-driven", label: "Tech-driven" },
        { value: "Elegant", label: "Elegant" },
        { value: "Emotional", label: "Emotional" },
        { value: "Empowering", label: "Empowering" },
        { value: "Lighthearted", label: "Lighthearted" },
        { value: "Comedic", label: "Comedic" },
        { value: "Suspenseful", label: "Suspenseful" },
        { value: "Informative", label: "Informative" },
        { value: "Visually Stunning", label: "Visually Stunning" },
    ],
    "Budget" : [
        { value: "All", label: "All" },
        { value: "$", label: "$" },
        { value: "$$", label: "$$" },
        { value: "$$$", label: "$$$" },
        { value: "$$$$", label: "$$$$" },
        { value: "$$$$$", label: "$$$$$" },
    ],
}

function IdeaNetworkFilterList() {
    return (
        <div className="mx-5 mt-4 mb-5">
          <h5>Filter by:</h5>
          <Filter
              name="Video Type"
              options={OPTIONS["Video Type"]}
          />
          <Filter
              name="Industry"
              options={OPTIONS["Industry"]}
          />
          <Filter
              name="Video Style"
              options={OPTIONS["Video Style"]}
          />
          <Filter
              name="Budget"
              options={OPTIONS["Budget"]}
          />
        </div>
    );
}

export default IdeaNetworkFilterList;

