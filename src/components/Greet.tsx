type GreetProps = {
    name: string
}

export default function Greet(props: GreetProps) {
    return (
        <div>
            <h1>Greet {props.name}</h1>
        </div>
    )
}
