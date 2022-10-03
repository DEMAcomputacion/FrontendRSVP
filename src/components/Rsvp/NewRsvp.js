import React, { useState }from 'react';
import * as Peticiones from './RsvpPeticiones.ts'
import { useDispatch } from 'react-redux';
import { rsvps } from '../../features/rsvp/rsvpSlice.js';

const NewRsvp = () => {
    const dispatch = useDispatch()
    const [rsvpDatos, setRsvpDatos] = useState({nombre: '', asistencia: false, nroInvitados: 0, comentario: ''})


    const handleCheckbox = (e) => {
        setRsvpDatos({...rsvpDatos, asistencia: e.target.checked})
    }

    const handleInputs = (e) => {
        setRsvpDatos({...rsvpDatos, [e.target.id]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await Peticiones.createRsvp(rsvpDatos);
        setRsvpDatos({nombre: '', asistencia: false, nroInvitados: 0, comentario: ''})
        setTimeout(()=> dispatch(rsvps(), 1000))
    }

    return(
        <div className="container pt-4">
            <div className="row">    
                <div className="col-12 d-flex justify-content-center">
                    <h4><b>Confirma tu asistencia aquí</b></h4>
                </div> 
            </div> 
            <div className="row">      
                <div className="col-12 d-flex justify-content-center">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group m-4">
                            <label htmlFor="nombre" >Nombre:</label><br />
                            <input type="text" id="nombre" value={rsvpDatos.nombre} onChange={handleInputs} />
                        </div>
                        <div className="form-group m-4">
                            <label htmlFor="asistencia" value={rsvpDatos.asistencia}>¿Asistirás?</label>
                                <div className="form-check">
                                    <input
                                     className="form-check-input"
                                      type="checkbox"
                                       onChange={handleCheckbox}
                                       
                                        id="asistencia"
                                          />{rsvpDatos.asistencia ? "Si, asistiré 😃" : "No podre asistir 😔"}
                                </div>
                            </div>
                        <div className="form-group m-4">
                            <label>Cantidad de invitados que asistirán contigo:</label>
                            <input type="number" id="nroInvitados" min="0" max="20" size="3" disabled={!rsvpDatos.asistencia} onChange={handleInputs} value={rsvpDatos.nroInvitados} />
                        </div>
                        <div className="form-group m-4">
                            <label htmlFor="comentario">Deja un comentario:</label>
                            <textarea className="form-control" onChange={handleInputs} value={rsvpDatos.comentario} id="comentario" /> 
                        </div>
                        <div className="form-group m-4">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default NewRsvp;