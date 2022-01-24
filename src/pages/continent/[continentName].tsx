import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { resolveHref } from "next/dist/shared/lib/router/router";
import BannerContinent from "../../components/BannerContinent";
import Citys from "../../components/Citys";
import HeaderMain from "../../components/HeaderMain";
import InfoContinent from "../../components/InfoContinent";
import { getPrismicClient } from "../../utils/prismic";

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

interface ContinentProps {
    continent: Continent
}

export default function Continent({ continent }:ContinentProps) {
    return (
        <>
            <HeaderMain withBackButton />
            <BannerContinent titulo={continent.titulo} banner={continent.fotobanner} />
            <InfoContinent continent={continent} />
            <Citys cidades={continent.cidades} />  
        </>
    )
}

export const getStaticPaths = () => {
    return {
       paths: [],
       fallback: 'blocking',
    }
 }

export const getStaticProps: GetStaticProps = async ({ params}) => {
    const { continentName } = params

    const prismic = getPrismicClient()
    const response = await prismic.getByUID('continent', String(continentName), {}) as any

    const cidades = response.data.cidades.map(cidade => {
        return {
            cidade: cidade.cidade,
            pais: cidade.pais,
            foto: cidade.foto.url,
            icon: cidade.icon.url,
        }
    })

    const continent: Continent = {
        titulo: response.data.titulo,
        subtitulo: response.data.subtitulo,
        texto: response.data.texto,
        fotoslider: response.data.fotoslider.url,
        fotobanner: response.data.fotobanner.url,
        paises: response.data.paises,
        linguas: response.data.linguas,
        cidadesqnt: response.data.cidadesqnt,
        cidades
    }

    return {
        props: {
            continent
        },
        revalidate: 60 * 60 * 24, // 24 hours
    }
}

