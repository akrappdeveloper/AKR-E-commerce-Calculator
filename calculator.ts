import type { CalculatorInput, CalculationResult, PlatformFees } from "@shared/schema";

const PLATFORM_RATES = {
  flipkart: {
    baseCommission: 0.15,
    shippingMultiplier: 1.1,
    taxRate: 0.18,
    otherFees: 50,
  },
  amazon: {
    baseCommission: 0.18,
    shippingMultiplier: 1.2,
    taxRate: 0.18,
    otherFees: 75,
  },
  meesho: {
    baseCommission: 0.12,
    shippingMultiplier: 1.0,
    taxRate: 0.18,
    otherFees: 25,
  },
};

function calculatePlatformFees(input: CalculatorInput, rates: typeof PLATFORM_RATES.flipkart): PlatformFees {
  const commission = input.basePrice * rates.baseCommission;
  const shipping = input.shippingCost * rates.shippingMultiplier;
  const tax = commission * rates.taxRate;
  const other = rates.otherFees;
  
  const total = commission + shipping + tax + other;
  const finalPrice = input.basePrice + total;
  const profit = finalPrice - (input.basePrice + input.shippingCost + total);
  const profitMargin = (profit / finalPrice) * 100;

  return {
    commission,
    shipping,
    tax,
    other,
    total,
    finalPrice,
    profit,
    profitMargin,
  };
}

export function calculateFees(input: CalculatorInput): CalculationResult {
  return {
    flipkart: calculatePlatformFees(input, PLATFORM_RATES.flipkart),
    amazon: calculatePlatformFees(input, PLATFORM_RATES.amazon),
    meesho: calculatePlatformFees(input, PLATFORM_RATES.meesho),
  };
}
