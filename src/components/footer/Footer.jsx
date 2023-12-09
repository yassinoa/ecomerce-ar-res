import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <h3 className='footer-top-title'>Disponible Toujours pour vous aider</h3>
        <div className="footer-top-email">
          <span className="footer-top-text">contacter Nous avec E-mail</span>
          <span className="footer-top-email-adress">
            <i className='bi bi-envelope'></i>
            test@testtest.error
          </span>
        </div>
      </div>
    <div className="footer-item-wrapper">
      <div className="footer-item">
        <h4 className="footer-item-title">Electronique</h4>
        <ul className="footer-item-link">
          <li className="footer-item-link">Camera et enregistrement video</li>
          <li className="footer-item-link">Appareil de maison</li>
          <li className="footer-item-link">Telephone</li>
          <li className="footer-item-link">Casque</li>
          <li className="footer-item-link">TV</li>
          <li className="footer-item-link">Tablette</li>
        </ul>
      </div>
      <div className="footer-item">
        <h4 className="footer-item-title">Vetement</h4>
        <ul className="footer-item-link">
          <li className="footer-item-link">Vetement homme</li>
          <li className="footer-item-link">Vetement femme</li>
          <li className="footer-item-link">Vetement enfant</li>
          <li className="footer-item-link">Lunette</li>
          <li className="footer-item-link">Bijoux</li>
          <li className="footer-item-link">Montre</li>
        </ul>
      </div>
      <div className="footer-item">
        <h4 className="footer-item-title">Cuisine</h4>
        <ul className="footer-item-link">
          <li className="footer-item-link">Decor</li>
          <li className="footer-item-link">Meubles</li>
          <li className="footer-item-link">Equipement de cuisine</li>
          <li className="footer-item-link">Sroquit douche</li>
          <li className="footer-item-link">Son et video</li>
          <li className="footer-item-link">Jardin</li>
        </ul>
      </div>
      <div className="footer-item">
        <h4 className="footer-item-title">Beauté</h4>
        <ul className="footer-item-link">
          <li className="footer-item-link">Parfum</li>
          <li className="footer-item-link">Maquillage</li>
          <li className="footer-item-link">cheveux</li>
          <li className="footer-item-link">Peaux</li>
          <li className="footer-item-link">Champoin</li>
          <li className="footer-item-link">Produit medicale</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
     <i className='bi bi-c-circle'></i> 2023 , All rights reserved
    </div>
    </footer>
  )
}

export default Footer