"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const titleMap = {
    "/": "Enrilo",
    "/login": "Login",
    "/dashboard": "Dashboard",
    "/add-new-superadmin": "Add New Super Admin",
    "/all-super-admin": "All Super Admin",
    "/add-new-consultancy": "Add New Consultancy",
    "/all-consultancies": "All Consultancies",
    "/all-payments": "All Payments",
    "/add-new-payment": "Add New Payment",
    "/add-master-admin": "Add Master Admin",
    "/all-master-admin": "All Master Admin",
    "/our-company": "Our Company",
    "/my-profile": "Profile Page",
    "/company/gst": "GST Collection",
    "/settings": "Settings",
    "/pricing": "Pricing Page",
    "/features": "Our Features",
    "/contact-us": "Contact Us",
    "/privacy-policy": "Privacy Policy",
    "/terms-and-conditions": "Terms & Conditions",
  };

  let currentTitle = "Enrilo Dashboard";

  if (titleMap[pathname]) {
    currentTitle = titleMap[pathname];
  } else if (/^\/edit-super-admin\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "Edit Super Admin";
  } else if (/^\/view-super-admin\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "View Super Admin";
  } else if (/^\/edit-consultancy\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "Edit Consultancy";
  } else if (/^\/view-consultancy\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "View Consultancy";
  } else if (/^\/view-a-payment\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "Payment Details";
  } else if (/^\/edit-a-payment\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "Edit Payment Details";
  } else if (/^\/consultancy\/\d+\/payments$/.test(pathname)) {
    currentTitle = "Consultancy Payments";
  } else if (/^\/update-master-admin\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "Edit Master Admin";
  } else if (/^\/view-master-admin\/[A-Za-z0-9_-]+$/.test(pathname)) {
    currentTitle = "View Master Admin";
  } else {
    currentTitle = "Enrilo";
  }

  return (
    <header className="bg-white shadow p-4 flex flex-row justify-center">
      <h1 className="text-xl font-semibold text-gray-800">{currentTitle}</h1>
    </header>
  );
}