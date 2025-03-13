import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">João da Silva</p>
          <p className="text-sm text-muted-foreground">Apartamento para alugar</p>
        </div>
        <div className="ml-auto font-medium">R$ 1.200,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Maria Santos</p>
          <p className="text-sm text-muted-foreground">Casa à venda</p>
        </div>
        <div className="ml-auto font-medium">R$ 450.000,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Pedro Oliveira</p>
          <p className="text-sm text-muted-foreground">Carro usado</p>
        </div>
        <div className="ml-auto font-medium">R$ 35.000,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ana Costa</p>
          <p className="text-sm text-muted-foreground">Serviços de limpeza</p>
        </div>
        <div className="ml-auto font-medium">R$ 150,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lucas Mendes</p>
          <p className="text-sm text-muted-foreground">Notebook usado</p>
        </div>
        <div className="ml-auto font-medium">R$ 2.500,00</div>
      </div>
    </div>
  )
}

