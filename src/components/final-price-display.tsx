interface FinalPriceDisplayProps {
    bill: number
    myService: number
    friendService: number
}

export function FinalPriceDisplay({ bill, myService, friendService }: FinalPriceDisplayProps) {
    if(bill === 0) {
        return (
            <h2 className="font-bold text-2xl text-center pt-4 pb-2">
                Type the bill value to calculate
            </h2>
        )
    }

    const averagePercentage = Math.round((myService + friendService) / 2)
    const tipValue = (bill * averagePercentage) / 100
    const billWithTip = tipValue + bill

    return (
        <h2 className="font-bold text-2xl text-center pt-4 pb-2">
            You pay ${billWithTip} (${bill} + ${tipValue} tip)
        </h2>
    )
}