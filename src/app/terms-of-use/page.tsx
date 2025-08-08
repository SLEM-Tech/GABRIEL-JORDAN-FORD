"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
					Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
					Gabriel Jordan Ford Services Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
					At Gabriel Jordan Ford Services Limited, we provide comprehensive general merchandise supply and professional contract services with focus on quality products, reliable delivery, and excellence in contract execution across diverse business sectors and client requirements.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "termsOfUse"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("termsOfUse")}
					>
						Terms of use
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "privacyPolicy"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("privacyPolicy")}
					>
						Privacy Policy
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "deliveryReturn"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("deliveryReturn")}
					>
						Delivery & Return
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "refundPolicy"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("refundPolicy")}
					>
						Refund Policy
					</button>
					</div>
				</section>
				
				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
					<div id='termsOfUse' className='text-[#667085]'>
						<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
						Terms of Use - Gabriel Jordan Ford Services Limited
						</h4>

						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						By engaging Gabriel Jordan Ford Services Limited for general merchandise supply or contract services, you agree to the following comprehensive terms and conditions:
						</p>

						<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
						<li>
							<span className='font-medium'>General Merchandise Supply:</span> Gabriel Jordan Ford Services provides comprehensive merchandise sourcing and supply including consumer goods, business supplies, industrial materials, specialty products, and bulk commodities. We maintain relationships with verified suppliers and ensure quality standards across all product categories.
						</li>
						<li>
							<span className='font-medium'>Contract Services Portfolio:</span> Our contract services encompass project management, logistics coordination, installation services, maintenance contracts, consulting services, and specialized project execution across diverse industries including construction, facilities management, and business operations.
						</li>
						<li>
							<span className='font-medium'>Quality Assurance Standards:</span> All merchandise undergoes quality verification before delivery. Contract services follow established quality management processes with regular inspections, progress monitoring, and client approval checkpoints throughout project execution.
						</li>
						<li>
							<span className='font-medium'>Supplier Network Management:</span> We maintain a vetted network of suppliers and subcontractors who meet our quality, reliability, and ethical business standards. All partners undergo evaluation for financial stability, quality capabilities, and delivery performance.
						</li>
						<li>
							<span className='font-medium'>Project Management Methodology:</span> Contract services follow structured project management approaches including scope definition, timeline development, resource allocation, risk management, and client communication protocols to ensure successful project delivery.
						</li>
						<li>
							<span className='font-medium'>Custom Sourcing Services:</span> Specialized merchandise sourcing services for unique or hard-to-find products with research, vendor identification, quality verification, and procurement coordination. Custom sourcing includes international suppliers when domestic sources are insufficient.
						</li>
						<li>
							<span className='font-medium'>Payment Terms & Conditions:</span> Merchandise orders require deposit payment with balance due on delivery. Contract services are typically billed based on milestone achievements or monthly progress. Large orders and projects may qualify for extended payment terms.
						</li>
						<li>
							<span className='font-medium'>Delivery & Installation Services:</span> Comprehensive delivery services include logistics coordination, on-site delivery, installation supervision, and commissioning support. Installation services include equipment setup, system testing, and user training when applicable.
						</li>
						<li>
							<span className='font-medium'>Warranty & Support Services:</span> Merchandise comes with applicable manufacturer warranties plus our service guarantee. Contract work includes warranty periods appropriate to service type with ongoing support and maintenance options available.
						</li>
						</ul>

						<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<span className='font-medium'>Compliance & Standards:</span> All operations comply with relevant Nigerian business regulations, industry standards, and client-specific requirements. We maintain appropriate licenses and certifications for our service areas.
						</p>

						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<span className='font-medium'>Client Relationships:</span> We focus on building long-term business relationships through reliable service delivery, competitive pricing, and responsive customer support that adapts to evolving client needs.
						</p>
					</div>
					)}

					{activeTab === "privacyPolicy" && (
					<div id='privacyPolicy' className='text-[#667085]'>
						<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
						PRIVACY POLICY - GABRIEL JORDAN FORD SERVICES LIMITED
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Gabriel Jordan Ford Services Limited is committed to protecting client privacy while providing general merchandise supply and contract services. This policy explains our data practices for business operations and client relationships.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						BUSINESS OPERATIONS DATA COLLECTION
						</h4>
						
						<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
						<li>Client business information (company details, contact persons, procurement requirements)</li>
						<li>Project specifications and contract requirements for service delivery planning</li>
						<li>Merchandise preferences and purchasing patterns for inventory optimization</li>
						<li>Delivery addresses and logistics coordination details for efficient service</li>
						<li>Payment information and billing preferences for transaction processing</li>
						<li>Service feedback and quality evaluation data for continuous improvement</li>
						<li>Supplier and vendor relationship data for procurement coordination</li>
						<li>Project documentation and progress records for contract management</li>
						</ul>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						CLIENT DATA USAGE IN OPERATIONS
						</h4>
						
						<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
						<li>To fulfill merchandise orders and execute contract services effectively</li>
						<li>To coordinate logistics and ensure timely delivery of goods and services</li>
						<li>To manage supplier relationships and optimize procurement processes</li>
						<li>To process payments and maintain accurate financial records</li>
						<li>To provide customer support and resolve service issues promptly</li>
						<li>To improve service quality through performance analysis and feedback integration</li>
						<li>To develop long-term business relationships and account management</li>
						<li>To ensure compliance with contractual obligations and industry standards</li>
						</ul>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						BUSINESS DATA SECURITY MEASURES
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						We implement robust security measures for all business data including secure document storage, encrypted communications for sensitive information, and restricted access to client information. Financial data is processed through secure payment systems. Project documentation is maintained with appropriate confidentiality safeguards and access controls.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						SUPPLIER & PARTNER DATA SHARING
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Client information is shared with suppliers and subcontractors only as necessary for service delivery and project execution. All partners operate under confidentiality agreements protecting client data. Shipping companies receive necessary delivery information. Financial institutions receive required information for payment processing under strict security protocols.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						CLIENT RIGHTS & DATA ACCESS
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Clients have the right to access their business information, request data corrections, and understand how their data supports our services. Project documentation can be provided for business records and compliance purposes. Data retention follows business record-keeping requirements and contractual obligations. For privacy inquiries, contact privacy@gjfordservices.com.ng.
						</p>
					</div>
					)}

					{activeTab === "deliveryReturn" && (
					<div id='deliveryReturn' className='text-[#667085]'>
						<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
						DELIVERY & SERVICE POLICY - GABRIEL JORDAN FORD SERVICES LIMITED
						</h3>

						<p className='text-xs md:text-sm xl:text-base mb-4'>
						Gabriel Jordan Ford Services Limited provides comprehensive delivery solutions for general merchandise and professional contract services with quality assurance, reliable scheduling, and customer satisfaction guarantees across all service areas.
						</p>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							General Merchandise Delivery
						</h4>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
							<h5 className='font-medium text-xs md:text-sm mb-1'>Local Delivery (Lagos)</h5>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Same-day delivery for in-stock items ordered before 2 PM - ₦6,000</li>
								<li>Next-day delivery standard service - ₦4,000</li>
								<li>Free delivery for orders above ₦100,000</li>
								<li>Scheduled delivery appointments for large or complex orders</li>
							</ul>
							</div>
							<div>
							<h5 className='font-medium text-xs md:text-sm mb-1'>National Delivery</h5>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>2-7 business days depending on destination</li>
								<li>Delivery costs: ₦8,000 - ₦20,000 based on location and size</li>
								<li>Free shipping for orders above ₦200,000</li>
								<li>Tracking and insurance included for all interstate shipments</li>
							</ul>
							</div>
						</div>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Contract Services Delivery
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Project kickoff meetings scheduled within 48-72 hours of contract execution</li>
							<li>Milestone-based delivery schedule with client approval at each stage</li>
							<li>Regular progress reports and communication throughout project execution</li>
							<li>Quality inspections and client walkthrough before project completion</li>
							<li>Final documentation and service records provided at project closure</li>
							<li>Post-completion support period included with all contract services</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Installation & Setup Services
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Professional installation services for equipment and systems</li>
							<li>Pre-installation site assessment and preparation coordination</li>
							<li>Installation supervision and quality control throughout process</li>
							<li>System testing and commissioning before client handover</li>
							<li>User training and operation manual provision included</li>
							<li>Post-installation support and troubleshooting assistance</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Quality Assurance & Guarantees
						</h4>
						<div className='space-y-3'>
							<div>
							<p className='font-medium text-xs md:text-sm'>Merchandise Quality:</p>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Pre-delivery inspection and quality verification for all merchandise</li>
								<li>Manufacturer warranty support and claims processing assistance</li>
								<li>Quality guarantee with replacement for defective items</li>
								<li>Specifications verification and compliance documentation</li>
							</ul>
							</div>
							<div>
							<p className='font-medium text-xs md:text-sm'>Service Quality:</p>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Service delivery guarantee with timeline commitments</li>
								<li>Quality standards compliance and performance monitoring</li>
								<li>Customer satisfaction guarantee with corrective action protocols</li>
								<li>Warranty coverage appropriate to service type and duration</li>
							</ul>
							</div>
						</div>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Return & Exchange Policies
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>30-day return policy for unused merchandise in original condition</li>
							<li>Immediate replacement for defective or damaged items upon delivery</li>
							<li>Custom orders returnable only if defective or not meeting specifications</li>
							<li>Contract service guarantee with remedial work for quality issues</li>
							<li>Return shipping coordination and cost responsibility based on return reason</li>
							<li>Refund processing within 7-10 business days after return inspection</li>
						</ul>
						</div>
					</div>
					)}

					{activeTab === "refundPolicy" && (
					<div id='refundPolicy' className='text-[#667085]'>
						<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
						REFUND POLICY - GABRIEL JORDAN FORD SERVICES LIMITED
						</h3>
						<p className='text-xs md:text-sm xl:text-base mb-4'>
						Effective Date: {new Date().toLocaleDateString('en-GB')}
						</p>

						<p className='text-xs md:text-sm xl:text-base mb-4'>
						At Gabriel Jordan Ford Services Limited, we are committed to delivering exceptional general merchandise and contract services that meet client expectations and professional standards. Our comprehensive refund policy ensures fair treatment while maintaining service quality across all business areas.
						</p>

						<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<li>
							<span className='font-medium'>1. General Merchandise Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Full refund for defective or damaged merchandise within 30 days</li>
							<li>Quality standard refunds for items not meeting agreed specifications</li>
							<li>Wrong item delivery refunds with immediate replacement coordination</li>
							<li>Custom order refunds if specifications cannot be met as agreed</li>
							<li>Supplier default refunds with alternative sourcing at no additional cost</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>2. Contract Services Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Performance-based refunds for services not meeting agreed deliverables</li>
							<li>Timeline guarantee refunds for significant delays due to our performance</li>
							<li>Quality standard refunds for work not meeting professional expectations</li>
							<li>Scope completion refunds for incomplete project phases</li>
							<li>Client satisfaction refunds with corrective action alternatives</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>3. Installation & Setup Service Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Installation failure refunds if equipment cannot be properly installed</li>
							<li>System commissioning refunds if installations don&apos;t pass testing</li>
							<li>User training refunds if training doesn&apos;t enable proper system operation</li>
							<li>Setup service refunds for configurations not meeting operational requirements</li>
							<li>Technical support refunds for unresolved post-installation issues</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>4. Project Management Service Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Project coordination refunds for management failures affecting outcomes</li>
							<li>Communication breakdown refunds for poor project information management</li>
							<li>Resource management refunds if resource allocation affects project success</li>
							<li>Timeline management refunds for schedule failures due to our coordination</li>
							<li>Quality management refunds if oversight doesn&apos;t maintain standards</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>5. Non-Refundable Services & Items</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Completed contract services that meet agreed specifications and quality standards</li>
							<li>Merchandise delivered and accepted according to agreed terms</li>
							<li>Custom procurement services delivered within agreed parameters</li>
							<li>Third-party costs including shipping, permits, and vendor fees already incurred</li>
							<li>Client-initiated project changes or scope modifications</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>6. Refund Request Process</span>
							<p className='mt-1'>To request refunds for merchandise or services:</p>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Provide complete order or contract documentation</li>
							<li>Include detailed explanation with supporting evidence</li>
							<li>Allow inspection access for merchandise or service quality disputes</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>7. Refund Assessment & Processing</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Merchandise refund requests reviewed within 2 business days</li>
							<li>Service refunds assessed within 3-5 business days</li>
							<li>Quality inspection may be required for disputed items or work</li>
							<li>Client consultation to explore corrective action alternatives</li>
							<li>Approved refunds processed within 7-10 business days</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>8. Alternative Resolution Options</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Merchandise replacement or exchange for equivalent value items</li>
							<li>Service credits applicable to future orders and projects</li>
							<li>Corrective service work performed at no additional charge</li>
							<li>Extended warranty and support coverage as compensation</li>
							<li>Preferred customer status with enhanced service terms</li>
							</ul>
						</li>
						</ul>

					</div>
					)}
				</div>
				</main>
		</AppLayout>
	);
};

export default Page;
