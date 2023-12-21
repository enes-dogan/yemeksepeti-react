import logoImg from '../assets/logo.jpg';

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Yemeksepeti</h1>
      </div>
      <nav>
        <button className="text-button undefined">Cart(0)</button>
      </nav>
    </header>
  );
}

export default Header;
