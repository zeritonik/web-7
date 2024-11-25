import { useState } from "react"

export default function Count() {
    const [reply, setReply] = useState(null)
    const [value, setValue] = useState(0)

    function onClickLoad() {
        setReply("")
        fetch(`http://127.0.0.1:8080/count`).then(
            response => response.json().then(json => setReply(json.count)),
            error => setReply(null)
        )
    }

    function onClickChange() {
        setReply("")
        fetch(`http://127.0.0.1:8080/count`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ "count": value }),
        }).then(
            response => response.status === 200 ? setReply("OK") : response.text().then(text => setReply(text))
        )
        setValue(0)
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
            <button onClick={onClickLoad}>Загрузить</button>
            <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}></input>
            <button onClick={onClickChange}>Изменить</button>
        </section>
    )
}