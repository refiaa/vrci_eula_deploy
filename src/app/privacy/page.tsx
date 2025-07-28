export default function PrivacyPolicy() {
    return (
        <div className="prose prose-slate max-w-none">
            <p className="mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
                This Privacy Policy governs your use of VRCi ("the App"), an <strong>unofficial</strong> companion application for VRChat®, developed and provided by VRCi Team. The App is designed to enhance your VRChat® experience by providing tools to manage your VRChat® friends and community interactions. By using the App, you consent to the data practices described below. This App is not affiliated with, endorsed by, or sponsored by VRChat Inc.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect and How We Use It</h2>
            <p className="mb-4">
                <strong>2.1 Data Accessed from VRChat® via its Public API:</strong>
            </p>
            <p className="mb-4">
                The App communicates with VRChat's publicly available API endpoints using the VRChat® credentials you provide directly to VRChat® for authentication. The App itself only facilitates this communication. Through this API, the App may access and display VRChat® data such as your friend list, their online status, current VRChat® world/instance information (virtual location within VRChat®), user profiles, avatars, and world details, as permitted by VRChat® and your VRChat® privacy settings.
            </p>
            <p className="mb-4">
                <strong>Important:</strong> Your VRChat® credentials are securely stored in the iOS Keychain on your device and are transmitted <strong>only</strong> to VRChat's official authentication servers. The App developer (VRCi Team) does not have access to your VRChat® password and does not store your VRChat® credentials on any developer-operated servers. All VRChat® data accessed via the API remains subject to VRChat Inc.'s Terms of Service and Privacy Policy. The App acts as a client to view and interact with this data but does not alter its ownership or primary storage location (which is VRChat®).
            </p>

            <p className="mb-4">
                <strong>2.2 Feedback Data Collected by Developer:</strong> When you voluntarily submit feedback (such as bug reports or feature requests) via the App, the following
                information is collected and transmitted to the developer's Firestore database (hosted by Google Cloud) for the sole purpose of improving the App:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Feedback ID:</strong> A UUID generated on your device.</li>
                <li><strong>Type:</strong> "Bug Report" or "Feature Request".</li>
                <li><strong>Title & Description:</strong> Text fields provided by you.</li>
                <li><strong>Device Info:</strong> Device model, OS version, and device model name.</li>
                <li><strong>App Version:</strong> Release and build numbers of the VRCi App.</li>
                <li><strong>Timestamp:</strong> Submission date/time (converted to server timestamp).</li>
            </ul>
            <p className="mb-4">
                Providing feedback is optional. If you choose not to submit feedback, this data will not be collected.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Use and Retention of Your Information</h2>
            <p className="mb-4">
                <strong>3.1 VRChat® Data:</strong> The App does not store your VRChat® data (such as friend lists, world information, etc.) on developer-operated servers. This data is fetched from VRChat's® API in real-time or cached temporarily on your device for performance, as described in Section 4.
            </p>
            <p className="mb-4">
                <strong>3.2 Feedback Data:</strong> Feedback data is used solely to improve the App's functionality, fix bugs, and develop new features. This data is retained in our Firestore database for a period reasonably necessary to address the feedback and for analytical purposes related to app improvement, or until you request its deletion. You may contact us at vrci_admin@proton.me to request deletion of your specific feedback records. If you uninstall the App, your previously submitted feedback data may remain on our servers unless a deletion request is made.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Information Stored Locally on Your Device</h2>
            <p className="mb-4">
                The App stores the following information locally on your device:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>VRChat® Credentials:</strong> As stated above, stored securely in the iOS Keychain and only transmitted directly to VRChat's® authentication servers.</li>
                <li><strong>World Bookmarks:</strong> The App locally stores your bookmarked VRChat® worlds in JSON files within your device's Documents directory. This includes world IDs (e.g., wrld_xxx-xxx-xxx), world names, author names, thumbnail image URLs, release status (public/private/hidden), and bookmark timestamps. Bookmarks can be added manually through world details or via World ID/URL import functionality. You can manage these bookmarks through the app interface, including viewing, searching, sorting, and removing individual bookmarks. Bookmark data is limited to 300 entries and can be manually cleared through app settings. This data is stored for your convenience and remains on your device until manually removed or the app is uninstalled.</li>
                <li><strong>Friendship Activity Logs:</strong> The App locally stores records of friendship-related activities (such as friend requests sent/received, friends added/removed) in JSON files within your device's Documents directory. These logs are organized by account and are used to track friendship changes over time for your reference. Each account's friendship data is stored separately and independently. These logs are automatically cleaned up after 6 months and can be manually cleared through the app settings.</li>
                <li><strong>App Preferences & Cache:</strong> Local settings to customize your App experience and temporary cache of data fetched from VRChat's® API to improve performance and reduce API calls. This cache is managed by the App and can be cleared by reinstalling the App or through app settings (if available).</li>
                <li><strong>Feedback Submission Timestamp:</strong> Stored in UserDefaults for the purpose of rate-limiting feedback submissions to prevent abuse.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services & Analytics</h2>
            <p className="mb-4">
                As mentioned, feedback data is stored in Firestore (a Google Cloud service). The App also utilizes Apple's standard analytics and crash reporting services, which may collect anonymized usage data and crash logs as per Apple's policies. No other third-party trackers that collect personal information for advertising or unrelated purposes are employed by the App. Our use of Firestore for feedback is subject to Google's privacy practices.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
                The App is intended for users who meet the age requirements for VRChat® (currently 13 years or older). The App does not knowingly collect personal data from children under 13. If you are a parent or guardian and believe that your child under 13 has provided us with information (e.g., through feedback submission) without your consent, please contact us at vrci_admin@proton.me, and we will take steps to delete such information from our systems.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights Regarding Your Data</h2>
            <p className="mb-4">
                <strong>7.1 Feedback Data:</strong> You may request access to, correction of, or deletion of your feedback data that we have stored by contacting us at vrci_admin@proton.me. We will respond to your request within a reasonable timeframe. Please note that we can only manage data directly collected by us (i.e., feedback data). For data stored within your VRChat® account, you must manage it through VRChat Inc.
            </p>
            <p className="mb-4">
                <strong>7.2 Local Friendship Activity Data:</strong> You have the following rights regarding friendship activity logs stored locally on your device:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> You can view your friendship logs through the app interface</li>
                <li><strong>Deletion:</strong> You can delete individual log entries or clear all logs through the app settings</li>
                <li><strong>Account Separation:</strong> Each VRChat® account's friendship data is stored separately and switching accounts does not affect other accounts' data</li>
            </ul>
            <p className="mb-4">
                <strong>7.3 Bookmark Data:</strong> You have comprehensive rights regarding bookmark data stored locally on your device:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> You can view all your bookmarks through the app interface, including search and filter functionality</li>
                <li><strong>Addition:</strong> You can add bookmarks manually through world detail pages or via World ID/URL import feature</li>
                <li><strong>Modification:</strong> You can organize bookmarks using sorting options (by date added or alphabetical order)</li>
                <li><strong>Deletion:</strong> You can remove individual bookmarks or clear all bookmarks through the app settings</li>
                <li><strong>Export/Portability:</strong> Bookmark data is stored in standard JSON format on your device and can be accessed through file management if needed</li>
                <li><strong>Data Control:</strong> All bookmark management can be performed locally without server involvement</li>
            </ul>
            <p className="mb-4">
                These local data rights can be exercised directly through the app interface. For any technical issues with local data management, you may contact us at vrci_admin@proton.me.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer Regarding VRChat® Service</h2>
            <p className="mb-4">
                VRCi is an unofficial, third-party application. Your use of the VRChat® platform, whether through this App or otherwise, is solely governed by VRChat Inc.'s Terms of Service and other policies. The availability and functionality of VRChat's® public API, upon which this App relies, are subject to change by VRChat Inc. at any time, which may affect or interrupt the App's features. The developer of VRCi assumes no liability for the VRChat® service itself or for any changes to it that may impact this App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by updating this document, posting a notice within the App, or by other appropriate means. We encourage you to review this Privacy Policy periodically. The "Last Updated" date at the top of this policy indicates when it was last revised.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, or to exercise your rights, please email us at: vrci_admin@proton.me
            </p>

            <div className="mt-10 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} VRCi Team (VRCi). All rights reserved.</p>
                <p className="mt-1">VRChat® is a registered trademark of VRChat Inc. This App is not affiliated with, endorsed, or sponsored by VRChat Inc.</p>
            </div>
        </div>
    );
}