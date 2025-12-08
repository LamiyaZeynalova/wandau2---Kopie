import About from "../Modules/About/View/About";
import Contact from "../Modules/Contact/View/Contact";
import Exhibitions from "../Modules/Exhibitions/View/Exhibitions";
import Home from "../Modules/Home/View/Home";
import Shop from "../Modules/Shop/View/Shop";
import ShopDetails from "../Modules/Shop/View/ShopDetails";
import ExhibitionsDetails from "../Modules/Exhibitions/View/ExhibitionsDetails";

const pageList = [
  {
    id: "home",
    title: "Home",
    path: "/",
    element: <Home />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    element: <About />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    path: "/exhibitions",
    element: <Exhibitions />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "exhibitionsDetails",
    title: "ExhibitionsDetails",
    path: "/exhibitionsDetails",
    element: <ExhibitionsDetails />,
    is_visible: true,
    for_header: false,
  },
  {
    id: "shop",
    title: "Shop",
    path: "/shop",
    element: < Shop />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "shopDetails",
    title: "ShopDetails",
    path: "/shopDetails/:productId",
    element: < ShopDetails />,
    is_visible: true,
    for_header: false,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    element: <Contact />,
    is_visible: true,
    for_header: true,
  },
];

export default pageList