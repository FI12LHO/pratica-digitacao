interface Props {
    onChangeValue: (value: string) => void
}

interface InputProps {
    preventDefault: () => void
    nativeEvent: {
        data: string
    }
}

export default function TextInput({onChangeValue}: Props) {
    const handleChange = (elem: any) => {
        const input: InputProps = elem
        input.preventDefault()
        onChangeValue(input.nativeEvent.data)
    }

    return (
        <div className="flex flex-row items-center justify-center py-4">
            <input
                className="w-80 h-16 mx-4 border border-stone-600 bg-white focus:outline-none"
                onChange={(e) => handleChange(e)}
                value={''}
            />
        </div>
    )
}