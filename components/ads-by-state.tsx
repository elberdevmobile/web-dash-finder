"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "SP",
    total: 1200,
  },
  {
    name: "RJ",
    total: 900,
  },
  {
    name: "MG",
    total: 800,
  },
  {
    name: "RS",
    total: 600,
  },
  {
    name: "PR",
    total: 550,
  },
  {
    name: "BA",
    total: 500,
  },
  {
    name: "SC",
    total: 450,
  },
  {
    name: "GO",
    total: 400,
  },
  {
    name: "PE",
    total: 350,
  },
  {
    name: "CE",
    total: 300,
  },
  {
    name: "DF",
    total: 280,
  },
  {
    name: "ES",
    total: 250,
  },
  {
    name: "MT",
    total: 220,
  },
  {
    name: "MS",
    total: 200,
  },
  {
    name: "AM",
    total: 180,
  },
  {
    name: "PA",
    total: 170,
  },
  {
    name: "MA",
    total: 150,
  },
  {
    name: "PB",
    total: 140,
  },
  {
    name: "RN",
    total: 130,
  },
  {
    name: "AL",
    total: 120,
  },
  {
    name: "PI",
    total: 110,
  },
  {
    name: "SE",
    total: 100,
  },
  {
    name: "RO",
    total: 90,
  },
  {
    name: "TO",
    total: 80,
  },
  {
    name: "AC",
    total: 70,
  },
  {
    name: "AP",
    total: 60,
  },
  {
    name: "RR",
    total: 50,
  },
]

export function AdsByState() {
  return (
    <ChartContainer
      config={{
        total: {
          label: "Total de Anúncios",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[400px]"
    >
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 5,
          right: 10,
          left: 50,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
        <ChartTooltip content={<ChartTooltipContent indicator="bar" nameKey="name" showTotal={false} />} />
        <Bar dataKey="total" fill="var(--color-total)" radius={[0, 4, 4, 0]} className="fill-primary" />
      </BarChart>
    </ChartContainer>
  )
}

