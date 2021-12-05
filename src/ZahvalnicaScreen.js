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
            </p>
            </div>}
            { userData.jezik != 1 && <div>
            <p>
            Thank you for taking the time to take a part in this study!
            </p>
            </div>}
            {/* <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
            {userData.jezik ? 'IDITE NA REZULTATE' : 'SEE THE RESULTS'}
                    </Button> */}
        </div>
    )
}

export default ZahvalnicaScreen
