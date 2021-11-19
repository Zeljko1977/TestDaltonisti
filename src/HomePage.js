import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col, Nav, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {saveFormData} from './actions/testActions'
import {RESET_TEST_DATA, RESET_FORM_DATA} from './constants/testConstants'

const HomePage = ({history}) => {
    const [jezik, setJezik] = useState(1)
    const [agree, setAgree] = useState(false)
    const [start, setStart] = useState(false)
    const [startQuestionnaire, setStartQuestionnaire] = useState(false)
    const [formData, setFormData] = useState({})

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type: RESET_TEST_DATA})
        dispatch({type: RESET_FORM_DATA})
          
      },[])
    const submitHandler = () => {
        dispatch(saveFormData(formData))
        /* const interval1 = setTimeout(() =>{
            history.push({pathname: `/boje`})
        } , 5000);  */
        history.push({pathname: `/uputstvo1`})
    }
    const handleInput = (e) => {
        
        setFormData({...formData, [e.target.name] : e.target.value})
      }
    const handleRadio = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData, [e.target.name] : e.currentTarget.value})
    }

    const startHandler = (e) => {
        e.preventDefault()
        setStart(true)
    }

    const checkHandler = (e) => {
        console.log(e.target.checked)
        setAgree(e.target.checked)
    }
    const startQuestionnaireHandler = (e) => {
        e.preventDefault()
        setStartQuestionnaire(true)
    }
    return (
        <div>
            <Form>
            <Form.Group controlId='selectedMetering'>
            <Row>
                <Col xs={3}></Col>
                <Col xs={3}>
                <Form.Label>Izaberi jezik/Choose the language</Form.Label>
                <Form.Control as='select' value={jezik}  
                onChange={(e)=>{setJezik(e.target.value)}}>
                    <option value={1}>{jezik == 1? 'Srpski' : 'Serbian'}</option>
                    <option value={0}>{jezik == 1? 'Engleski' : 'English'}</option>
                </Form.Control>
                </Col>
                <Col xs={3}>
                
                </Col>
                <Col xs={3}>
                
                    
                </Col>
            </Row>
            <br/>
            <Row>
            <Card>
                    <Card.Body>SAGLASNOST ZA UČESTVOVANJE U ISTRAŽIVANJU
Ovim potvrđujem da sam saglasan/na da učestvujem u istraživanju o prepoznavanju i pamćenju boja. Potvrđujem da mi je objašnjeno šta se od mene zahteva u istraživanju.
Shvatam da učestvovanje u ovom istraživanju ni na koji način neće da mi nanese štetu, da bude ugrožavajuće, da me izloži neprijatnostima, niti će se tokom eksperimenta koristiti tehnike obmanjivanja. Ipak, ako nisam zadovoljan/na tretmanom, u svakom trenutku mogu da prekinem istraživanje bez objašnjenja. Objašnjeno mi je da će moji podaci biti korišćeni isključivo u naučne svrhe te da niko sa strane neće moći da uspostavi vezu između mene lično i mog postignuća u eksperimentu. Dodatno se o učestvovanju u istraživanju mogu informisati kod istraživača putem imejla:
dr Ivana Jakovljev: ivana.jakovljev@ff.uns.ac.rs
dr Sunčica Zdravković: suncica.zdravkovic@ff.uns.ac.rs

Klikom na dugme ZAPOČNITE EKSPERIMENT, potvrđujete da ste pročitali i u potpunosti razumeli gore navedene informacije i da prihvatate učešće u istraživanju.
</Card.Body>
                    </Card>
            </Row>
            <br/>
            <Row>
                
                <Col xs={9}>
                    
                </Col>
                <Col xs={1}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={jezik==1 ? 'Slazem se' : "I agree"} onChange={(e)=>checkHandler(e)}/>
                </Form.Group>
                </Col>
                <Col xs={2}>
                <Button type='submit' variant='primary' onClick={startHandler} disabled={!agree}>
                    {jezik==1 ? 'ZAPOČNI EKSPERIMENT' : 'START THE EXPERIMENT'}
                    </Button>
                </Col>
            </Row>
            <br/>
            {start &&  <div>
                <Card>
                    <Card.Body>U okviru ovog prvog koraka, molim Vas da kliknete na link ispod koji će Vas odvesti do testa opažanja boja. Test će se otvoriti u novom tabu i traje okvirno 5 minuta. Uradite test do kraja i kao finalni korak kliknite na link „No, thanks. Continue to the test result“ (videti sliku ispod) i dobićete rezultate testa u kojima će biti sadržane dve informacije – koju vrstu poremećaja imate (protan, deutan, tritan) i u kom stepenu je poremećaj (mild, moderate, severe). Moguće je i da kao rezultat dobijete kategoriju „normalno opažanje vida“. Zapamtite rezultat i vratite se u ovaj prozor da odaberete kategoriju dobijenog rezultata i pređete na sledeći korak ispitivanja.</Card.Body>
                    </Card>
                <Row>
                <Col>
                {/* <p>{jezik == 1? 'Pre nego što pređete na test kliknite na link za online dijagnostiku koji se nalazi ispod. Nakon što uradite evaluaciju vida vratite se da upišete rezultate i započnete testiranje.': 'Before proceeding to the test, click on the link for online diagnostics below. After doing a vision evaluation, go back to enter the results and start testing.'}</p> */}
                <Nav.Link target={"_blank"} href='https://enchroma.co.uk/pages/colour-blind-test'>Colour Blind Test</Nav.Link>
                    
                </Col>
            </Row>
            <br/>
            <Row>
            <Form.Label>{jezik==1 ? 'Izaberite kategoriju vaseg poremećaja vida' : 'Choose the category of your vision disorder'}</Form.Label>
            <div key={`inline-radio`} className="mb-3">
            <Form.Check name="test" inline type='radio' id="default-checkbox" label={'PROTAN'}
            onChange={handleRadio}
            value={'PROTAN'}/>
            <Form.Check name="test" inline type='radio' id="default-checkbox1" label={'DEUTAN'}
            onChange={handleRadio}
            value={'DEUTAN'}/>
            </div>
            </Row>
            <br/>
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Upišite rezultat HUE testa:' : 'Enter the result of the HUE test'}</Form.Label>
                    <Form.Control type="number" name='rezultatTesta' onChange={handleInput} value={formData?.rezultatTesta}  />
                    </Form.Group>
            </Row>
            
            
            <br/>
            <Row>
                <Col xs={5}></Col>
                <Col xs={5}></Col>
                <Col xs={2}>
                <Button type='submit' variant='primary' onClick={startQuestionnaireHandler} >
                    {jezik==1 ? 'ZAPOČNI UPITNIK' : 'START THE QUESTIONNAIRE'  }
                    </Button>
                </Col>
            </Row>
            
            {/* <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Ime i prezime' : 'Name and surname'}</Form.Label>
                    <Form.Control type="text" name='ime' placeholder={jezik == 1? 'upisite vase ime i prezime' : 'enter your full name'}
                    onChange={handleInput} value={formData?.ime}  />
                    </Form.Group>
            </Row> */}
            <br/>
           {startQuestionnaire && <div>
           <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Upišite godinu vašeg rođenja:' : 'Please write the year of your birth:'}</Form.Label>
                    <Form.Control type="number" name='datumRodjenja' onChange={handleInput} value={formData?.datumRodjenja}  />
                    </Form.Group>
            </Row>
            <br/>
            <Row>
            <Form.Label>{jezik==1 ? 'Kog ste pola: Ženski/Muški/Nešto drugo' : 'What is your gender: Female/Male/Something else'}</Form.Label>
            <div key={`inline-radio`} className="mb-3">
            <Form.Check name="pol" inline type='radio' id="default-checkbox" label={jezik == 1? 'Ženski' : 'Female'}
            value={jezik == 1? 'Ženski' : 'Female'}
            onChange={handleRadio} />
            <Form.Check name="pol" inline type='radio' id="default-checkbox1" label={jezik == 1? 'Muški' : 'Male'}
            value={jezik == 1? 'Muški' : 'Male'}
            onChange={handleRadio} />
            <Form.Check name="pol" inline type='radio' id="default-checkbox1" label={jezik == 1? 'Nešto drugo' : 'Something else'}
            value={jezik == 1? 'Nešto drugo' : 'Something else'}
            onChange={handleRadio} />
            </div>
            </Row>
            <br/>
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Koje je Vaše zanimanje:' : 'What is your occupation:'}</Form.Label>
                    <Form.Control type="text" name='zanimanje'  onChange={handleInput} value={formData?.zanimanje}/>
                    </Form.Group>
            </Row>
            <br/>

            

            <Row>
            <Form.Label>{jezik==1 ? 'Da li ste ikada bili dijagnostikovani kao osoba sa teškoćama u prepoznavanju boja: Da/Ne' : 'Were you ever diagnosed with colour blindness by medical practitioners: Yes/No'}</Form.Label>
            <div key={`inline-radio`} className="mb-3">
            <Form.Check name='dijagnozaDaNe' inline type='radio' id="default-checkbox" label={jezik == 1? 'DA' : 'YES' } value={jezik == 1? 'DA' : 'YES' }
            onChange={handleRadio} />
            <Form.Check name='dijagnozaDaNe' inline type='radio' id="default-checkbox1" label={jezik == 1? 'NE' : 'NO'} value={jezik == 1? 'NE' : 'NO'}
            onChange={handleRadio} />
            </div>
            </Row>
            <br/>
            {(formData?.dijagnozaDaNe === 'DA' ||  formData?.dijagnozaDaNe === 'YES') && <div>
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Kada' : 'When'}</Form.Label>
                    <Form.Control type="text" name='kada' placeholder={jezik == 1? 'upišite godinu ili period Vašeg života, kao na pr. kasno detinjstvo' : 'precise year or period in your life, such as late childhood'}
                    onChange={handleInput} value={formData?.kada}  />
                    </Form.Group>
            </Row>
            <br/>
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Da li se secate dijagnoze' : 'Do you remember the diagnosis?'}</Form.Label>
                    <Form.Control type="text" name='dijagnoza' placeholder={jezik == 1? 'upišite najpreciznije što možete' : 'as precise as you can'}  
                    onChange={handleInput} value={formData?.dijagnoza} />
                    </Form.Group>
            </Row>
            <br/>
            
            

            
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Kad ste prvi put primetili probleme u opažanju boja? Možete li opisati tu situaciju kao i kad se desila?' : 'When did you first notice problems with the perception of colors? Can you describe the situation and when that happens?'}</Form.Label>
                    <Form.Control as="textarea" name='problemi' onChange={handleInput} value={formData?.problemi}/>
                    </Form.Group>
            </Row>
            <br/>
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Da li danas postoji neka situacija u kojoj Vas naročito ometa vaša percepcija boja?' : 'Is there nowadays any situation when you typically have problems with the perception of colors?'}</Form.Label>
                    <Form.Control as="textarea" name='situacija' onChange={handleInput} value={formData?.situacija}/>
                    </Form.Group>
            </Row>
            </div>}
            </div>}
            </div>
            }
            <br/>
            
            
            </Form.Group>
            </Form>
            {start && startQuestionnaire && <Row>
                <Col xs={3}></Col>
                <Col xs={3}>
                    <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler}>
                    {jezik==1 ? 'Sačuvaj i predji na test' : 'Save and proceed to the test'}
                    </Button>
                </Col>
                <Col xs={3}>
                    
                </Col>
                <Col xs={3}></Col>
            </Row>}
            
        </div>
    )
}

export default HomePage
