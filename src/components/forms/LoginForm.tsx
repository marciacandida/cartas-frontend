"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { IUserResponse } from "./RegisterForm";
import { toast } from "../ui/use-toast";
import { PasswordInput } from "../ui/PasswordInput";
const formSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
  password: z.string().min(8, {
    message: "password deve possuir pelo menos 8 caracteres",
  }),
});

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axiosInstance
      .post<IUserResponse>("/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push("/home");
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: "Erro",
            description: err.response.data.message,
            variant: "destructive",
          });
        } else {
          setError("An unexpected error occurred");
        }
      });
    console.log(values);
    setLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="joao@exemplo.com" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-first" type="submit" disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Aguarde
            </span>
          ) : (
            <span>Entrar</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
