interface SelectOptionObj {
    value: number
    text: string
}

interface SelectInputProps {
    value: number
    name: string
    onChangeHandler: (value: number) => void
    options?: SelectOptionObj[]
}

export function SelectInput({ value, name, onChangeHandler, options }: SelectInputProps) {
    return (
        <select 
            className="h-10 w-full rounded-md px-3 py-2 outline-none"
            name={name}
            value={value}
            onChange={(e) => onChangeHandler(Number(e.target.value))}
        >
          {options?.map(o => (
            <option value={o.value} key={o.value}>{o.text}</option>
          ))}
        </select>
    )
}