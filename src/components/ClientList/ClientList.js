import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckIcon from '@material-ui/icons/CheckRounded';
import emptyImage from './empty.png'
import './ClientList.scss'

const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

function ClientList() {
    const userList = useSelector((state) => state.users);

    return (
        <div className="ClientList">
            <h1 className="ClientList-Heading">User list</h1>

            {userList && userList.length ? (
                <div className="ClientList-TableWrapper">
                    <table className="ClientList-Table">
                        <thead>
                            <tr className="ClientList-TableRow ClientList-TableRow_HeaderRow">
                                <th className="ClientList-TableHeader">User name</th>
                                <th className="ClientList-TableHeader">Gender</th>
                                <th className="ClientList-TableHeader">Date</th>
                                <th className="ClientList-TableHeader">Loyalty program</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map(user =>
                                <tr key={user.id} className="ClientList-TableRow">
                                    <td className="ClientList-TableData">{user.userName}</td>
                                    <td className="ClientList-TableData">{user.userGender}</td>
                                    <td className="ClientList-TableData">{user.timeStamp.toLocaleString("en-US", dateOptions)}</td>
                                    <td className="ClientList-TableData">
                                        {user.withLoyaltyProgram
                                            ? <CheckIcon className="ClientList-CheckIcon"/>
                                            : null
                                        }
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="ClientList-Empty">
                    <img src={emptyImage} alt="" className="ClientList-EmptyImage"/>
                    <p className="ClientList-EmptyMessage">Oops, the user list is empty!</p>
                    <NavLink to="/add-user" className="ClientList-EmptyLink">Click here to go to the registration page</NavLink>
                </div>
            )}
        </div>
    );
}

export default ClientList;