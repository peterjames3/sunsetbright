import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex items-center justify-center ">
      <header className="space-y-3 text-center">
        <h3 className="text-9xl font-black text-textColor">404</h3>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-textColor">We can&apos;t find that resource.</p>
        <div className='mt-4 '>
            <Link href='/'
            className=' rounded-md bg-primary px-6 py-3 text-center text-sm text-foreground font-semibold transition-colors hover:bg-secondary hover:text-background delay-300'>
                Back to Home
            </Link>
        </div>
      </header>
    
    </section>
  );
}