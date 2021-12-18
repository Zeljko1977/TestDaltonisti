import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore/lite';
import { useDispatch, useSelector } from 'react-redux';
import app from './util/firebase'

const db = getFirestore(app);

const ZahvalnicaScreen = ({history}) => {

      
    const test = useSelector(state => state.test)
    const {testovi} = test;
    const form = useSelector(state => state.form)
    const {userData} = form;

    useEffect(()=>{
        //  getResults(db)
        if(testovi.length !==0){
            console.log('snima')
          saveResults(db)
        }
        
          
      },[testovi])

      async function saveResults(db) {
        const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7)
        console.log(randomString)
        const savedPackage = {
            datum: new Date().toLocaleDateString(),
            res: testovi,
            podaci: userData,
            name: randomString
             
        }
        console.log(randomString)
        console.log(savedPackage)
        await setDoc(doc(db, "rezultati", randomString), savedPackage);
    }

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
