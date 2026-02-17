import { profileContent } from '../content/profileContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export function PastYearsSection() {
  const { pastYears } = profileContent;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          Past Years
        </h1>
        <p className="text-base text-muted-foreground">
          A journey through my experiences and achievements
        </p>
      </div>

      <div className="space-y-4">
        {pastYears.map((entry, index) => (
          <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur transition-all hover:border-primary/20 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {entry.title}
                </CardTitle>
                <div className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{entry.year}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {pastYears.length === 0 && (
        <Card className="border-dashed border-primary/20 bg-muted/30">
          <CardContent className="py-12 text-center">
            <Calendar className="mx-auto mb-3 h-12 w-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              Your past experiences will appear here. Edit the content in{' '}
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
