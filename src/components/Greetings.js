function Greetings(props) {
    if (props.lang === "de") return <div><h3>Halo {props.children}</h3></div>
    if (props.lang === "en") return <div><h3>Hello {props.children}</h3></div>
    if (props.lang === "es") return <div><h3>Hola {props.children}</h3></div>
    if (props.lang === "fr") return <div><h3>Bonjour {props.children}</h3></div>
}

export default Greetings