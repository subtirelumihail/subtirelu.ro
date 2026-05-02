import { QuickContactActions } from "@/components/quick-contact-actions";

export function MobileContactDock() {
  return (
    <nav
      aria-label="Quick contact and resume"
      className="border-border supports-[backdrop-filter]:bg-surface/80 fixed inset-x-0 bottom-0 z-50 border-t bg-surface/95 backdrop-blur-sm md:hidden"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center px-4 pt-3">
        <QuickContactActions variant="dock" className="w-full" />
      </div>
    </nav>
  );
}
