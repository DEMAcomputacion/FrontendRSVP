import React, { useEffect, useState } from 'react';
import confirmImg from '../Imagenes/confirm.png'
import notConfirmImg from '../Imagenes/not-confirm.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rsvps } from '../../features/rsvp/rsvpSlice.js';


const Rsvp = () => {

    const dispatch = useDispatch()
    const {rsvp} = useSelector (state => state)
        
    useEffect(() => {
        dispatch(rsvps())
    }, [])

    if(rsvp.isLoading){
        return(
            <h3>Cargando...</h3>
        )
    } 
   
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3><b>Lista de Invitados!</b></h3>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h5>Hasta ahora hay confirmados <b>{rsvp.contador}</b> invitados!</h5>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-12 scroll">
                    {(rsvp.listadoRsvp || [1,2]).map((elem) => (
                        <div className="container justify-content-center">
                            <div className="row border p-2">
                                <div className="col-9">
                                    {elem.asistencia ?
                                    <p><b>{elem.nombre}</b><small class="text-muted"><i> (mas <b>{elem.nroInvitados}</b> invitados)</i></small></p> :
                                    <p><b>{elem.nombre}</b><small class="text-muted"><i> (no asistirá)</i></small></p> }
                                    <p>"{elem.comentario}"</p>
                                </div>
                                <div className="col-3">
                                    {elem.asistencia ? <img src={confirmImg} className="image-fluid" alt="Asistirá" /> : <img src={notConfirmImg} className="image-fluid" alt="No Asistirá" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rsvp;