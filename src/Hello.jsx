import { useState } from "react"

export default function Hello() {
    const [reply, setReply] = useState(null)
    function onClick() {
        setReply("")
        fetch("http://127.0.0.1:8080/get").then(
            response => response.text().then(text => setReply(text)),
            error => setReply(null)
        )
    }

    let content = <h1>No data, please load</h1>
    let style = { borderColor: "red" }
    if (reply !== null) {
        content = <h1>{reply === '' ? 'Loading...' : reply}</h1>
        style.borderColor = reply === '' ? 'black' : "green"
    }

    return (
        <section style={style}>
            {content}
            <button onClick={onClick}>Загрузить</button>
        </section>
    )
}