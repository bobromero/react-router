import React from 'react';

const UsersPage = () =>{
    return(
        <div>
            <ul>
                {['Alex', 'John', 'Jaz', 'Fedrick', 'Missali'].map((user, idx)=> {
                    return <li hey={idx}>{user}</li>
                })}
            </ul>
        </div>
    );
}

export default UsersPage;