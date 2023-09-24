interface Props {
    children: any
    htmlFor: string
}

export default function Painel({ children, htmlFor }: Props) {
    return (
        <div className="p-5 mb-0">
            <label className="m-0" htmlFor={htmlFor}>
                {children}
            </label>
        </div>
    )
}