import { FC, useMemo, useState } from "react";
import { Container } from "@chakra-ui/react";
import SelectRecord from "./SelectRecord";
import { unpack } from "./lib";

interface InsertManagerProps {
    records: Record<string, string>[]
    headers: string[]
}

const InsertManager: FC<InsertManagerProps> = ({ records, headers }) => {
    const [selectedHeader, setSelectedHeader] = useState<string>("")
    const unpackHeader = useMemo(() => unpack(selectedHeader), [selectedHeader])
    const recordsWithSelectedHeader = unpackHeader(records)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHeader(e.target.value)
    }

    return (
        <Container>
            <SelectRecord onChange={handleChange} options={headers} />
            Number of records selected {recordsWithSelectedHeader.length}
        </Container>
    )
}

export default InsertManager