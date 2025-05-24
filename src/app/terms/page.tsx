export default function TermsOfService() {
    return (
        <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <p className="mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By downloading, installing, or using VRCi (“the App”), you agree to these Terms. If you disagree, do not use the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of the App</h2>
            <p className="mb-4">
                VRCi is an unofficial companion application for VRChat® developed by refiaa.
                The App communicates only with VRChat’s public API to display information and does not send data to developer‑operated servers, except feedback submissions as described below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Relationship with VRChat</h2>
            <p className="mb-4">
                Your use of VRChat via the App is subject to VRChat’s own Terms and Privacy Policy:
                <a href="https://hello.vrchat.com/legal" className="text-blue-600 hover:underline">
                    https://hello.vrchat.com/legal
                </a>.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Account and Security</h2>
            <p className="mb-4">
                You must supply your VRChat credentials, which are stored securely in iOS Keychain and transmitted only to VRChat’s authentication servers.
                You are responsible for all activity under your account and for securing your device.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Permitted Use</h2>
            <p className="mb-4">
                You agree to use the App lawfully and in accordance with VRChat’s rules. You shall not:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Violate VRChat’s Terms or applicable laws</li>
                <li>Reverse engineer or tamper with the App</li>
                <li>Use the App for unauthorized data harvesting</li>
                <li>Circumvent rate limiting or security measures</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Feedback Submission</h2>
            <p className="mb-4">
                By submitting feedback, you grant refiaa a perpetual, worldwide, royalty‑free, irrevocable license to use,
                modify, and incorporate your feedback into the App or related products without obligation.
            </p>
            <p className="mb-4">
                You represent and warrant that your feedback is lawful, non‑defamatory, and does not infringe any third‑party rights.
                refiaa may remove any feedback at its discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Protection & Privacy</h2>
            <p className="mb-4">
                Feedback data (type, title, description, device/app info, timestamp) is stored in Google Firestore.
                See our Privacy Policy for details on collection, use, and your rights.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="mb-4">
                THE APP IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT.
            </p>
            <p className="mb-4">
                refiaa does not warrant uninterrupted or error‑free operation or that results will be accurate or reliable.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation and Cap on Liability</h2>
            <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, refiaa’s AGGREGATE LIABILITY SHALL NOT EXCEED USD $100.
                NO CLAIM MAY BE BROUGHT MORE THAN ONE YEAR AFTER THE EVENT GIVING RISE TO THE CLAIM.
            </p>
            <p className="mb-4">
                Except in cases of gross negligence or willful misconduct, you agree that this cap represents a reasonable allocation of risk.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Force Majeure</h2>
            <p className="mb-4">
                Neither party shall be liable for failure or delay due to causes beyond reasonable control, including acts of God,
                war, terrorism, labor disputes, governmental actions, pandemics, or internet/service interruptions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Dispute Resolution & Arbitration</h2>
            <p className="mb-4">
                Any dispute arising under these Terms will be resolved by binding arbitration under the rules of the American
                Arbitration Association, and you waive the right to participate in any class or representative proceeding.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law & Severability</h2>
            <p className="mb-4">
                These Terms are governed by the laws of the State of California, USA, without regard to conflict of laws.
                If any provision is found unenforceable, that provision will be limited or removed to the minimum extent
                necessary so that these Terms remain in effect.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Consumer Rights</h2>
            <p className="mb-4">
                If you are a consumer, certain disclaimers or limitations may not apply under your local consumer protection laws.
                In such cases, those rights will govern to the extent required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Us</h2>
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