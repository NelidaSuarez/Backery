

const NavbarSticky = () => {
  return (
    <div>
        <ul className="nav justify-content-center">
   
    <li className="nav-item">
      <a className="nav-link" href="#">Inicio</a>
    </li>
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Cannoli Siciliani</a></li>
      <li><a className="dropdown-item" href="#">Macarons</a></li>
      <li><a className="dropdown-item" href="#">Cheesecakes</a></li>      
      <li><a className="dropdown-item" href="#">Tortas y Tartas</a></li>
      <li><a className="dropdown-item" href="#">Pastelería para té</a></li>
    </ul>
  </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Quienes somos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Como comprar</a>
    </li>
    
    <li className="nav-item">
      <a className="nav-link" href="#">Blog</a>
    </li>
  </ul>
  </div>
  )
}

export default NavbarSticky