import {Message} from '../../react-app-env.d' // By default is not write .d you must use .d
import { useRecentLaunchesIdsQuery } from "../../api/index";
// component
import { LaunchCard } from '../LaunchCards/LaunchCards';
export const RecentLaunches = () => {
    const previousFightsToShowonHome = 5;
    const {data, loading, error, networkStatus} = useRecentLaunchesIdsQuery({variables : {count : previousFightsToShowonHome}});
   
    console.log(data); // this will not appear in console.log if we not take it to home page because loacalhost:3000 is at homepage
    
    const ids = (data && data.launches) ? data.launches.map(launch => launch?.flight_number ) : []; //if data and data.launches are there then map the fhlight number from launches and all otherarray from data
    return (
        <div>
            <h3>Previous Recent Launches</h3>
            <div>
                {loading? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR : ids.map(id=>id &&  <LaunchCard key={id} flightNumber={id}/> )}
            </div>
        </div>
    );
}