"use client";

import { Crown, Shield, Eye, Lock, FileText, Calendar } from "lucide-react";

export function PrivacyPolicy() {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-32">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="prose max-w-none">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                      Our Commitment
                    </h3>
                    <p className="text-yellow-700">
                      Crown Prince Incorporated is committed to protecting your
                      privacy and ensuring the security of your personal
                      information. This policy explains how we collect, use, and
                      safeguard your data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye className="h-6 w-6 text-yellow-600" />
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Personal Information
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Name, email address, phone number</li>
                        <li>Business information and job title</li>
                        <li>Project requirements and specifications</li>
                        <li>Billing and payment information</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Technical Information
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>IP address and browser information</li>
                        <li>Device type and operating system</li>
                        <li>Website usage patterns and preferences</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-yellow-600" />
                    How We Use Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-3">
                        Service Delivery
                      </h3>
                      <ul className="text-blue-800 space-y-2 text-sm">
                        <li>
                          • Provide electrical, construction, and logistics
                          services
                        </li>
                        <li>• Process payments and manage accounts</li>
                        <li>• Communicate project updates and schedules</li>
                        <li>• Provide customer support and assistance</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h3 className="font-semibold text-green-900 mb-3">
                        Business Operations
                      </h3>
                      <ul className="text-green-800 space-y-2 text-sm">
                        <li>
                          • Improve our services and website functionality
                        </li>
                        <li>• Analyze usage patterns and trends</li>
                        <li>• Send marketing communications (with consent)</li>
                        <li>• Comply with legal and regulatory requirements</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-yellow-600" />
                    Data Protection & Security
                  </h2>
                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <p className="text-red-800 mb-4">
                      We implement industry-standard security measures to
                      protect your personal information:
                    </p>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li>SSL encryption for all data transmission</li>
                      <li>
                        Regular security audits and vulnerability assessments
                      </li>
                      <li>Access controls and employee training</li>
                      <li>Secure data storage and backup procedures</li>
                      <li>
                        Incident response and breach notification protocols
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Rights
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Access
                      </h3>
                      <p className="text-sm text-gray-600">
                        Request a copy of your personal data
                      </p>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Correction
                      </h3>
                      <p className="text-sm text-gray-600">
                        Update or correct inaccurate information
                      </p>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Deletion
                      </h3>
                      <p className="text-sm text-gray-600">
                        Request removal of your data
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-yellow-800 mb-4">
                    If you have questions about this Privacy Policy or wish to
                    exercise your rights, please contact us:
                  </p>
                  <div className="text-yellow-700 space-y-2">
                    <p>
                      <strong>Email:</strong> privacy@crownprinceinc.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Royal Business Plaza, Suite
                      456
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
