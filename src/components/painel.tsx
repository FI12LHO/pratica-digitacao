interface Props {
    children: any
    htmlFor: string
}

export default function Painel({ children, htmlFor }: Props) {
    return (
        <div className="p-5 mb-1 bg-white border border-[#1E1E1E] shadow-inner">
            <label className="m-0" htmlFor={htmlFor}>
                {children}
            </label>
        </div>
    )
}