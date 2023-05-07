import { WASM_PATH } from "./const";

import init, { BloomFilter } from "wasm";
import { useState, useEffect } from "react";

export default function useFilter() {
    const [filter, setFilter] = useState<BloomFilter>()

    useEffect(() => {
        init(WASM_PATH).then(_ => {
            const filter = BloomFilter.new(Math.pow(10, 7))
            setFilter(filter)
        })
    }, [setFilter, init])

    return filter
}