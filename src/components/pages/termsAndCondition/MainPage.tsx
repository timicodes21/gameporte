import PageContainer from '@/components/layout/PageContainer';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const MainPage = () => {
  const [showContents, setShowContents] = useState(false);
  return (
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
            <Link href="/privacy">
              <span className="font-24 font-700 text-blue pointer py-1 px-2 my-1">
                Privacy Policy
              </span>
            </Link>

            <div className="my-2">
              <span
                className="font-24 font-700 text-blue pointer py-1 px-2 my-1"
                style={{ borderLeft: '5px solid #02baf1' }}
                onClick={() => setShowContents(!showContents)}
              >
                Terms and Condition
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
                <a href="#accounts-membership">
                  <span className="text-ash2 font-18 font-400">
                    1. Accounts and membership
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#user-content">
                  <span className="text-ash2 font-18 font-400">
                    2. User content
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#backups">
                  <span className="text-ash2 font-18 font-400">3. Backups</span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#links">
                  <span className="text-ash2 font-18 font-400">
                    4. Links to other resources
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#prohibited-users">
                  <span className="text-ash2 font-18 font-400">
                    5. Prohibited uses
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#property-rights">
                  <span className="text-ash2 font-18 font-400">
                    6. Intellectual property rights
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#limitation-liability">
                  <span className="text-ash2 font-18 font-400">
                    7. Limitation of liability
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#idemnification">
                  <span className="text-ash2 font-18 font-400">
                    8. Indemnification
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#severability">
                  <span className="text-ash2 font-18 font-400">
                    9. Severability
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#dispute-resolutions">
                  <span className="text-ash2 font-18 font-400">
                    10. Dispute resolution
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#changes-amenities">
                  <span className="text-ash2 font-18 font-400">
                    11. Changes and amendments
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#acceptance">
                  <span className="text-ash2 font-18 font-400">
                    12. Acceptance of these terms
                  </span>
                </a>
              </div>
              <div className="list pointer">
                <GoPrimitiveDot
                  style={{ color: '#C4D2FF', fontSize: '20px' }}
                />
                <a href="#contacting-us">
                  <span className="text-ash2 font-18 font-400">
                    13. Contacting us
                  </span>
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{
              textAlign: 'justify',
            }}
          >
            <div className="my-1">
              <span className="font-56 font-700 text-black2">
                Terms and Condition
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
                  These terms and conditions (“Agreement”) set forth the general
                  terms and conditions of your use of the gameporte.com website
                  (“Website”), “Game Porte” mobile application (“Mobile
                  Application”) and any of their related products and services
                  (collectively, “Services”).
                  <br />
                  <br />
                  This Agreement is legally binding between you (“User”, “you”
                  or “your”) and this Website operator and Mobile Application
                  developer (“Operator”, “we”, “us” or “our”). By accessing and
                  using the Services, you acknowledge that you have read,
                  understood, and agree to be bound by the terms of this
                  Agreement. If you are entering into this Agreement on behalf
                  of a business or other legal entity, you represent that you
                  have the authority to bind such entity to this Agreement, in
                  which case the terms “User”, “you” or “your” shall refer to
                  such entity.
                  <br />
                  <br />
                  If you do not have such authority, or if you do not agree with
                  the terms of this Agreement, you must not accept this
                  Agreement and may not access and use the Services. You
                  acknowledge that this Agreement is a contract between you and
                  the Operator, even though it is electronic and is not
                  physically signed by you, and it governs your use of the
                  Services. This terms and conditions policy was created with
                  the help of the terms and conditions generator.
                </span>
              </div>
            </div>
            {/* Accounts and membership */}
            <div id="accounts-membership">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Accounts and membership
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  You must be at least 13 years of age to use the Services. By
                  using the Services and by agreeing to this Agreement you
                  warrant and represent that you are at least 13 years of age.
                  If you create an account on the Services, you are responsible
                  for maintaining the security of your account and you are fully
                  responsible for all activities that occur under the account
                  and any other actions taken in connection with it. We may, but
                  have no obligation to, monitor and review new accounts before
                  you may sign in and start using the Services.
                  <br />
                  <br />
                  Providing false contact information of any kind may result in
                  the termination of your account. You must immediately notify
                  us of any unauthorized uses of your account or any other
                  breaches of security. We will not be liable for any acts or
                  omissions by you, including any damages of any kind incurred
                  as a result of such acts or omissions. We may suspend,
                  disable, or delete your account (or any part thereof) if we
                  determine that you have violated any provision of this
                  Agreement or that your conduct or content would tend to damage
                  our reputation and goodwill. If we delete your account for the
                  foregoing reasons, you may not re-register for our Services.
                  We may block your email address and Internet protocol address
                  to prevent further registration.
                </span>
              </div>
            </div>
            {/* User content */}
            <div id="user-content">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  User content
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  We do not own any data, information or material (collectively,
                  “Content”) that you submit on the Services in the course of
                  using the Service. You shall have sole responsibility for the
                  accuracy, quality, integrity, legality, reliability,
                  appropriateness, and intellectual property ownership or right
                  to use of all submitted Content. We may monitor and review the
                  Content on the Services submitted or created using our
                  Services by you. You grant us permission to access, copy,
                  distribute, store, transmit, reformat, display and perform the
                  Content of your user account solely as required for the
                  purpose of providing the Services to you. Without limiting any
                  of those representations or warranties, we have the right,
                  though not the obligation, to, in our own sole discretion,
                  refuse or remove any Content that, in our reasonable opinion,
                  violates any of our policies or is in any way harmful or
                  objectionable. You also grant us the license to use,
                  reproduce, adapt, modify, publish or distribute the Content
                  created by you or stored in your user account for commercial,
                  marketing or any similar purpose.
                </span>
              </div>
            </div>
            {/* Backups */}
            <div id="backups">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">Backups</span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  We perform regular backups of the Website and its Content and
                  will do our best to ensure completeness and accuracy of these
                  backups. In the event of the hardware failure or data loss we
                  will restore backups automatically to minimize the impact and
                  downtime.
                </span>
              </div>
            </div>
            {/* Links to other resources */}
            <div id="links">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Links to other resources
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  Although the Services may link to other resources (such as
                  websites, mobile applications, etc.), we are not, directly or
                  indirectly, implying any approval, association, sponsorship,
                  endorsement, or affiliation with any linked resource, unless
                  specifically stated herein. Some of the links on the Services
                  may be “affiliate links”. This means if you click on the link
                  and purchase an item, the Operator will receive an affiliate
                  commission. We are not responsible for examining or
                  evaluating, and we do not warrant the offerings of, any
                  businesses or individuals or the content of their resources.
                  We do not assume any responsibility or liability for the
                  actions, products, services, and content of any other third
                  parties. You should carefully review the legal statements and
                  other conditions of use of any resource which you access
                  through a link on the Services. Your linking to any other
                  off-site resources is at your own risk.
                </span>
              </div>
            </div>
            {/* Prohibited uses */}
            <div id="prohibited-users">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Prohibited uses
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  In addition to other terms as set forth in the Agreement, you
                  are prohibited from using the Services or Content: (a) for any
                  unlawful purpose; (b) to solicit others to perform or
                  participate in any unlawful acts; (c) to violate any
                  international, federal, provincial or state regulations,
                  rules, laws, or local ordinances; (d) to infringe upon or
                  violate our intellectual property rights or the intellectual
                  property rights of others; (e) to harass, abuse, insult, harm,
                  defame, slander, disparage, intimidate, or discriminate based
                  on gender, sexual orientation, religion, ethnicity, race, age,
                  national origin, or disability; (f) to submit false or
                  misleading information; (g) to upload or transmit viruses or
                  any other type of malicious code that will or may be used in
                  any way that will affect the functionality or operation of the
                  Services, third party products and services, or the Internet;
                  (h) to spam, phish, pharm, pretext, spider, crawl, or scrape;
                  (i) for any obscene or immoral purpose; or (j) to interfere
                  with or circumvent the security features of the Services,
                  third party products and services, or the Internet. We reserve
                  the right to terminate your use of the Services for violating
                  any of the prohibited uses.
                </span>
              </div>
            </div>
            {/* Intellectual property rights */}
            <div id="property-rights">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Intellectual property rights
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  “Intellectual Property Rights” means all present and future
                  rights conferred by statute, common law or equity in or in
                  relation to any copyright and related rights, trademarks,
                  designs, patents, inventions, goodwill and the right to sue
                  for passing off, rights to inventions, rights to use, and all
                  other intellectual property rights, in each case whether
                  registered or unregistered and including all applications and
                  rights to apply for and be granted, rights to claim priority
                  from, such rights and all similar or equivalent rights or
                  forms of protection and any other results of intellectual
                  activity which subsist or will subsist now or in the future in
                  any part of the world. This Agreement does not transfer to you
                  any intellectual property owned by the Operator or third
                  parties, and all rights, titles, and interests in and to such
                  property will remain (as between the parties) solely with the
                  Operator. All trademarks, service marks, graphics and logos
                  used in connection with the Services, are trademarks or
                  registered trademarks of the Operator or its licensors. Other
                  trademarks, service marks, graphics and logos used in
                  connection with the Services may be the trademarks of other
                  third parties. Your use of the Services grants you no right or
                  license to reproduce or otherwise use any of the Operator or
                  third party trademarks.
                </span>
              </div>
            </div>
            {/* Limitation of liability */}
            <div id="limitation-liability">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Limitation of liability
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  To the fullest extent permitted by applicable law, in no event
                  will the Operator, its affiliates, directors, officers,
                  employees, agents, suppliers or licensors be liable to any
                  person for any indirect, incidental, special, punitive, cover
                  or consequential damages (including, without limitation,
                  damages for lost profits, revenue, sales, goodwill, use of
                  content, impact on business, business interruption, loss of
                  anticipated savings, loss of business opportunity) however
                  caused, under any theory of liability, including, without
                  limitation, contract, tort, warranty, breach of statutory
                  duty, negligence or otherwise, even if the liable party has
                  been advised as to the possibility of such damages or could
                  have foreseen such damages. To the maximum extent permitted by
                  applicable law, the aggregate liability of the Operator and
                  its affiliates, officers, employees, agents, suppliers and
                  licensors relating to the services will be limited to an
                  amount greater of one dollar or any amounts actually paid in
                  cash by you to the Operator for the prior one month period
                  prior to the first event or occurrence giving rise to such
                  liability. The limitations and exclusions also apply if this
                  remedy does not fully compensate you for any losses or fails
                  of its essential purpose.
                </span>
              </div>
            </div>
            {/* Indemnification */}
            <div id="idemnification">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Indemnification
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  You agree to indemnify and hold the Operator and its
                  affiliates, directors, officers, employees, agents, suppliers
                  and licensors harmless from and against any liabilities,
                  losses, damages or costs, including reasonable attorneys’
                  fees, incurred in connection with or arising from any third
                  party allegations, claims, actions, disputes, or demands
                  asserted against any of them as a result of or relating to
                  your Content, your use of the Services or any willful
                  misconduct on your part.
                </span>
              </div>
            </div>
            {/* Severability */}
            <div id="severability">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Severability
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  All rights and restrictions contained in this Agreement may be
                  exercised and shall be applicable and binding only to the
                  extent that they do not violate any applicable laws and are
                  intended to be limited to the extent necessary so that they
                  will not render this Agreement illegal, invalid or
                  unenforceable. If any provision or portion of any provision of
                  this Agreement shall be held to be illegal, invalid or
                  unenforceable by a court of competent jurisdiction, it is the
                  intention of the parties that the remaining provisions or
                  portions thereof shall constitute their agreement with respect
                  to the subject matter hereof, and all such remaining
                  provisions or portions thereof shall remain in full force and
                  effect.
                </span>
              </div>
            </div>
            {/* Dispute resolution */}
            <div id="dispute-resolutions">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Dispute resolution
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  The formation, interpretation, and performance of this
                  Agreement and any disputes arising out of it shall be governed
                  by the substantive and procedural laws of Nigeria without
                  regard to its rules on conflicts or choice of law and, to the
                  extent applicable, the laws of Nigeria. The exclusive
                  jurisdiction and venue for actions related to the subject
                  matter hereof shall be the courts located in Nigeria, and you
                  hereby submit to the personal jurisdiction of such courts. You
                  hereby waive any right to a jury trial in any proceeding
                  arising out of or related to this Agreement. The United
                  Nations Convention on Contracts for the International Sale of
                  Goods does not apply to this Agreement.
                </span>
              </div>
            </div>
            {/* Changes and amendments */}
            <div id="changes-amenities">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Changes and amendments
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  We reserve the right to modify this Agreement or its terms
                  relating to the Services at any time, effective upon posting
                  of an updated version of this Agreement on the Services. When
                  we do, we will post a notification within the Services.
                  Continued use of the Services after any such changes shall
                  constitute your consent to such changes.
                </span>
              </div>
            </div>
            {/* Acceptance of these terms */}
            <div id="acceptance">
              <div className="my-2">
                <span className="font-24 font-700 text-black2">
                  Acceptance of these terms
                </span>
              </div>
              <div className="my-2">
                <span className="font-18 font-400 text-gray">
                  You acknowledge that you have read this Agreement and agree to
                  all its terms and conditions. By accessing and using the
                  Services you agree to be bound by this Agreement. If you do
                  not agree to abide by the terms of this Agreement, you are not
                  authorized to access or use the Services.
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
                  If you would like to contact us to understand more about this
                  Agreement or wish to contact us concerning any matter relating
                  to it, you may do so via the contact form or send an email to
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
  );
};

export default MainPage;
