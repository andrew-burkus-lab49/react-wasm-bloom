import { FC } from "react";
import { Container, GridItem } from "@chakra-ui/react";

interface HeaderItemProps {
    value: string
}

const HeaderItem: FC<HeaderItemProps> = ({ value }) => {
    return (
        <GridItem>
            <Container fontSize="large" fontWeight='medium'>
                {value}
            </Container>
        </GridItem>
    )
}

export default HeaderItem