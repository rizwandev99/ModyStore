import { ThemeProvider } from "next-themes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen w-full items-center justify-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}