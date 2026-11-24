/**
 * All news articles, shared by the homepage NewsSection cards and the
 * ArticlePage route (/news/:slug).
 *
 * Card fields:    slug, section, date, category, headline, snippet, postLabel
 * Article fields: author, intro, byLine, toLine, bodyParagraphs, note, tags
 * Listing filters: filters = { communicationType, category, department,
 *                  productLine? } — values match the NewsListingPage filter
 *                  options. The "date" filter is derived from `date`.
 *
 * `section` decides which homepage column the card appears in:
 * "company" (Mozde News), "newswire" (Newswire), or "newsroom" (only on
 * the /news listing page). Every article appears on the listing page.
 * A body paragraph made of "- " lines renders as a simple list.
 */
export const articles = [
  // ── Mozde News ────────────────────────────────────────────────────────
  {
    slug: "special-edition-company-town-hall",
    filters: { communicationType: "broadcast", category: "town-halls", department: "hr-facilities" },
    section: "company",
    date: "Feb 16, 2024",
    category: "HR, Facilities & Admin",
    headline: "Special Edition Company Town Hall: 02/08/24",
    snippet:
      "Please join us for a special edition virtual town hall. During this meeting we'll be sharing the results and insights from the latest employee survey.",
    postLabel: "Broadcast",
    author: "Mozde Broadcast",
    intro:
      "Please join us for a special edition virtual town hall. During this meeting we'll be sharing the results and insights from the latest employee survey, along with the actions leadership is committing to over the coming year.",
    byLine: "Taylor Brooks, Vice President, Human Resources",
    toLine: "All Mozde North America Employees",
    bodyParagraphs: [
      "Thank you to everyone who took part in this year's employee survey. We received a record level of participation, and your feedback gives us a clear picture of what is working well and where we need to improve.",
      "During the town hall, the leadership team will walk through the key themes from the survey and share the first steps we're taking in response. The agenda includes:",
      "- Survey results overview\n- Key themes: growth, recognition and collaboration\n- Leadership action plan for the year ahead\n- Live Q&A with the executive team",
      "The session will be streamed live, and a link will be sent to your calendar. If you have a question you'd like answered, please submit it in advance through the town hall question form. Anonymous questions are welcome.",
      "A recording will be made available on the intranet for anyone unable to attend live.",
    ],
    note: "Note: please join from a quiet location and keep your microphone muted during the presentation.",
    tags: ["MOZDE BROADCAST", "TOWN HALL", "HR, FACILITIES & ADMIN"],
  },
  {
    slug: "employee-news",
    filters: { communicationType: "broadcast", category: "employee-announcements", department: "hr-facilities" },
    section: "company",
    date: "Feb 16, 2024",
    category: "HR, Facilities & Admin",
    headline: "Employee News",
    snippet: "Welcome to the following employees who recently joined the team this month.",
    postLabel: "Broadcast",
    author: "Mozde Broadcast",
    intro:
      "Welcome to the following employees who recently joined the team this month. Please join us in giving them a warm welcome as they settle into their new roles.",
    byLine: "Human Resources",
    toLine: "All Mozde North America Employees",
    bodyParagraphs: [
      "This month we're pleased to welcome new team members across several departments:",
      "- Alex Rivera, Analyst, Sales Operations\n- Sam Patel, Engineer, Product Quality\n- Morgan Chen, Specialist, Customer Experience\n- Riley Nguyen, Coordinator, Marketing",
      "We also want to recognize the colleagues celebrating work anniversaries this month. Your dedication and experience help make our company a great place to work.",
      "If you see a new face in the office, please take a moment to say hello and help them feel at home.",
    ],
    note: null,
    tags: ["MOZDE BROADCAST", "EMPLOYEE NEWS", "HR, FACILITIES & ADMIN"],
  },
  {
    slug: "presidents-club-winners-announcement",
    filters: { communicationType: "field-partner", category: "awards", department: "executive-team" },
    section: "company",
    date: "Feb 13, 2024",
    category: "Executive Team",
    headline: "President's Club Winners Announcement",
    snippet:
      "On behalf of the entire team, we are excited to announce the winners of this year's President's Club.",
    postLabel: "Field & Dealer Comms.",
    author: "Executive Team",
    intro:
      "On behalf of the entire team, we are excited to announce the winners of this year's President's Club, recognizing the dealer partners who delivered outstanding results and customer experiences over the past year.",
    byLine: "Office of the President",
    toLine: "All Mozde North America Employees and Dealer Partners",
    bodyParagraphs: [
      "President's Club is our highest honor for dealer partners. Winners are selected based on sales performance, customer satisfaction scores and their commitment to the brand experience.",
      "This year's winners demonstrated exceptional leadership in their communities and consistently went above and beyond for their customers. A full list of winning dealerships is available on the dealer portal.",
      "Winners will be celebrated at the annual President's Club event later this year, where they will be recognized by the executive team.",
      "Congratulations to all of this year's winners, and thank you to every team member who supported our dealer partners along the way.",
    ],
    note: null,
    tags: ["EXECUTIVE TEAM", "FIELD & DEALER COMMS.", "RECOGNITION"],
  },
  {
    slug: "knowledge-center-homepage-update",
    filters: { communicationType: "field-partner", category: "company-update", department: "marketing-pr-cec" },
    section: "company",
    date: "Feb 12, 2024",
    category: "Marketing, PR & CEC",
    headline: "Knowledge Center Homepage Update",
    snippet:
      "We're thrilled to unveil a revamped Knowledge Center, now optimized for an even more user-friendly experience.",
    postLabel: "Field & Dealer Comms.",
    author: "Marketing, PR & CEC",
    intro:
      "We're thrilled to unveil a revamped Knowledge Center, now optimized for an even more user-friendly experience. The new homepage makes it faster to find the resources you use most.",
    byLine: "Casey Morgan, Senior Manager, Marketing Knowledge Center",
    toLine: "All Mozde North America Employees and Field Teams",
    bodyParagraphs: [
      "Based on your feedback, we've redesigned the Knowledge Center homepage around the tasks people perform most often. Highlights of the update include:",
      "- A new search bar that covers all documents and training materials\n- Quick links to popular resources\n- A \"What's New\" section featuring the latest updates\n- Improved navigation on mobile devices",
      "All of your existing bookmarks and saved documents will continue to work. If you notice anything missing or have suggestions for further improvements, please use the feedback button at the bottom of the page.",
    ],
    note: null,
    tags: ["MARKETING, PR & CEC", "KNOWLEDGE CENTER", "FIELD & DEALER COMMS."],
  },

  // ── Newswire ──────────────────────────────────────────────────────────
  {
    slug: "latest-suv-launch-draws-competitive-attention",
    filters: { communicationType: "all", category: "product-updates", department: "marketing-pr-cec", productLine: "model-b" },
    section: "newswire",
    date: "Feb 07, 2024",
    category: "Industry Press",
    headline: "Latest SUV Launch Draws Competitive Attention",
    snippet:
      "The newest SUV in the lineup debuted last week, delivering dealerships and customers a gap-filling model for the segment.",
    postLabel: "Company News",
    author: "Industry Press",
    intro:
      "The newest SUV in the lineup debuted last week, delivering dealerships and customers a gap-filling model for the segment. Industry observers say the launch puts new pressure on competing models.",
    byLine: null,
    toLine: null,
    bodyParagraphs: [
      "The new model slots between existing compact and mid-size offerings, giving buyers more choice on size, price and features. Early reviews have praised its interior quality and driving dynamics.",
      "Analysts note that the segment is one of the most competitive in the market, and that a well-positioned entry could win customers from established rivals.",
      "Dealers report strong early interest, with test-drive requests rising in the weeks following the debut.",
    ],
    note: null,
    tags: ["INDUSTRY PRESS", "COMPANY NEWS", "PRODUCT LAUNCH"],
  },
  {
    slug: "industry-watchdog-raises-questions-over-autonomous-pilot",
    filters: { communicationType: "all", category: "company-update", department: "legal" },
    section: "newswire",
    date: "Feb 07, 2024",
    category: "Industry Press",
    headline: "Industry Watchdog Raises Questions Over Autonomous Pilot",
    snippet:
      "A regional regulator this week raised concerns over a rival automaker's autonomous vehicle pilot program following a public hearing.",
    postLabel: "Industry News",
    author: "Industry Press",
    intro:
      "A regional regulator this week raised concerns over a rival automaker's autonomous vehicle pilot program following a public hearing on safety reporting and public road testing.",
    byLine: null,
    toLine: null,
    bodyParagraphs: [
      "The regulator questioned how incidents during the pilot were reported and asked for more detail on the safety measures used during public road testing.",
      "The automaker said it would cooperate fully with the review and remains committed to safe deployment of the technology.",
      "Industry experts expect closer oversight of autonomous programs across the sector as more pilots move onto public roads.",
    ],
    note: null,
    tags: ["INDUSTRY PRESS", "INDUSTRY NEWS", "AUTONOMOUS VEHICLES"],
  },
  {
    slug: "engineering-team-explores-alternative-engine-platform",
    filters: { communicationType: "all", category: "product-updates", department: "strategic-planning", productLine: "model-c" },
    section: "newswire",
    date: "Feb 06, 2024",
    category: "Industry Press",
    headline: "Engineering Team Explores Alternative Engine Platform",
    snippet:
      "The engineering division has been exploring a revival of an alternative engine platform, continuing a long tradition of unconventional design choices.",
    postLabel: "Company News",
    author: "Industry Press",
    intro:
      "The engineering division has been exploring a revival of an alternative engine platform, continuing a long tradition of unconventional design choices that set the brand apart.",
    byLine: null,
    toLine: null,
    bodyParagraphs: [
      "According to industry reports, engineers are studying whether a compact alternative engine could serve as a range extender for future electrified models.",
      "The approach could offer a smaller, lighter package than a conventional engine while reducing emissions when paired with an electric drivetrain.",
      "The company has not announced production plans, but says it continues to invest in a range of powertrain technologies.",
    ],
    note: null,
    tags: ["INDUSTRY PRESS", "COMPANY NEWS", "ENGINEERING"],
  },
  {
    slug: "industry-rethinks-ev-battery-strategy",
    filters: { communicationType: "all", category: "company-update", department: "strategic-planning" },
    section: "newswire",
    date: "Feb 06, 2024",
    category: "Industry Press",
    headline: "Industry Rethinks EV Battery Strategy",
    snippet:
      "Several manufacturers are reassessing their electric vehicle strategies, including the need for vertical integration of battery production.",
    postLabel: "Industry News",
    author: "Industry Press",
    intro:
      "Several manufacturers are reassessing their electric vehicle strategies, including the need for vertical integration of battery production, as demand and raw material costs shift.",
    byLine: null,
    toLine: null,
    bodyParagraphs: [
      "Some automakers are investing in their own battery plants to secure supply and control costs, while others are relying on partnerships with established battery suppliers.",
      "Analysts say there is no single right answer, and that flexibility will be key as battery chemistry and manufacturing technology continue to evolve.",
      "The debate is expected to shape investment decisions across the industry over the next several years.",
    ],
    note: null,
    tags: ["INDUSTRY PRESS", "INDUSTRY NEWS", "ELECTRIFICATION"],
  },

  // ── Newsroom only (listing page) ──────────────────────────────────────
  {
    slug: "new-model-launch-design-walkthrough",
    filters: { communicationType: "all", category: "product-updates", department: "marketing-pr-cec", productLine: "model-a" },
    section: "newsroom",
    date: "Jan 26, 2025",
    category: "Marketing, PR & CEC",
    headline: "New Model Launch — Design Walkthrough",
    snippet:
      "As our newest model rollout continues, our interior design lead examines what gives the vehicle its distinct presence, inside and out.",
    postLabel: "All Employees",
    author: "Marketing, PR & CEC",
    intro:
      "As our newest model rollout continues, our interior design lead examines what gives the vehicle its distinct presence, inside and out.",
    byLine: "Avery Kim, Lead Designer, Interior Design",
    toLine: "All Mozde North America Employees",
    bodyParagraphs: [
      "Every design decision on the new model started with a simple question: how should the driver feel the moment they open the door? The answer shaped everything from the seating position to the materials on the dashboard.",
      "The walkthrough covers three areas the design team is especially proud of:",
      "- A clean, driver-focused cockpit with fewer, better-placed controls\n- Natural materials and a new signature interior color\n- An exterior profile that balances strong proportions with simple surfaces",
      "The full walkthrough video is available in the Marketing Knowledge Center, and showroom display guides have been shared with dealer partners.",
    ],
    note: null,
    tags: ["MARKETING, PR & CEC", "PRODUCT UPDATES & LAUNCHES", "MODEL A"],
  },
  {
    slug: "employee-appreciation-week-schedule",
    filters: { communicationType: "broadcast", category: "employee-appreciation", department: "hr-facilities" },
    section: "newsroom",
    date: "Mar 3, 2025",
    category: "HR, Facilities & Admin",
    headline: "Employee Appreciation Week Schedule",
    snippet:
      "Join us across all sites for a week of employee appreciation events, including giveaways, lunches, and recognition awards.",
    postLabel: "All Employees",
    author: "Mozde Broadcast",
    intro:
      "Join us across all sites for a week of employee appreciation events, including giveaways, lunches, and recognition awards. It's our way of saying thank you for everything you do.",
    byLine: "Human Resources",
    toLine: "All Mozde North America Employees",
    bodyParagraphs: [
      "Here's what's happening each day of Employee Appreciation Week:",
      "- Monday: Welcome breakfast at all sites\n- Tuesday: Wellness day with on-site activities\n- Wednesday: Team lunch hosted by department leaders\n- Thursday: Giveaways and prize drawings\n- Friday: Recognition awards and closing celebration",
      "Remote employees will receive a gift card and can join the Friday celebration online. Watch your inbox for the event links.",
    ],
    note: "Note: please let your site coordinator know about any dietary requirements by the end of this week.",
    tags: ["MOZDE BROADCAST", "EMPLOYEE APPRECIATION", "HR, FACILITIES & ADMIN"],
  },
  {
    slug: "vintage-car-enthusiast-meetup",
    filters: { communicationType: "broadcast", category: "events", department: "marketing-pr-cec" },
    section: "newsroom",
    date: "Jun 14, 2024",
    category: "Marketing, PR & CEC",
    headline: "Vintage Car Enthusiast Meetup",
    snippet:
      "We're participating again this year with a selection of heritage models on display, including a couple of retired motorsport cars.",
    postLabel: "All Employees",
    author: "Mozde Broadcast",
    intro:
      "The Vintage Car Enthusiast Meetup takes place this fall at a public waterfront park. We'll be participating again this year with a selection of heritage models on display, including a couple of retired motorsport cars.",
    byLine: "Jordan Lee, Program Manager, Brand Experience & Casey Morgan, Senior Manager, Motorsports",
    toLine: "All Mozde North America Employees",
    bodyParagraphs: [
      "We encourage all local employees to attend in support of the brand. If you are interested in attending, please contact Jordan Lee by the sign-up deadline. Complimentary admissions will be limited to two per person and distributed on a first come, first served basis.",
      "If you are interested in volunteering, please contact Jordan Lee by the sign-up deadline. Volunteers will talk to visitors at our booth and receive breakfast (morning shift) and lunch (both shifts). The following times are available:",
      "- Saturday morning shift, 8:30 AM – 12 PM\n- Saturday afternoon shift, 12 PM – 3 PM",
      "For more information about the event, please visit the event website.",
    ],
    note: "Note: as an employee, you are a representative of the brand.",
    tags: ["MOZDE BROADCAST", "EVENTS", "MARKETING, PR & CEC"],
  },
  {
    slug: "a-message-from-leadership",
    filters: { communicationType: "all", category: "executive-messages", department: "executive-team" },
    section: "newsroom",
    date: "Sep 2, 2024",
    category: "Executive Team",
    headline: "A Message From Leadership",
    snippet:
      "Our CEO shares an update on this year's progress, upcoming priorities, and thanks to everyone across the business.",
    postLabel: "All Employees",
    author: "Executive Team",
    intro:
      "Our CEO shares an update on this year's progress, upcoming priorities, and thanks to everyone across the business.",
    byLine: "Office of the CEO",
    toLine: "All Mozde North America Employees and Dealer Partners",
    bodyParagraphs: [
      "As we pass the midpoint of the year, I want to thank every one of you for your hard work. Together we've launched new products, strengthened our dealer network and improved the experience we offer our customers.",
      "Looking ahead, our priorities for the rest of the year are:",
      "- Delivering a smooth launch for our newest models\n- Continuing to improve customer satisfaction\n- Investing in training and development for our teams",
      "I'm proud of what we've achieved so far and confident in what's ahead. Thank you for everything you do.",
    ],
    note: null,
    tags: ["EXECUTIVE TEAM", "EXECUTIVE MESSAGES"],
  },
  {
    slug: "scheduled-systems-maintenance-notice",
    filters: { communicationType: "all", category: "policy-updates", department: "it" },
    section: "newsroom",
    date: "Nov 18, 2023",
    category: "Information Technology (IT)",
    headline: "Scheduled Systems Maintenance Notice",
    snippet:
      "Several internal systems will be offline for scheduled maintenance this weekend. Please save your work in advance.",
    postLabel: "All Employees",
    author: "Information Technology (IT)",
    intro:
      "Several internal systems will be offline for scheduled maintenance this weekend. Please save your work in advance.",
    byLine: "IT Service Desk",
    toLine: "All Mozde North America Employees",
    bodyParagraphs: [
      "Maintenance will run from Saturday 10 PM to Sunday 6 AM (PST). During this window, the following systems will be unavailable:",
      "- Email and calendar on the web\n- The employee intranet\n- Expense and travel booking tools",
      "Please save and close any open documents before you log off on Friday. If you experience any issues after the maintenance window, contact the IT Service Desk.",
    ],
    note: null,
    tags: ["INFORMATION TECHNOLOGY (IT)", "POLICY UPDATES"],
  },
  {
    slug: "training-catalogue-now-available",
    filters: { communicationType: "field-partner", category: "training", department: "retail-operations" },
    section: "newsroom",
    date: "Feb 9, 2023",
    category: "Retail Operations",
    headline: "Training Catalogue Now Available",
    snippet:
      "The updated training catalogue is live, with new modules covering product knowledge, sales process, and customer experience.",
    postLabel: "All Employees",
    author: "Retail Operations",
    intro:
      "The updated training catalogue is live, with new modules covering product knowledge, sales process, and customer experience.",
    byLine: "Retail Operations Training Team",
    toLine: "All Mozde North America Employees and Field Teams",
    bodyParagraphs: [
      "The new catalogue brings all of our courses together in one place, so it's easier to find the training that fits your role. New modules this year include:",
      "- Product knowledge for the latest model lineup\n- An updated sales process course\n- Customer experience essentials",
      "All courses are available online and can be completed at your own pace. Speak with your manager about which modules are recommended for your role.",
    ],
    note: null,
    tags: ["RETAIL OPERATIONS", "TRAINING"],
  },
];

/** Link target for an article page. */
export function articlePath(slug) {
  return `/news/${slug}`;
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export const companyNews = articles.filter((a) => a.section === "company");
export const newswire = articles.filter((a) => a.section === "newswire");
