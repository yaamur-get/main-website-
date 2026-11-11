
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import SiteHeader from "@/components/SiteHeader";
import SiteBackground from "@/components/SiteBackground";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <div className="site-shell">
      {/* الخلفية المشتركة لجميع الصفحات */}
      <SiteBackground />

      {/* الموقع فوق الخلفية */}
      <div className="site-foreground">
        <SiteHeader />

        <main className="site-page-content pt-20">
          <Component {...pageProps} />
        </main>

        <Toaster />
      </div>
    </div>
  );
}
