import { FC, useState, ChangeEvent, useEffect } from "react";
import { BloomFilter } from "wasm";
import { Input, Box } from "@chakra-ui/react";

interface SearchProps {
    filter?: BloomFilter
}

const Search: FC<SearchProps> = ({ filter }) => {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState<boolean | undefined>(false)

    useEffect(() => {
        setResult(filter?.contains(query))
    }, [query, filter, setResult])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setQuery(value)
    }

    let color = ""
    if (query.length > 0) {
        color = result ? "green.100" : "red.100"
    }

    return (
        <Box paddingY={5} boxShadow="sm">
            <Input
                bg={color}
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Query"
                maxWidth="2xl"
            />
            <Box>
                {query.length > 0 ? result ? "Found" : "Not found" : ""}
            </Box>
        </Box>
    )
}

export default Search