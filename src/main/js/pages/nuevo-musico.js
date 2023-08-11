const React = require('react');
const {useState} = require ('react');
const { link } = require('react-router-dom');
const client = require('../client');

const NuevoMusicoPage = () => {
        const[nombre, setNombre] = useState('')
        const handleSubmit =(evento) =>{
            evento.preventDefault();
            client({
                 method: 'POST',
                 path : '/api/musicos',
                 entity: {nombre: nombre},
                 headers:{'content-type': 'application/json'}    
            }).done(()=>{
                    window.location = '/'; 

            })

        }
    return (
        <>
         <h1>Nuevo Musico</h1>
         <Form onSubmit={handleSubmit}>
          <label>Nombre</label> <br/>
          <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />    
          <input type="submit" value="Nuevo Musico"/>

         </Form> 
         <link to="/">Volver</link>
         </>
    )
}



module.exports = NuevoMusicoPage;