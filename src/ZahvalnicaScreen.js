import React from 'react'
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const ZahvalnicaScreen = ({history}) => {

     const form = useSelector(state => state.form)
    const {userData} = form; 

    const submitHandler = () => {
       
        
        history.push({pathname: `/results`}) 
        
    }
    return (
        <div>
            { userData.jezik == 1 && <div>
            <p>
            Hvala Vam što ste izdvojili vreme za učešće u ovom istraživanju!
Vaši podaci su nam biti dragoceni u razumevanju procesa viđenja i pamćenja boja kao i pri razvijanju tehničkih pomagala za ljude sa teškoćama u razlikovanju boja. Bili bismo Vam veoma zahvalni ukoliko biste želeli da učestvujete i u nekom od naših narednih istraživanja na ovu temu. Ukoliko je to slučaj, molimo Vas da unesete svoju imejl adresu preko koje možemo da Vas kontaktiramo. Čak i ako sada ostavite adresu uvek kasnije možete da se predomislite i da odbijete dalje učešće.
            </p>
            <p>ovde cemo traziti mail</p>
            <p>
            Sada ćemo vam poslati ličnu šifru za učešće u narednom istraživanju, te Vas molimo da je sačuvate. Ukoliko imate bilo kakvih pitanja, komentara ili želite da podelite utiske o učešću u istraživanju, budite slobodni da se obratite doc. dr Ivani Jakovljev na imejl adresu:
ivana.jakovljev@ff.uns.ac.rs
            </p>
            </div>}
            { userData.jezik != 1 && <div>
            <p>
            Thank you for taking the time to take a part in this study!
            Your contribution will help us to understand how people see and memorise colours. It will also contribute to the development of technical aids for people with diffculties in color discrimination. We would be very grateful if you would consider participating in similar future studies. If you would be willing to do so, please leave us your e-mail adress so that we can contact you. Even if you leave your contact now and you are not available later you can always decline further participation.
            </p>
            <p>mail ovde ide</p>
            <p>
            Now we will send you a personal code for your future participation that you should save and use later.
            If you have any questions or comments, or you would just like to share your experience about completing this study, please contact Asst. Prof. Ivana Jakovljev ivana.jakovljev@ff.uns.ac.rs.
            </p>
            </div>}
            <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
            {userData.jezik ? 'IDITE NA REZULTATE' : 'SEE THE RESULTS'}
                    </Button>
        </div>
    )
}

export default ZahvalnicaScreen
