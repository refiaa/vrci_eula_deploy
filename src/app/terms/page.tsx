export default function TermsOfService() {
    return (
        <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <p className="mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By downloading, installing, or using the VRCi mobile application ("the App"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of the App</h2>
            <p className="mb-4">
                VRCi is an unofficial companion application for VRChat developed by refiaa. The App exclusively communicates with VRChat's public API endpoints to display information and does not communicate with any servers operated by the developer. The App does not store or transmit any information other than what is necessary to display VRChat information.
            </p>

            <p className="mb-4">
                <strong>IMPORTANT:</strong> VRCi is an independent application and is not affiliated with, endorsed by, sponsored by, or connected to VRChat Inc. in any way. "VRChat" and all related logos, names, and properties are trademarks of VRChat Inc.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Relationship with VRChat</h2>
            <p className="mb-4">
                The App utilizes VRChat's public API and does not modify or interfere with the normal operation of VRChat in any way. The App is designed to comply with VRChat's API usage guidelines and implements rate limiting to avoid overloading VRChat's servers.
            </p>

            <p className="mb-4">
                By using the App, you agree to also comply with VRChat's own Terms of Service, which can be found at <a href="https://hello.vrchat.com/legal" className="text-blue-600 hover:underline">https://hello.vrchat.com/legal</a>.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Account and Security</h2>
            <p className="mb-4">
                To use the App, you must provide your VRChat account credentials. Your credentials are stored securely on your device using iOS Keychain and are only transmitted to VRChat's official authentication servers.
            </p>

            <p className="mb-4">
                You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Maintaining the confidentiality of your VRChat account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Any actions taken using your credentials within the App</li>
                <li>Securing your device to prevent unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Permitted Use</h2>
            <p className="mb-4">
                You agree to use the App only for its intended purpose and in compliance with all applicable laws and regulations. You shall not:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Use the App in any way that violates VRChat's Terms of Service</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to interfere with, compromise, or disrupt the normal functioning of the App or VRChat's services</li>
                <li>Attempt to circumvent the App's built-in rate limiting or other security measures</li>
                <li>Use the App to collect or harvest any information about other VRChat users beyond what is displayed within the App interface</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-4">
                The App, including its code, design, graphics, text, and all other elements, is protected by copyright, trademark, and other intellectual property laws. All intellectual property rights in the App are owned by refiaa.
            </p>

            <p className="mb-4">
                You are granted a limited, non-exclusive, non-transferable, revocable license to use the App solely for your personal, non-commercial purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. DISCLAIMER OF WARRANTIES</h2>
            <p className="mb-4">
                THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>

            <p className="mb-4">
                THE APP DEVELOPER DOES NOT WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>THE APP WILL MEET YOUR REQUIREMENTS</li>
                <li>THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
                <li>THE RESULTS OBTAINED FROM USING THE APP WILL BE ACCURATE OR RELIABLE</li>
                <li>ANY ERRORS IN THE APP WILL BE CORRECTED</li>
            </ul>

            <p className="mb-4">
                THE APP DEPENDS ON VRCHAT'S API, WHICH IS CONTROLLED BY VRCHAT INC. AND MAY CHANGE WITHOUT NOTICE. THE APP DEVELOPER MAKES NO WARRANTIES REGARDING THE CONTINUED AVAILABILITY OR FUNCTIONALITY OF VRCHAT'S API.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. LIMITATION OF LIABILITY</h2>
            <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL REFIAA BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF REFIAA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>YOUR USE OR INABILITY TO USE THE APP</li>
                <li>ANY CHANGES TO VRCHAT'S API OR SERVICES</li>
                <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA</li>
                <li>ANY CONTENT OR INFORMATION DISPLAYED THROUGH THE APP</li>
                <li>ANY OTHER MATTER RELATING TO THE APP</li>
            </ul>

            <p className="mb-4">
                <strong>YOU EXPRESSLY UNDERSTAND AND AGREE THAT REFIAA WILL NOT BE LIABLE FOR ANY MATERIAL, FINANCIAL, OR PSYCHOLOGICAL DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF THE APP.</strong>
            </p>

            <p className="mb-4">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
            <p className="mb-4">
                You agree to defend, indemnify, and hold harmless refiaa from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including but not limited to attorney's fees) arising from or relating to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Your use of the App</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your use of the App caused damage to a third party</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Modifications to the App and Terms</h2>
            <p className="mb-4">
                Refiaa reserves the right, at their sole discretion, to modify or replace the App or these Terms at any time. If a revision to the Terms is material, reasonable efforts will be made to provide notice within the App. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Termination</h2>
            <p className="mb-4">
                Refiaa reserves the right to terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation a breach of the Terms.
            </p>

            <p className="mb-4">
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
            <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within the United States for the resolution of any disputes arising from these Terms or your use of the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Severability</h2>
            <p className="mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Entire Agreement</h2>
            <p className="mb-4">
                These Terms constitute the entire agreement between you and refiaa concerning the App and supersede all prior or contemporaneous communications, understandings, or agreements, whether oral or written, between you and refiaa related to the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">15. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
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