/* quiz-data.js
 * Question bank and contradiction rules for the Cognitive Dissonance Quiz.
 * No external dependencies. Defines globals consumed by quiz.js.
 * Tags: s=statist, l=libertarian, x=structural skeptic, b=bleeding heart, r=reformist
 */

var QUIZ_QUESTIONS = [

  // ECONOMIC POWER
  {
    id: "monopoly_break",
    category: "Economic Power",
    text: "Should the government break up large tech companies like Amazon, Google, and Meta that control dominant shares of their markets?",
    footnote: "Amazon holds roughly 40% of U.S. e-commerce (eMarketer, 2024). Google handles about 87% of U.S. internet searches (Statcounter, 2025). Meta owns three of the four most-used social apps in America. The Sherman Antitrust Act (1890) was used to break up Standard Oil in 1911.",
    yesTags: ["r", "b"],
    noTags: ["l"]
  },
  {
    id: "copyright_protection",
    category: "Economic Power",
    text: "Does copyright law, which can protect works for up to 95 years after publication, give creators fair and appropriate protection?",
    footnote: "The Sonny Bono Copyright Term Extension Act (1998) added 20 years to existing copyright terms, just before early Mickey Mouse films were set to enter the public domain. Disney lobbied extensively for the extension. Works published in 1928 are only now entering the public domain.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "min_wage",
    category: "Economic Power",
    text: "Should the federal minimum wage be raised?",
    footnote: "The federal minimum wage has been $7.25/hour since 2009, the longest period without an increase since it was established in 1938. Adjusted for inflation, the 1968 minimum wage would be about $14 today. About 30 states have set their own higher minimums.",
    yesTags: ["r", "b"],
    noTags: ["l"]
  },
  {
    id: "pro_union",
    category: "Economic Power",
    text: "Do you support workers' rights to form unions and engage in collective bargaining with employers?",
    footnote: "Private sector union membership in the U.S. has fallen from about 35% of workers in the 1950s to 5.9% in 2024, a record low (BLS). Public sector union membership is about 32%. The Wagner Act (1935) established the right to organize. The Taft-Hartley Act (1947) significantly restricted union tactics.",
    yesTags: ["b", "r"],
    noTags: ["l"]
  },
  {
    id: "occupational_lic",
    category: "Economic Power",
    text: "Should the government require licenses to work in occupations like cosmetology, interior decorating, and floristry?",
    footnote: "About 25% of U.S. workers now require a government license, up from 5% in the 1950s. The average license requires 9 months of training and fees averaging $209. Louisiana required a license to arrange flowers until 2004. Tennessee required a license to give dietary advice until 2012.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "corp_taxes",
    category: "Economic Power",
    text: "Should large corporations be required to pay higher federal income taxes?",
    footnote: "The 2017 Tax Cuts and Jobs Act reduced the corporate tax rate from 35% to 21%. The effective tax rate paid by S&P 500 companies averaged about 18% in 2019. Amazon paid $0 in federal income taxes in 2017 and 2018. The U.S. corporate tax rate is near the OECD average.",
    yesTags: ["r", "b"],
    noTags: ["l"]
  },
  {
    id: "trade_tariffs",
    category: "Economic Power",
    text: "Should the government impose tariffs on imported goods to protect American industries and workers?",
    footnote: "The 2018 steel tariffs cost American consumers and manufacturers an estimated $900,000 per steel-industry job saved, according to Peterson Institute for International Economics analysis. The Smoot-Hawley Tariff (1930) is widely cited as worsening the Great Depression by triggering retaliatory tariffs.",
    yesTags: ["s"],
    noTags: ["l"]
  },
  {
    id: "free_trade",
    category: "Economic Power",
    text: "Should the U.S. negotiate trade agreements that lower or eliminate tariff barriers between countries?",
    footnote: "U.S. average tariff rates have fallen from roughly 45% under Smoot-Hawley (1930) to under 3% today, largely through successive rounds of GATT/WTO negotiations and bilateral agreements. Economists broadly agree that trade liberalization lowers consumer prices; critics argue it displaces domestic workers and erodes labor standards.",
    yesTags: ["l"],
    noTags: ["s"]
  },
  {
    id: "free_college",
    category: "Economic Power",
    text: "Should the federal government pay for tuition at public colleges and universities?",
    footnote: "Federal student loan programs began with the Higher Education Act (1965). Since 1980, U.S. college tuition has increased over 1,000% while general consumer prices rose about 240%. A 2015 Federal Reserve Bank of New York study found each dollar increase in subsidized loans raised tuition by about 60 cents.",
    yesTags: ["r", "b"],
    noTags: ["l", "x"]
  },
  {
    id: "student_debt",
    category: "Economic Power",
    text: "Should the federal government cancel existing student loan debt?",
    footnote: "Total U.S. student loan debt exceeds $1.7 trillion held by about 43 million borrowers. The average borrower owes about $37,000. Roughly 40% of borrowers never completed a degree. The top income quintile holds about 34% of outstanding student debt by dollar amount.",
    yesTags: ["r", "b"],
    noTags: ["l"]
  },

  // GOVERNMENT & REGULATION
  {
    id: "corp_capture",
    category: "Government & Regulation",
    text: "Are corporations too influential in writing the regulations that are supposed to govern them?",
    footnote: "Former regulators routinely join the industries they once regulated, and industry executives regularly move the other direction. Pharmaceutical companies have placed thousands of former employees at the FDA. Wall Street firms regularly place executives at Treasury and the SEC. The pattern holds across every major regulatory agency.",
    yesTags: ["x", "b"],
    noTags: ["s"]
  },
  {
    id: "more_fin_reg",
    category: "Government & Regulation",
    text: "Should the government impose stricter regulations on banks and the financial industry?",
    footnote: "The Dodd-Frank Wall Street Reform Act (2010) was written with extensive participation from financial industry lobbyists. The five largest U.S. banks held 45% of all banking assets in 2010; by 2020 they held 54%. The 'too big to fail' banks grew larger after the legislation designed to prevent their failure.",
    yesTags: ["r"],
    noTags: ["l", "x"]
  },
  {
    id: "green_subsidies",
    category: "Government & Regulation",
    text: "Should the government provide subsidies and tax credits to renewable energy companies?",
    footnote: "Solyndra received $535 million in DOE loan guarantees before declaring bankruptcy in 2011; its investors included major political fundraisers. The Inflation Reduction Act (2022) allocated roughly $369 billion in clean energy subsidies. The energy companies with the largest lobbying operations are best positioned to capture subsidy programs.",
    yesTags: ["r", "b"],
    noTags: ["l", "x"]
  },
  {
    id: "lobby_ban",
    category: "Government & Regulation",
    text: "Should former government officials be banned from becoming lobbyists for at least five years after leaving office?",
    footnote: "Current law imposes a 1-2 year cooling-off period depending on the position held. More than half of recent departing members of Congress have registered as lobbyists or taken lobbying-adjacent roles, a share that has grown steadily since the 1990s (Public Citizen). Former FDA commissioners, Pentagon officials, and White House staff routinely take lucrative positions at companies they once regulated.",
    yesTags: ["r", "x"],
    noTags: ["s"]
  },
  {
    id: "campaign_finance_limit",
    category: "Government & Regulation",
    text: "Should there be stricter legal limits on how much individuals and organizations can donate to political campaigns?",
    footnote: "Citizens United v. FEC (2010) held that political spending is constitutionally protected speech. Super PACs can accept unlimited donations and spent more than $2.6 billion in independent expenditures during the 2024 election cycle (OpenSecrets). In 2022, a single donor transferred $1.6 billion in company stock to a dark money nonprofit, the largest known single donation to a political advocacy group in American history (CNN, 2022). Dark money groups, which do not disclose their donors, contributed more than $1.9 billion to the 2024 federal elections (Brennan Center).",
    yesTags: ["r"],
    noTags: ["l", "s"]
  },
  {
    id: "campaign_donations_corps",
    category: "Government & Regulation",
    text: "Should corporations, unions, and nonprofit organizations be allowed to donate to political parties and spend on political campaigns?",
    footnote: "Before Citizens United, the Bipartisan Campaign Reform Act (2002) banned corporations and unions from using general treasury funds for election ads. The Citizens United ruling held such bans unconstitutional. The Federalist Papers argued that factions pursuing their interests through government were among the republic's greatest threats.",
    yesTags: ["l", "s"],
    noTags: ["r", "x"]
  },
  {
    id: "eminent_domain",
    category: "Government & Regulation",
    text: "Should the government be allowed to seize private property and transfer it to private developers for commercial economic development?",
    footnote: "Kelo v. City of New London (2005) held that the Constitution's 'public use' requirement permits taking private homes and transferring them to a private developer for an economic development plan. The project was proposed partly to benefit a Pfizer research facility. Pfizer left the city in 2009; the land sat vacant for years. More than 40 states subsequently passed eminent domain reform legislation in response.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "zoning_restrict",
    category: "Government & Regulation",
    text: "Should local governments be allowed to use zoning laws to prevent property owners from building apartment buildings or multi-family housing in most residential areas?",
    footnote: "Single-family-only zoning covers the majority of residential land in most American cities; in some cities over 75% of residential land is zoned to allow only single-family homes. A 2019 NBER study found that housing supply restrictions in high-productivity U.S. cities have meaningfully reduced aggregate economic growth. Houston, which has no traditional zoning code, has among the most affordable housing of any major American metro.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },

  // CRIMINAL JUSTICE
  {
    id: "drug_war_effective",
    category: "Criminal Justice",
    text: "Has the War on Drugs been effective at reducing drug use and drug-related harm in America?",
    footnote: "The U.S. has spent over $1 trillion on the War on Drugs since Nixon declared it in 1971. Drug overdose deaths exceeded 107,000 in 2021, reached a recorded peak of 107,941 in 2022, and remained above 107,000 in 2023 (CDC). U.S. drug use rates are broadly comparable to European countries with far less punitive drug policies. Drug offenders account for about 45% of federal prisoners.",
    yesTags: ["s"],
    noTags: ["x", "l"]
  },
  {
    id: "drug_decrim",
    category: "Criminal Justice",
    text: "Should drug use be decriminalized, with users referred to treatment programs rather than criminal prosecution?",
    footnote: "Portugal decriminalized personal possession of all drugs in 2001. The overdose death rate fell from 80 per million population in 2001 to 6 per million by 2021, a reduction of over 90%. New HIV cases attributable to drug injection fell from nearly 1,400 in 2000 to about 400 in 2006, and from 52% of all new HIV diagnoses to just 6% by 2015 (EMCDDA). Drug use rates remained comparable to other European countries. Drug trafficking remained illegal throughout.",
    yesTags: ["l", "b"],
    noTags: ["s"]
  },
  {
    id: "mandatory_mins_drugs",
    category: "Criminal Justice",
    text: "Should judges be required to impose mandatory minimum prison sentences for drug offenses?",
    footnote: "Mandatory minimums were substantially expanded by the Anti-Drug Abuse Act (1986). The U.S. Sentencing Commission found Black defendants are 13% more likely than white defendants to be charged under mandatory minimum statutes for equivalent drug offenses. Mandatory minimums remove judicial discretion once charging decisions are made.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "police_military_equip",
    category: "Criminal Justice",
    text: "Should police departments be allowed to acquire military-grade weapons and vehicles through federal transfer programs?",
    footnote: "The 1033 Program, created by the National Defense Authorization Act (1990) specifically for drug enforcement, has transferred more than $7.4 billion in surplus military equipment to roughly 10,000 law enforcement agencies since the program began in 1996 (ACLU, 2014). An ACLU study documented 62,000 SWAT team deployments in a single year, with 79% used for drug searches.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "racial_disparity_concern",
    category: "Criminal Justice",
    text: "Are racial disparities in drug law enforcement and criminal sentencing a serious problem in the United States?",
    footnote: "Black Americans are arrested for marijuana at 3.64 times the rate of white Americans despite similar usage rates (ACLU, 2020). The U.S. Sentencing Commission found Black men receive sentences 13.4% longer than white men for the same federal offenses (USSC, 2023, covering fiscal years 2017-2021). These disparities have persisted across decades of reform efforts.",
    yesTags: ["x", "b"],
    noTags: ["s"]
  },
  {
    id: "qualified_immunity",
    category: "Criminal Justice",
    text: "Should police officers be legally protected from personal civil liability unless they violated law 'clearly established' by a nearly identical prior case?",
    footnote: "Qualified immunity was created by the Supreme Court in Harlow v. Fitzgerald (1982). Legal scholar William Baude argues in the California Law Review (2018) that it has no basis in the text of 42 U.S.C. 1983, the statute it claims to interpret. Courts have dismissed civil rights claims in cases involving force against unarmed individuals when no prior case had nearly identical facts.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "civil_asset_forfeiture",
    category: "Criminal Justice",
    text: "Should law enforcement be allowed to permanently seize cash, cars, and property from people who have not been convicted of any crime?",
    footnote: "In 2014, the DOJ's Asset Forfeiture Fund collected more than $4.5 billion, exceeding the FBI's estimate of property lost to burglary that year ($3.9 billion). Owners who want to contest a seizure must hire an attorney and navigate a separate civil proceeding, often costing more than the seized property's value.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "private_prisons",
    category: "Criminal Justice",
    text: "Should private, for-profit companies be paid by the government to operate prisons?",
    footnote: "Private prison contracts with states often include occupancy guarantees requiring 80-90% capacity, creating a contractual incentive to maintain incarceration levels. CoreCivic and GEO Group spent roughly $10 million lobbying against sentencing reform, drug decriminalization, and immigration reform between 2011 and 2020.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "death_penalty",
    category: "Criminal Justice",
    text: "Do you support the death penalty for capital crimes?",
    footnote: "Since 1973, more than 200 people have been exonerated from death row after wrongful conviction (Death Penalty Information Center, 2024). A 2014 PNAS study estimated that about 4.1% of defendants sentenced to death in the U.S. are factually innocent. DNA evidence has been the primary driver of post-conviction exonerations.",
    yesTags: ["s"],
    noTags: ["l", "b"]
  },
  {
    id: "bodily_autonomy",
    category: "Criminal Justice",
    text: "Do individuals have a fundamental right to decide what substances they consume, without those personal choices being criminalized by the government?",
    footnote: "The U.S. Supreme Court has recognized a constitutional right to privacy in personal decisions in Griswold v. Connecticut (1965) and Lawrence v. Texas (2003). Whether this extends to drug consumption has not been definitively ruled upon. Prohibition (1920-1933) is the most prominent historical experiment in criminalizing personal consumption.",
    yesTags: ["l"],
    noTags: ["s"]
  },

  // SURVEILLANCE & PRIVACY
  {
    id: "nsa_bulk",
    category: "Surveillance & Privacy",
    text: "Should the NSA be allowed to collect phone records and internet metadata of American citizens without individualized warrants?",
    footnote: "Snowden's 2013 disclosures revealed the NSA's bulk phone record collection under PATRIOT Act Section 215. The Second Circuit ruled in 2015 that the program was illegal under FISA. The program collected records on millions of Americans with no connection to any terrorism investigation.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "crypto_backdoor",
    category: "Surveillance & Privacy",
    text: "Should the government require tech companies to build law enforcement access backdoors into encrypted messaging applications?",
    footnote: "Cryptographers are nearly unanimous that a backdoor accessible only to authorized parties is technically impossible. The NSA's own hacking toolkit was stolen by the Shadow Brokers in 2017 and deployed in WannaCry ransomware, which disabled hospitals and infrastructure across 150 countries. Every backdoor is also a vulnerability.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "corp_data_concern",
    category: "Surveillance & Privacy",
    text: "Are you concerned about how much personal data corporations collect, store, and sell about individuals without meaningful consent?",
    footnote: "Meta's advertising platform allows targeting by over 29,000 data categories. Data brokers compile profiles including purchase history, location, health conditions, and political views, selling them to employers, insurers, landlords, and government agencies. The U.S. lacks a comprehensive federal consumer data privacy law.",
    yesTags: ["x", "b"],
    noTags: ["s"]
  },
  {
    id: "facial_recog_police",
    category: "Surveillance & Privacy",
    text: "Should police be allowed to use facial recognition technology to identify people in public spaces?",
    footnote: "NIST studies have found error rates for facial recognition are significantly higher for Black and Asian faces than for white faces, with some systems misidentifying Black women at rates 34 times higher than white men. At least three men have been wrongly arrested based solely on facial recognition mismatches.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "snowden_pardon",
    category: "Surveillance & Privacy",
    text: "Should Edward Snowden receive a presidential pardon for leaking documents revealing NSA mass surveillance programs?",
    footnote: "Snowden's disclosures led to the USA FREEDOM Act (2015), which ended bulk phone record collection. The Second Circuit ruled the NSA program he exposed was illegal. Snowden has lived in Russia since 2013 after the U.S. revoked his passport while he was in transit. He faces Espionage Act charges.",
    yesTags: ["l", "x"],
    noTags: ["s"]
  },
  {
    id: "national_id",
    category: "Surveillance & Privacy",
    text: "Should the government implement a mandatory national digital identification system for all citizens?",
    footnote: "REAL ID (2005) created federal standards for state driver's licenses and has become a de facto national ID for federal purposes. Civil liberties groups have raised concerns about centralized biometric databases. Countries with mandatory national IDs include Germany, France, India, and China, with varying civil liberties records.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },

  // HEALTHCARE
  {
    id: "single_payer",
    category: "Healthcare",
    text: "Do you support a government-run, single-payer healthcare system?",
    footnote: "Medicare administrative overhead runs about 2% of expenditures. Private health insurance administrative overhead runs 12-18%. The U.S. spends about twice as much per capita on healthcare as comparable wealthy countries while achieving similar or worse health outcomes on most population-level measures.",
    yesTags: ["r", "b"],
    noTags: ["l"]
  },
  {
    id: "patent_term",
    category: "Healthcare",
    text: "Are pharmaceutical companies able to extend their drug monopolies too long through patents and regulatory strategies, blocking affordable generics from the market?",
    footnote: "Pharmaceutical patents last 20 years from the filing date. Companies routinely file additional patents on formulations, dosing, and delivery mechanisms after a drug's original patent expires, extending exclusivity. The FTC documented 'pay-for-delay' settlements in which brand-name companies paid generic manufacturers not to compete, costing U.S. consumers an estimated $3.5 billion per year (FTC, 2013).",
    yesTags: ["l", "b", "x"],
    noTags: ["s"]
  },
  {
    id: "drug_prices_high",
    category: "Healthcare",
    text: "Are prescription drug prices in the United States unreasonably high compared to other developed countries?",
    footnote: "Americans pay on average 2.5 times more for the same prescription drugs than people in other wealthy countries (RAND, 2021). Insulin costs an average of $98 per unit in the U.S. compared to $6-12 in peer nations. Drug manufacturers spent $4.7 billion lobbying Congress between 1999 and 2018.",
    yesTags: ["x", "b"],
    noTags: ["s"]
  },
  {
    id: "fda_stricter",
    category: "Healthcare",
    text: "Should the FDA require more rigorous, longer clinical trials before approving new drugs for the market?",
    footnote: "The FDA's average drug development and approval timeline is about 12 years, at an average cost of $2.6 billion per approved drug (Tufts CSDD, 2016). A drug's 20-year patent clock starts before clinical trials begin, compressing the effective exclusivity window available to recover those costs.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "private_equity_hospitals",
    category: "Healthcare",
    text: "Should private equity firms be banned from purchasing and operating hospitals and healthcare practices?",
    footnote: "A 2023 JAMA study (Kannan, Bruch, Song) found private equity hospital acquisition was associated with a 25% increase in adverse patient events including hospital-acquired conditions. Private equity-owned hospitals have been more likely to close services deemed unprofitable, including emergency departments.",
    yesTags: ["x", "b"],
    noTags: ["l"]
  },

  // DEMOCRACY & ELECTIONS
  {
    id: "electoral_college",
    category: "Democracy & Elections",
    text: "Should the Electoral College be abolished in favor of a national popular vote for president?",
    footnote: "In 2000 and 2016, the Electoral College winner lost the national popular vote. Wyoming voters have roughly 3.6 times the electoral weight of California voters. The Constitution's original design counted enslaved people as three-fifths of a person for apportionment purposes, boosting slave states' electoral influence.",
    yesTags: ["r"],
    noTags: ["s"]
  },
  {
    id: "ranked_choice",
    category: "Democracy & Elections",
    text: "Should the U.S. adopt ranked-choice voting for federal elections?",
    footnote: "Ranked-choice voting is used in Maine and Alaska for federal elections. It allows voters to rank candidates by preference and eliminates the 'spoiler effect' where a third-party candidate splits votes with an ideologically similar major-party candidate. Critics argue it complicates ballot design and counting.",
    yesTags: ["x", "r"],
    noTags: ["s"]
  },
  {
    id: "voter_id",
    category: "Democracy & Elections",
    text: "Should voters be required to show a government-issued photo ID to vote?",
    footnote: "Studies on voter ID laws have found that in-person voter fraud, the primary problem photo ID is meant to address, is documented in fewer than 1,000 confirmed cases out of more than one billion votes cast since 2000 (Brennan Center). Some studies find voter ID requirements reduce turnout among minority, elderly, and low-income voters.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "term_limits",
    category: "Democracy & Elections",
    text: "Should members of Congress be subject to mandatory term limits?",
    footnote: "The average sitting House member now serves over 9 years; the average Senator over 11 years. Multiple members of Congress have served over 30 years. The Supreme Court ruled in U.S. Term Limits v. Thornton (1995) that states cannot impose federal term limits; only a constitutional amendment could do so.",
    yesTags: ["x", "l"],
    noTags: ["s"]
  },

  // FOREIGN POLICY
  {
    id: "military_spending",
    category: "Foreign Policy",
    text: "Should the U.S. increase its military budget?",
    footnote: "The U.S. military budget was $886 billion in fiscal year 2024 and approximately $916 billion in fiscal year 2025, more than the next ten countries combined and about 37% of all global military spending (SIPRI, 2024). The U.S. maintains over 750 military bases in more than 80 countries. Defense spending accounts for about 13% of the federal budget.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "drone_strikes_no_war",
    category: "Foreign Policy",
    text: "Should the U.S. military be authorized to conduct lethal drone strikes in countries the U.S. has not formally declared war against?",
    footnote: "The Bureau of Investigative Journalism documented between 910 and 2,200 civilian deaths from U.S. drone strikes in Pakistan, Yemen, Somalia, and Afghanistan from 2010-2020. The Obama administration killed U.S. citizen Anwar al-Awlaki and his 16-year-old son Abdulrahman in Yemen in 2011 without charge or trial.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "torture_eit",
    category: "Foreign Policy",
    text: "Should the government be allowed to use enhanced interrogation techniques, such as waterboarding, on terrorism suspects?",
    footnote: "The Senate Intelligence Committee's 2014 report on CIA interrogation found that enhanced interrogation did not produce unique actionable intelligence and that CIA representations to the contrary were 'inaccurate and unsupported.' The U.S. prosecuted Japanese soldiers for waterboarding American POWs after World War II.",
    yesTags: ["s"],
    noTags: ["l", "b"]
  },
  {
    id: "regime_change",
    category: "Foreign Policy",
    text: "Should the U.S. use military force or covert intelligence operations to remove foreign governments it considers hostile to American interests?",
    footnote: "Documented U.S. regime change operations include Iran (1953, Operation Ajax: CIA helped overthrow a democratically elected government after it nationalized Anglo-Iranian Oil Company's fields), Guatemala (1954: CIA helped overthrow a government that enacted land reform affecting United Fruit Company), and Chile (1973). The Carnegie Endowment's Lindsey O'Rourke documented 64 covert regime change operations from 1947 to 1989.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },

  // ENVIRONMENT
  {
    id: "climate_reg_increase",
    category: "Environment",
    text: "Should the government significantly increase environmental regulations to combat climate change?",
    footnote: "The IPCC's 2021 report described human influence on climate warming as 'unequivocal.' Global average temperatures have risen 1.1 degrees Celsius above pre-industrial levels. The U.S. is the second-largest carbon emitter today and historically the largest cumulative emitter.",
    yesTags: ["r", "b"],
    noTags: ["l"]
  },
  {
    id: "nuclear_power",
    category: "Environment",
    text: "Do you support expanding nuclear power as part of America's energy strategy?",
    footnote: "Nuclear power generates about 18% of U.S. electricity with near-zero carbon emissions. France generates about 70% of its electricity from nuclear and has among the lowest electricity-sector carbon emissions in Europe. Every U.S. nuclear plant that closed since 2012 was replaced primarily by natural gas, not renewables.",
    yesTags: ["l", "x"],
    noTags: ["r", "b"]
  },
  {
    id: "carbon_tax",
    category: "Environment",
    text: "Do you support a carbon tax that makes companies pay for their carbon emissions?",
    footnote: "British Columbia implemented a revenue-neutral carbon tax in 2008; fuel use fell 16% while economic growth continued. The IMF estimates a global carbon tax of $75 per ton could meet 2030 Paris Agreement targets. A carbon tax creates a price signal rather than mandating specific technologies.",
    yesTags: ["x", "r"],
    noTags: ["l", "s"]
  },

  // TECHNOLOGY & SPEECH
  {
    id: "social_media_reg",
    category: "Technology & Speech",
    text: "Should the government regulate social media platforms to prevent the spread of misinformation?",
    footnote: "The CISA Disinformation Governance Board was disbanded in 2022 after operating for three weeks, amid First Amendment concerns. Twitter Files releases (2022) revealed U.S. government requests to remove specific accounts. The definition of 'misinformation' has varied significantly depending on the political context and who is in power.",
    yesTags: ["s", "r"],
    noTags: ["l", "x"]
  },
  {
    id: "platform_liability",
    category: "Technology & Speech",
    text: "Should social media companies be legally liable for content their algorithms promote to users?",
    footnote: "Section 230 of the Communications Decency Act (1996) shields platforms from liability for user-generated content. In Gonzalez v. Google (2023), the Supreme Court declined to rule on whether algorithmic curation changes this protection. Legal liability for promoted content would strongly incentivize aggressive pre-screening and content removal.",
    yesTags: ["r"],
    noTags: ["l", "x"]
  },
  {
    id: "gov_id_social_media",
    category: "Technology & Speech",
    text: "Should users be required to verify their identity with a government-issued ID before using social media platforms?",
    footnote: "The Federalist Papers were published under the pseudonym 'Publius.' Anonymous political speech has been essential to dissent, journalism, and whistleblowing throughout American history. McIntyre v. Ohio Election Commission (1995) held that anonymous political speech is protected by the First Amendment.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "ai_copyright",
    category: "Technology & Speech",
    text: "Should AI companies be legally required to pay rights-holders whose copyrighted work was used to train their models?",
    footnote: "Major AI companies have trained models on data including copyrighted books, articles, images, and code without payment. If AI training requires licensing, the companies best positioned to comply are large incumbents who can afford extensive deals or acquire content libraries outright. Multiple lawsuits are pending as of 2024.",
    yesTags: ["r"],
    noTags: ["l", "x"]
  },
  // ECONOMIC POWER (additional)
  {
    id: "balanced_budget",
    category: "Economic Power",
    text: "Should the federal government be required to balance its budget?",
    footnote: "The U.S. federal government has run a deficit in 49 of the past 52 years. The national debt exceeds $36 trillion. Interest payments on the debt exceeded $882 billion in fiscal year 2024, surpassing the entire defense budget (CBO, 2024). The last federal surplus was in 2001. The Congressional Budget Office projects debt held by the public will reach 154% of GDP by 2055 under current law (CBO, 2025).",
    yesTags: ["l"],
    noTags: ["s", "r", "b"]
  },
  {
    id: "immigration_labor",
    category: "Economic Power",
    text: "Should the U.S. significantly expand the number of legal work visas issued to foreign workers?",
    footnote: "The U.S. issues about 140,000 employment-based green cards annually under a cap set in 1990. H-1B visas for skilled workers are capped at 65,000 per year, with roughly 400,000 applications in 2023. Agricultural and seasonal workers are covered by separate H-2A and H-2B programs. Economists broadly agree that immigration expands total economic output; studies differ on wage effects for workers in directly competing job categories.",
    yesTags: ["l"],
    noTags: ["s", "b"]
  },

  // DEMOCRACY & ELECTIONS (additional)
  {
    id: "marijuana_state_right",
    category: "Democracy & Elections",
    text: "Should states that have democratically voted to legalize marijuana be free to do so without federal interference?",
    footnote: "As of 2024, 24 states and Washington D.C. have legalized recreational marijuana. Federal law still classifies marijuana as a Schedule I controlled substance under the Controlled Substances Act, making it illegal regardless of state law. In Gonzales v. Raich (2005), the Supreme Court held that the federal government can prosecute marijuana offenses even in states where it is legal, under the Commerce Clause.",
    yesTags: ["l", "x"],
    noTags: ["s"]
  },
  {
    id: "school_vouchers",
    category: "Democracy & Elections",
    text: "Should low-income families receive government-funded vouchers they can use to enroll their children in private or religious schools?",
    footnote: "The Supreme Court held in Zelman v. Simmons-Harris (2002) that school voucher programs do not violate the Establishment Clause. Milwaukee's Parental Choice Program, begun in 1990, is the oldest urban voucher program in the U.S. Research on academic outcomes is mixed. Private and religious schools receiving voucher students are generally not subject to the same collective bargaining requirements as public schools.",
    yesTags: ["l"],
    noTags: ["s", "r"]
  },

  // TECHNOLOGY & SPEECH
  {
    id: "gun_control_more",
    category: "Criminal Justice",
    text: "Should there be more government restrictions on the purchase and ownership of firearms?",
    footnote: "The U.S. has about 120 guns per 100 residents, the highest rate in the world. The gun homicide rate is about 26 times higher than the average for other high-income countries (JAMA, 2022). The Supreme Court in D.C. v. Heller (2008) held the Second Amendment protects an individual right to keep arms for self-defense.",
    yesTags: ["r", "b"],
    noTags: ["l", "s"]
  },

  // GOVERNMENT & REGULATION (additional)
  {
    id: "housing_affordability",
    category: "Government & Regulation",
    text: "Is the shortage of affordable housing a serious problem in American cities?",
    footnote: "Median home prices have grown faster than median incomes in most major U.S. cities since 2000. In San Francisco, the median home price exceeds $1.2 million. A 2018 McKinsey Global Institute study estimated that housing undersupply costs the U.S. economy $2 trillion annually in forgone GDP. Research consistently finds that zoning restrictions on new housing construction are the primary driver of cost increases in high-demand cities.",
    yesTags: ["b", "x"],
    noTags: []
  },

  // HEALTHCARE (additional)
  {
    id: "mandatory_vaccines",
    category: "Healthcare",
    text: "Should the government require children to be vaccinated against contagious diseases as a condition of attending public school?",
    footnote: "All 50 U.S. states require certain vaccinations for public school attendance. The Supreme Court upheld state vaccination mandates in Jacobson v. Massachusetts (1905). Most states offer medical exemptions; 44 offer religious exemptions. Measles, declared eliminated in the U.S. in 2000, saw 1,282 cases in 2019, the highest total in 27 years, concentrated in communities with low vaccination rates.",
    yesTags: ["s"],
    noTags: ["l"]
  },

  // ECONOMIC POWER (additional)
  {
    id: "bank_bailout",
    category: "Economic Power",
    text: "Was the government right to bail out major financial institutions during the 2008 financial crisis?",
    footnote: "Congress authorized $700 billion under the Troubled Asset Relief Program (TARP) in October 2008. GAO estimated the lifetime cost to taxpayers at $31.1 billion after repayments, dividends, and interest on $443.5 billion disbursed. The Federal Reserve separately extended over $7.7 trillion in peak emergency lending. Treasury Secretary Henry Paulson, who administered the response, had been CEO of Goldman Sachs until 2006. Goldman Sachs, Citigroup, Bank of America, and JPMorgan Chase were among the largest recipients. Goldman Sachs received $10 billion and repaid it with interest.",
    yesTags: ["s"],
    noTags: ["l", "x"]
  },
  {
    id: "social_security_cuts",
    category: "Economic Power",
    text: "Should the federal government reduce Social Security or Medicare benefits to help reduce the national deficit?",
    footnote: "Social Security spent $1.2 trillion and Medicare spent $1.0 trillion in fiscal year 2023, together representing roughly 36% of all federal outlays. CBO projects Social Security will run cash deficits relative to dedicated payroll tax revenues beginning around 2033. The national debt exceeds $36 trillion. The federal government has run deficits in 49 of the past 52 years. A 2023 National Academy of Social Insurance survey found about 85% of Americans oppose Social Security cuts to address the deficit.",
    yesTags: ["l"],
    noTags: ["s", "r", "b"]
  }

];


/* -------------------------------------------------------------------------- */
/* CONTRADICTION RULES                                                          */
/*                                                                              */
/* Each rule has:                                                               */
/*   id: unique string                                                          */
/*   title: short label shown in the UI (never uses the word "trap")           */
/*   body: factual explanation of the tension                                  */
/*   source: optional citation string                                           */
/*   conditions: array of {q: questionId, a: 'yes'|'no'} that must ALL match  */
/* -------------------------------------------------------------------------- */

var QUIZ_CONTRADICTIONS = [

  {
    id: "monopoly_copyright",
    title: "Monopoly by Another Name",
    body: "You support breaking up corporate monopolies and you think copyright law appropriately protects creators. Copyright is a government-granted exclusive right: the state gives one entity control over a work for up to 95 years, backed by civil and criminal penalties for infringement. When Disney lobbied Congress in 1998 to extend copyright terms just as early Mickey Mouse films were about to enter the public domain, they were doing what incumbents with political access do: using that access to extend market exclusivity. Both antitrust law and copyright law involve the government defining and enforcing exclusive market control. The policy tools differ, but the political dynamic is the same: organized interests using legislative access to extend exclusivity at public expense.",
    source: "Eldred v. Ashcroft, 537 U.S. 186 (2003); Sonny Bono Copyright Term Extension Act (1998)",
    conditions: [
      { q: "monopoly_break", a: "yes" },
      { q: "copyright_protection", a: "yes" }
    ]
  },

  {
    id: "corp_capture_more_fin_reg",
    title: "Who Writes the Rules",
    body: "You believe corporations have captured the regulatory process, and your solution is more financial regulation. Regulations are written by the same agencies staffed through the revolving door you're concerned about. The Dodd-Frank Wall Street Reform Act (2010), designed to prevent another financial crisis, was written with extensive Wall Street participation. The 'too big to fail' banks it was meant to rein in grew from 45% to 54% of all U.S. banking assets between 2010 and 2020. Regulatory capture does not become less of a problem when an agency is given broader authority. It becomes a larger problem, because the captured authority is greater.",
    source: "Federal Reserve Bank of St. Louis, bank concentration data (2010-2020); Simon Johnson, 'The Quiet Coup,' The Atlantic (2009)",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "more_fin_reg", a: "yes" }
    ]
  },

  {
    id: "corp_capture_green_subsidies",
    title: "Subsidies Are Not Neutral",
    body: "You believe corporations capture government policy and you support government subsidies for renewable energy. Subsidies are allocated by the same agencies subject to regulatory capture. Solyndra received $535 million in DOE loan guarantees before declaring bankruptcy in 2011; its investors included prominent political fundraisers who had contributed to the administration that awarded the loan. The companies best positioned to capture subsidy programs are those with the largest lobbying operations, regardless of how clean their technology is. The mechanism that produces the outcomes you're concerned about in financial regulation produces the same outcomes in energy subsidy allocation.",
    source: "DOE Loan Programs Office; Solyndra bankruptcy filing (2011)",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "green_subsidies", a: "yes" }
    ]
  },

  {
    id: "corp_capture_free_college",
    title: "The Institutions You Fund",
    body: "You believe corporations capture government policy and you want the government to fund free college tuition. American universities receive substantial federal funding and have close relationships with corporate donors who influence research priorities, curriculum, and administrative decisions. The same capture dynamics operating in financial regulation and energy policy also operate in higher education: pharmaceutical companies fund medical research; defense contractors fund engineering programs; tech companies fund computer science departments. Expanding federal university funding expands the footprint of institutions already subject to those dynamics, without changing the structural relationships.",
    source: "Washburn, 'University Inc.' (2005); Bok, 'Universities in the Marketplace' (2003)",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "free_college", a: "yes" }
    ]
  },

  {
    id: "corp_capture_tariffs",
    title: "Tariffs Are Industry-Specific",
    body: "You believe corporations capture government policy and you support tariffs to protect American industries. Tariffs are not applied to abstract 'industries.' They are applied to specific product categories negotiated by trade representatives who are lobbied by the industries that benefit. The 2018 steel tariffs protected U.S. Steel's shareholders while raising costs for every American manufacturer that uses steel as an input. You cannot separate trade protection from the corporate lobbying that shapes which industries get protected, at what rates, for how long, and against which foreign competitors.",
    source: "Peterson Institute for International Economics, steel tariff analysis (2018); Stigler, 'The Theory of Economic Regulation,' Bell Journal of Economics (1971)",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "trade_tariffs", a: "yes" }
    ]
  },

  {
    id: "drug_war_militarization",
    title: "The Army You Asked For",
    body: "You believe the War on Drugs has been effective policy and you oppose police departments acquiring military-grade equipment. Police militarization in the United States was built to fight the War on Drugs. The 1033 Program, which transfers surplus military equipment to local police departments, was created by the National Defense Authorization Act of 1990 specifically for drug enforcement. The first SWAT teams, developed in the late 1960s, were designed for drug raids. The ACLU documented 62,000 SWAT deployments in a single year, with 79% used for drug searches. The militarized apparatus you want removed was placed there by the drug policy you endorse.",
    source: "NDAA (1990), Section 1208; ACLU, 'War Comes Home: The Excessive Militarization of American Policing' (2014)",
    conditions: [
      { q: "drug_war_effective", a: "yes" },
      { q: "police_military_equip", a: "no" }
    ]
  },

  {
    id: "drug_war_racial",
    title: "The Stated Purpose",
    body: "You believe the War on Drugs has been effective and you are concerned about racial disparities in drug enforcement. John Ehrlichman, Nixon's domestic policy chief, described the origins of the War on Drugs in a 1994 interview published in Harper's Magazine in 2016: 'We knew we couldn't make it illegal to be either against the war or Black, but by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities. We could arrest their leaders, raid their homes, break up their meetings, and vilify them night after night on the evening news.' The racial disparity in drug enforcement you find troubling was, according to one of its principal architects, one of its design goals.",
    source: "Baum, 'Legalize It All,' Harper's Magazine (April 2016)",
    conditions: [
      { q: "drug_war_effective", a: "yes" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "drug_war_private_prisons",
    title: "The Profit Constituency",
    body: "You believe the War on Drugs has been effective and you support for-profit private prisons. Private prison corporations profit directly from incarceration rates. CoreCivic and GEO Group have consistently lobbied against sentencing reform, drug decriminalization, and early-release programs. The War on Drugs provides the caseload that makes private prisons financially viable; private prisons provide a financial constituency for maintaining the policy that sustains them. Endorsing both creates a system with a built-in lobby against any policy change that would reduce drug-related incarceration.",
    source: "OpenSecrets.org lobbying data for CoreCivic and GEO Group (2011-2020); Justice Policy Institute, 'Gaming the System' (2011)",
    conditions: [
      { q: "drug_war_effective", a: "yes" },
      { q: "private_prisons", a: "yes" }
    ]
  },

  {
    id: "drug_decrim_mandatory_mins",
    title: "Treatment or Prison",
    body: "You support decriminalizing drug use so that users face treatment rather than prosecution, and you support mandatory minimum prison sentences for drug offenses. These two positions define opposite outcomes for the same act. Decriminalization means drug possession results in a civil penalty or treatment referral, not criminal prosecution. Mandatory minimums require judges to impose fixed prison terms after a criminal conviction for drug offenses. You cannot simultaneously route drug users toward treatment and require judges to sentence them to prison. One of these positions must give way.",
    source: null,
    conditions: [
      { q: "drug_decrim", a: "yes" },
      { q: "mandatory_mins_drugs", a: "yes" }
    ]
  },

  {
    id: "drug_decrim_civil_asset",
    title: "Decriminalizing While Seizing",
    body: "You support decriminalizing drug use and you support law enforcement being allowed to seize property without a criminal conviction. Civil asset forfeiture is most commonly deployed in drug enforcement contexts. Under the system you support, law enforcement can permanently take your cash, car, or home based on a suspected connection to drug activity, without the criminal conviction for the offense you want decriminalized. The legal standard for seizure in civil forfeiture is typically 'probable cause,' which is lower than the 'beyond reasonable doubt' required for criminal conviction.",
    source: "Institute for Justice, 'Policing for Profit' (3rd ed., 2020)",
    conditions: [
      { q: "drug_decrim", a: "yes" },
      { q: "civil_asset_forfeiture", a: "yes" }
    ]
  },

  {
    id: "mandatory_mins_racial",
    title: "Mandatory and Disparate",
    body: "You support mandatory minimum sentences for drug offenses and you are concerned about racial disparities in criminal sentencing. The U.S. Sentencing Commission found that Black defendants are 13% more likely than white defendants to face mandatory minimum charges for equivalent drug conduct. Mandatory minimums remove judicial discretion: once prosecutors make charging decisions, judges cannot correct for charging disparities in sentencing. The disparity enters at the charging stage, where mandatory minimums then lock it in. The mechanism you support is the one that enforces the disparity you're concerned about.",
    source: "U.S. Sentencing Commission, 'Mandatory Minimum Penalties for Drug Offenses in the Federal Criminal Justice System' (2017)",
    conditions: [
      { q: "mandatory_mins_drugs", a: "yes" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "qualified_immunity_racial",
    title: "Accountability Without Mechanism",
    body: "You are concerned about racial disparities in policing and you support qualified immunity for officers. Qualified immunity shields officers from civil liability unless the specific constitutional violation was 'clearly established' by a prior case with nearly identical facts. This doctrine makes it difficult to hold individual officers financially accountable for misconduct even when courts agree the conduct was unconstitutional. Civil lawsuits are one of the few accountability mechanisms available for redressing policing disparities that exist outside the criminal justice process. You are concerned about the pattern and support the doctrine that limits one route to addressing it.",
    source: "Baude, 'Is Qualified Immunity Unlawful?' California Law Review (2018); Reuters, 'Shielded' (2020)",
    conditions: [
      { q: "qualified_immunity", a: "yes" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "death_penalty_racial",
    title: "Irreversible Error",
    body: "You support the death penalty and you are concerned about racial disparities in the criminal justice system. Since 1973, more than 200 people have been exonerated from death row after wrongful conviction by the same system (Death Penalty Information Center, 2024). A 2014 study in PNAS estimated that about 4.1% of death sentences in the U.S. are imposed on factually innocent people. The racial disparities documented in charging, sentencing, and prosecution operate in capital cases as they do throughout the criminal system. The error rate that might be tolerable in systems with reversible outcomes is not tolerable when the outcome is permanent.",
    source: "Death Penalty Information Center exoneration data; Gross et al., PNAS (2014)",
    conditions: [
      { q: "death_penalty", a: "yes" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "drone_death_penalty",
    title: "Due Process by Altitude",
    body: "You oppose the death penalty because the state should not execute people, but you support lethal drone strikes against suspects in countries the U.S. has not declared war against. Drone strikes kill without charge, indictment, trial, jury, verdict, or any judicial review of any kind. The Obama administration conducted drone strikes that killed U.S. citizens without due process, including Anwar al-Awlaki and his 16-year-old son Abdulrahman in Yemen in 2011. The state power you distrust in a courtroom with a judge, a jury, a defense attorney, rules of evidence, and a right of appeal, you endorse administered from a remote control station.",
    source: "Al-Aulaqi v. Obama (D.D.C. 2010); Bureau of Investigative Journalism drone casualty data (2004-2020)",
    conditions: [
      { q: "drone_strikes_no_war", a: "yes" },
      { q: "death_penalty", a: "no" }
    ]
  },

  {
    id: "bodily_autonomy_drug_war",
    title: "Autonomy Without Application",
    body: "You believe individuals have a fundamental right to decide what they consume without government criminalization, and you believe the War on Drugs has been effective. A drug war that criminalizes personal consumption is structurally incompatible with a principle of bodily autonomy. If individuals are sovereign over what they put in their bodies, the state is not authorized to imprison them for doing so, regardless of the policy's effectiveness. The question of whether criminalization 'works' to reduce drug use is separate from whether criminalization is a legitimate state response to personal consumption choices. Your position on effectiveness doesn't resolve the legitimacy question raised by your position on autonomy.",
    source: null,
    conditions: [
      { q: "bodily_autonomy", a: "yes" },
      { q: "drug_war_effective", a: "yes" }
    ]
  },

  {
    id: "bodily_autonomy_mandatory_mins",
    title: "Autonomy and Mandatory Prison",
    body: "You believe individuals have a fundamental right to decide what they consume without government criminalization, and you support mandatory minimum prison sentences for drug offenses. Mandatory minimums exist specifically to incarcerate people for drug possession and use, the personal consumption choices you believe individuals have a right to make. These two positions describe the same act and arrive at opposite conclusions about whether the state may imprison a person for it.",
    source: null,
    conditions: [
      { q: "bodily_autonomy", a: "yes" },
      { q: "mandatory_mins_drugs", a: "yes" }
    ]
  },

  {
    id: "crypto_backdoor_corp_data",
    title: "The Door You Cannot Close",
    body: "You are concerned about corporations collecting your personal data and you want the government to have backdoor access to encrypted communications. There is no cryptographic backdoor accessible only to authorized parties. A vulnerability built for the FBI is a vulnerability that foreign intelligence agencies, corporate espionage operations, and criminal hackers can also exploit. The NSA's own hacking toolkit was stolen by the Shadow Brokers in 2017 and used in the WannaCry ransomware attack, which disabled hospitals and critical infrastructure across 150 countries. The entity you want to keep out of your data has less reach than the entity you want to let in.",
    source: "WannaCry attribution: NCSC UK (2018); Shadow Brokers disclosure (April 2017); RAND, 'Zero Days, Thousands of Nights' (2017)",
    conditions: [
      { q: "crypto_backdoor", a: "yes" },
      { q: "corp_data_concern", a: "yes" }
    ]
  },

  {
    id: "snowden_backdoor",
    title: "The Witness and the Program",
    body: "You think Edward Snowden deserves a pardon and you want the government to have backdoor access to encrypted communications. Snowden's primary disclosure was that the NSA was collecting phone records and internet metadata of millions of American citizens without individualized warrants. The USA FREEDOM Act (2015), which ended bulk phone record collection, passed because of public pressure generated by his disclosures. A government encryption backdoor is a legal tool that makes mass surveillance technically simpler and institutionally easier to expand. You support pardoning the person who exposed the program that the legal authority you endorse would help rebuild.",
    source: "PRISM program disclosure (2013); USA FREEDOM Act (2015); ACLU v. Clapper, 2d Cir. (2015)",
    conditions: [
      { q: "crypto_backdoor", a: "yes" },
      { q: "snowden_pardon", a: "yes" }
    ]
  },

  {
    id: "nsa_bulk_corp_data",
    title: "Selective Concern About Surveillance",
    body: "You are concerned about corporations collecting your personal data, but you are comfortable with the NSA collecting phone records and internet metadata of American citizens without individualized warrants. The government entity you are comfortable surveilling you can arrest you, freeze your assets, revoke your passport, and put you in prison. The corporate entities you are concerned about can target you with advertisements. Both collect data about you without meaningful consent. The potential consequences of the two kinds of surveillance are not equivalent.",
    source: "NSA PRISM program (2013); Smith v. Maryland, 442 U.S. 735 (1979) (under the third-party doctrine, data shared with corporations receives no Fourth Amendment protection, meaning the government can obtain it from companies without a warrant)",
    conditions: [
      { q: "nsa_bulk", a: "yes" },
      { q: "corp_data_concern", a: "yes" }
    ]
  },

  {
    id: "snowden_nsa_bulk",
    title: "The Leak and the Program",
    body: "You think Edward Snowden deserves a pardon and you support NSA bulk collection of phone records and internet metadata. Snowden's central disclosure was that the NSA was conducting exactly that program without individualized warrants. The Second Circuit ruled in 2015 that the bulk phone record program Snowden revealed was illegal under FISA. A pardon would formally acknowledge that the public had a right to know about the program. You support the pardon for the leak while also supporting the program the leak exposed.",
    source: "ACLU v. Clapper, 785 F.3d 787 (2d Cir. 2015); USA FREEDOM Act (2015)",
    conditions: [
      { q: "snowden_pardon", a: "yes" },
      { q: "nsa_bulk", a: "yes" }
    ]
  },

  {
    id: "nuclear_climate",
    title: "The Arithmetic of Decarbonization",
    body: "You want aggressive government action on climate change and you oppose expanding nuclear power. Nuclear is currently the only proven large-scale source of carbon-free baseload electricity capable of generating power when the sun is not shining and the wind is not blowing. The IPCC SR1.5 report includes nuclear energy in most of its modeled pathways; across the illustrated scenarios, nuclear's share of global electricity generally grows or holds through 2050. Every U.S. nuclear plant that has closed since 2012 was replaced primarily by natural gas, not by solar or wind. France generates about 70% of its electricity from nuclear power and has among the lowest electricity-sector carbon emissions in Europe. The decarbonization arithmetic is substantially harder without nuclear.",
    source: "IPCC Special Report on Global Warming of 1.5C, Chapter 2 (2018); IEA, World Energy Outlook (2023)",
    conditions: [
      { q: "nuclear_power", a: "no" },
      { q: "climate_reg_increase", a: "yes" }
    ]
  },

  {
    id: "fda_drug_prices",
    title: "The Cost of Certainty",
    body: "You think drug prices in the U.S. are unreasonably high and you think the FDA should require more rigorous clinical trials before drug approval. The FDA's average drug development and approval timeline is about 12 years, at an average cost of $2.6 billion per approved drug (Tufts CSDD, 2016). A drug's 20-year patent clock typically starts before clinical trials begin, compressing the exclusivity window available to recover that $2.6 billion. Stricter FDA requirements mean longer timelines, higher development costs, and more compressed exclusivity windows, all of which create pressure to price approved drugs as high as the market will bear. Stricter requirements produce safer drugs and more expensive drugs. Both outcomes follow from the same policy.",
    source: "Tufts Center for the Study of Drug Development (2016); DiMasi et al., Journal of Health Economics (2016)",
    conditions: [
      { q: "fda_stricter", a: "yes" },
      { q: "drug_prices_high", a: "yes" }
    ]
  },

  {
    id: "free_college_loans",
    title: "More of the Machine",
    body: "You want to cancel student debt and make college free through federal funding. Federal student loan guarantees, introduced through the Higher Education Act (1965), are a primary mechanism behind tuition inflation. When lenders are guaranteed repayment regardless of institutional quality or the degree's market value, universities have little incentive to control costs. A 2015 Federal Reserve Bank of New York study found that each dollar increase in subsidized loan availability raised tuition by about 60 cents. Between 1980 and 2020, college tuition rose over 1,000% while general consumer prices rose about 240%. Canceling existing debt addresses the symptom while dramatically expanding federal college funding would amplify the causal mechanism.",
    source: "Federal Reserve Bank of New York, 'Credit Supply and the Rise in College Tuition' (2015); College Board, Trends in College Pricing",
    conditions: [
      { q: "free_college", a: "yes" },
      { q: "student_debt", a: "yes" }
    ]
  },

  {
    id: "private_prisons_hospitals",
    title: "Profit from Captive Populations",
    body: "You support for-profit private prisons and you want to ban private equity from operating hospitals. Both situations involve companies extracting profit from populations that cannot freely exit the arrangement. A person in an acute medical crisis cannot shop for a better hospital. A prisoner cannot choose a different facility. The moral logic you apply to hospital patients, that profit motives distort care for people with no meaningful exit option, applies with equal force to incarceration. The standard you use to evaluate private equity in healthcare is not the standard you apply to private equity in corrections.",
    source: "Kannan, Bruch, Song, 'Changes in Hospital Adverse Events and Patient Outcomes Associated With Private Equity Acquisition,' JAMA (2023); CoreCivic and GEO Group lobbying disclosures, OpenSecrets.org",
    conditions: [
      { q: "private_prisons", a: "yes" },
      { q: "private_equity_hospitals", a: "yes" }
    ]
  },

  {
    id: "private_prisons_drug_decrim",
    title: "Decriminalizing the Revenue Source",
    body: "You support for-profit private prisons and you support decriminalizing drug use. Private prison contracts with states typically include occupancy guarantees requiring 80-90% capacity. Drug offenders constitute a significant portion of the prison population. Decriminalization would reduce the number of people incarcerated for drug-related offenses, directly threatening the occupancy levels required by the contracts with the prison operators you support. You would be decriminalizing a primary source of revenue for an industry you want to preserve.",
    source: "In the Public Interest, 'Criminal: How Lockup Quotas and Low-Crime Taxes Guarantee Profits' (2013)",
    conditions: [
      { q: "private_prisons", a: "yes" },
      { q: "drug_decrim", a: "yes" }
    ]
  },

  {
    id: "torture_death_penalty",
    title: "Reliability of the System You Distrust",
    body: "You oppose the death penalty and you support enhanced interrogation techniques on terrorism suspects. If you oppose the death penalty because the criminal justice system cannot reliably determine guilt, the same epistemic problem applies to the information produced by enhanced interrogation. The Senate Intelligence Committee's 2014 report found that enhanced interrogation did not produce unique or reliable intelligence, and that CIA representations to the contrary were 'inaccurate and unsupported.' Statements made under extreme physical duress are among the least reliable forms of evidence. The system you distrust enough to oppose its most serious punishment, you trust enough to act on information it extracts through coercion.",
    source: "Senate Select Committee on Intelligence, 'Study of the CIA's Detention and Interrogation Program' (2014)",
    conditions: [
      { q: "torture_eit", a: "yes" },
      { q: "death_penalty", a: "no" }
    ]
  },

  {
    id: "ai_copyright_monopoly",
    title: "Copyright as Market Barrier",
    body: "You support breaking up large tech monopolies and you want AI companies to be legally required to pay rights-holders for training data. AI copyright licensing requirements would give existing media and publishing corporations, which hold vast libraries of copyrighted content, the ability to block AI competitors from training on that content without expensive deals. The companies best positioned to meet those licensing requirements are large incumbent AI developers who can afford to buy or license content libraries at scale, or who already own them. Copyright law applied as an AI regulation tool would entrench exactly the kind of incumbent advantage over new entrants that antitrust law is meant to prevent.",
    source: "Lemley and Casey, 'Fair Learning,' Texas Law Review (2021)",
    conditions: [
      { q: "ai_copyright", a: "yes" },
      { q: "monopoly_break", a: "yes" }
    ]
  },

  {
    id: "platform_liability_no_reg",
    title: "Liability Is Regulation",
    body: "You oppose government regulation of social media to prevent misinformation, but you want social media companies to be legally liable for content their algorithms promote. Legal liability enforced through courts is a form of government regulation. When you make a platform liable for algorithmically-promoted content, courts and legislatures define what content creates liability, which means the government defines the categories of speech that expose platforms to financial risk. The effect on content moderation is the same regardless of whether the rule originates in a regulatory agency or a liability statute. These two positions arrive at the same destination through different institutional paths.",
    source: "Section 230, Communications Decency Act (1996); Moody v. NetChoice, 603 U.S. ___ (2024)",
    conditions: [
      { q: "platform_liability", a: "yes" },
      { q: "social_media_reg", a: "no" }
    ]
  },

  {
    id: "voter_id_national_id",
    title: "The ID You Didn't Issue",
    body: "You support requiring government-issued photo ID to vote and you oppose a national digital identification system. About 11% of U.S. citizens eligible to vote do not have government-issued photo ID. That figure is higher among low-income Americans, Black Americans, and the elderly. Voter ID requirements create a compliance burden that falls disproportionately on people who do not already possess the required credential. A national ID system is the policy that would ensure every eligible voter could obtain the credential your requirement demands. Without it, the requirement functions as a filter whose burden is distributed unevenly across the population. You support the requirement without supporting the prerequisite that would make it apply equally.",
    source: "Government Accountability Office, 'Issues Related to State Voter Identification Laws' (2014); Brennan Center for Justice, 'Citizens Without Proof' (2006)",
    conditions: [
      { q: "voter_id", a: "yes" },
      { q: "national_id", a: "no" }
    ]
  },

  {
    id: "facial_recog_racial",
    title: "Compounding the Error",
    body: "You are concerned about racial disparities in policing and you support police use of facial recognition technology to identify suspects. NIST's 2019 testing found that many facial recognition systems misidentified people of color, particularly Black women, at substantially higher rates than white men, with some systems showing error rate differences exceeding an order of magnitude. At least three men have been publicly documented as wrongfully arrested based solely on facial recognition mismatches; all three were Black. Facial recognition operates at the identification stage of criminal investigation. Errors made there carry forward through every subsequent stage: investigation, arrest, charge, prosecution, incarceration. A technology that is least accurate for the population most subject to policing disparities amplifies those disparities at their point of entry.",
    source: "NIST, 'Face Recognition Vendor Test (FRVT) Part 3: Demographic Effects' (2019); Buolamwini and Gebru, 'Gender Shades,' MIT Media Lab (2018)",
    conditions: [
      { q: "facial_recog_police", a: "yes" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "military_spending_corp_capture",
    title: "The Original Revolving Door",
    body: "You believe corporations have captured the regulatory agencies meant to govern them, and you support increasing military spending. The defense industry is the documented origin of the revolving door dynamic you are concerned about. A 2018 Project on Government Oversight report found that the top 20 defense contractors employed 380 former senior Pentagon officials, flag officers, and congressional staff who had moved directly from government positions. Lockheed Martin, Boeing, Raytheon, and Northrop Grumman spend tens of millions lobbying Congress each year. Eisenhower named this dynamic in his 1961 farewell address. Additional defense spending flows directly to the same companies operating the same revolving door whose existence in other sectors you find troubling.",
    source: "Project on Government Oversight, 'Brass Parachutes' (2018); Eisenhower, Farewell Address (January 17, 1961)",
    conditions: [
      { q: "military_spending", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corp_capture",
    title: "Financing the Capture",
    body: "You believe corporations have captured the regulatory agencies meant to govern them, and you think corporations, unions, and nonprofit organizations should be allowed to donate to political parties and spend on political campaigns. Campaign contributions and the expectation of post-government employment are among the primary mechanisms through which regulatory capture operates. Industries fund the campaigns of legislators who oversee the agencies that regulate those industries. Those legislators then staff those agencies with the industries' preferred personnel. The capture you are concerned about does not begin inside the agency; it begins with the campaign financing that shapes which legislators control agency appropriations and appointments. Your preferred campaign finance policy helps sustain the process you are concerned about.",
    source: "Drutman, 'The Business of America Is Lobbying' (2015); Stigler, 'The Theory of Economic Regulation,' Bell Journal of Economics (1971)",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "free_trade_tariffs",
    title: "Free Trade, Until It Isn't",
    body: "You support trade agreements that lower or eliminate tariff barriers between countries and you support tariffs to protect American industries. These are directly opposing trade policies. Trade agreements are mechanisms for mutual tariff reduction; protective tariffs are mechanisms for unilateral trade restriction. You cannot simultaneously pursue both without deciding which takes precedence. The 2018 steel and aluminum tariffs were applied outside any trade agreement framework and triggered retaliatory tariffs from the EU, Canada, and Mexico on over $20 billion in American exports. Tariff-lowering agreements and tariff-raising protectionism rest on incompatible theories of what trade should do.",
    source: "Peterson Institute for International Economics, steel tariff analysis (2018); WTO, 'Retaliatory Measures' database (2018-2019)",
    conditions: [
      { q: "free_trade", a: "yes" },
      { q: "trade_tariffs", a: "yes" }
    ]
  },

  {
    id: "monopoly_tariffs",
    title: "Protected from Competition",
    body: "You support breaking up domestic corporate monopolies and you support tariffs to protect American industries from foreign competition. Antitrust law exists to create competition in markets where it has been suppressed by concentrated private power. Tariffs suppress competition in domestic markets by making foreign alternatives more expensive, which allows domestic producers to charge prices they could not sustain in a fully competitive market. The Sherman Act and the tariff code describe two different things, but they rest on opposite assumptions about competition: antitrust treats competition as the remedy and market concentration as the problem; protective tariffs treat foreign competition as the problem and domestic market concentration as the beneficiary. U.S. Steel's share price rose sharply after the 2018 steel tariffs; domestic steel buyers paid more.",
    source: "Peterson Institute for International Economics (2018); Council of Economic Advisers, 'Economic Report of the President' (2020)",
    conditions: [
      { q: "monopoly_break", a: "yes" },
      { q: "trade_tariffs", a: "yes" }
    ]
  },

  {
    id: "patent_copyright",
    title: "The IP Double Standard",
    body: "You think pharmaceutical companies extend their drug monopolies for too long through patents, and you think copyright law appropriately protects creators. Both pharmaceutical patents and copyrights are government-granted exclusive rights backed by civil and criminal penalties for infringement. Pharmaceutical patents last 20 years from filing. Corporate copyrights last 95 years from publication. The same economic logic you find objectionable in pharmaceutical patents (that it grants a company the right to charge monopoly prices after development costs are recovered) applies to copyright-holding corporations at a term roughly five times as long. Disney's copyright in early Mickey Mouse films will not expire until 2024 and beyond, nearly a century after the films were made. The exclusivity you want shortened in one IP regime is the exclusivity you want maintained in the other.",
    source: "35 U.S.C. § 154 (patent terms); 17 U.S.C. § 302 (copyright terms); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2010)",
    conditions: [
      { q: "patent_term", a: "yes" },
      { q: "copyright_protection", a: "yes" }
    ]
  },

  {
    id: "eminent_corp_capture",
    title: "Captured Power of Seizure",
    body: "You believe corporations have captured the regulatory process and you support the government's power to seize private property and transfer it to private developers for economic development. The definitive example is Kelo v. City of New London (2005): New London city officials approved seizing the homes of longtime residents and transferring the land to private developers as part of a plan designed partly to complement a nearby Pfizer research facility. The city's economic development corporation drove the process. Pfizer left New London in 2009; the land sat vacant for years after the families were displaced. You are comfortable with the government exercising its most coercive domestic power over individual property in circumstances where the entity you believe captures government is often the intended beneficiary.",
    source: "Kelo v. City of New London, 545 U.S. 469 (2005); Institute for Justice, 'Kelo's Long Shadow' (2015)",
    conditions: [
      { q: "eminent_domain", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "eminent_zoning",
    title: "The Property You Control",
    body: "You support the government's power to seize private property and transfer it to private developers for economic development, and you support local governments' power to prevent property owners from building multi-family housing through zoning. Together these positions give government the authority to both restrict what you can build on your land and take that land from you. The economic development argument used to justify eminent domain takings (that denser development generates tax revenue and economic activity) is the same argument against restrictive zoning. A government that prohibits you from building a four-unit building on your lot can condemn your property and transfer it to a developer who will build a forty-unit building, on the grounds that dense development serves the public interest.",
    source: "Kelo v. City of New London, 545 U.S. 469 (2005); Hsieh and Moretti, 'Housing Constraints and Spatial Misallocation,' American Economic Journal: Macroeconomics (2019)",
    conditions: [
      { q: "eminent_domain", a: "yes" },
      { q: "zoning_restrict", a: "yes" }
    ]
  },

  {
    id: "regime_change_corp_capture",
    title: "The Business of Regime Change",
    body: "You believe corporations capture the government agencies meant to regulate them and you support the U.S. using military force or covert operations to remove foreign governments it considers hostile to American interests. The documented history of U.S. regime change operations is substantially a history of corporate interests shaping government action abroad. The 1953 Iran coup (Operation Ajax) followed the Iranian government's nationalization of Anglo-Iranian Oil Company's oil fields; the CIA operation was initiated partly at the company's request. The 1954 Guatemala coup followed land reform that affected the United Fruit Company's holdings; the Eisenhower administration's key foreign policy officials had ties to the company. The mechanism you distrust domestically (corporations directing government power to protect their commercial interests) produced the specific foreign policy operations you are endorsing.",
    source: "Kinzer and Schlesinger, 'Bitter Fruit' (1982); Elm, 'Oil, Power and Principle: Iran's Oil Nationalization' (1992); O'Rourke, 'Covert Regime Change' (2018)",
    conditions: [
      { q: "regime_change", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "lobby_ban_corp_donations",
    title: "The Other Channel",
    body: "You support banning former government officials from becoming lobbyists, and you think corporations should be allowed to donate to political parties and spend on political campaigns. Lobbying and campaign finance are two channels of the same corporate political access-seeking activity. Companies and industry groups that face restrictions on direct lobbying contact redirect their access-seeking into campaign donations, super PAC spending, the promise of post-government board positions and speaking fees, and the cultivation of relationships that outlast specific lobbying rules. A ban on the explicit contact channel without restricting the financial channel does not reduce corporate influence over government decisions; it changes the form it takes. The revolving door you want to slow has campaign money flowing through it in both directions.",
    source: "Drutman, 'The Business of America Is Lobbying' (2015); Campaign Finance Institute, disclosure data",
    conditions: [
      { q: "lobby_ban", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "carbon_corp_capture",
    title: "The Rate That Gets Set",
    body: "You support a carbon tax and you believe corporations capture the government agencies meant to regulate them. A carbon tax requires setting a price on emissions, defining which activities are covered, determining which industries receive exemptions or offset credits, and enforcing compliance across the largest emitters in the economy. Each of these decisions is a lobbying target. The European Emissions Trading System, the world's largest carbon pricing market, was extensively gamed in its initial phases: heavy industry lobbied for free permit allocations that allowed major emitters to profit from the market while maintaining emission levels. U.S. fossil fuel companies, utilities, and energy-intensive manufacturers collectively constitute among the most lobbied industries in the country. The carbon pricing mechanism you support will be shaped by the same industry lobbying you are concerned about.",
    source: "European Court of Auditors, 'The EU's Emissions Trading System: Free Allocation of Allowances Needed Better Targeting' (2020); OpenSecrets.org, energy sector lobbying expenditures",
    conditions: [
      { q: "carbon_tax", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "single_payer_corp_capture",
    title: "The Largest Target",
    body: "You believe corporations capture the government agencies meant to regulate them, and you support a government-run, single-payer healthcare system. A single-payer system would be the largest single buyer of pharmaceutical products, medical devices, and hospital services in American history. The lobbying value of influencing a buyer that controls all healthcare purchasing is substantially greater than influencing multiple competing insurers. The pharmaceutical industry, hospital chains, and medical device manufacturers collectively account for the largest lobbying expenditure of any sector in the United States. Veterans Affairs, a direct government healthcare provider, was legally prohibited from negotiating drug prices until 2022, a restriction maintained for over two decades by sustained pharmaceutical industry lobbying. You are concerned about the capture of regulatory agencies with far less concentrated purchasing power.",
    source: "OpenSecrets.org, healthcare sector lobbying data; CBO, drug price negotiation analysis (2019); Sanger-Katz, 'Why Does the V.A. Pay Too Much for Drugs?,' New York Times (2019)",
    conditions: [
      { q: "single_payer", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "min_wage_occupational_lic",
    title: "Floors Without Doors",
    body: "You support raising the federal minimum wage and you support occupational licensing requirements for professions like cosmetology, interior decorating, and floristry. The minimum wage sets a floor that protects workers who have cleared the legal right to sell their labor in a field. Occupational licensing determines who is legally permitted to enter those fields at all. Together, these policies raise the wage floor for workers who have already passed licensing barriers while maintaining those barriers as obstacles that workers without the time or money to complete required training cannot clear. The workers most likely to be priced out of licensed fields by licensing costs and training requirements (low-income workers, workers with caregiving responsibilities, racial minorities without access to trade networks) are the same workers a higher minimum wage is meant to help. You support the floor while supporting the gate that determines who gets to stand on it.",
    source: "U.S. Government Accountability Office, 'Occupational Licensing: Assessing Burdens and Scrutinizing Justifications' (2022); Institute for Justice, 'License to Work' (3rd ed., 2022)",
    conditions: [
      { q: "min_wage", a: "yes" },
      { q: "occupational_lic", a: "yes" }
    ]
  },

  {
    id: "pro_union_corp_donations",
    title: "Organize Without Speaking",
    body: "You support workers' rights to form unions and engage in collective bargaining, and you oppose corporations, unions, and nonprofits spending on political campaigns. Unions' political spending is one of their primary tools for influencing labor legislation, minimum wage law, workplace safety regulations, and the composition of the National Labor Relations Board, which administers the rules under which unions can organize. The Wagner Act (1935), Taft-Hartley (1947), and every significant amendment to U.S. labor law since have been shaped partly by organized labor's political spending and campaigning. You support collective bargaining as a mechanism for workers to exercise economic power, but you oppose the political spending through which unions shape the legal framework that makes collective bargaining possible and enforceable at all.",
    source: "Mayer, 'The Blue Eagle at Work' (2004); Federal Election Commission disclosure data; National Labor Relations Act (1935)",
    conditions: [
      { q: "pro_union", a: "yes" },
      { q: "campaign_donations_corps", a: "no" }
    ]
  },

  {
    id: "corp_taxes_corp_capture",
    title: "Writing Your Own Rate",
    body: "You support higher corporate taxes and you believe corporations have captured the agencies meant to regulate them. The effective corporate tax rate paid by large U.S. companies is substantially below the statutory rate. That gap is almost entirely the product of lobbying: deductions for accelerated depreciation, carried interest treatment, offshore profit shifting rules, and industry-specific credits were all written into the tax code through sustained corporate advocacy. Richter, Samphantharak, and Timmons documented in the American Journal of Political Science (2009) that companies spending the most on lobbying paid the lowest effective tax rates. You want to raise taxes through the same legislative process that has been shaped by corporations to minimize what they pay.",
    source: "Richter, Samphantharak, Timmons, 'Lobbying and Taxes,' American Journal of Political Science 53(4):893-912 (2009); JCT and CBO, effective corporate tax rate analyses",
    conditions: [
      { q: "corp_taxes", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "gov_id_social_voter",
    title: "ID for Speech, Not for Votes",
    body: "You think social media platforms should require users to verify their identity with a government-issued ID, and you oppose requiring voters to show a government-issued photo ID to vote. Voting is an explicitly enumerated constitutional right. Anonymous political speech (the Federalist Papers were published under the pseudonym 'Publius') has been foundational to American political participation and is constitutionally protected under McIntyre v. Ohio (1995). If requiring government ID is an unacceptable burden on the constitutional right to vote, requiring it to post political commentary on social media is applying a higher barrier to the same constitutional interest in political participation. You find the burden unacceptable at the polling place and appropriate on the platform where most political speech now occurs.",
    source: "McIntyre v. Ohio Election Commission, 514 U.S. 334 (1995); Brennan Center for Justice, voter ID research",
    conditions: [
      { q: "gov_id_social_media", a: "yes" },
      { q: "voter_id", a: "no" }
    ]
  },

  {
    id: "gov_id_social_snowden",
    title: "Expanding the Architecture",
    body: "You think social media platforms should require users to verify their identity with a government-issued ID, and you support a pardon for Edward Snowden. Snowden's primary disclosure was that the NSA was collecting the phone records and internet communications metadata of millions of Americans without individualized warrants. Government ID requirements for social media would ensure that the government can link every post and message to a known legal identity, eliminating anonymity from what has become the primary arena of public political discourse. If you believe Snowden's exposure of government surveillance of online communications was a public service worth pardoning, adding a mandatory government identity layer to those communications expands the infrastructure that makes that surveillance more precise and comprehensive.",
    source: "PRISM program disclosure (2013); USA FREEDOM Act (2015); McIntyre v. Ohio Election Commission, 514 U.S. 334 (1995)",
    conditions: [
      { q: "gov_id_social_media", a: "yes" },
      { q: "snowden_pardon", a: "yes" }
    ]
  },

  {
    id: "term_limits_revolving_door",
    title: "The Exit That Remains Open",
    body: "You support mandatory congressional term limits and you do not support banning former government officials from becoming lobbyists. Term limits accelerate the revolving door rather than closing it. A legislator who knows they will be out of office in a fixed number of years is continuously job-hunting while in office, making the relationships they cultivate with potential private-sector employers more salient to their daily decision-making, not less. Public Citizen has documented that more than half of recent departing members of Congress have registered as lobbyists or taken lobbying-adjacent roles. With no limit on post-congressional lobbying, you would have a legislative body composed entirely of people in active transition to private advocacy roles. The mechanism you support to limit tenure in office leaves fully open the channel through which that tenure converts to private influence.",
    source: "Center for Responsive Politics, 'Revolving Door' analysis (2021); U.S. Term Limits v. Thornton, 514 U.S. 779 (1995)",
    conditions: [
      { q: "term_limits", a: "yes" },
      { q: "lobby_ban", a: "no" }
    ]
  },

  {
    id: "gun_control_qualified_immunity",
    title: "Expand the Law, Limit the Accountability",
    body: "You support more government restrictions on firearm purchase and ownership, and you support qualified immunity for police officers. Firearms restrictions are enforced by police conducting searches, making arrests, and seizing weapons. Qualified immunity shields officers from personal civil liability unless the specific constitutional violation they committed was 'clearly established' by a prior case with nearly identical facts. When officers conduct unconstitutional searches in pursuit of illegal weapons, when they use excessive force during firearms enforcement, or when they make wrongful arrests based on gun law violations, qualified immunity limits the legal recourse available to people whose rights were violated in the course of the enforcement activity you are expanding. You want more police enforcement of gun laws while limiting the accountability mechanism for how that enforcement is conducted.",
    source: "Baude, 'Is Qualified Immunity Unlawful?' California Law Review (2018); Harlow v. Fitzgerald, 457 U.S. 800 (1982)",
    conditions: [
      { q: "gun_control_more", a: "yes" },
      { q: "qualified_immunity", a: "yes" }
    ]
  },

  {
    id: "balanced_budget_military",
    title: "The Arithmetic of Fiscal Conservatism",
    body: "You want a legally balanced federal budget and you want to increase military spending. The U.S. military budget was $886 billion in fiscal year 2024, roughly 13% of total federal outlays and more than the next ten countries combined (SIPRI, 2024). The federal budget has four major spending categories: Social Security, Medicare and Medicaid, defense, and interest on the national debt. Interest payments alone exceeded $882 billion in fiscal year 2024, surpassing the defense budget. The U.S. has not run a surplus since 2001. A balanced budget achieved without cutting defense requires eliminating or drastically cutting the social insurance programs that occupy the other large spending columns. A balanced budget achieved without touching Social Security and Medicare requires cuts to defense that exceed what you proposed. The numbers do not close without a choice that conflicts with one of your positions.",
    source: "Congressional Budget Office, 'The Budget and Economic Outlook: 2024-2034' (2024); Office of Management and Budget, Historical Tables",
    conditions: [
      { q: "balanced_budget", a: "yes" },
      { q: "military_spending", a: "yes" }
    ]
  },

  {
    id: "marijuana_drug_war",
    title: "The Law You Support in Half the States",
    body: "You believe states that voted to legalize marijuana should operate without federal interference, and you believe the War on Drugs has been effective policy. The War on Drugs is a federal program. Federal law classifies marijuana as a Schedule I controlled substance under the Controlled Substances Act, regardless of what any state decides. In Gonzales v. Raich (2005), the Supreme Court held that Congress can prosecute marijuana possession under the Commerce Clause even in states where voters legalized it. Twenty-four states have now made a democratic decision that federal drug enforcement policy overrides. You support the federal enforcement regime and you support the right of states to be free of it, for the same drug, at the same time.",
    source: "Gonzales v. Raich, 545 U.S. 1 (2005); Controlled Substances Act (1970), 21 U.S.C. § 841",
    conditions: [
      { q: "marijuana_state_right", a: "yes" },
      { q: "drug_war_effective", a: "yes" }
    ]
  },

  {
    id: "immigration_min_wage",
    title: "The Floor and the Supply",
    body: "You support significantly expanding legal work visas for foreign workers and you support raising the federal minimum wage. A minimum wage sets a legal floor on the price of labor. Expanding the supply of workers in a labor market through new visa programs increases the number of people competing for available jobs. Standard labor economics holds that increasing worker supply, holding demand constant, exerts downward pressure on wages, particularly in lower-skill job categories. The workers most directly affected by new entrants in those categories are those the minimum wage floor is designed to protect. A higher wage floor addresses compensation for workers already in the market while expanded visa supply continues to affect the wage offers available to the workers with the least bargaining leverage.",
    source: "Borjas, 'Immigration Economics' (Harvard University Press, 2014); Congressional Budget Office, 'The Effects on Employment and Family Income of Increasing the Federal Minimum Wage' (2019)",
    conditions: [
      { q: "immigration_labor", a: "yes" },
      { q: "min_wage", a: "yes" }
    ]
  },

  {
    id: "immigration_tariffs",
    title: "Protecting Workers at the Border, Importing Them Through It",
    body: "You support tariffs to protect American industries and workers from foreign competition, and you support expanding legal work visas for foreign workers. Tariffs protect domestic workers from foreign labor by imposing a cost on goods produced abroad. Work visas bring foreign workers directly into domestic labor markets to compete with American workers for the same jobs. Both policies address the same question: should American workers be insulated from global labor market competition? Tariffs answer yes at the goods border. Expanded work visas answer no at the employment border. You are applying protection at one entry point and removing it at the other for workers in the same labor market categories the tariffs were meant to shield.",
    source: "Peterson Institute for International Economics, steel tariff employment analysis (2018); Congressional Research Service, 'U.S. Employment-Based Immigration Policy' (2023)",
    conditions: [
      { q: "trade_tariffs", a: "yes" },
      { q: "immigration_labor", a: "yes" }
    ]
  },

  {
    id: "school_vouchers_unions",
    title: "Choice at the Cost of Collective Power",
    body: "You support giving low-income families government vouchers to attend private or religious schools, and you support workers' rights to form unions. Private and religious schools are significantly less likely to employ unionized teachers. School choice programs that divert students and public funding to private institutions reduce enrollment at public schools, which affects the staffing levels and contract leverage of public school teacher unions. The exit option you want to give individual families weakens the collective institution through which the workers at those families' original schools exercise the bargaining power you support. Vouchers and robust public-sector teacher unions rest on incompatible assumptions about whether individual exit or collective power produces better outcomes for workers.",
    source: "Zelman v. Simmons-Harris, 536 U.S. 639 (2002); National Education Association, membership and collective bargaining data; Hoxby, 'Does Competition Among Public Schools Benefit Students and Taxpayers?' American Economic Review (2000)",
    conditions: [
      { q: "school_vouchers", a: "yes" },
      { q: "pro_union", a: "yes" }
    ]
  },

  {
    id: "bodily_autonomy_gun_control",
    title: "Sovereignty of Person and Property",
    body: "You believe individuals have a fundamental right to decide what substances they consume without government criminalization, and you support more government restrictions on firearm purchase and ownership. Both positions ask what the state may legally prohibit a person from possessing. The argument for drug decriminalization holds that individuals are sovereign over their own bodies; the state's interest in health outcomes does not justify criminal penalties for personal consumption choices. The argument against gun restrictions holds that individuals are sovereign over their personal property; the state's interest in preventing misuse does not justify restricting ownership. You have applied personal sovereignty to one category of personal possession and withdrawn it from another. The distinction drug policy reformers typically offer (drug use harms primarily the user; guns can harm others) is real but cuts both ways: second-hand harms of addiction affect families and communities extensively, and the vast majority of gun owners never harm anyone. The asymmetry is genuine and worth engaging with, but it is not resolved by restating it.",
    source: "Griswold v. Connecticut, 381 U.S. 479 (1965); D.C. v. Heller, 554 U.S. 570 (2008); Lawrence v. Texas, 539 U.S. 558 (2003)",
    conditions: [
      { q: "bodily_autonomy", a: "yes" },
      { q: "gun_control_more", a: "yes" }
    ]
  },

  {
    id: "drug_decrim_gun_control",
    title: "Personal Choice, Until It Involves Guns",
    body: "You support decriminalizing drug use as a personal choice that should not result in criminal prosecution, and you support more government restrictions on firearm purchase and ownership. Both drug use and gun ownership involve personal decisions about what someone possesses or consumes. Drug decriminalization rests on the argument that the state should not imprison people for choices about what they put in their bodies or keep in their homes, even when those choices carry risk. Gun restriction rests on the argument that the state may limit which weapons people may keep. In both cases, the object is legal; in both cases, misuse can harm others; in both cases, most users or owners do not harm anyone. The question of which personal possession choices the state may restrict more heavily does not answer itself from the principle you apply to drug use. You are drawing a line between two categories of possession that the principle of limiting criminalization does not draw for you.",
    source: "Portugal decriminalization outcomes: EMCDDA, 'Drug Policy Profiles: Portugal' (2021); D.C. v. Heller, 554 U.S. 570 (2008)",
    conditions: [
      { q: "drug_decrim", a: "yes" },
      { q: "gun_control_more", a: "yes" }
    ]
  },

  {
    id: "pro_union_free_trade",
    title: "Organizing Against a Global Labor Market",
    body: "You support workers' rights to form unions and engage in collective bargaining, and you support trade agreements that lower or eliminate tariff barriers between countries. Unions negotiate wages and working conditions against employers in specific labor markets. Trade liberalization expands the pool of workers against whom domestic employees compete to include workers in countries where independent unions are prohibited, labor law enforcement is weak, and wages reflect those conditions. The Economic Policy Institute estimated that NAFTA shifted roughly 700,000 U.S. jobs to Mexico between 1994 and 2010. Collective bargaining leverage depends on how difficult and costly it is for employers to substitute domestic workers with cheaper alternatives; trade agreements systematically reduce that cost. You support the mechanism through which workers exercise collective economic power and the agreements that reduce the conditions under which that mechanism operates.",
    source: "Economic Policy Institute, 'NAFTA's Impact on U.S. Workers' (2013); Autor, Dorn, Hanson, 'The China Syndrome,' American Economic Review (2013)",
    conditions: [
      { q: "pro_union", a: "yes" },
      { q: "free_trade", a: "yes" }
    ]
  },

  {
    id: "free_trade_corp_capture",
    title: "Who Negotiates Free Trade",
    body: "You support trade agreements that lower or eliminate tariff barriers, and you believe corporations capture the government processes meant to regulate them. Trade agreements are negotiated by the Office of the U.S. Trade Representative, which relies on 28 formal industry advisory committees composed primarily of corporate representatives to define U.S. positions. The Trans-Pacific Partnership's intellectual property chapter, leaked in 2015, included provisions that pharmaceutical and entertainment industry lobbyists had advocated for years. NAFTA was structured partly to allow manufacturers to relocate production abroad while maintaining duty-free U.S. market access, a result preferred by multinationals who were extensively involved in the negotiations. Trade rules, like domestic regulations, are shaped by negotiators with deep ties to the industries with the most at stake in specific tariff schedules, investment protections, and enforcement mechanisms. The process that writes tariff levels is no less accessible to corporate lobbying than the process that writes regulations.",
    source: "USTR Industry Trade Advisory Committee disclosure records; WikiLeaks, TPP Intellectual Property Chapter (November 2015); Public Citizen, 'NAFTA at 20' (2014)",
    conditions: [
      { q: "free_trade", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "zoning_climate",
    title: "The Carbon You Zone In",
    body: "You support government action on climate change and you support local governments' power to prevent multi-family housing construction through zoning. Dense urban housing is among the most effective tools for reducing per-capita carbon emissions. Urban residents in multi-family buildings use substantially less energy for heating, cooling, and transportation than suburban residents in single-family homes; research consistently finds 2 to 4 times differences in per-capita emissions between high-density urban and low-density suburban living. A 2019 analysis in Environmental Research Letters found that higher residential density is one of the highest-impact lifestyle factors for reducing household carbon footprints. Single-family-only zoning, which covers the majority of residential land in most U.S. cities, legally mandates the low-density configuration that produces the highest per-capita emissions. You support regulations designed to reduce emissions while supporting land-use rules that lock in the housing pattern most associated with those emissions for the lifetimes of the structures built under them.",
    source: "Jones and Kammen, 'Spatial Distribution of U.S. Household Carbon Footprints,' Environmental Science and Technology (2014); Arcaya et al., 'Residential Clustering and Emissions,' Environmental Research Letters (2019)",
    conditions: [
      { q: "zoning_restrict", a: "yes" },
      { q: "climate_reg_increase", a: "yes" }
    ]
  },

  {
    id: "housing_crisis_zoning",
    title: "The Crisis You Protect",
    body: "You believe the shortage of affordable housing is a serious problem in American cities and you support local governments' power to prevent multi-family housing construction through zoning. The housing shortage in American cities is primarily a supply shortage: there are not enough homes because zoning laws make it illegal to build them. Single-family-only zoning, which covers the majority of residential land in most major American cities, prohibits the apartment buildings and multi-family housing that would increase supply. San Francisco, Los Angeles, and New York have both severe housing affordability crises and among the most restrictive zoning codes in the country. Houston, which has no traditional zoning code, has maintained substantially more affordable housing than comparably sized cities. A 2019 study in the American Economic Journal found that housing supply restrictions in high-productivity cities cost the U.S. economy roughly 2% of GDP annually by preventing workers from moving to where their labor is most productive. The mechanism that would reduce the crisis is the mechanism you support maintaining.",
    source: "Hsieh and Moretti, 'Housing Constraints and Spatial Misallocation,' American Economic Journal: Macroeconomics (2019); Urban Institute, housing supply research (2022)",
    conditions: [
      { q: "housing_affordability", a: "yes" },
      { q: "zoning_restrict", a: "yes" }
    ]
  },

  {
    id: "mandatory_vaccines_autonomy",
    title: "The Mandate Exception",
    body: "You believe individuals have a fundamental right to decide what substances they consume without government criminalization, and you support requiring childhood vaccination as a condition of public school attendance. Vaccines are substances introduced into the body. The principle of bodily autonomy holds that individuals are sovereign over their own bodies and what enters them. You apply that principle to personal drug consumption and withdraw it when the government determines that a different medical intervention serves collective health requirements. The structure of the conflict is identical in both cases: the state has an interest in what enters bodies; individuals have a competing claim of personal sovereignty. You resolve that tension in favor of individual choice when the question is drug consumption and in favor of state mandate when the question is vaccination. The strongest argument for vaccine requirements (unvaccinated individuals create risk for people who cannot receive vaccines) is a genuine harm-to-others argument. It is the same category of argument that drug prohibition advocates use, and that you find insufficient when applied to drug use.",
    source: "Jacobson v. Massachusetts, 197 U.S. 11 (1905); Lawrence v. Texas, 539 U.S. 558 (2003); Griswold v. Connecticut, 381 U.S. 479 (1965)",
    conditions: [
      { q: "mandatory_vaccines", a: "yes" },
      { q: "bodily_autonomy", a: "yes" }
    ]
  },

  {
    id: "mandatory_vaccines_drug_decrim",
    title: "Which Medical Choices Are Yours",
    body: "You support decriminalizing drug use so that users face treatment rather than prosecution, and you support requiring childhood vaccination as a condition of attending public school. Drug decriminalization holds that choices about what individuals consume are personal decisions that should not result in criminal penalties, even when those choices carry health risks and affect people around the user. Mandatory vaccination holds that choices about what substances are administered to children's bodies must yield to collective health requirements set by the state. You apply more legal protection to the adult who chooses to use drugs than to the parent who chooses not to vaccinate. The drug user's consumption choice primarily affects themselves; the unvaccinated child creates risk for immunocompromised people who cannot receive vaccines. This distinction is real. But notice the direction of the asymmetry you have created: you are extending more deference to an individual consumption choice with wider social consequences than to a parental medical decision made in a more contained setting. The harm-to-others logic you are using to support vaccine mandates is formally the same logic used to justify the drug criminalization you oppose.",
    source: "Jacobson v. Massachusetts, 197 U.S. 11 (1905); EMCDDA, 'Drug Policy Profiles: Portugal' (2021); Gostin, 'Public Health Law: Power, Duty, Restraint,' 3rd ed. (2016)",
    conditions: [
      { q: "mandatory_vaccines", a: "yes" },
      { q: "drug_decrim", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_social_media",
    title: "Which Political Speech May Be Restricted",
    body: "You support legal limits on campaign spending and you oppose government regulation of social media to prevent the spread of misinformation. Citizens United v. FEC (2010) held that restricting political spending is restricting political speech, and that the government's interest in preventing distortion of political discourse does not justify that restriction. The Court applied standard First Amendment analysis: the government may not restrict speech based on its content or its potential effects on democratic outcomes. The identical framework constrains misinformation regulations on social media: both involve the government deciding that certain political speech, because of its potential to mislead or distort democratic deliberation, should be suppressed or limited. You accept that the harm from political spending is severe enough to justify a speech restriction while rejecting that logic when applied to misinformation. The constitutional law does not make this distinction for you. The argument that makes campaign finance limits justified is structurally the argument that makes misinformation regulation justified, and vice versa.",
    source: "Citizens United v. FEC, 558 U.S. 310 (2010); Moody v. NetChoice, 603 U.S. ___ (2024); First Amendment Coalition v. Paxton (5th Cir. 2022)",
    conditions: [
      { q: "campaign_finance_limit", a: "yes" },
      { q: "social_media_reg", a: "no" }
    ]
  },

  {
    id: "drone_civil_asset",
    title: "More Process for Property Than for Life",
    body: "You oppose allowing law enforcement to permanently seize property from people who have not been convicted of a crime, and you support the military conducting lethal drone strikes against people who have not been charged, indicted, or tried for any offense. Civil asset forfeiture requires law enforcement to establish probable cause connecting the property to a crime, and allows owners to contest the seizure in a civil proceeding, however burdensome that process is in practice. A person facing permanent loss of their car or cash has more legal recourse than a person the executive branch has designated for lethal targeting. The targeted killing program operates entirely within the executive branch, with no judicial review before or after the strike. The standard of legal process you require for the government to permanently take someone's property is higher than the standard you require for the government to permanently end someone's life.",
    source: "Al-Aulaqi v. Obama, 727 F.3d 1 (D.C. Cir. 2013); Institute for Justice, 'Policing for Profit' (3rd ed., 2020); Anwar al-Awlaki killed by drone strike, Yemen, September 30, 2011 without charge or trial",
    conditions: [
      { q: "drone_strikes_no_war", a: "yes" },
      { q: "civil_asset_forfeiture", a: "no" }
    ]
  },

  {
    id: "drone_mandatory_mins",
    title: "Discretion in the Courtroom, None from the Sky",
    body: "You oppose mandatory minimum prison sentences because they remove judges' ability to consider individual circumstances in sentencing, and you support lethal drone strikes against suspects in countries the U.S. has not declared war against. Mandatory minimums are criticized because the sentencing outcome is fixed before any individual case is heard, leaving no room for a judge to weigh the specific facts. The targeted killing program eliminates judicial involvement entirely. No judge reviews the government's evidence. No defense attorney challenges the government's case. No jury deliberates. No appeal is possible after the fact. The discretion you want restored to judges in drug sentencing does not exist in any form in the lethal targeting process you support. A person charged with a drug offense has more legal protection than a person the executive branch has decided to kill. These are not comparable situations in scale, but you have resolved both by extending more legal process to the person whose liberty is at stake than to the person whose life is.",
    source: "U.S. Sentencing Commission, report on mandatory minimum reform (2011); Scahill, 'The Assassination Complex' (2016); Executive Order 12333 on covert action authority",
    conditions: [
      { q: "drone_strikes_no_war", a: "yes" },
      { q: "mandatory_mins_drugs", a: "no" }
    ]
  },

  {
    id: "gun_control_surveillance",
    title: "Enforcement Without the Infrastructure",
    body: "You support more government restrictions on firearm purchase and ownership and you oppose NSA bulk collection of phone records and internet metadata of American citizens. Meaningful firearms restrictions beyond point-of-sale background checks require knowing who has weapons and where those weapons are. The federal government does not maintain a comprehensive gun registry; the Firearm Owners Protection Act (1986) explicitly prohibits a national firearms database. Enforcing restrictions on existing weapons, tracing illegal transfers between private parties, and recovering firearms from people who become legally ineligible to possess them all require the kind of data collection and analysis you have said the government should not be conducting. You want to expand the scope of what the state may regulate about personal firearms and you want to limit the surveillance infrastructure that effective enforcement of expanded regulation depends on. These goals work against each other.",
    source: "Firearm Owners Protection Act (1986), 18 U.S.C. § 926(a); GAO, 'Gun Show Purchases and the Firearm Trace System' (2017); NSA bulk collection program: USA FREEDOM Act (2015)",
    conditions: [
      { q: "gun_control_more", a: "yes" },
      { q: "nsa_bulk", a: "no" }
    ]
  },

  {
    id: "drug_decrim_social_media",
    title: "What the State May Restrict You From Consuming",
    body: "You support decriminalizing drug use so that personal consumption choices are not met with criminal prosecution, and you support government regulation of social media to prevent the spread of misinformation. Drug decriminalization holds that what individuals choose to put in their bodies is a personal decision the state should not criminalize, even when that choice carries risk. Social media regulation holds that some information is harmful enough that the state may restrict its distribution. Both involve government authority over what individuals consume. Drugs are consumed; information is consumed. The libertarian case against drug prohibition (the state has no legitimate authority over personal consumption choices) is structurally identical to the libertarian case against misinformation regulation (the state has no legitimate authority to define what information adults may access). You have applied one principle to physical substances and a different one to information, without identifying what principle distinguishes them.",
    source: null,
    conditions: [
      { q: "drug_decrim", a: "yes" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "racial_disparity_gun_enforcement",
    title: "Who Enforces Gun Laws",
    body: "You are concerned about racial disparities in drug enforcement and criminal sentencing, and you support more government restrictions on firearm purchase and ownership. Existing gun laws, including prohibitions on unlicensed carrying and on possession by people with prior felony convictions, are enforced through the same police stops, searches, and patrols that produce the enforcement disparities you are concerned about. NYPD data show that nearly 70% of people arrested for gun possession in New York City between 2014 and 2024 were Black, despite Black residents comprising roughly 20% of the city's population. A Marshall Project analysis found that in Chicago, more than 80% of those arrested for unlawful gun possession were Black. Gun law enforcement relies heavily on the same discretionary stop-and-investigate tactics documented to operate with racial disparity in drug enforcement. Additional gun restrictions create additional enforcement authority exercised through the same institutions and practices whose racial impacts concern you.",
    source: "Marshall Project, 'Under the Gun' analysis (2023); NYPD 2024 arrest data; John Jay College Research and Evaluation Center, 'Color Contrast: Racial and Ethnic Disparities in New York City Law Enforcement' (2024)",
    conditions: [
      { q: "racial_disparity_concern", a: "yes" },
      { q: "gun_control_more", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_racial_disparity",
    title: "The Unlimited Lobbying of the Carceral System",
    body: "You think legal limits on campaign spending are unconstitutional overreach, and you are concerned about racial disparities in drug enforcement and criminal sentencing. The industries with the strongest financial interest in maintaining high incarceration rates and opposing criminal justice reform are among the most active participants in campaign financing: private prison corporations, the bail bond industry, police unions, and pharmaceutical companies with commercial interests in addiction treatment. These interests spend substantially in legislative and prosecutorial elections. The racial disparities you are concerned about are produced by prosecutors, legislators, and law enforcement officials who are elected or appointed through a political process in which those interests can spend without limit. The constitutional protection you want extended to political spending applies equally to the industries with the strongest financial stake in sustaining the enforcement regime you find troubling.",
    source: "OpenSecrets.org, private prison sector lobbying data; Justice Policy Institute, 'Gaming the System: How the Political Strategies of Private Prison Companies Promote Ineffective Incarceration Policies' (2011); Citizens United v. FEC, 558 U.S. 310 (2010)",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "climate_carbon_tax",
    title: "The Mechanism You Oppose",
    body: "You support aggressive government action on climate change and you oppose a carbon tax. Economists across the political spectrum consider carbon pricing the most cost-effective mechanism for reducing emissions, because it creates a uniform incentive to reduce while allowing emitters to find the cheapest paths to compliance rather than requiring regulators to mandate specific technologies or behaviors. British Columbia implemented a revenue-neutral carbon tax in 2008; fuel use dropped 16.4% compared to the rest of Canada over the following five years, while economic output grew at pace with the country. Command-and-control regulations, the primary alternative, require regulators to select which technologies, sectors, and behaviors to mandate, which demands the kind of detailed industry knowledge that is most subject to regulatory capture by the emitters being regulated. Opposing the mechanism while supporting the goal means replacing an economy-wide price signal with industry-specific mandates and exemption negotiations that concentrated industrial lobbying is most effective at influencing.",
    source: "World Bank, 'British Columbia's Carbon Tax Shift: An Environmental and Economic Success' (2013); Murray and Rivers, 'British Columbia's Revenue-Neutral Carbon Tax,' Journal of Environmental Economics and Management (2015)",
    conditions: [
      { q: "climate_reg_increase", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "bank_bailout_corp_capture",
    title: "Who Gets Rescued",
    body: "You believe corporations have captured the agencies meant to regulate them, and you supported the government bailing out major financial institutions during the 2008 financial crisis. The financial industry is among the most extensively documented cases of regulatory capture in the modern U.S. economy. The architects of financial deregulation in the 1990s moved between Goldman Sachs, Citigroup, Treasury, and the Federal Reserve through the same revolving door you are concerned about in other regulatory contexts. When the financial system they deregulated collapsed in 2008, the Treasury Secretary administering the response was a former Goldman Sachs CEO. The primary beneficiaries of TARP and Federal Reserve emergency lending were Goldman Sachs, JPMorgan, Bank of America, and Citigroup. You are concerned about corporations capturing the regulatory process and you support the outcome in which the captured process directed hundreds of billions of dollars toward rescuing the same corporations whose political relationships had shaped the deregulation that made the rescue necessary.",
    source: "GAO, 'Troubled Asset Relief Program: Lifetime Cost' (GAO-24-107033, 2024); Simon Johnson, 'The Quiet Coup,' The Atlantic (May 2009); Paulson, 'On the Brink' (2010)",
    conditions: [
      { q: "bank_bailout", a: "yes" },
      { q: "corp_capture", a: "yes" }
    ]
  },

  {
    id: "bank_bailout_min_wage",
    title: "Government Intervention, Selectively",
    body: "You supported the government bailing out major financial institutions during the 2008 financial crisis and you oppose raising the federal minimum wage. Both involve government intervention in market outcomes. TARP and Federal Reserve emergency lending directed public resources toward financial institutions whose investment decisions had produced catastrophic losses, insulating shareholders and creditors from the market consequences of those decisions. A minimum wage increase sets a floor on what the labor market will pay the lowest-wage workers, transferring resources to people at the bottom of the income distribution by restricting the market's ability to compensate them below a set threshold. You find one government intervention in market outcomes justified and the other not. The institutions whose shareholders were protected by the 2008 intervention paid record bonuses in 2009. The workers whose wages a minimum wage increase would raise had no comparable claim on government action in the same period.",
    source: "GAO, 'Troubled Asset Relief Program: Lifetime Cost' (2024); Federal Reserve, emergency lending data (2008-2010); Bureau of Labor Statistics, low-wage worker earnings data",
    conditions: [
      { q: "bank_bailout", a: "yes" },
      { q: "min_wage", a: "no" }
    ]
  },

  {
    id: "bank_bailout_fin_reg",
    title: "Rescued and Unchanged",
    body: "You supported the government bailing out major financial institutions during the 2008 financial crisis and you oppose stricter regulation of banks and the financial industry. The 2008 crisis was precipitated by conditions that stricter regulation was designed to address: excessive leverage ratios, opaque securitization of subprime mortgages, inadequate capital buffers, and financial instruments that concentrated systemic risk in ways regulators could not see. You supported using public resources to rescue the institutions from the consequences of those conditions. The Dodd-Frank Act, the primary regulatory response, attempted to address several of the same conditions through capital requirements, stress testing, and the Volcker Rule. The five largest U.S. banks held 45% of all banking assets in 2010 and 54% by 2020, larger after the post-crisis regulation than before. You agree that the financial system required public rescue when those conditions produced collapse; you oppose the regulatory framework intended to reduce the likelihood that those conditions recur.",
    source: "Federal Reserve Bank of St. Louis, bank concentration data (2010-2020); GAO, TARP report (2024); Dodd-Frank Wall Street Reform and Consumer Protection Act (2010)",
    conditions: [
      { q: "bank_bailout", a: "yes" },
      { q: "more_fin_reg", a: "no" }
    ]
  },

  {
    id: "balanced_budget_social_security",
    title: "The Budget That Cannot Close",
    body: "You support a legally balanced federal budget and you oppose reducing Social Security or Medicare benefits. Social Security spent $1.2 trillion and Medicare spent $1.0 trillion in fiscal year 2023, together representing roughly 36% of all federal outlays. Interest on the national debt consumed another $659 billion. Together, Social Security, Medicare, Medicaid, net interest, and other mandatory spending consume more than all federal revenues at current tax rates. Defense spending and all other discretionary programs could be eliminated entirely and the budget would remain unbalanced at current revenue levels. A balanced budget without touching Social Security or Medicare requires either revenue increases of a scale that would represent the largest tax increase in American history or cuts to every other government function so severe as to eliminate most of what the federal government does. The arithmetic does not close without a choice that conflicts with one of your stated positions.",
    source: "Office of Management and Budget, Historical Tables FY2024; Congressional Budget Office, 'The Budget and Economic Outlook: 2024-2034' (2024)",
    conditions: [
      { q: "balanced_budget", a: "yes" },
      { q: "social_security_cuts", a: "no" }
    ]
  },

  {
    id: "military_social_security",
    title: "Whose Benefits Are Cut",
    body: "You support increasing military spending and you support reducing Social Security or Medicare benefits to close the federal deficit. Social Security and Medicare are insurance programs funded by dedicated payroll taxes that workers contribute throughout their working lives in exchange for guaranteed benefits in retirement and old age. Military spending funds a standing government function with no corresponding individual entitlement: no citizen is owed a share of the defense budget based on their lifetime payroll contributions. You are proposing to reduce guaranteed benefits that lower- and middle-income workers have paid for over working careers while increasing discretionary spending on an institution with no such contractual relationship with contributors. The workers who depend most heavily on Social Security in retirement, because they lack other retirement savings, are disproportionately those who spent their working lives in lower-wage jobs paying payroll taxes while accumulating little other wealth. Social Security replaces a higher percentage of pre-retirement income for lower earners by design.",
    source: "Social Security Administration, benefit calculation methodology; CBO, 'Social Security Policy Options' (2022); OMB, federal outlay data FY2023",
    conditions: [
      { q: "military_spending", a: "yes" },
      { q: "social_security_cuts", a: "yes" }
    ]
  },

  {
    id: "police_militarization_gun_control",
    title: "Enforcement Without the Equipment",
    body: "You oppose police departments acquiring military-grade weapons and vehicles, and you support more government restrictions on the purchase and ownership of firearms. Expanded firearms restrictions require expanded enforcement capacity to have effect beyond the point of initial sale. SWAT deployments, tactical warrant executions, and armed confrontations with suspects are triggered substantially by situations involving alleged illegal firearms possession. The ACLU documented that 79% of SWAT deployments in a single year were for drug searches, many of which also involved suspected firearms. Law enforcement agencies cite firearms-related scenarios as primary justifications for acquiring military equipment. You want to expand the legal categories of gun offense and reduce the enforcement infrastructure that existing and expanded gun regulations rely on. These objectives pull in opposite directions: the same specialized units and tactical equipment you want demilitarized are the ones you are asking to take on a larger enforcement mandate.",
    source: "ACLU, 'War Comes Home: The Excessive Militarization of American Policing' (2014); NDAA 1033 Program transfer data; Bureau of Justice Statistics, local police census data",
    conditions: [
      { q: "police_military_equip", a: "no" },
      { q: "gun_control_more", a: "yes" }
    ]
  },

  {
    id: "corp_capture_no_campaign_finance",
    title: "The Funding That Enables the Capture",
    body: "You believe corporations have captured the regulatory agencies meant to govern them, and you oppose limits on what corporations can spend on political campaigns. Campaign spending is a primary mechanism through which regulatory capture operates. Industries fund the campaigns of legislators who oversee the agencies that regulate those industries; those legislators then staff those agencies with industry-preferred personnel and control their appropriations. The capture you are concerned about inside agencies originates in the financing of campaigns for the legislators and executives who appoint, fund, and direct those agencies. The existing tension in this quiz covering corporations, unions, and nonprofits donating to political parties shows you are comfortable with that specific channel. But you also oppose legal limits on that spending. You oppose the only mechanism currently available for directly constraining the corporate financing that makes the regulatory capture you find troubling structurally possible.",
    source: "Drutman, 'The Business of America Is Lobbying' (2015); Stigler, 'The Theory of Economic Regulation,' Bell Journal of Economics (1971); Citizens United v. FEC, 558 U.S. 310 (2010)",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "corp_taxes_campaign_donations",
    title: "Taxing Through the Lobby",
    body: "You support higher corporate taxes and you think corporations should be allowed to spend unlimited amounts on political campaigns. Corporate tax rates are set by Congress through the same legislative process that corporate political spending is designed to influence. The gap between the statutory corporate tax rate and the effective rate paid by large companies is almost entirely the product of lobbying: deductions, credits, carried interest treatment, and offshore arrangements were all written into the tax code through sustained corporate advocacy. Richter, Samphantharak, and Timmons documented in the American Journal of Political Science (2009) that companies spending the most on lobbying paid the lowest effective tax rates. You want to raise taxes through the process that corporate political spending is most reliably used to lower what companies actually pay.",
    source: "Richter, Samphantharak, Timmons, 'Lobbying and Taxes,' American Journal of Political Science 53(4):893-912 (2009); CBO, effective corporate tax rate analyses",
    conditions: [
      { q: "corp_taxes", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "monopoly_break_campaign_donations",
    title: "Breaking Up What Funds Congress",
    body: "You want the government to break up large tech companies that control dominant market shares, and you support corporations being allowed to spend unlimited amounts on political campaigns. Antitrust enforcement is ultimately a political decision. The DOJ Antitrust Division and FTC are funded, staffed, and directed through a political process that Congress oversees and corporate political spending influences. Amazon, Google, Meta, and Apple collectively spent hundreds of millions lobbying Congress from 2010 through 2024. The companies you want broken up are the ones best positioned to use the unlimited political spending you support to prevent the enforcement action you want. In 2024, tech companies and their affiliated donors spent tens of millions on federal elections. The DOJ's antitrust case against Google was years in the making while Google spent more per year on lobbying than most industries spend in total. You are supporting the political spending power of the same entities you want the political process to constrain.",
    source: "OpenSecrets.org, technology sector lobbying data; DOJ v. Google LLC, 1:20-cv-03010-APM (2024); FTC v. Meta Platforms, Inc. (D.D.C., ongoing)",
    conditions: [
      { q: "monopoly_break", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "patent_term_social_media_reg",
    title: "Which Information Markets Need Government Rules",
    body: "You think pharmaceutical companies extend their drug monopolies too long through government-granted patents, and you support government regulation of social media to limit the spread of misinformation. Both involve government authority over information markets: patent law determines who may produce specific drugs; misinformation regulations determine which content may be distributed on platforms. The structural critique you implicitly apply to pharmaceutical patents, that organized interests use regulatory access to shape government rules over information in ways that serve their commercial interests rather than the public, is the same critique that applies to government content moderation frameworks. The platforms with the largest lobbying operations will have the most influence over what gets defined as regulated misinformation, just as pharmaceutical companies with the largest lobbying operations have had the most influence over patent terms and FDA approval processes. You are troubled by one set of government information-market rules being gamed by industry and comfortable inviting the government to write another set of rules subject to the same dynamic.",
    source: "FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2010); OpenSecrets.org, pharmaceutical sector lobbying data; CISA Disinformation Governance Board (2022)",
    conditions: [
      { q: "patent_term", a: "yes" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "occupational_lic_patent_term",
    title: "Which Market Restrictions Protect Consumers",
    body: "You support occupational licensing requirements for professions like cosmetology and floristry, and you think pharmaceutical companies extend their drug monopolies too long through patents. Both are government-created restrictions on who may enter a market: licensing determines who may sell their labor in a field; patents determine who may produce a product. The defense of occupational licensing is that government-imposed market entry barriers protect consumers from unqualified providers. The critique of extended pharmaceutical patents is that government-imposed market entry barriers allow monopoly pricing that harms consumers. These arguments rest on opposite assumptions about what government restriction of market entry does. If restricting market entry protects consumers in cosmetology, why does it harm them in pharmaceuticals? And if extended pharmaceutical monopolies harm consumers by maintaining high prices, why do occupational licensing requirements not harm them the same way in licensed trades? The principle you invoke to justify licensing is the principle that, applied consistently, would justify the patent extensions you oppose.",
    source: "Institute for Justice, 'License to Work' (3rd ed., 2022); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2010); U.S. Government Accountability Office, 'Occupational Licensing' (2022)",
    conditions: [
      { q: "occupational_lic", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "min_wage_no_campaign_finance",
    title: "The Floor Kept Low by Political Spending",
    body: "You support raising the federal minimum wage and you oppose limits on how much corporations can spend on political campaigns. The federal minimum wage has not been raised since 2009, the longest period without an increase since it was established in 1938. The industries most affected by minimum wage increases, retail, food service, and hospitality, are among the most consistent political spenders against wage legislation. The National Restaurant Association has spent tens of millions lobbying against minimum wage increases and is among the largest political donors in those sectors. Research by the Economic Policy Institute found that the states with the weakest campaign finance laws have the largest gap between state and federally mandated wage floors. You want a higher wage floor and you oppose the only regulatory framework that could limit the industry spending most reliably used to keep it where it is.",
    source: "Economic Policy Institute, 'The Dirty Dozen Anti-Worker State Legislatures' (2023); OpenSecrets.org, restaurant industry lobbying data; FLSA minimum wage history, DOL",
    conditions: [
      { q: "min_wage", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "drug_prices_no_campaign_finance",
    title: "Funding the Opposition to Affordable Drugs",
    body: "You think prescription drug prices in the United States are unreasonably high, and you oppose limits on how much corporations can spend on political campaigns. The pharmaceutical industry has consistently ranked as the largest single-sector lobbying spender in the United States, spending over $4.7 billion lobbying Congress from 1999 to 2018. Drug manufacturers and their trade groups spent more than $350 million lobbying against the Inflation Reduction Act's drug price negotiation provisions in 2021 and 2022 alone, before a narrower version passed. The Veterans Affairs Administration was legally prohibited from negotiating drug prices for over two decades, a restriction maintained by sustained pharmaceutical industry political spending. You find drug prices unreasonably high and you support the unlimited political spending power of the industry that has most effectively used that power to prevent the legislation that would reduce them.",
    source: "STAT News, pharmaceutical lobbying data (1999-2018); OpenSecrets.org, pharma sector lobbying; Sanger-Katz, 'Why Does the V.A. Pay Too Much for Drugs?,' New York Times",
    conditions: [
      { q: "drug_prices_high", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "climate_reg_no_campaign_finance",
    title: "The Spending That Blocks Climate Action",
    body: "You support aggressive government action on climate change and you oppose limits on how much corporations can spend on political campaigns. Fossil fuel companies and their affiliated industries are among the largest sources of political spending in the United States. ExxonMobil, Chevron, Koch Industries, and their trade groups have spent hundreds of millions funding campaigns for legislators who oppose climate regulation, funding think tanks that dispute climate science, and lobbying against emissions standards, carbon taxes, and international agreements. Between 2000 and 2016, fossil fuel interests spent an estimated $2 billion on federal elections, and their lobbying expenditures run to hundreds of millions more per cycle. You support using the political process to address climate change and you support the unlimited spending power of the industries with the most direct financial interest in using that same political process to prevent it.",
    source: "InfluenceMap, 'Big Oil's Real Agenda on Climate Change' (2019); OpenSecrets.org, oil and gas sector lobbying data; Dryzek et al., 'Climate Change and Society' (2013)",
    conditions: [
      { q: "climate_reg_increase", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "single_payer_no_campaign_finance",
    title: "The Industry That Has Blocked Single Payer",
    body: "You support a government-run, single-payer healthcare system and you oppose limits on how much corporations can spend on political campaigns. The healthcare industry, comprising pharmaceutical manufacturers, hospital systems, health insurers, and medical device companies, is the largest lobbying sector in the United States, consistently outspending every other industry. The health insurance and pharmaceutical industries spent over $1.5 billion lobbying Congress in the two years surrounding the Affordable Care Act debate alone, 2009 to 2010. Single-payer proposals have been introduced and defeated repeatedly in Congress, often without reaching committee votes, in an environment where healthcare industry political contributions to committee members are well documented. The industry whose elimination is the point of single-payer is the industry whose unlimited political spending you support. That spending is how the policy you want has been consistently kept off the table.",
    source: "OpenSecrets.org, healthcare sector lobbying data; Himmelstein and Woolhandler, 'The Political Determinants of Health: How Lobbying Shapes Health Policy,' Health Affairs (2016); Center for Public Integrity, ACA lobbying analysis",
    conditions: [
      { q: "single_payer", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "lobby_ban_no_campaign_finance",
    title: "One Channel Open, One Closed",
    body: "You support banning former government officials from becoming lobbyists for at least five years after leaving office, and you oppose legal limits on how much corporations can spend on political campaigns. Lobbying and campaign contributions are two channels of the same corporate political access-seeking activity. The revolving door you want to slow and direct lobbying contact represent one channel; campaign contributions and the cultivation of relationships with future legislators represent the other. Companies and industries facing restrictions on one channel redirect their access-seeking into the other. A ban on post-government lobbying without restricting financial access does not reduce corporate influence over government decisions; it shifts influence toward the channel you are leaving open. The access that congressional staffers and agency officials represent when they leave government is still valuable to industry, and industry will pay for it through the political spending channel you are protecting.",
    source: "Drutman, 'The Business of America Is Lobbying' (2015); Center for Responsive Politics, 'Revolving Door' analysis (2021); LaPira and Thomas, 'Revolving Door Lobbyists and Interest Representation,' Interest Groups and Advocacy (2014)",
    conditions: [
      { q: "lobby_ban", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "green_subsidies_carbon_tax",
    title: "Picking Winners Instead of Setting Prices",
    body: "You support government subsidies for renewable energy and you oppose a carbon tax that makes companies pay for their carbon emissions. Carbon pricing and subsidies both aim to accelerate the energy transition, but through opposite market mechanisms. A carbon tax sets a uniform price on emissions and lets the market find the cheapest paths to reduce them, whether solar, wind, nuclear, efficiency, or behavioral change. Subsidies require the government to select specific technologies and companies to receive public resources. Economists across the political spectrum consider carbon pricing the most cost-effective climate tool precisely because it avoids these selection decisions. British Columbia's 2008 carbon tax reduced fuel use 16% relative to the rest of Canada while economic output grew at pace with the country. Subsidy programs, by contrast, require the kind of detailed industry knowledge that is most subject to regulatory capture. You have chosen the mechanism that gives government the most discretion to pick winners over the mechanism that would let market competition do that work.",
    source: "Murray and Rivers, 'British Columbia's Revenue-Neutral Carbon Tax,' Journal of Environmental Economics and Management (2015); Nordhaus, 'Climate Casino' (2013); IMF, 'Fiscal Policies for Paris Climate Strategies' (2019)",
    conditions: [
      { q: "green_subsidies", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "copyright_no_social_media_reg",
    title: "Government Authority Over What Information Circulates",
    body: "You think copyright law, as currently structured, does not give creators fair and appropriate protection, and you support government regulation of social media to prevent the spread of misinformation. Skepticism of copyright typically rests on the observation that government-granted control over information distribution (who may reproduce and share specific works) concentrates power in the hands of corporate rights-holders at the expense of public access to knowledge. Government regulation of misinformation involves a different form of government authority over what information may circulate: defining which content may be distributed on platforms and what penalties apply to its spread. Both give the state or its designated authorities power to determine which information the public may access. If you are skeptical of government-enforced information monopolies in one domain because of what they do to access and control, the logic runs directly against government-defined misinformation categories in the other. The entity that defines 'misinformation' is as positioned to use that authority to shape public access to information as the corporate copyright-holders you find objectionable.",
    source: "McIntyre v. Ohio Election Commission, 514 U.S. 334 (1995); Sonny Bono Copyright Term Extension Act (1998); CISA Disinformation Governance Board (2022)",
    conditions: [
      { q: "copyright_protection", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "occupational_lic_no_school_vouchers",
    title: "Market Exit for Services, Not for Schools",
    body: "You oppose occupational licensing requirements because they restrict market entry and consumer choice, and you oppose school vouchers because they divert public funding to private schools. The standard libertarian critique of occupational licensing is that government restrictions on who may enter a market reduce competition, raise prices, and deny consumers access to providers they might prefer. The standard argument for school vouchers is the same: public school monopolies restrict parental choice, reduce competitive pressure on schools to improve, and deny families access to educational providers they might prefer. You have applied market-exit logic to labor markets (workers should be able to offer services without government gatekeeping) and rejected it for education markets (families should not be able to exit the public system). The principle you use to oppose licensing requirements, that government-enforced barriers to market competition harm consumers, is the principle that most directly supports school choice. You are applying it in one direction and inverting it in the other.",
    source: "Hoxby, 'Does Competition Among Public Schools Benefit Students and Taxpayers?' American Economic Review (2000); Institute for Justice, 'License to Work' (3rd ed., 2022)",
    conditions: [
      { q: "occupational_lic", a: "no" },
      { q: "school_vouchers", a: "no" }
    ]
  },

  {
    id: "free_trade_no_immigration",
    title: "Free Movement of Goods, Not People",
    body: "You support trade agreements that lower or eliminate tariff barriers between countries, and you oppose significantly expanding work visas for foreign workers. Trade liberalization rests on comparative advantage: countries and workers specialize in what they produce most efficiently, and unrestricted exchange produces aggregate gains. The same economic logic applies to labor. If free movement of goods across borders increases efficiency and total output, free movement of workers does too. U.S. trade agreements allow a company to manufacture a product in a low-wage country and import it duty-free, but do not allow the workers who made it to come to the United States to work. You support the free movement of the output of their labor and oppose the free movement of the labor itself. The asymmetry is not an economic distinction: it is a political one about whose mobility gets protected by international agreement and whose does not. A consistent free trade position would extend the same mobility principle to labor that it extends to capital and goods.",
    source: "Borjas, 'Immigration Economics' (Harvard University Press, 2014); Hanson, 'The Economics and Policy of Illegal Immigration in the United States,' Migration Policy Institute (2009); Ricardo, 'On the Principles of Political Economy and Taxation' (1817)",
    conditions: [
      { q: "free_trade", a: "yes" },
      { q: "immigration_labor", a: "no" }
    ]
  },

  {
    id: "climate_reg_gun_control_no",
    title: "Regulating Harms at Different Scales",
    body: "You support aggressive government regulation to combat climate change and you oppose more government restrictions on firearm purchase and ownership. Both positions involve the government restricting behavior because of harms to others. Climate regulation restricts what companies and individuals may emit into a shared atmosphere because those emissions harm people who had no say in the decision. Gun restrictions restrict what individuals may purchase and own because those purchases create risk of harm to people in proximity to the owner. The argument for climate regulation, that individual and corporate actors may impose risks on non-consenting others and the state may restrict that, is the same structure as the argument for gun restrictions. The argument against gun restrictions, that individual rights to own property should not be abridged because of how others misuse similar property, is the same structure as the argument against climate regulation. You have resolved the harm-to-others question one way for emissions and the other way for firearms without identifying a principle that distinguishes the two.",
    source: "D.C. v. Heller, 554 U.S. 570 (2008); IPCC Special Report on Global Warming of 1.5C (2018); Sunstein, 'The Cost-Benefit State' (2002)",
    conditions: [
      { q: "climate_reg_increase", a: "yes" },
      { q: "gun_control_more", a: "no" }
    ]
  },

  {
    id: "social_security_bank_bailout",
    title: "Whose Commitments Government Should Honor",
    body: "You think the government was right to bail out major financial institutions during the 2008 financial crisis, and you support reducing Social Security or Medicare benefits to reduce the federal deficit. TARP and Federal Reserve emergency lending provided hundreds of billions to institutions that had made catastrophic investment decisions. The argument for the bailout was that the consequences of failure were too severe to be borne by the broader economy; shareholders and creditors were insulated from the market consequences of their own decisions. Social Security is a funded program: workers contribute payroll taxes throughout their working lives in exchange for a guaranteed benefit in retirement. The people who would be affected by cuts are not being rescued from the consequences of bad investment decisions; they are being denied benefits they were promised in exchange for contributions already made. You find a compelling government obligation to financial institutions that took excessive risks and no comparable obligation to retirees who paid into the system for decades.",
    source: "GAO, 'Troubled Asset Relief Program: Lifetime Cost' (GAO-24-107033, 2024); Social Security Administration, program description; Simon Johnson, 'The Quiet Coup,' The Atlantic (May 2009)",
    conditions: [
      { q: "bank_bailout", a: "yes" },
      { q: "social_security_cuts", a: "yes" }
    ]
  },

  {
    id: "corp_capture_gun_control_no",
    title: "The Agency the Gun Industry Controls",
    body: "You believe corporations are too influential in writing the regulations meant to govern them, and you oppose more government restrictions on firearms. The Bureau of Alcohol, Tobacco, Firearms and Explosives is the federal agency with primary authority over the gun industry, and it is a documented case of the regulatory dynamic you are concerned about. The National Shooting Sports Foundation, the gun industry's primary trade association, spends more on lobbying than the NRA. A 2003 law passed with NRA support blocked public access to a federal database tracing guns used in crimes back to their dealers. The ATF has operated with roughly 2,500 agents for nearly four decades, inspecting only a fraction of the country's 60,000 licensed gun dealers (ProPublica, 2023). Former ATF directors and senior officials have moved to law firms advising gun manufacturers and to industry consulting firms; the Giffords Law Center documented this revolving door in 2020. The deregulatory status quo you prefer for firearms has been produced by exactly the regulatory capture mechanism you find troubling in other industries.",
    source: "Giffords Law Center, 'ATF: Captured by the Gun Lobby' (2020); The Trace, 'Why the ATF Struggles to Actually Regulate the Gun Industry' (Nov. 2023); ProPublica, 'Faced with Powerful Gun Lobby, Headless Regulatory Agency Keeps Gun Tracing Quiet'",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "gun_control_more", a: "no" }
    ]
  },

  {
    id: "trade_tariffs_patent_term",
    title: "Government Market Protection, Inconsistently Applied",
    body: "You support tariffs to protect American industries from foreign competition, and you believe pharmaceutical companies extend their drug monopolies too long through patents. Both tariffs and pharmaceutical patents are forms of government-granted market protection that impose costs on buyers. A tariff raises the price of foreign goods through legal restriction on market competition. A pharmaceutical patent grants an exclusive production monopoly through legal restriction on market competition. In both cases, the government gives one set of producers the ability to charge above-market prices, and consumers pay the difference. Trade negotiations and pharmaceutical IP policy are not separate domains: the Trans-Pacific Partnership, negotiated before the U.S. withdrew in 2017, included IP provisions that would have extended drug exclusivity periods internationally, provisions the pharmaceutical industry helped draft by serving on official U.S. trade advisory committees (PLOS Medicine, 2015). The argument you apply to pharmaceutical patents, that government-granted monopoly causes buyers to pay more than a competitive market would require, applies with equal force to tariffs. You have accepted one form of government market protection and rejected the other without a principle that distinguishes them.",
    source: "Gleeson et al., 'Trans-Pacific Partnership Provisions in Intellectual Property,' PLOS Medicine (2015); TRIPS Agreement, WTO (1994); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013)",
    conditions: [
      { q: "trade_tariffs", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "drug_war_no_balanced_budget_no",
    title: "A Trillion-Dollar Failure and No External Check",
    body: "You believe the War on Drugs has been ineffective at reducing drug use and related harm, and you oppose a constitutional requirement for the federal government to balance its budget. The federal government has spent an estimated $1 trillion on drug enforcement since Nixon declared the war on drugs in 1971 (CNBC, 2021). Drug overdose deaths have continued to rise throughout, reaching a peak of 107,941 in 2022. The war on drugs is your evidence that government programs can persist for five decades while failing their stated goals, sustained by law enforcement budgets, prosecutorial incentives, mandatory sentencing laws, and the institutional interests of agencies whose funding depends on the program's continuation. A balanced budget requirement is a mechanism that imposes binding pressure on legislators to weigh spending against demonstrated results. If you believe the drug war demonstrates that programs accumulate institutional inertia and continue indefinitely without producing their intended outcomes, the case for external fiscal constraints that force such measurement is stronger, not weaker. The argument against a balanced budget amendment and the observation that programs persist despite failure point in opposite directions.",
    source: "CNBC, 'America has spent over a trillion dollars fighting the war on drugs. 50 years later, drug use in the U.S. is climbing again.' (June 17, 2021); CDC, drug overdose surveillance data; Center for American Progress, 'Ending the War on Drugs: By the Numbers'",
    conditions: [
      { q: "drug_war_effective", a: "no" },
      { q: "balanced_budget", a: "no" }
    ]
  },

  {
    id: "monopoly_break_gun_control_no",
    title: "Which Concentrated Power Needs Checking",
    body: "You support government antitrust enforcement to break up large technology companies with dominant market shares, and you oppose more government restrictions on the purchase and ownership of firearms. Antitrust enforcement is a substantial exercise of government authority over private actors: federal courts can order companies to divest business units, restructure corporate relationships, and change how they may operate in markets. The DOJ's antitrust case against Google, filed in 2020, sought to force the company to sell products and alter contractual arrangements governing search distribution. Background checks, waiting periods, and purchase restrictions are significantly more limited government authority: they regulate conditions on individual transactions, not the structure of private enterprises. You support the larger authority and are skeptical of the narrower one. You may distinguish them on the grounds that corporations lack the constitutional standing of natural persons and that the Second Amendment specifically protects individual gun rights in a way no provision protects corporate structure. But if your concern is concentrated power, note that the companies you want broken up hold concentrated market, informational, and political power, and the firearms you want left largely unregulated represent concentrated physical power. You have decided which concentration the government should check.",
    source: "United States v. Google LLC, 1:20-cv-03010-APM (D.D.C. 2024); D.C. v. Heller, 554 U.S. 570 (2008); Sherman Antitrust Act (1890)",
    conditions: [
      { q: "monopoly_break", a: "yes" },
      { q: "gun_control_more", a: "no" }
    ]
  },

  {
    id: "patent_term_school_vouchers",
    title: "Government Exclusivity in Drug Markets and Education Markets",
    body: "You believe pharmaceutical companies extend their drug monopolies too long through government-granted patents, and you oppose school vouchers that would allow public funding to follow students to private schools. In pharmaceutical markets, government-granted exclusivity lets patent holders charge above-market prices by preventing competitors from entering: you find this harmful. In education, government funding flows exclusively to public schools; vouchers would allow that funding to follow families to private alternatives, introducing competitive pressure on district schools. In both cases, government determines which providers have access to a publicly subsidized market. In pharmaceuticals, you want shorter exclusivity so that competing generics can enter and prices fall; in education, you want to preserve exclusive public funding so that competing private providers cannot access public resources. You are applying different standards to government-granted market exclusivity depending on which institution is the beneficiary.",
    source: "Sonny Bono Copyright Term Extension Act (1998); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); Zelman v. Simmons-Harris, 536 U.S. 639 (2002)",
    conditions: [
      { q: "patent_term", a: "yes" },
      { q: "school_vouchers", a: "no" }
    ]
  },

  {
    id: "corp_capture_no_patent_term",
    title: "Regulatory Outcomes Without Regulatory Capture",
    body: "You don't believe corporations are too influential in writing the regulations meant to govern them, and you believe pharmaceutical companies extend their drug monopolies too long through patents and regulatory strategies. If corporations are not too influential in the regulatory process, the patent extension practices you object to have no clear explanation. Pay-for-delay settlements, in which brand-name pharmaceutical companies paid generic manufacturers not to compete, cost American consumers an estimated $3.5 billion per year, according to the FTC. Companies routinely file additional patents on minor formulations, dosing changes, and delivery mechanisms after a drug's original patent expires, extending exclusivity through FDA regulatory pathways. Pharmaceutical companies spent $4.7 billion lobbying Congress from 1998 to 2021, more than any other sector. The regulatory outcomes you find objectionable, extended exclusivity periods, suppressed generic competition, inflated prices, did not emerge from a regulatory process free of corporate influence. They are the predictable output of an industry that has invested more in government influence than any other sector in American political history.",
    source: "FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); OpenSecrets.org / National Nurses United, 'A Profitable Stranglehold: Pharma Investment in Lobbying and Politics' (2022); FTC v. Actavis, Inc., 570 U.S. 136 (2013)",
    conditions: [
      { q: "corp_capture", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_patent_term",
    title: "The Political Spending That Kept Generic Drugs Off the Market",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you believe pharmaceutical companies extend their drug monopolies too long through patents and regulatory strategies. Pharmaceutical companies spent $4.7 billion lobbying Congress from 1998 to 2021, consistently ranking as the largest lobbying sector in the United States. Pay-for-delay settlements, in which brand-name companies paid generic competitors not to enter the market, cost American consumers an estimated $3.5 billion per year. The FTC sought congressional authority for years to restrict these settlements; that authority was not granted. Pharmaceutical political spending was the documented mechanism by which the industry maintained the regulatory framework that allows the drug monopoly practices you object to. The patent extension strategies, the pay-for-delay settlements, the regulatory gaming through evergreening, all of these persisted through sustained pharmaceutical political investment in the process you support permitting corporations to shape without limit. You find the outcomes objectionable and you support the political spending power of the industry that produced them.",
    source: "OpenSecrets.org, pharmaceutical sector lobbying data; National Nurses United, 'A Profitable Stranglehold' (2022); FTC press release, 'Pay-for-Delay Settlements in the Pharmaceutical Industry' (June 23, 2009)",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "lobby_ban_gun_control_no",
    title: "The Revolving Door That Shaped Gun Regulation",
    body: "You support banning former government officials from becoming lobbyists for at least five years after leaving office, and you oppose more government restrictions on the purchase and ownership of firearms. The Bureau of Alcohol, Tobacco, Firearms and Explosives has an extensively documented revolving door with the firearms industry. Former ATF directors have moved to law firms advising gun manufacturers; senior officials have become industry consultants and expert witnesses for firearms companies; the Giffords Law Center documented the pattern in 2020. Congress has constrained the ATF's enforcement authority through appropriations riders over several decades: a 2003 law blocked public access to the crime gun tracing database; the ATF has operated with roughly the same 2,500 agents for nearly four decades while licensed gun dealers have grown to 60,000. These constraints on the ATF were written into law through exactly the revolving door dynamic you say you want to close. If you banned that revolving door, former ATF officials would have less ability to convert government relationships into industry advocacy, and the specific legislative restrictions that have limited gun enforcement might face different political dynamics. You are supporting the mechanism that would close the channel through which the current gun regulatory environment was largely shaped.",
    source: "Giffords Law Center, 'ATF: Captured by the Gun Lobby' (2020); The Trace, 'Why the ATF Struggles to Actually Regulate the Gun Industry' (Nov. 2023); ProPublica, 'Faced with Powerful Gun Lobby, Headless Regulatory Agency Keeps Gun Tracing Quiet'",
    conditions: [
      { q: "lobby_ban", a: "yes" },
      { q: "gun_control_more", a: "no" }
    ]
  },

  {
    id: "occupational_lic_no_social_media_reg",
    title: "Government Gatekeeping of Services, Not of Speech",
    body: "You oppose government occupational licensing requirements, and you support government regulation of social media platforms to limit the spread of misinformation. Both positions involve the government deciding what may be offered to the public. Occupational licensing requires workers in certain fields to obtain government permission before offering services to consumers; you believe this restricts market entry, raises prices, and limits individual freedom to work. Government regulation of what social media platforms may allow users to post requires platforms to obtain or maintain permission to distribute certain categories of content; the same logic applies. The standard argument against occupational licensing, that government-enforced barriers to market entry harm the people they ostensibly protect, applies with equal force to government content regulation, which creates barriers to information entry. The primary difference is what is being offered: professional services in one case, speech in the other. Speech is subject to greater constitutional protection than the right to practice cosmetology or arrange flowers, which is an argument for less content regulation, not more. You have accepted government gatekeeping in the domain with stronger constitutional protection and rejected it in the domain with weaker constitutional protection.",
    source: "Institute for Justice, 'License to Work' (3rd ed., 2022); Moody v. NetChoice, LLC, 603 U.S. 707 (2024); CISA Disinformation Governance Board (2022)",
    conditions: [
      { q: "occupational_lic", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "lobby_ban_no_patent_term",
    title: "The Revolving Door That Shapes Drug Approvals",
    body: "You don't support banning former government officials from becoming lobbyists, and you believe pharmaceutical companies extend their drug monopolies too long through patents and regulatory strategies. The FDA is the agency most directly responsible for pharmaceutical patent extension opportunities. Senior FDA officials who approve new drug applications, new formulations, and extended-release variants routinely move to pharmaceutical companies, patent law firms, and industry lobbying organizations. Former FDA commissioners have taken positions at pharmaceutical trade associations and at companies whose products they reviewed during their tenure. The pay-for-delay settlements that the FTC estimates cost American consumers $3.5 billion per year required pharmaceutical companies to negotiate agreements with generic competitors; those agreements were not restricted under existing law in part because the industry has maintained lobbying access to the legislative process through exactly the revolving door you are comfortable permitting. You find the regulatory outcomes objectionable but oppose the reform most consistently identified as producing them.",
    source: "FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); Revolving Door Project, 'The Industry Agenda: Big Pharma'; OpenSecrets.org, pharmaceutical sector revolving door data",
    conditions: [
      { q: "lobby_ban", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_limit_housing",
    title: "The Spending That Keeps Housing Scarce",
    body: "You oppose stricter legal limits on campaign contributions, and you believe the shortage of affordable housing is a serious problem in American cities. The primary political obstacle to housing supply in the United States is not a shortage of reform proposals; researchers have documented the mechanisms for decades. It is a shortage of political will to override the objections of existing homeowners who benefit financially from housing scarcity. Property interests are among the largest political donors in the country: the National Association of Realtors spent $86 million on federal lobbying in 2024, more than any other single organization (OpenSecrets). At the state and local level, developer contributions, homeowner association political funds, and real estate industry money sustain the elected officials and local coalitions that block upzoning, density, and permitting reform. The housing shortage you identify as a serious problem has been sustained in part through the kind of unlimited political spending you oppose restricting.",
    source: "Real Estate News, 'NAR spent more on lobbying than any other group in 2024' (Feb. 2025); OpenSecrets.org, real estate sector lobbying data; McKinsey Global Institute, 'A Tool Kit to Close California's Housing Gap' (2016)",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "housing_affordability", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corp_data",
    title: "The Industry That Killed the Privacy Bill",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you're concerned about how much personal data corporations collect, store, and sell about individuals without meaningful consent. The United States has no comprehensive federal data privacy law; the American Data Privacy and Protection Act (ADPPA) passed the House Energy and Commerce Committee in 2022 but stalled before a floor vote. Data brokers and their proxies spent an estimated $143 million lobbying against federal privacy legislation between 2019 and 2023, with $56 million spent in 2022 alone, the year the bill advanced furthest (EPIC, 2023). Tech companies, data aggregators, and advertising platforms that profit from the data ecosystem you find concerning collectively represent one of the largest categories of political contributors. The comprehensive federal data privacy protection you may want does not exist because the industries whose business model depends on its absence have used the political spending channel you support to prevent it.",
    source: "EPIC, 'Data Brokers Spent $143 Million Lobbying Against Privacy Legislation' (2023); Incogni, 'Data Brokers and Lobbying' (2023); OpenSecrets.org, technology sector lobbying data",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "corp_data_concern", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_ranked_choice",
    title: "Electoral Reform Without Financial Reform",
    body: "You oppose stricter limits on political campaign contributions, and you support ranked-choice voting for federal elections. Ranked-choice voting is frequently advocated as a mechanism to reduce the two-party duopoly by allowing third-party and independent candidates to compete without the spoiler effect. The argument rests on the claim that voters would choose different candidates if they were not forced to vote strategically between two parties. The two major parties maintain their dominance partly through access to funding from large donors: incumbents in the major parties have established fundraising networks that third-party candidates cannot match. Campaign contributions are one of the primary ways the major-party duopoly is financially sustained. RCV changes how votes are counted; it does not change how candidates are funded. You support the ballot mechanism that would make third-party competition more viable and oppose the financial mechanism that would reduce the incumbent fundraising advantage that makes third-party competition difficult in practice.",
    source: "Malbin and Gais, 'The Day After Reform: Sobering Campaign Finance Lessons from the American States' (1998); FairVote, ranked-choice voting research; OpenSecrets.org, campaign finance data",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "ranked_choice", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_racial_disparity",
    title: "The Industry Spending Against Criminal Justice Reform",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you're concerned about racial disparities in policing and criminal sentencing. Private prison companies and bail bond firms are documented political spenders with a direct financial stake in maintaining high incarceration rates. CoreCivic and GEO Group spent roughly $10 million lobbying against sentencing reform, drug decriminalization, and immigration reform between 2011 and 2020 (Justice Policy Institute). The bail bond industry has spent tens of millions lobbying against cash bail reform at the state level, funding ballot measures to overturn legislative reform in California and New Jersey. Black and Latino defendants are disproportionately represented in pretrial detention because they are less likely to afford cash bail. Drug mandatory minimums, which fall most heavily on Black defendants, were sustained for decades through the political process that private prison industry spending helps to influence. You are concerned about the racial outcomes of criminal justice policy and you support the unlimited political spending power of the industries with the most direct financial interest in maintaining those outcomes.",
    source: "Justice Policy Institute, 'Gaming the System: How the Political Strategies of Private Prison Companies Promote Ineffective Incarceration Policies' (2011); OpenSecrets.org, private prison sector lobbying data; Prison Policy Initiative, bail industry lobbying analysis",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "racial_disparity_concern", a: "yes" }
    ]
  },

  {
    id: "corp_capture_carbon_tax_no",
    title: "The Climate Mechanism Least Susceptible to Capture",
    body: "You believe corporations are too influential in writing the regulations meant to govern them, and you oppose a carbon tax. A carbon tax is notable among climate policy tools precisely because it minimizes ongoing regulatory agency discretion: a legislature sets the price on carbon emissions, and it is applied uniformly to all covered activities. The alternatives to carbon pricing require agencies to decide which technologies industries must adopt, at what levels, with what exemption schedules, under what enforcement timelines. Each of those ongoing decisions is a lobbying target. Sector-specific emissions standards, renewable portfolio mandates, and fuel economy requirements all require the kind of detailed, technology-specific rulemaking that corporate lobbying is most effective at shaping. The mechanism you oppose reduces the scope for the regulatory capture you are concerned about. By opposing it, you are by default supporting the regulatory alternatives that require more agency discretion, create more lobbying targets, and are more accessible to the energy industry influence you should be most wary of.",
    source: "Nordhaus, 'Climate Casino' (2013); IMF, 'Fiscal Policies for Paris Climate Strategies' (2019); Rabe, 'Can We Price Carbon?' (MIT Press, 2018)",
    conditions: [
      { q: "corp_capture", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "more_fin_reg_no_social_media_reg",
    title: "Which Industries Government Can Regulate",
    body: "You oppose more government regulation of the financial industry, and you support government regulation of social media platforms to limit the spread of misinformation. The arguments most consistently deployed against financial regulation apply with equal force to social media content regulation. You may oppose financial regulation because: regulatory agencies get captured by the banks they supervise; government intervention creates market distortions with unintended consequences; regulators lack the technical expertise to oversee complex modern finance; rules written by lobbyist-influenced legislators will favor incumbents over new entrants. Each of these concerns applies to government regulation of social media content: the agency writing content standards will be lobbied by incumbent platforms; interventions may create unintended speech-chilling effects; government regulators lack expertise in algorithmic content systems; regulations written through the political process may favor large platforms that can absorb compliance costs over smaller competitors. The structural critique of financial regulation you accept is not specific to finance. You have decided it applies to one complex industry and not the other.",
    source: "Stigler, 'The Theory of Economic Regulation,' Bell Journal of Economics (1971); Zittrain, 'The Future of the Internet and How to Stop It' (2008); Moody v. NetChoice, LLC, 603 U.S. 707 (2024)",
    conditions: [
      { q: "more_fin_reg", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "green_subsidies_campaign_finance_no",
    title: "Who Captures the Green Subsidy",
    body: "You support government subsidies for renewable energy and you oppose stricter legal limits on campaign contributions. Government subsidy allocation requires Congress and agencies to determine which technologies and companies receive public funds, at what rates, for how long. These decisions are lobbying targets. The Inflation Reduction Act (2022) allocated roughly $369 billion in clean energy subsidies; the companies with the largest lobbying operations were among the best-positioned to shape credit structure, eligibility rules, and domestic content requirements. The oil and gas industry spent more than $124 million lobbying Congress in 2022 alone (OpenSecrets). Fossil fuel companies have successfully maintained favorable tax treatment alongside increased renewable subsidies, rather than having one displace the other, through sustained political spending. The process that allocates the clean energy money you want to be large and well-directed is shaped by the same political spending you oppose restricting. The subsidy winners are not determined purely by technological merit.",
    source: "OpenSecrets.org, oil and gas sector lobbying data; Inflation Reduction Act (2022); Subsidy Tracker, Good Jobs First",
    conditions: [
      { q: "green_subsidies", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "pro_union_campaign_finance_no",
    title: "Whose Political Spending the Rules Favor",
    body: "You support workers' right to form unions and engage in collective bargaining, and you oppose stricter limits on political campaign contributions. The legislative environment for labor is determined through the political process, and the political spending framework matters for who shapes that process. After Citizens United, corporations gained the ability to spend general treasury funds on independent political expenditures without shareholder consent. Unions remain subject to disclosure requirements for political spending and face restrictions on using general treasury funds if individual members object, known as Beck rights. These asymmetries mean corporate institutional political spending capacity substantially exceeds union political spending capacity. Right-to-work laws, which forbid union security agreements and have reduced union membership in more than half of states, were advanced through legislative campaigns funded in part by corporate political spending. You support the legal structure under which workers can organize collectively to bargain for wages, and you support the unlimited political spending environment that has consistently been used to constrain that legal structure.",
    source: "Harvard Law Review, 'Citizens United at Work' (2015); Demos, 'Do Corporations and Unions Face the Same Rules for Political Spending?' (2012); Communications Workers of America v. Beck, 487 U.S. 735 (1988)",
    conditions: [
      { q: "pro_union", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "min_wage_carbon_tax_no",
    title: "Government Price Floors in Labor Markets and Carbon Markets",
    body: "You support raising the federal minimum wage, and you oppose a carbon tax on carbon emissions. Both are government-imposed minimum prices in markets where the market price is deemed to produce socially harmful outcomes. A minimum wage sets a legal floor on the price of labor because market wages are considered too low, whether due to low-wage worker bargaining power, monopsony conditions, or broader distributional concerns. A carbon tax sets a minimum cost on emitting carbon because the market price of carbon is zero, meaning the damage caused by emissions to third parties (future people affected by climate change) is not priced into production and consumption decisions. In both cases, the government is deciding that the market price is producing an outcome it considers socially unacceptable and imposing a price floor to correct it. The structural logic is identical: market prices are wrong in a socially important direction, so a government minimum price is justified. You have accepted this argument in labor markets and rejected it in carbon markets without identifying a principle that makes one market failure worth correcting and the other not.",
    source: "Card and Krueger, 'Minimum Wages and Employment,' American Economic Review (1994); Nordhaus, 'Revisiting the Social Cost of Carbon,' PNAS (2017); Pigou, 'The Economics of Welfare' (1920)",
    conditions: [
      { q: "min_wage", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "lobby_ban_carbon_tax_no",
    title: "The Revolving Door in Energy Policy",
    body: "You support banning former government officials from becoming lobbyists for at least five years after leaving office, and you oppose a carbon tax. The fossil fuel industry is among the most documented cases of the revolving door dynamic you want to address. Former EPA administrators, energy committee staffers, and Interior Department officials have moved to positions at oil and gas companies, fossil fuel trade associations, and lobbying firms representing the energy industry. Carbon pricing proposals have been introduced in Congress repeatedly since the 1990s without passage. Economists and policy researchers identify fossil fuel industry political influence, sustained partly through the revolving door, as a primary reason why the United States has not adopted carbon pricing while peer nations have. If closing the revolving door would reduce fossil fuel industry access to energy policy decisions, one likely consequence would be making carbon pricing more politically viable. You want to shut the channel that has been most effective at keeping the policy you oppose off the legislative agenda.",
    source: "Rabe, 'Can We Price Carbon?' (MIT Press, 2018); OpenSecrets.org, oil and gas sector revolving door data; Meng, 'Allocating Coal Country' (Harvard Environmental Law Review, 2018)",
    conditions: [
      { q: "lobby_ban", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "free_college_no_school_vouchers_no",
    title: "Public Education Subsidies in Two Directions",
    body: "You oppose the federal government paying for college tuition, and you oppose school vouchers that would allow public funding to follow low-income students to private schools. Both are government education subsidies; you have applied different standards to each. Opposition to free college commonly rests on fiscal cost, concerns about inflationary effects on tuition, or the principle that government should not subsidize individual consumption decisions. Opposition to school vouchers commonly rests on concerns about diverting funds from public schools, constitutional issues around religious schools, or the principle that public money should stay in public institutions. These rationales are not easily combined: if you oppose free college because government shouldn't subsidize individual educational choices, then school vouchers, which also give individuals public money to make educational choices, should be acceptable. If you oppose vouchers because public money should stay in public institutions, then free college, which subsidizes public institutions, should be acceptable. You have reached 'no' on both questions, but the reasons for opposing one tend to support the other.",
    source: "Dynarski, 'Free College and the College Completion Problem,' Brookings (2018); Zelman v. Simmons-Harris, 536 U.S. 639 (2002); Federal Reserve Bank of New York, 'Credit Supply and the Rise in College Tuition' (2015)",
    conditions: [
      { q: "free_college", a: "no" },
      { q: "school_vouchers", a: "no" }
    ]
  },

  {
    id: "corp_taxes_carbon_tax_no",
    title: "Which Corporate Underpayments Government Should Correct",
    body: "You support requiring large corporations to pay higher federal income taxes, and you oppose a carbon tax on carbon emissions. A carbon tax is structured as a form of corporate tax on a specific external cost. Companies pay in proportion to their emissions; the revenue flows to government. The underlying argument for both is similar: corporations are not paying for costs they impose on others. Corporate income taxes address the gap between what corporations earn and what they contribute to the public resources they use. Carbon taxes address the gap between the private cost of emitting carbon and the social cost of the climate damage those emissions cause. You have accepted that government should require corporations to pay for one type of social underpayment and rejected the same argument for another. The distinction may be that you believe corporate income taxes fall on shareholders while carbon taxes are passed to consumers, but corporate income tax incidence also falls partly on workers and consumers through lower wages and higher prices, a parallel that economists have long debated.",
    source: "Nordhaus, 'Revisiting the Social Cost of Carbon,' PNAS (2017); Gravelle, 'Corporate Tax Incidence,' Congressional Research Service (2011); Pigou, 'The Economics of Welfare' (1920)",
    conditions: [
      { q: "corp_taxes", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "green_subsidies_campaign_donations",
    title: "Subsidy Allocation as a Political Competition",
    body: "You support government subsidies for renewable energy, and you support corporations being allowed to donate to political campaigns and spend on elections. Government subsidy allocation requires political and administrative decisions about which technologies and companies receive public funds, at what levels, and under what eligibility rules. These decisions are shaped by political spending. Fossil fuel companies and clean energy companies both participate in the same political donation system you support. Fossil fuel interests spent more than $124 million lobbying Congress in 2022 alone (OpenSecrets), helping to shape the subsidy eligibility and tax credit structure of the Inflation Reduction Act alongside clean energy advocates. Both the companies you want to receive subsidies and the companies you want displaced by them are using the political donation channel you support to influence how the money gets allocated. The size, targeting, and durability of the green energy subsidies you want are determined through a political process equally accessible to the industries you want those subsidies to displace.",
    source: "OpenSecrets.org, oil and gas sector lobbying data; Inflation Reduction Act (Pub. L. 117-169, 2022); Good Jobs First, Subsidy Tracker",
    conditions: [
      { q: "green_subsidies", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_limit_donations_inconsistency",
    title: "No More Limits, But No Corporate Donations",
    body: "You oppose stricter legal limits on how much individuals and organizations can donate to political campaigns, and you also believe corporations, unions, and nonprofit organizations should not be allowed to donate or spend on political campaigns. These positions rest on incompatible foundations. Citizens United v. FEC (2010) held that spending on political speech is constitutionally protected regardless of whether the speaker is an individual or a corporation, on the grounds that political spending is a form of speech. If you oppose stricter limits on individual political spending because political speech is constitutionally protected, the same constitutional protection applies to corporate political spending under the current legal framework. If you oppose corporate donations because corporations are not persons with constitutional rights, then the principle allowing unlimited individual spending does not apply to corporations, and you are effectively endorsing a framework in which limits on corporate spending are appropriate. You hold the position that current limits are sufficient (opposing tighter ones) while simultaneously holding that current rules allow something they should not (corporate donations that you oppose). Both cannot be true at once.",
    source: "Citizens United v. FEC, 558 U.S. 310 (2010); Buckley v. Valeo, 424 U.S. 1 (1976); McConnell v. FEC, 540 U.S. 93 (2003)",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "campaign_donations_corps", a: "no" }
    ]
  },

  {
    id: "monopoly_break_carbon_tax_no",
    title: "Heavy Intervention in Tech, None in Carbon",
    body: "You support government antitrust enforcement to break up large technology companies and you oppose a carbon tax on carbon emissions. Antitrust enforcement is among the most interventionist government tools available for regulating markets: federal courts can order companies to sell off assets, restructure relationships with business partners, and alter how their products work. The DOJ's case against Google sought to force the company to divest its Chrome browser and alter how it distributes its search engine. A carbon tax is comparatively light-touch: it sets a price on carbon emissions and leaves companies free to determine whether to pay it, reduce emissions, or pass costs to consumers. You support the more aggressive intervention and oppose the less aggressive one. You may believe tech monopolies cause demonstrable harm (reduced competition, consumer data extraction) while climate change impacts are uncertain or too diffuse to justify pricing. But if the harms of market concentration in one industry justify direct structural intervention by federal courts, the documented external costs of carbon emissions, including health impacts from pollution and projected climate damages, would typically meet the same threshold by the standard frameworks used to justify either intervention.",
    source: "United States v. Google LLC, 1:20-cv-03010-APM (D.D.C. 2024); Sherman Antitrust Act (1890); Nordhaus, 'Revisiting the Social Cost of Carbon,' PNAS (2017)",
    conditions: [
      { q: "monopoly_break", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "campaign_finance_gun_yes",
    title: "The Spending That Has Blocked Gun Legislation",
    body: "You oppose stricter limits on how much individuals and organizations can spend on political campaigns, and you support more government restrictions on the purchase and ownership of firearms. Universal background check legislation has consistently polled above 80% public support for decades, including among gun owners, yet has repeatedly failed to pass Congress. After the Sandy Hook Elementary School shooting in 2012, a bipartisan background check bill died in the Senate; the NRA and National Shooting Sports Foundation had spent tens of millions on congressional campaigns and lobbied against the bill. The NSSF spends more on lobbying than the NRA in recent years. A 2003 law blocking public access to crime gun tracing data was passed under direct NRA pressure. You support the gun regulations that the firearms industry's political spending has most consistently prevented from passing, and you oppose the only regulatory framework that could limit that spending.",
    source: "The Trace, 'Why the ATF Struggles to Actually Regulate the Gun Industry' (2023); ProPublica, crime gun tracing database; Everytown for Gun Safety, NRA lobbying and campaign contributions data",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "gun_control_more", a: "yes" }
    ]
  },

  {
    id: "student_debt_carbon_tax_no",
    title: "Correcting One Market Failure, Not the Other",
    body: "You support canceling existing student loan debt, and you oppose a carbon tax on carbon emissions. Both are government responses to markets that produced outcomes one side considers unacceptable. The case for student debt cancellation typically rests on the argument that the student loan market failed borrowers: misleading marketing, incomplete information about lifetime earnings, tuition inflation driven partly by subsidized lending, and declining wages in credentialed fields combined to produce debt burdens that individuals alone should not bear. The case for a carbon tax rests on the observation that the market price of carbon is zero: emitters do not pay for the climate damage they cause others, an externality that produces more emissions than a market incorporating those costs would. In the student debt case, you support government action to correct a market outcome; in the carbon case, you do not. The market failure in carbon is better-defined than the market failure in student lending: carbon externalities are a textbook case of a negative externality with measurable social costs. You have accepted the more ambiguous market failure argument and rejected the more established one.",
    source: "Dynarski, 'An Economist's Case for Debt Relief,' New York Times (2022); Nordhaus, 'Revisiting the Social Cost of Carbon,' PNAS (2017); Federal Reserve Bank of New York, 'Credit Supply and the Rise in College Tuition' (2015)",
    conditions: [
      { q: "student_debt", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "pro_union_campaign_donations",
    title: "Whose Political Spending the Current Rules Favor",
    body: "You support workers' right to form unions and engage in collective bargaining, and you support corporations being allowed to donate to political campaigns and spend on elections. The political spending framework matters for who can shape labor policy. Under federal law, corporations may spend general treasury funds on independent political expenditures without shareholder consent. Unions, under the Beck doctrine established in Communications Workers of America v. Beck (1988), cannot use general treasury funds on political activities if individual members object; members may demand a refund of the portion of dues used for political purposes. This asymmetry means corporate political spending capacity substantially exceeds union political spending capacity on an institution-to-institution basis. Right-to-work laws, which prohibit union security agreements requiring dues payment, have passed in more than half of U.S. states; research links these laws' passage partly to states with higher corporate political spending. You support collective bargaining rights and you support the political spending structure under which the industries most opposed to collective bargaining have greater institutional political resources than the unions that represent workers' interests.",
    source: "Communications Workers of America v. Beck, 487 U.S. 735 (1988); Harvard Law Review, 'Citizens United at Work' (2015); Demos, 'Do Corporations and Unions Face the Same Rules for Political Spending?' (2012)",
    conditions: [
      { q: "pro_union", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "occupational_lic_no_immigration_no",
    title: "Market Entry for Domestic Workers, Not Foreign Ones",
    body: "You oppose government occupational licensing requirements, and you oppose expanding work visas for foreign workers. Both positions involve government determining who may compete in labor markets. You believe government should not require workers in occupations like cosmetology, interior decorating, and floristry to obtain licenses before offering services: government gatekeeping of which workers may enter those markets restricts competition, raises consumer costs, and limits workers' economic freedom. You also believe government should restrict how many foreign workers may legally enter the U.S. labor market through the visa system. In both cases, the question is whether government may decide who may compete in a labor market. You have opposed government gatekeeping for domestic workers and accepted it for foreign workers. The standard libertarian argument against occupational licensing, that government restrictions on labor market entry harm both workers (who cannot work without permission) and consumers (who have fewer providers to choose from), applies with the same force to immigration restrictions, which prevent foreign workers from entering labor markets they would otherwise compete in.",
    source: "Institute for Justice, 'License to Work' (3rd ed., 2022); Kerr and Kerr, 'Economic Impacts of Immigration,' Journal of Economic Perspectives (2011); Clemens, 'Economics and Emigration,' Journal of Economic Perspectives (2011)",
    conditions: [
      { q: "occupational_lic", a: "no" },
      { q: "immigration_labor", a: "no" }
    ]
  },

  {
    id: "free_college_carbon_tax_no",
    title: "Government Correcting One Market, Not the Other",
    body: "You support the federal government paying for college tuition and you oppose a carbon tax on carbon emissions. Both policies respond to markets that produce outcomes one side considers socially harmful. The case for free college rests partly on the observation that higher education's positive externalities (a more productive and civically engaged workforce) are not fully captured by the private returns to individuals, causing underinvestment relative to what a market that priced all benefits would produce. The case for a carbon tax rests on the observation that carbon emissions impose external costs, climate damage borne by people who did not choose to emit, that are not reflected in market prices, causing overinvestment in carbon-intensive activities. In both cases, a market price fails to account for costs or benefits that fall on third parties. You support government intervention to correct one externality and oppose it for the other, even though the theoretical case for carbon pricing is more formally established in economics than the case for free college subsidies. Economists estimate the social cost of carbon with growing precision; the externality from underinvestment in higher education is harder to quantify.",
    source: "Nordhaus, 'Revisiting the Social Cost of Carbon,' PNAS (2017); Moretti, 'Estimating the Social Return to Higher Education,' Journal of Econometrics (2004); Federal Reserve Bank of New York, 'Credit Supply and the Rise in College Tuition' (2015)",
    conditions: [
      { q: "free_college", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "campaign_finance_private_equity",
    title: "The Industry That Shaped Its Own Oversight",
    body: "You oppose stricter limits on how much individuals and organizations can spend on political campaigns, and you support banning private equity firms from purchasing and operating hospitals. A 2023 JAMA study found PE hospital acquisition was associated with a 25% increase in adverse patient events. The regulatory and legislative environment that allowed private equity to expand extensively into healthcare over the past two decades was shaped partly through political lobbying and contributions from the financial industry. The Private Equity Growth Capital Council and affiliated organizations have lobbied against legislation restricting PE ownership structures in healthcare. The Carried Interest Fairness Act, which would have subjected PE managers' earnings to ordinary income tax rates and potentially reduced the returns that make healthcare acquisition attractive to PE firms, was defeated repeatedly; private equity managers and their employees are among the largest donors to congressional campaigns. You find the patient outcomes of PE hospital ownership harmful and you oppose restricting the political spending that the financial industry uses to shape the regulatory environment in which PE operates.",
    source: "Kannan, Bruch, Song, 'Changes in Hospital Adverse Events and Patient Outcomes,' JAMA (2023); OpenSecrets.org, private equity sector lobbying data; SEC, private equity regulatory disclosures",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "private_equity_hospitals", a: "yes" }
    ]
  },

  {
    id: "student_debt_campaign_finance_no",
    title: "The Industry That Fought Borrower Protections",
    body: "You support canceling existing student loan debt and you oppose stricter limits on how much individuals and organizations can spend on political campaigns. Student loan servicers and for-profit colleges have been among the most consistent political spenders against student debt relief and stronger borrower protections. Navient (formerly Sallie Mae) and its lobbying affiliates spent millions opposing income-driven repayment regulations and public service loan forgiveness expansions. For-profit college companies contributed heavily to campaigns for legislators who weakened the gainful employment rule, a regulation requiring vocational programs to demonstrate that graduates can repay their debt; the rule was rescinded in 2019. The student loan system whose outcomes you find harmful enough to justify cancellation was shaped partly by the unlimited political spending that servicers, lenders, and for-profit institutions have used to limit both regulatory oversight and debt relief. You support relief from the outcomes and oppose restricting the spending that produced them.",
    source: "Insider Higher Ed, Navient lobbying disclosures; OpenSecrets.org, education sector lobbying data; Consumer Financial Protection Bureau, student loan servicer enforcement actions",
    conditions: [
      { q: "student_debt", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "more_fin_reg_no_social_security_no",
    title: "Deregulated Finance and the Retirement System",
    body: "You oppose additional government regulation of financial markets and you oppose cuts to Social Security benefits. Social Security's solvency depends on two things: payroll tax revenues from employed workers, and political consensus that the commitment will be honored. Both are threatened by financial instability. The 2008 financial crisis, a product of the regulatory environment you prefer, eliminated approximately 8.7 million jobs in 18 months. Fewer employed workers meant fewer payroll tax contributions. The Social Security Trustees reported that the crisis accelerated the projected insolvency date of the Trust Fund by roughly two years. Lightly regulated financial markets have produced periodic catastrophic crashes, the Savings and Loan crisis (1986-1995), Long-Term Capital Management (1998), the dot-com collapse (2000-2002), and the 2008 mortgage crisis, each of which imposed costs on the broader economy and the workers whose retirement security depends on sustained employment. You want to protect the retirement guarantee and you prefer the financial regulatory environment that has most consistently put it at risk.",
    source: "Financial Crisis Inquiry Commission Report (2011); SSA, 'The Future Financial Status of the Social Security Program' (2009); FDIC, Savings and Loan Crisis resolution cost estimates",
    conditions: [
      { q: "more_fin_reg", a: "no" },
      { q: "social_security_cuts", a: "no" }
    ]
  },

  {
    id: "min_wage_campaign_donations_corps",
    title: "The Industry Funding the Opposition",
    body: "You support raising the federal minimum wage and you support corporations being allowed to donate to political campaigns and spend on elections. The federal minimum wage has not been raised since 2009, the longest stretch without an increase in its 85-year history. The industries most dependent on minimum wage labor (restaurants, fast food, retail, agriculture) are also among the most active political donors against minimum wage legislation. The National Restaurant Association has spent tens of millions lobbying against both federal and state minimum wage increases. Restaurant companies and trade associations contributed substantially to congressional campaigns for legislators who blocked the Raise the Wage Act in 2021; the bill passed the House but was blocked in the Senate, where procedural objections from legislators who had received NRA contributions were decisive. You affirmatively support corporations being allowed to use earnings to fund political campaigns, and the corporations that have most consistently used that ability to stop the minimum wage increase you want have done so in the system you endorse.",
    source: "Economic Policy Institute, 'Why Is There Opposition to Raising the Minimum Wage?' (2021); OpenSecrets.org, restaurant industry campaign contributions; Congressional Budget Office, 'The Effects on Employment and Family Income of Increasing the Federal Minimum Wage' (2021)",
    conditions: [
      { q: "min_wage", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "free_college_campaign_donations_corps",
    title: "The Sector That Has Blocked Free Public College",
    body: "You support the government paying for college tuition and you support corporations being allowed to donate to political campaigns. For-profit colleges and student loan servicers have used corporate political spending to block policies that would expand free or reduced-cost public higher education. The for-profit college sector spent over $25 million lobbying Congress from 2010 to 2019, primarily opposing the gainful employment rule (which would have required demonstrable student outcomes), accreditation reforms, and free community college proposals. Navient and Sallie Mae have spent millions lobbying against income-driven repayment expansion and against proposals to subsidize tuition at public universities, which would reduce the demand for the products their customers need loans to purchase. The 2021 American Families Plan proposal, which included free community college, was substantially weakened before passage partly through sustained lobbying from the for-profit college sector. You support corporate political donations and you want a policy outcome that the corporations most positioned to use those donations to block have consistently blocked.",
    source: "OpenSecrets.org, education sector lobbying data; Center for Responsible Lending, 'For-Profit College Lobbying' (2019); Insider Higher Ed, Navient lobbying disclosures",
    conditions: [
      { q: "free_college", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "copyright_protection_no_social_security",
    title: "Two Government-Enforced Income Streams for Past Contribution",
    body: "You think copyright terms, as currently structured, are too generous to rights-holders, and you oppose cuts to Social Security benefits. Both copyright and Social Security are government-enforced income streams that rest on claims about past contribution. Copyright law grants creators (and, through transfer, corporate successors and heirs) the exclusive right to control and profit from their work for the creator's life plus 70 years. The income flows not from continued creative work but from a government enforcement mechanism that prevents others from reproducing, distributing, or building on covered material. Social Security grants retirement income to workers based on decades of payroll tax contributions, with benefits calculated to replace a portion of pre-retirement earnings. In both cases, government has decided that past activity creates an ongoing legal claim on others' economic activity. You find copyright excessive and Social Security appropriate. The principled distinction is clear: Social Security draws from a fund workers directly and involuntarily contributed to, while copyright grants rights to exclude others from using their own physical property to reproduce ideas. Workers had no choice about contributing payroll taxes; copyright does not require contributions. If your objection to copyright is partly about the intergenerational dimension, where works created in 1927 are still locked up a century later, Social Security also involves intergenerational transfers, where current workers fund current retirees. But the mechanism is different: Social Security involves mutual contributions to a pooled insurance program; copyright involves government preventing competition to generate rents for specific rights-holders. Those are structurally different claims, and your different treatment of them reflects that structural difference, not inconsistency.",
    source: "Sonny Bono Copyright Term Extension Act, Pub. L. 105-298 (1998); Social Security Act, 42 U.S.C. § 301 et seq.; Congressional Budget Office, Social Security: 2024 Long-Term Budget Outlook",
    conditions: [
      { q: "copyright_protection", a: "no" },
      { q: "social_security_cuts", a: "no" }
    ]
  },

  {
    id: "balanced_budget_bank_bailout",
    title: "Fiscal Flexibility and the One Time You Actually Used It",
    body: "You oppose a constitutional requirement that the federal government balance its budget each year, and you oppose bailing out financial institutions that were deemed too big to fail. Your opposition to the balanced budget amendment rests on the view that government must retain the discretion to borrow and spend when circumstances require. The 2008 Troubled Asset Relief Program (TARP), which authorized $700 billion in emergency spending to stabilize the financial system, was the largest peacetime exercise of that fiscal discretion since the New Deal. Government borrowed to backstop the financial system because the alternative, systemic bank failure, threatened to destroy the broader economy. You want the fiscal discretion that TARP used, and you oppose the use of TARP. You might distinguish: I want fiscal flexibility for public goods and social programs, not for transferring resources to bank shareholders and creditors. That distinction is principled. But a government without a balanced budget rule is a government with the authority to do exactly what TARP did, and the political economy of financial crises produces exactly the pressure that led Congress and the executive to use it. If you want fiscal discretion reserved for specific legitimate purposes, you need to specify which purposes, not merely reject the balanced budget constraint. Opposing the constraint while opposing the largest single use of the resulting flexibility is a position that requires more precision.",
    source: "Emergency Economic Stabilization Act (TARP), Pub. L. 110-343 (2008); Congressional Budget Office, 'Report on the Troubled Asset Relief Program' (March 2024); Congressional Research Service, 'The Federal Debt' (2023)",
    conditions: [
      { q: "balanced_budget", a: "no" },
      { q: "bank_bailout", a: "no" }
    ]
  },

  {
    id: "bank_bailout_no_social_security_no",
    title: "Government Financial Commitments, Selectively Honored",
    body: "You oppose bailing out financial institutions that relied on too-big-to-fail guarantees, and you oppose cutting Social Security benefits. Both involve government deciding whether to honor the financial expectations of parties who built decisions around the assumption that government would support them. Bank shareholders, bondholders, and counterparties had invested on the understanding that the government would not allow systemically important institutions to fail catastrophically. Retirees and near-retirees planned their finances on the understanding that the Social Security benefits they paid into would be there. In both cases, private parties structured long-term decisions around a government commitment, and the government faces pressure to maintain those commitments even when they strain public resources. You've decided the financial institutions should absorb the consequences of their risk-taking and the retirees should receive what they were promised. This distinction is defensible on principled grounds: bank investors voluntarily chose a risk posture under an implicit guarantee they arguably should not have relied on; workers had their Social Security contributions mandated by law over decades with no comparable choice. The distinction is between voluntary risk-taking and involuntary contribution to a social insurance program. That distinction holds up. But it is a specific argument, and you should be able to state it explicitly, because without it, your position appears to be that government should honor some financial expectations and reject others without a consistent principle for which.",
    source: "Emergency Economic Stabilization Act (TARP), Pub. L. 110-343 (2008); Social Security Board of Trustees, 2024 Annual Report; Baker, 'The Conservative Nanny State' (2006)",
    conditions: [
      { q: "bank_bailout", a: "no" },
      { q: "social_security_cuts", a: "no" }
    ]
  },

  {
    id: "zoning_restrict_no_school_vouchers",
    title: "Market Competition for Land, Not for Schools",
    body: "You oppose government zoning restrictions that control what private landowners may build, and you oppose school vouchers that would let public funding follow students to private schools. Both positions involve questions about market competition and whether government should determine who gets access to what. You believe land should be governed by market signals rather than government planners: let density emerge from demand rather than from zoning codes that protect incumbent property values and restrict housing supply. But you believe education funding should be governed by government allocation rather than market demand: public money should stay in public schools rather than following families to their preferred providers. In housing, you prefer market competition; in education, you prefer government allocation. The argument for deregulating zoning applies directly to education funding: government restrictions on where housing dollars can go (zoning) harm consumers by limiting choices and inflating prices; government restrictions on where education dollars can go (no vouchers) harm families by limiting choices and insulating schools from competitive pressure. You have accepted this market-exit logic for land and rejected it for education. If your concern about zoning is that it serves incumbent property owners rather than potential new residents, the same concern applies to the public school funding monopoly: it serves the system over the families who might prefer something different.",
    source: "Hoxby, 'Does Competition Among Public Schools Benefit Students and Taxpayers?' American Economic Review (2000); Glaeser and Gyourko, 'The Impact of Zoning on Housing Affordability,' National Bureau of Economic Research (2002); Friedman, 'The Role of Government in Education' (1955)",
    conditions: [
      { q: "zoning_restrict", a: "no" },
      { q: "school_vouchers", a: "no" }
    ]
  },

  {
    id: "zoning_restrict_no_immigration_no",
    title: "Free Supply in One Market, Not the Other",
    body: "You oppose government zoning restrictions that limit housing density and supply, and you oppose expanding work visas for foreign workers. Both are government limits on market supply. Zoning laws restrict how many housing units can be built in a given area, reducing the supply of housing relative to what demand would produce and raising prices. Work visa caps restrict how many foreign workers may enter domestic labor markets, reducing labor supply below what an open market would produce. Both are government interventions that suppress competition and reduce the number of people who can participate in a market. The deregulation argument applies identically: just as government zoning distorts housing markets by restricting who may supply housing, government visa caps distort labor markets by restricting who may supply labor. You've concluded that government should not restrict housing market supply through zoning but that government should restrict labor market supply through visa caps. If your principle is that supply-restricting government rules raise prices and harm consumers, eliminating work visa caps lowers the cost of labor and raises the real incomes of everyone who buys goods and services produced by workers. If your principle is that government may legitimately restrict which workers compete in domestic markets, you have accepted the argument for supply-restriction; the question is why housing supply merits less restriction than labor supply.",
    source: "Glaeser and Gyourko, 'The Impact of Zoning on Housing Affordability,' NBER Working Paper (2002); Kerr and Kerr, 'Economic Impacts of Immigration,' Journal of Economic Perspectives (2011); Cato Institute, 'The Case for Open Immigration' (various)",
    conditions: [
      { q: "zoning_restrict", a: "no" },
      { q: "immigration_labor", a: "no" }
    ]
  },

  {
    id: "zoning_restrict_no_social_media_reg",
    title: "Government Property Rules, Selectively Applied",
    body: "You oppose government zoning restrictions that dictate what private landowners may build on their property, and you support government regulation of what social media platforms may allow users to post. Both involve government determining what private actors may do with their property. Zoning tells private landowners what structures they may build, what uses they may allow, and what density they may develop. Social media regulation would require platforms to control, remove, or limit categories of content on servers they own and operate. In both cases, government is asserting authority to override private property decisions in the name of public interest. The case against zoning holds that government-imposed land use restrictions serve incumbent interests over potential developers and new residents, suppress supply, and substitute regulatory preferences for market outcomes. The same argument applies to government content regulation: it substitutes government-defined categories of acceptable speech for market outcomes in the information environment, and may serve incumbent platforms and political interests. You have accepted government authority to set rules for what private infrastructure owners (platforms) may do with their infrastructure in the information domain, and rejected it in the physical domain. The constitutional and structural differences are real: zoning rests on police power; content regulation raises First Amendment questions that zoning does not. Moody v. NetChoice (2024) confirmed that content moderation decisions are protected speech. The stronger constitutional protection for speech is an argument for less content regulation, not more.",
    source: "Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Glaeser and Gyourko, 'The Impact of Zoning on Housing Affordability,' NBER (2002); Euclid v. Ambler Realty, 272 U.S. 365 (1926)",
    conditions: [
      { q: "zoning_restrict", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corps_ranked_choice",
    title: "Corporate Money and the System It Funds",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you support ranked-choice voting as an electoral reform. Ranked-choice voting is primarily designed to allow viable alternatives to the two major parties, reduce strategic voting, and create conditions where third-party and independent candidates can compete without acting as spoilers. Corporate political donations, as they currently function, flow predominantly to the major-party candidates and incumbents who are best positioned to shape regulatory and legislative outcomes. In the 2022 and 2024 election cycles, over 90% of corporate political action committee spending went to Republican and Democratic candidates. The Commission on Presidential Debates, which excluded third-party candidates through the 15% polling threshold, was established and controlled by the Republican and Democratic national committees; corporate sponsors withdrew only under sustained public pressure. You want an electoral mechanism that would expand competition beyond the two-party duopoly and you support the corporate political spending that has most consistently financed that duopoly. The mechanism you support, if used at scale, would give RCV its first serious test of whether electoral reform alone can overcome the financial dominance of the incumbent parties.",
    source: "FairVote, 'Ranked Choice Voting Research'; OpenSecrets.org, corporate PAC spending by party affiliation; League of Women Voters, Commission on Presidential Debates withdrawal statement (1988)",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "ranked_choice", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corps_housing",
    title: "The Lobbying That Keeps Housing Scarce",
    body: "You support corporations being allowed to donate to political campaigns, and you believe housing affordability is a serious problem requiring policy action. The National Association of Realtors spent more on lobbying than any other organization in 2024, according to OpenSecrets data. Real estate and construction industry political donations have shaped zoning laws, opposed accessory dwelling unit (ADU) reforms, resisted transit-oriented development proposals, and supported single-family zoning mandates in city councils and state legislatures across the country. When California passed SB 9 (2021), allowing duplexes on single-family lots, real estate associations spent heavily opposing it and similar measures. Real estate interests donate to local and state candidates who then influence the zoning decisions that determine housing supply and, therefore, price. Housing affordability policy faces its greatest political opposition from homeowners and real estate interests, who benefit from the scarcity that keeps home values high. You want more affordable housing and you support the political spending of the real estate sector that has most consistently opposed the supply-side and zoning reforms that economists have identified as the most effective tools for achieving it.",
    source: "OpenSecrets.org, 'NAR spent more on lobbying than any other group in 2024' (Feb. 2025); Glaeser and Gyourko, 'The Impact of Zoning on Housing Affordability,' NBER (2002); McKinsey Global Institute, 'A Blueprint for Addressing the Global Affordable Housing Challenge' (2014)",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "housing_affordability", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corps_single_payer",
    title: "The Industry That Has Blocked This Before",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you support a government-run single-payer healthcare system. The health insurance industry has spent more per legislative session opposing single-payer and comparable reforms than any other sector. Between 2009 and 2010, health insurance companies, pharmaceutical manufacturers, and hospital associations collectively spent over $1.2 billion lobbying against the Affordable Care Act and, more specifically, against the public option that many reform advocates considered a precursor to single-payer. The public option was excluded from the final legislation. The hospital and insurance lobbies contributed directly to senators who sat on the Finance Committee that wrote the bill. Medicare for All proposals have repeatedly failed to receive committee votes in an environment where health industry campaign contributions to committee members are among the highest in the Senate. You want the most significant health insurance sector reform in American history. You support the political spending of the industry most financially threatened by that reform. The industry has already used this channel to block a lesser version of what you support.",
    source: "Center for Responsive Politics (OpenSecrets), health sector lobbying data 2009-2010; Brill, 'America's Bitter Pill' (Random House, 2015); PNHP, 'Single-Payer National Health Insurance' background",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "single_payer", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corps_drug_prices",
    title: "Drug Pricing Reform and the Industry Funding Its Opposition",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you believe prescription drug prices in the United States are unreasonably high. Medicare was prohibited by law from directly negotiating drug prices until the Inflation Reduction Act of 2022 allowed limited negotiation for a small subset of drugs, for the first time in the program's history. The prohibition existed for 19 years after the 2003 Medicare Modernization Act, which created Part D while explicitly barring price negotiation. The pharmaceutical industry spent over $350 million lobbying Congress between 2000 and 2003 to shape the MMA, and continued heavy spending to resist any modifications. Even the IRA's limited negotiation authority, covering ten drugs in its first year, was weakened from its original scope through sustained pharmaceutical lobbying and campaign contributions. The United States pays between two and four times what peer countries pay for the same brand-name drugs, a gap that economists attribute directly to the absence of government price-setting authority. The political environment that produced and maintained this gap was financed in part through the pharmaceutical campaign spending you support. You find the outcome harmful and you support the mechanism that produced it.",
    source: "Congressional Budget Office, 'Drug Pricing in the Commercial Market' (2021); Public Citizen, 'Pharmaceutical Industry Profiteering' (2022); Inflation Reduction Act, Pub. L. 117-169 (2022), drug negotiation provisions",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "drug_prices_high", a: "yes" }
    ]
  },

  {
    id: "drug_war_no_social_media_reg",
    title: "Government Enforcement That Fails and What It Teaches",
    body: "You believe the War on Drugs has been ineffective at reducing drug use or related harm, and you support government regulation of social media platforms to limit misinformation and harmful content. The federal government has spent an estimated $1 trillion on drug enforcement since 1971. Drug overdose deaths reached 107,941 in 2022, the highest ever recorded, five decades into the enforcement campaign. The drug war has persisted despite failure largely because of institutional inertia: law enforcement agencies whose budgets depend on enforcement activity, prosecutors whose career advancement depends on drug convictions, mandatory minimum sentences that remove judicial discretion, and private prison contractors whose revenue depends on incarceration. Each of these actors has an institutional interest in the program's continuation independent of whether it achieves its stated goal. The same dynamics that explain why failed enforcement programs persist apply directly to proposed government content regulation: agencies whose mandate requires finding and removing harmful content, platforms that gain regulatory certainty through compliance with a managed process, and incumbent actors who shape the regulatory framework in their favor. If you accept the drug war as evidence that government enforcement programs can cause substantial harm while failing their stated purpose and are sustained by the interests that benefit from their operation, you have a framework for evaluating social media regulation. The evidence that the drug war failed took fifty years to fully accumulate. That timeline is not an argument for a different enforcement program.",
    source: "CNBC, 'America has spent over $1 trillion fighting the war on drugs' (June 17, 2021); CDC, drug overdose surveillance data; Kleiman, Caulkins, Hawken, 'Drugs and Drug Policy' (Oxford University Press, 2011)",
    conditions: [
      { q: "drug_war_effective", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "zoning_restrict_yes_patent_term",
    title: "Two Government Monopoly Grants",
    body: "You support the government's authority to impose zoning restrictions that limit how private property may be used, and you support pharmaceutical companies' current patent protections that limit how others may use their physical property to produce competing drugs. Both are government grants of exclusive control over a market. Zoning law grants existing land uses a government-enforced exclusion against competing uses: a neighborhood zoned single-family can exclude apartments, shops, or denser housing that would otherwise compete for residents. Patent law grants rights-holders a government-enforced exclusion against competing producers: a patent holder can prevent others from using their own factories and equipment to produce a drug that would otherwise compete. In both cases, government has decided that an incumbent stake-holder deserves protection from competition by preventing others from using their own property as they might choose. Economists have documented that both produce the same downstream effect: higher prices for users due to restricted supply. Zoning raises housing costs by limiting housing supply. Drug patents raise drug costs by preventing generic competition. You support both government-granted monopolies. If your principle is that incumbents deserve protection from competition by government decree, you are applying it consistently. If you support one on specific grounds (neighborhoods have legitimate character-preservation interests; pharmaceutical innovation requires temporary exclusivity to recoup R&D costs), you should be able to articulate why those grounds are not met in the other case.",
    source: "Glaeser and Gyourko, 'The Impact of Zoning on Housing Affordability,' NBER (2002); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); TRIPS Agreement, WTO (1994)",
    conditions: [
      { q: "zoning_restrict", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "mandatory_mins_no_social_media_reg",
    title: "Government-Imposed Mandatory Rules, Selectively Opposed",
    body: "You oppose mandatory minimum sentencing laws for drug offenses, and you support government regulation of what social media platforms may distribute. Mandatory minimum drug sentences require judges to impose specific statutory penalties regardless of individual circumstances: the offense category determines the sentence, and judicial discretion to consider context is limited. The case against mandatory minimums holds that one-size-fits-all rules applied to complex individual situations produce unjust outcomes, that they remove the judgment of the person closest to the facts, and that they create perverse incentives for prosecutors. Government content regulation of social media platforms is also a system of mandatory rules: platforms would be required to remove or limit specific categories of content regardless of context, under penalty of law. The case against mandatory content rules tracks the case against mandatory sentencing exactly: context-blind rules produce unjust outcomes (over-removal of legitimate speech), they remove the judgment of the person closest to the content (the platform), and they create perverse incentives for platforms to over-censor to avoid liability. You find mandatory government rules unjust in criminal law and appropriate in content moderation. The mechanism is the same: government specifying in advance what outcomes must follow from which categories of action, without room for judgment about individual circumstances.",
    source: "American Civil Liberties Union, 'Mandatory Minimums: How We Got Here'; Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Electronic Frontier Foundation, platform liability and content moderation research",
    conditions: [
      { q: "mandatory_mins_drugs", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "eminent_domain_no_social_media_reg",
    title: "Government Authority Over Private Property, Two Cases",
    body: "You oppose eminent domain, the government's power to compel transfers of private property, and you support government regulation of what social media platforms may allow users to post. Both involve government authority to override private property decisions. Eminent domain compels property owners to transfer their real property to the state or private developers, even if the owner does not wish to sell. Social media content regulation would compel platform operators to remove or restrict content from their privately owned servers and networks, even if the platform or its users do not wish to remove it. In both cases, government claims the authority to determine what may be done with private property on grounds of public interest. The argument against eminent domain is that the government should not be able to force private owners to change how their property is used based on government-defined public benefits. Applied consistently, that argument limits government authority to mandate what platforms may or may not host. The argument for social media regulation is that some uses of private property (platforms allowing harmful content) impose significant externalities on the public. Applied consistently, that argument supports eminent domain: the underuse of urban land (holding it undeveloped while neighbors need housing) also imposes externalities. You've accepted government property authority in the domain where speech is at stake, and rejected it in the domain where land is at stake. The constitutional framework inverts this: the First Amendment provides stronger protection against government content mandates than the Fifth Amendment provides against property takings.",
    source: "Kelo v. City of New London, 545 U.S. 469 (2005); Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Coase, 'The Problem of Social Cost,' Journal of Law and Economics (1960)",
    conditions: [
      { q: "eminent_domain", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corps_private_equity",
    title: "Who Funds the Environment That Allowed This",
    body: "You support corporations being allowed to donate to political campaigns and spend on elections, and you support banning private equity firms from purchasing and operating hospitals. A 2023 JAMA study found that PE hospital acquisition was associated with a 25% increase in adverse patient events, including falls and central line infections. The regulatory environment that allowed PE firms to expand into hospital ownership over the past two decades was shaped partly through political spending by the financial industry. The Carried Interest Fairness Act, which would have raised the tax rate on PE managers' earnings and reduced the returns that make hospital acquisition financially attractive, was repeatedly blocked in Congress; private equity managers and their employees have been among the largest individual campaign donors. The Private Equity Growth Capital Council lobbied against legislation restricting PE ownership structures in healthcare. You support the political donation mechanism that the financial industry has used to maintain the tax and regulatory environment in which PE hospital acquisition is both profitable and legal. You support banning the outcome and supporting the spending that shaped the conditions producing it.",
    source: "Kannan, Bruch, Song, 'Changes in Hospital Adverse Events and Patient Outcomes,' JAMA (2023); OpenSecrets.org, private equity sector campaign contributions; carried interest tax treatment history, Tax Policy Center",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "private_equity_hospitals", a: "yes" }
    ]
  },

  {
    id: "qualified_immunity_yes_patent_term",
    title: "Government-Granted Immunity From Accountability",
    body: "You support qualified immunity protections for police officers and you support pharmaceutical companies' current patent protections. Both are government-granted shields that protect specific actors from the consequences of their choices that others would normally face. Qualified immunity protects individual officers from personal civil liability for constitutional violations unless they violated 'clearly established' law, even when a plaintiff has been genuinely harmed. The doctrine was created by the Supreme Court and is not in the text of Section 1983 or any statute. Pharmaceutical patent protection, extended through strategies like evergreening, pay-for-delay settlements, and minor formulation patents, protects rights-holders from the generic competition they would otherwise face. Generic drug companies are legally barred from producing competing medications even when they have the physical capacity and technical knowledge to do so. In both cases, government has decided that a specific class of actor deserves protection from accountability or competition that would otherwise exist: citizens harmed by unconstitutional police conduct cannot sue the officer personally; patients and generic manufacturers cannot access drugs at competitive prices because the rights-holder is legally immune from competition. Both shield incumbents from consequences. If your principle is that incumbents should be protected from accountability in one of these domains, you should be able to explain why that principle applies differently in the other.",
    source: "Pearson v. Callahan, 555 U.S. 223 (2009); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); Joanna Schwartz, 'The Case Against Qualified Immunity,' Notre Dame Law Review (2020)",
    conditions: [
      { q: "qualified_immunity", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "drug_decrim_no_patent_term",
    title: "Government's Dual Monopoly on Drugs",
    body: "You oppose drug decriminalization and support pharmaceutical companies' current patent protections. You support two intersecting government monopolies over who may produce and use drugs. Drug prohibition through criminal law makes it illegal for individuals to possess and use controlled substances without government authorization: government controls who may use which drugs. Pharmaceutical patent law makes it illegal for companies to manufacture competing drugs without rights-holder authorization: government controls who may produce which drugs. Both are government controlling access to drugs through legally enforced exclusivity. Criminal prohibition removes authorization from users; patent law removes authorization from competing producers. You've endorsed government's authority to determine who may use drugs and who may produce drugs. These two forms of monopoly interact: when pharmaceutical companies extend patent protections, they are using government authority to prevent competition in precisely the drug markets that criminal law controls access to. The same government that determines which drug use is authorized determines which drug manufacturing is authorized. If your concern about drug criminalization is that the wrong drugs are prohibited, you should consider that pharmaceutical patent protection is equally a government determination about which drugs may be produced and at what price. Both are government doing the same thing: deciding who gets drugs and on what terms.",
    source: "Drug Enforcement Administration, Controlled Substances Act enforcement data; FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); Global Commission on Drug Policy, 'War on Drugs Report' (2011)",
    conditions: [
      { q: "drug_decrim", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "racial_disparity_no_patent_term",
    title: "Government Drug Policy and Disparate Outcomes",
    body: "You are not concerned that there are racial disparities in how the criminal justice system handles drug-related offenses, and you support pharmaceutical companies' current patent protections that limit generic drug competition. Both positions relate to government drug policy and who bears its costs. The ACLU found that Black Americans are 3.73 times more likely to be arrested for marijuana possession than white Americans despite comparable use rates across racial groups. If you are not concerned about this disparity, you hold that government drug enforcement can produce racially disparate outcomes without warranting policy reconsideration. Pharmaceutical patent monopolies limit access to affordable drugs. The United States pays two to four times what comparable countries pay for brand-name drugs, a gap borne disproportionately by the uninsured and underinsured, who are disproportionately Black and Latino Americans. If you support patent protections that concentrate drug access by price, you are supporting a policy that produces disparate outcomes in drug availability by race. You apply a framework of 'government drug policy can produce disparate outcomes without requiring reform' in both the criminal enforcement domain (where you decline concern) and the pharmaceutical access domain (where you support the monopoly). Whether the disparities are troubling depends on how they came to exist, not merely that they do. But you have declined to concern yourself with them in either case.",
    source: "ACLU, 'The War on Marijuana in Black and White' (2020); KFF Health News, U.S. prescription drug pricing compared to peer countries (2024); Kaiser Family Foundation, racial disparities in health coverage data",
    conditions: [
      { q: "racial_disparity_concern", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "police_military_no_social_media_reg",
    title: "Which Government Power Expansion You Accept",
    body: "You oppose providing police departments with military-grade weapons and equipment, and you support government regulation of social media to limit harmful content. Both involve decisions about which coercive capabilities government should have. You believe government should not expand its physical coercive capacity through military equipment transfers to local police, which have been deployed against protesters and used to escalate confrontations that might have remained contained. You believe government should expand its informational coercive capacity through regulatory authority over what speech and content platforms may distribute. The objection to police militarization is well-developed: military equipment transforms the relationship between police and civilians from law enforcement to occupation, creates incentives for tactical escalation, and has been disproportionately deployed in communities of color. An equally well-developed objection applies to government content regulation: it transforms the relationship between government and speech from legal constraint to managed discourse, creates incentives for over-removal to avoid liability, and has historically been disproportionately deployed against politically disfavored speakers. You've accepted the analysis that government physical coercive capacity should not expand without limit, and rejected the parallel analysis for government informational coercive capacity. The constitutional framework agrees with your caution about speech: the First Amendment provides stronger protection against government content mandates than against government use of force, not weaker.",
    source: "ACLU, '1033 Program Report on Police Militarization' (2014); Moody v. NetChoice, LLC, 603 U.S. 707 (2024); American Bar Association, 'How the 1033 Program Militarized Police' (2019)",
    conditions: [
      { q: "police_military_equip", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "private_prisons_patent_term",
    title: "Private Corporations in Government-Mandated Captive Markets",
    body: "You support private prisons operating under government contracts and you support pharmaceutical companies' current patent protections. Both are private corporations extracting revenue from government-created captive markets. Private prisons earn guaranteed revenue from government contracts to house inmates that criminal sentences mandate must be incarcerated. They do not need to attract voluntary customers; government fills their beds through mandatory sentences. Pharmaceutical patent holders earn guaranteed revenue from patients who must purchase their drugs because generic competition is legally prohibited. They do not need to attract customers through competitive pricing; patent exclusivity prevents alternatives from entering the market. In both cases, a private corporation has been given access to a market that government legal authority makes captive: criminal sentences for private prisons, patent exclusivity for pharmaceutical companies. Both profit from government-created mandatory consumption. If you support private corporations operating government-mandated detention facilities, you've accepted the model of private profit from government-mandated captive markets. Pharmaceutical patents operate the same structure: government-enforced exclusivity drives the market, private corporation captures the revenue above what competition would produce. Whether you support both on efficiency grounds, or both on principle, the structural model is identical: private profit from government-guaranteed demand.",
    source: "Bureau of Justice Statistics, private prison population data; FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); The Sentencing Project, 'Private Prisons in the United States' (2023)",
    conditions: [
      { q: "private_prisons", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "mandatory_mins_drugs_patent_term",
    title: "Mandatory Categorical Rules in Both Drug Markets",
    body: "You support mandatory minimum sentences for drug offenses and you support pharmaceutical companies' current patent protections. Both are categorical enforcement systems applied to drug markets where the category of offense or grant determines the outcome, and individual-specific judgment is limited. In mandatory minimum sentencing, the drug offense category determines the mandatory prison term regardless of circumstances: judges cannot sentence below the statutory minimum even when individual facts argue for a different outcome. In pharmaceutical patent enforcement, the patent grant determines which competing producers are barred from the market regardless of circumstances: generic manufacturers cannot produce a drug based on any assessment of patient need, public benefit, or specific harm. Both remove discretionary judgment. Federal judges have written about the injustice of mandatory minimums in cases where circumstances warranted a different outcome; generic manufacturers have been barred from producing affordable drugs in cases where millions of patients needed lower-cost alternatives. You support both systems of mandatory categorical rule-enforcement. If your concern about pharmaceutical markets is that companies use their monopoly power to charge excessive prices, note that the mandatory nature of patent enforcement is what makes that power absolute: there is no judicial discretion to consider whether the patent protection is producing outcomes consistent with its stated purpose of incentivizing innovation.",
    source: "United States Sentencing Commission, 'Mandatory Minimum Penalties' report; FTC v. Actavis, 570 U.S. 136 (2013); American Civil Liberties Union, 'A Living Death: Life Without Parole for Nonviolent Offenses' (2013)",
    conditions: [
      { q: "mandatory_mins_drugs", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "civil_asset_forfeiture_patent_term",
    title: "Property Without Due Process, in Two Drug Markets",
    body: "You support civil asset forfeiture and you support pharmaceutical companies' current patent protections. Both are government imposing mandatory legal consequences on property connected to drug markets with limited individualized due process. Civil asset forfeiture allows government to seize property suspected of connection to drug crimes without a criminal conviction or even criminal charges against the owner. The Department of Justice's Assets Forfeiture Fund collected over $1.8 billion in fiscal year 2022. Pharmaceutical patent law prevents others from using their own physical equipment, raw materials, and manufacturing capacity to produce patented drugs, regardless of any individualized assessment of whether they are harming the patent holder or benefiting patients. In both cases, government has decided that certain uses of physical property, property connected to drug offenses, or manufacturing capacity that could produce patented drugs, face mandatory legal consequences without full individualized adjudication. You've accepted this model in two different drug market contexts: property associated with illegal drug activity can be seized without conviction, and property capable of producing legal drugs can be restricted without any finding of harm. Both are government overriding normal property rights based on the drug market category, not the specific individual circumstance.",
    source: "Department of Justice, Assets Forfeiture Fund statistics; Institute for Justice, 'Policing for Profit: The Abuse of Civil Asset Forfeiture' (3rd ed., 2020); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013)",
    conditions: [
      { q: "civil_asset_forfeiture", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "police_military_patent_term",
    title: "Expanding Enforcement Capacity, Across Two Domains",
    body: "You support providing police departments with military-grade weapons and equipment and you support pharmaceutical companies' current patent protections. Both expand the coercive enforcement capacity of specific actors through government-backed authority. Police militarization expands physical enforcement capacity: MRAP vehicles, military rifles, flash grenades, and surveillance technology make police capable of applying substantially more coercive force than standard law enforcement equipment. Pharmaceutical patent protections expand commercial enforcement capacity: government-backed exclusivity allows rights-holders to maintain pricing power, prevent competition, and enforce their market position through courts and the threat of infringement litigation. In both cases, government has granted a specific class of actor enhanced capacity to control behavior in their domain. The domestic drug market is the primary deployment context for both: militarized police equipment has been used most extensively in drug enforcement operations; pharmaceutical patents are most consequentially enforced against generic manufacturers trying to produce affordable drugs. You support expanding enforcement capacity on both the law enforcement side and the pharmaceutical monopoly side of the drug market. The combination means government actively suppresses drug market participants from both directions: criminal enforcement with military capacity on one end, pharmaceutical exclusivity enforcement on the other.",
    source: "American Civil Liberties Union, 'War Comes Home: The Excessive Militarization of American Policing' (2014); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013); MRAP transfer data, Defense Logistics Agency",
    conditions: [
      { q: "police_military_equip", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "patent_term_fda_stricter",
    title: "Pharmaceutical Monopoly and the Oversight That Restricts It",
    body: "You support pharmaceutical companies' current patent protection terms and you want stricter FDA approval standards for new drugs. These positions work at cross-purposes within the pharmaceutical regulatory system, and the industry whose monopoly you support has used its political influence to move in the opposite direction from what you want. The Hatch-Waxman Act of 1984 established patent term extensions of up to five years specifically to compensate pharmaceutical companies for time lost to FDA review. As FDA review becomes stricter and timelines extend, the effective commercial window within a patent term shrinks, reducing return on investment unless patent terms extend further. The pharmaceutical industry's response to this trade-off has been to lobby for faster FDA pathways, not stricter ones: Accelerated Approval, Breakthrough Therapy Designation, and Priority Review all reduce evidentiary standards in exchange for faster market access. The FDA's Office of Inspector General and the journal JAMA have documented cases where drugs approved through accelerated pathways showed limited efficacy on confirmed clinical endpoints when studied further. The pharmaceutical companies that benefit from the patent system you support have used their substantial political influence, they are consistently the largest lobbying sector in the United States, to make FDA standards less stringent, not more. You want stricter standards and you support the monopoly that finances the lobbying against them.",
    source: "Hatch-Waxman Act, Pub. L. 98-417 (1984); FDA, Accelerated Approval program history; Darrow, Avorn, Kesselheim, 'FDA Approval and Regulation of Pharmaceuticals,' JAMA (2020); HHS OIG, Accelerated Approval drug evidence assessments",
    conditions: [
      { q: "patent_term", a: "yes" },
      { q: "fda_stricter", a: "yes" }
    ]
  },

  {
    id: "snowden_pardon_social_media_reg",
    title: "Revealing Government Information Control vs. Granting It",
    body: "You support pardoning Edward Snowden and you support government regulation of social media platforms to limit harmful content. You believe the public's right to know about government surveillance programs outweighed the government's interest in prosecuting the person who revealed them. Snowden disclosed that the NSA was conducting bulk surveillance under secret legal interpretations that the FISA Court later found violated the law. Before independent verification, the government characterized these disclosures as harmful and potentially dangerous. Social media content regulation gives government authority to define categories of 'harmful' content and require platforms to suppress them. The information that gets labeled harmful by government regulators and the information that Snowden disclosed were both characterized by government as dangerous to public interests before independent verification was possible. The Foreign Intelligence Surveillance Court's secret interpretations of the PATRIOT Act were the kind of government-controlled information environment that independent disclosure disrupts. A government with authority to suppress 'harmful' content on social media platforms would have had additional tools to manage the information environment around surveillance disclosures. You've supported the most significant modern example of unauthorized information disclosure from a government program and you support giving government new authority over information flows in public discourse. These are not easily reconciled.",
    source: "ACLU v. Clapper, 785 F.3d 787 (2d Cir. 2015) (NSA bulk collection found to exceed PATRIOT Act authority); Espionage Act, 18 U.S.C. § 793; Moody v. NetChoice, LLC, 603 U.S. 707 (2024)",
    conditions: [
      { q: "snowden_pardon", a: "yes" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "nsa_bulk_no_social_media_reg",
    title: "Government in the Information Loop, Two Ways",
    body: "You oppose the NSA's bulk collection of metadata and communications content, and you support government regulation of social media to limit the spread of harmful content. Both are government reaching into the information environment between citizens. NSA bulk collection is government passively accumulating what citizens communicate: the metadata of calls, the content of messages, the patterns of association. Social media content regulation is government actively determining what citizens may read: defining which categories of content platforms must suppress and enforcing those definitions through regulatory authority. You've opposed the passive collection form (government learning about information flows after the fact) and supported the active suppression form (government shaping information flows in real time). Both are government in the information loop: surveillance is downstream information control; content regulation is upstream information control. The argument for opposing NSA bulk collection, that government should not be positioned to know what citizens communicate, applies with greater force to content regulation, which positions government to determine what citizens can communicate. If your concern about surveillance is the chilling effect on speech (people self-censor when they know they are being watched), government content regulation achieves the chilling effect directly: content is removed, not just observed.",
    source: "ACLU v. Clapper, 785 F.3d 787 (2d Cir. 2015); EFF, 'NSA Mass Surveillance Programs' overview; Moody v. NetChoice, LLC, 603 U.S. 707 (2024)",
    conditions: [
      { q: "nsa_bulk", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "crypto_backdoor_no_social_media_reg",
    title: "Government Access to Digital Infrastructure, Selectively Rejected",
    body: "You oppose mandatory encryption backdoors that would give government access to encrypted communications, and you support government regulation of what social media platforms may distribute. You believe government should not have infrastructure access to private communications systems, because backdoors create security vulnerabilities that any attacker can exploit, not just authorized government agencies, and because government access to private communications is an unacceptable surveillance power. You believe government should have regulatory authority over what content social media platforms may carry, requiring platforms to suppress categories of content government defines as harmful. Both are government asserting authority over digital communications infrastructure. You've decided that government should have no access to private communications infrastructure (no backdoors) but should have authority over public platform infrastructure (content regulation). The security argument against backdoors applies to content regulation as well: government content definitions, once created, can be exploited by any government with access to the regulatory apparatus, not just the one that established it. The principle of government staying out of communications infrastructure argues against both: encryption backdoors give government access to private message content; content regulation gives government access to public message flow. You've accepted one form of government digital infrastructure authority and rejected the other.",
    source: "Apple v. FBI (2016), encryption backdoor dispute; EFF, 'Government Backdoors to Encryption'; Moody v. NetChoice, LLC, 603 U.S. 707 (2024)",
    conditions: [
      { q: "crypto_backdoor", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "voter_id_no_social_media_reg",
    title: "Government Prerequisites for Civic Participation",
    body: "You oppose voter identification requirements and you support government regulation of what social media platforms may allow users to post. Both involve government imposing requirements on participation in public civic life. Voter ID requirements demand that citizens present government-approved identity documentation before exercising the right to vote, the foundational act of democratic self-governance. You believe this requirement is too burdensome, disproportionately restricts access for certain communities, or is otherwise inappropriate as a condition for civic participation. Social media content regulation would impose government-defined content standards as conditions of participation in online public discourse: speech that falls into prohibited categories would be removed, limiting whose voice reaches the public sphere. You've opposed government-imposed prerequisites for participation in offline civic life (voting) and supported government-imposed prerequisites for participation in online civic life (content regulation). If your concern about voter ID is that government should not control who can participate in democracy through identification requirements, that principle applies to government controlling who can participate in public discourse through content requirements. If your concern about online content is that participation standards serve the public good, the same argument supports participation standards for voting.",
    source: "Crawford v. Marion County Election Board, 553 U.S. 181 (2008); Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Brennan Center for Justice, 'Voter ID Laws' research",
    conditions: [
      { q: "voter_id", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "snowden_pardon_no_patent_term",
    title: "Legal Accountability for Revealing Violations, Not for Committing Them",
    body: "You oppose pardoning Edward Snowden and you support pharmaceutical companies' current patent protections. Snowden disclosed NSA surveillance programs that the Second Circuit later found exceeded the authority granted by the PATRIOT Act. He was charged under the Espionage Act, which provides no public interest defense, regardless of whether the disclosed programs were themselves unlawful. You believe he should face legal consequences. Pharmaceutical companies have engaged in pay-for-delay settlements, in which brand-name manufacturers paid generic competitors not to enter the market, costing consumers an estimated $3.5 billion annually per FTC estimates. The Supreme Court in FTC v. Actavis (2013) confirmed these arrangements can violate antitrust law. These companies continue to operate, retain their patent protections, and paid civil fines as a cost of doing business. You've supported legal prosecution of an individual who revealed government rule-breaking and supported the continued monopoly protections of companies that engaged in documented anticompetitive behavior. The legal accountability asymmetry: a person who exposed violations faces years in exile and ongoing criminal charges; corporations that committed violations retain their government-granted monopolies after settlement. You may argue these are different legal contexts, and they are. But both involved actors exceeding their legal authority in ways that harmed the public, and you've reached different conclusions about legal consequences.",
    source: "ACLU v. Clapper, 785 F.3d 787 (2d Cir. 2015); FTC v. Actavis, Inc., 570 U.S. 136 (2013); FTC, 'Pay-for-Delay: How Drug Company Pay-Offs Cost Consumers Billions' (2013)",
    conditions: [
      { q: "snowden_pardon", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "nuclear_power_no_carbon_tax_no",
    title: "Two Climate Tools, Both Rejected",
    body: "You oppose expanding nuclear power and you oppose a carbon tax on carbon emissions. Nuclear power produces large-scale baseload electricity with near-zero operational carbon emissions and a smaller land footprint per unit of electricity than wind or solar. A carbon tax is the economist-preferred market mechanism for shifting energy demand toward lower-carbon sources by making carbon externalities visible in prices. The IPCC's 2022 climate mitigation report identifies both nuclear power and carbon pricing among the available tools for decarbonization. You have declined both the primary proven zero-carbon baseload technology and the primary market instrument for reducing carbon usage. If your concern about nuclear is safety or waste, the carbon tax remains available as a tool for accelerating the energy transition toward whatever non-nuclear mix you prefer. If your concern about the carbon tax is economic impact, nuclear remains available as a direct supply-side intervention. If your concerns about both are distinct, you can hold them simultaneously. But taken together, the positions say: the existing carbon-intensive energy mix is preferable to nuclear alternatives, and carbon pricing to make the existing mix more expensive is also undesirable. You have not specified what, if anything, should change in the energy system. The question of which transition mechanism you prefer remains unanswered.",
    source: "IPCC, 'Mitigation of Climate Change' (2022); Nordhaus, 'Revisiting the Social Cost of Carbon,' PNAS (2017); International Atomic Energy Agency, nuclear power and climate change data",
    conditions: [
      { q: "nuclear_power", a: "no" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "drug_war_no_social_security_no",
    title: "Outcome-Based Evaluation, Selectively Applied",
    body: "You believe the War on Drugs has failed to achieve its stated goals and you oppose cuts to Social Security benefits. Both are large, long-running federal programs. You've concluded that the drug war, which has cost over a trillion dollars and produced rising overdose deaths rather than declining drug use, should be evaluated against its outcomes and found wanting. Social Security provides retirement income to retirees who paid payroll taxes for working lives. Elderly poverty rates have declined substantially since Social Security's expansion in the 1960s and 1970s: the elderly poverty rate fell from approximately 30% in 1966 to around 10% today, one of the most significant poverty-reduction achievements in American social policy. If your framework for evaluating government programs is outcomes, the drug war and Social Security have very different records. The drug war has failed by its own metrics. Social Security has largely succeeded by its own metrics: it provides income to those who contributed, and elderly poverty rates have declined significantly. You've applied outcome-based skepticism to one and outcome-based protection to the other, which is consistent if you accept that their outcomes differ as substantially as the evidence shows. The tension appears if you're skeptical of government programs generally based on the drug war; it resolves if you're selectively skeptical based on whether specific programs achieve their specific stated goals.",
    source: "CNBC, 'America has spent over $1 trillion fighting the war on drugs' (June 17, 2021); SSA, poverty among aged persons; Social Security Trustees Report (2024); CDC drug overdose data",
    conditions: [
      { q: "drug_war_effective", a: "no" },
      { q: "social_security_cuts", a: "no" }
    ]
  },

  {
    id: "free_trade_no_patent_term",
    title: "Trade Deals That Made Drug Patents Global",
    body: "You oppose free trade agreements and you believe pharmaceutical companies should be able to maintain their current drug patent protections. The Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS), adopted in 1994 as part of the Uruguay Round negotiations that created the World Trade Organization, established the international minimum of 20-year pharmaceutical patent terms. Countries seeking access to the global trading system had to adopt TRIPS protections as a condition of WTO membership, including countries that had previously allowed generic manufacturers to produce affordable versions of patented drugs. The Trans-Pacific Partnership, opposed by critics across the political spectrum as a corporate-friendly trade agreement, contained provisions that would have extended pharmaceutical monopoly protections beyond the TRIPS standard and delayed generic entry further in signatory countries. The pharmaceutical patent regime you support was constructed through the trade liberalization framework you oppose; the trade agreements you reject were the primary mechanism for extending pharmaceutical monopolies to global scale. MSF has documented that TRIPS enforcement has increased drug costs in developing countries by factors of ten or more for essential medicines. You oppose the instrument and support its most commercially consequential output.",
    source: "TRIPS Agreement, WTO (1994); Gleeson, Lopert, and Reid, 'How U.S. Trade Policy Determines Global Access to Medicines,' PLOS Medicine (2015); MSF, 'Trading Away Health: How the TPP's Intellectual Property Chapter Could Affect Access to Medicines' (2015)",
    conditions: [
      { q: "free_trade", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "monopoly_break_campaign_finance",
    title: "Antitrust Enforcement in a System the Defendants Fund",
    body: "You support government antitrust enforcement to break up large tech companies with dominant market positions, and you oppose stricter limits on how much individuals and organizations can spend on political campaigns. Antitrust enforcement is a political decision. The DOJ Antitrust Division and FTC are funded, staffed, and directed through a legislative process that corporate political spending influences directly. Alphabet (Google's parent company), Amazon, Apple, Meta, and Microsoft collectively spent over $77 million on federal lobbying in 2022, more than any comparable sector. The legislative environment that allowed these companies to acquire competitors, extend into adjacent markets, and resist enforcement for decades was shaped partly through that spending. The DOJ case against Google, filed in 2020, followed years during which the company's lobbying expenditures substantially exceeded those of the agencies investigating it. Google has spent over $100 million on lobbying since 2016. You want the political process to break up companies that are among the largest investors in shaping that process, and you oppose the only framework that could reduce their investment in doing so.",
    source: "OpenSecrets.org, technology sector lobbying expenditures (2022); DOJ v. Google LLC, No. 1:20-cv-03010-APM (D.D.C. 2024); Khan, 'Amazon's Antitrust Paradox,' Yale Law Journal (2017)",
    conditions: [
      { q: "monopoly_break", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "more_fin_reg_no_immigration_no",
    title: "Government Intervention in Markets, Applied Selectively",
    body: "You oppose additional government regulation of financial markets and you oppose expanding work visas for foreign workers. Both positions involve government deciding who may compete in a market and on what terms. The argument against financial regulation holds that government rules restrict competition, impose compliance costs, and substitute bureaucratic judgment for market signals in ways that harm the system overall. The argument for immigration caps holds that government may legitimately restrict competition in the labor market by limiting who may legally enter it and on what terms. Both are cases of government intervention in a market. You have rejected intervention in financial markets and accepted it in labor markets. If you believe government should not add new rules about how financial institutions operate because markets are better at allocating capital than regulators are, the same logic supports open immigration: labor markets are better at allocating workers than visa caps are. If you believe government can legitimately restrict who participates in labor markets, you have accepted the case for government managing markets; the question then is what distinguishes the labor market from the financial market as targets of intervention.",
    source: "Stigler, 'The Theory of Economic Regulation,' Bell Journal of Economics (1971); Friedman, 'Capitalism and Freedom,' Ch. 9 (1962); Cato Institute, 'The Case for More Skilled Immigration' (2019)",
    conditions: [
      { q: "more_fin_reg", a: "no" },
      { q: "immigration_labor", a: "no" }
    ]
  },

  {
    id: "corp_taxes_campaign_finance",
    title: "Taxing Through the Process That Keeps Taxes Low",
    body: "You support raising corporate income tax rates and you oppose stricter limits on how much individuals and organizations can spend on political campaigns. Corporate tax rates are set by Congress through the same legislative process that corporate political spending is most reliably used to influence. The U.S. Chamber of Commerce, the Business Roundtable, and affiliated trade associations spent over $800 million lobbying against corporate tax provisions of the Inflation Reduction Act of 2022. The alternative minimum corporate tax, set at 15 percent in that legislation, was reduced from originally proposed rates after sustained industry lobbying. Richter, Samphantharak, and Timmons found in the American Journal of Political Science (2009) that companies spending the most on lobbying consistently paid the lowest effective tax rates, a relationship that has held across tax regimes. OpenSecrets data shows corporate interests outspend labor interests on federal lobbying by roughly ten to one. You support raising corporate taxes through the process that corporate political spending has most consistently been used to reduce what corporations actually pay.",
    source: "Richter, Samphantharak, Timmons, 'Lobbying and Taxes,' American Journal of Political Science 53(4):893 (2009); Inflation Reduction Act, Pub. L. 117-169 (2022); OpenSecrets.org, corporate and labor sector lobbying comparisons",
    conditions: [
      { q: "corp_taxes", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "free_college_no_social_media_reg",
    title: "Government Shaping the Information Environment, Selectively",
    body: "You oppose the government paying for college tuition and you support government regulation of social media platforms to limit misinformation. Both positions involve government deciding what role it should play in shaping how citizens access and process information. You are skeptical of government involvement in higher education (curriculum capture, ideological conformity, crowding out of private alternatives are common concerns), yet you support government oversight of social media platforms defining which content may be distributed and what penalties apply when platforms fail to act. In both cases, the government would be exercising authority over which information citizens can access at subsidized or regulated conditions. The argument for leaving higher education to the market (government shouldn't determine what people learn or what access to knowledge costs) applies with at least as much force to content regulation (government shouldn't determine which information people encounter online). The argument for social media regulation (private companies are shaping the information environment in ways that produce measurable public harm) applies with at least equal force to unsubsidized higher education (private institutions shape who can access knowledge based on ability to pay, producing measurable public harm through skills gaps and inequality). You have applied the market-failure rationale in one information domain and the government-overreach rationale in the other.",
    source: "Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Heckman, 'Skill Formation and the Economics of Investing in Disadvantaged Children,' Science (2006); Zittrain, 'The Future of the Internet and How to Stop It' (Harvard University Press, 2008)",
    conditions: [
      { q: "free_college", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_no_corp_data_concern",
    title: "Corporate Power Over People, Accepted in One Domain",
    body: "You oppose stricter limits on corporate campaign spending and you are concerned about how corporations collect and use personal data. Both positions are about what corporations may do with power they hold over individuals. Corporate campaign spending is how corporations translate economic power into political power: unlimited spending allows them to influence which candidates win, which bills advance, and which regulations survive. Your concern about corporate data collection reflects awareness that corporations can accumulate private information about individuals and use it in ways individuals cannot easily monitor or contest. In both domains, a private entity is accumulating leverage over individuals and deploying it in ways that are difficult for individuals to counter. You have decided government should restrict corporate power over personal information but should not restrict corporate power over political information. The political spending you protect is used to weaken privacy regulations. The Federal Trade Commission's proposed data privacy rules have been lobbied against by the same corporate interests that spend most heavily in campaigns. Meta and Google have spent hundreds of millions of dollars on campaign contributions and lobbying while simultaneously being the companies whose data practices you find most concerning. You want the behavior constrained; you protect the mechanism that prevents the constraint.",
    source: "OpenSecrets.org, tech sector lobbying and campaign contributions; FTC, 'Commercial Surveillance and Data Security' rulemaking (2022); Zuboff, 'The Age of Surveillance Capitalism' (PublicAffairs, 2019)",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "corp_data_concern", a: "yes" }
    ]
  },

  {
    id: "campaign_donations_corps_yes_carbon_tax",
    title: "Supporting the Mechanism That Blocks the Policy",
    body: "You support corporations being able to make unlimited political donations and you support a carbon tax to address climate change. A carbon tax has been among the most widely discussed climate policy proposals among economists for decades: it prices the externality of carbon emissions, allows markets to find the least-cost emissions reductions, and is revenue-neutral in many proposed forms. It has not been enacted at the federal level. The fossil fuel industry is among the most significant sources of corporate political spending in the United States. Exxon, Chevron, and affiliated industry associations have spent billions of dollars over three decades on campaign contributions, lobbying, and public relations efforts opposing carbon pricing. A 2021 Harvard study found that Exxon's internal scientists had accurately projected global warming since the 1970s while the company funded external climate-doubt campaigns. Citizens United v. FEC (2010) removed previous limits on corporate political expenditures, expanding the political reach of the industries most directly affected by carbon pricing. You support a carbon tax and you support the constitutional framework that makes it easiest for the industry most invested in preventing a carbon tax to block it.",
    source: "Citizens United v. FEC, 558 U.S. 310 (2010); Supran and Oreskes, 'Assessing ExxonMobil's Climate Change Communications,' Environmental Research Letters (2017); Stokes, 'Short Circuiting Policy' (Oxford University Press, 2020)",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "carbon_tax", a: "yes" }
    ]
  },

  {
    id: "green_subsidies_no_social_media_reg",
    title: "Government Picking Winners: Energy vs. Speech",
    body: "You oppose government subsidies for renewable energy companies and you support government regulation of what content social media platforms may host or distribute. Both positions involve government intervening in a market to correct for outcomes it finds undesirable. In the energy market, you think the government should not use taxpayer money to favor certain technologies: if renewable energy is viable, it should compete on its own terms, and subsidies distort price signals and allow political selection to substitute for market selection. In the speech market, you think the government should determine what content is distributed too widely and require platforms to reduce its distribution: if disinformation spreads, the market for attention is not self-correcting enough and government must intervene. The argument against green subsidies (markets are better at allocating resources than political processes; government intervention creates rent-seeking and capture) applies with direct force to content moderation mandates (political processes will define what counts as disinformation; the agencies making those determinations will face the same lobbying pressures you worry about in energy policy). The argument for content regulation (the market produces externalities that affect people who are not party to the transaction) applies with direct force to energy (carbon emissions produce externalities affecting people outside the transaction). You've reversed the logic in each domain.",
    source: "Solyndra bankruptcy, GAO-12-694 (2012); Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Coase, 'The Problem of Social Cost,' Journal of Law and Economics (1960)",
    conditions: [
      { q: "green_subsidies", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_no_patent_term",
    title: "The Monopoly Maintained by the Lobby It Funds",
    body: "You oppose stricter limits on corporate campaign spending and you support pharmaceutical companies' ability to maintain their current drug patent protections. Pharmaceutical patent terms are set by Congress. The pharmaceutical industry is among the most active corporate lobbying sectors in Washington: the Pharmaceutical Research and Manufacturers of America (PhRMA) and its member companies spent over $370 million on lobbying between 2020 and 2022. The Hatch-Waxman Act (1984), the Bayh-Dole Act (1980), and subsequent legislation extending and strengthening patent protections were shaped through sustained industry lobbying over decades. The Medicare Prescription Drug, Improvement, and Modernization Act of 2003, which prohibited Medicare from negotiating drug prices directly, passed after intense lobbying by pharmaceutical manufacturers and was followed by multiple senior officials involved in its passage moving to industry positions. Dean Baker at the Center for Economic and Policy Research estimates that pharmaceutical monopoly protections cost American consumers and governments approximately $400 billion per year above what competitive market prices would be. You have supported unlimited corporate political spending and you support the policy outcome that the industry spending most on that mechanism uses it to maintain: government-granted monopoly pricing power.",
    source: "OpenSecrets.org, PhRMA lobbying data; Hatch-Waxman Act, Pub. L. 98-417 (1984); Baker, 'Rigged: How Globalization and the Rules of the Modern Economy Were Structured to Make the Rich Richer' (CEPR, 2016)",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "student_debt_campaign_donations_corps",
    title: "Cancelling the Debt That Unlimited Donations Grew",
    body: "You support cancelling federal student loan debt and you support allowing corporations, unions, and nonprofits to spend unlimited money on political campaigns. The federal student loan program has grown into a mechanism through which colleges can set tuition at prices students absorb through debt backed by federal guarantees. Higher education institutions and their associated lobbying operations have spent hundreds of millions of dollars on federal elections and lobbying to preserve and expand federal student aid programs that flow directly to them. The for-profit college sector spent heavily on campaigns before and during the Obama administration's partial restrictions on the sector, and multiple executives moved between the industry and federal education policy positions. The structure of federal student lending, which allows institutions to charge what federal loan limits permit rather than what students can independently afford, was built and maintained through the political spending you support. If you oppose restrictions on institutional political spending, you support the mechanism through which tuition prices were politically insulated from the competitive pressures that would have held them down. You want to cancel the accumulated obligation and preserve the political structure that generated it.",
    source: "Kelchen, 'Higher Education Accountability' (Johns Hopkins UP, 2018); Looney and Yannelis, 'A Crisis in Student Loans?' Brookings Papers on Economic Activity (2015); Cellini and Turner, 'Gainfully Employed? Assessing the Employment and Earnings of For-Profit College Students,' Journal of Human Resources (2019)",
    conditions: [
      { q: "student_debt", a: "yes" },
      { q: "campaign_donations_corps", a: "yes" }
    ]
  },

  {
    id: "qualified_immunity_no_social_media_reg",
    title: "Government Accountability and Government Power",
    body: "You oppose qualified immunity for police officers and you support government regulation of social media platforms to prevent misinformation. Qualified immunity is a judicial doctrine that shields government officials from civil liability for constitutional violations unless a nearly identical prior case put the violation 'beyond debate.' You oppose it because it removes accountability for government officials who abuse their power. Social media regulation gives government authority to define what categories of content platforms must restrict, with penalties for platforms that fail to comply adequately. You want to reduce the power of government actors to operate without accountability for how they use their power over individuals, and you want to expand the power of government to define what information private companies may distribute. In both cases, government is the actor whose relationship to individuals is being defined. In the qualified immunity case, you want to constrain government and create individual recourse against it. In the social media case, you want to expand government and reduce individual recourse against its content determinations. The same concern about unaccountable power being exercised over individuals without meaningful recourse applies to both: under current doctrine, victims of police misconduct have little recourse; under government content regulation, users whose speech is suppressed pursuant to government mandates have limited recourse against either the platform or the government.",
    source: "Pearson v. Callahan, 555 U.S. 223 (2009); Baude, 'Is Qualified Immunity Unlawful?,' California Law Review (2018); Moody v. NetChoice, LLC, 603 U.S. 707 (2024)",
    conditions: [
      { q: "qualified_immunity", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "civil_asset_forfeiture_no_social_media_reg",
    title: "Government Seizure of Property, Two Kinds",
    body: "You oppose allowing law enforcement to permanently seize property from people who have not been convicted, and you support government regulation of social media platforms to limit misinformation. Civil asset forfeiture allows government to take private property without criminal conviction, requiring owners to prove their property is innocent rather than requiring government to prove a crime. You oppose this because it inverts the presumption of innocence and allows government to seize property without due process. Government social media content regulation requires platforms to remove content the government classifies as misinformation, on threat of penalty. In both cases, government is claiming authority to take something (physical property or speech distribution) based on a determination it makes without requiring full adversarial process. The owner of seized property faces a bureaucratic process to recover it that often costs more than the seized amount. A speaker whose content is removed pursuant to government mandate faces a platform appeals process designed to satisfy the regulating government, not the user. You find warrantless property seizure objectionable and content-based speech regulation acceptable. The structural parallel is the same: government determination, applied without conviction or full due process, strips an individual of something they previously held.",
    source: "Institute for Justice, 'Policing for Profit' (2020); Carpenter v. United States, 585 U.S. 296 (2018); Moody v. NetChoice, LLC, 603 U.S. 707 (2024)",
    conditions: [
      { q: "civil_asset_forfeiture", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "racial_disparity_carbon_tax_no",
    title: "Environmental Harm and Who Bears It",
    body: "You believe racial disparities in drug enforcement and criminal sentencing are a serious problem and you oppose a carbon tax on emissions. Environmental justice research has documented that communities of color in the United States bear disproportionate pollution burdens: a 2018 study in the American Journal of Public Health found that Black Americans are exposed to particulate matter at levels 56% higher than their consumption patterns would predict, and Hispanic Americans at 63% higher. Fossil fuel combustion produces both the carbon emissions that drive global warming and the local air pollutants (nitrogen oxides, particulate matter, ozone precursors) that concentrate in low-income urban neighborhoods near highways, refineries, and power plants. A carbon tax would, by raising the cost of fossil fuel combustion, produce a health dividend concentrated in the communities most exposed to local air pollution. The standard distributional objection to a carbon tax is that energy costs represent a higher share of low-income household budgets; this is real, and carbon tax proposals commonly address it through revenue-neutral dividend rebates. The distributional concern that animates your view on criminal justice (government processes produce outcomes that fall disproportionately on communities of color) also applies to the environmental status quo you are declining to change.",
    source: "Tessum et al., 'Inequity in Consumption of and Health Responses to Air Pollution in the United States,' PNAS (2019); EPA, 'Environmental Justice and the Distributional Impacts of Carbon Pricing' (2021); Williams et al., 'The Initial Incidence of a Carbon Tax Across Income Groups,' National Tax Journal (2015)",
    conditions: [
      { q: "racial_disparity_concern", a: "yes" },
      { q: "carbon_tax", a: "no" }
    ]
  },

  {
    id: "eminent_domain_yes_patent_term",
    title: "Government Granting and Taking Property Rights",
    body: "You support allowing the government to seize private property and transfer it to private developers for commercial economic development, and you support maintaining current pharmaceutical patent protections. Both positions involve government determining who holds exclusive property rights, and on what terms. Eminent domain transfers property from one private owner to a different private owner or developer, with government determining that the new owner's use justifies the taking. Patent protections confer on pharmaceutical companies an exclusive government-enforced monopoly for up to 20 years, preventing others from manufacturing equivalent products regardless of their own research. In Kelo v. City of New London (2005), the Supreme Court held that economic development qualifies as 'public use' justifying eminent domain, allowing governments to transfer property from individual owners to developers expected to generate more tax revenue. The same logic that allows government to determine that a corporation's use of property (a development project) justifies displacing an individual's prior property rights also grounds the pharmaceutical patent regime: government has determined that a corporation's intended use (commercializing drug research) justifies displacing the general public's right to produce equivalent medicines. You accept the government's authority to define property rights in ways that transfer value from individuals to corporations in both domains.",
    source: "Kelo v. City of New London, 545 U.S. 469 (2005); Hatch-Waxman Act, Pub. L. 98-417 (1984); Epstein, 'Takings: Private Property and the Power of Eminent Domain' (Harvard University Press, 1985)",
    conditions: [
      { q: "eminent_domain", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "free_college_campaign_finance_no",
    title: "Funding the Sector That Funds the Campaign",
    body: "You support the federal government paying for college tuition and you oppose stricter limits on how much institutions and organizations can spend on political campaigns. Higher education institutions and their associated lobbying organizations, including the American Council on Education, NASPA, and affiliated faculty and student associations, spent over $120 million on federal lobbying between 2010 and 2022. The for-profit college sector spent tens of millions more defending federal tuition assistance programs that flowed directly to their revenue. The expansion of federal Pell grants, student loan maximums, and direct subsidies for universities has tracked closely with the growth of higher education political spending over the same period. If you oppose campaign finance limits, you support the political mechanism through which institutions that would directly receive free college funding can most effectively advocate for free college funding. Universities are not disinterested parties in the policy debate about government tuition support: their revenue, faculty salaries, administrative budgets, and institutional expansion depend on enrollment numbers and per-student subsidies. You want the government to fund them and you oppose the only framework that would limit their ability to spend on ensuring the government does.",
    source: "OpenSecrets.org, education sector lobbying data; Kantrowitz, 'The Evolution of Student Aid Policy,' in 'Bridging the Higher Education Divide' (2013); Looney and Yannelis, 'A Crisis in Student Loans?' Brookings Papers on Economic Activity (2015)",
    conditions: [
      { q: "free_college", a: "yes" },
      { q: "campaign_finance_limit", a: "no" }
    ]
  },

  {
    id: "racial_disparity_concern_gun_control_no",
    title: "Racial Disparities in Enforcement: Which Ones Count",
    body: "You are concerned about racial disparities in drug enforcement and criminal sentencing, and you oppose additional gun control laws. Gun laws are enforced at substantially different rates across racial groups. NAACP and ACLU data show Black Americans are significantly more likely to be stopped, searched, and charged in gun interdiction contexts than white Americans even controlling for area crime rates. New York City's stop-and-frisk program, struck down in Floyd v. City of New York (2013) as unconstitutional, was premised on weapon interdiction and was applied overwhelmingly to Black and Latino men: of 685,000 stops in 2011, over 88% were people of color, and fewer than 1% yielded illegal guns. The enforcement of illegal gun possession charges follows patterns similar to drug enforcement: Black Americans constitute a disproportionate share of those charged with illegal firearms possession relative to their share of gun owners. Additional gun restrictions create additional categories of violation that can be enforced at whatever rate enforcement agencies choose. The concern about disparate enforcement you apply to drug laws generalizes directly to gun laws. The racial disparity in criminal justice that you find serious does not appear to depend on the specific category of law being enforced.",
    source: "Floyd v. City of New York, 959 F. Supp. 2d 540 (S.D.N.Y. 2013); ACLU, 'The War on Marijuana in Black and White' (2013); NAACP, 'Criminal Justice Fact Sheet'; Beckett, Nyrop, and Pfingst, 'Race, Drugs, and Policing,' Criminology (2006)",
    conditions: [
      { q: "racial_disparity_concern", a: "yes" },
      { q: "gun_control_more", a: "no" }
    ]
  },

  {
    id: "campaign_donations_corps_climate_reg",
    title: "The Industry That Blocks the Regulations You Want",
    body: "You support corporations and organizations being able to spend freely on political campaigns, and you support increased government regulation to address climate change. Climate regulations, whether emissions standards, cap-and-trade systems, or direct limits on industrial processes, face the most sustained and well-funded opposition from the industries they would directly affect: oil and gas companies, utilities, and automotive manufacturers. The American Petroleum Institute, ExxonMobil, Chevron, and affiliated organizations have spent billions of dollars on political contributions, lobbying, and funded research to delay, weaken, and reverse climate regulations over three decades. Supran, Rahmstorf, and Oreskes documented in Science (2023) that ExxonMobil's own scientists projected global warming with high accuracy since the 1970s while the company funded external doubt campaigns. The Citizens United decision (2010) that you implicitly support by opposing restrictions on corporate spending removed previous limits on these expenditures. From 2012 to 2022, fossil fuel interests spent over $1 billion on federal lobbying alone. You want climate regulations enacted through the political process that the industries most opposed to those regulations have spent the most to influence.",
    source: "Supran, Rahmstorf, Oreskes, 'Assessing ExxonMobil's Climate Change Communications,' Science (2023); Citizens United v. FEC, 558 U.S. 310 (2010); OpenSecrets.org, oil and gas sector lobbying and contributions data (2012-2022)",
    conditions: [
      { q: "campaign_donations_corps", a: "yes" },
      { q: "climate_reg_increase", a: "yes" }
    ]
  },

  {
    id: "campaign_finance_no_nuclear_power_no",
    title: "The Lobby That Spent to Kill Nuclear",
    body: "You oppose stricter limits on corporate campaign spending and you oppose expanding nuclear power generation. Natural gas companies have been among the most aggressive funders of campaigns against nuclear power expansion. When nuclear plants have faced closure or license renewal challenges, it has frequently been natural gas producers and utilities with gas generation assets that funded opposition campaigns: nuclear's primary competitive threat is to gas-fired generation, since both provide baseload capacity. The closure of the Diablo Canyon plant in California in 2025 occurred after a years-long opposition campaign partially funded by natural gas interests; similar dynamics played out with closures in New York, Ohio, and Illinois before those states reversed course with zero-emission credits. The Institute for Energy Research, funded partly by fossil fuel companies, has been a consistent voice against nuclear subsidies and for nuclear closure. You support the political mechanism that nuclear's most commercially motivated opponents have used to make nuclear power politically untenable, and you have arrived at the position they spent to produce.",
    source: "Plumer, 'Why California is Closing Its Last Nuclear Plant,' NYT (May 10, 2023); Hakim and Lipton, 'Power Struggle,' NYT (June 25, 2017); DOE, 'Preventing the Premature Retirement of Nuclear Power Plants' (2018)",
    conditions: [
      { q: "campaign_finance_limit", a: "no" },
      { q: "nuclear_power", a: "no" }
    ]
  },

  {
    id: "drug_war_effective_patent_term",
    title: "Government Authority Over Drug Markets, Selectively",
    body: "You believe the War on Drugs has been effective at reducing drug use, and you support maintaining pharmaceutical patent protections. Both positions require substantial trust in government authority over drug markets, but the trust is applied asymmetrically. Drug prohibition holds that government can legitimately determine which substances may not be sold or consumed regardless of demand, and that prohibition produces less harm than legalization would. Pharmaceutical patent protection holds that government can legitimately grant private companies exclusive monopoly rights to sell medically necessary substances at prices above competitive market levels, and that this arrangement produces more beneficial drug development than open competition would. In both cases, government decides who may produce and sell drugs, at what prices, and under what conditions. The populations affected are different: drug prohibition law enforcement falls disproportionately on communities of color; pharmaceutical monopoly pricing falls disproportionately on the uninsured and underinsured. Dean Baker estimates pharmaceutical monopoly patents cost American consumers approximately $400 billion annually above competitive pricing. The institutional arrangement you trust to successfully prohibit harmful drugs is the same institution you trust to successfully grant and enforce monopoly rights to beneficial drugs.",
    source: "Baker, 'Rigged' (CEPR, 2016); National Drug Control Strategy, annual reports; Kaiser Family Foundation, prescription drug pricing and access surveys; DOJ, drug enforcement statistics",
    conditions: [
      { q: "drug_war_effective", a: "yes" },
      { q: "patent_term", a: "yes" }
    ]
  },

  {
    id: "private_prisons_no_social_media_reg",
    title: "Government Functions Outsourced to Private Companies",
    body: "You oppose private for-profit prisons and you support government regulation requiring social media platforms to suppress misinformation. Both positions involve government decisions about when to delegate what are fundamentally governmental functions to private companies. You oppose private prisons on the grounds that incarcerating people is inherently a governmental function: the power to remove liberty should not be operated by companies whose financial interest is in maintaining high incarceration rates and low operating costs per prisoner. You support government mandating that private platforms perform content moderation functions defined by government: the decision about which speech is harmful enough to suppress is exercised by private companies on government's behalf. In both cases, government defines the category of action (imprisonable offense; prohibited content), and a private company is the operational instrument. The objection to private prisons applies with some force to government-mandated content moderation: private companies acting under government direction are not more neutral or accountable than government acting directly; they have their own financial interests in compliance, and their enforcement is less transparent than government enforcement would be. Government-outsourced content moderation concentrates enormous power in the companies designated to perform it while diffusing the accountability for how that power is exercised.",
    source: "Harding, Hillman, Moschella, 'The Case Against Private Prisons,' Fordham Urban Law Journal (2001); Moody v. NetChoice, LLC, 603 U.S. 707 (2024); Wu, 'Is the First Amendment Obsolete?' Columbia Law Review (2018)",
    conditions: [
      { q: "private_prisons", a: "no" },
      { q: "social_media_reg", a: "yes" }
    ]
  },

  {
    id: "green_subsidies_no_immigration_labor_no",
    title: "Market Forces, Applied to Some Markets",
    body: "You oppose government subsidies that advantage renewable energy companies in the energy market, and you oppose expanding work visas for foreign workers. In the energy market, your argument is that government should not tilt the playing field: if renewable energy is economically viable, it will win on its own terms, and subsidies introduce political distortion, rent-seeking, and misallocation of capital. In the labor market, your argument is that government may restrict who can legally participate: visa caps limit the supply of available workers, raising wages above what market wages would be with unrestricted labor mobility. Both are government interventions in markets. In energy, government intervention favors renewable producers over fossil fuel producers; in labor, government intervention favors domestic workers over foreign workers. If your objection to green subsidies is that government should not pick winners in markets, the objection applies to the labor market: visa restrictions pick domestic workers as the winners over equally qualified foreign workers. If your objection is specifically to subsidizing corporations rather than to market intervention per se, then you hold a position about the target of intervention (corporations vs. workers) rather than a position about intervention itself.",
    source: "Borjas, 'Immigration and the American Worker' (CIS, 2013); Friedman, 'Capitalism and Freedom,' Ch. 9 (1962); Pew Research Center, 'U.S. immigrants and their descendants' economic outcomes'",
    conditions: [
      { q: "green_subsidies", a: "no" },
      { q: "immigration_labor", a: "no" }
    ]
  }

];
