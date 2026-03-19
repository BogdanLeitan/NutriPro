import FooterLogo from '../../assets/logo4.webp'
import "./footer.css"

function Footer() {
  return (
    <>
      <footer>
        <div>
          <img className="logo" src={FooterLogo} />
        </div>
        <div className="footer-links">
          <a href="#">Abonamente</a><a href="#">Catalog</a><a href="#">Sală</a><a href="#">Contact</a>
        </div>
        <div className="footer-copy">© 2026 NutriPro · Mâncare sănătoasă, viață frumoasă</div>
      </footer>
    </>
  );
}

export default Footer