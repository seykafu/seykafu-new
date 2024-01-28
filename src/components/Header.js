import React from 'react';
import Header_Desktop from './Header_Desktop';
import Header_Mobile from './Header_Mobile';
import '../assets/css/layout.css';


const Header = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <Header_Mobile /> : <Header_Desktop />;
};

export default Header;