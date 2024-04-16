import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const AuthForms = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AuthForms;
