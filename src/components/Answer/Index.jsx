export default function Answer(props) {
    return(
        <section className="d-flex flex-row justify-content-center align-items-center">
        <span style={{ fontSize: '2rem' }}>{props.emoji}</span>
        <h3 className="fw-bolder mt-2 ms-3" style={{ color: props.color }}>{props.value}</h3>
        </section>
    )
    }