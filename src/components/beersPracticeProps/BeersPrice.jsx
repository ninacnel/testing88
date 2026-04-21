import './beersStyle.css'

const BeersPrice = ({ items }) => {
    const dollar = 1400;

    return (
        <>
            <h4>Todas las cervezas</h4>
            <div className="beers-container">
                {items.map((beer) => (
                    <div key={beer.id} className="beer-card">
                        <p>Name: {beer.beerName}</p>
                        <p>Style: {beer.beerStyle}</p>
                        <p>Price USD: {beer.price}</p>
                        <p>Price ARS: {beer.price * dollar}</p>
                        <p>Available: {beer.available ? 'Disponible' : 'No disponible'}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BeersPrice;
