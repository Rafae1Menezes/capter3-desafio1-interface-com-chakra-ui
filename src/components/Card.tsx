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
            
            
        >
            <Image src={foto} alt="foto da cidade" width="256px" height="173px" borderRadius="4px 4px 0 0" objectFit='cover'/>

            <HStack 
                w="100%" 
                justifyContent="space-between" 
                padding="18px 24px 24px 24px" 
                border="1px solid rgba(255, 186, 8, 0.5)"
                borderTop={0} 
                borderRadius="0 0 4px 4px" 
                backgroundColor="#fff"
            >
                <VStack alignItems="flex-start">
                    <Text fontSize="20px" fontWeight="semibold" color="gray.900">{cidade}</Text>
                    <Text fontSize="16px" fontWeight="semibold" color="gray.700">{pais}</Text>
                </VStack>
                <Image src={icone} alt="icone da cidade" width="30px" height="30px" />
            </HStack>
        </Box>
    )
}
