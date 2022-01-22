import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Box
            bgImage="url('/sky.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h={{ base: '163px', md: "335px" }}
        >
            <Container maxW='1180px' p={0} h="100%">
                <HStack justifyContent='space-between'  px="20px" h={{ base: '163px', md: "335px" }}>

                    <Box>
                        <Heading color="gray.100" fontSize={{ base: '20px', md: "36px" }} fontWeight="medium" lineHeight={{ base: '30px', md: "54px" }}>5 Continentes,<br />infinitas possibilidades.</Heading>
                        <Text color="gray.300" mt="20px" fontSize={{ base: '14px', md: "20px" }} fontWeight="normal" lineHeight={{ base: '21px', md: "30px" }}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                    </Box>

                    <Box width="50%" h="100%" position="relative" display={{ base: 'none', lg: 'block'}}>
                        <Image src='/plane.svg' alt='airplane' width="417px" position="absolute" transform="rotate(3deg)" bottom="-30px" right="-8px" />
                    </Box>

                </HStack>
            </Container>
        </Box>
    )
}