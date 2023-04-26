import PageContainer from '@/components/layout/PageContainer';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const MainPage = () => {
  const [showContents, setShowContents] = useState(false);
  return (
    <>
      <PageContainer>
        <Box
          className="my-2 my-md-4"
          sx={{
            margin: '2rem 0',
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <div>
                <span className="font-20 font-700 text-blue py-2 px-2">
                  Terms of use
                </span>
              </div>
              <div>
                <span
                  className="font-24 font-700 text-blue pointer py-1 px-2 my-1"
                  onClick={() => setShowContents(!showContents)}
                  style={{ borderLeft: '5px solid #02baf1' }}
                >
                  Privacy Policy
                </span>
              </div>

              <div
                className={
                  showContents
                    ? 'my-2 ms-1 privacy-details-container active'
                    : 'my-2 ms-1 privacy-details-container'
                }
              >
                <div className="list pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#automatic-collection">
                    <span className="text-ash2 font-18 font-400">
                      1. Automatic collection of information
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#collection-personal">
                    <span className="text-ash2 font-18 font-400">
                      2. Collection of Personal Information
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#managing-personal">
                    <span className="text-ash2 font-18 font-400">
                      3. Managing Personal Information
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#storing-personal">
                    <span className="text-ash2 font-18 font-400">
                      4. Storing Personal Information
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#use-processing">
                    <span className="text-ash2 font-18 font-400">
                      5. Use and Processing of Collected Information
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#rights-users">
                    <span className="text-ash2 font-18 font-400">
                      6. The Rights of Users
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#rights-object">
                    <span className="text-ash2 font-18 font-400">
                      7. The Right to Object to Processing
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#privacy-children">
                    <span className="text-ash2 font-18 font-400">
                      8. Privacy of Children
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <a href="#cookies">
                    <span className="text-ash2 font-18 font-400">
                      9. Newsletters
                    </span>
                  </a>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />
                  <span className="text-ash2 font-18 font-400">
                    10. Cookies
                  </span>
                </div>
                <div className="list align-items-center pointer">
                  <GoPrimitiveDot
                    style={{ color: '#C4D2FF', fontSize: '20px' }}
                  />

                  <a href="#contacting-us">
                    <span className="text-ash2 font-18 font-400">
                      11.Contacting us
                    </span>
                  </a>
                </div>
              </div>

              <Link href="/terms">
                <span className="font-24 font-700 text-blue pointer py-1 px-2 my-1">
                  Terms and Conditions
                </span>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              sx={{
                textAlign: 'justify',
              }}
            >
              <div className="my-1">
                <span className="font-56 font-700 text-black2">
                  Privacy Policy
                </span>
              </div>
              {/* updated */}
              <div>
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Updated May 2022
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    This privacy policy (“Policy”) describes how Gameporte.com
                    (“Website Operator”, “we”, “us” or “our”) collects, protects
                    and uses the personally identifiable information (“Personal
                    Information”) you (“User”, “you” or “your”) may provide on
                    the gameporte.com website and any of its products or
                    services (collectively, “Website” or “Services”). <br />
                    <br /> It also describes the choices available to you
                    regarding our use of your Personal Information and how you
                    can access and update this information. This Policy does not
                    apply to the practices of companies that we do not own or
                    control, or to individuals that we do not employ or manage.
                  </span>
                </div>
              </div>
              {/* automatic collection */}
              <div id="automatic-collection">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Automatic collection of information
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    Our top priority is customer data security and, as such, we
                    exercise the no logs policy. We process only minimal user
                    data, only as much as it is absolutely necessary to maintain
                    the Website or Services. Information collected automatically
                    is used only to identify potential cases of abuse and
                    establish statistical information regarding Website usage.
                    This statistical information is not otherwise aggregated in
                    such a way that would identify any particular user of the
                    system.
                  </span>
                </div>
              </div>
              {/* collection of personal information */}
              <div id="collection-personal">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Collection of Personal Information
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    You can visit the Website without telling us who you are or
                    revealing any information by which someone could identify
                    you as a specific, identifiable individual. If, however, you
                    wish to use some of the Website’s features, you will be
                    asked to provide certain Personal Information (for example,
                    your name and e-mail address). We receive and store any
                    information you knowingly provide to us when you create an
                    account, or fill any online forms on the Website. When
                    required, this information may include contact information
                    such as email address, address, etc. <br />
                    <br /> You can choose not to provide us with your Personal
                    Information, but then you may not be able to take advantage
                    of some of the Website’s features. Users who are uncertain
                    about what information is mandatory are welcome to contact
                    us.
                  </span>
                </div>
              </div>
              {/* Managing Personal Information */}
              <div id="managing-personal">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Managing Personal Information
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    You are able to delete certain Personal Information we have
                    about you. The Personal Information you can delete may
                    change as the Website or Services change. When you delete
                    Personal Information, however, we may maintain a copy of the
                    unrevised Personal Information in our records for the
                    duration necessary to comply with our obligations to our
                    affiliates and partners, and for the purposes described
                    below. If you would like to delete your Personal Information
                    or permanently delete your account, you can do so on the
                    settings page of your account on the Website.
                  </span>
                </div>
              </div>
              {/* Storing Personal Information */}
              <div id="storing-personal">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Storing Personal Information
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    We will retain and use your Personal Information for the
                    period necessary to comply with our legal obligations,
                    resolve disputes, and enforce our agreements unless a longer
                    retention period is required or permitted by law. We may use
                    any aggregated data derived from or incorporating your
                    Personal Information after you update or delete it, but not
                    in a manner that would identify you personally. Once the
                    retention period expires, Personal Information shall be
                    deleted. Therefore, the right to access, the right to
                    erasure, the right to rectification and the right to data
                    portability cannot be enforced after the expiration of the
                    retention period.
                  </span>
                </div>
              </div>
              {/* Use and Processing of Collected Information */}
              <div id="use-processing">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Use and Processing of Collected Information
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    In order to make our Website and Services available to you,
                    or to meet a legal obligation, we need to collect and use
                    certain Personal Information. If you do not provide the
                    information that we request, we may not be able to provide
                    you with the requested products or services. Some of the
                    information we collect is directly from you via our Website.
                    However, we may also collect Personal Information about you
                    from other sources. Any of the information we collect from
                    you may be used for the following purposes: Create and
                    manage user accounts Send administrative information Respond
                    to inquiries and offer support Request user feedback
                    Administer prize draws and competitions Enforce terms and
                    conditions and policies Protect from abuse and malicious
                    users Respond to legal requests and prevent harm Run and
                    operate our Website and Services Processing your Personal
                    Information depends on how you interact with our Website,
                    where you are located in the world and if one of the
                    following applies: <br /> (i) You have given your consent
                    for one or more specific purposes. This, however, does not
                    apply, whenever the processing of Personal Information is
                    subject to California Consumer Privacy Act or European data
                    protection law; (ii) Provision of information is necessary
                    for the performance of an agreement with you and/or for any
                    pre-contractual obligations thereof; (iii) Processing is
                    necessary for compliance with a legal obligation to which
                    you are subject; (iv) Processing is related to a task that
                    is carried out in the public interest or in the exercise of
                    official authority vested in us; (v) Processing is necessary
                    for the purposes of the legitimate interests pursued by us
                    or by a third party. <br /> Note that under some
                    legislations we may be allowed to process information until
                    you object to such processing (by opting out), without
                    having to rely on consent or any other of the following
                    legal bases below. In any case, we will be happy to clarify
                    the specific legal basis that applies to the processing, and
                    in particular whether the provision of Personal Information
                    is a statutory or contractual requirement, or a requirement
                    necessary to enter into a contract.
                  </span>
                </div>
              </div>
              {/* The Rights of Users */}
              <div id="rights-users">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    The Rights of Users
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    You may exercise certain rights regarding your information
                    processed by us. In particular, you have the right to do the
                    following: (i) you have the right to withdraw consent where
                    you have previously given your consent to the processing of
                    your information; (ii) you have the right to object to the
                    processing of your information if the processing is carried
                    out on a legal basis other than consent; (iii) you have the
                    right to learn if information is being processed by us,
                    obtain disclosure regarding certain aspects of the
                    processing and obtain a copy of the information undergoing
                    processing; (iv) you have the right to verify the accuracy
                    of your information and ask for it to be updated or
                    corrected; (v) you have the right, under certain
                    circumstances, to restrict the processing of your
                    information, in which case, we will not process your
                    information for any purpose other than storing it; (vi) you
                    have the right, under certain circumstances, to obtain the
                    erasure of your Personal Information from us; (vii) you have
                    the right to receive your information in a structured,
                    commonly used and machine readable format and, if
                    technically feasible, to have it transmitted to another
                    controller without any hindrance. This provision is
                    applicable provided that your information is processed by
                    automated means and that the processing is based on your
                    consent, on a contract which you are part of or on
                    pre-contractual obligations thereof.
                  </span>
                </div>
              </div>
              {/* The Right to Object to Processing */}
              <div id="rights-object">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    The Right to Object to Processing
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    Where Personal Information is processed for the public
                    interest, in the exercise of an official authority vested in
                    us or for the purposes of the legitimate interests pursued
                    by us, you may object to such processing by providing a
                    ground related to your particular situation to justify the
                    objection. You must know that, however, should your Personal
                    Information be processed for direct marketing purposes, you
                    can object to that processing at any time without providing
                    any justification. To learn, whether we are processing
                    Personal Information for direct marketing purposes, you may
                    refer to the relevant sections of this document.
                    <br />
                    <br />
                    <span className="font-20 font-700">
                      How to exercise these rights
                    </span>
                    <br />
                    <br />
                    Any requests to exercise User rights can be directed to the
                    Owner through the contact details provided in this document.
                    These requests can be exercised free of charge and will be
                    addressed by the Owner as early as possible.
                    <span className="font-20 font-700">
                      California privacy rights
                    </span>
                    <br />
                    <br />
                    In addition to the rights as explained in this Privacy
                    Policy, California residents who provide Personal
                    Information (as defined in the statute) to obtain products
                    or services for personal, family, or household use are
                    entitled to request and obtain from us, once a calendar
                    year, information about the Personal Information we shared,
                    if any, with other businesses for marketing uses. If
                    applicable, this information would include the categories of
                    Personal Information and the names and addresses of those
                    businesses with which we shared such personal information
                    for the immediately prior calendar year (e.g., requests made
                    in the current year will receive information about the prior
                    year). To obtain this information please contact us.
                  </span>
                </div>
              </div>
              {/* Privacy of Children */}
              <div id="privacy-children">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Privacy of Children
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    We do not knowingly collect any Personal Information from
                    children under the age of 13. If you are under the age of
                    13, please do not submit any Personal Information through
                    our Website or Service. We encourage parents and legal
                    guardians to monitor their children’s Internet usage and to
                    help enforce this Policy by instructing their children never
                    to provide Personal Information through our Website or
                    Service without their permission. <br />
                    <br /> If you have reason to believe that a child under the
                    age of 13 has provided Personal Information to us through
                    our Website or Service, please contact us. You must also be
                    old enough to consent to the processing of your Personal
                    Information in your country (in some countries we may allow
                    your parent or guardian to do so on your behalf)
                  </span>
                </div>
              </div>
              {/* Cookies */}
              <div id="cookies">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">Cookies</span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    The Website uses “cookies” to help personalize your online
                    experience. A cookie is a text file that is placed on your
                    hard disk by a web page server. Cookies cannot be used to
                    run programs or deliver viruses to your computer. Cookies
                    are uniquely assigned to you, and can only be read by a web
                    server in the domain that issued the cookie to you.
                    <br />
                    <br /> We may use cookies to collect, store, and track
                    information for statistical purposes to operate our Website
                    and Services. You have the ability to accept or decline
                    cookies. Most web browsers automatically accept cookies, but
                    you can usually modify your browser setting to decline
                    cookies if you prefer. To learn more about cookies and how
                    to manage them, visit internetcookies.org
                    <br />
                    <br />
                    <span className="font-20 font-700">
                      Do Not Track signals
                    </span>
                    <br />
                    <br />
                    Some browsers incorporate a Do Not Track feature that
                    signals to websites you visit that you do not want to have
                    your online activity tracked. Tracking is not the same as
                    using or collecting information in connection with a
                    website. For these purposes, tracking refers to collecting
                    personally identifiable information from consumers who use
                    or visit a website or online service as they move across
                    different websites over time. Our Website does not track its
                    visitors over time and across third party websites. However,
                    some third party sites may keep track of your browsing
                    activities when they serve you content, which enables them
                    to tailor what they present to you.
                    <span className="font-20 font-700">
                      Links to other websites
                    </span>
                    <br />
                    <br />
                    Our Website contains links to other websites that are not
                    owned or controlled by us. Please be aware that we are not
                    responsible for the privacy practices of such other websites
                    or third-parties. We encourage you to be aware when you
                    leave our Website and to read the privacy statements of each
                    and every website that may collect Personal Information.
                    <br />
                    <br />
                    <span className="font-20 font-700">
                      Information security
                    </span>
                    <br />
                    <br />
                    We secure information you provide on computer servers in a
                    controlled, secure environment, protected from unauthorized
                    access, use, or disclosure. We maintain reasonable
                    administrative, technical, and physical safeguards in an
                    effort to protect against unauthorized access, use,
                    modification, and disclosure of Personal Information in its
                    control and custody. However, no data transmission over the
                    Internet or wireless network can be guaranteed. Therefore,
                    while we strive to protect your Personal Information, you
                    acknowledge that (i) there are security and privacy
                    limitations of the Internet which are beyond our control;
                    (ii) the security, integrity, and privacy of any and all
                    information and data exchanged between you and our Website
                    cannot be guaranteed; and (iii) any such information and
                    data may be viewed or tampered with in transit by a
                    third-party, despite best efforts.
                    <br />
                    <br />
                    <span className="font-20 font-700">Data breach</span>
                    <br />
                    <br />
                    Website has been compromised or users Personal Information
                    has been disclosed to unrelated third parties as a result of
                    external activity, including, but not limited to, security
                    attacks or fraud, we reserve the right to take reasonably
                    appropriate measures, including, but not limited to,
                    investigation and reporting, as well as notification to and
                    cooperation with law enforcement authorities. In the event
                    of a data breach, we will make reasonable efforts to notify
                    affected individuals if we believe that there is a
                    reasonable risk of harm to the user as a result of the
                    breach or if notice is otherwise required by law. When we
                    do, we will send you an email.
                    <br />
                    <br />
                    <span className="font-20 font-700">Legal disclosure</span>
                    <br />
                    <br />
                    We will disclose any information we collect, use or receive
                    if required or permitted by law, such as to comply with a
                    subpoena, or similar legal process, and when we believe in
                    good faith that disclosure is necessary to protect our
                    rights, protect your safety or the safety of others,
                    investigate fraud, or respond to a government request.
                    <br />
                    <br />
                    <span className="font-20 font-700">
                      Changes and amendments
                    </span>
                    <br />
                    <br />
                    We may update this Privacy Policy from time to time in our
                    discretion and will notify you of any material changes to
                    the way in which we treat Personal Information. When changes
                    are made, we will send you an email to notify you. We may
                    also provide notice to you in other ways in our discretion,
                    such as through contact information you have provided. Any
                    updated version of this Privacy Policy will be effective
                    immediately upon the posting of the revised Privacy Policy
                    unless otherwise specified. Your continued use of the
                    Website or Services after the effective date of the revised
                    Privacy Policy (or such other act specified at that time)
                    will constitute your consent to those changes. However, we
                    will not, without your consent, use your Personal Data in a
                    manner materially different than what was stated at the time
                    your Personal Data was collected.
                    <br />
                    <br />
                    <span className="font-20 font-700">
                      Acceptance of this policy
                    </span>
                    <br />
                    <br />
                    You acknowledge that you have read this Policy and agree to
                    all its terms and conditions. By using the Website or its
                    Services you agree to be bound by this Policy. If you do not
                    agree to abide by the terms of this Policy, you are not
                    authorized to use or access the Website and its Services.
                  </span>
                </div>
              </div>
              {/* Contacting us */}
              <div id="contacting-us">
                <div className="my-2">
                  <span className="font-24 font-700 text-black2">
                    Contacting us
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-18 font-400 text-gray">
                    If you would like to contact us to understand more about
                    this Policy or wish to contact us concerning any matter
                    relating to individual rights and your Personal Information,
                    you may send an email to{' '}
                    <a
                      href="mailto:support@gameporte.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      support@gameporte.com
                    </a>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
};

export default MainPage;
