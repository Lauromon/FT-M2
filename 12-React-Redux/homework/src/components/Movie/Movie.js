import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula 
                <h2>titulo: {this.props.movie.Title}</h2> 
                <img src={this.props.movie.Poster}/>
                <p>Sinopsis: {this.props.movie.Plot}</p>
                <p>Actores: {this.props.movie.Actors}</p>
                <p>Salida: {this.props.movie.Released}</p>
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        movie: state.movieDetail
    };
};

export default connect(mapStateToProps,{getMovieDetail})(Movie);