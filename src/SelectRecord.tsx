import { FC, ChangeEvent } from "react";
import { Box, Select } from "@chakra-ui/react";

interface SelectRecordProps {
    options: string[]
    value: string
    onChange(e: ChangeEvent<HTMLSelectElement>): void
}

const SelectRecord: FC<SelectRecordProps> = ({ options, onChange: handleChange, value }) => {
    return (
        <Box paddingY={3}>
            Select a value from your csv to insert into the bloom filter
            <Select value={value} onChange={handleChange} maxWidth="2xl">
                {options
                    .map(value =>
                        <option key={value} value={value}>{value}</option>)}
            </Select>
        </Box>
    )
}

export default SelectRecord