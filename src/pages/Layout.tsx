import {lazy, Suspense} from "react";
import Spinner from "../UI/Spinner/Spinner.tsx";
const Header = lazy(() => import('../components/Header/Header.tsx'))
const Intro = lazy(() => import('../pages/Intro/Intro.tsx'))
const Models = lazy(() => import('../pages/Models/Models.tsx'))
const About = lazy(() => import('../pages/About/About.tsx'))
const Service = lazy(() => import('../pages/Service/Service.tsx'))
const Footer = lazy(() => import('../components/Footer/Footer.tsx'))




const Layout = () => {
    return (
        <div>
            <Suspense fallback={<Spinner/>}>
                <Header/>
                <Intro/>
                <Models/>
                <About/>
                <Service/>
                <Footer/>
            </Suspense>
        </div>
    );
};

export default Layout;