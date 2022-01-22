import { Container, Heading, HStack, Wrap } from "@chakra-ui/react";
import Card from "./Card";

type Cidade = {
    foto: string,
    icon: string,
    cidade: string,
    pais: string,
}

interface CitysProps {
    cidades: Cidade[]
}

export default function Citys({ cidades }: CitysProps) {
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
            <HStack justifyContent={{base: 'space-around', lg: 'space-between'}} wrap="wrap" rowGap={{base: '20px', lg:"48px"}} columnGap="20px">
                {
                    cidades.map(cidade => 
                        (
                            <Card
                                key={cidade.cidade}
                                foto={cidade.foto}
                                pais={cidade.pais}
                                cidade={cidade.cidade}
                                icone={cidade.icon}
                            />
                        )
                    )
                }
            </HStack>
        </Container>
    )
}