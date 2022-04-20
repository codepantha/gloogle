import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ReactPlayer from "react-player";

const Results = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();

  const { loading, results, error } = useSelector(
    (state) => state.resultsReducer
  );

  const pageLimit = 10;
  const maxPages = Math.ceil(results.length / 10);
  const [pageResults, setPageResults] = useState(results?.slice(0, pageLimit));

  useEffect(() => {
    // on re-render, set pageResults to be 10 items depending on the current page
    setPageResults(
      results?.slice(page * pageLimit - pageLimit, page * pageLimit)
    );
  }, [results, page]);

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
              : pageResults.length
              ? pageResults?.map(({ title, link, description }) => (
                  <div key={uuidv4()} className="w-100 bg-white mb2 pa3">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="link dim black-60"
                    >
                      {description?.substr(0, 30)}
                    </a>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
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
            {pageResults.length ? (
              <div className="pagination tc flex justify-center">
                <button
                  name="prev"
                  onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}
                  className="prev mr5 br3 pa3 b--near-white"
                >
                  Back
                </button>
                <button
                  name="next"
                  onClick={() =>
                    page < maxPages ? setPage(page + 1) : setPage(maxPages)
                  }
                  className="next br3 b--near-white pa3"
                >
                  Next
                </button>
              </div>
            ) : (
              ""
            )}
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
                    rel="noreferrer"
                  >
                    <p className="f4 fw6 lh-title mb1">
                      {result?.title_detail?.value}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      );

    case "/image":
      return (
        <section
          className="w-100 bg-near-white pt1 pt2-l"
          style={{ minHeight: "1000px", overflowY: "scroll" }}
        >
          <div className="images__result-grid">
            {results.length
              ? results.map((result) => (
                  <div key={uuidv4()} className="tc shadow-5 pv3 ph2">
                    <a
                      href={result?.link?.href}
                      style={{ color: "#325288", textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={result?.image?.src}
                        alt={`${result?.image?.alt}_gloogle`}
                        className="grow"
                      />
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
          <div className="flex justify-around flex-wrap">
            {results?.map((result) => {
              return (
                <div key={uuidv4()} className="bg-white mb2 pa3">
                  <ReactPlayer
                    url={result?.link}
                    controls
                    width="350px"
                    height="200px"
                  />
                  <p className="mt2 pa3 f6">{result.title}</p>
                </div>
              );
            })}
          </div>
        </section>
      );

    default:
      return "ERROR";
  }
};

export default Results;
