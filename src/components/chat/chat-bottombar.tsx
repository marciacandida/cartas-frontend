import { FileImage, Paperclip, SendHorizontal } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { Textarea } from "../ui/textarea";
import { EmojiPicker } from "./emoji-picker";
import { IMessage } from "@/hooks/useGetMessages";
import { useGetUser } from "@/hooks/useGetUser";

interface ChatBottombarProps {
  sendMessage: (newMessage: IMessage) => void;
  isMobile: boolean;
  id: string;
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({ sendMessage, id }: ChatBottombarProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { user } = useGetUser();
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (!user) return;
    if (message.trim()) {
      const newMessage: IMessage = {
        from: user?.id,
        to: id,
        message: message.trim(),
      };
      sendMessage(newMessage);
      setMessage("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };

  return (
    <div className="p-2 flex justify-between   items-center gap-2 absolute bottom-0 left-0 lg:left-64 right-0">
      <AnimatePresence initial={false}>
        <EmojiPicker
          onChange={(value) => {
            setMessage(message + value);
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        />

        <Textarea
          autoComplete="off"
          value={message}
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          name="message"
          placeholder="Digite aqui....."
          className=" w-full border rounded-lg flex items-center h-5 resize-none overflow-hidden focus:border-transparent focus:outline-none outline-none"
        />

        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-9 w-9",
            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0"
          )}
          onClick={handleSend}
        >
          <SendHorizontal size={20} className="text-muted-foreground" />
        </Link>
      </AnimatePresence>
    </div>
  );
}
