export default function PrivacyPolicy() {
    return (
        <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
                This Privacy Policy governs your use of VRCi ("the App"), developed and provided by refiaa as an
                unofficial companion application for VRChat®. By using the App, you consent to the data practices described below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information Collection</h2>
            <p className="mb-4">
                <strong>2.1 Data Received from VRChat:</strong> The App communicates only with VRChat’s official public API using
                the credentials you provide. The App does not send your VRChat credentials to any other servers.
            </p>
            <p className="mb-4">
                <strong>2.2 Feedback Data Collected by Developer:</strong> When you submit feedback via the App, the following
                information is collected and transmitted to the developer’s Firestore database hosted by Google Cloud:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Feedback ID:</strong> A UUID generated on your device.</li>
                <li><strong>Type:</strong> "Bug Report" or "Feature Request".</li>
                <li><strong>Title & Description:</strong> Text fields provided by you.</li>
                <li><strong>Device Info:</strong> Model, OS version, device name.</li>
                <li><strong>App Version:</strong> Release and build numbers.</li>
                <li><strong>Timestamp:</strong> Submission date/time (converted to server timestamp).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Use and Retention of Feedback Data</h2>
            <p className="mb-4">
                All feedback data is used solely to improve the App’s functionality, fix bugs, and develop new features.
                Data is retained until you request deletion or discontinue use of the App. You may contact us to request
                deletion of your feedback records at vrci_admin@proton.me.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Information Stored on Your Device</h2>
            <p className="mb-4">
                The App stores the following locally:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>VRChat Credentials:</strong> Stored securely in iOS Keychain; only transmitted to VRChat’s servers.</li>
                <li><strong>App Preferences & Cache:</strong> Local settings and temporary API data.</li>
                <li><strong>Submission Timestamp:</strong> Stored in UserDefaults for rate-limiting feedback submissions.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services & Analytics</h2>
            <p className="mb-4">
                Feedback data is stored in Firestore (Google Cloud) under collections <code>bug_reports</code> and
                <code>feature_requests</code>. The App also uses Apple’s analytics/crash reporting. No other
                third-party trackers are employed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
                The App does not knowingly collect personal data from children under 13. If you believe data was collected
                in error, contact us to remove it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
            <p className="mb-4">
                You may request access, correction, or deletion of your feedback data by contacting vrci_admin@proton.me.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We will notify you of material changes by updating this document and the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
                For questions or to exercise your rights, email: vrci_admin@proton.me
            </p>

            <div className="mt-10 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} refiaa (VRCi). All rights reserved.</p>
            </div>
        </div>
    );
}
