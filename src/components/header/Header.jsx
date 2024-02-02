import './Header.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchBox from '../searchbox/SearchBox';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="content-assets">
            <div className="header-strip__left">
              <p>
                <a href="header-strip__link">
                  <span>
                    <LocalShippingIcon />
                  </span>
                  Free Delivery on orders above QAR 99
                </a>
              </p>
              <p>
                <a href="header-strip__link">
                  <span>
                    <AccountBalanceWalletIcon />
                  </span>
                  Cash on delivery 
                </a>
              </p>
              <div className="search-box-container">
                <SearchBox />
              </div>
            </div>
            <div className="header-strip__right">
              <p>
                <a href="header-strip__link">
                  <span>
                    <LanguageIcon />
                  </span>
                  TM
                </a>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Header