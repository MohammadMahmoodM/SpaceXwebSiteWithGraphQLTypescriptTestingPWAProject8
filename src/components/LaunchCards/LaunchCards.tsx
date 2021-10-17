import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from '../../react-app-env.d';
// GrapgQl Query Hook
import { useSingleLaunchQuery } from '../../api';
//icon
import { FaYoutube } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import { type } from 'os';
//styles
import styles from './LaunchCards.module.css';

//Either this

// interface props {
//     flightNumber : number;
// }
//PR this
type props = {
    flightNumber: number;
}

export const LaunchCard = ({ flightNumber }: props) => {
    const { data, loading, error, networkStatus } = useSingleLaunchQuery({
        variables: { flightNumber: flightNumber.toString() } // May be must be a string type but we already assign number
    });
    return (
        <div className={styles.container}>
            {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                <>
                    <div className={styles.missionPatchSmall}>
                        {data?.launch?.links?.mission_patch_small ?
                            <Link to={`/launches-all/${data.launch.flight_number}`}>
                                <img
                                    src={(data.launch.links.mission_patch_small !== null)
                                        ? data.launch.links.mission_patch_small 
                                        : undefined
                                    }
                                    alt="Mission Patch"
                                    title="Mission Patch"
                                />
                            </Link>
                            : ""   // either show content in image or nothing
                        }
                    </div>
                    <div className={styles.launchData}>
                        <div className={styles.flightNumberandStatus}>
                            <p>
                                {`Flight Number ${data?.launch?.flight_number}`}
                            </p>
                            <p>Status: {
                                data?.launch?.launch_success !== undefined
                                    ? data.launch.launch_success === null
                                        ? 'Upcomming'
                                        : data.launch.launch_success === true
                                            ? <span className={styles.success}>Success</span>
                                            : <span className={styles.failure}>Failed</span>
                                    : "Nothing Avaible to Show"
                            }</p>
                        </div>

                        <p>{`Mission Name: ${data?.launch?.mission_name}`}</p>
                        <p>{`Launch Site: ${data?.launch?.launch_site?.site_name}`}</p>
                        {/* <p>{`Launch Date ${data?.launch?.launch_date_unix}`}</p> 
                        this command will not give proper human readable formate */}
                        <p>{`lauch Date ${data?.launch?.launch_date_unix ? new Date(data.launch.launch_date_unix * 1000).toUTCString()
                            : 'Date Not Avaiable'}`}
                        </p>
                        <div className={styles.links}>
                            <span className={styles.detailsLink}>
                                <Link to={`/Launches-all/${data?.launch?.flight_number}`}>
                                    More Details . . .
                                </Link>
                            </span>
                            {data?.launch?.links?.video_link
                                ? <span>
                                    <a
                                        href={data.launch.links.video_link}
                                        target="_blank" // check this why it's here
                                        rel="no"
                                        title="Video Link"
                                        className={styles.videoLink}
                                    >
                                        <FaYoutube />
                                    </a>
                                </span>
                                : ""  // if link comming then show data otherwise "". "" dont show anything
                            }
                            {data?.launch?.links?.article_link
                            ? <span>
                                <a
                                    href={data.launch.links.article_link}
                                    target="_blank"
                                    rel="noo"
                                    title="Article Link"
                                    className={styles.articleLink}
                                >
                                    <RiArticleLine />
                                </a>
                            </span>
                            : ""   // if link comming then show data otherwise "". "" dont show anything
                            }
                        </div>
                    </div>
                </>}
        </div>
    );
}