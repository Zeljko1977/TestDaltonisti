import React from 'react'
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'

const ZahvalnicaScreen = ({history}) => {

    const submitHandler = () => {
       
        
        history.push({pathname: `/results`}) 
        
    }
    return (
        <div>
            <p>
            Hvala Vam što ste izdvojili vreme za učešće u ovom istraživanju!
Vaši podaci su nam biti dragoceni u razumevanju procesa viđenja i pamćenja boja kao i pri razvijanju tehničkih pomagala za ljude sa teškoćama u razlikovanju boja. Bili bismo Vam veoma zahvalni ukoliko biste želeli da učestvujete i u nekom od naših narednih istraživanja na ovu temu. Ukoliko je to slučaj, molimo Vas da unesete svoju imejl adresu preko koje možemo da Vas kontaktiramo. Čak i ako sada ostavite adresu uvek kasnije možete da se predomislite i da odbijete dalje učešće.
            </p>
            <p>ovde cemo traziti mail</p>
            <p>
            Sada ćemo vam poslati ličnu šifru za učešće u narednom istraživanju, te Vas molimo da je sačuvate. Ukoliko imate bilo kakvih pitanja, komentara ili želite da podelite utiske o učešću u istraživanju, budite slobodni da se obratite doc. dr Ivani Jakovljev na imejl adresu:
ivana.jakovljev@ff.uns.ac.rs
            </p>
            <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
                    IDITE NA REZULTATE
                    </Button>
        </div>
    )
}

export default ZahvalnicaScreen
