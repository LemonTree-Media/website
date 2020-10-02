import React from 'react';

function HomepageWhoWeAre() {
    return (
        <div className="mb-5 mx-medium">
          <p className="h1 font-weight-bold mb-4 text-center">
            Why LemonTree Media
          </p>
          <div className="mb-3">
            LemonTree is a global problem solving community and traceable idea network to offer organizational solutions. LemonTree Media is its creative chapter.
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <p className="h3 font-weight-bold mb-4">
                Ideas
              </p>
              <p>
                Idea is the visual representation of a creator's work. Every video in LemonTree Media is logged as an idea.
              </p>
            </div>
            <div>
              <p className="h3 font-weight-bold mb-4">
                Solvers
              </p>
              <p>
                Solvers are creators who solve real-world problems. At LemonTree Media, creatives are solvers.
              </p>
            </div>
          </div>
        </div>
    );
}

export default HomepageWhoWeAre;
