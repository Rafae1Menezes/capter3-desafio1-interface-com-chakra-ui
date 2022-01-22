import { Box, Center, Container, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination,History } from 'swiper';

SwiperCore.use([Navigation,Pagination,History]);

export default function SliderContinents() {

    const [isLargerThan715] = useMediaQuery('(min-width: 715px)')

    return (
        <>
            <Heading textAlign="center" fontSize={{ base: '20px', md: "36px" }} fontWeight="medium" lineHeight={{ base: '30px', md: "54px" }} color="gray.900" mb="52px">
                Vamos nessa? <br />
                Então escolha seu continente
            </Heading>

            <Container maxW='1240px' p={0}  mb={{ base: '24px', md: "40px" }} >
            <Swiper 
                spaceBetween={3} 
                slidesPerView={1} 
                navigation={true} 
                pagination={true}
                scrollbar={true}
                className={!isLargerThan715 && "mobile"}                
            >
                    <SwiperSlide>
                        <Center  
                            width='1240px' 
                            height={{ base: '250px', md: "450px" }}
                            bgImage="url('/europa.jpg')"
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            color="gray.100"
                            flexDir="column"
                        >                            
                            <Heading fontSize={{ base: '24px', md: "48px" }}  fontWeight="semibold">Europa</Heading>                           
                            <Heading fontSize={{ base: '14px', md: "24px" }}  fontWeight="semibold" mt="16px">O continente mais antigo.</Heading>
                        </Center>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Center  
                            width='1240px' 
                            height={{ base: '250px', md: "450px" }}
                            bgImage="url('/africa.jpg')"
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            color="gray.100"
                            flexDir="column"
                        >                            
                            <Heading fontSize={{ base: '24px', md: "48px" }}  fontWeight="semibold">Africa</Heading>                           
                            <Heading fontSize={{ base: '14px', md: "24px" }}  fontWeight="semibold" mt="16px">O continente mais antigo.</Heading>
                        </Center>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Center  
                            width='1240px' 
                            height={{ base: '250px', md: "450px" }}
                            bgImage="url('/asia.jpg')"
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            color="gray.100"
                            flexDir="column"
                        >                            
                            <Heading fontSize={{ base: '24px', md: "48px" }}  fontWeight="semibold">Ásia</Heading>                           
                            <Heading fontSize={{ base: '14px', md: "24px" }}  fontWeight="semibold" mt="16px">O continente mais antigo.</Heading>
                        </Center>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Center  
                            width='1240px' 
                            height={{ base: '250px', md: "450px" }}
                            bgImage="url('/oceania.jpg')"
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            color="gray.100"
                            flexDir="column"
                        >                            
                            <Heading fontSize={{ base: '24px', md: "48px" }}  fontWeight="semibold">Oceania</Heading>                           
                            <Heading fontSize={{ base: '14px', md: "24px" }}  fontWeight="semibold" mt="16px">O continente mais antigo.</Heading>
                        </Center>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Center  
                            width='1240px' 
                            height={{ base: '250px', md: "450px" }}
                            bgImage="url('/america.jpg')"
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            color="gray.100"
                            flexDir="column"
                        >                            
                            <Heading fontSize={{ base: '24px', md: "48px" }}  fontWeight="semibold">América</Heading>                           
                            <Heading fontSize={{ base: '14px', md: "24px" }}  fontWeight="semibold" mt="16px">O continente mais antigo.</Heading>
                        </Center>
                    </SwiperSlide>
                </Swiper>
            </Container>
            
        </>
    )
}
