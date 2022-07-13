import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    moviesDisplayed: 0,
  };

  handleDelete = (index) => {
    this.state.movies.splice(index, 1);
    this.setState({ rows: this.state.movies });
  };

  render() {
    return (
      <div className="container-fluid">
        <h5 className="my-3">
          Showing {this.state.movies.length} movies in the database.
        </h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.displayMovies()}</tbody>
        </table>
      </div>
    );
  }

  displayMovies() {
    return this.state.movies.map((movie, index) => (
      <tr key={index}>
        <th>{movie.title}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.handleDelete(movie);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}

export default Movies;
