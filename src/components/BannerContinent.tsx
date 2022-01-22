import { Box, Center, Container, Heading, useMediaQuery } from "@chakra-ui/react";

interface BannerContinentProps {
    titulo: string
}

export default function BannerContinent({ titulo }: BannerContinentProps) {
    const [isLargerThan715] = useMediaQuery('(min-width: 715px)')

    return (
        <Box
            backgroundImage="url('/europabanner.jpg')"
            backgroundSize="cover"
            backgroundPosition="bottom"
            height="500px"
        >
            <Container maxWidth="1160px" height="100%" position="relative">

                {
                    isLargerThan715
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