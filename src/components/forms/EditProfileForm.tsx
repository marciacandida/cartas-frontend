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
const formSchema = z.object({
  profile: z.string({
    required_error: "insira a sua foto de perfil",
  }),
  firstName: z.string({
    required_error: "insira o seu primeiro nome",
  }),
  lastName: z.string({
    required_error: "insira o seu ultimo nome",
  }),
  // location: z.string({
  //   required_error: "insira a sua localização",
  // }),
  expertise: z.string({
    required_error: "insira a sua expertise",
  }),
  description: z.string({
    required_error: "insira a sua descrição",
  }),
});

const EditProfileForm = () => {
  const [open, setOpen] = useRecoilState(EditProfileState);
  const [tags, setTags] = useState<Tag[]>([
    { id: "0", text: "Branding" },
    { id: "1", text: "UI/UX" },
    { id: "2", text: "Web-design" },
    { id: "3", text: "Packing" },
  ]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile: "",
      firstName: "Kelvin",
      lastName: "Celso",
      // location: "Ho Chi Minh City",
      expertise: "Software Developer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illo id quod. Explicabo necessitatibus porro dolore odit! Laboriosam architecto minima, impedit deserunt dolores cumque quas deleniti suscipit odio quibusdam ipsam.",
    },
  });
  const { setValue } = form;
  function onSubmit(values: z.infer<typeof formSchema>) {
    setOpen(false);
    toast({
      title: "Perfil alterado com sucesso!",
    });
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="profile"
          render={({ field }) => (
            <FormItem className="w-full flex space-x-2">
              <img
                src={
                  "https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
                }
                alt="foto de perfil"
                width={50}
                height={50}
                className="rounded-full"
              />
              <FormControl>
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="text-xs h-9"
                  {...field}
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
          name="description"
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
