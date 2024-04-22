import { Chat } from "@/components/chat/chat";
import { ChatLayout } from "@/components/chat/chat-layout";
import { Sidebar } from "@/components/sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conversas | Cartas Misticas",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <main className="flex ">
      <Sidebar />
      <ChatLayout defaultLayout={undefined} navCollapsedSize={8} />
    </main>
  );
};

export default page;