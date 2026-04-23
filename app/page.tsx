import Image from "next/image";
import Link from "next/link";
import ClientButton from "./components/ClientButton";
import { Badge } from "../components/ui/badge";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero with image */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <Badge variant="default">Healthcare made simple</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-slate-900">
              Book trusted doctors online, fast
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              Find specialists, choose a convenient time and get consultations
              from verified doctors — all from the comfort of your home.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <ClientButton action="start-booking" className="bg-blue-600 text-white px-5 py-3">
                Book Appointment
              </ClientButton>
              <Link href="/about" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-blue-700 hover:underline">
                Learn more
              </Link>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-3">
                <Image src="/logo-single.png" alt="logo" width={40} height={40} />
                <div>
                  <p className="text-sm font-medium">Verified Doctors</p>
                  <p className="text-xs text-slate-600">Thoroughly checked</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/globe.svg" alt="global" width={40} height={40} />
                <div>
                  <p className="text-sm font-medium">Global Access</p>
                  <p className="text-xs text-slate-600">Consult from anywhere</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="mx-auto max-w-md lg:max-w-none">
              <Image src="/banner2.png" alt="Banner" width={900} height={600} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900">Consultation packages</h2>
          <p className="mt-2 text-slate-600">Transparent pricing for common consultations.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-white p-6 text-center">
              <p className="text-sm text-slate-500">Basic</p>
              <p className="text-3xl font-extrabold mt-2">$50</p>
              <p className="mt-2 text-sm text-slate-600">15-minute phone consultation</p>
              <div className="mt-4">
                <ClientButton action="book-general" className="px-4 py-2">Choose</ClientButton>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <p className="text-sm text-slate-500">Standard</p>
              <p className="text-3xl font-extrabold mt-2">$100</p>
              <p className="mt-2 text-sm text-slate-600">30-minute video consultation</p>
              <div className="mt-4">
                <ClientButton action="video-consult" className="px-4 py-2">Choose</ClientButton>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <p className="text-sm text-slate-500">Premium</p>
              <p className="text-3xl font-extrabold mt-2">$500</p>
              <p className="mt-2 text-sm text-slate-600">Extended specialist consultation</p>
              <div className="mt-4">
                <ClientButton action="book-pediatrician" className="px-4 py-2">Choose</ClientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
          <p className="mt-2 text-slate-600">Simple steps to start your consultation.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-white p-6 text-center">
              <Image src="/file.svg" alt="profile" width={48} height={48} className="mx-auto" />
              <h3 className="mt-4 font-medium">Create your profile</h3>
              <p className="mt-2 text-sm text-slate-600">Add basic info and medical history.</p>
              <div className="mt-4">
                <ClientButton action="create-profile" className="px-4 py-2">Create profile</ClientButton>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <Image src="/window.svg" alt="book" width={48} height={48} className="mx-auto" />
              <h3 className="mt-4 font-medium">Book appointments</h3>
              <p className="mt-2 text-sm text-slate-600">Select time and specialist.</p>
              <div className="mt-4">
                <ClientButton action="start-booking" className="px-4 py-2">Book now</ClientButton>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <Image src="/globe.svg" alt="video" width={48} height={48} className="mx-auto" />
              <h3 className="mt-4 font-medium">Video consultation</h3>
              <p className="mt-2 text-sm text-slate-600">Secure video calls with your doctor.</p>
              <div className="mt-4">
                <ClientButton action="video-consult" className="px-4 py-2">Start call</ClientButton>
              </div>
            </div>
          </div>

          {/* extra features row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-white p-6 text-center">
              <h4 className="font-medium">Consultation credits</h4>
              <p className="text-sm text-slate-600 mt-2">Buy credits to use for multiple sessions.</p>
              <div className="mt-3">
                <ClientButton action="view-credits" className="px-4 py-2">View credits</ClientButton>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <h4 className="font-medium">Verified doctors</h4>
              <p className="text-sm text-slate-600 mt-2">Profiles with credentials and reviews.</p>
              <div className="mt-3">
                <ClientButton action="view-doctors" className="px-4 py-2">See doctors</ClientButton>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <h4 className="font-medium">Medical prescription</h4>
              <p className="text-sm text-slate-600 mt-2">Get prescriptions delivered to your inbox.</p>
              <div className="mt-3">
                <ClientButton action="view-prescription" className="px-4 py-2">View</ClientButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
