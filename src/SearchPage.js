import React from "react";

import { link } from "react-router-dom";

function SearchPage() {
  return (
    <div className="open-search">
      <link to="/search">
        <button>Add a Book</button>
      </link>
    </div>
  );
}

export default SearchPage;
