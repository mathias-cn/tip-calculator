import { ReactNode } from "react"

interface ResetButtonProps {
    handleReset: () => void
    children: ReactNode
}

export function ResetButton({ handleReset, children }: ResetButtonProps) {
    return (
        <button onClick={handleReset} className="w-full text-center text-xl text-white font-semibold bg-amber-900 rounded-md h-10">
            {children}
        </button>
    )
}