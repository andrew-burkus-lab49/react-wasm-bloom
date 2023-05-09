import { WASM_PATH } from "./const";

import init, { BloomFilter } from "wasm";
import { useState, useEffect } from "react";
import { getFilterLength } from './lib'

export default function useFilter(size: number) {
    const [filter, setFilter] = useState<BloomFilter>()

    useEffect(() => {
        const length = getFilterLength(0.0001, size) || 100
        init(WASM_PATH).then(_ => {
            const filter = new BloomFilter(length)
            setFilter(filter)
        })

        return () => filter?.free()
    }, [setFilter, init, size])

    return [filter, filter?.size() || 0] as [BloomFilter, number]
}
