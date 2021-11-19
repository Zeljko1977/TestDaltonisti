import React from 'react'
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'

const Uputstvo1Screen = ({history}) => {

    const submitHandler = () => {
       
        const interval1 = setTimeout(() =>{
            history.push({pathname: `/boje`})
        } , 5000); 
        
    }
    return (
        <div>
            <p>
            Blok 2. Uputstva
Na ekranu će biti prikazan krug čiju boju treba da zapamtite. Krug će nestati sa ekrana i nakon nekoliko sekundi pojaviće se dva kruga, a vaš zadatak je da odgovorite koji od njih je iste boje kao onaj kog ste prethodno videli. Ukoliko mislite da je to krug koji se nalazi sa leve strane ekrana, pritisnite taster A, a ukoliko mislite da je to krug koji se nalazi sa desne strane ekrana pritisnite taster L. Trudite se da odgovarate što brže i što tačnije. Ovaj eksperimentalni blok traje oko 10 minuta. Kliknite mišem na „NASTAVAK“ da započnete eksperimentalni blok.

            </p>
            <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
                    NASTAVAK
                    </Button>
        </div>
    )
}

export default Uputstvo1Screen
