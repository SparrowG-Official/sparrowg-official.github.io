import { Bird } from "lucide-react";
export const SparrowLogo = ({
  className = ""
}: {
  className?: string;
}) => {
  return <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
          <Bird className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse-soft" />
      </div>
      <span className="text-xl font-bold text-primary-foreground">
        Sparrow<span className="text-primary">G</span>
      </span>
    </div>;
};