import React, { useState } from "react";
import Container, { FlexCol } from "../../../components/ui/container/Container";
import { H1 } from "../../../components/ui/text/Heading";
import InputField from "../../../components/ui/inputField";
import Button from "../../../components/ui/Button";

const ForgetPassword: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  return (
    <Container className="mx-auto">
      <FlexCol>
        <H1>Forget Password</H1>
        <InputField
          name="email"
          type="email"
          placeholder="Your Email"
          handler={handleForm}
          className="w-96 mt-5"
        />

        <Button className="flex justify-start ms-2 mt-5">
          Forget Password
        </Button>
      </FlexCol>
    </Container>
  );
};

export default ForgetPassword;
