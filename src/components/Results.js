import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Results = () => {
  const location = useLocation();

  const { loading, results, error } = useSelector(
    (state) => state.resultsReducer
  );

  if (loading)
    return <p className="f4 dark-green tc">Searching for best results...</p>;
  if (error) return <p className="f4 dark-red tc">Something bad happened!</p>;

  switch (location.pathname) {
    case "/search":
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          <div className="w-100 w-70-m w-70-l">
            {loading
              ? "Loading..."
              : results.length
              ? results?.map(({ title, link, description }) => (
                  <div key={uuidv4()} className="w-100 bg-white mb2 pa3">
                    <a
                      href={link}
                      target="_blank"
                      className="link dim black-60"
                    >
                      {description?.substr(0, 30)}
                    </a>
                    <a
                      href={link}
                      target="_blank"
                      style={{ color: "#325288", textDecoration: "none" }}
                    >
                      <h2>{title}</h2>
                    </a>
                    <p style={{ color: "#041C32" }}>
                      {description?.substr(0, 100)}
                    </p>
                  </div>
                ))
              : ""}
          </div>
        </section>
      );

    case "/news":
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          <div className="w-100 w-70-m w-70-l">
            {results?.map((result) => {
              return (
                <div key={uuidv4()} className="w-100 bg-white mb2 pa3">
                  <a
                    href={result?.link}
                    style={{ color: "#325288", textDecoration: "none" }}
                    target="_blank"
                  >
                    <p className="f4 fw6 lh-title mb1">{result ?.title_detail ?.value}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      );

    case "/images":
      return (
        <section className="w-100 bg-near-white pt1 pt2-l" style={{minHeight: '1000px', overflowY: 'scroll'}}>
          <div className="images__result-grid">
            {results.length
              ? results.map((result) => (
                  <div key={uuidv4()} className="tc shadow-5 pv3 ph2">
                    <a
                      href={result?.link?.href}
                      style={{ color: "#325288", textDecoration: "none" }}
                      target="_blank"
                    >
                      <img src={result?.image?.src} className="grow" />
                      <p className="fw6 f5" style={{ wordWrap: "break-word" }}>
                        {result.link.title}
                      </p>
                    </a>
                  </div>
                ))
              : ""}
          </div>
        </section>
      );

    case "/videos":
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          VIDEOS
        </section>
      );

    default:
      return "ERROR";
  }
};

export default Results;
