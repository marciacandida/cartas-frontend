"use client";

import { BookmarkIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import EditProfile from "./editProfile";
import EditPhoto from "./editPhoto";
import { skills } from "./skillsData";
import StarsRating from "./rating";
import ConsultoriasCard from "@/components/cards/consultoriasCard";
import { consultorias } from "./consultoriasData";
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
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { useGetRoom } from "@/hooks/useGetRoomrs";

const ConsultorProfile = ({ user_id }: { user_id: string }) => {
  const pathname = usePathname();
  const { toast } = useToast();
  const [rating, setrating] = useState<number>(7.5);
  const [time, setTime] = useState<number>(10);
  const { user } = useGetOneUser(user_id);
  const loggedUser = useGetUser();
  const router = useRouter();
  const { room } = useGetRoom(loggedUser.user?.id, user_id);
  const startConsultoring = async (mins: number) => {
    if (!loggedUser.user)
      return toast({
        title: "Usuário não autenticado",
        description: "efectue o login para poder começar uma consultoria",
      });
    console.log(loggedUser.user.balance);
    if (loggedUser.user.balance < mins)
      return toast({
        title: "Não tens creditos suficientess",
        description:
          "Aumente os seus crérditos para poder começar a consultoria",
      });

    if (room) {
      console.log("hello");
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
      .catch((error) => console.log(error));
  };
  return (
    <section className="flex items-center justify-center  mt-header">
      <div className="flex flex-col  mt-14 mb-10 max-lg:px-5 ">
        <div className="flex rounded-lg bg-gray-100 p-10 max-md:p-5 w-full lg:w-main  space-x-16 max-md:space-x-7 relative max-sm:flex-col max-sm:space-x-0 max-sm:space-y-5">
          <section className="lg:w-[500px] max-sm:justify-center max-sm:flex relative">
            <Avatar className="object-cover w-60 h-60 max-lg:w-40 max-lg:h-40 rounded-full z-10 border border-gray-300 ">
              <AvatarImage
                // src={
                //   "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                // }
                alt="foto de perfil"
              ></AvatarImage>
              <AvatarFallback className="text-3xl">{`${user?.firstName[0].toUpperCase()}${user?.lastName[0].toUpperCase()}`}</AvatarFallback>
            </Avatar>
            <EditPhoto />
          </section>
          <section>
            <div className="flex space-x-4 items-center max-md:flex-col-reverse max-md:items-start max-md:space-x-0 max-md:space-y-reverse max-md:space-y-2">
              <h1 className="font-semibold text-2xl max-md:text-xl">{`${user?.firstName} ${user?.lastName}`}</h1>
            </div>
            {pathname !== "/profile/consultant/user" ? (
              // <button className="text-paragraph font-semibold text-xs flex items-center space-x-1  absolute right-10 top-8">
              //   <BookmarkIcon className="w-4 h-4" />
              //   <span>Salvar</span>
              // </button>
              <></>
            ) : (
              <EditProfile />
            )}
            <p className="font-bold text-sm text-first mt-1 max-md:text-xs">
              Software Developer
            </p>
            <p className="text-paragraph text-sm font-normal mt-7 w-[90%]">
              {user?.bio}
            </p>

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
            <div className="flex w-full justify-end max-sm:justify-start">
              {user?.id === loggedUser.user?.id ? null : (
                <Dialog>
                  <DialogTrigger className=" text-white text-sm font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3">
                    Enviar mensagem
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Insira os minutos da tua sessão</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          required
                          min={10}
                          value={10}
                          onChange={(value) => setTime(Number(value.target))}
                        />
                        <span>min</span>
                      </div>
                      <DialogFooter>
                        <button
                          className=" text-white text-sm  flex items-center font-medium transition-all bg-first px-5 py-2 rounded-lg hover:bg- max-md:text-xs max-md:px-3"
                          onClick={() => startConsultoring(time)}
                        >
                          <span>Continuar</span>
                        </button>
                      </DialogFooter>
                    </div>
                  </DialogContent>
                </Dialog>
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
