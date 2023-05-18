import { BloomFilter } from "wasm";
import { useState, useEffect } from "react";
import { getFilterLength } from './lib'

export default function useFilter(size: number) {
    const [filter, setFilter] = useState<BloomFilter>()

    useEffect(() => {
        const length = getFilterLength(0.0001, size) || 100
        const filter = new BloomFilter(length)
        setFilter(filter)
        return () => filter?.free()
    }, [setFilter, size])

    return [filter, filter?.size() || 0] as [BloomFilter, number]
}
