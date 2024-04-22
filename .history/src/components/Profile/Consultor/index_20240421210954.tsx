"use client";

import { BookmarkIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import EditProfile from "./editProfile";
import EditPhoto from "./editPhoto";
import { skills } from "./skillsData";
import StarsRating from "./rating";
import ConsultoriasCard from "@/components/cards/consultoriasCard";
import { consultorias } from "./consultoriasData";
import { useGetOneUser } from "@/hooks/useGetOneUser";

const ConsultorProfile = ({ user_id }: { user_id: string }) => {
  const pathname = usePathname();
  const [rating, setrating] = useState<number>(7.5);
  const { user } = useGetOneUser(user_id);

  return (
    <section className="flex items-center justify-center  mt-header">
      <div className="flex flex-col  mt-14 mb-10">
        <div className="flex rounded-lg bg-gray-100 p-10 w-main space-x-16 relative">
          <section className="w-[500px] relative">
            <img
              src={
                "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
              }
              alt="foto de perfil"
              width={150}
              height={150}
              className="rounded-full w-full"
            />
            <EditPhoto />
          </section>
          <section>
            <div className="flex space-x-4 items-center ">
              <h1 className="font-semibold text-2xl">{`${user?.firstName} ${user?.lastName}`}</h1>
              <p className="text-paragraph flex items-center space-x-1 text-xs font-medium">
                <MapPin className="w-4 h-4" />
                <span>Ho Chi Minh City</span>
              </p>
            </div>
            {pathname !== "/profile/consultant/user" ? (
              <button className="text-paragraph font-semibold text-xs flex items-center space-x-1  absolute right-7 top-8">
                <BookmarkIcon className="w-4 h-4" />
                <span>Salvar</span>
              </button>
            ) : (
              <EditProfile />
            )}
            <p className="font-bold text-sm text-first mt-1">
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
            {pathname !== "/profile/consultant/user" && (
              <Link
                href={`/chat/${user_id}`}
                className=" text-white text-sm font-medium transition-all bg-first px-5 py-2 rounded-lg absolute right-7 top-52 hover:bg-first"
              >
                Enviar mensagem
              </Link>
            )}
            <div className="mt-16">
              <h1 className="text-xl font-semibold">Consultorias</h1>
              <div className="space-y-3 mt-5 ">
                {consultorias.map((data) => (
                  <ConsultoriasCard data={data} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ConsultorProfile;
