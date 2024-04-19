import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2 } from "lucide-react";
import { Button } from "../../ui/button";
import EditProfileForm from "../../forms/EditProfileForm";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DialogClose } from "@radix-ui/react-dialog";

const EditProfile = () => {
  const [open, setOpen] = useState<boolean>();
  return (
    <Dialog>
      <DialogTrigger
        className="absolute right-7 top-8"
        onClick={() => setOpen(true)}
      >
        <div className="p-[6px] border-[1.5px] border-pink-800 rounded-full">
          <Edit2 className="text-pink-800" size={15} />
        </div>
      </DialogTrigger>
      <DialogContent className="px-5">
        <DialogHeader>
          <DialogTitle className="text-base">Editar perfil</DialogTitle>
          <DialogDescription className="text-paragraph text-xs">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[400px] overflow-auto scrollbar-hide w-full px-1">
          <EditProfileForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
