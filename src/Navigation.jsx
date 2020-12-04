import React, { useState } from 'react';
// import {Nav, Col, Row, Icon} from 'rsuite';
import {Link} from 'react-router-dom';


function Navigation() {


// const [active, setActive] = useState(0);
// const [state, setState] = useState(0);



    return (
       <ul>
           <Link exact to='/'>
                <li>
                    Home
                </li>
            </Link>
            <Link exact to='/Projects'>
                <li>
                    Projects
                </li>
            </Link>
            <Link exact to='/Contact'>
                <li>
                    Contact
                </li>
            </Link>
            <Link exact to='About'>
                <li>
                    About
                </li>
            </Link>
        </ul >  
    );

}

export default Navigation;