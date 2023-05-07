import { FC } from "react";
import { Container, GridItem } from "@chakra-ui/react";

interface RowItemProps {
    value: string
}

const RowItem: FC<RowItemProps> = ({ value }) => {
    return (
        <GridItem>
            <Container
                padding={1}
                border={'solid grey 0.5px'}
                centerContent
            >
                {value}
            </Container>
        </GridItem>
    )
}

export default RowItem