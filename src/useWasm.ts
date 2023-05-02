import { WASM_PATH } from "./const";

import init, { InitOutput } from "wasm";
import { useState, useEffect } from "react";

export default function useWasm() {
    const [wasm, setWasm] = useState<InitOutput>()

    useEffect(() => {
        init(WASM_PATH).then(wasm => setWasm(wasm))
    }, [setWasm, init])

    return wasm
}