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
            Blok 1. Uputstva
            Na ekranu će biti prikazana tri kruga – jedan u gornjem delu ekrana i dva ispod njega (levo i desno). Vaš zadatak je da odgovorite koji od dva donja kruga je iste boje kao gornji. Ukoliko mislite da je levi, pritisnite taster A, a ukoliko mislite da je desni pritisnite taster L. Trudite se da odgovarate što brže i što tačnije. Ovaj eksperimentalni blok traje oko 5 minuta. Kliknite mišem na „NASTAVAK“ da započnete eksperimentalni blok.

            </p>
            <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
                    NASTAVAK
                    </Button>
        </div>
    )
}

export default Uputstvo1Screen
