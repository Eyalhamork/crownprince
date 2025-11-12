import { Crown, Calendar } from "lucide-react";

export function TermsOfService() {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Terms of Service
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="prose max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Agreement to Terms
                </h3>
                <p className="text-blue-700">
                  By accessing and using Crown Prince Incorporated's services,
                  you agree to be bound by these Terms of Service and all
                  applicable laws and regulations.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    1. Services
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Crown Prince Incorporated provides electrical,
                      construction, and logistics services to commercial and
                      residential clients. Our services include but are not
                      limited to:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                        <h3 className="font-semibold text-yellow-800 mb-2">
                          Electrical Services
                        </h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Installation & maintenance</li>
                          <li>• Emergency repairs</li>
                          <li>• System upgrades</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h3 className="font-semibold text-green-800 mb-2">
                          Construction
                        </h3>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Commercial projects</li>
                          <li>• Residential construction</li>
                          <li>• Renovation services</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h3 className="font-semibold text-blue-800 mb-2">
                          Logistics
                        </h3>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Warehousing solutions</li>
                          <li>• Supply chain management</li>
                          <li>• Transportation services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    2. Payment Terms
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                      <li>
                        <strong>Payment Schedule:</strong> Payments are due
                        according to the agreed schedule in your service
                        contract
                      </li>
                      <li>
                        <strong>Late Payments:</strong> A 1.5% monthly service
                        charge may be applied to overdue accounts
                      </li>
                      <li>
                        <strong>Accepted Methods:</strong> We accept cash,
                        check, credit cards, and ACH transfers
                      </li>
                      <li>
                        <strong>Disputes:</strong> Payment disputes must be
                        raised within 30 days of invoice date
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    3. Warranties & Liability
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h3 className="font-semibold text-green-800 mb-3">
                        Our Warranties
                      </h3>
                      <ul className="text-green-700 space-y-2">
                        <li>• 1-year warranty on electrical installations</li>
                        <li>
                          • 5-year structural warranty on construction work
                        </li>
                        <li>• 90-day warranty on repair services</li>
                        <li>• All work performed to industry standards</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h3 className="font-semibold text-red-800 mb-3">
                        Limitation of Liability
                      </h3>
                      <p className="text-red-700">
                        Our liability is limited to the contract value of
                        services provided. We maintain comprehensive insurance
                        coverage and are fully licensed and bonded.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    4. Termination
                  </h2>
                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <p className="text-yellow-800 mb-4">
                      Either party may terminate services with written notice:
                    </p>
                    <ul className="list-disc list-inside text-yellow-700 space-y-2">
                      <li>30 days notice for ongoing service contracts</li>
                      <li>Immediate termination for breach of contract</li>
                      <li>
                        Payment for completed work is due upon termination
                      </li>
                      <li>
                        Materials and equipment remain our property until paid
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-gray-900 text-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="mb-4">
                    Questions about these Terms of Service? Contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> legal@crownprinceinc.com
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
