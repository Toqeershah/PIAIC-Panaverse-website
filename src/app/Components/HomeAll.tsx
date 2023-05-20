import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'

export default function HomeAll(hello: any) {
  return (
    <Box bgImage={hello.src} py='200px' bgSize='cover' bgAttachment='fixed'>
        <Container maxW={1400}>
            <Heading color='black' size='3xl' >{hello.title}</Heading>
        </Container>
    </Box>
  )
}
