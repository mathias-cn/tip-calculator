import { useState } from "react"
import { InputSection } from "./components/input-section"
import { FinalPriceDisplay } from "./components/final-price-display"
import { ResetButton } from "./components/reset-button"

interface SelectOptionObj {
  value: number
  text: string
}

export function App() {
  const [billValue, setBillValue] = useState(0)
  const [myService, setMyService] = useState(0)
  const [friendService, setFriendService] = useState(0)

  function resetCalculator() {
    setBillValue(0)
    setMyService(0)
    setFriendService(0)
  }

  const optionsArray: SelectOptionObj[] = [
    { value: 0, text: "Dissatisfied (0%)" },
    { value: 5, text: "It was okay (5%)" },
    { value: 10, text: "It was good (10%)" },
    { value: 20, text: "Absolutely amazing! (20%)" }
  ]

  return (
    <div className="min-w-80 max-w-md mx-auto p-4 md:p-6 bg-amber-200 rounded-md space-y-3">
      <h1 className="text-center font-bold text-3xl mb-4">😋 Tip Calculator 😋</h1>
      
      <InputSection 
        labelText="How much was the bill?"
        nameForLabel="bill"
        inputType="number"
        valueState={billValue}
        onChangeHandler={setBillValue}
      />
      
      <InputSection 
        labelText="How did you like the service?"
        nameForLabel="myService"
        inputType="select"
        valueState={myService}
        onChangeHandler={setMyService}
        options={optionsArray}
      />
      
      <InputSection 
        labelText="How did your friend like the service?"
        nameForLabel="friendService"
        inputType="select"
        valueState={friendService}
        onChangeHandler={setFriendService}
        options={[{ value: 0, text: "I was by-miself" },...optionsArray]}
      />

      <FinalPriceDisplay
        bill={billValue} 
        myService={myService}
        friendService={friendService}
      />

      <ResetButton handleReset={resetCalculator}>
        RESET
      </ResetButton>
    </div>
  )
}