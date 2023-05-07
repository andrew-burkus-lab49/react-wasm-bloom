import { FC, ChangeEvent } from "react";
import { Container, Select } from "@chakra-ui/react";

interface SelectRecordProps {
    options: string[]
    onChange(e: ChangeEvent<HTMLSelectElement>): void
}

const SelectRecord: FC<SelectRecordProps> = ({ options, onChange: handleChange }) => {
    return (
        <Container padding={5}>
            Select a value from your csv to insert into the bloom filter
            <Select onChange={handleChange}>
                {options
                    .map(value =>
                        <option key={value} value={value}>{value}</option>)}
            </Select>
        </Container>
    )
}

export default SelectRecord