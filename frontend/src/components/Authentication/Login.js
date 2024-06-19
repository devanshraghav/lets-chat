import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handlePassword = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGuestUser = (e) => {
    setEmail('guest@example.com');
    setPassword('123456');
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
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>

      <Button
        colorScheme="red"
        variant='solid'
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
