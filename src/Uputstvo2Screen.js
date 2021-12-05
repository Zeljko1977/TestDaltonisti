import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'

const Uputstvo2Screen = ({history}) => {

    const form = useSelector(state => state.form)
    const {userData} = form;

    const submitHandler = () => {
       
        const interval1 = setTimeout(() =>{
            history.push({pathname: `/bojethree`})
        } , 5000); 
        
    }
    return (
        <div>
            {userData.jezik == 1 && <p>
            <b>Test Tip 2 - Uputstva</b>
            <br/>
            <br/>
            Na ekranu će biti prikazana tri kruga – jedan u gornjem delu ekrana i dva ispod njega (levo i desno). Vaš zadatak je da odgovorite koji od dva donja kruga je iste boje kao gornji. Ukoliko mislite da je levi, pritisnite taster A, a ukoliko mislite da je desni pritisnite taster L. Trudite se da odgovarate što brže i što tačnije. Ovaj eksperimentalni blok traje oko 5 minuta. Kliknite mišem na „NASTAVAK“ da započnete eksperimentalni blok.

            </p>}
            {userData.jezik != 1 && <p>
            <b>Test Type 2 - Instructions</b>
            <br/>
            <br/>
            Three circles will be presented on the screen – one circle at the top and two circles below it (left and right). Your task is to answer which of the two bottom circles (left or right) is the same color as the circle above. If you think it is the bottom left circle press press A and if you think it is the botom right circle press L. Please try to respond as fast and as accurate you can. This experimental block should last about 5 minutes. Click on the button NEXT to start.
            </p>}
            <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
                {userData.jezik == 1 ? 'NASTAVAK' : 'NEXT'}
                    </Button>
        </div>
    )
}

export default Uputstvo2Screen
