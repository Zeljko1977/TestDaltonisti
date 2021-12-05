import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col, Nav, Card, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {saveFormData} from './actions/testActions'
import {RESET_TEST_DATA, RESET_FORM_DATA} from './constants/testConstants'
import slika from './CV-TEST.jpg'

const HomePage = ({history}) => {
    const [jezik, setJezik] = useState(1)
    const [agree, setAgree] = useState(false)
    const [start, setStart] = useState(false)
    const [start2, setStart2] = useState(false)
    const [startQuestionnaire, setStartQuestionnaire] = useState(false)
    const [formData, setFormData] = useState({jezik: 1})

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type: RESET_TEST_DATA})
        dispatch({type: RESET_FORM_DATA})
          
      },[])
    //a
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

    const start2Handler = (e) => {
        e.preventDefault()
        setStart2(true)
    }

    const checkHandler = (e) => {
        console.log(e.target.checked)
        setAgree(e.target.checked)
    }
    const startQuestionnaireHandler = (e) => {
        e.preventDefault()
        setStartQuestionnaire(true)
    }
    const jezikHandler = (e) => {
        console.log(e.target.value)
        setJezik(e.target.value)
        setFormData({...formData, 'jezik' : e.target.value})
    }
    return (
        <div>
            <Form>
            <Form.Group controlId='selectedMetering'>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                <Form.Label>Izaberite jezik/Choose the language</Form.Label>
                <Form.Control as='select' value={jezik}  
                onChange={jezikHandler}>
                    <option value={1}>{jezik == 1? 'Srpski' : 'Serbian'}</option>
                    <option value={0}>{jezik == 1? 'Engleski' : 'English'}</option>
                </Form.Control>
                </Col>
                <Col xs={3}></Col>
            </Row>
            <br/><Row>
            {jezik==1 && <Card>
                    <Card.Body><p> <b>OPIS EKSPERIMENTA</b> <br/><br/>

                    Između 5 i 10% ljudi ima neke poteškoće sa razlikovanjem boja i mi, istraživači sa
Filozofskog fakulteta i Fakulteta tehničkih nauka u Novom Sadu, sada sprovodimo
istraživanje o viđenju i pamćenju boja. Nadamo se da će nam dobijeni rezultati pomoći da
dalje razvijemo tehnologije za optimizaciju slike na različitim uređajima (mobilni telefoni,
tableti, televizori, računar) tako da olakšamo njihovo korišćenje ljudima sa poteškoćama u
opažanju boja.<br/><br/>
Da bi razumeli opažaje, pamćenje i usmeravaje pažnje na boje potrebni su nam podaci od
dobrovoljaca poput Vas.<br/>
Dakle, ako pristanete da nam pomognete, Vaše učešće istraživanju je dobrovoljno i potpuno
anonimno. Vaši podaci će biti korišćeni isključivo u naučne svrhe i niko sa strane neće moći
da uspostavi vezu između Vas lično i Vaših odgovora u istraživanju.<br/>
Ukoliko na kraju i poželite da nas lično kontaktirate i time nam otkrijete svoj identitet, mi ga i
dalje nećemo nikom drugom otkriti, odnosno Vaše ime i prezime nikada neće biti navedeno u
izveštaju o rezultatima niti i u jednoj publikaciji rezultata. Izveštaji o rezultatima sadržaće
samo informacije za cele grupe ispitanika, nikako Vaše individualne rezultate.<br/>
U prvom koraku istraživanja, bićete zamoljeni da uradite kratak test opažanja boja koji
pokazuje da li imate nekih poteškoća u razlikovanju boja. Nakon toga, bićete zamoljeni da
odgovorite na nekoliko opštih pitanja (vaš pol, uzrast, zanimanje, da li ste ranije imali
poteškoća sa razlikovanjem boja). Nakon toga, bićete zamoljeni da uradite nekoliko zadataka
u kojima će vam biti prikazivani obojeni objekti, a vaš zadatak će biti ili da zapamtite boju
objekta ili da prepoznate objekte koji su iste boje.<br/><br/>
Većina ispitanika sve ovo završi za oko 25 minuta.<br/><br/>
Ukoliko želite da nastavite sa učešćem u ovom istraživanju, kliknite DALJE da pročitate
Saglasnost za učestvovanje u istraživanju.</p>
</Card.Body>
                    </Card>}
                    {jezik!=1 && <Card>
                <Card.Body><p><b>EXPERIMENT INFO</b><br/><br/>
    About 5-10% of people suffers from some form of difficulties in color discrimination. We,
researchers from the Faculty of Philosophy and the Faculty of Technical sciences (University
of Novi Sad, Serbia) are conducting a study about colour perception and memory. We hope
that these results will help us to further develop technologies for image optimisation for
various devices (mobile phones, tablets, TVs and computer screens) improving them for
people with color deficiencies.<br/><br/>
In order to understand color perception, memory and attention we need data from volunteers
like yourself.<br/>
Therefore, if you are so kind to help us, your participation will be voluntary, confidential and
completely anonymous. Your data will be used only for scientific purposes, and no one will
be able to establish a link between you personally and your responses.<br/>
UEven if, at the end of the experiment, you decide to contact us to comment on this study, and
in the process, you reveal your identity, we will still keep your identity confidential, and we
will never put your name with the reports on results. The results will always contain only the
group values and never your individual data.<br/>
First step will be to complete a short color vision test to confirm whether you have any
difficulties in color discrimination. Next, we will ask you a few general questions (your age,
gender, occupation, previous difficulties in color discrimination – if any). Finally, you will be
asked to complete several tasks in which color objects will be shown on the screen and your
task will be to memorize colors or to match objects by their color.<br/><br/>
Most people finalize these tasks in about 25 minutes.<br/><br/>
If you want to continue with the participation in this study, please click on the button NEXT
to read the <b>Participant Consent form.</b></p>
                </Card.Body>
             </Card>}
            </Row>
            <br/>
            <Row>
                
                <Col xs={6}>
                    
                </Col>
                <Col xs={2}>

                </Col>
                <Col xs={4}>
                <Button type='submit' variant='primary' onClick={start2Handler}>
                    {jezik==1 ? 'DALJE' : 'NEXT'}
                    </Button>
                </Col>
            </Row>
           
            <br/>

            <Row>
            {jezik == 1 && start2 && <Card>
                    <Card.Body><p> <b>SAGLASNOST ZA UČESTVOVANJE U ISTRAŽIVANJU</b> <br/><br/>

Ovim potvrđujem da sam saglasan/na da učestvujem u istraživanju o prepoznavanju i pamćenju boja. Potvrđujem da mi je objašnjeno šta se od mene zahteva u istraživanju.<br/>
Shvatam da učestvovanje u ovom istraživanju ni na koji način neće da mi nanese štetu, da bude ugrožavajuće, da me izloži neprijatnostima, niti će se tokom eksperimenta koristiti tehnike obmanjivanja. Ipak, ako nisam zadovoljan/na tretmanom, u svakom trenutku mogu da prekinem istraživanje bez objašnjenja. Objašnjeno mi je da će moji podaci biti korišćeni isključivo u naučne svrhe te da niko sa strane neće moći da uspostavi vezu između mene lično i mog postignuća u eksperimentu. Dodatno se o učestvovanju u istraživanju mogu informisati kod istraživača putem imejla:<br/>
dr Ivana Jakovljev: ivana.jakovljev@ff.uns.ac.rs<br/>
dr Sunčica Zdravković: suncica.zdravkovic@ff.uns.ac.rs<br/><br/>

Klikom na polje <b>"SLAŽEM SE"</b> potvrđujete da ste pročitali i u potpunosti razumeli gore navedene informacije i da prihvatate učešće u istraživanju.
Za nastavak kliknite na dugme <b>ZAPOČNITE EKSPERIMENT</b>.</p>
</Card.Body>
                    </Card>}
                    {jezik != 1 && start2 && <Card>
                <Card.Body><p><b>PARTICIPANT CONSENT FORM</b><br/><br/>

                I hereby confirm that I want to participate in the study about colour perception and memory. I
confirm that I was informed about what is expected from me in this study. <br/>
I understand that the participation in this study will not cause me any harm, will not endanger me in any way,
will not expose me to any inconvenience nor that I am going to be deceived in any way at any point during the study. However, if for any reason during this study I do not feel comfortable,
I can stop the study without any explanation. I confirm that I was informed that my data will be used only for the scientific purposes and that the link between my data and my identity
will not be accessible to anyone else but the researchers working on the project. If I need, I can contact researchers with further questions regarding the study:<br/>
dr Ivana Jakovljev: ivana.jakovljev@ff.uns.ac.rs<br/>
dr Sunčica Zdravković: suncica.zdravkovic@ff.uns.ac.rs<br/><br/>

By clicking the button <b>NEXT</b> you confirm that you have read and completely understood the
Consent form and that you freely consent to participate in this study.</p>
                </Card.Body>
            </Card>}
            </Row>
            <br/>
            {start2 && <Row>
                
                <Col xs={6}>
                    
                </Col>
                <Col xs={2}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={jezik==1 ? 'Slažem se' : "I agree"} onChange={(e)=>checkHandler(e)}/>
                </Form.Group>
                </Col>
                <Col xs={4}>
                <Button type='submit' variant='primary' onClick={startHandler} disabled={!agree}>
                    {jezik==1 ? 'ZAPOČNITE EKSPERIMENT' : 'START THE EXPERIMENT'}
                    </Button>
                </Col>
            </Row>}
            <br/>
            {start &&  <div>
                {jezik==1 && <Card>
                    <Card.Body>
                        <p>
                        U okviru ovog prvog koraka, potrebno je da uradite test opažanja boja koji traje okvirno do 5 minuta. Test koji pripada Enchroma sajtu će se otvoriti u novom tabu (prozoru) nakon što kliknete na dugme <b>URADI TEST: COLOUR VISION TEST LINK </b>koje se nalazi u nastavku.
Pokrenite test klikom na prvo dugme na stranici <b>"Start the Test"</b>.<br/>
NAPOMENA: Ne zatvarajte ovaj tekući prozor jer ćete se vratiti na njega kada završite sa testom. Pre početka testa pojačajte svetlinu (brightness) ekrana na maksimalni intezitet. 
Uradite test do kraja i kao finalni korak kliknite na link <b>"No, thanks. Continue to the test result."</b> (videti sliku ispod) i dobićete rezultate testa u kojima će biti sadržane dve informacije – koju vrstu poremećaja imate (protan, deutan, tritan) i u kom stepenu je izražen poremećaj (mild, moderate, severe). Moguće je i da kao rezultat dobijete kategoriju „normalno opažanje vida“. Zapamtite rezultat i vratite se u ovaj prozor da odaberete kategoriju dobijenog rezultata i pređete na sledeći korak ispitivanja.
Ako dobijete rezultat testa "Neodređen/nepotpun rezultat" ponovite test sve dok ne dobijete jednu od ponuđenih 10 kategorija.

                        </p>
                            </Card.Body>
                    </Card>}
                    {jezik!=1 && <Card>
                    <Card.Body>
                        <p>
                        As part of this first step, you need to do a color perception test that lasts approximately 5 minutes. The test belonging to the Enchroma site will open in a new tab (window) after you click on the button below <b>DO THE TEST: COLOR VISION TEST LINK</b>.
Run the test by clicking the first button on the page <b>"Start the Test"</b>.<br/>
NOTE: Do not close this current window as you will return to it when you have completed the test. Before starting the test, increase the brightness of the screen to maximum intensity.
Take the test to the end and as a final step, click on the link <b>"No, thanks. Proceed to the test results"</b>. (see picture below) Furthermore, you will get test results that will contain two pieces of information - what type of disorder you have (protan, deutan, tritan) and to what extent the disorder is pronounced (mild, moderate, severe). It is also possible to get the category "normal vision perception" as a result. Remember the result and return to this window to select the category of the obtained result and proceed to the next test step. If you get a "Indeterminate / Incomplete Score" test result, repeat the test until you get one of the 10 categories offered.


                        </p>
                            
                    </Card.Body>
                </Card>}
                <br/>
                <br/>
                <Image src={slika} fluid/>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col>
                    </Col>
                <Col>
                {/* <p>{jezik == 1? 'Pre nego što pređete na test kliknite na link za online dijagnostiku koji se nalazi ispod. Nakon što uradite evaluaciju vida vratite se da upišete rezultate i započnete testiranje.': 'Before proceeding to the test, click on the link for online diagnostics below. After doing a vision evaluation, go back to enter the results and start testing.'}</p> */}
                <Nav.Link style={{ color: 'white', padding: '0.375rem 0.75rem', borderRadius: '0.4em', border: '1px solid #78C2AD', backgroundColor: '#78C2AD', display:'inline-block'}} target={"_blank"} href='https://enchroma.co.uk/pages/colour-blind-test'>{jezik==1 ? 'URADI TEST: COLOUR VISION TEST LINK' : 'PROCEED TO THE TEST: COLOUR VISION TEST LINK'}</Nav.Link>
                    
                </Col>
                <Col>
                    </Col>
            </Row>
            
            <br/>
            <Row>
            <Form.Label>{jezik==1 ? 'Izaberite kategoriju Vašeg poremećaja vida' : 'Choose the category of your vision disorder'}</Form.Label>
            <div key={`inline-radio`} className="mb-3">
            <Row>
            <Col>
            <Form.Check name="test" inline type='radio' id="default-checkbox-P1" label={'MILD PROTAN'}
            onChange={handleRadio}
            value={'MILD PROTAN'}/>
            <br/>
                        <Form.Check name="test" inline type='radio' id="default-checkbox-P2" label={'MODERATE PROTAN'}
            onChange={handleRadio}
            value={'MODERATE PROTAN'}/>
            <br/>
                        <Form.Check name="test" inline type='radio' id="default-checkbox-P3" label={'SEVERE PROTAN'}
            onChange={handleRadio}
            value={'SEVERE PROTAN'}/>
            
            </Col>
            <Col>
            <Form.Check name="test" inline type='radio' id="default-checkbox-D1" label={'MILD DEUTAN'}
            onChange={handleRadio}
            value={'MILD DEUTAN'}/>
            <br/>
             <Form.Check name="test" inline type='radio' id="default-checkbox-D2" label={'MODERATE DEUTAN'}
            onChange={handleRadio}
            value={'MODERATE DEUTAN'}/>
            <br/>
             <Form.Check name="test" inline type='radio' id="default-checkbox-D3" label={'SEVERE DEUTAN'}
            onChange={handleRadio}
            value={'SEVERE DEUTAN'}/>
            </Col>
            <Col>
            <Form.Check name="test" inline type='radio' id="default-checkbox-T1" label={'MILD TRITAN'}
            onChange={handleRadio}
            value={'MILD TRITAN'}/>
            <br/>
             <Form.Check name="test" inline type='radio' id="default-checkbox-T2" label={'MODERATE TRITAN'}
            onChange={handleRadio}
            value={'MODERATE TRITAN'}/>
            <br/>
             <Form.Check name="test" inline type='radio' id="default-checkbox-T3" label={'SEVERE TRITAN'}
            onChange={handleRadio}
            value={'SEVERE TRITAN'}/>
            <br/>
             <Form.Check name="test" inline type='radio' id="default-checkbox-N" label={'NORMAL COLOR VISION'}
            onChange={handleRadio}
            value={'NORMAL COLOR VISION'}/>
            </Col>
            </Row>
            
            
            
            </div>
            </Row>
            <br/>
            {/* <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Upišite rezultat HUE testa:' : 'Enter the result of the HUE test'}</Form.Label>
                    <Form.Control type="number" name='rezultatTesta' onChange={handleInput} value={formData?.rezultatTesta}  />
                    </Form.Group>
            </Row>*/}
            
            
            <br/>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>                
                <Button type='submit' variant='primary' onClick={startQuestionnaireHandler} disabled={!formData.test} >
                    {jezik==1 ? 'ZAPOČNITE UPITNIK' : 'START THE QUESTIONNAIRE'  }
                    </Button>
                    </Col>
                <Col xs={4}></Col>
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
                    <Form.Label>{jezik == 1? 'Upišite godinu Vašeg rođenja:' : 'Please write the year of your birth:'}</Form.Label>
                    <Form.Control min='1950' max='2010' type="number" name='datumRodjenja' onChange={handleInput} value={formData?.datumRodjenja}  />
                    </Form.Group>
            </Row>
            <br/>
            <Row>
            <Form.Label>{jezik==1 ? 'Kog ste pola?' : 'What is your gender?'}</Form.Label>
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
                    <Form.Label>{jezik == 1? 'Koje je Vaše zanimanje?' : 'What is your occupation?'}</Form.Label>
                    <Form.Control type="text" name='zanimanje'  onChange={handleInput} value={formData?.zanimanje}/>
                    </Form.Group>
            </Row>
            <br/>
            {jezik==1 && <Card>
                    <Card.Body>
                    <p>
            Vaši podaci su nam dragoceni u razumevanju procesa viđenja i pamćenja boja kao i pri razvijanju tehničkih pomagala za ljude sa teškoćama u razlikovanju boja. Bili bismo Vam veoma zahvalni ukoliko biste želeli da učestvujete i u nekom od naših narednih istraživanja na ovu temu. Ukoliko je to slučaj, molimo Vas da unesete svoju imejl adresu preko koje možemo da Vas kontaktiramo. Čak i ako sada ostavite adresu uvek kasnije možete da se predomislite i da odbijete dalje učešće.
            </p>
            <p>
            Poslaćemo Vam ličnu šifru za učešće u narednom istraživanju, te Vas molimo da je sačuvate. Ukoliko imate bilo kakvih pitanja, komentara ili želite da podelite utiske o učešću u istraživanju, budite slobodni da se obratite doc. dr Ivani Jakovljev na imejl adresu:
            ivana.jakovljev@ff.uns.ac.rs
            </p>
                            </Card.Body>
                    </Card>}
            {jezik!=1 && <Card>
                        <Card.Body>
                        <p>
            Your contribution will help us to understand how people see and memorise colours. It will also contribute to the development of technical aids for people with diffculties in color discrimination. We would be very grateful if you would consider participating in similar future studies. If you would be willing to do so, please leave us your e-mail adress so that we can contact you. Even if you leave your contact now and you are not available later you can always decline further participation.
            </p>
            <p>
            Now we will send you a personal code for your future participation that you should save and use later.
            If you have any questions or comments, or you would just like to share your experience about completing this study, please contact Asst. Prof. Ivana Jakovljev ivana.jakovljev@ff.uns.ac.rs.
            </p>
                    
                        </Card.Body>
                    </Card>}
            <br/>
            <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>{jezik == 1? 'Email (opciono)' : 'Email (optional)'}</Form.Label>
                    <Form.Control type="email" name='email' onChange={handleInput} value={formData?.email}/>
                    </Form.Group>
            </Row>
            <br/>

            <Row>
            <Form.Label>{jezik==1 ? 'Da li Ste ikada bili dijagnostikovani kao osoba sa teškoćama u prepoznavanju boja?' : 'Were you ever diagnosed with colour blindness by medical practitioners?'}</Form.Label>
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
                    <Form.Label>{jezik == 1? 'Kada?' : 'When?'}</Form.Label>
                    <Form.Control type="text" name='kada' placeholder={jezik == 1? 'upišite godinu ili period Vašeg života, kao na pr. kasno detinjstvo' : 'precise year or period in your life, such as late childhood'}
                    onChange={handleInput} value={formData?.kada}  />
                    </Form.Group>
            </Row>
            <br/>
            <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>{jezik == 1? 'Da li se sećate dijagnoze?' : 'Do you remember the diagnosis?'}</Form.Label>
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
                    <Button style={{marginTop: '20px'}} type='submit' variant='primary' onClick={submitHandler} disabled={!formData.pol || (!formData.datumRodjenja || (formData.datumRodjenja < 1950 || formData.datumRodjenja > 2010))}>
                    {jezik==1 ? 'Sačuvajte i pređite na test'.toUpperCase() : 'Save and proceed to the test'.toUpperCase()}
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