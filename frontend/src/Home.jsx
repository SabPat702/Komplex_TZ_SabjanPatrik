import React from 'react';
import './felveteli.css'
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Regi from './tables/Regi.jsx'
import { Valasztott } from './tables/Valasztott';

export const Home = () =>{
    return(
        <>
        <div>
            <div>
                <img className='bg-fej' src="/oktatas-01.jpg" alt="oktatás"/>
            </div>
        </div>
        <Container fluid>
        <Row>
                <Col className='bg-torzs' sm={4} md={4}>
                    <h3>Központi felvételi tájékoztató</h3>
                    <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.</p>
                    <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékoztató oldal</a>
                    <br />
                    <img src="/logo.png" alt="logó" />

                </Col>

                <Col sm={4} md={4}>
                    <h1>Tájékoztatás</h1>
                    <h3>Jószakma Szakgimnázium </h3>
                    <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.</p>
                    <img src="/e-mail-marketing-2745489__340.jpg" alt="marketing" />
                </Col>
                <Col className='bg-torzs' sm={4} md={4}>
                    <h3>Az oldal használatáról</h3>
                    <h6>Ön az oldal használatával a következő információkhoz juthat hozzá</h6>
                    <ul>
                        <li>Előzetes rangsor: </li>
                        <ol>
                            <li>Nevek</li>
                            <li>Ágazat</li>
                            <li>Összes pontszám</li>
                        </ol>
                        <li>Előzetes rangsor nyelvi előkészítő</li>
                        <li>A felvettek névsora</li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <div>
            <div>
                <div>
                    <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
                    <div>
                    </div>
                </div>
                <div>
                    <Regi />
                </div>
            </div>
        </div>
        </>
    )
}