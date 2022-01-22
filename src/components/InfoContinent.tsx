import { Box, Container, HStack, Stack, Text, VStack } from "@chakra-ui/react";

export default function InfoContinent() {
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
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
                <Box>

                    <HStack justifyContent="space-between" columnGap="48px">
                        <VStack>
                            <Text fontSize={{ base: '24px', lg: '48px' }} fontWeight="medium" color="yellow" lineHeight="1">50</Text>
                            <Text fontSize={{ base: '18px', lg: '24px' }} fontWeight="medium" color="gray.900" lineHeight="1">países</Text>
                        </VStack>
                        <VStack>
                            <Text fontSize={{ base: '24px', lg: '48px' }} fontWeight="medium" color="yellow" lineHeight="1">60</Text>
                            <Text fontSize={{ base: '18px', lg: '24px' }} fontWeight="medium" color="gray.900" lineHeight="1">línguas</Text>
                        </VStack>
                        <VStack>
                            <Text fontSize={{ base: '24px', lg: '48px' }} fontWeight="medium" color="yellow" lineHeight="1">27</Text>
                            <Text fontSize={{ base: '18px', lg: '24px' }} fontWeight="medium" color="gray.900" lineHeight="1" width={{ base: '120px', lg: '160px' }}>cidades +100</Text>
                        </VStack>
                    </HStack>


                </Box>
            </Stack>
        </Container>
    )
}