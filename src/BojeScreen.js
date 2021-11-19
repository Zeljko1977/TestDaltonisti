import React , { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore/lite';
import {bojed as bojeDeutan} from './testboje/set1'
import {bojep as bojeProtan} from './testboje/set2'
import app from './util/firebase'
import { useDispatch, useSelector } from 'react-redux';
import {saveTestData} from './actions/testActions'

let blokada = true

const db = getFirestore(app);


const BojeScreen = ({history}) => {

    const test = useSelector(state => state.test)
    const {testovi} = test;
    const form = useSelector(state => state.form)
    const {userData} = form;
    const boje = userData.test == 'DEUTAN' ? bojeDeutan : bojeProtan
    
    const [show, setShow] = useState(0)
    const [name, setName] = useState('')
    const [rezultati, setRezultati] = useState([])
    const [reset, setReset] = useState(0)
    const [counterColor, setCounterColor] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [bojanka, setBojanka] = useState(boje.map((item, index)=>{
        return {
            serija: item.serija,
            boja1: item.boja1,
            boja2: item.boja2,
            kategorija: item.kategorija,
            linija: item.linija,
            meta: testovi[index] ? testovi[index].meta ==1 ? 2 : 1 : Math.random()>=0.5 ? 1 : 2
        }
    }))
    const dispatch = useDispatch()

    let t
      useEffect(() => {
          if(reset===1){
              setReset(0)
          }
        const interval1 = setTimeout(() =>{
            setShow(1)
         //   console.log('prvi tajmer')
        } , 1000); 
        const interval2 = setTimeout(() => {
            setShow(2)
            t=Date.now()
           console.log('drugi tajmer')
           blokada = false

            
        }, 2000);
         //   console.log('DODAJE LISTENER')
            window.addEventListener("keydown", handleDown)
        
        
        
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
         //   console.log('UKLANJA LISTENER')
            window.removeEventListener("keydown", handleDown)
          };
     }, [reset, counterColor]) 

     const handleDown = event => {
         
         console.log('Evo ga show', show)
        if((event.key==='a' || event.key==='l') && !blokada){
        setShow(4)
        
        setTimeout(()=>{
            blokada = true
            console.log(t)
            console.log(Date.now())
            console.log((Date.now()-t)/1000)
            
                const color = event.key === 'a'? 1 : 2
                if(color===bojanka[counterColor].meta){
                //   console.log("Bravo majstore, POGODAK")
                //   console.log('counter boje', counterColor)
                   setRezultati([...rezultati, 
                    {serija: bojanka[counterColor].serija,
                     pogodjen: true,
                     boja1: bojanka[counterColor].boja1,
                     boja2: bojanka[counterColor].boja2, 
                     meta: bojanka[counterColor].meta,
                     kategorija: bojanka[counterColor].kategorija,
                     linija: bojanka[counterColor].linija, 
                     reactionTime:  Date.now()-t}
                    ])
               } else {
                //   console.log("brate ti si daltonista")
                //   console.log('counter boje', counterColor)
                   setRezultati([...rezultati,
                     {serija: bojanka[counterColor].serija,
                        pogodjen: false,
                        boja1: bojanka[counterColor].boja1,
                        boja2: bojanka[counterColor].boja2,  
                        meta: bojanka[counterColor].meta,
                        kategorija: bojanka[counterColor].kategorija,
                        linija: bojanka[counterColor].linija, 
                        reactionTime: Date.now()-t }
                    ])
               }
               if(counterColor===bojanka.length-1){
               //    console.log('kraj testa')
               //    console.log(rezultati)
                //   console.log('imate ukupno', rezultati.reduce((acc,cur)=>acc+(cur.pogodjen === true ? 1:0),0), ' pogodaka')
                   setShow(3)
                   setShow(3)
               } else{
               console.log('POVECAVA COUNTER', counterColor)
                  setReset(1)
                  setShow(0)
                  setCounterColor(counterColor + 1)
               }
               
                console.log(event.key)
                
                
                
            
        }, 1000)
            
        }
     }
    
    const saveHandler = async () => {
        const savedPackage = {
            res: rezultati,
            name: name
        }
        dispatch(saveTestData(rezultati))
        //console.log(fireDb)
      //  await setDoc(doc(db, "rezultati", name), savedPackage);
        //const citiesCol = collection(db, 'rezultati');
        //const citySnapshot = await addDoc('savedPackage');
        //const cityList = citySnapshot.docs.map(doc => doc.data());
        //return cityList;
      //  const rezultatiRef = firebase.automaticDataCollectionEnabled.valueOf()
      //  rezultatiRef.push(savedPackage)
      //  console.log('Ovo putuje na backend: ', savedPackage)
      /* const interval1 = setTimeout(() =>{
        history.push({pathname: `/bojethree`})
        console.log('idemo na drugi test')
    } , 5000); */
    history.push({pathname: `/uputstvo2`}) 
        
    }


    

    
    return (
        <div>
           {/* <h1>Fragennummer: {fragen.length}</h1>  */}
           {show === 0 && <div className='krug prviKrug' style={{backgroundColor: bojanka[counterColor].meta === 1 ? `rgba(${bojanka[counterColor].boja1.r},${bojanka[counterColor].boja1.g},${bojanka[counterColor].boja1.b})` : `rgba(${bojanka[counterColor].boja2.r},${bojanka[counterColor].boja2.g},${bojanka[counterColor].boja2.b})`}}></div>}
           {show === 2 && ''}
           {show === 4 && <div>
            <section></section>
            <svg>
                <filter id="noise">
                    <feTurbulence id="turbulence">
                    <animate
                        attributeName="baseFrequency"
                        dur="50s"
                        values="0.9 0.9;0.8 0.8; 0.9 0.9"
                        repeatCount="indefinite"
                    ></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                </filter>
             </svg>
               </div>}
           {show === 2 && 
           <div>
               <div className='d-flex justify-content-center'>
               <div className='krug'  style={{backgroundColor: `rgba(${bojanka[counterColor].boja1.r},${bojanka[counterColor].boja1.g},${bojanka[counterColor].boja1.b})`}}></div>  
               <div className='krug'  style={{backgroundColor: `rgba(${bojanka[counterColor].boja2.r},${bojanka[counterColor].boja2.g},${bojanka[counterColor].boja2.b})`}}></div> 
            </div>
            </div>}
            {show === 3 && 
            <div>
                {/* <h1>Kraj testa, ukupno {rezultati.reduce((acc,cur)=>acc+(cur.pogodjen === true ? 1:0),0)} od {rezultati.length} tačnih odgovora.</h1> */}
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Kliknite dugme i sacekajte 5 sekundi</Form.Label> */}
                        {/* <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" size='lg' /> */}
                        </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                <br/>
                <Row>
                <Col></Col>
                <Col xs={8}>
                    <Button variant="success" onClick={saveHandler}>Dalje</Button>
                </Col> 
                <Col></Col>
                </Row>
                
            </div>
            }
        </div>
    )
}

export default BojeScreen