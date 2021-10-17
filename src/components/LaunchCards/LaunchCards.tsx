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
//import styles from './LaunchCard.module.css';

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
        <div>
            {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                <>
                    <div>
                        {data?.launch?.links?.mission_patch_small ?
                            <Link to={`/launches-all/${data.launch.flight_number}`}>
                                <img
                                    src={(data.launch.links.mission_patch_small !== null)
                                        ? data.launch.links.mission_patch_small : undefined}
                                />
                            </Link>
                            : ""   // either show content in image or nothing
                        }
                    </div>
                    <div>
                        <div>
                            <p>
                                {`Flight Number ${data?.launch?.flight_number}`}
                            </p>
                            <p>Status: {
                                data?.launch?.launch_success !== undefined
                                    ? data.launch.launch_success === null
                                        ? 'Upcomming'
                                        : data.launch.launch_success === true
                                            ? <span>Success</span>
                                            : <span>Failed</span>
                                    : "Nothing Avaible to Show"
                            }</p>
                        </div>

                        <p>{`Mission Name: ${data?.launch?.mission_name}`}</p>
                        <p>{`Launch Site: ${data?.launch?.launch_site?.site_name}`}</p>
                        <p>{`Launch Date ${data?.launch?.launch_date_unix}`}</p>
                    </div>
                </>}
        </div>
    );
}