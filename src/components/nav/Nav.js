import React from "react";
import { Link} from 'react-router-dom';
import Home from "../home/Home";
import Results from "../results/Results";

const Nav = () => {

    return (
        <>
            <nav>
                <div role='tablist'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/results"}>Results</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;