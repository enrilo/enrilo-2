// "use client";

// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

// export default function ContactUs() {
//   const [state, handleSubmit] = useForm("mredebve");

//   if (state.succeeded) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
//         <div className="rounded-2xl bg-white p-10 text-center shadow-md max-w-md">
//           <h2 className="text-2xl font-bold text-[#1E293B]">
//             Thank you!
//           </h2>
//           <p className="mt-3 text-gray-600">
//             We’ve received your message. The Enrilo team will contact you soon.
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="flex h-screen items-center justify-center bg-gray-50">
//       <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-[#1E293B]">
//             Contact Us
//           </h1>
//           <p className="mt-2 text-gray-500">
//             We would love to hear from you. Fill out the form below.
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700" >
//               Email Address
//             </label>

//             <input id="email" type="email" name="email" placeholder="you@example.com" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30" />

//             <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-500" />
//           </div>

//           {/* Message */}
//           <div>
//             <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
//               Message
//             </label>

//             <textarea id="message" name="message" rows={5} placeholder="Write your message..." className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30" />

//             <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-500"/>
//           </div>

//           {/* Button */}
//           <button type="submit" disabled={state.submitting} className="w-full rounded-lg bg-[#1E293B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-50">
//             {state.submitting ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mredebve");

  return (
    <main className="bg-gray-50 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">

        {/* Success State */}
        {state.succeeded ? (
          <div className="rounded-2xl bg-white p-8 sm:p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Thank you!
            </h2>
            <p className="mt-3 text-gray-600">
              We’ve received your message. The Enrilo team will contact you soon.
            </p>
          </div>
        ) : (
          /* Form Card */
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg">

            {/* Header */}
            <div className="mb-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
                Contact Us
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500">
                We would love to hear from you. Fill out the form below.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition
                  focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition
                  focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-lg bg-[#1E293B] px-6 py-3 text-sm font-semibold text-white transition
                hover:bg-black disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}