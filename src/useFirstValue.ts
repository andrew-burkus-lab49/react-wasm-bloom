import { useState, useEffect } from "react"

type UseFirstValue<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export default function useFirstValue<T>(defaultValue: T, updatingValue: T[]): UseFirstValue<T> {
    const [value, setValue] = useState<T>(defaultValue)

    useEffect(() => {
        if (updatingValue.length > 0) {
            setValue(updatingValue[0])
        }
    }, [updatingValue, setValue])

    return [value, setValue]
}