interface NumberInputProps {
    value: number
    name: string
    onChangeHandler: (value: number) => void
}

export function NumberInput({ value, name, onChangeHandler }: NumberInputProps) {
    return (
        <input 
            className="h-10 w-full rounded-md px-3 py-2 outline-none"
            type="number"
            name={name}
            value={value} 
            onChange={(e) => onChangeHandler(Number(e.target.value))} 
        />
    )
}