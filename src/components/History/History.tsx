import React from 'react';
import { useHistoryQuery } from '../../api';
import { Message } from '../../react-app-env.d';
import { RiArticleLine } from 'react-icons/ri';
import { FcWikipedia } from 'react-icons/fc';
import styles from './History.module.css';

export const History = () => {
    const { data, loading, error, networkStatus } = useHistoryQuery();
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>History</h3>
            <div className={styles.histories} style={{paddingBottom: (loading || !!error) ? '20px' : 0}}>
                {loading ? Message.LOADING : networkStatus === 8
                    ? Message.ERROR : data && data.history && data.history.map(
                        (historyItems, index) => (
                            <div  className={styles.historyItem} key={index + 1}>
                                <h4 className={styles.title}>
                                    {`History ${historyItems && historyItems.id}: ${historyItems?.title}`}
                                </h4>
                                <p>
                                    {`Date: ${historyItems?.event_date_unix &&
                                        new Date(historyItems.event_date_unix * 1000).toUTCString()
                                        }`
                                    }
                                </p>
                                {historyItems?.flight_number &&
                                    <p className={styles.links}>
                                        {`Flight Number: ${historyItems.flight_number}`}
                                    </p>
                                }
                                <p>{`Details: ${historyItems?.details}`}</p>
                                {(historyItems?.links?.article || historyItems?.links?.wikipedia) &&
                                    <p>
                                        {historyItems.links.article &&
                                            <span>
                                                <a
                                                    href={historyItems.links.article}
                                                    target="_blank"
                                                    title="Article Link"
                                                    className={styles.articleLink}
                                                >
                                                    <RiArticleLine />
                                                </a>
                                            </span>
                                        }
                                        {
                                            historyItems.links.wikipedia &&
                                            <span>
                                                <a
                                                    href={historyItems?.links?.wikipedia}
                                                    target="_blank"
                                                    title="Wikipedia Link"
                                                    className={styles.wikiLink}
                                                >
                                                    <FcWikipedia />
                                                </a>
                                            </span>
                                        }
                                    </p>
                                }
                            </div>
                        )
                    )}
            </div>
        </div>
    );
}