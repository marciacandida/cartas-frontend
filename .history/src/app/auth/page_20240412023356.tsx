import LoginForm from "@/components/forms/LoginForm";
import AuthForms from "@/components/screens/AuthForms";
import React from "react";

const Auth = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <p className="text-xl">
        <span className="text-pink-800">Ciganos</span> Encantados
      </p>
      <AuthForms />
    </div>
  );
};

export default Auth;
