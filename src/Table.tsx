import { GridItem, Grid } from '@chakra-ui/react'
import { FC } from 'react'

interface TableProps {
    header: string[]
    records: Record<string, string>[]
}

const Table: FC<TableProps> = ({ header, records }) => {
    return (
        <Grid templateColumns={`repeat(${header.length}, 1fr)`}>
            {header.map((value, i) => <GridItem key={i}>{value}</GridItem>)}
            {records.map((record) => (
                Object.values(record).map((value, j) => <GridItem key={j}>{value}</GridItem>)
            ))}
        </Grid>
    )
}

export default Table
