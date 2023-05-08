import { Grid } from '@chakra-ui/react'
import { FC } from 'react'
import RecordRow from './RecordRow'
import HeaderItem from './HeaderItem'

interface TableProps {
    headers: string[]
    records: Record<string, string>[]
}

const Table: FC<TableProps> = ({ headers, records }) => {
    return (
        <Grid
            templateColumns={`repeat(${headers.length}, 1fr)`}
            gap={0.5}
            paddingY={3}
        >
            {headers.map((value, i) => <HeaderItem key={i} value={value} />)}
            {records.slice(0, 100).map((record, i) => <RecordRow key={i} record={record} />)}
        </Grid>
    )
}

export default Table
