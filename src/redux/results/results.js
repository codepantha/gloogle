const GET_RESULTS_REQUEST = "GET_RESULTS_REQUEST";
const GET_RESULTS_SUCCESS = "GET_RESULTS_SUCCESS";
const GET_RESULTS_FAILED = "GET_RESULTS_FAILED";
const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
const BASEURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const getResults = (type, searchQuery) => (dispatch) => {
  dispatch({ type: GET_RESULTS_REQUEST });

  const fetchResults = async () => {
    try {
      const res = await fetch(`${BASEURL}${type}/q=${searchQuery}&num=40`, {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-proxy-location': 'EU',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        }
      });
      const data = await res.json();
      if (type === '/search')
        dispatch({ type: GET_RESULTS_SUCCESS, payload: data.results })
      else if (type === '/image')
        dispatch({ type: GET_IMAGES_SUCCESS, payload: data.image_results })
      else if (type === '/news')
        dispatch({ type: GET_NEWS_SUCCESS, payload: data.entries })
    } catch (e) {
      dispatch({ type: GET_RESULTS_FAILED, payload: "Ooops! Something bad happened." })
    }
  }
  fetchResults();
}

const initialState = {
  loading: false,
  results: [],
  error: null,
};
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS_REQUEST:
      return { loading: true, results: [] };
    case GET_RESULTS_SUCCESS:
      return { loading: false, results: action.payload };
    case GET_IMAGES_SUCCESS:
      return { loading: false, results: action.payload }
    case GET_NEWS_SUCCESS:
      return { loading: false, results: action.payload }
    case GET_RESULTS_FAILED:
      return { loading: false, results: action.payload }
        
    default:
      return state;
  }
}

export default resultsReducer;