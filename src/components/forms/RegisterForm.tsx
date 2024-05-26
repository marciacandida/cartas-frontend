"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { setUserLoginDetails } from "@/lib/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "../ui/use-toast";
import { PasswordInput } from "../ui/PasswordInput";
const formSchema = z
  .object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(8, {
      message: "A password deve possuir pelo menos 8 caracteres",
    }),
    confirmPassword: z.string().min(8, {
      message: "A password deve possuir pelo menos 8 caracteres",
    }),
    birth_date: z.date({
      required_error: "Insira a sua data de nascimento",
    }),
    role: z.string({
      required_error: "Insira o seu tipo de usuário ",
    }),
    firstName: z.string({
      required_error: "Insira o seu primeiro nome ",
    }),
    lastName: z.string({
      required_error: "Insira o seu último nome ",
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "As passwords devem coincidir!",
      path: ["confirmPassword"],
    }
  );
// .refine(
//   async (values) => {
//     try {
//       const response = await axiosInstance.get(`/user/${values.email}`);
//       return !response.data.exists; // Se exists for false, o email é válido
//     } catch (error) {
//       console.error("Erro ao verificar o email:", error);
//       return false; // Em caso de erro, considere o email inválido
//     }
//   },
//   {
//     message: "Este email já está em uso",
//     path: ["email"],
//   }
// );
// .superRefine(({ confirmPassword, password }, checkPassComplexity) => {
//   const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
//   const containsLowercase = (ch: string) => /[a-z]/.test(ch);
//   const containsSpecialChar = (ch: string) =>
//     /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
//   let countOfUpperCase = 0,
//     countOfLowerCase = 0,
//     countOfNumbers = 0,
//     countOfSpecialChar = 0;
//   for (let i = 0; i < password.length; i++) {
//     let ch = password.charAt(i);
//     if (!isNaN(+ch)) countOfNumbers++;
//     else if (containsUppercase(ch)) countOfUpperCase++;
//     else if (containsLowercase(ch)) countOfLowerCase++;
//     else if (containsSpecialChar(ch)) countOfSpecialChar++;
//   }
//   if (
//     countOfLowerCase < 1 ||
//     countOfUpperCase < 1 ||
//     countOfSpecialChar < 1 ||
//     countOfNumbers < 1
//   ) {
//     checkPassComplexity.addIssue({
//       code: "custom",
//       message:
//         "Password deve possuir pelo menos um Letra maíscula, um numero e um caracter especial",
//     });
//   }
//   if (confirmPassword !== password) {
//     checkPassComplexity.addIssue({
//       code: "custom",
//       message: "The passwords did not match",
//     });
//   }
// });

export interface IUserResponse {
  user: {
    fistName: string;
    email: string;
    lastName: string;
    id: string;
  };
  token: string;
}

const RegisterForm = ({ role }: { role: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      role: role ? role.toUpperCase() : "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    await axiosInstance
      .post<IUserResponse>("/user", {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        type: values.role,
        birth_date: values.birth_date,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push("/home");
      })
      .catch((err) => {
        toast({
          title: "Erro ao cadastrar",
          description: err.response.data.message,
          variant: "destructive",
        });
      });

    setLoading(false);
  }
  const setUser = (data: IUserResponse) => {
    dispatch(
      setUserLoginDetails({
        firstMame: data.user.fistName,
        lastMame: data.user.lastName,
        id: data.user.id,
        email: data.user.email,
      })
    );
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex items-center justify-center space-x-2 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Primeiro Nome</FormLabel>
                <FormControl>
                  <Input placeholder="João" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Apelido</FormLabel>
                <FormControl>
                  <Input placeholder="Santos" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="birth_date"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Data de nascimento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de usuário</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de usuário" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CONSULTOR">Consultor</SelectItem>
                  <SelectItem value="CLIENT">Cliente</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
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
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
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

export default RegisterForm;
