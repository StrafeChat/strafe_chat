import { Shield, MessageSquare, Users } from "lucide-react";

export function LegalSection() {
  return (
    <section id="legal" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Legal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Transparency in everything we do, including our policies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="/privacy"
            className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 text-center"
          >
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <Shield className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Privacy Policy
            </h3>
            <p className="text-sm text-muted-foreground">
              How we handle your data
            </p>
          </a>

          <a
            href="/terms"
            className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 text-center"
          >
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <MessageSquare className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Terms of Service
            </h3>
            <p className="text-sm text-muted-foreground">Rules and guidelines</p>
          </a>

          <a
            href="/acceptable-use"
            className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 text-center"
          >
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <Users className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Acceptable Use
            </h3>
            <p className="text-sm text-muted-foreground">Community standards</p>
          </a>
        </div>
      </div>
    </section>
  );
}
