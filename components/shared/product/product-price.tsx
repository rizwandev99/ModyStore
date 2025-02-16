import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const fixedValue = value.toFixed(2);
  const [intValue, floatValue] = fixedValue.split(".");

  return (
    <div className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </div>
  );
};

export default ProductPrice;
