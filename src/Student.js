import React, { useState, useEffect } from 'react';

function Student(props) {
    const { users } = props;
    const [perPageUser] = useState(6);
    const currentPage = 0;
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const updateDisplayedUsers = () => {
        const start = currentPage * perPageUser;
        const end = start + perPageUser;
        const displayed = users.slice(start, end);
        setDisplayedUsers(displayed);
    };

    useEffect(() => {
        updateDisplayedUsers();
    }, [users, currentPage, perPageUser]);
    
    return (
        <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedUsers.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <img src={item.avatar} alt="Avatar" width="50" height="50" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
