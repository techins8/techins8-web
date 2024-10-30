
import Nav from "./nav";


export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className="relative flex min-h-screen flex-col bg-[#fafaf9]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
      ></div>

      <div className="relative z-10 flex flex-grow flex-col">
        <Nav />

        <main className="container mx-auto flex-grow px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {children}
        </main>

        <footer className="py-4 text-center text-black sm:py-6">
          © 2024 TechIns8
        </footer>
      </div>
    </div>
  );
}
