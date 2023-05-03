import { FC } from "react";
import { Container, GridItem } from "@chakra-ui/react";

interface RowItemProps {
    value: string
}

const RowItem: FC<RowItemProps> = ({ value }) => {
    return (
        <GridItem>
            <Container border={'solid grey 0.5px'}>
                {value}
            </Container>
        </GridItem>
    )
}

export default RowItem