"use client";

import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import { useSearchParams } from "next/navigation";

const AuthForms = () => {
  const tabs = useSearchParams();
  const role = tabs.get("tab") || "";
  return (

    <Tabs defaultValue={role ? "register" : "account"} className="w-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Entrar</TabsTrigger>
        <TabsTrigger value="register">Registar</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="text-first">Entrar</CardTitle>
            <CardDescription>
              Insira as suas credenciais para poder entrar na aplicação
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle className="text-first">Entrar</CardTitle>
            <CardDescription>
              Insira as suas credenciais para poder entrar na aplicação
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <RegisterForm role={role} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    
  );
};

export default AuthForms;
