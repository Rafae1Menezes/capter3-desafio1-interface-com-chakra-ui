import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import BannerContinent from "../../components/BannerContinent";
import Citys from "../../components/Citys";
import HeaderMain from "../../components/HeaderMain";
import InfoContinent from "../../components/InfoContinent";

export default function Continent() {
    return (
        <>
            <HeaderMain />
            <BannerContinent />
            <InfoContinent />
            <Citys />
            


        </>
    )
}