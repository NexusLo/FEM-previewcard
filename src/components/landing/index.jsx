import './styles.css'
import iconcart from '../../assets/images/icon-cart.svg'
import desktopImg from '../../assets/images/image-product-desktop.jpg'
import mobileImg from '../../assets/images/image-product-mobile.jpg'

export default function Landing () {
    return (
        <div className='wrapper'>
            <div className='maindiv'>
                <div className='card'>
                    <div className='leftdiv'>
                        <picture>
                            <source srcset={mobileImg} media="{max-width:1025px}" className='leftdiv__img'></source>
                            <img src={desktopImg} alt='desktop' className='leftdiv__img'></img>
                        </picture>
                    </div>
                    <div className='rightdiv'>
                        <p className='rightdiv__headline'>PERFUME</p>
                        <h1 className='rightdiv__title'>Gabrielle Essence Eau De Parfum</h1>

                        <p className='rightdiv__txt'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                        <div className='rightdiv__pricediv'><h2 className='rightdiv__pricediv-greentxt'>$149.99</h2> <p className='rightdiv__pricediv-smtxt'>$169.99</p></div>
                        <div className='rightdiv__formdiv'>
                            <button className='rightdiv__btn'>
                            <img src={iconcart}
                                alt="carticon"
                                className='rightdiv__btnimg'
                            />
                            <p className='rightdiv__btntxt'>Add to Cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}