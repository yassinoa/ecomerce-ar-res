import  "./header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className="top-header">
        <div className="top-header-menu">
          <i className='bi bi-list'></i>
        </div>
        <div className="top-header-phone">
          
          <i className='bi bi-telephone'></i>
          22 222 2222
        </div>
        <div className="top-header-text">Hello for all users</div>
        <div className="top-header-logo">
          yassin shop
          <i className='bi bi-basket2'></i>
        </div>
        
      </div>
    </header>
  )
}

export default Header