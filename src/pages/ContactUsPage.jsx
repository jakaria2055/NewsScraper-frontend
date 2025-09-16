import React from "react";
import Layout from "../components/layout/Layout";

function ContactUsPage() {
  return (
    <Layout>
      <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div class="bg-white rounded-lg shadow-md w-full max-w-md border border-gray-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">
              Contact Information
            </h3>

            <div class="space-y-5">
              <div class="flex items-start">
                <div class="bg-blue-100 p-2.5 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9a5 5 0 1110 0A5 5 0 015 9zm5-3a3 3 0 100 6 3 3 0 000-6zm0 10a7 7 0 00-7-7 1 1 0 100 2 5 5 0 015 5 1 1 0 102 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Our Location</p>
                  <p class="text-gray-600 mt-1">123 Main Street</p>
                  <p class="text-gray-600">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-blue-100 p-2.5 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Phone Number</p>
                  <p class="text-gray-600 mt-1">+880 1234-567890</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-blue-100 p-2.5 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">Email Address</p>
                  <p class="text-gray-600 mt-1">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUsPage;
