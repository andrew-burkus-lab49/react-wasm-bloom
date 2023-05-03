import { FC, Fragment } from "react";
import RowItem from "./RowItem";

interface RecordRowProps {
    record: Record<string, string>
}

const RecordRow: FC<RecordRowProps> = ({ record }) => {
    return (
        <Fragment>
            {
                Object.values(record)
                    .map((value, i) => <RowItem key={i} value={value} />)
            }
        </Fragment>
    )
}

export default RecordRow