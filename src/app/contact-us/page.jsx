"use client";
import { useMemo } from "react";
import { useForm } from "@formspree/react";
import { useState, useEffect } from "react";
import Select from "react-select";
import { TextField } from "@mui/material";
import { countryCodes } from "../components/countryCodeList.js";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mredebve");
  // Form states
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCodeWithName, setCountryCodeWithName] = useState(null);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);

  // Combined full phone number
  const [fullPhone, setFullPhone] = useState("");

  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  // Update fullPhone whenever country code or phone changes
  useEffect(() => {
    if (countryCodeWithName?.value && phone.trim()) {
      const countryCode = countryCodeWithName.value;
      setFullPhone(`${countryCode} ${phone}`.trim());
    } else {
      setFullPhone("");
    }
  }, [countryCodeWithName, phone]);

  const countryCodeOptions = useMemo(
    () => countryCodes.map((c) => ({
      value: c.code,
      label: `${c.code} - ${c.name}`
    })),
    []
  );

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
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
            <div className="mb-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
                Contact Us
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500">
                We would love to hear from you. Fill out the form below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                {/* Full Name */}
                <TextField name="full_name" id="full_name" label="Please Enter Your Full Name" variant="outlined" fullWidth required value={full_name} onChange={(e) => setFullName(e.target.value)} sx={{ marginBottom: "1.25rem", minHeight: "56px", "& .MuiFormLabel-asterisk": { color: "red" }, }} />

                {/* Country Code + Phone */}
                <div className="flex flex-row gap-3 mb-5">
                  {/* Country Code */}
                  <Select required isSearchable id="countryCode" placeholder="Country Code" options={countryCodeOptions} value={countryCodeWithName} menuPosition="fixed" menuPortalTarget={menuPortalTarget} instanceId="country-code-select" inputId="countryCode-input" onChange={(sel) => setCountryCodeWithName(sel)}
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        minHeight: "56px",
                        height: "56px",
                        borderWidth: "2.5px",
                        borderRadius: "4px",
                        borderColor: state.isFocused ? "#2563EB" : "#E0E0E0",
                        boxShadow: "none",
                        cursor: "pointer",
                        "&:hover": { borderColor: "#2563EB" },
                        marginBottom: "1.25rem",
                        "& .MuiFormLabel-asterisk": { color: "red" },
                      }),
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                  />

                  {/* Phone Number - NO name attribute (we only send full_phone) */}
                  <TextField label="Please Enter Your Phone Number" id="phone_number" type="tel" variant="outlined" fullWidth required value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ minHeight: "56px",  "& .MuiFormLabel-asterisk": { color: "red" }, }} />
                </div>

                {/* Hidden field - This is the only phone field sent to Formspree */}
                <input type="hidden" name="phone" value={fullPhone} />

                {/* Email Address */}
                <TextField name="email" id="email" type="email" label="Please Enter Your Email ID" placeholder="you@example.com" variant="outlined" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: "1.25rem", minHeight: "56px",  "& .MuiFormLabel-asterisk": { color: "red" }, }} />
              </div>

              {/* Message */}
              <TextField name="message" id="message" label="Please Enter Your Message" placeholder="Message..." variant="outlined" fullWidth required multiline minRows={3} value={message} onChange={(e) => setMessage(e.target.value)} sx={{ marginBottom: "1.25rem",  "& .MuiFormLabel-asterisk": { color: "red" }, }} />

              {/* Button */}
              <button type="submit" disabled={state.submitting} className="w-full rounded-lg bg-[#1E293B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-50 hover:curspor-pointer" >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}