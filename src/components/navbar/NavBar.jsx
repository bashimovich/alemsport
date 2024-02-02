import './NavBar.css'
import Logo from './../../assets/logo.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';



function NavBar() {
  return (
    <div>
        <div className="wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="menu">
                        <div className="logo">
                            <img src={Logo}  alt="" />
                        </div>
                        <div className="category-links">
                            <ul>
                                <li>
                                    men
                                    <div className="subcategories-links">
                                        <ul>
                                            <li>
                                                men
                                            </li>
                                            <li>
                                                women
                                            </li>
                                            <li>
                                                kids
                                            </li>
                                            <li>
                                                Hit reset
                                            </li>
                                            <li>
                                                outdoors
                                            </li>
                                            <li>
                                                new
                                            </li>
                                            <li>brands</li>
                                            <li>
                                                sports
                                            </li>
                                            <li>sale</li>
                                            <li>accessories</li>
                                        </ul>
                                        <div className='subcategory-container-btn'>
                                            <p>
                                                Shop All Men's
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    women
                                </li>
                                <li>
                                    kids
                                </li>
                                <li>
                                    Hit reset
                                </li>
                                <li>
                                    outdoors
                                </li>
                                <li>
                                    new
                                </li>
                                <li>brands</li>
                                <li>
                                    sports
                                </li>
                                <li>sale</li>
                                <li>accessories</li>
                            </ul>
                        </div>
                    </div>
                    <div className="for-user">
                        <p className='user-profile'>
                            Hi, Guest
                            <span>
                                <PersonOutlinedIcon />
                            </span>
                        </p>
                        <p><span>
                            <FavoriteBorderIcon />
                        </span></p>
                        <p>
                            <span>
                                <ShoppingBasketOutlinedIcon />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar