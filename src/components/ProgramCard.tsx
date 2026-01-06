import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, BookOpen, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  audience: string[];
  curriculum: string[];
  duration: string;
  ageGroup?: string;
  pricingTiers: PricingTier[];
  onEnroll: (program: string, tier: string) => void;
}

export const ProgramCard = ({
  title,
  description,
  icon: IconComponent,
  color,
  gradient,
  audience,
  curriculum,
  duration,
  ageGroup,
  pricingTiers,
  onEnroll,
}: ProgramCardProps) => {
  return (
    <Card variant="elevated" className={`overflow-hidden bg-gradient-to-br ${gradient}`}>
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-8 border-b border-border/50">
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center flex-shrink-0`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {audience.map((aud, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {aud}
                  </Badge>
                ))}
                {ageGroup && (
                  <Badge variant="outline" className="text-xs">
                    {ageGroup}
                  </Badge>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="p-8 border-b border-border/50 bg-background/30">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Curriculum Highlights
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="p-8">
          <h4 className="font-semibold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Choose Your Plan
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative rounded-xl p-5 border transition-all hover:shadow-lg ${
                  tier.popular
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-background/50"
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-4">
                  <h5 className="font-semibold mb-1">{tier.name}</h5>
                  <div className="text-2xl font-bold text-primary">{tier.price}</div>
                  <p className="text-xs text-muted-foreground">{tier.duration}</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full group"
                  onClick={() => onEnroll(title, tier.name)}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
