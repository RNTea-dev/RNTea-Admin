// src/components/PrivacyPolicyModal.jsx
import React, { useEffect, useRef } from 'react';

export default function PrivacyPolicyModal({ onClose }) {
    const modalRef = useRef(null);

    // Effect to handle closing the modal with the Escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    // Effect to handle clicking outside the modal content to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        // Add a small delay to avoid immediate close if click originated from outside
        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 100);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);


    return (
        // Modal Overlay
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
            {/* Modal Content */}
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Privacy Policy Content */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">The RNTea business Data Protection Protocol</h1>

                <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4 text-center">Version 2.1 | Effective Date: July 12, 2025</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Preamble</h3>
                <p className="text-lg text-gray-700 mb-4">
                    WHEREAS, RNTea business ("RNTea business," "we," "our") is a data-driven enterprise that values the trust placed in it by its users, clients, and partners ("Data Subjects," "you," "your");
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    WHEREAS, the processing of personal data is a fundamental aspect of our operations;
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    WHEREAS, the protection of personal data is a fundamental right, as articulated in international and national legal frameworks, including but not limited to the GDPR (Regulation (EU) 2016/679) and the CCPA (California Civil Code § 1798.100 et seq.), and other applicable data protection laws;
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    WHEREAS, this Protocol is designed to be a comprehensive, transparent, and legally compliant framework governing our collection, use, retention, and disclosure of personal data;
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    THEREFORE, RNTea business hereby establishes this Data Protection Protocol, which applies to all processing of personal data by the company.
                </p>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article I: Foundational Principles of Data Processing</h3>
                <p className="text-lg text-gray-700 mb-4">RNTea business adheres to the following principles, which govern all data processing activities:</p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                    <li><strong>Lawfulness, Fairness, and Transparency:</strong> We process personal data lawfully, fairly, and in a transparent manner. This Protocol serves as the primary instrument for achieving this transparency.</li>
                    <li><strong>Purpose Limitation:</strong> We collect personal data for specified, explicit, and legitimate purposes and do not process it in a manner incompatible with those purposes.</li>
                    <li><strong>Data Minimization:</strong> We collect only the personal data that is adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.</li>
                    <li><strong>Accuracy:</strong> We take every reasonable step to ensure that personal data is accurate and, where necessary, kept up to date. Inaccurate personal data will be rectified or erased without undue delay.</li>
                    <li><strong>Storage Limitation:</strong> We retain personal data for no longer than is necessary for the purposes for which it is processed.</li>
                    <li><strong>Integrity and Confidentiality:</strong> We process personal data in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage, using appropriate technical and organizational measures.</li>
                    <li><strong>Accountability:</strong> As the data controller, RNTea business is responsible for, and must be able to demonstrate compliance with, the principles outlined in this Protocol.</li>
                </ul>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article II: Categories of Personal Data Collected & Lawful Basis</h3>
                <p className="text-lg text-gray-700 mb-4">The personal data we process falls into the following categories, with the corresponding lawful basis for processing:</p>

                <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-gray-700 bg-gray-50">Category of Data</th>
                                <th className="py-2 px-4 border-b text-left text-gray-700 bg-gray-50">Examples of Data Collected</th>
                                <th className="py-2 px-4 border-b text-left text-gray-700 bg-gray-50">Purpose of Processing</th>
                                <th className="py-2 px-4 border-b text-left text-gray-700 bg-gray-50">Lawful Basis for Processing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b text-gray-700">Identity & Account Data</td>
                                <td className="py-2 px-4 border-b text-gray-700">Name, email address, username, password (hashed), professional title</td>
                                <td className="py-2 px-4 border-b text-gray-700">To create and manage your account, provide access to services, and communicate with you.</td>
                                <td className="py-2 px-4 border-b text-gray-700"><strong>Contractual Necessity:</strong> The processing is necessary for the performance of a contract to which you are a party.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-gray-700">Transactional Data</td>
                                <td className="py-2 px-4 border-b text-gray-700">Billing address, payment information (tokenized), subscription history</td>
                                <td className="py-2 px-4 border-b text-gray-700">To process payments, manage subscriptions, and maintain financial records.</td>
                                <td className="py-2 px-4 border-b text-gray-700"><strong>Contractual Necessity:</strong> Necessary to fulfill a transaction you initiated. <strong>Legal Obligation:</strong> To comply with tax and accounting laws.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-gray-700">Technical & Usage Data</td>
                                <td className="py-2 px-4 border-b text-gray-700">IP address, browser type, operating system, pages visited, time spent, clickstream data</td>
                                <td className="py-2 px-4 border-b text-gray-700">To ensure the security and stability of our platform, analyze usage patterns, and improve our services.</td>
                                <td className="py-2 px-4 border-b text-gray-700"><strong>Legitimate Interest:</strong> Our legitimate interest in securing our platform, preventing fraud, and understanding user behavior to enhance our products.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-gray-700">Correspondence & Support Data</td>
                                <td className="py-2 px-4 border-b text-gray-700">Content of emails, chat messages, or support tickets</td>
                                <td className="py-2 px-4 border-b text-gray-700">To respond to your inquiries, provide customer support, and resolve disputes.</td>
                                <td className="py-2 px-4 border-b text-gray-700"><strong>Legitimate Interest:</strong> To provide effective customer service. <strong>Contractual Necessity:</strong> To assist with issues related to our service.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-gray-700">Voluntarily Provided Data</td>
                                <td className="py-2 px-4 border-b text-gray-700">Your professional bio, profile picture, or survey responses</td>
                                <td className="py-2 px-4 text-gray-700"><strong>Consent:</strong> Your explicit consent is requested and may be withdrawn at any time.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="annotation bg-blue-50 border-l-4 border-blue-200 text-blue-800 p-4 rounded-md my-4">
                    <strong className="font-semibold">Scholarly Annotation: The Legitimate Interest Balancing Test</strong><br />
                    The use of "Legitimate Interest" as a lawful basis is subject to a strict balancing test under the GDPR. A data controller must demonstrate that its interests in processing the data (e.g., security, service improvement) are not overridden by the fundamental rights and freedoms of the Data Subject. This requires a formal assessment and is a point of frequent legal scrutiny. In this model, we assert that the processing of technical data for security purposes is a legitimate interest vital to protecting all users, and a user's reasonable expectation is that such data would be processed for platform integrity.
                </div>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article III: Data Sharing and Disclosure</h3>
                <p className="text-lg text-gray-700 mb-4">We may share your personal data with the following categories of recipients, always under the principles of data minimization and purpose limitation:</p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                    <li><strong>Service Providers:</strong> We engage third-party service providers (data processors) who perform functions on our behalf, such as cloud hosting, payment processing, and analytics. These providers are bound by contractual obligations to protect your data and are prohibited from using it for any purpose other than providing their service to us.</li>
                    <li><strong>Legal and Regulatory Authorities:</strong> We will disclose your data when legally required to do so, such as in response to a subpoena, court order, or governmental request.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the business transaction, subject to the recipient agreeing to abide by a privacy policy consistent with this Protocol.</li>
                </ul>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article IV: Data Subject Rights</h3>
                <p className="text-lg text-gray-700 mb-4">You have the following rights concerning your personal data. To exercise these rights, please contact our Data Protection Officer at the address provided in Article VIII.</p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                    <li><strong>Right to Access:</strong> You have the right to request a copy of the personal data we hold about you (a "Subject Access Request").</li>
                    <li><strong>Right to Rectification:</strong> You have the right to request the correction of inaccurate or incomplete personal data.</li>
                    <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You have the right to request the deletion of your personal data under certain circumstances (e.g., if the data is no longer necessary for the purposes for which it was collected).</li>
                    <li><strong>Right to Restrict Processing:</strong> You have the right to request that we cease or limit the processing of your personal data under specific conditions.</li>
                    <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit that data to another data controller.</li>
                    <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data based on legitimate interest or for direct marketing purposes.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you have the right to withdraw that consent at any time.</li>
                </ul>

                <div className="annotation bg-blue-50 border-l-4 border-blue-200 text-blue-800 p-4 rounded-md my-4">
                    <strong className="font-semibold">Scholarly Annotation: The Practicality of Rights</strong><br />
                    While these rights are fundamental, their implementation is not absolute. For instance, the "Right to Erasure" may be overridden by a legal obligation to retain data (e.g., financial records for tax purposes) or if the data is required for the establishment, exercise, or defense of legal claims. A robust privacy policy must manage user expectations by clarifying these limitations.
                </div>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article V: Data Security</h3>
                <p className="text-lg text-gray-700 mb-4">RNTea business implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk. These measures include:</p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                    <li><strong>Pseudonymization and Encryption:</strong> Where feasible, data is pseudonymized and sensitive data is encrypted both in transit and at rest.</li>
                    <li><strong>Access Controls:</strong> Access to personal data is restricted to authorized personnel on a "need-to-know" basis.</li>
                    <li><strong>Security Audits:</strong> We conduct regular security audits and vulnerability assessments.</li>
                </ul>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article VI: International Data Transfers</h3>
                <p className="text-lg text-gray-700 mb-4">As a global company, your data may be transferred to and processed in countries outside your own. We ensure that any such transfer is lawful and adequately protected. For transfers of personal data from the European Union, we rely on established mechanisms such as Standard Contractual Clauses (SCCs).</p>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article VII: Contact Information</h3>
                <p className="text-lg text-gray-700 mb-4">For any questions, concerns, or to exercise your rights under this Protocol, please contact our designated Data Protection Officer (DPO):</p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
                    <li><strong>DPO:</strong> [Insert DPO Name]</li>
                    <li><strong>Email:</strong> [Insert DPO Email]</li>
                    <li><strong>Mailing Address:</strong> [Insert Mailing Address]</li>
                </ul>

                <hr className="my-8 border-t border-gray-300" />

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Article VIII: Changes to This Protocol</h3>
                <p className="text-lg text-gray-700 mb-4">This Protocol may be amended from time to time. We will notify you of any material changes by posting the new Protocol on our website or by other means of communication. Your continued use of our services after a change indicates your acceptance of the updated terms.</p>
            </div>
        </div>
    );
}
