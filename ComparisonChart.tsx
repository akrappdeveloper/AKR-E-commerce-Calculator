import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import type { CalculationResult } from "@shared/schema";

interface Props {
  result: CalculationResult;
}

export default function ComparisonChart({ result }: Props) {
  const data = [
    {
      name: "Commission",
      Flipkart: result.flipkart.commission,
      Amazon: result.amazon.commission,
      Meesho: result.meesho.commission,
    },
    {
      name: "Shipping",
      Flipkart: result.flipkart.shipping,
      Amazon: result.amazon.shipping,
      Meesho: result.meesho.shipping,
    },
    {
      name: "Tax",
      Flipkart: result.flipkart.tax,
      Amazon: result.amazon.tax,
      Meesho: result.meesho.tax,
    },
    {
      name: "Other Fees",
      Flipkart: result.flipkart.other,
      Amazon: result.amazon.other,
      Meesho: result.meesho.other,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Flipkart" fill="#2874f0" />
        <Bar dataKey="Amazon" fill="#ff9900" />
        <Bar dataKey="Meesho" fill="#EA4E87" />
      </BarChart>
    </ResponsiveContainer>
  );
}
