import { Crown, Calendar, Shield, FileText, Eye, Lock } from "lucide-react";

export function CookiePolicy() {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-32 ">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Cookie Policy
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="prose max-w-none">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  What Are Cookies?
                </h3>
                <p className="text-orange-700">
                  Cookies are small text files stored on your device when you
                  visit our website. They help us provide you with a better
                  experience and improve our services.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Types of Cookies We Use
                  </h2>
                  <div className="grid gap-6">
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-800 mb-3">
                            Necessary Cookies
                          </h3>
                          <p className="text-green-700 mb-3">
                            Essential for website functionality and security.
                          </p>
                          <div className="text-sm text-green-600 space-y-1">
                            <p>• Session management and authentication</p>
                            <p>• Security and fraud prevention</p>
                            <p>• Basic website functionality</p>
                            <p>• Load balancing and performance</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <div className="flex items-start gap-3">
                        <FileText className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3">
                            Analytics Cookies
                          </h3>
                          <p className="text-blue-700 mb-3">
                            Help us understand how visitors use our website.
                          </p>
                          <div className="text-sm text-blue-600 space-y-1">
                            <p>• Google Analytics for usage statistics</p>
                            <p>• Page view tracking and user flow</p>
                            <p>• Performance monitoring</p>
                            <p>• Error tracking and debugging</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                      <div className="flex items-start gap-3">
                        <Eye className="h-6 w-6 text-purple-600 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-purple-800 mb-3">
                            Marketing Cookies
                          </h3>
                          <p className="text-purple-700 mb-3">
                            Used for targeted advertising and campaign tracking.
                          </p>
                          <div className="text-sm text-purple-600 space-y-1">
                            <p>• Social media tracking pixels</p>
                            <p>• Advertising campaign effectiveness</p>
                            <p>• Retargeting and personalization</p>
                            <p>• Cross-platform user identification</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                      <div className="flex items-start gap-3">
                        <Lock className="h-6 w-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-orange-800 mb-3">
                            Functional Cookies
                          </h3>
                          <p className="text-orange-700 mb-3">
                            Enable enhanced features and personalization.
                          </p>
                          <div className="text-sm text-orange-600 space-y-1">
                            <p>• User preferences and settings</p>
                            <p>• Chat widget functionality</p>
                            <p>• Language and region selection</p>
                            <p>• Accessibility features</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Managing Your Cookie Preferences
                  </h2>
                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <p className="text-yellow-800 mb-4">
                      You have full control over your cookie preferences:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">
                          Our Cookie Banner
                        </h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Accept or reject all non-essential cookies</li>
                          <li>• Customize preferences by category</li>
                          <li>• Change settings at any time</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">
                          Browser Settings
                        </h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Block cookies in browser settings</li>
                          <li>• Delete existing cookies</li>
                          <li>• Set up automatic deletion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Third-Party Cookies
                  </h2>
                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <p className="text-red-800 mb-4">
                      We may use third-party services that set their own
                      cookies:
                    </p>
                    <div className="space-y-3 text-sm text-red-700">
                      <div className="flex justify-between items-center p-3 bg-white rounded border">
                        <span>
                          <strong>Google Analytics</strong> - Website analytics
                        </span>
                        <a
                          href="https://policies.google.com/privacy"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded border">
                        <span>
                          <strong>Facebook Pixel</strong> - Social media
                          tracking
                        </span>
                        <a
                          href="https://www.facebook.com/privacy/policy/"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded border">
                        <span>
                          <strong>LinkedIn Insight</strong> - Professional
                          network tracking
                        </span>
                        <a
                          href="https://www.linkedin.com/legal/privacy-policy"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-900 text-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Questions About Cookies?
                  </h2>
                  <p className="mb-4">
                    Contact us if you have questions about our cookie usage:
                  </p>
                  <div className="space-y-2">
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
