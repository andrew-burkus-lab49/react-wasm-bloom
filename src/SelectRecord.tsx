import { FC } from "react";
import { Container, Select } from "@chakra-ui/react";

interface SelectRecordProps {
    options: string[]
}

const SelectRecord: FC<SelectRecordProps> = ({ options }) => {
    return (
        <Container padding={5}>
            Select a value from your csv to insert into the bloom filter
            <Select>
                {options.map(value => <option key={value} value={value}>{value}</option>)}
            </Select>
        </Container>
    )
}

export default SelectRecord