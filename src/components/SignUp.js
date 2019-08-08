import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            region: "",
            industry: "",
            contact: {
                email: "",
                phone: "",
                website: ""
            },
            info: "",
            tags: []
        }


    }
    render() {
        return (
            <div>
                signup
            </div>
        );
    }
}

export default SignUp;
