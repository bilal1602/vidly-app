import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import Table from "./common/table.jsx";
import Like from "./common/like.jsx";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => <Link to={`movies/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "numberInStock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];
  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };
  constructor() {
    super();
    if (auth.getCurrentUser()) this.columns.push(this.deleteColumn);
  }
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        onSort={onSort}
        data={movies}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
