import React from "react";
import {
  Container,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        bg="white"
        color="black"
        d="flex"
        justifyContent="center"
        textAlign="center"
        w="100%"
        m="15px 0 15px 0"
        p={3}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="2xl" fontFamily="work sans">
          Lets-Chat
        </Text>
      </Box>

      {/* Login/Sign up logic */}
      <Box
        bg="white"
        color="black"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        p={4}
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Sign-Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
