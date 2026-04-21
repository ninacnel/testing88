import BeersPrice from './BeersPrice'
import { beers } from '../data/beers'
import BeersAvailable from './BeersAvailable'
import BeersCount from './BeersCount'
import BeerStyles from './BeerStyles'

const Beers = () => {
    // ['IPA', 'Red',...]
  const styles = beers.reduce((acc, beer) => {
    if (!acc.includes(beer.beerStyle)) {
      acc.push(beer.beerStyle);
    }
    return acc;
  }, []);

  return (
<>
    <BeersPrice items={beers}/>
    <BeersAvailable items={beers}/>
    <BeersCount items={beers} styles={styles}/>
    <BeerStyles items={styles}/>
</>
  )
}

export default Beers