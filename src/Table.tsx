import { GridItem, Grid } from '@chakra-ui/react'
import { FC } from 'react'
import RecordRow from './RecordRow'

interface TableProps {
    headers: string[]
    records: Record<string, string>[]
}

const Table: FC<TableProps> = ({ headers, records }) => {
    return (
        <Grid templateColumns={`repeat(${headers.length}, 1fr)`}>
            {headers.map((value, i) => <GridItem key={i}>{value}</GridItem>)}
            {records.map((record, i) => <RecordRow key={i} record={record} />)}
        </Grid>
    )
}

export default Table
