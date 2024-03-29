import React from 'react';
import {Link} from 'react-router-dom';
//Icons
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { MdDoNotDisturb, MdLocationOn } from 'react-icons/md';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.localLinks}>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/launches-all">
                            Launches
                        </Link>
                    </li>
                    <li>
                        <Link to="/history">
                            History
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.socialLinks}>
                <a
                    href="https://www.google.com/maps/place/Spacex/@33.9201602,-118.3284819,17z/data=!4m13!1m7!3m6!1s0x80c2b5ded9a490b5:0x3095ae5795c500b3!2sRocket+Rd,+Hawthorne,+CA+90250,+USA!3b1!8m2!3d33.9213135!4d-118.3268783!3m4!1s0x80c2b5dee46db32d:0x5589bf4232c10232!8m2!3d33.9206806!4d-118.3282793"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdLocationOn />
                    <div>
                        <p>Rocket Road</p>
                        <p>Hawthorne</p>
                        <p>California, USA</p>
                    </div>
                </a>
                <ul>
                    <li>
                        <a 
                            href="https://twitter.com/spacex"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="SpaceX Twitter"
                        >
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/spacex"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="SpaceX YouTube"
                        >
                            <FaYoutube />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/spacex/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="SpaceX Instagram"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.flickr.com/photos/spacex"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="SpaceX Flickr"
                        >
                            <MdDoNotDisturb />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/company/spacex"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="SpaceX LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}