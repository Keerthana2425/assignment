import React from "react";
import axios from "axios";

class BookList extends React.Component {
  state = {
    books: [
      { bname: "potter", id: 1 },
      { bname: "keerthi", id: 2 },
      { bname: "venky", id: 3 },
    ],
  };

  //   componentDidMount() {
  //     axios
  //       .get("https://some-api.com/harry-potter")
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  //   }

  render() {
    return (
      <ul>
        {this.state.books.map((book) => (
          <li key={book.id}>
            {book.bname}-{book.id}
          </li>
        ))}
      </ul>
    );
  }
}

export default BookList;
