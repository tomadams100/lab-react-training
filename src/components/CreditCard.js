function CreditCard(props) {
    const card = props.card
    const numToShow = card.number.slice(-4).padStart(12,"*")
    return (
        <div className="credit-card" style={{backgroundColor:`${card.bgColor}`, color:`${card.color}`}}>
        <div className="bank-name">
            <p>{card.type}</p>
        </div>
        <div className="number">
            <p>{numToShow}</p>
        </div>
        <div className="card-info">
            <p>Expires {card.expirationMonth}/{card.expirationYear}</p>
            <p>{card.bank}</p>
        </div>
        <div className="owner">
            <p>{card.owner}</p>
        </div>
        </div>
    )
}

export default CreditCard