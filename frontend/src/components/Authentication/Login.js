import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

  const handlePassword = () => setShow(!show);

  const handleSubmit = async () => {
    setIsLoading(true);

    if (!email || !password) {
      toast({
        title: "Please enter email id or password",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    try {
      const config = {
        header: {
          "content-type": "application/json",
        },
      };
      const data = await axios.post(
        "api/user/login",
        { email, password },
        config
      );

      console.log(data);

      toast({
        title: "Login Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
      navigate("/chats");

    } catch (error) {
      console.log(error);
    }
  };

  const handleGuestUser = (e) => {
    setEmail("guest@example.com");
    setPassword("123456");
  };

  return (
    <VStack spacing="4">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your Password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handlePassword}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        isLoading={loading}
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>

      <Button
        colorScheme="red"
        variant="solid"
        width="100%"
        style={{ marginTop: 1 }}
        onClick={handleGuestUser}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
