import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Download", "Changelog", "Discord"],
  Resources: ["Documentation", "API Reference", "Community", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Acceptable Use"],
};

const legalPaths: Record<string, string> = {
  "Privacy Policy": "/privacy",
  "Terms of Service": "/terms",
  "Acceptable Use": "/acceptable-use",
  Download: "/download",
  Discord: "https://discord.gg/XPyjQXaXKG",
  Features: "#features",
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/favicon.ico"
                alt="Strafe Logo"
                width={32}
                height={32}
              />
              <span className="font-semibold text-foreground">Strafe</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 text-pretty">
              FOSS and Free Speech done right.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://discord.gg/XPyjQXaXKG"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Discord"
              >
                <svg
                  className="size-5"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                        fill="#5865F2"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link
                href="https://github.com/StrafeChat"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </Link>
              <Link
                href="https://x.com/strafechat"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 462.799"
                  fill="currentColor"
                >
                  <path
                    fillRule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={legalPaths[link] || "#"}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Strafe. Open source under GNU Affero
            General Public License v3.0.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              Made with{" "}
              <Image
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f95e.svg"
                alt="pancake"
                width={14}
                height={14}
                className="inline-block w-3.5 h-3.5"
              />{" "}
              and{" "}
              <Image
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2764.svg"
                alt="heart"
                className="inline-block w-3.5 h-3.5"
                width={14}
                height={14}
              />{" "}
              by{" "}
              <Link
                href="https://pancake.wtf"
                className="underline hover:text-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pancake
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
