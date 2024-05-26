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
import { Textarea } from "../ui/textarea";
import { Tag } from "../ui/tag/tag-input";
import { toast } from "../ui/use-toast";
import { EditProfileState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { axiosInstance } from "@/lib/axios";
import { EditProfileSchema } from "./schemas/editProfile";
import { IUser, useGetUser } from "@/hooks/useGetUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetOneUser } from "@/hooks/useGetOneUser";

interface ProfileData {
  firstName: string;
  lastName: string;
  bio: string;
  expertise: string;
  photo?: File;
}

const EditProfileForm = ({ user }: { user: IUser }) => {
  const [open, setOpen] = useRecoilState(EditProfileState);
  const [tags, setTags] = useState<Tag[]>([
    { id: "0", text: "Branding" },
    { id: "1", text: "UI/UX" },
    { id: "2", text: "Web-design" },
    { id: "3", text: "Packing" },
  ]);
  const { setUser } = useGetOneUser(user.id);
  const [file, setFile] = useState<File | undefined>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
    }
  };

  const form = useForm<z.infer<typeof EditProfileSchema>>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      bio: user?.bio,
      expertise: user?.expertise,
      photo: "",
    },
  });
  async function onSubmit(values: z.infer<typeof EditProfileSchema>) {
    setOpen(false);
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("bio", values.bio);
    formData.append("expertise", values.expertise);

    if (file) {
      formData.append("photo", file);
    }

    await axiosInstance
      .put(`/user/${user?.id}`, formData)
      .then((res) => {
        setUser(res.data)
       toast({
          title: "Perfil alterado com sucesso!",
        });
      })
      .catch((error) => {
        toast({
          title: "Erro ao atualizar o perfil",
          description:
            "Não foi possível atualizar o perfil. Tente novamente mais tarde.",
        });
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem className="w-full flex space-x-24">
              <Avatar className="object-cover w-12 h-12 rounded-full z-10 border border-gray-300 ">
                <AvatarImage
                  src={`${user?.photo}`}
                  alt="foto de perfil"
                ></AvatarImage>
                <AvatarFallback className="text-sm">{`${user?.firstName[0].toUpperCase()}${user?.lastName[0].toUpperCase()}`}</AvatarFallback>
              </Avatar>

              <FormControl>
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="text-xs h-9"
                  value={field.value}
                  onBlur={field.onBlur}
                  name={field.name}
                  onChange={(e) => {
                    field.onChange(e);
                    handleFileChange(e);
                  }}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center space-x-2 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs">Primeiro Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Vlado"
                    className="text-xs h-9"
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
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs">Apelido</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Santos"
                    className="text-xs h-9"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-xs">Expertise</FormLabel>
              <FormControl>
                <Input
                  placeholder="Santos"
                  className="text-xs h-9"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xs">Localização</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Descrição"
                      className="text-xs h-9"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
        {/* <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xs">Qualificações</FormLabel>
                  <FormControl>
                    <TagInput
                      {...field}
                      placeholder="Frontend"
                      tags={tags}
                      className="text-xs h-9"
                      setTags={(newTags) => {
                        setTags(newTags);
                        setValue("skills", newTags as [Tag, ...Tag[]]);
                      }}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-xs">Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descrição"
                  className="text-xs min-h-28"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-2">
          <Button type="submit" className="bg-first">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;
