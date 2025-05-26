export default function TermsOfService() {
    return (
        <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <p className="mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By downloading, installing, or using VRCi (“the App”), an <strong>unofficial</strong> companion application for VRChat®, you agree to these Terms of Service ("Terms"). If you do not agree to these Terms, do not download, install, or use the App. Your continued use of the App constitutes your acceptance of these Terms as they may be amended from time to time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description and Role of the App</h2>
            <p className="mb-4">
                VRCi is an <strong>unofficial</strong> companion application for VRChat® developed by refiaa. It is designed to provide users with tools to enhance their VRChat® experience, such as managing friends and discovering content within the VRChat® platform.
            </p>
            <p className="mb-4">
                The App functions by communicating with VRChat’s publicly available API endpoints to access and display information from your VRChat® account and the VRChat® platform, as permitted by VRChat® and your VRChat® privacy settings. The App itself does not send your VRChat® data to developer‑operated servers, except for feedback submissions as described in our Privacy Policy.
            </p>
            <p className="mb-4">
                <strong>The App is a third-party tool and is not a substitute for the official VRChat® application or services.</strong>
            </p>


            <h2 className="text-2xl font-bold mt-8 mb-4">3. Relationship with VRChat Inc.</h2>
            <p className="mb-4">
                Your use of the VRChat® platform, whether accessed via the App or otherwise, is strictly subject to VRChat Inc.’s own Terms of Service, Privacy Policy, Community Guidelines, and other legal notices, which can be found at:
                <a href="https://hello.vrchat.com/legal" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://hello.vrchat.com/legal
                </a>. You are solely responsible for complying with all applicable VRChat Inc. policies.
            </p>
            <p className="mb-4">
                VRCi is an independent application and is not affiliated with, endorsed, approved, or sponsored by VRChat Inc. in any way. The App does not reflect the views or opinions of VRChat Inc. or anyone officially involved in producing or managing VRChat® properties.
            </p>
            <p className="mb-4">
                VRChat® and all associated names, logos, and properties are trademarks or registered trademarks of VRChat Inc. All rights to such marks are reserved by VRChat Inc.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Account, Credentials, and Security</h2>
            <p className="mb-4">
                To use most features of the App, you must supply your VRChat® account credentials (username and password) for authentication purposes. These credentials are securely stored in the iOS Keychain on your device and are transmitted <strong>only</strong> to VRChat’s official authentication servers. The developer of the App (refiaa) does not have access to your VRChat® password.
            </p>
            <p className="mb-4">
                You are solely responsible for all activities that occur under your VRChat® account when accessed through the App, and for maintaining the security of your device and your VRChat® account credentials. You agree to notify VRChat Inc. immediately of any unauthorized use of your VRChat® account. The developer of the App shall not be liable for any loss or damage arising from your failure to comply with these security obligations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Permitted and Prohibited Use</h2>
            <p className="mb-4">
                You agree to use the App lawfully, ethically, and strictly in accordance with these Terms and all applicable VRChat Inc. policies and applicable laws and regulations. You shall not, and shall not attempt to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Violate VRChat Inc.’s Terms of Service, Community Guidelines, or any applicable laws or regulations.</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code or underlying ideas or algorithms of the App or VRChat's® API.</li>
                <li>Modify, translate, or create derivative works based on the App.</li>
                <li>Use the App for any unauthorized data harvesting, scraping, or a similar automated data collection methodology from VRChat® or its users.</li>
                <li>Circumvent, disable, or otherwise interfere with any rate limiting, security-related features of the App or VRChat's® API, or features that enforce limitations on use of the App or VRChat's® API.</li>
                <li>Use the App to harass, abuse, stalk, threaten, defame, or otherwise infringe or violate the rights of any other party (including but not limited to rights of privacy, publicity, or other proprietary rights).</li>
                <li>Use the App in any manner that could damage, disable, overburden, or impair the App or VRChat’s® servers or networks.</li>
                <li>Upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the App or VRChat's® services.</li>
            </ul>
            <p className="mb-4">
                Violation of these usage terms may result in suspension or termination of your access to the App, at refiaa's sole discretion, in addition to any remedies VRChat Inc. may pursue.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-4">
                The App and its original content (excluding VRChat® content and trademarks), features, and functionality are and will remain the exclusive property of refiaa and its licensors. The App is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of refiaa.
            </p>
            <p className="mb-4">
                Content accessed through the App from the VRChat® platform, including but not limited to avatars, worlds, and user-generated content, is the property of VRChat Inc. or its respective content creators and is subject to VRChat Inc.'s policies. The App does not grant you any rights to such VRChat® content.
            </p>


            <h2 className="text-2xl font-bold mt-8 mb-4">7. Feedback Submission</h2>
            <p className="mb-4">
                If you choose to submit feedback, suggestions, or ideas to refiaa (e.g., via email or the App’s feedback feature), you grant refiaa a perpetual, worldwide, royalty‑free, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such feedback in any form, media, or technology, whether now known or hereafter developed, for any purpose, including to improve the App or related products, without any obligation to provide attribution or compensation to you.
            </p>
            <p className="mb-4">
                You represent and warrant that any feedback you provide is lawful, non‑defamatory, does not infringe any third‑party rights, and that you have the right to grant these permissions. refiaa reserves the right to remove or not act upon any feedback at its sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Data Protection & Privacy</h2>
            <p className="mb-4">
                Our collection and use of personal information in connection with the App, primarily feedback data you submit, is described in our Privacy Policy. By using the App, you acknowledge that you have read and understood our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p className="mb-4">
                THE APP IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, REFIAA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON‑INFRINGEMENT.
            </p>
            <p className="mb-4">
                REFIAA DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR‑FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. REFIAA DOES NOT WARRANT THAT THE RESULTS OBTAINED FROM THE USE OF THE APP WILL BE ACCURATE, RELIABLE, OR COMPLETE.
            </p>
            <p className="mb-4">
                YOU ACKNOWLEDGE AND AGREE THAT THE APP'S FUNCTIONALITY IS DEPENDENT ON THE CONTINUED AVAILABILITY AND FUNCTIONALITY OF VRCHAT INC.'S PUBLIC API, WHICH MAY BE MODIFIED, RESTRICTED, OR DISCONTINUED BY VRCHAT INC. AT ANY TIME, WITH OR WITHOUT NOTICE, AT VRCHAT INC.'S SOLE DISCRETION. REFIAA SHALL HAVE NO LIABILITY WHATSOEVER FOR ANY SUCH MODIFICATION, RESTRICTION, OR DISCONTINUANCE OF THE VRCHAT® API, OR FOR ANY INTERRUPTIONS OR ERRORS IN THE APP CAUSED THEREBY.
            </p>
            <p className="mb-4">
                NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM REFIAA OR THROUGH THE APP SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL REFIAA, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE APP.
            </p>
            <p className="mb-4">
                UNDER NO CIRCUMSTANCES WILL REFIAA BE RESPONSIBLE FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM HACKING, TAMPERING, OR OTHER UNAUTHORIZED ACCESS OR USE OF THE APP OR YOUR ACCOUNT OR THE INFORMATION CONTAINED THEREIN.
            </p>
            <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, REFIAA’S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE APP SHALL NOT EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (USD $100) OR THE AMOUNT YOU PAID REFIAA, IF ANY, IN THE PAST SIX MONTHS FOR THE APP.
            </p>
            <p className="mb-4">
                NO CLAIM UNDER THESE TERMS MAY BE BROUGHT MORE THAN ONE (1) YEAR AFTER THE CAUSE OF ACTION ARISES.
            </p>
            <p className="mb-4">
                THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF REFIAA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
            </p>
            <p className="mb-4">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, REFIAA'S LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
            </p>


            <h2 className="text-2xl font-bold mt-8 mb-4">11. Indemnification</h2>
            <p className="mb-4">
                You agree to defend, indemnify, and hold harmless refiaa and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the App, by you or any person using your account and password; b) a breach of these Terms, or c) content you submit, post, transmit, or otherwise make available through the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Force Majeure</h2>
            <p className="mb-4">
                Neither party shall be liable for any failure to perform or delay in performance of its obligations under these Terms (other than payment obligations) if such failure or delay is due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, epidemics, labor disputes, or shortages of transportation facilities, fuel, energy, labor or materials, or failures of public or private telecommunications networks (including interruptions or unavailability of VRChat's® API or services).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Dispute Resolution & Arbitration</h2>
            <p className="mb-4">
                <strong>Please read this section carefully as it affects your rights.</strong>
            </p>
            <p className="mb-4">
                Most user concerns can be resolved quickly and to the user's satisfaction by contacting us at vrci_admin@proton.me. In the unlikely event that we are unable to resolve a complaint you may have (or if refiaa has not been able to resolve a dispute it has with you after attempting to do so informally), we each agree to resolve those disputes through binding arbitration or small claims court instead of in courts of general jurisdiction.
            </p>
            <p className="mb-4">
                Any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by arbitration in Santa Clara County, California before one arbitrator. The arbitration shall be administered by the American Arbitration Association ("AAA") pursuant to its Consumer Arbitration Rules. Judgment on the Award may be entered in any court having jurisdiction. This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.
            </p>
            <p className="mb-4">
                You agree that, by entering into these Terms, you and refiaa are each waiving the right to a trial by jury or to participate in a class action or representative proceeding.
            </p>
            <p className="mb-4">
                This arbitration provision shall survive termination of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Governing Law & Severability</h2>
            <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">15. Consumer Rights</h2>
            <p className="mb-4">
                These Terms do not and are not intended to affect any of your non-waivable statutory rights if you are a consumer. If any part of these Terms is found to be invalid or unenforceable under applicable local consumer protection law, it will be deemed modified to the extent necessary to comply with such law, and the remaining provisions will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">16. Changes to Terms</h2>
            <p className="mb-4">
                refiaa reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect, such as by posting a notice within the App or on our official communication channels (if any). What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
                By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">17. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about these Terms, please contact us:
            </p>
            <p className="mb-4">
                Email: vrci_admin@proton.me
            </p>
            <p className="mb-4">
                GitHub: <a href="https://github.com/refiaa" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/refiaa</a> (for feedback and community discussions, not for formal legal notices related to these Terms).
            </p>

            <div className="mt-10 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} refiaa (VRCi). All rights reserved.</p>
                <p className="mt-1">VRChat® is a registered trademark of VRChat Inc. VRCi is an independent, unofficial third-party application and is not affiliated with, endorsed, approved, or sponsored by VRChat Inc.</p>
            </div>
        </div>
    );
}