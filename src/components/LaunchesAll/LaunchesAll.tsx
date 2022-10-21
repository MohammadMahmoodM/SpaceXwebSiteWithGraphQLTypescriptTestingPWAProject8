import React, { useState } from 'react';
import { useAllLaunchesIdsQuery, Order, LaunchRange } from '../../api/index';
import { Message } from '../../react-app-env.d';
import { LaunchCard } from '../LaunchCards/LaunchCards';
import styles from './LaunchesAll.module.css';

const numberLaunchesPerPage: number = 10;
type Variables = {
    range?: LaunchRange;
    order: Order;
}

export const LaunchesAll = () => {
    const [variables, setVariables] = useState<Variables>({ order: Order.Asc });
    const [LaunchesPerPage, setLaunchesPerPage] = useState<number>(numberLaunchesPerPage);
    const [showMoreBtn, setShowMoreBtn] = useState<boolean>(true);
    const { data, loading, error, networkStatus } = useAllLaunchesIdsQuery({ variables });

    const ids = (data && data.launches)
        ? data.launches.map(launch => launch?.flight_number)
        : [];
    return (
        <div  className={styles.container}>
            Launch All
            <h3 className={styles.heading}>
                {variables.range
                    ? 'All Launches'
                    : variables.range === LaunchRange.Past
                        ? 'Previous Launches'
                        : 'Upcoming launches'
                }
            </h3>
            <div className={styles.filters}>
                Filter
                <button
                    disabled={loading}
                    onClick={() => {
                        if (variables.range) {
                            setLaunchesPerPage(numberLaunchesPerPage);
                            setVariables({
                                order: Order.Asc
                            });
                        }
                    }}
                >
                    All
                </button>
                <button
                    disabled={loading}
                    onClick={() => {
                        if (!variables.range || (variables.range && variables.range !== LaunchRange.Past)) {
                            setLaunchesPerPage(numberLaunchesPerPage);
                            setVariables(
                                {
                                    order: Order.Desc,
                                    range: LaunchRange.Past
                                }
                            );
                        }
                    }}
                >
                    Past
                </button>
                <button disabled={loading}
                    onClick={() => {
                        if (variables.range || (variables.range && variables.range !== LaunchRange.Upcoming)) {
                            setLaunchesPerPage(numberLaunchesPerPage);
                            setVariables(
                                {
                                    order: Order.Asc,
                                    range: LaunchRange.Upcoming
                                }
                            )
                        }
                    }}
                >
                    UpComming
                </button>
            </div>
            <div className={styles.filters}>
                Order
                <button
                    disabled={loading}
                    onClick={() => {
                        setVariables(prev => (
                            {
                                ...prev,
                                order: Order.Asc
                            }
                        ));
                        setLaunchesPerPage(numberLaunchesPerPage)
                    }}
                >
                    Ascending
                </button>

                <button
                    disabled={loading}
                    onClick={() => {
                        setVariables(prev => (
                            {
                                ...prev,
                                order: Order.Desc
                            }
                        ))
                    }}>
                    Desending
                </button>
            </div>
            <div className={styles.launches}>
                {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                    ids
                        .slice(0, Math.min(LaunchesPerPage, ids.length))
                        .map(id => id && <LaunchCard flightNumber={id} key={id} />)
                }
            </div>
            <button
                className={styles.more}
                disabled={LaunchesPerPage >= ids.length}
                onClick={() => {
                    setLaunchesPerPage(prev => prev + numberLaunchesPerPage)
                    setShowMoreBtn(false);
                    setTimeout(() => setShowMoreBtn(true), 100)
                }}
            >
                {(LaunchesPerPage >= ids.length) ? 'No more results' : 'More Results'}
            </button>
        </div>
    );
}