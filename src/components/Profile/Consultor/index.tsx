"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import EditPhoto from "./editPhoto";
import { useGetOneUser } from "@/hooks/useGetOneUser";
import { useGetUser } from "@/hooks/useGetUser";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { useGetRoom } from "@/hooks/useGetRoomrs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRecoilState } from "recoil";
import { EditProfileState, MinutesState } from "@/lib/recoil";
import { BookmarkIcon, Edit2 } from "lucide-react";
import EditProfileForm from "@/components/forms/EditProfileForm";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  minutes: z.string(),
});

const ConsultorProfile = ({ user_id }: { user_id: string }) => {
  const pathname = usePathname();
  const { toast } = useToast();
  const [rating, setrating] = useState<number>(7.5);
  const [open, setOpen] = useRecoilState(EditProfileState);
  const [time, setTime] = useState<number>(10);
  const { user } = useGetOneUser(user_id);
  const loggedUser = useGetUser();
  const router = useRouter();
  const { room } = useGetRoom(user_id);
  const startConsultoring = async (mins: number) => {
    if (!loggedUser.user)
      return toast({
        title: "Usuário não autenticado",
        description: "efectue o login para poder começar uma consultoria",
      });
    if (loggedUser.user.balance < mins)
      return toast({
        title: "Não tens creditos suficientess",
        description:
          "Aumente os seus crérditos para poder começar a consultoria",
      });
    if (room) {
      return await axiosInstance
        .post("/update-room-expiry", {
          roomId: room.id,
          newExpiry: mins,
        })
        .then(() => router.push(`/chat/${user_id}`))
        .catch((err) => console.error(err));
    }
    await axiosInstance
      .post("/create-room", {
        clientId: loggedUser.user.id,
        consultorId: user_id,
        expiry: mins,
      })
      .then(() => router.push(`/chat/${user_id}`))
      .catch((error) => console.error(error));
  };
  const [minutes, setMinutes] = useRecoilState(MinutesState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      minutes: "10",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const minutesNumber = parseInt(values.minutes, 10);
    startConsultoring(minutesNumber);
  }

  return (
    <section className="flex items-center justify-center  mt-header">
      <div className="flex flex-col  mt-14 mb-10 max-lg:px-5 ">
        <div className="flex rounded-lg bg-gray-100 p-10 max-md:p-5 w-full lg:w-main  space-x-16 max-md:space-x-7 relative max-sm:flex-col max-sm:space-x-0 max-sm:space-y-5">
          <section className=" max-sm:justify-center max-sm:flex relative">
            <Avatar className="object-cover w-60 h-60 max-lg:w-40 max-lg:h-40 rounded-full z-10 border border-gray-300 ">
              {user ? (
                <>
                  <AvatarImage
                    src={`${user?.photo}`}
                    alt="foto de perfil"
                  ></AvatarImage>
                  <AvatarFallback className="text-3xl">{`${user?.firstName[0].toUpperCase()}${user?.lastName[0].toUpperCase()}`}</AvatarFallback>
                </>
              ) : (
                <Skeleton className="w-60 h-60 rounded-full bg-gray-400" />
              )}
            </Avatar>
          </section>
          <section className=" flex flex-col ">
            {user ? (
              <div>
                <div className="flex space-x-4 items-center max-md:flex-col-reverse max-md:items-start max-md:space-x-0 max-md:space-y-reverse max-md:space-y-2">
                  <h1 className="font-semibold text-2xl max-md:text-xl">{`${user?.firstName} ${user?.lastName}`}</h1>
                </div>
                {user?.id === loggedUser.user?.id && (
                  <Dialog open={open}>
                    <button
                      className="absolute right-7 top-8 max-sm:top-52"
                      onClick={() => setOpen(true)}
                    >
                      <div className="p-[6px] border-[1.5px] border-first rounded-full">
                        <Edit2 className="text-first" size={15} />
                      </div>
                    </button>
                    <DialogContent className="px-5">
                      <DialogHeader>
                        <DialogTitle className="text-base">
                          Editar perfil
                        </DialogTitle>
                      </DialogHeader>
                      <EditProfileForm user={user} />
                    </DialogContent>
                  </Dialog>
                )}

                <p className="font-bold text-sm text-first mt-1 max-md:text-xs">
                  Software engenheiro
                  {user?.expertise}
                </p>
                <p className="text-paragraph text-sm font-normal mt-5 mb-3 w-[90%]">
                  {user
                    ? user.bio
                    : "Clique no botão editar e adicione sua descrição"}
                </p>
              </div>
            ) : (
              <>
                <div className="flex space-x-4 items-center max-md:flex-col-reverse max-md:items-start max-md:space-x-0 max-md:space-y-reverse max-md:space-y-2">
                  <Skeleton className="w-48 rounded-full h-5 mt-[6px] bg-gray-400" />
                </div>
                <Skeleton className="w-36 h-[15px] mt-4 rounded-full bg-gray-400" />
              </>
            )}

            {/* <div className="mt-7 space-y-2">
              <p className="uppercase font-bold text-xs text-paragraph">
                rankings
              </p>
              <div className="flex  space-x-3">
                <p className="font-bold text-xl">{rating}</p>
                <div className="flex space-x-1">
                  <StarsRating percentage={rating} />
                </div>
              </div>
            </div> */}
            <div className="flex w-full max-sm:justify-start">
              {user && (
                <>
                  {user.id !== loggedUser.user?.id && (
                    <Dialog>
                      <DialogTrigger className=" text-white text-sm font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg-first/80 max-md:text-xs max-md:px-3">
                        Enviar mensagem
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Insira os minutos da tua sessão
                          </DialogTitle>
                        </DialogHeader>
                        <Form {...form}>
                          <form
                            className="space-y-3"
                            onSubmit={form.handleSubmit(onSubmit)}
                          >
                            <div className="flex items-center w-full 0 space-x-2">
                              <FormField
                                control={form.control}
                                name="minutes"
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
                              <span>min</span>
                            </div>
                            <DialogFooter>
                              <button className=" text-white text-sm  flex items-center font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3">
                                <span>Continuar</span>
                              </button>
                            </DialogFooter>
                          </form>
                        </Form>
                      </DialogContent>
                    </Dialog>
                  )}
                </>
              )}
            </div>
            {/* <div className="mt-10">
              <h1 className="text-xl font-semibold">Consultorias</h1>
              <div className="space-y-3 mt-5 ">
                {consultorias.map((data) => (
                  <ConsultoriasCard data={data} />
                ))}
              </div>
            </div> */}
          </section>
        </div>
      </div>
    </section>
  );
};

export default ConsultorProfile;
