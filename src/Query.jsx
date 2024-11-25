import { useState } from "react"

export default function Query() {
    const [reply, setReply] = useState(null)
    const [name, setName] = useState("")
    function onClick() {
        setReply("")
        fetch(`http://127.0.0.1:8080/api/user?name=${name}`).then(
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
            <input type="text" placeholder="Введите имя" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={onClick}>Загрузить</button>
        </section>
    )
}