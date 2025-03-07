import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { calculateFees } from "@/lib/calculator";
import type { CalculatorInput, CalculationResult } from "@shared/schema";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import PlatformCard from "@/components/calculator/PlatformCard";
import ComparisonChart from "@/components/calculator/ComparisonChart";

export default function Calculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (data: CalculatorInput) => {
    const fees = calculateFees(data);
    setResult(fees);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <CalculatorForm onCalculate={handleCalculate} />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {result && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PlatformCard platform="flipkart" fees={result.flipkart} />
                  <PlatformCard platform="amazon" fees={result.amazon} />
                  <PlatformCard platform="meesho" fees={result.meesho} />
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <ComparisonChart result={result} />
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
