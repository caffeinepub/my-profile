import { User, Clock, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Section = 'about' | 'past' | 'future';

interface BottomNavProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function BottomNav({ activeSection, onSectionChange }: BottomNavProps) {
  const navItems = [
    { id: 'about' as Section, label: 'About Me', icon: User },
    { id: 'past' as Section, label: 'Past Years', icon: Clock },
    { id: 'future' as Section, label: 'Future Plans', icon: Compass }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-2xl items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className={`flex min-h-[3rem] flex-col items-center gap-1 px-4 py-2 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
