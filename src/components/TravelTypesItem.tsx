import { Box, Circle, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface TravelTypesItemProps {
    icon: string
    name: string
}

export default function TravelTypesItem({ icon, name }: TravelTypesItemProps) {
    return (
        <Box minW="120px">
            <VStack spacing="24px">
                <Image src={icon} boxSize='85px' alt="cocktail" display={{ base: 'none', md: 'block' }} />

                <HStack>
                    <Circle size='8px' mr="8px" bg='yellow' display={{ base: 'inline-block', md: 'none' }} my="3px" />
                    <Text fontSize={{ base: '18px', md: "24px" }} fontWeight="semibold" color="gray.900" textAlign="center">
                        {name}
                    </Text>
                </HStack>
            </VStack>
        </Box>
    )
}