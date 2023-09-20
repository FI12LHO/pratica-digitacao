interface Props {
    text: string
}

export default function Painel({text}: Props) {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}