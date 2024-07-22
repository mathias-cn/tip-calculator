import { NumberInput } from "./inputs/number"
import { SelectInput } from "./inputs/select"

interface SelectOptionObj {
    value: number
    text: string
}

interface InputSectionProps {
    labelText: string
    nameForLabel: string
    inputType: string
    valueState: number
    onChangeHandler: (value: number) => void
    options?: SelectOptionObj[]
}

export function InputSection({ labelText, nameForLabel, inputType, valueState, onChangeHandler, options }: InputSectionProps) {
    
    return (
        <div className="space-y-1">
            <label htmlFor={nameForLabel}>
            <p className="text-xl font-medium">{labelText}</p>
            </label>
            {inputType === "number" ? (
                <NumberInput 
                    value={valueState}
                    name={nameForLabel}
                    onChangeHandler={onChangeHandler}
                />
            ) : (
                <SelectInput 
                    value={valueState}
                    name={nameForLabel}
                    onChangeHandler={onChangeHandler}
                    options={options}
                />
            )}
        </div>
    )
}