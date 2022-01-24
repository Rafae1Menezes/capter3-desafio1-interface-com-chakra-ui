import { Center, Container, Image, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderMainProps {
  withBackButton?: boolean
}

export default function HeaderMain({ withBackButton = false }: HeaderMainProps) {
  const [isLargerThan715] = useMediaQuery('(min-width: 715px)')

  return (
    <Container maxWidth="1160px" h={{ base: '50px', md: '100px' }} position="relative">
      <Center h={{ base: '50px', md: '100px' }}>
        {withBackButton && (
          <Link href="/" passHref>
            <a>
              {
                isLargerThan715
                  ? <Image src='/voltar1.png' alt='voltar' position="absolute" top="35px  " left="15" />
                  : <Image src='/voltar-mobile.png' alt='voltar' position="absolute" top="19px  " left="15" />
              }
            </a>
          </Link>
        )}
        {
          withBackButton
            ? <Link href="/" passHref ><a><Image src='/logo.svg' alt='logo' width={{ base: '81px', md: '184px' }} /></a></Link>
            : <Image src='/logo.svg' alt='logo' width={{ base: '81px', md: '184px' }} />
        }
      </Center>
    </Container>
  )
}