import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col, Nav, Table } from 'react-bootstrap'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from 'firebase/firestore/lite'
import app from './util/firebase'
import { useDispatch, useSelector } from 'react-redux'

const db = getFirestore(app)

const ResultsScreen = () => {
  const [rezultati, setRezultati] = useState([])
  const [korisnik, setKorisnik] = useState(null)
  const test = useSelector((state) => state.test)
  const { testovi } = test
  const form = useSelector((state) => state.form)
  const { userData } = form

  useEffect(() => {
    //  getResults(db)
    if (testovi.length !== 0) {
      console.log('snima')
      saveResults(db)
    }
  }, [testovi])

  async function getResults(db) {
    const rezCol = collection(db, 'rezultati')
    const rezSnapshot = await getDocs(rezCol)
    const rezList = rezSnapshot.docs.map((doc) => doc.data())
    console.log(rezList)
    setRezultati(rezList)
    //return cityList;
  }

  async function saveResults(db) {
    const randomString = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 7)
    console.log(randomString)
    const savedPackage = {
      res: testovi,
      podaci: userData,
      name: randomString,
    }
    await setDoc(doc(db, 'rezultati', randomString), savedPackage)
  }

  const editHandler = (korisnik) => {
    setKorisnik(korisnik)
  }

  const backHandler = () => {
    setKorisnik(null)
  }

  const saveHandler = () => {
    getResults(db)
  }
  return (
    <div>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Button variant='success' onClick={saveHandler}>
            Prikazi rezultate
          </Button>
        </Col>
        <Col></Col>
      </Row>

      {!korisnik && (
        <Table striped bordered hover variante='dark'>
          <thead>
            <tr>
              <th>Naziv Korisnika</th>
              <th>Broj tacnih odgovora</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rezultati.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  {item.res.reduce(
                    (acc, cur) => acc + (cur.pogodjen === true ? 1 : 0),
                    0
                  )}
                </td>
                <td>
                  <Nav.Link onClick={() => editHandler(item)}>
                    View details
                  </Nav.Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {korisnik && (
        <>
          <Row>
            <Col>
              <h1>{korisnik.name}</h1>
            </Col>
            <Col xs={8}></Col>
            <Col>
              <Button variant='success' onClick={backHandler}>
                Nazad
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Email: {korisnik.podaci.email ? korisnik.podaci.email : '-'}
              </p>
            </Col>
            <Col>
              <p>Rezultat testa: {korisnik.podaci.test}</p>
            </Col>
            <Col>
              <p>Datum rodjenja: {korisnik.podaci.datumRodjenja}</p>
            </Col>
            <Col>
              <p>Pol: {korisnik.podaci.pol}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Da li postoji dijagnoza: {korisnik.podaci.dijagnozaDaNe}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Kada je postavljena dijagnoza: {korisnik.podaci.kada}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Da li se sećate dijagnoze: {korisnik.podaci.dijagnoza}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Kada ste prvi put primetili probleme: {korisnik.podaci.problemi}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Da li Vas neka situacija naročito ometa:{' '}
                {korisnik.podaci.situacija}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Zanimanje: {korisnik.podaci.zanimanje}</p>
            </Col>
          </Row>

          <Table striped bordered hover variante='dark'>
            <thead>
              <tr>
                <th>serija</th>
                <th>meta</th>
                <th>pogodjen</th>
                <th>brzina reakcije [ms]</th>
                <th>kategorija</th>
                <th>linija</th>
              </tr>
            </thead>
            <tbody>
              {korisnik.res.map((item, index) => (
                <tr key={index}>
                  <td>{item.serija}</td>
                  <td>{item.meta}</td>
                  <td>{item.pogodjen === true ? '+' : '-'}</td>
                  <td>{item.reactionTime}</td>
                  <td>{item.kategorija}</td>
                  <td>{item.linija}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  )
}

export default ResultsScreen
