'use client'

import { Box, Container, SimpleGrid, Flex, Button, MenuButton, IconButton, MenuList, Menu, MenuItem,  } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../../public/Logo.png'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <Box boxShadow='dark-lg'>
        <Container maxW={1400}>
            <SimpleGrid templateColumns='repeat(3, 1fr)'>
                <Box>
                    <Image src={logo} alt='panaverse-logo'></Image>
                </Box>
                <Flex color='black' placeItems='center' fontSize={18} fontWeight='semibold' fontStyle='' gap={20}>
                    <Link href='/'>Home</Link>
                    <Link href='/syllabus'>Syllabus</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/explore'>Explore</Link>
                </Flex>
                <Box display={{lg: 'initial', base: 'none'}}>
                    <Button mt='20px' float='right' colorScheme='teal' size='lg' >Register</Button>
                </Box>
                <Box display={{lg: 'initial', base: 'initial'}}>
                    <Menu>
                        <MenuButton
                         as={IconButton}
                         aria-label='Options'
                         icon={<HamburgerIcon />}
                         variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                              Home
                            </MenuItem>
                            <MenuItem>
                                Syllabus
                            </MenuItem>
                            <MenuItem>
                                Explore
                            </MenuItem>
                            <MenuItem>
                                About Us
                            </MenuItem>
                            <MenuItem>
                                Contact Us
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
