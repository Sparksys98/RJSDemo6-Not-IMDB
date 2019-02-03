import React, { Component } from "react";

import movies from "./data";

class MyList extends Component {
  render() {
    return (
      <div className="mx-auto p-2 w-50">
        <h3>My List</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col" className="text-right">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{movies[1].name}</th>
              <td className="text-right">Watched</td>
            </tr>
            <tr>
              <th scope="row">{movies[3].name}</th>
              <td className="text-right">Want to Watch</td>
            </tr>
            <tr>
              <th scope="row">{movies[4].name}</th>
              <td className="text-right">Want to Watch</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyList;
