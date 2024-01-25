import Menu from './Menu';
import Newsletter from './Newsletter';
import Footer from './Footer';
import InfoHome from './InfoHome';

const Home = () => {
    return (
        <div className='home'>
            <header>
                <Menu />
            </header>
            <body>
                <InfoHome />
                <Newsletter />
                <Footer />
            </body>
        </div>
    );
}

export default Home;