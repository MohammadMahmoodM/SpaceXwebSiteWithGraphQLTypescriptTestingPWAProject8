import React from 'react';
import { useParams} from 'react-router-dom';
// GraphQL Query Hook
import { useLaunchDetailsQuery } from '../../api/index';
import { Message } from '../../react-app-env.d';
//Icons
import { FaYoutube } from 'react-icons/fa';
import { FcWikipedia } from 'react-icons/fc';
import { RiArticleLine } from 'react-icons/ri';
//Styles
import styles from './LaunchDetails.module.css';

const flightNumberDefault = '101';

// type Props = {
//     flightNumber : number;
// }

export const LaunchDetails = () => {
    const { flightNumber } = useParams();
    const { data, loading, error, networkStatus } = useLaunchDetailsQuery({
        variables: { flightNumber: flightNumber || flightNumberDefault }
    });
    return (
        <div className={styles.container}>
            {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                <>
                    <div className={styles.patchAndTitle}>
                        {data && data.launch && data.launch.links && data.launch.links.mission_patch_small &&
                            <img
                                src={data.launch.links.mission_patch_small}
                                alt="Mission Patch"
                                title={`${data.launch.mission_name} Mission Patch`}
                            />
                        }
                        <div className={styles.title}>
                            <h2 className={styles.heading}>
                                {data?.launch?.mission_name}
                            </h2>
                            <div>
                                <p>{`Flight Number${data?.launch?.flight_number}`}</p>
                                <p>
                                    Status: {
                                        data?.launch?.launch_success !== undefined
                                            ? data.launch.launch_success === null  // if null then it's mean upcomming
                                                ? 'Upcoming'   // if Upcoming then process will stop here otherwise looking for below comand then then check if below command eist ot not
                                                : data.launch.launch_success === true
                                                    ? <span className={styles.success}>Success</span>
                                                    : <span className={styles.failure}>Failure</span>
                                            : 'Data Not Avaiable'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td className={styles.c1}> Static Fire Date ^_^   @</td>
                            <td className={styles.c2}>
                                {data && data.launch && data.launch.static_fire_date_unix
                                    ? new Date(data.launch.static_fire_date_unix * 1000).toUTCString()
                                    : "Not Avaiable"}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}> Launch Date  ^_^   @</td>
                            <td className={styles.c2}>
                                {data && data.launch && data.launch?.launch_date_unix
                                    ? new Date(data.launch.launch_date_unix * 1000).toUTCString()
                                    : "Not Avaiable"}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}> Name of Rocket  ^_^   @</td>
                            <td className={styles.c2} >
                                {data && data.launch?.rocket && data.launch.rocket.rocket_name}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}> Launch Site  ^_^   @</td>
                            <td className={styles.c2}>
                                {data?.launch?.launch_site?.site_name_long}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}> Links ^_^   @</td>
                            <td className={styles.c2}>
                                {data && data.launch && data.launch.links && data.launch.links.video_link &&
                                    <span>
                                        <a
                                            href={data.launch.links.video_link}
                                            target="_blank"
                                            title="Video Link"
                                        >
                                            <FaYoutube />
                                        </a>
                                    </span>
                                }
                                {data && data.launch?.links && data.launch.links.wikipedia &&
                                    <span data-testid="wiki-link">
                                        <a 
                                            href={data.launch.links.wikipedia}
                                            target="_blank"
                                            title="Wikipedia Link"
                                        >
                                            <FcWikipedia/>
                                        </a>
                                    </span>
                                }
                                {data && data.launch?.links && data.launch.links.article_link &&
                                    <span data-testid="article-link">
                                        <a
                                            href={data.launch.links.article_link}
                                            target="_blank"
                                            title="Article Link"
                                        >
                                            <RiArticleLine />
                                        </a>
                                    </span>
                                }
                            </td>
                        </tr>
                    </table>
                </>}
        </div>
    );
}