function Rating(props) {
    const rating = Math.round(props.children)
    if (rating === 0) return(<div><p>☆☆☆☆☆</p></div>)
    if (rating === 1) return(<div><p>★☆☆☆☆</p></div>)
    if (rating === 2) return(<div><p>★★☆☆☆</p></div>)
    if (rating === 3) return(<div><p>★★★☆☆</p></div>)
    if (rating === 4) return(<div><p>★★★★☆</p></div>)
    if (rating === 5) return(<div><p>★★★★★</p></div>)
}

export default Rating