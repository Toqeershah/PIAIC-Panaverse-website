'use client'

import React from 'react'
import HomeAll from '../Components/HomeAll'
import { Container, Box, Flex, Image, Heading, Text, Button } from '@chakra-ui/react'
import Instructors from '../Components/Instructors'
import { RevealList } from 'next-reveal'

export default function Pag() {
  return (
    <>
    <HomeAll title='About' src='https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?s=170667a&w=0&k=20&c=k_XfB4LHW8gKBmjL-aLvVM7XhpFwi4IuOZsT7fPQUjs=' />
    <Box mt='50px'>
      <Container maxW={1400}>
        <Flex my='50'>
          <Box flexBasis='50%'>
            <Image mx='auto' src='/president.jpg' alt='arif-alvi' />
          </Box>
          <Box flexBasis='50%'>
            <RevealList origin='right' interval={40} delay={500} duration={1000} distance='300px' reset={true}>
            <Heading>Dr. Arif Alvi</Heading>
            <Text mt='10px' pr='40px'>
              Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
            </Text>
            <Text mt='20px' pr='15px'>
              President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
            </Text>
            <Button colorScheme='teal' mt={5} size='md'>More Info</Button>
            </RevealList>
          </Box>
        </Flex>
      </Container>
    </Box>
    <Box mt='50px' bgColor='purple.400'>
      <Container maxW={1400}>
        <Flex my='50' gap='30px'>
          <Box flexBasis='50%'>
          <RevealList origin='right' interval={40} delay={500} duration={1000} distance='300px' reset={true}>
            <Heading>Panaverse DAO</Heading>
            <Text mt='10px' pr='40px' marginTop={5}>
              Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.
            </Text>
            <Text mt='10px' pr='40px' marginTop={10}>
              President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
            </Text>
            <Button mb='5' colorScheme='teal' mt={5} size='md'>More Info</Button>
          </RevealList>
          </Box>
          <Box flexBasis='50%'>
            <Image pt='50px' mx='auto' src='/panaverse-logo.png' alt='panaverse-logo' m='auto' width={400} height={300} />
          </Box>
        </Flex>
      </Container>
    </Box>

    <Box mt='50px'>
      <Container maxW={1400}>
        <Flex my='50'>
          <Box flexBasis='50%'>
            <Image mt='50px' mx='auto' src='/zia.jpg' alt='zia-khan' w={400} h={350} />
          </Box>
          <Box flexBasis='50%'>
            <RevealList delay={200} duration={2000} interval={60} distance='400px' reset={true}>
            <Heading>Mr. Zia Khan</Heading>
            <Text mt='10px' pr='40px'>
              CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.
            </Text>
            <Text mt='20px' pr='15px'>
              Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
            </Text>
            <Button colorScheme='teal' mt={5} size='md'>More Info</Button>
            </RevealList>
          </Box>
        </Flex>
      </Container>
    </Box>
    <Instructors />  
    </>
  )
}
