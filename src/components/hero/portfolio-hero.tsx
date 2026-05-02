import { HeroContactAside } from "./hero-contact-aside";
import { HeroIdentity } from "./hero-identity";
import { HeroNarrative } from "./hero-narrative";

interface PortfolioHeroProps {
  delayMs?: number;
}

export function PortfolioHero({ delayMs = 0 }: PortfolioHeroProps) {
  return (
    <header
      className="animate-enter space-y-10 lg:space-y-14"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <HeroIdentity />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">
        <HeroNarrative />
        <HeroContactAside />
      </div>
    </header>
  );
}

export default PortfolioHero;
