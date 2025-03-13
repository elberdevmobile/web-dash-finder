"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    anunciosPagos: 400,
    anunciosGratuitos: 240,
  },
  {
    name: "Fev",
    anunciosPagos: 300,
    anunciosGratuitos: 290,
  },
  {
    name: "Mar",
    anunciosPagos: 500,
    anunciosGratuitos: 350,
  },
  {
    name: "Abr",
    anunciosPagos: 450,
    anunciosGratuitos: 380,
  },
  {
    name: "Mai",
    anunciosPagos: 470,
    anunciosGratuitos: 410,
  },
  {
    name: "Jun",
    anunciosPagos: 580,
    anunciosGratuitos: 490,
  },
  {
    name: "Jul",
    anunciosPagos: 600,
    anunciosGratuitos: 520,
  },
  {
    name: "Ago",
    anunciosPagos: 650,
    anunciosGratuitos: 550,
  },
  {
    name: "Set",
    anunciosPagos: 700,
    anunciosGratuitos: 600,
  },
  {
    name: "Out",
    anunciosPagos: 750,
    anunciosGratuitos: 630,
  },
  {
    name: "Nov",
    anunciosPagos: 800,
    anunciosGratuitos: 680,
  },
  {
    name: "Dez",
    anunciosPagos: 850,
    anunciosGratuitos: 720,
  },
]

export function Overview() {
  return (
    <ChartContainer
      config={{
        anunciosPagos: {
          label: "Anúncios Pagos",
          color: "hsl(var(--chart-1))",
        },
        anunciosGratuitos: {
          label: "Anúncios Gratuitos",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
        <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
        <ChartTooltip content={<ChartTooltipContent indicator="bar" nameKey="name" showTotal={false} />} />
        <Bar dataKey="anunciosPagos" fill="var(--color-anunciosPagos)" radius={[4, 4, 0, 0]} className="fill-primary" />
        <Bar
          dataKey="anunciosGratuitos"
          fill="var(--color-anunciosGratuitos)"
          radius={[4, 4, 0, 0]}
          className="fill-primary/30"
        />
      </BarChart>
    </ChartContainer>
  )
}

