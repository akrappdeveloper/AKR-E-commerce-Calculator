import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiFlipkart, SiAmazon } from "react-icons/si";
import type { PlatformFees } from "@shared/schema";

interface Props {
  platform: "flipkart" | "amazon" | "meesho";
  fees: PlatformFees;
}

const PLATFORM_COLORS = {
  flipkart: "text-[#2874f0]",
  amazon: "text-[#ff9900]",
  meesho: "text-[#EA4E87]",
};

const PLATFORM_ICONS = {
  flipkart: SiFlipkart,
  amazon: SiAmazon,
  meesho: () => <span className="text-xl font-bold">meesho</span>,
};

export default function PlatformCard({ platform, fees }: Props) {
  const Icon = PLATFORM_ICONS[platform];
  const colorClass = PLATFORM_COLORS[platform];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className={`h-6 w-6 ${colorClass}`} />
          <span className="capitalize">{platform}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-muted-foreground">Commission</span>
          <span className="font-medium">₹{fees.commission.toFixed(2)}</span>
          
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">₹{fees.shipping.toFixed(2)}</span>
          
          <span className="text-muted-foreground">Tax</span>
          <span className="font-medium">₹{fees.tax.toFixed(2)}</span>
          
          <span className="text-muted-foreground">Other Fees</span>
          <span className="font-medium">₹{fees.other.toFixed(2)}</span>
        </div>

        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Total Fees</span>
            <span className="font-bold text-lg">₹{fees.total.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Final Price</span>
            <span className={`font-bold text-lg ${colorClass}`}>₹{fees.finalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Profit Margin</span>
            <span className={`font-bold ${fees.profitMargin < 0 ? 'text-destructive' : 'text-green-600'}`}>
              {fees.profitMargin.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
