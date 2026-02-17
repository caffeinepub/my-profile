import { useState } from 'react';
import { MobileShell } from './components/layout/MobileShell';
import { BottomNav } from './components/navigation/BottomNav';
import { AboutSection } from './sections/AboutSection';
import { PastYearsSection } from './sections/PastYearsSection';
import { FuturePlansSection } from './sections/FuturePlansSection';

type Section = 'about' | 'past' | 'future';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  return (
    <MobileShell>
      <div className="flex-1 overflow-y-auto pb-20">
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'past' && <PastYearsSection />}
        {activeSection === 'future' && <FuturePlansSection />}
      </div>
      <BottomNav activeSection={activeSection} onSectionChange={setActiveSection} />
    </MobileShell>
  );
}

export default App;
