import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { ImMenu } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { FaHome, FaHistory } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';
import { AiFillRocket } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';


export const Header = () => {
    const [isClosed, setIsClosed] = useState(false)
    return (
        <div className={styles.navBar} data-testid="header">
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="logo" title="Home" className={styles.logo} />
                </Link>
            </div>
            <label htmlFor="openOrClose" className={styles.menuBtn}>
                {isClosed ? <MdClose /> : <ImMenu />}
            </label>
            <input type="checkbox"
                id="openOrClose"
                className={styles.openOrClose} onChange={() => setIsClosed(prev => !prev)}
            />
            
            <div className={styles.links}>
                <Link to="/" className={styles.activeLink}>
                    <button className={styles.link} data-testid="home-button">
                        <FaHome /> Home
                    </button>
                </Link>
                <Link to="launches-all/" className={styles.activeLink}>
                    <button className={styles.link} data-testid="launches-button">
                        <GoRocket /> Launches
                    </button>
                </Link>
                <Link to="/history" className={styles.activeLink}>
                    <button className={styles.link} data-testid="history-button">
                        <FaHistory /> History
                    </button>
                </Link>
                <Link to="/about" className={styles.activeLink}>
                    <button className={styles.link} data-testid="about-button">
                        <BsInfoCircleFill /> About
                    </button>
                </Link>
            </div>
        </div >
    );
}

















// type props = {
//     name: string;
//     age: number;
// }


// export const Page = ({ name, age }: props) => {
//     return 
//     (
//         <div >
//             {name}
//             {age}
//         </div>
//     );
// }