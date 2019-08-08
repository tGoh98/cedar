import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listReg: [],
            listCont: [],

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

        this.handleName = this.handleName.bind(this);
        this.handleRegion = this.handleRegion.bind(this);
        this.handleIndustry = this.handleIndustry.bind(this);
        this.handleContact = this.handleContact.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleName(name) {
        console.log(name.target.value);
    }

    handleRegion(region) {

    }

    handleIndustry(industry) {

    }

    handleContact(contact) {

    }

    handleInfo(info) {

    }

    handleTags(tags) {

    }

    onSubmit(e) {
        console.log("Submit button clicked");

    }

    render() {

        return (
            <div className="container">
                <form>
                    <div className="form-row">
                        <div className="form-group col">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" onChange={this.handleName} />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label for="regionSelect">Region</label>
                            <select class="form-control" id="regionSelect">
                                <option>-</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <label for="countrySelect">Country</label>
                            <select class="form-control" id="countrySelect" onSelect={this.handleRegion}>
                                <option>-</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="industry">Organization Type</label>
                        <input type="text" className="form-control" id="industry" onChange={this.handleIndustry} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About</label>
                        <textarea className="form-control" rows="4"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-email">Email</label>
                        <input type="text" className="form-control" id="contact-email" onChange={this.handleContact} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-phone">Phone Number</label>
                        <input type="text" className="form-control" id="contact-phone" onChange={this.handleContact} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-web">Website</label>
                        <input type="text" className="form-control" id="contact-web" onChange={this.handleContact} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-tag">Tags</label>
                        <input type="text" className="form-control" id="add-tag" aria-describedby="addTag" onChange={this.handleTags} />
                        <small id="addTag" class="form-text text-muted">Separate tags with commas</small>
                    </div>
                    <button type="button" class="btn btn-info" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
