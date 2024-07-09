
function Taha( {price} ) {
  //destructring
  //const {price}= props
  return (
    <>
      <div >
      
        {/* <h1 className="product">Iphone pro: {props.price}</h1> */}

        {/* to avoid pops.price we use destructring */}
        <h1 className="product">Iphone pro: {price}</h1>
        
      </div>
      
    </>
  )
}

export default Taha
