function Random (props) {
    const ran = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
        <h3>Random value between {props.min} and {props.max} => {ran}</h3>
    )
}

export default Random