interface Props {
    char: string,
    color: "text-green-600" | "text-red-600" | "text-black"
}

export default function CharContainer({char, color}: Props) {
    return (
        <span
            className={
                `font-roboto-mono font-bold text-lg ` 
                + color
            }
        >{char}</span>
    )
}