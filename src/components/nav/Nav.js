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
                    to={"/results"} className="route">Results
                </Link>
            </nav>
        </>
    )
}

export default Nav;