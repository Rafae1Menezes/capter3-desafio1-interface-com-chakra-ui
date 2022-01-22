import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface CardProps {
    foto: string
    pais: string
    cidade: string
    icone: string
}

export default function Card({ foto, pais, cidade, icone }: CardProps) {
    return (
        <Box
            minW="256px"
            height="279px"
            backgroundColor="#fff"
        >
            <Image src={foto} alt="foto da cidade" />

            <HStack borderWidth={1} w="100%" justifyContent="space-between" padding="18px 24px 24px 24px" borderRadius="4px">
                <VStack alignItems="flex-start">
                    <Text fontSize="20px" fontWeight="semibold" color="gray.900">{cidade}</Text>
                    <Text fontSize="16px" fontWeight="semibold" color="gray.700">{pais}</Text>
                </VStack>
                <Image src={icone} alt="icone da cidade" />
            </HStack>
        </Box>
    )
}