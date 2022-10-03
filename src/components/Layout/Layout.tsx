import React, {useState}from 'react';
import NewRsvp from '../Rsvp/NewRsvp';
import Rsvp from '../Rsvp/Rsvp';
import * as Peticiones from '../Rsvp/RsvpPeticiones';
import { RsvpInterface } from '../Rsvp/RsvpInterface';


const Layout = () => {

    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-4 border"><NewRsvp /></div>
                <div className="col-1"></div>
                <div className="col-7"><Rsvp /></div>
            </div>
        </div>
    )
}
export default Layout;