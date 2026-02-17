import { profileContent } from '../content/profileContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Compass, Target } from 'lucide-react';

export function FuturePlansSection() {
  const { futurePlans } = profileContent;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          Future Plans
        </h1>
        <p className="text-base text-muted-foreground">
          Goals and aspirations for the road ahead
        </p>
      </div>

      <div className="space-y-4">
        {futurePlans.map((plan, index) => (
          <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur transition-all hover:border-primary/20 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="mb-2 flex items-start justify-between gap-4">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {plan.goal}
                </CardTitle>
                <Badge 
                  variant="outline" 
                  className="shrink-0 border-primary/30 bg-primary/5 text-primary"
                >
                  {plan.timeframe}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {futurePlans.length === 0 && (
        <Card className="border-dashed border-primary/20 bg-muted/30">
          <CardContent className="py-12 text-center">
            <Target className="mx-auto mb-3 h-12 w-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              Your future plans will appear here. Edit the content in{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                frontend/src/content/profileContent.ts
              </code>
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
