import React from 'react';
import spacexLogo from '../../images/spacexLogo.jpg';
import ElonMusk from '../../images/ElonMusk.jpg';
import GwynneShotwell from '../../images/GwynneShotwell.jpg';
import TomMueller from '../../images/TomMueller.jpg';
import styles from './About.module.css';

const persons = [
    { name: 'Elon Musk', title: 'Founder, CEO, CTO', image: ElonMusk },
    { name: 'Gwynne Shotwell', title: 'COO', image: GwynneShotwell },
    { name: 'Tom Mueller', title: 'CTO', image: TomMueller },
];

export const About = () => {
    return (
        <div className={styles.container}>
            <img src={spacexLogo} alt="Logo" />
            <h4>Founded in 2002</h4>
            <p>
                SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was
                founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people
                to live on other planets.
            </p>
            <div className={styles.persons}>
               {persons.map (person => (
                   <div className={styles.person} key={person.name}>
                       <img src={person.image} alt={person.name} />
                       <div className={styles.image}></div>
                       <h4>{person.name}</h4>
                       <p>{person.title}</p>
                   </div>
               ))}
            </div>
        </div>
    )
}
