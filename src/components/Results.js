import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();

  switch (location.pathname) {
    case '/search':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          <div className="w-100 w-70-m w-70-l">
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
          </div>
        </section>
      )
    case '/news':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          NEWS
        </section>
      )
    case '/images':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          IMAGES
        </section>
      )
    case '/videos':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          VIDEOS
        </section>
      )
    default:
      return "ERROR";
}

  
};

export default Results;
