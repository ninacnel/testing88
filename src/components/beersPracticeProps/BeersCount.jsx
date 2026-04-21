import './beersStyle.css'

const BeersCount = ({ items, styles}) => {


  return (
    <>
      <h4>Cervezas por Estilo</h4>

        {styles.map(style => (
        <p key={style}>
            {style}: {items.filter(b => b.beerStyle === style).length}
        </p>
        ))}
    </>
  )
}

export default BeersCount;
