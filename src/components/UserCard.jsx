import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }

    }

    componentDidMount() {
        this._fetchUser();
    }

    _fetchUser = async () => {
        const response = await fetch(
            "https://randomuser.me/api/?results=5"
        ).then((response) => response.json());
        this.setState({
            user: response.results
        });
        console.log('API response: ', response)
        console.log('testing: ', response.results[0].gender, response.results[0].name.first, response.results[0].name.last);
    };

    render() {
        const {user} = this.state;
        return (
            <>
            <h1>Randomly Generated Users</h1>
                {user.map((users) => (
                    <div>
                    <h3>
                        {users.name.title}. {users.name.first} {users.name.last}
                    </h3>
                    <p>Located in: {users.location.city}, {users.location.country}</p>
                    <p>Age: {users.dob.age}</p>
                        <img src={users.picture.large} alt="random user"></img>
                    </div>
                ))}

                </>
            )
    }

}

export default UserCard;