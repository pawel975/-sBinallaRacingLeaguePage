import React from "react";
import { Link} from 'react-router-dom';
import '../nav/nav.scss'

const Nav = () => {

    return (
        <>
            <nav>
                <Link 
                    to={"/"}
                    className="route">Home
                </Link>
                <Link 
                    to={"/standings"} className="route">Standings
                </Link>
                <Link 
                    to={"/results"} className="route">Results
                </Link>
                <Link 
                    to={"/calendar"} className="route">Calendar
                </Link>
                <Link 
                    to={"/driver"} className="route">Driver
                </Link>
                <Link 
                    to={"/map"} className="route">Map
                </Link>
                <Link 
                    to={"/records"} className="route">Records
                </Link>
            </nav>
        </>
    )
}

export default Nav;