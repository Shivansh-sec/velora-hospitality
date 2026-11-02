export const site = {
  brand: 'VELORA', tagline: 'A quieter kind of extraordinary',
  enquiryEmail: import.meta.env.VITE_ENQUIRY_EMAIL || 'hello@example.com',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  navigation: [{label:'Philosophy',href:'#philosophy'},{label:'Experiences',href:'#experiences'},{label:'The stay',href:'#stay'},{label:'Journal',href:'#journal'}],
  experiences: [
    {number:'01 — RETREAT',title:'Stay awhile',description:'Private spaces, natural textures and room to simply be.',image:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',alt:'Private pool beside a contemporary villa'},
    {number:'02 — TASTE',title:'Gather & savour',description:'Seasonal ingredients, slow meals and stories shared around the table.',image:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85',alt:'Thoughtfully presented fine dining'},
    {number:'03 — RESTORE',title:'Find your rhythm',description:'Space to breathe deeply, reset gently and return to yourself.',image:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',alt:'Peaceful spa and wellness setting'}
  ]
} as const
export function enquiryHref(subject='Stay enquiry'){return `mailto:${site.enquiryEmail}?subject=${encodeURIComponent(subject)}`}