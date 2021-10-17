import React from 'react'
import { NextLaunch } from '../NextLaunch/NextLaunch'
import styles from '../Home/Home.module.css'
import { RecentLaunches } from '../RecentLaunches/RecentLaunches';

export const Home: React.FC<{}> = () => {
	return (
		<div data-testid="home-page">
			<div className={styles.heroImage} data-testid="heroImage">
				<div className={styles.shade}>
					<NextLaunch />
				</div>
			</div>
			<RecentLaunches />
		</div>
	);
}