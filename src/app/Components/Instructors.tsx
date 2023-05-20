import { Container, Box, Center, Heading, SimpleGrid, Text, Image, Flex  } from '@chakra-ui/react'
import React from 'react'
import { data } from '../Components/InstructorData'

// interFace data: {
//     id: number,
//     src: string,
//     heading: string,
//     text: string
// }

export default function Instructors() {
  return (
    <Box>
        <Container maxW={1400}>
            <Center>
                <Heading textColor='purple.600' size='xl'>Our Shining Instructors</Heading>
            </Center>
            <Flex flexDir ='row'>
                {data.map((ins) => (
                    <Box mt='40px'>
                        <Center>
                         <Image borderRadius='full' width={100} height={100} src={ins.src} />
                        </Center>
                        <Heading size='md' textAlign='center'>{ins.heading}</Heading>
                        <Text px='40px' fontSize='sm' textAlign='center'>{ins.text}</Text>
                    </Box>
                ))}
            </Flex>
        </Container>
    </Box>
  )
}
