import React from 'react';

import Filter from './IdeaNetworkFilterList/Filter';

const OPTIONS = {
    "Video Type" : [
        "All",
        "Commercial",
        "Short Film",
        "Short Documentary",
        "Animation",
        "Event Video",
        "Interview",
        "Drone Video",
        "Virtual Reality",
        "Augmented Reality"
    ],
    "Industry" : [
        "All",
        "B2C",
        "B2B",
        "Food",
        "Tech",
        "Ecommerce",
        "Fashion",
        "Sustainability",
        "Gaming",
        "Entertainment",
        "Education",
        "Sports",
        "Retail",
        "Healthcare",
        "Energy",
        "Automobile",
        "Beauty"
    ],
    "Video Style" : [
        "All",
        "Dynamic",
        "Tech-driven",
        "Elegant",
        "Emotional",
        "Empowering",
        "Lighthearted",
        "Comedic",
        "Suspenseful",
        "Informative",
        "Visually Stunning"
    ],
    "Budget" : [
        "All",
        "$",
        "$$",
        "$$$",
        "$$$$",
        "$$$$$"
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
          <input type="checkbox" name="Originals"/> LemonTree Originals
        </div>
    );
}

export default IdeaNetworkFilterList;

