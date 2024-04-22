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
import { FormWrapper } from ".";
import { Loader2 } from "lucide-react";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUserLoginDetails } from "@/lib/redux/features/user/userSlice";
const formSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
  password: z.string().min(8, {
    message: "password deve possuir pelo menos 8 caracteres",
  }),
});

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axiosInstance
      .post("/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        dispatch(setUserLoginDetails(...res.data()));
        router.push("/home");
      })
      .catch((err) => console.log(err));
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
                <Input placeholder="vlado@xyz.com" {...field} />
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
                <Input placeholder="" {...field} />
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
