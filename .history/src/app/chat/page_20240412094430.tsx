import { Chat } from "@/components/chat/chat";
import { ChatLayout } from "@/components/chat/chat-layout";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const page = () => {
  return (
    <main>
      <Sidebar className="w-[30%] fixed" />
      <ChatLayout defaultLayout={undefined} navCollapsedSize={8} />
    </main>
  );
};

export default page;
