import Carousel from 'react-bootstrap/Carousel';
import '../styles/App.css';
import pic from '../images/ch-1.JPG'
import pic2 from '../images/ch2.JPG'
import pic3 from '../images/ch3.JPG'
import pic4 from '../images/ch-4.JPG'
import pic5 from '../images/ch-5.JPG'
import pic6 from '../images/ch-6.JPG'
import pic7 from '../images/ch-7.JPG'
import pic8 from '../images/ch-8.JPG'
import pic9 from '../images/ch-9.JPG'

import ceviche from '../images/ceviche.JPG'
import ceviche2 from '../images/ceviche2.JPG'

import italia from '../images/italian.JPG'
import italia2 from '../images/italian2.JPG'
import italia3 from '../images/italian3.JPG'
import italia4 from '../images/italian4.JPG'
import italia5 from '../images/italian5.JPG'

import catering from '../images/catering.jpg'
import catering2 from '../images/catering2.jpg'
import catering3 from '../images/catering3.jpg'
import catering4 from '../images/catering4.jpg'
import catering5 from '../images/catering5.JPG'
import catering6 from '../images/catering6.JPG'


function Services() {
    return (
        <div>
        <div className='container-services'>

            <div className='service-carousel'>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img src={catering} alt='catering'></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={catering2} alt='catering'></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={catering3} alt='catering'></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={catering4} alt='catering'></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={catering5} alt='catering'></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={catering6} alt='catering'></img>
                    </Carousel.Item>
                </Carousel>
                <h2>CATERING</h2>
            </div>

            <div className='service-carousel'>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img src={pic} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>SOPA WANTON</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic2} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>ENSALADA DE PEPINO</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic3} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>LUMPIAS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic4} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>ARROZ</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic5} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>TALLARINES</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic6} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>POLLO MIEL Y AJONJOLÍ</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic7} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>LOMITO EN SALSA DE OSTRAS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic8} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>ALAS EN BBQ COREANA</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={pic9} alt='asian'></img>
                        <Carousel.Caption>
                            <h3>PANCETA CROCANTE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h2>COMIDA ASIÁTICA</h2>
            </div>
            <div className='service-carousel'>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img src={ceviche} alt='ceviche'></img>
                        <Carousel.Caption>
                            <h3>CLÁSICO</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={ceviche2} alt='ceviche'></img>
                        <Carousel.Caption>
                            <h3>CLÁSICO</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h2>CEVICHE</h2>
            </div>
            <div className='service-carousel'>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img src={italia} alt='italian'></img>
                        <Carousel.Caption>
                            <h3>LASAGNA</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={italia2} alt='italian'></img>
                        <Carousel.Caption>
                            <h3>TORTELLINI</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={italia3} alt='italian'></img>
                        <Carousel.Caption>
                            <h3>TORTELLINI</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={italia4} alt='italian'></img>
                        <Carousel.Caption>
                            <h3>GNOCCHI</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={italia5} alt='italian'></img>
                        <Carousel.Caption>
                            <h3>TIRAMISÙ</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <h2>COMIDA ITALIANA</h2>
            </div>
        
        </div>
            <div className='more-info'>
            <h4>Para más información</h4>
    
                <a href='https://wa.me/message/26GNQXJCZ3VVM1' target='_blank' rel="noreferrer">
                    <button href='' className='service-button'>Comunícate a través de Whatsapp</button>
                </a>
        
        </div>
        
        </div>
    );
}

export default Services;
