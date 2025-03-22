export default function PrivacyPolicy() {
    return (
        <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
                This Privacy Policy governs your use of VRCi ("the App"), a mobile application for iOS devices. The App is developed and provided by refiaa as an unofficial companion application for VRChat.
            </p>

            <p className="mb-4">
                <strong>IMPORTANT:</strong> VRCi is an independent application and is not affiliated with, endorsed by, or connected to VRChat Inc. in any way. "VRChat" is a trademark of VRChat Inc. All related logos, names, and properties are trademarks of VRChat Inc.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. No Data Collection by Developer</h2>
            <p className="mb-4">
                <strong>THE APP DOES NOT COMMUNICATE WITH ANY SERVERS OPERATED BY THE DEVELOPER.</strong> The App exclusively communicates with VRChat's public API endpoints to display information. The App does not collect, store, or transmit any personal information to the developer or any third parties other than VRChat itself.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Stored on Your Device</h2>
            <p className="mb-4">
                The App may store the following information locally on your device:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>VRChat Credentials:</strong> Your VRChat username and password are securely stored on your device using the iOS Keychain to enable login functionality. These credentials are never transmitted to any server except VRChat's official authentication servers.</li>
                <li><strong>App Preferences:</strong> Settings and preferences you configure within the App.</li>
                <li><strong>Cache Data:</strong> Temporary data from VRChat's API may be cached on your device to improve performance and reduce API calls.</li>
            </ul>
            <p className="mb-4">
                This stored information remains exclusively on your device and can be deleted by uninstalling the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. VRChat Data Access</h2>
            <p className="mb-4">
                The App accesses data from VRChat's servers through its official public API based on the credentials you provide. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Your VRChat profile information</li>
                <li>Friends list and status</li>
                <li>World information</li>
                <li>Avatar information</li>
                <li>Other VRChat related data available through the API</li>
            </ul>
            <p className="mb-4">
                The App's access to this data is governed by VRChat's own Terms of Service and Privacy Policy. The App uses this data exclusively for display purposes within the App and does not process, store, or transmit this data elsewhere.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Analytics and Crash Reporting</h2>
            <p className="mb-4">
                The App uses Apple's built-in analytics and crash reporting tools, which are subject to Apple's Privacy Policy. This information helps identify and fix technical issues with the App. You can disable analytics collection through your device settings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Services</h2>
            <p className="mb-4">
                The App does not incorporate third-party analytics, advertising, or tracking services. The only third-party service the App interacts with is VRChat's API.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="mb-4">
                The App does not knowingly collect personal information from children under 13. If you believe we might have collected information from a child under 13, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Your Rights</h2>
            <p className="mb-4">
                Since we do not collect or store your personal information on our servers, most data protection rights are not applicable. However, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Delete all App-related data by uninstalling the App from your device</li>
                <li>Contact VRChat regarding any personal data they may hold about you</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
                Email: vrci_admin@proton.me
            </p>
            <p className="mb-4">
                GitHub: <a href="https://github.com/refiaa" className="text-blue-600 hover:underline">https://github.com/refiaa</a>
            </p>

            <div className="mt-10 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} refiaa (VRCi). All rights reserved.</p>
            </div>
        </div>
    );
}