import { Box, Container, HStack, Image, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";

type Cidade = {
    foto: string,
    icon: string,
    cidade: string,
    pais: string,
}

interface Continent {
    titulo: string
    subtitulo: string
    texto: string
    paises: string
    linguas: string
    cidadesqnt: string
    fotobanner: string
    fotoslider: string
    cidades: Cidade[]
}

interface InfoContinentProps{
    continent: Continent
}

export default function InfoContinent({continent}:InfoContinentProps) {
    return (
        <Container maxWidth="1160px" mt={{ base: "24px", lg: "80px" }} mb={{ base: "32px", lg: "80px" }}>
            <Stack gap="70px" direction={{ base: "column", lg: "row" }} alignItems="center" rowGap="16px">
                <Text
                    fontSize={{ base: "14px", lg: "24px" }}
                    fontWeight="normal"
                    lineHeight={{ base: "21px", lg: "36px" }}
                    color="gray.900"
                    textAlign="justify"
                >
                    {continent.texto}
                </Text>
                <Box>

                    <HStack justifyContent="space-between" columnGap="48px">
                        <VStack>
                            <Text fontSize={{ base: '24px', lg: '48px' }} fontWeight="medium" color="yellow" lineHeight="1">{continent.paises}</Text>
                            <Text fontSize={{ base: '18px', lg: '24px' }} fontWeight="medium" color="gray.900" lineHeight="1">países</Text>
                        </VStack>
                        <VStack>
                            <Text fontSize={{ base: '24px', lg: '48px' }} fontWeight="medium" color="yellow" lineHeight="1">{continent.linguas}</Text>
                            <Text fontSize={{ base: '18px', lg: '24px' }} fontWeight="medium" color="gray.900" lineHeight="1">línguas</Text>
                        </VStack>
                        <VStack>
                            <Text fontSize={{ base: '24px', lg: '48px' }} fontWeight="medium" color="yellow" lineHeight="1">{continent.cidadesqnt}</Text>
                            <Text fontSize={{ base: '18px', lg: '24px' }} fontWeight="medium" color="gray.900" lineHeight="1" width={{ base: '160px', lg: '200px' }}>
                                cidades +100
                                <Tooltip hasArrow label='De acordo com Visual Capitalist'  bg='gray.200' color='gray.900'>
                                    <Image src="/Info.svg" alt="info" ml="10px" display="inline-block" w="16px" h="16px" />
                                </Tooltip>
                            </Text>
                        </VStack>
                    </HStack>


                </Box>
            </Stack>
        </Container>
    )
}