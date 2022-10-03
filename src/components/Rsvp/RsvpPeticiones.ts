import axios from 'axios'
import { RsvpInterface } from './RsvpInterface';

const API = 'https://backend-rsvp-david-morales.herokuapp.com'

export const getRsvp = async () => {
    return await axios.get(API + '/rsvp');
}

export const createRsvp = async (rsvpDatos: RsvpInterface) => {
    return await axios.post(API + '/rsvp', rsvpDatos)
}

