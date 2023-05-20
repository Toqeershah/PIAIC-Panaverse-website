'use client'

import React from 'react'
import { Box, Container, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import log from '../../../public/Logo.png'

export default function Footer() {
  return (
    <Box bg='black'>
        <Container maxW={1300}>
            <SimpleGrid py='60px' templateColumns='repeat(4, 1fr)'>
                <Box>
                    <Heading pb='15px' color='white'>About Us</Heading>
                    <Image src={log} alt='panaverse-logo'></Image>
                    <Text textAlign='justify' pt='10px' color='white'>The Future of Web 3.O and Metaverse.</Text>
                </Box>
                <Box>
                    <Heading pr='' color='white'>Useful Links</Heading>
                    <Grid pt='40px' color='gray'>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Syllabus</Link>
                        <Link href='/'>Explore</Link>
                        <Link href='/'>About Us</Link>
                        <Link href='/'>Contact Us</Link>
                    </Grid>
                </Box>
                <Box>
                <Heading pr='' color='white'>Follow Us</Heading>
                    <Grid pt='40px' color='gray'>
                        <Link href='/'>Facebook</Link>
                        <Link href='/'>Twitter</Link>
                        <Link href='/'>Youtube</Link>
                        <Link href='/'>LinkedIn</Link>
                        <Link href='/'>GitHub</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading color='white'>Contact Us</Heading>
                    <Grid pt='40px' color='gray'>
                        <Link href='/'>+92 3456789</Link>
                        <Link href='/'>abghij@gmail.com</Link>
                        <Link href='/'>Lahore, Pakistan</Link>
                    </Grid>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
