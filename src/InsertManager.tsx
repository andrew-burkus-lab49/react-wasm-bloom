import { FC, useMemo } from "react";
import { Button, Box } from "@chakra-ui/react";
import SelectRecord from "./SelectRecord";
import { unpack } from "./lib";
import useFirstValue from "./useFirstValue";
import { BloomFilter } from "wasm";

interface InsertManagerProps {
    records: Record<string, string>[]
    headers: string[]
    filter?: BloomFilter
}

const InsertManager: FC<InsertManagerProps> = ({ records, headers, filter }) => {
    const [selectedHeader, setSelectedHeader] = useFirstValue("", headers)
    const unpackHeader = useMemo(() => unpack(selectedHeader), [selectedHeader])
    const recordsWithSelectedHeader = unpackHeader(records)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHeader(e.target.value)
    }

    const handleClick = () => {
        recordsWithSelectedHeader.forEach(record => filter?.insert(record))
    }

    return (
        <Box>
            <SelectRecord
                onChange={handleChange}
                options={headers}
                value={selectedHeader}
            />
            <Box paddingY={3}>
                Number of records selected {recordsWithSelectedHeader.length}
            </Box>
            <Button onClick={handleClick}>Insert records</Button>
        </Box>
    )
}

export default InsertManager