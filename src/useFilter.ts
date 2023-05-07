import { WASM_PATH } from "./const";

import init, { BloomFilter } from "wasm";
import { useState, useEffect } from "react";

export default function useFilter() {
    const [filter, setFilter] = useState<BloomFilter>()

    useEffect(() => {
        init(WASM_PATH).then(_ => {
            const filter = BloomFilter.new(1000)
            setFilter(filter)
        })
    }, [setFilter, init])

    return filter
}