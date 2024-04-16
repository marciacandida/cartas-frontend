import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface ISidbar {
  className?: string;
}

export function Sidebar({ className }: ISidbar) {
  return (
    <div className={cn("pb-12 w-[20%] text-pink-800 ")}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Navegação
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Browse
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              {/* <ListMusic className="mr-2 h-4 w-4" /> */}
              something
            </Button>
          </div>
        </div>

          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
