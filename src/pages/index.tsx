import { Box, Center, Container, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import Banner from "../components/Banner";
import HeaderMain from "../components/HeaderMain";
import SliderContinents from "../components/SliderContinents";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <Banner />
      <TravelTypes />
      
      <Divider width={{ base: '60px', md: "90px" }} marginX="auto" mt={{ base: '36px', md: "80px" }} mb={{ base: '24px', md: "52px" }} borderWidth={{ base: '1px', md: "2px" }} borderColor="gray.900"/>

      <SliderContinents />
    </>
  )
}
