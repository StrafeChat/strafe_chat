"use client";

import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { AppPreview } from "@/app/components/app-preview";
import { FeaturesSection } from "@/app/components/features-section";
import { OpenSourceSection } from "@/app/components/open-source-section";
import { LegalSection } from "@/app/components/legal-section";
import { Download, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--color-primary), transparent 80%) 0%, transparent 60%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>
      <div className="relative z-10">
        <Navbar />

        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm border border-border bg-muted/50 backdrop-blur-sm rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">
                Open Source & Self-Hostable
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              <span className="text-primary">FOSS</span> and Free Speech
              <br />
              Done Right
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
              Connect with your community on a platform that respects your
              privacy and freedom. No tracking, no ads, just pure communication.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button
                size="lg"
                className="gap-2 rounded-full px-8 bg-primary hover:bg-primary-hover text-primary-foreground"
                onClick={() => router.push("/download")}
              >
                <Download className="size-4" />
                Download App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full px-8 bg-transparent border-border text-foreground hover:bg-muted"
                onClick={() => router.push("https://alpha.strafechat.dev")}
              >
                <Globe className="size-4" />
                Open Web
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  0
                </div>
                <div className="text-sm text-muted-foreground">Trackers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  E2E
                </div>
                <div className="text-sm text-muted-foreground">Encrypted</div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block mt-16 w-full max-w-5xl mx-auto">
            <AppPreview />
          </div>
        </section>

        <FeaturesSection />
        <OpenSourceSection />
        <LegalSection />

        <Footer />
      </div>
    </main>
  );
}
