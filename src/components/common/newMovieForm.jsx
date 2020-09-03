import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import { getGenres } from "../../services/fakeGenreService";
class NewMovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    listGenres: getGenres(),
    errors: {},
  };
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string(),
    numberInStock: Joi.number().min(0),
    rate: Joi.number().min(1).max(10),
  };
  doSubmit = () => {
    console.log("Submitted");
  };
  render() {
    const { listGenres } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropdown("genre", "Genre", listGenres)}
          {this.renderInput("numberInStock", "Number in Stock", "Number")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
