import './beersStyle.css'

const BeersAvailable = ({ items }) => {
    return (
        <>
            <h4>Cervezas disponibles</h4>
            <div className="beers-container">
                {items
                .filter((beer) => beer.available)
                .map((beer) => (
                    <div key={beer.id} className="beer-card">
                        <p>Name: {beer.beerName}</p>
                        <p>Style: {beer.beerStyle}</p>
                        <p>Price USD: {beer.price}</p>
                        <p>Price ARS: {beer.price}</p>
                        <p>Available: {beer.available ? 'Disponible' : 'No disponible'}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BeersAvailable;
