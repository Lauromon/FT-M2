import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesF && this.props.moviesF.map(movie => <>
          <Link to={`/movie/${movie.id}`}>
            <label>{movie.title}</label> 
          </Link>
        
          <button onClick={() => this.props.removeMovieFavorite(movie.id)}>x</button>
          <br/>
          </>
          )}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    moviesF: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);