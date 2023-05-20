'use client'
import React from 'react'
import HomeAll from '../Components/HomeAll'
import { Box, Center, Container, Heading, Text, Flex } from '@chakra-ui/react'
import { cards} from '../Components/InstructorData'

export default function page() {
  return (
    <>
    <HomeAll title='Syllabus' src='https://thumbs.dreamstime.com/b/3d-render-study-room-modern-room-16439084.jpg' />
    <Box border='black 2px solid'>
      <Container maxW={1400}>
        <Center flexDir='column' pt='10'>
          <Heading size='2xl'>Course Syllabus</Heading>
          <Text mt='20px' textAlign='center' px='130px' >The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
        </Center>
        <Center flexDir='column' mt='20px'>
          <Heading>Common In All</Heading>
          <Text textAlign='center' pt='5px'>
          Every participant of the program will start by completing the following three core courses:
          </Text>
        </Center>
        <Center>
          <Flex mt='40px' gap='10px'>
           <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
             <Heading>Quarter I</Heading>
             <Text pt='8px'>
               CS-101: Object-Oriented Programming using TypeScript and Typescript for React
              </Text>
            </Box>
            <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
             <Heading>Quarter II</Heading>
             <Text pt='8px'>
               W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13
            </Text>
            </Box>
            <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
              <Heading>Quarter III</Heading>
              <Text pt='8px'>
               $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
              </Text>
            </Box>
          </Flex>
        </Center>
      </Container>


        <Container maxW={1400} bgSize='cover' bgAttachment='fixed' bgImage='https://png.pngtree.com/thumb_back/fh260/back_pic/03/76/25/9957be8d99793ea.jpg'>
          {cards.map((eleme) => (
              <Box pt='40px'>
                <Center flexDir='column' mt='50px'>
                  <Heading size='2xl'>{eleme.heading1}</Heading>
                  <Text mt='20px' textAlign='center' px='130px' >{eleme.text1}</Text>
                </Center>
                <Center>
                  <Flex mt='40px' gap='10px'>
                    <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' bgColor='white'>
                    <Heading>{eleme.heading2}</Heading>
                    <Text pt='8px'>{eleme.text2}</Text>
                   </Box>
                 <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' bgColor='white'>
                <Heading>{eleme.heading3}</Heading>
                <Text pt='8px'>{eleme.text3}</Text>
                  </Box>
                </Flex>
                </Center>
              </Box>
          ))}
        </Container>
    </Box>
    </>
  )
}