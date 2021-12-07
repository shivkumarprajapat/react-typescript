type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
    return (
        <h1>
            {
                props.isLoggedIn ?
                    `Welcome ${props.name} you have ${props.messageCount} ` : "Welcome Guest"
            }
        </h1>
    )
}
