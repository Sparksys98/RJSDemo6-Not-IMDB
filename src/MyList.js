import React from "react";

// Data
import movies from "./data";

const MyList = () => {
  return (
    <div className="mx-auto p-2 w-50">
      <h3>My List</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col" className="text-right">
              Status
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
};

export default MyList;
