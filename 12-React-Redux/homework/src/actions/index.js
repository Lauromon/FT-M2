const apikey = '8f3a6eca';

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  };
  
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  };

export function removeMovieFavorite(idMovie) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: idMovie };
};

export function getMovieDetail(mdbId) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${mdbId}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES_DETAILS", payload: json });
        });
    };
};