import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'

const Uputstvo1Screen = ({history}) => {

    const form = useSelector(state => state.form)
    const {userData} = form;

    const submitHandler = () => {
       
        const interval1 = setTimeout(() =>{
            history.push({pathname: `/boje`})
        } , 5000); 
        
    }
    return (
        <>
        {userData.jezik == 1 && 
            <p>
             <b>Memorijski test - Uputstva</b>
            <br/>
            <br/>
Na ekranu će biti prikazan krug čiju boju treba da zapamtite. Krug će nestati sa ekrana i nakon nekoliko sekundi pojaviće se dva kruga, a vaš zadatak je da odgovorite koji od njih je iste boje kao onaj kog ste prethodno videli. Ukoliko mislite da je to krug koji se nalazi sa leve strane ekrana, pritisnite taster A, a ukoliko mislite da je to krug koji se nalazi sa desne strane ekrana pritisnite taster L. Trudite se da odgovarate što brže i što tačnije. Ovaj eksperimentalni blok traje oko 10 minuta. Kliknite mišem na „NASTAVAK“ da započnete eksperimentalni blok.

            </p>
            }
            {userData.jezik != 1 && 
            <p>
             <b>Memory test - Instructions</b>
            <br/>
            <br/>
            You will be shown a circle and your task will be to memorize its color. This circle will dissapear and after a few seconds you will be shown two new circles. Your task is to answer which one of them (one on the left or on the right) is the same color as the first circle. If you think it is the left circle press A and if you think it is the right circle press L. Please try to respond as fast and as accurate you can. This experimental block should last about 10 minutes. Click on the button NEXT to start.
            </p>
            }
            <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
                    {userData.jezik == 1 ? 'NASTAVAK' : 'NEXT'}
                    </Button>
        
        </>
    )
}

export default Uputstvo1Screen
