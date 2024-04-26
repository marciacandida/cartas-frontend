"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

const AuthForms = () => {
  const [activeTab, setActiveTab] = useState<"account" | "register">("account");
  const handleTabChange = (tab: "account" | "register") => {
    setActiveTab(tab);
  };
  return (
    <Tabs defaultValue={activeTab} className="w-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" onClick={() => handleTabChange("account")}>
          Entrar
        </TabsTrigger>
        <TabsTrigger
          value="register"
          onClick={() => handleTabChange("register")}
        >
          Registar
        </TabsTrigger>
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
            <RegisterForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AuthForms;
