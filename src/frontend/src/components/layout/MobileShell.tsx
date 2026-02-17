import { type ReactNode } from 'react';
import { getBuildDisplay } from '../../buildInfo';

interface MobileShellProps {
  children: ReactNode;
}

export function MobileShell({ children }: MobileShellProps) {
  return (
    <div className="relative min-h-screen w-full bg-background">
      {/* Background image with overlay for readability */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: 'url(/assets/generated/profile-bg.dim_1440x2560.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
        
        {/* Build identifier footer */}
        <div className="pb-20 pt-4">
          <div className="mx-auto max-w-2xl px-4">
            <p className="text-center text-xs text-muted-foreground/60">
              {getBuildDisplay()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
