import React, { useState } from "react";
import "./Search.css";
import dataproducts from "./data.json";

function SearchProducts() {
  const jdata = dataproducts.dataproducts;
  const [filteredProducts, setFilteredproducts] = useState("");
  const searchWord = "";
  const [wordEntered, setWordEntered] = useState("");
  //create function to filter the data  that similar to the input data from the user in the search from user
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // create anew array
  };
  //create a function to clear the input in the fields and fron the filtredproducts
  /* const clearInput = () => {
      setFilteredproducts([]);
      setWordEntered("");
    };*/
  const handleClick = (e) => {
    e.preventDefault(); // not to reload the page when click enter
    const newFilter = jdata.filter((value) => {
      return (value.name && value.description)
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    //when there is nothing in the search bar set filtered products to an empty array
    if (searchWord === "") {
      setFilteredproducts([]);
    } else {
      setFilteredproducts(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          value={wordEntered}
          onChange={handleFilter} // pass the function called "handlefilter" in onChange
        />
        <div className="searchbtn">
          <button className="searchbtn" onClick={handleClick}>
            search
          </button>
        </div>
      </div>
      {filteredProducts.length != 0 && ( // show the next div just when the array not empty
        <div className="dataResult">
          {filteredProducts.map((value, key) => {
            return <p>{value.name} </p>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchProducts;
