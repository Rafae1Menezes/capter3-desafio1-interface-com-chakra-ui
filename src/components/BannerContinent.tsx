import { Box, Center, Container, Heading, useMediaQuery } from "@chakra-ui/react";

interface BannerContinentProps {
    titulo: string
    banner: string
}

export default function BannerContinent({ titulo, banner }: BannerContinentProps) {
    const [isLargerThan990] = useMediaQuery('(min-width: 990px)')

    return (
        <Box
            backgroundImage={`url('${banner}')`}
            backgroundSize="cover"
            backgroundPosition="bottom"
            height={{base: "150px", lg:"500px"}}
        >
            <Container maxWidth="1160px" height="100%" position="relative">

                {
                    isLargerThan990
                        ? <Heading
                            color="gray.100"
                            fontSize="48px"
                            fontWeight="semibold"
                            position="absolute"
                            bottom="59px"
                        >
                            {titulo}
                        </Heading>
                        : <Center height="100%">
                            <Heading
                            color="gray.100"
                            fontSize="28px"
                            fontWeight="semibold"
                        >
                            {titulo}
                        </Heading>
                        </Center>

                }

            </Container>
        </Box>
    )
}