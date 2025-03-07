import { z } from "zod";

export const calculatorSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  basePrice: z.number().min(0, "Base price must be positive"),
  weight: z.number().min(0, "Weight must be positive"),
  category: z.enum(["Electronics", "Fashion", "Home", "Beauty", "Other"]),
  shippingCost: z.number().min(0, "Shipping cost must be positive"),
});

export type CalculatorInput = z.infer<typeof calculatorSchema>;

export interface PlatformFees {
  commission: number;
  shipping: number;
  tax: number;
  other: number;
  total: number;
  finalPrice: number;
  profit: number;
  profitMargin: number;
}

export interface CalculationResult {
  flipkart: PlatformFees;
  amazon: PlatformFees;
  meesho: PlatformFees;
}
