import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './../../App.css'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="contents">
                        <div className="contact-form">
                            <p className='signupp'>Sign up to our newsletter and skip the queue.</p>
                            <div className='contact-inputs'>
                                <label htmlFor="">Man</label>
                                <input type="radio" name='gender' />
                                <label htmlFor="">Woman</label>
                                <input type="radio" name='gender' />
                                <p>follow us on</p>
                                <div className="social">
                                    <InstagramIcon></InstagramIcon>
                                    <TwitterIcon></TwitterIcon>
                                    <FacebookIcon></FacebookIcon>
                                </div>
                            </div>
                            <input type="text" className='footer__input' />
                        </div>
                        <div className="cutomer-service">
                            <p>CUSTOMER SERVICE</p>
                            <p>CONTACT US</p>
                            <p>FAQC</p>
                            <p>TRACK YOUR ORDER</p>
                        </div>
                        <div className="policies">
                            <p>POLICIES</p>
                            <p>Terms &amp; conditions</p>
                            <p>Privacy Notice</p>
                            <p>Returns policy</p>
                            <p>Shipping policy</p>
                            <p>Cookie policy</p>
                        </div>
                        <div className="sand-sports">
                            <p>SUN & SAND SPORTS</p>
                            <p>Careers</p>
                            <p>About us</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="download"></div>
                        <div className="payment"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer