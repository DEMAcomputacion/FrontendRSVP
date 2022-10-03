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
    
    const contadorInvitados = () => {
        if(rsvp.listadoRsvp !== {}){
            const list = rsvp.listadoRsvp
            const listadoFiltrado = list.filter(elem => elem.asistencia === true)
            return listadoFiltrado.length + (listadoFiltrado.reduce((sum, valor) => sum + valor.nroInvitados, 0));
        }}

    if(rsvp.isLoading){
        return(
            <h3>Cargando...</h3>
        )
    } 
   
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3>Lista de Invitados!</h3>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h5>Hasta ahora hay confirmados <b>{contadorInvitados()}</b> invitados!</h5>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-12 scroll">
                    {rsvp.listadoRsvp.map((elem) => (
                        <div className="container justify-content-center">
                            <div className="row border p-3">
                                <div className="col-10">
                                    <h4>{elem.nombre}</h4><p><i>(mas {elem.nroInvitados} invitados)</i></p>
                                    <p>"{elem.comentario}"</p>
                                </div>
                                <div className="col-2">
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