
import Nav from "./nav";


export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className="relative flex min-h-screen flex-col bg-[#1A110D]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/illustrations/test-dots.svg")',
          opacity: 0.1, // Ajustez cette valeur pour la visibilité du motif
        }}
      ></div>

      <div className="relative z-10 flex flex-grow flex-col">
        <Nav />

        <main className="container mx-auto flex-grow px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {children}
        </main>

        <footer className="bg-[#1A110D] bg-opacity-50 py-4 text-center text-white sm:py-6">
          © 2024 TechIns8
        </footer>
      </div>
    </div>
  );
}
