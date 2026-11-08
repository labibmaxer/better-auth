'use client';

import React from 'react';
import { useState } from "react";
 import {Check, Eye, EyeSlash} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
const SignInPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log('form submitted with: ', userData);
        const {data , error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackUrl: "http://localhost:3000/dashboard" // optional, redirect after sign in
        })
        console.log('sign in response', {data, error});
    }
    return (
        <div>
            <h1>Please sign in </h1>
             <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                         
                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                      }
                      return null;
                    }}
                  >
                    <Label>Email</Label>
                    <Input name="email" placeholder="john@example.com" />
                    <FieldError />
                  </TextField>
                     <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
        />
        <InputGroup.Suffix className="pe-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>

                  <div className="flex gap-2">
                    <Button type="submit">
                      <Check />
                      Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                      Reset
                    </Button>
                  </div>
                </Form>
        </div>
    );
};

export default SignInPage;