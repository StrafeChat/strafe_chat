import { ArrowLeft, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>

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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Download Strafe App
        </h1>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl">
          Experience Strafe on your desktop or mobile device. Click the button
          below to download the latest version of the Strafe app.
        </p>

        <Button
          size="lg"
          className="gap-2 px-12 py-5 rounded-full relative overflow-hidden disabled:cursor-not-allowed! bg-primary hover:bg-primary-hover text-primary-foreground"
          disabled
        >
          <Download className="size-5 " />
          Coming Soon
        </Button>
      </div>
    </main>
  );
}
