import Rating from "./Rating"

function DriverCard(props) {
    const person = props.card
    return(
        <div className="driver-card">
        <div className="profile-image">
            <img src={person.img} alt={person.name} />
        </div>
        <div className="info">
            <h1>{person.name}</h1>
            <Rating>{person.rating}</Rating>
            <p>{person.car.modle} {person.car.licensePlate}</p>
        </div>
        </div>
    )
}

export default DriverCard