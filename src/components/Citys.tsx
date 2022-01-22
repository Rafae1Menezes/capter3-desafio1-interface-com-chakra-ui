import { Container, Heading, HStack, Wrap } from "@chakra-ui/react";
import Card from "./Card";

export default function Citys() {
    return (
        <Container maxWidth="1160px" mb="35px">
            <Heading
                fontSize={{base: '24px', lg:"36px"}}
                fontWeight="medium"
                color="gray.900"
                mb={{base: '20px', lg:"40px"}}
            >
                Cidades +100
            </Heading>
            <HStack justifyContent={{base: 'space-around', lg: 'space-between'}} wrap="wrap" rowGap={{base: '20px', lg:"48px"}} columnGap="30px">
                <Card 
                    foto="/londres.jpg"
                    pais="Londres"
                    cidade="Reino Unido"
                    icone="/londres-icon.png"
                />
                <Card 
                    foto="/paris.jpg"
                    pais="França"
                    cidade="París"
                    icone="/paris-icon.png"
                />
                <Card 
                    foto="/roma.jpg"
                    pais="Itália"
                    cidade="Roma"
                    icone="/roma-icon.png"
                />
                <Card 
                    foto="/praga.jpg"
                    pais="República Tcheca  "
                    cidade="Reino Unido"
                    icone="/praga-icon.png"
                />
                <Card 
                    foto="/amsterdan.jpg"
                    pais="Holanda"
                    cidade="Amsterdã"
                    icone="/amsterdan-icon.png"
                />
            </HStack>
        </Container>
    )
}