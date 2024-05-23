"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminData } from "./adminData";
import { adminTableTypes } from "../../../types/adminTableTypes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useForm } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import useGetUsers from "@/hooks/usuGetUsers";
import { IUser, useGetUser } from "@/hooks/useGetUser";
import { useRouter } from "next/navigation";

interface Filters {
  name: string;
  status: "all" | "paid" | "unpaid";
}

const formSchema = z.object({
  payment: z.string(),
});

export const Admin = () => {
  const user = useGetUser();
  const router = useRouter();

  const { users } = useGetUsers({ query: "CONSULTOR" });
  console.log(user.user?.email);
  useEffect(() => {
    if (user.user?.firstName.toLowerCase() !== "admin") {
      router.push("/auth?admin");
    }
  }, [router]);

  // const [filters, setFilters] = useState<Filters>({
  //   name: "",
  //   status: "all",
  // });

  // const handleFilterChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const filteredData = users.filter((item: IUser) => {
  //   return (
  //     (filters.name === "" ||
  //       item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
  //     (filters.status === "all" || item.status === filters.status)
  //   );
  // });

  const [dialog, setDialog] = useState<{
    open: boolean;
    id: string | null;
    name: string;
  }>({
    open: false,
    id: "",
    name: "",
  });

  const handlePaymentClick = (id: string) => {
    const consultant = users.find((item) => item.id === id);
    setDialog({
      open: true,
      id: id,
      name: consultant ? consultant.firstName : "",
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={cn("flex w-full mt-header justify-center")}>
      <div className="flex w-full lg:w-main flex-col items-center">
        <h1 className="text-black mt-10 dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight mb-10">
          Consultores
        </h1>

        {/* <div className="mb-5 flex space-x-4">
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Filtrar por nome"
            className="border p-2 rounded text-sm"
          />
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="border p-2 rounded text-sm"
          >
            <option value="all">Todos status</option>
            <option value="paid">Pago</option>
            <option value="unpaid">A pagar</option>
          </select>
        </div> */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Credito R$</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.balance}</TableCell>
                <TableCell className="font-semibold text-xs">
                  {item.balance <= 0 ? (
                    <span className="text-red-500">&#x2022; A pagar</span>
                  ) : (
                    <span className="text-green-500">&#x2022; Pago</span>
                  )}
                </TableCell>
                <TableCell>
                  {item.balance <= 0 ? (
                    <button
                      className="cursor-pointer"
                      onClick={() => handlePaymentClick(item.id)}
                    >
                      Pagar
                    </button>
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AlertDialog
          open={dialog.open}
          onOpenChange={(open) => setDialog({ ...dialog, open })}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Pagar {dialog.name}</AlertDialogTitle>
              <AlertDialogDescription>
                O seu id {dialog.id}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Form {...form}>
              <form
                className="space-y-3"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="flex items-center w-full 0 space-x-2">
                  <FormField
                    control={form.control}
                    name="payment"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder="12"
                            {...field}
                            type="number"
                            min={10}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span>R$</span>
                </div>

                <div className="flex w-full justify-between max-sm:justify-center space-x-3">
                  <button
                    onClick={() =>
                      setDialog({ open: false, id: null, name: "" })
                    }
                    className=" text-first text-sm font-medium transition-all border-2 border-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3"
                  >
                    Sair
                  </button>
                  <div className="flex space-x-2">
                    <button
                      className=" text-white text-sm  flex items-center font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3"
                      type="submit"
                    >
                      <span>Pagar</span>
                    </button>
                  </div>
                </div>
              </form>
            </Form>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
