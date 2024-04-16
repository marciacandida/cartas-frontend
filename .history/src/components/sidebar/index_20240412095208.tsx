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
              Pagina Principal
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Comprar Créditos
            </Button>
          </div>
        </div>

        <div className="py-2">
          <h2 className="relative px-6 text-lg font-semibold tracking-tight">
            Conversas
          </h2>
          <ScrollArea className="h-[300px] px-2">
            <div className="space-y-1 p-2">
              {/* {playlists?.map((playlist) => ( */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start font-normal"
              >
                Kelvin
                {/* <ListMusic className="mr-2 h-4 w-4" /> */}
                {/* {playlist} */}
              </Button>
              {/* ))} */}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
