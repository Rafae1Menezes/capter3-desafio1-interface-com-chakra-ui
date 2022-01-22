import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import TravelTypesItem from "./TravelTypesItem";

export default function TravelTypes() {
  return (
    <Container maxW='1180px' px="20px" h="100%" mt={{ base: '36px', md: "114px" }}>
      <HStack justifyContent={{ base: 'center', md: 'space-between' }} shouldWrapChildren={true} wrap="wrap" rowGap="27px" columnGap={{ base: '30px', md: '0px' }}>
        <TravelTypesItem name="vida noturna" icon="/cocktail.svg" />
        <TravelTypesItem name="praia" icon="/surf.svg" />
        <TravelTypesItem name="moderno" icon="/building.svg" />
        <TravelTypesItem name="clássico" icon="/museum.svg" />
        <TravelTypesItem name="e mais..." icon="/earth.svg" />
      </HStack>
    </Container>
  )
}