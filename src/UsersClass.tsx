import React, { Component } from 'react';

interface Users {
    id: number,
    uName: string
}

interface Props {
    users: Users[]
}

interface State {
    users: Users[],
}

class UsersClass extends Component <Props, State> {

    state = {
        users: this.props.users,
    }

    numberArray: number[] = [1,4,6,8,3,5];

    stringArray: string[] = ["hej"];

    myObjects: Object[] = [{id: 1, name: "Janne"}];

    la:number = this.numberArray.length;

    ls:number = this.stringArray.length;

    render() {

        for ( let i in this.numberArray) {
            console.log(this.numberArray[i]);         
        }

        for ( let i in this.stringArray) {
            console.log(this.stringArray[i]);         
        }

        for ( let i in this.myObjects) {
            console.log(this.myObjects[i]);         
        }

        const result = this.state.users.find(obj => obj.id === 1);
        console.log(result);
        

        console.log("lenghts", this.la, this.ls);
        
        console.log("users", this.state.users);
        
        // const users: Object[] = []

        return (
            <div>
                <h1>All the users</h1>
                <ul>
                    {Object.values(this.state.users).map((user, i) => {
                        return <li key={i}>{console.log("user", user.uName)}
                        {user.uName}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default UsersClass;