import { Box, Center, Container, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import { GetServerSideProps } from "next";
import Prismic from '@prismicio/client'
import Banner from "../components/Banner";
import HeaderMain from "../components/HeaderMain";
import SliderContinents from "../components/SliderContinents";
import TravelTypes from "../components/TravelTypes";
import { getPrismicClient } from "../utils/prismic";

type Slide = {
  uid: string,
  slide: string,
  titulo: string,
  subtitulo: string,
}

interface HomeProps {
  slides: Slide[]
}

export default function Home({slides}: HomeProps) {
  return (
    <>
      <HeaderMain />
      <Banner />
      <TravelTypes />

      <Divider width={{ base: '60px', md: "90px" }} marginX="auto" mt={{ base: '36px', md: "80px" }} mb={{ base: '24px', md: "52px" }} borderWidth={{ base: '1px', md: "2px" }} borderColor="gray.900" />

      <SliderContinents slides={slides} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const prismic = getPrismicClient(req)

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continent')
  ], {})
  const { results } =  response

  const slides: Slide[] = results.map(continent => (
    {
      uid: continent.uid,
      titulo: continent.data.titulo,
      subtitulo: continent.data.subtitulo,
      slide: continent.data.fotoslider.url,
    }
  ))

  return {
    props: {
      slides
    }
  }
}