const DollarPrice = ({ onDollarChange, value }) => {

  const handleChangeDollar = (e) => {
    onDollarChange(e.target.value)
  }
  return (
    <input type='number' onChange={handleChangeDollar} value={value}/>
  )
}

export default DollarPrice