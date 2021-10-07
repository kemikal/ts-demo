import React from 'react';

interface Users {
    id: number,
    uName: string
}

interface Props {
    users: Users[],
}

function UsersFunction(props: Props) {

    const users = props.users;

    return (
        <div>
            {users.map((user: Users) => {
                return <p key={user.id}>{user.uName}</p>
            })}
        </div>
    );
}

export default UsersFunction;