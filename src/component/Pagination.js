import React from 'react'
import { useGlobalContext } from "./Context";

function Pagination() {
  const {page,nbPages,getPrevPage,getNextPage} = useGlobalContext()
  return (
    <React.Fragment>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>{page + 1} of {nbPages}</p>

        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </React.Fragment>
  )
}

export default Pagination;