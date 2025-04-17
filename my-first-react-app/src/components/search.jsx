import React from "react"

const Search = ({searchTerm, setSearchTerm}) => {
  
return(
    <div className="search">
        <div>
           

        <img src="search.jpg" alt="" style={{ filter: "brightness(0) invert(1)" }} />


        <input type="text" 
        placeholder="Search through thousands of movies"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}/>


        </div>
    </div>
)
}
export default Search
  