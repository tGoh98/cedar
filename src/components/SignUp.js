import React, { Component } from 'react';
import '../stylesheets/SignUp.css'
import avatarPlace from '../images/avatar.png';
import Footer from './Footer';

// const app = require('firebase/app');
// require('firebase/auth');
// require('firebase/firestore');

// const firebaseConfig = {
//     apiKey: "AIzaSyCcOvnTMYAJFBdZuzQawx8Z7tCgCXfylCo",
//     authDomain: "crollo-xxoykw.firebaseapp.com",
//     databaseURL: "https://crollo-xxoykw.firebaseio.com/",
//     projectId: "crollo-xxoykw",
//     storageBucket: "",
//     appId: "1:716632137718:web:75ba185462453105"
// };

// app.initializeApp(firebaseConfig);
// const db = app.firestore();

function loadCountries(countryData) {
    var countries = new Set();
    countryData.forEach((s) => {
        countries.add(s.name);
    });
    return Array.from(countries).sort();
}

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            regionList: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
            countryData: {},
            name: "",
            orgName: "",
            region: "",
            industry: "",
            contact: {},
            info: "",
            tags: [],
            submitted: false
        }

        this.handleName = this.handleName.bind(this);
        this.handleRegion = this.handleRegion.bind(this);
        this.handleOrg = this.handleOrg.bind(this);
        this.handleIndustry = this.handleIndustry.bind(this);
        this.handleContact = this.handleContact.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleName(n) {
        this.setState({
            name: n.target.value
        });
    }

    handleRegion(r) {

        if (this.state.regionList.includes(r.target.value)) {
            fetch("https://restcountries.eu/rest/v2/region/" + r.target.value.toLowerCase())
                .then(response => response.json())
                .then(data => this.setState({ countryData: data }))
                .catch(console.log);
        }
        else if (r.target.value !== "-") {
            this.setState({
                region: r.target.value
            });
        }

    }

    handleOrg(o) {
        this.setState({
            orgName: o.target.value
        });
    }

    handleIndustry(i) {
        this.setState({
            industry: i.target.value
        });
    }

    handleContact(c) {
        let id = c.target.id;
        if (id === "contact-email") {
            let temp = Object.assign({}, this.state.contact, { email: c.target.value });
            this.setState({
                contact: temp
            })
        }
        else if (id === "contact-phone") {
            let temp = Object.assign({}, this.state.contact, { phone: c.target.value });
            this.setState({
                contact: temp
            })
        }
        else if (id === "contact-web") {
            let temp = Object.assign({}, this.state.contact, { web: c.target.value });
            this.setState({
                contact: temp
            })
        }
    }

    handleInfo(i) {
        this.setState({
            info: i.target.value
        });
    }

    handleTags(t) {
        let temp = t.target.value;
        var arr = [];
        arr = temp.split(",");

        this.setState({
            tags: arr
        });
    }

    onSubmit(e) {

        //var dataSubmit = true;

        console.log("Submit button clicked");
        console.log("Name: " + this.state.name);
        console.log("OrgName: " + this.state.orgName)
        console.log("Region: " + this.state.region);
        console.log("Industry: " + this.state.industry);
        console.log("Contact: ");
        console.log(this.state.contact);
        console.log("Info: " + this.state.info);
        console.log("Tags: ");
        console.log(this.state.tags);

        this.setState({
            submitted: true
        });

        // if (!dataSubmit) {
        //     console.log("Writing to Database:");
        //     const borrow = db.collection('borrowers');
        //     let setJane = borrow.doc(this.state.contact.email).set({
        //         name: this.state.name,
        //         region: this.state.region,
        //         orgName: this.state.orgName,
        //         industry: this.state.industry,
        //         info: this.state.info,
        //         contact: {
        //             email: this.state.contact.email,
        //             phone: "999-000-1234"
        //         },
        //         tags: ["tech", "education", "app"]
        //     });
        // }
    }

    render() {

        let regionDisp = this.state.regionList.map((r) => (
            <option>{r}</option>
        ));

        let countryDisp;
        if (Object.keys(this.state.countryData).length > 0) {
            var countries = loadCountries(this.state.countryData);
            countryDisp = countries.map((c) => (
                <option>{c}</option>
            ));
        }

        return (
            <div>
                <div className="container">
                    <div className="row over-form-row">
                        <form className="form">
                            <div className="form-group d-flex justify-content-center avatar-row">
                                <img className="avatar-img" src={avatarPlace} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">Name</label>
                                <input type="text" className="form-control" id="firstName" aria-describedby="nameHelp" onChange={this.handleName} />
                                <small id="nameHelp" class="form-text text-muted">First and Last</small>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="regionSelect">Region</label>
                                    <select className="form-control" id="regionSelect" onChange={this.handleRegion}>
                                        <option>-</option>
                                        {regionDisp}
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="countrySelect">Country</label>
                                    <select className="form-control" id="countrySelect" onChange={this.handleRegion}>
                                        <option>-</option>
                                        {countryDisp}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="orgName">Organization Name</label>
                                <input type="text" className="form-control" id="orgName" onChange={this.handleOrg} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="industry">Organization Type</label>
                                <input type="text" className="form-control" id="industry" onChange={this.handleIndustry} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="about">About</label>
                                <textarea className="form-control" rows="4" onChange={this.handleInfo}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">Email</label>
                                <input type="email" className="form-control" id="contact-email" onChange={this.handleContact} />
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
                                <small id="addTag" className="form-text text-muted">Separate tags with commas</small>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SignUp;
