interface Film {
  Title: String;
  Year: String;
  imdbID: String;
  Type: String;
  Poster: String;
}

interface OMDBSearchByTitleResponse {
  totalResults: String;
  Response: "True" | "False";
  Search: Array<Film>
}
