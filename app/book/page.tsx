import Link from 'next/link';

export default function BookPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Book an Appointment</h1>
        <p className="mt-4 text-slate-600">This is a placeholder booking page. Implement booking flow here.</p>
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
