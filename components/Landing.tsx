import React from "react";
import Link from "next/link";
import { Box, Text, Image } from "@chakra-ui/react";
import SignInButton from "../components/SignInButton";

const Landing = () => {
  return (
    <Box
      backgroundImage="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('background.jpg')"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      backgroundRepeat="no-repeat"
    >
      <Box padding="20px">
        <Link href="/privacy" as="/privacy">
          <a>
            <Text color="white" textAlign="right">
              プライバシーポリシー
            </Text>
          </a>
        </Link>
      </Box>
      <Box
        backgroundImage="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('background.jpg')"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
        align="center"
        width="100%"
        paddingTop="100px"
      >
        <Image src="logo.png" alt="myPantry" maxHeight="80px" />
        <Text color="white" marginTop="50px">
          myPantry は冷蔵庫の中身を管理し、家族で共有するためのサービスです。
        </Text>
        <Box paddingY="50px">
          <SignInButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
