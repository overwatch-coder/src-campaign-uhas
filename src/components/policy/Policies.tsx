'use client'

const dedent = require('dedent-js')
import React, { useState } from 'react'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import AchievementCard from '../about/AchievementCard';




const Policies = () => {
  const [currentPolicy, setCurrentPolicy] = useState(1);
  const [showPolicyCategory, setShowPolicyCategory] = useState(true);

  const policies = [
    {
      id: 1,
      preamble: `The Johnson-Mensah-led administration will work diligently at the outset of this administration to reposition institutions and crucial cooperating bodies within the SRC, to ensure all bodies are operating at their peak without unwarranted interferences. A decentralized system in governance has proven vital in every successful administration.`,
      categories: [
        {
          title: '',
          description: {
            describe: 'The following actions, in our opinion, can contribute to achieving this objective:',
            subtitle: '',
            point: '• Cooperation with departmental associations, churches, clubs, and societies as significant decision-makers through sporadic stakeholder meetings to ensure active engagement of all institutions under the SRC.',
            point1: `• The Johnson-Mensah-led administration will ensure that the Parliamentary and Judicial Councils are held in high regard. It will be committed to providing them with the resources they need to fulfill their constitutional duties and increasing their visibility without interference from the Executive or any other outside body.`,
            point2: `• Increase relevance and connection with students. 
            This will be done through the creation of Town Hall meetings, 
            creation of an online feedback system and an SRC website with more updated, 
            accessible and user-friendly model.`,
            point3: `• As a long-term project, this administration will start the planning 
            and implementation of a strategic plan for the SRC which is going to 
            be a long-term policy guide encompassing clear cut goals, initiatives and 
            objectives of the SRC. This is envisioned to be a 10-year strategic plan.`
          }
        }
      ],
      title: 'Administration & Government',
    },
    {
      id: 2,
      preamble: `The social lives of students cannot be completely without entertainment. The Johnson-Mensah-led administration values entertainment as a way to give students pleasure, satisfaction, and relaxation. We have always found pleasure during the yearly Akwaaba Week and SRC Week Celebrations, which are jam-packed with exciting events. By adding these innovative events in addition to the customary ones, the Johnson-Mensah-led administration hopes to promote amusement;`,
      categories: [
        {
          title: '',
          description: {
            subtitle: `Culture and Creative Arts Promotion`,
            describe: "We believe in human resource development. Oftentimes in society, talent development and promotion are overlooked. When these talents however shine society cannot wait than to boast. We will,",  
            point: '• Introduce an Arts and Culture Festival which will both see talents from all spheres of art coming together to display their unique sense of greatness. This is may come with monetary incentives pending support from corporate bodies interest in promoting Arts and Culture. This is envisioned to be done in collaboration with the Department of General and Liberal Studies of the University and the UHAS Cultural Troupe.'
          }
        },
        {
          title: '',
          description: {
            subtitle: 'Sports and Recreation',
            describe: `In every academic setting, sporting activities are a vital component. Over the last decade, various disciplines of sports have been overlooked, thereby impeding on our successes at external competitions and retarding the development of talents of junior members in such disciplines. The Johnson-X led administration will:`,
            point: '• Liaise with management to prioritise the commenced sporting centre project',
            point1: '• Engage the sports Directorate on the possible introduction of more sports',
            point2: '• Advocate for sportsmen and women to be given exemptions from academic work when competitions clash with academic activity.'
          }
        },
        {
          title: '',
          description: {
            describe: ``,
            subtitle: 'Entertainment',
            point: '• Initiate procurement processes for newer sound systems and stage lighting for both Ho and Hohoe campuses to be used by the SRC and also available for hiring to cut-down the perpetual cost of hiring these items as well us help generate funds through their hiring.'
          }
        }
      ],
      title: 'Sports, Entertainment & Recreation'
    },
    {
      id: 3,
      preamble: 'A Johnson-Mensah-led administration will hold student safety a priority and stand by a position that students must not be at risk of danger. The inadequacy of residential facilities (hostels) on campus which would have otherwise housed or accommodated majority or the entire population of students. The security situation of adjoining communities where hostels are concentrated must be looked at to minimise threats by miscreants who take advantage. The SRC must as a matter of urgency, step in as a partner to carry out what has been neglected by the local government. A Johnson-Mensah-led administration will:',
      categories: [
        {
          title: '',
          description: {
            describe: '',
            subtitle: ``,
            point: '• Advocate for the provision and installation of streetlights at various suburbs in Ho and Hohoe Municipalities with a keen focus on respective jurisdictions where UHAS-affiliated hostels are located.',
            point1: '• Liaise with the security services to create more security checkpoints and encourage police patrols at vantage and high-risk points to be duly profiled and identified by these services. Even though there is a concession that the two above may be long-term policies, we envision a fast-tracked process during our administration.',
            point2: '• Organise periodic seminars on security for students. These may include basic self-defence mechanisms and safety tips to reduce extent of risk of harm posed to students.',
            point3: '• Partner with the Security Unit of UHAS to create a campus security hotline which students can quickly dial and get help in times of security emergencies.',
          }
        },
      ],
      title: 'Security & Safety'
    },

    {
      id: 4,
      preamble: 'The sole dependence on the limited funds provided by the SRC dues, there has been very huge constraints on the resources available to support all the desired projects and initiatives of the SRC. As a result of this, there is a need for upcoming administrations to generate alternative funds to support the SRC. A Johnson-Mensah-led administration will;',
      categories: [
        {
          title: '',
          description: {
            describe: '',
            subtitle: '',
            point: '• Reinstate the production and sales of SRC souvenirs.',
            point1: '• Procure decoration items which are going to be used for SRC Programmes, Nursing seminars and various student programmes and a reduced cost than the standard prices charged by private owners. This will ensure that students do not go through the hustle and bustle of getting these items especially for their seminars. This will also cut cost on the path of students.',
            point2: '• There will also the procurement of home visiting bags which will be available for hiring by students who will be having their community rotations. Pricing will be done such that there is an advantage over that of private owners whiles maintaining an appreciable profit margin for the SRC.',
          }
        },
      ],
      title: 'SRC Internally Generated Funds'
    },
    {
      id: 5,
      preamble: '',
      categories: [
        {
          title: 'The “No Chair” Bug',
          description: {
            subtitle: 'Problem:',
            describe: `The public outcry by students on the lack of chairs in lecture halls has been an aged one. The struggle for chairs during lectures is nothing to write home about. This is a systemic problem that has plagued us for years and needs a systemic and structural change.`,
            point: '.'
          }
        },
        {
          title: '',
          description: {
            subtitle: 'Tipping point:',
            describe: `This everyday hustle obviously retrogresses efforts by the university to promote a friendly academic environment. It goes a long way to harm student comfort and generally breeds a hostile learning environment. Also, with the Universities’ continuous increase in the intake of freshmen, there is an urgency beyond a reasonable doubt to act now. The big question is whether the failure to remedy the problem is due to reluctance on the side of management or whether the disease remains an incurable one.`,
            point: '.',
            }
        },
        {
          title: '',
          description: {
            subtitle: 'Solution:',
            describe: ` A Johnson-Mensah administration believes that strong political will can bring resolve
            to the problem. We will:`,
            point: 'a. Liaise with the Academics Affairs Unit to immediately review class allocations. Which will be based on class population and lecture hall sizes to ensure that classes with larger numbers are allocated to bigger lecture halls whiles those with smaller numbers are allocated rooms equivalent to them.',
            point1: 'b. Liaise with University Management to procure more chairs to fill all lecture halls and effect anti-mobility measures like bracing to prevent students from moving them. The procurement of chairs will also include the expansion of lovers’ benches and summer huts capacities aimed at providing a resting place for students on both campuses. ',
            point2: 'c. Liaise with management and external stakeholders to procure special chairs for use at the University auditoriums to prevent the habit of depending on lecture hall chairs in organising events at the venue to bring down the pressure on them. This will also double serve as a pre-emptive maintenance measure.'
          }
        },
        {
          title: 'Library Advocacy',
          description: {
            describe: `Over 8,000 people are now enrolled at the university. However, there is a significant limit to how many pupils the e-library and traditional libraries can hold. This works against the ability of students in harnessing the prospects of research as a powerful tool for higher education. To improve on accessibility, the Johnson-X led administration will:`,
            subtitle: '',
            point: 'a) Liaise with Management the University Library to make the University E-library system more appealing and accessible through frequent educational programmes to enlighten the student populace on this system.',
            point1: 'b) Advocate for a 24-hour operation of the University library during examination periods.',
          }
        },
        {
          title: 'Vocational Training Enlightenment And Accessibility',
          description: {
            describe: `It is without doubt that the University’s flagship programme, Vocational Training, has over the years potentiated the efforts of faculty by providing on-site real and practical knowledge and skills to augment classroom work. However, there is a daunting systemic barrier in harnessing the full potential of this programme especially with regards to first years who lack enough information of either the facilities they should choose or what facilities are closer to their vicinities. A Johnson-X led administration will:`,
            subtitle: '',
            point: '• Liaise with the Vocational Training Unit of the University to partner with more facilities to provide opportunities for UHAS Students.',
            point1: '• Liaise with the Vocational Training Unit of the University to provide a comprehensive handbook to adequately profile facilities in all 16 regions available and most recommended for students. This will also include comprehensive details of their locations and their contact details to make it easier for students in selecting and reaching their preferred facilities. This solves the systemic problem of students especially level 100s having to go through the hustle and bustle of scavenging for facilities to have their Vocational Training.',
          }
        },
        {
          title: 'Academic Infrastructure',
          description: {
            describe: `Academic infrastructure plays a vital role in ensuring the overall quality of education and learning experience for students. It contributes to fostering a positive learning environment, promoting research and innovation and reflecting the institution’s commitment to academic excellence. A Johnson-Mensah-led administration will;`,
            subtitle: '',
            point: '• Liaise with management to ensure the availability of projectors, teaching aids and other requisite infrastructure to make teaching and learning easier and more comfortable.',
            point1: '• Liaise with management to provide functional public address systems to facilitate effective teaching and learning. This will particularly be beneficial to very large classes.',
            point2: '• Liaise with management to ensure the faster and timely release of End of Semester results to ease the pressure on students as well as ensure students adapt to the results and make tactical adjustments.',
          }
        }
      ],
      title: 'Academics'
    },
    {
      id: 6,
      preamble: 'The physical, mental and social well-being of every member of the SRC is one that must at all cost be watched with an eagle eye. A Johnson-Mensah-led administration will;',
      categories: [
        {
          title: '',
          description: {
            describe: ``,
            subtitle: '',
            point: '• Support the UHAS Red Cross Society in organizing hostel-based first aid education to equip students with the requisite practical first aid skills needed during emergency situations.',
            point1: '• Ensure the continuity of the UHAS Hospital Card at the Ho Teaching Hospital and negotiate for a more nuanced care for UHAS students.',
            point2: '• Liasing with the University janitors to ensure that washrooms on campus are clean always and stocked with enough tissue papers.',
          }
        },
        {
          title: '',
          description: {
            describe: '',
            subtitle: '',
            point: '• Ensuring the presence of more waste bins on campus by liaising with the necessary stakeholders.'
          }
        }
      ],
      title: 'Health and Sanitation'
    },
    {
      id: 7,
      preamble: 'The cost of transportation to students living at non-residential facilities continues to highly affect students economically. With a due acknowledgement of an existing shuttling system, the intervention although still in place at has failed to stand the test of time on. A Johnson-Mensah-led administration will:',
      categories: [
        {
          title: '',
          description: {
            describe: '',
            subtitle: ``,
            point: '• Ascertain the cause of the deteriorating services in thorough details, institute measures to revive it in a more robust, efficient and sustainable way. Other private transport partnership may be considered to augment the Ayalolo services on both campuses.',
            point1: '• Open negotiations to restructure the cost of shuttling services. This is aimed at reducing the burden of huge transport fares on students making lectures sometimes inaccessible to students.',
            point2: '• Engage the required parties to advocate for flexible transportation methods for students residing in hostels situated on the main campus to ease their difficulty in accessing the township. This may include a negotiation with the Taxi unions and GPRTU of the Ho municipality.',
          }
        },
      ],
      title: 'Transport'
    },
    {
      id: 8,
      preamble: 'It is prudent to recognize that the well-being of students is a pre-requisite to they having a safe and sound mind to actively engage in academic activities which is the main purpose of their stay in UHAS.   It is therefore imperative that the well-being of students is put above all. This section will comprise of   a comprehensive model that seek to address School Fees Support for less-privileged, Security, Health, Accommodation and Transportation issues that need urgent redress. These policies are aimed at most importantly creating a riveting change in how the SRC deals with most of these issues.',
      categories: [
        {
          title: 'School Fees Support',
          description: {
            describe: ``,
            subtitle: `The right to education is a basic right every student owes an inherent claim to. However, economic situations can greatly hinder this human right declaration. It is prudent to note that the University community is made up of students from families with varying economic backgrounds. An SRC which is committed to the welfare of its members should however be committed to cushioning its members who face a threat of school dropout due to school fees payment. Thus, an enabling environment must be created to aid accessibility. A Johnson-X led administration will;`,
            point: '• As a long-term policy, establish a separate SRC-spearheaded scholarship scheme aimed at providing a timely cushion to the above-described students. It is envisioned to be funded by the SRC through internally generated funds, corporate lobbying, and any legally accepted and prudent means possible.',
            point1: '• Establishment of a Students’ Loan Trust Fund Secretariat on campus to make accessibility of the state-funded academic support facility easier. This is an initiative that goes a long way to support the initial plan of the LNUGS to support students in loan acquisition.',
            point2: '• Strengthening of the SRC Scholarship Desk to scavenge and effectively publicize available scholarships as well as aiding students in applying for those scholarships. This is aimed at solving the ‘I was not aware of any scholarship’ problem which has plagued us for years.',
          }
        },
        {
          title: 'School Markets and Food Vendors',
          description: {
            describe: ``,
            subtitle: ``,
            point: '• The SRC will liaise with the Ho and Hohoe Municipalities to provide effective training and certification of the vendors in the school. This is to ensure they maintain high standards of Hygiene with regards to food vending. This is a pre-emptive measure for food poisoning cases.',
            point1: '• SRC will have a stakeholder negotiation with vendors to ensure cost-effective pricing of their goods to ease the duress overpricing puts on most students.',
          }
        },
        {
          title: 'Internet Connectivity',
          description: {
            describe: ``,
            subtitle: ``,
            point: '• Advocacy for the expansion of the current Vodafone package to 10GB data and 1000 minutes talk time.',
            point1: '• Advocacy for the installation of Wi-Fi at Diaspora hostels to ensure accessibility of internet to students.',
          }
        },
        {
          title: 'Accommodation',
          description: {
            describe: ``,
            subtitle: ``,
            point: '• A revamp of the SRC App will include a special section where the SRC will display available accommodation opportunities available to be booked, their exact location and their prices. This is to ease the stress on students going around scavenging for accommodation. ',
          }
        },
      ],
      title: 'Welfare Policies'
    },
    {
      id: 9,
      preamble:`In a world brimming with potential and untapped talent, the key to unlocking true progress lies in the empowerment and growth of individuals, communities, and nations. Capacity building policies, like beacons of light, illuminate the path towards sustainable development and resilience. They possess the transformative power to foster knowledge, cultivate skills, and ignite innovation, shaping the future of societies and propelling them towards greatness.
      At their core, capacity building policies are the visionary blueprints that bridge the gap between aspiration and achievement. They recognize that human capital is the most valuable asset a society possesses, and that investing in it yields immeasurable returns. These policies embark on a noble mission to bolster the capabilities of UHAS students, equipping them with the tools they need to thrive in an ever-evolving world. A Johnson-Mensah-led administration will;`,
      categories: [
        {
          title: '',
          description: {
            describe: '',
            subtitle: ``,
            point: `• Implement the SRC Panoramic Experience project aimed at providing students with an all-round experience that will contribute to their academic success and overall capacity.`,
            point1: `• Implement the SRC Trade Fair aimed at promoting student businesses and encouraging entrepreneurship. This may also include external stakeholder collaborations.`,
            point2: `• Collaborate with the UHAS Research Club in organizing research workshops to spark students' interest in research and help them acquire the skills they need for their theses. This may include the implementation of an SRC Research fund in collaboration with external stakeholders to facilitate undergraduate research. `,
          }
        },
        {
          title: '',
          description: {
            describe: '',
            subtitle: '',
            point: `• Introduction of the SRC Soft Skills seminar which is aimed at exposing students to themes like AI in healthcare, Deep Learning techniques and Machine Learning fundamentals. As students being trained to fit into the 4th industrial revolution which places huge demand on soft skills acquisition, this prepares us for the job market.`,
            point1: `• Organization of critical thinking and public speaking workshops aimed at improving the cognitive and communication abilities of UHAS students.`,
          }
        },
      ],
      title: 'Capacity Building Programmes and Projects'
    },
    {
      id: 10,
      preamble: ``,
      categories: [
        {
          title: '',
          description: {
            describe: ``,
            subtitle: '',
            point: '• Implementation of the “Abaatan Ho Hia” policy which will see to it that the nannies that come along with Sandwich students pay a reduced price for hostel accommodation as opposed to paying the same price as the students.',
            point1: '• Negotiate for Sandwich fees reduction and flexibility.',
            point2: '• Provision of subsidized SRC souvenirs to elevate the Sandwich experience in UHAS. This may include lapels and SRC Cloth.',
            point3: '• Working with the Academic Affairs Directorate to modify and restructure the academic calendar where possible, particularly with regard to virtual classrooms and vocational training, to ensure optimal teaching and learning circumstances for the majority of students. This is aimed at reducing the duress on Sandwich student.',
          }
        },
        {
          title: '',
          description: {
            describe: ``,
            subtitle: '',
            point: '• To reduce the difficulty associated with finding housing when on campus, a comprehensive database of available places of lodging and the contact details of landlords and hostel management should be created. This is envisaged to be rolled out under the office of the Non-residential Committee Chairperson. This policy will also double serve regular students.',
            point1: '•  Coordinating with the necessary parties to help ensure an improvement in the standard of living in school-run hostels, particularly through supplying cleaning supplies and ensuring that water is flowing in the UHAS Halls.'
          }
        },
      ],
      title: 'Sandwish-Focused Policies'
    },
    {
      id: 11,
      preamble: `With a keen interest in addressing dire and pertinent issues being faced by the Hohoe province, the Johnson-Mensah administration will,`,
      categories: [
        {
          title: '',
          description: {
            describe: ``,
            subtitle: '',
            point: '• Liaise with management to provide workable and sustainable transportation for students in the hostels. This is to ensure efficient and cost-effective transportation to and from campus as compared to existing private transport on the Hohoe campus.',
            point1: '• Liaise with management in the expansion of the existing summer hut and lovers’ bench facilities on campus to accommodate students during rest periods.',
            point2: '• Provision of public address systems in the Binka Hall to ensure effective teaching and learning as well as any other programmes that will be hosted in the hall. ',
          }
        }
      ],
      title: 'Hohoe In Focus'
    },
  ]

  return (
    <section 
        className='relative flex flex-col justify-between pt-5 pb-20 md:flex-row overflow-hidden'
    >
      {/* Policy Sidebar */}
        <aside
            className={`bg-blue-main w-full md:w-[300px] text-white px-7 flex flex-col space-y-5 ${showPolicyCategory ? "py-7" : "md:h-fit py-3"}`}
        >
         <button 
          onClick={() => setShowPolicyCategory(prev => !prev)}
          className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-white font-poppins md:text-2xl'
            >
              Our Policies
            </h2> 
            <div
            >
              {!showPolicyCategory ? 
              <BsChevronDown size={25} color='white' />:
              <BsChevronUp size={25} color='white' />
              }
            </div>
          </button> 
         
         {showPolicyCategory && policies.map((policy, index) => (
          <button 
            key={index}
            data-aos="fade-down"
            className={`rounded  px-3 py-3  text-sm ${index+1 !== currentPolicy ? "bg-white text-black/80" : "bg-yellow-600 text-white"}`
          }
          onClick={() => {setCurrentPolicy(index + 1); setShowPolicyCategory(false)}}
          >
            {policy.title}
          </button>
         ))} 
        </aside>

        {/* Policies Based On User Click */}
        <div className='flex-1 px-10'>
          {policies.filter(policy => policy.id === currentPolicy).map((policy, index) => (
            <div data-aos="fade-up" key={index} className='flex flex-col space-y-5'>

              <h3 className='pt-6 text-xl font-semibold hover:text-yellow-700 text-yellow-600 md:text-2xl md:pt-0'>{policy.title}</h3>
              <p className='pt-6'>{policy.preamble}</p>

              <div className='flex flex-col space-y-6'>
                {policy.categories.map((cat, index) => (
                  <AchievementCard 
                    key={index}
                    title={cat.title}
                    description={cat.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Policies