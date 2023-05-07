import { FC, useMemo } from "react";
import { Container } from "@chakra-ui/react";
import SelectRecord from "./SelectRecord";
import { unpack } from "./lib";
import useFirstValue from "./useFirstValue";

interface InsertManagerProps {
    records: Record<string, string>[]
    headers: string[]
}

const InsertManager: FC<InsertManagerProps> = ({ records, headers }) => {
    const [selectedHeader, setSelectedHeader] = useFirstValue("", headers)
    const unpackHeader = useMemo(() => unpack(selectedHeader), [selectedHeader])
    const recordsWithSelectedHeader = unpackHeader(records)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHeader(e.target.value)
    }

    return (
        <Container>
            <SelectRecord onChange={handleChange} options={headers} value={selectedHeader} />
            Number of records selected {recordsWithSelectedHeader.length}
        </Container>
    )
}

export default InsertManager