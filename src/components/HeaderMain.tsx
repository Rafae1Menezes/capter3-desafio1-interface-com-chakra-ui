import { Center, Image } from "@chakra-ui/react";

export default function HeaderMain() {
  return (
    <Center h={{ base: '50px', md: '100px' }}>
      <Image src='/logo.svg' alt='logo' width={{ base: '81px', md: '184px' }} />
    </Center>
  )
}