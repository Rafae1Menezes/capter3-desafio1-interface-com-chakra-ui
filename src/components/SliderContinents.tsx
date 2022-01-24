import { Box, Center, Container, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, History } from 'swiper';
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, History]);

type slide = {
    uid: string,
    slide: string,
    titulo: string,
    subtitulo: string,
}

interface SliderContinentsProps {
    slides: slide[]
}

export default function SliderContinents({ slides }: SliderContinentsProps) {

    const [isLargerThan715] = useMediaQuery('(min-width: 715px)')

    return (
        <>
            <Heading textAlign="center" fontSize={{ base: '20px', md: "36px" }} fontWeight="medium" lineHeight={{ base: '30px', md: "54px" }} color="gray.900" mb="52px">
                Vamos nessa? <br />
                Então escolha seu continente
            </Heading>

            <Container maxW='1240px' p={0} mb={{ base: '24px', md: "40px" }} >
                <Swiper
                    spaceBetween={3}
                    slidesPerView={1}
                    navigation={true}
                    pagination={true}
                    scrollbar={true}
                    className={!isLargerThan715 && "mobile"}
                    autoplay={true}
                >
                    {
                        slides.map(slide => (
                            <SwiperSlide key={slide.uid}>
                                <Center
                                    width='1240px'
                                    height={{ base: '250px', md: "450px" }}
                                    bgImage={`url('${slide.slide}')`}
                                    bgSize="cover"
                                    bgPosition="center"
                                    bgRepeat="no-repeat"
                                    color="gray.100"
                                    flexDir="column"
                                >
                                    <Link href={`/continent/${slide.uid}`}>
                                        <a>
                                            <Heading fontSize={{ base: '24px', md: "48px" }} fontWeight="semibold">{slide.titulo}</Heading>
                                            <Heading fontSize={{ base: '14px', md: "24px" }} fontWeight="semibold" mt="16px">{slide.subtitulo}</Heading>
                                        </a>
                                    </Link>
                                </Center>
                            </SwiperSlide>
                        ))
                    }                    
                </Swiper>
            </Container>

        </>
    )
}
