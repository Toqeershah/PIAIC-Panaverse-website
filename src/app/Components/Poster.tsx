import React from 'react'
import { Box, Container, Flex, Heading, Text, Button } from '@chakra-ui/react'
import iot from '../../../public/logo2.webp'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'

export default function Poster() {
  return (
    <>
    <Box bgAttachment='fixed' bgImage='https://static.vecteezy.com/system/resources/previews/002/317/704/original/abstract-wavy-background-in-purple-color-free-vector.jpg'>
        <RevealWrapper delay={200} duration={2000} distance='400px' reset={true}>
        <Container maxW={1400}>
            <Flex pt='150px' pb='100px' px='40px'>
                <Box flexBasis='50%'>
                    <Heading color='white' size='2xl'>Prepare yourself and your coming race for next Generation of Internet with PIAIC</Heading>
                    <Text pr='50px' size='xl' mt='40px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies.</Text>
                    <Button size='lg' colorScheme='teal' mt='30px'>Find More</Button>
                </Box>
                <Box flexBasis='50%'>
                    <Image src={iot} alt='metaimage' width='900' height='200' />
                    </Box>
            </Flex>
        </Container>
        </RevealWrapper>
    </Box>

    <Box>
        <Container maxW={1400}>
            <Flex gap='100px'>
                <Box flexBasis='50%'>
                <RevealWrapper origin='right' delay={200} duration={2000} distance='400px' reset={true}>
                  <Image src={iot} alt='metaimage' width='400' height='200' />
                </RevealWrapper>
                </Box>

                <Box flexBasis='50%' pt='50px'>
                <RevealWrapper origin='left' delay={200} duration={2000} distance='400px' reset={true}>
                    <Heading size='2xl'>Program Of Studies</Heading>
                    <Text pr='50px' pt='40px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mt='30px' size='lg' colorScheme='purple' >Read More</Button>
                </RevealWrapper>
                </Box>
            </Flex>
        </Container>
    </Box>

    <Box bgColor='purple.400'>
        <Container maxW={1400}>
            <Flex gap='100px'>
                <Box flexBasis='50%' pt='50px'>
                    <RevealWrapper origin='left' delay={200} duration={2000} distance='350px' reset={true}>
                    <Heading size='2xl'>Program Of Studies</Heading>
                    <Text pr='50px' pt='40px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mt='30px' size='lg' colorScheme='teal' >Read More</Button>
                    </RevealWrapper>
                </Box>
                <Box flexBasis='50%'>
                    <RevealWrapper origin='left' delay={200} duration={2000} distance='350px' reset={true}>
                      <Image src={iot} alt='metaimage' width='400' height='200' />
                    </RevealWrapper>
                </Box>
                
            </Flex>
        </Container>
    </Box>
    </>
  )
}
