import Link from 'next/link'
import React from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import SignInButton from './SignInButton'

const MenuItems = (props: { href: string; children: string }) => (
  <Link href={props.href}>
    <a>
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {props.children}
      </Text>
    </a>
  </Link>
)

const Header = (props: {}) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justifyContent="center"
      justify="space-between"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex wrap="wrap" maxWidth="1200px" width="100%" padding="16px 16px">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" letterSpacing={'-.1rem'}>
            <Link href="/">myPantry</Link>
          </Heading>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems href="/users">Users</MenuItems>
          <MenuItems href="/boxes">Boxes</MenuItems>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        ></Box>
      </Flex>
    </Flex>
  )
}

export default Header
