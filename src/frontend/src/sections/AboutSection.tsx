import { profileContent } from '../content/profileContent';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  const { about } = profileContent;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      {/* Header with Avatar */}
      <div className="mb-8 flex flex-col items-center text-center">
        <Avatar className="mb-4 h-32 w-32 border-4 border-primary/10 shadow-lg">
          <AvatarImage 
            src="/assets/generated/profile-avatar.dim_512x512.png" 
            alt={about.name}
            className="object-cover"
          />
          <AvatarFallback className="bg-primary/5 text-2xl font-bold text-primary">
            {about.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {about.name}
        </h1>
        
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          {about.bio}
        </p>
      </div>

      {/* Highlights Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
        
        <div className="grid gap-3 sm:grid-cols-2">
          {about.highlights.map((highlight, index) => (
            <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur transition-all hover:border-primary/20 hover:shadow-md">
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary hover:bg-primary/15">
                    {highlight.category}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Attribution - adjusted spacing for global build footer */}
      <footer className="mt-12 border-t border-border pt-6 pb-2 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {about.name}. Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
