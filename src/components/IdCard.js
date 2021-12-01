function IdCard(props) {
    const person = props.person
    return (
        <div>
            <img src={person.picture} alt={person.firstName} />
            <p>First name: {person.firstName}</p>
            <p>Last name: {person.lastName}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Birth: {person.birth}</p>
        </div>
    )
}

export default IdCard