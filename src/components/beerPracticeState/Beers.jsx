import { useState } from 'react';
import { beers as allBeers } from '../data/beers';
import BeerItem from './BeerItem';
import DollarPrice from './DollarPrice';
import { Col, Container, Row } from 'react-bootstrap';
import NewBeer from './NewBeer';

const BeersState = () => {
    const [beers, setBeers] = useState(allBeers);
    const [dollar, setDollar] = useState(1300);

    const changeDollarHandler = (newValue) => {
        setDollar(newValue);
    };

    const handleAddBeer = (newItem) => {
        let itemId = {
            id: Math.random(),
            ...newItem, 
        };

        setBeers((prevState) => [ itemId, ...prevState]);
    }

    return (
        <Container className="mt-4">
            <h4 className="mb-3">State practice</h4>

            <h6>Cambiar precio</h6>
            <DollarPrice 
                onDollarChange={changeDollarHandler} 
                value={dollar}
            />

            <NewBeer onAddBeer={handleAddBeer}/>

            <Row className="mt-3">
                {beers.map((beer) => (
                    <Col 
                        key={beer.id} 
                        xs={12} 
                        sm={6} 
                        md={4} 
                        lg={4}
                        className="d-flex justify-content-center"
                    >
                        <BeerItem beer={beer} dollar={dollar} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BeersState;