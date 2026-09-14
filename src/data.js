// All client-supplied content lives here so copy changes never touch components.

export const COMPANY = {
  legalName: 'WellMart Winners Club LLP',
  addressLines: ['Golden Arcade Building, 2nd Floor', 'New Bus Stand, Kasaragod', 'Kerala 671121, India'],
  phone: '+919061133123',
  phoneDisplay: '+91 90611 33123',
  email: 'wellmartwinnersclub@gmail.com',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Golden+Arcade+Building+New+Bus+Stand+Kasaragod+Kerala+671121',
};

const whatsapp = (text) => `https://wa.me/919061133123?text=${encodeURIComponent(text)}`;
export const SHOP_LINK = whatsapp('Hi WellMart, I want to know about furniture and electronics');
export const EMI_LINK = whatsapp('Hi WellMart, I want to ask about monthly payments');
export const JOIN_LINK = whatsapp('Hi WellMart, I want to join the Winners Club');
export const FULL_PAY_LINK = whatsapp('Hi WellMart, I want to pay the full ₹2,000 for the Winners Club');

export const MONTHLY_FEE = 500;
export const MONTH_COUNT = 4;
export const PLAN_TOTAL = MONTHLY_FEE * MONTH_COUNT;
export const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`;

const PRIZE = {
  gold: { icon: 'coin', name: '1 Gram Gold Coin' },
  phone5g: { icon: 'mobile', name: '5G Mobile Phone' },
  tablet: { icon: 'tablet', name: 'Android Tablet' },
  cash: { icon: 'cash', name: '₹10,000 Cash Prize' },
  kit: { icon: 'appliance', name: 'Home Appliances Kit' },
  scooter: { icon: 'scooter', name: 'Electric Scooter' },
};
const prize = (p, winners = 5) => ({ ...p, winners });

export const MONTHS = [
  {
    id: 1,
    label: 'Month 1',
    headline: { icon: 'iphone', kicker: 'Headline prize', name: 'iPhone 18 Pro', winners: 1 },
    prizes: [prize(PRIZE.gold), prize(PRIZE.phone5g), prize(PRIZE.tablet), prize(PRIZE.cash), prize(PRIZE.kit)],
  },
  {
    id: 2,
    label: 'Month 2',
    headline: { icon: 'iphone', kicker: 'Headline prize', name: 'iPhone 17 Pro', winners: 1 },
    prizes: [prize(PRIZE.gold), prize(PRIZE.phone5g), prize(PRIZE.cash), prize(PRIZE.kit)],
  },
  {
    id: 3,
    label: 'Month 3',
    headline: { icon: 'iphone', kicker: 'Headline prize', name: 'iPhone 17 Pro', winners: 1 },
    prizes: [prize(PRIZE.gold), prize(PRIZE.tablet), prize(PRIZE.phone5g), prize(PRIZE.cash), prize(PRIZE.kit)],
  },
  {
    id: 4,
    label: 'Month 4 · Bumper',
    bumper: true,
    headline: {
      icon: 'house',
      kicker: 'Bumper prize · your choice',
      name: 'A House',
      alt: 'Mahindra Thar',
      winners: 1,
      note: '1 winner chooses',
    },
    prizes: [
      prize(PRIZE.scooter, 1),
      prize(PRIZE.gold),
      prize(PRIZE.phone5g),
      prize(PRIZE.cash),
      prize(PRIZE.tablet),
      prize(PRIZE.kit),
    ],
  },
];

export const monthWinners = (m) => m.headline.winners + m.prizes.reduce((sum, p) => sum + p.winners, 0);
export const TOTAL_WINNERS = MONTHS.reduce((sum, m) => sum + monthWinners(m), 0);

export const TICKER = [
  'iPhone 18 Pro',
  '1 Gram Gold Coin',
  '5G Mobile Phone',
  'Android Tablet',
  '₹10,000 Cash',
  'Home Appliances Kit',
  'Electric Scooter',
  'House or Mahindra Thar',
  `${TOTAL_WINNERS} Winners`,
];

export const STEPS = [
  {
    icon: 'card',
    title: `Join and pay ${formatINR(MONTHLY_FEE)} a month`,
    body: `Pay only through WellMart's officially authorised account. Four payments of ${formatINR(MONTHLY_FEE)} complete the ${formatINR(PLAN_TOTAL)} plan.`,
    tag: `${formatINR(MONTHLY_FEE)} × ${MONTH_COUNT} months`,
  },
  {
    icon: 'play',
    title: 'Watch the live draw every month',
    body: 'Draws happen at the WellMart office in front of participants and the public, and are broadcast on YouTube Live.',
    tag: 'Public draw · YouTube Live',
  },
  {
    icon: 'trophy',
    title: 'Collect your prize',
    body: 'Winners are announced on WhatsApp and Instagram. Complete all four payments to stay eligible for every benefit.',
    tag: `${TOTAL_WINNERS} winners over ${MONTH_COUNT} draws`,
  },
];

export const CHANNELS = [
  { key: 'yt', icon: 'youtube', name: 'YouTube Live', note: 'Watch the draw as it happens' },
  { key: 'wa', icon: 'whatsapp', name: 'WhatsApp', note: 'Winner announcements and updates' },
  { key: 'ig', icon: 'instagram', name: 'Instagram', note: 'Winner posts and stories' },
];

export const TERMS = [
  { title: 'Scheme duration', body: 'The duration of this scheme is 4 months.' },
  {
    title: 'Monthly payment',
    body: 'Each member must pay ₹500 per month continuously for 4 months, making the total payment ₹2,000.',
  },
  {
    title: 'Special surprise gift',
    body: 'Members who pay the full 4-month amount of ₹2,000 in a single payment will receive a special surprise gift.',
  },
  {
    title: 'Monthly draw and winner announcement',
    body: 'The draw is conducted every month at the WellMart office in the presence of the participants and the public. It is also broadcast through YouTube Live, and winner announcements and updates are shared through WhatsApp and Instagram.',
  },
  {
    title: 'Eligibility for scheme benefits',
    body: 'Only members who complete the full payment for all 4 months are eligible to receive all benefits offered under the scheme.',
  },
  { title: 'No refund policy', body: 'Payments made under this scheme are non-refundable under any circumstances.' },
  {
    title: 'Incomplete payment',
    body: 'Members who fail to complete the full payment will not be eligible for a refund or any prize or benefit under the scheme.',
  },
  {
    title: 'Prizes cannot be exchanged for cash',
    body: 'Promotional gifts or prizes cannot be exchanged for or converted into cash.',
  },
  {
    title: 'Prize specifications',
    body: 'All prizes, including the brand, model, specifications, colour, variant, or other details, are provided as determined by the company.',
  },
  {
    title: 'Official payment method only',
    body: "All payments must be made only through WellMart's officially authorised account or payment method. WellMart is not responsible for payments made to any unauthorised individual, personal account, agent, or any other payment method not officially approved by the company.",
  },
];
