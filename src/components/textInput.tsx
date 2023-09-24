interface Props {
    onChangeValue: (value: string) => void
    id: string
}

interface InputProps {
    preventDefault: () => void
    nativeEvent: {
        data: string
    }
}

export default function TextInput({id, onChangeValue}: Props) {
    const handleChange = (elem: any) => {
        const input: InputProps = elem
        input.preventDefault()
        onChangeValue(input.nativeEvent.data)
    }

    return (
        <div className="flex flex-row items-center justify-center px-5 m-0">
            <input
                id={id}
                className="w-full h-0 bg-transparent focus:outline-none"
                onChange={(e) => handleChange(e)}
                value={''}
            />
        </div>
    )
}