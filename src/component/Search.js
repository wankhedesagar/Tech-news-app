import React from 'react'
import { useGlobalContext } from './Context'

function Search() {
  const {query,searchPost} = useGlobalContext();
  return (
    <React.Fragment>
      <div>
        <h1>Tech News Website</h1>
        <form>
          <div>
            <input type="text" placeholder='Search here' value={query} onChange={(e) => searchPost(e.target.value)}/>
          </div>
        </form>
      </div>

    </React.Fragment>
  )
}

export default Search