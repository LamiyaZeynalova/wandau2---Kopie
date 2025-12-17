import { Link, useLocation } from "react-router-dom";
import logoHome from "../assets/images/image/logoHome.jpg";
import pageList from "../constants/pageList";
import { useEffect, useState } from "react";
import { FiX, FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { ShopService } from "../Modules/Shop/Service/ShopService";
import type { IProduct } from "../Modules/Shop/Models/ShopModel";
import { FaShoppingCart } from "react-icons/fa";
import { toggleCart } from "../redux/slices/productSlice";
import { useAppDispatch } from "../redux/hooks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const dispatch = useAppDispatch();

  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getData = async (param: string) => {
    setLoading(true);
    try {
      const res = await ShopService.searchLocal(param);
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const resetData = () => {
    setSearchIsOpen(false);
  };

  useEffect(() => {
    if (searchQuery.length === 0) {
      setProducts([]);
      return;
    }
  }, [searchQuery]);

  return (
    <>
      <header className={`header ${isHome ? "header-home" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="logo">
              <Link to="/" className="logoHome">
                <img src={logoHome} alt="homelogo" />
              </Link>
            </div>

            <nav className="navBar">
              <ul className="navList">
                {pageList
                  .filter((p) => p.for_header)
                  .map((page) => (
                    <li key={page.id}>
                      <Link to={page.path}>{page.title}</Link>
                    </li>
                  ))}
              </ul>
            </nav>

            {/* ICONS */}
            <div className="headerIcons">
              <div
                className="searchIcon"
                onClick={() => setSearchIsOpen(!searchIsOpen)}
              >
                <FiSearch />
              </div>
              <div
                className="cartIcon"
                onClick={() => dispatch(toggleCart(true))}
              >
                {/* <Link to={"/cart"}> */}
                <FaShoppingCart className="shopCartIcon" />
                {/* </Link> */}
              </div>

              {/* BURGER MENU */}
              <div className="burgerIcon" onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <RxHamburgerMenu />}
              </div>
            </div>

            {/* DESKTOP BUTTON */}
            <div className="headerBtn">
              <Link to="/shop">
                <button>SHOP ART</button>
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE SLIDE MENU */}
        <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
          {pageList
            .filter((p) => p.for_header)
            .map((page) => (
              <Link key={page.id} to={page.path} onClick={closeMenu}>
                {page.title}
              </Link>
            ))}
        </div>

        {/* DARK OVERLAY */}
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </header>

      {/* SEARCH BOX */}
      <div className={`search-box ${searchIsOpen && "isOpen"}`}>
        <div className="container">
          <div className="form">
            <h3>SEARCH EVENT</h3>
            <input
              type="search"
              placeholder="What are you looking for ?"
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <input
              type="submit"
              value="SEARCH"
              onClick={() => getData(searchQuery)}
            />
          </div>

          <div className="search-events">
            <ul>
              {loading ? (
                <div className="searchLoading">Loading...</div>
              ) : (
                products.map((item) => (
                  <li key={item._id} className="search-item">
                    {/* <div className="img-container">
                      <img src={item.productImage} alt={item.name} />
                    </div> */}
                    <h5>
                      <Link to={`/shopDetails/${item._id}`} onClick={resetData}>
                        {item.name}
                      </Link>
                    </h5>
                    <span className="search-detail">{item.details}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
