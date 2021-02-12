import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () =>{
    return(
        <div>
            <h3>Helloo</h3>
            <small>Main</small>
            <Link to="/users"><button>test</button></Link>
        </div>
    );
}

export default MainPage;