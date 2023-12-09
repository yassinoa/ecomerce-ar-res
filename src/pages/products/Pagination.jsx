import React from 'react'
import './Pagination.css'
const Pagination = ({pages,currentPage,setCurrentPage}) => {
  const generatedPages=[]
  for(let i=1;i<=pages;i++){
    generatedPages.push(i)
  }
  return (
    <div className='pagination'>
      <button
       disabled={currentPage===1}
       onClick={()=>setCurrentPage((prev)=>prev -1)}
      className='page previous'>
        <i className='bi bi-arrow-left'></i>
        Precedent
      </button>
      
      {generatedPages.map(page=>
        <div onClick={()=>setCurrentPage(page)} className={currentPage===page ? "page active": 'page'} key={page}>
          {page}
        </div>
        )}
        <button 
        disabled={currentPage===pages}
        onClick={()=>setCurrentPage((prev)=>prev+1)}
        className='page next'>
        suivant
        <i className='bi bi-arrow-right'></i>
      </button>
    </div>
    )
}

export default Pagination