import Link from 'next/link';

export default function CreditsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Consultation Credits</h1>
        <p className="mt-4 text-slate-600">View and purchase consultation credits here.</p>
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
