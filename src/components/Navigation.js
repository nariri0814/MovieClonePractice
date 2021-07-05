import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigation() {
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link 
                to={{
                    //to 에 string 또는 object 넣을 수 있다
                    pathname: "/about",
                    state: {
                        fromNavigation: true
                    }
                }}
            >
                About
            </Link>
        </div>
    );
}
//router밖에서 Link쓰면 작동 X
export default Navigation;