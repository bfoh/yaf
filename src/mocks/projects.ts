export const legacyProjects = [
  {
    id: 1,
    name: "Parliament Annex Complex",
    year: "2023",
    location: "Accra, Ghana",
    description: "A 12-story state-of-the-art government complex featuring modern parliamentary chambers, committee rooms, and administrative offices.",
    image: "https://readdy.ai/api/search-image?query=Modern%20glass%20and%20concrete%20government%20building%20with%20geometric%20facade%20in%20warm%20African%20sunlight%2C%20clean%20architectural%20lines%2C%20premium%20corporate%20photography%20style%2C%20Accra%20Ghana%20cityscape%20background%20with%20clear%20blue%20sky%2C%20professional%20construction%20photography&width=800&height=600&seq=1&orientation=landscape",
  },
  {
    id: 2,
    name: "Ministry of Finance Tower",
    year: "2022",
    location: "Accra, Ghana",
    description: "A landmark 18-story tower housing Ghana's Ministry of Finance, designed with sustainable energy systems and premium finishes.",
    image: "https://readdy.ai/api/search-image?query=Tall%20modern%20ministry%20office%20tower%20building%20in%20Accra%20Ghana%2C%20sleek%20glass%20facade%20reflecting%20golden%20hour%20sunlight%2C%20premium%20architectural%20photography%2C%20clean%20geometric%20design%2C%20surrounded%20by%20landscaped%20grounds%2C%20warm%20earth%20tones&width=800&height=600&seq=2&orientation=landscape",
  },
  {
    id: 3,
    name: "Accra Trade Center",
    year: "2021",
    location: "Accra, Ghana",
    description: "Premium commercial hub with 250 retail units, exhibition halls, and rooftop event spaces in the heart of Accra.",
    image: "https://readdy.ai/api/search-image?query=Modern%20commercial%20trade%20center%20building%20with%20multiple%20retail%20levels%2C%20contemporary%20African%20architecture%2C%20warm%20sandstone%20and%20glass%20materials%2C%20bustling%20city%20of%20Accra%20Ghana%2C%20premium%20real%20estate%20photography%2C%20golden%20hour%20lighting&width=800&height=600&seq=3&orientation=landscape",
  },
];

export interface ProjectDetail {
  id: number;
  name: string;
  category: string;
  year: string;
  client: string;
  location: string;
  duration: string;
  value: string;
  status: "completed" | "in-progress";
  progress?: number; // 0-100, only for in-progress
  timeline?: { phase: string; completed: boolean }[];
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  specs: { label: string; value: string }[];
}

export const portfolioProjects = [
  {
    id: 1,
    name: "Presidential State House Renovation",
    category: "Government",
    year: "2024",
    status: "completed",
    image: "https://readdy.ai/api/search-image?query=Grand%20presidential%20state%20house%20building%20renovation%2C%20neoclassical%20architecture%20with%20modern%20additions%2C%20white%20marble%20columns%2C%20manicured%20gardens%2C%20premium%20architectural%20photography%2C%20warm%20golden%20lighting%2C%20Accra%20Ghana%20government%20estate&width=900&height=600&seq=4&orientation=landscape",
  },
  {
    id: 2,
    name: "Diamond Heights Residences",
    category: "Residential",
    year: "2023",
    status: "completed",
    image: "https://readdy.ai/api/search-image?query=Luxury%20high-rise%20residential%20apartment%20building%20in%20Accra%20Ghana%2C%20modern%20minimalist%20architecture%20with%20floor-to-ceiling%20windows%2C%20warm%20evening%20interior%20glow%2C%20premium%20real%20estate%20photography%2C%20clean%20geometric%20lines%2C%20twilight%20sky&width=900&height=600&seq=5&orientation=landscape",
  },
  {
    id: 3,
    name: "Ghana National Bank HQ",
    category: "Corporate",
    year: "2023",
    status: "completed",
    image: "https://readdy.ai/api/search-image?query=Modern%20corporate%20headquarters%20building%20for%20a%20national%20bank%2C%20sleek%20glass%20tower%20with%20gold%20accent%20details%2C%20professional%20architectural%20photography%2C%20dramatic%20sky%2C%20reflective%20facade%2C%20premium%20construction%20quality%2C%20Accra%20Ghana%20skyline&width=900&height=600&seq=6&orientation=landscape",
  },
  {
    id: 4,
    name: "Labone Beach Resort",
    category: "Hospitality",
    year: "2022",
    status: "completed",
    image: "https://readdy.ai/api/search-image?query=Luxury%20beachfront%20resort%20hotel%20with%20infinity%20pool%20overlooking%20Atlantic%20Ocean%2C%20contemporary%20tropical%20architecture%2C%20white%20and%20wood%20materials%2C%20golden%20sunset%20lighting%2C%20palm%20trees%2C%20premium%20hospitality%20photography%2C%20Ghana%20coastal%20design&width=900&height=600&seq=7&orientation=landscape",
  },
  {
    id: 5,
    name: "Tema Industrial Park",
    category: "Industrial",
    year: "2022",
    status: "completed",
    image: "https://readdy.ai/api/search-image?query=Modern%20industrial%20warehouse%20and%20logistics%20park%20complex%2C%20clean%20concrete%20and%20steel%20structures%2C%20organized%20loading%20bays%2C%20drone%20aerial%20view%2C%20warm%20sunset%20lighting%20over%20Tema%20Ghana%2C%20premium%20industrial%20real%20estate%20photography&width=900&height=600&seq=8&orientation=landscape",
  },
  {
    id: 6,
    name: "University of Ghana Science Complex",
    category: "Institutional",
    year: "2021",
    status: "completed",
    image: "https://readdy.ai/api/search-image?query=Modern%20university%20science%20complex%20building%20with%20open%20atrium%2C%20glass%20walls%20revealing%20interior%20laboratories%2C%20warm%20red%20African%20soil%20landscaping%2C%20contemporary%20educational%20architecture%2C%20Accra%20Ghana%20campus%2C%20premium%20architectural%20photography&width=900&height=600&seq=9&orientation=landscape",
  },
  {
    id: 7,
    name: "Kumasi Metro Interchange",
    category: "Infrastructure",
    year: "2025",
    status: "in-progress",
    image:
      "https://readdy.ai/api/search-image?query=Large%20multi-level%20highway%20interchange%20under%20construction%20with%20concrete%20pillars%20and%20steel%20reinforcement%20visible%2C%20cranes%20and%20scaffolding%2C%20warm%20afternoon%20sunlight%2C%20African%20city%20of%20Kumasi%20Ghana%20in%20background%2C%20premium%20infrastructure%20construction%20photography%2C%20dramatic%20engineering%20scale&width=900&height=600&seq=10&orientation=landscape",
  },
  {
    id: 8,
    name: "Ridge Hospital Expansion",
    category: "Healthcare",
    year: "2025",
    status: "in-progress",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20under%20construction%20with%20concrete%20structure%20and%20glass%20curtain%20wall%20partially%20installed%2C%20medical%20facility%20architecture%2C%20warm%20daylight%2C%20cranes%20visible%2C%20premium%20healthcare%20construction%20photography%2C%20Accra%20Ghana%20skyline&width=900&height=600&seq=11&orientation=landscape",
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    name: "Presidential State House Renovation",
    category: "Government",
    year: "2024",
    client: "Office of the President, Ghana",
    location: "Flagstaff House, Accra, Ghana",
    duration: "18 Months",
    value: "GH₵340M",
    status: "completed",
    description:
      "A comprehensive renovation of Ghana's Presidential State House, modernizing the executive complex while preserving its historic neoclassical character.",
    longDescription:
      "This landmark renovation project involved the complete modernization of the Presidential State House compound, encompassing the main residence, state rooms, administrative offices, and security infrastructure. Working under the direct oversight of the Office of the President, YAF Constructions Ltd delivered a world-class facility that balances Ghanaian heritage with cutting-edge functionality. The project included structural reinforcement, installation of advanced security and communication systems, sustainable energy retrofitting with solar integration, and the restoration of original marble and teakwood interiors. Every detail was executed with the highest discretion and precision, meeting diplomatic-grade standards for a facility that hosts heads of state from across the continent and beyond.",
    image:
      "https://readdy.ai/api/search-image?query=Grand%20presidential%20state%20house%20building%20renovation%2C%20neoclassical%20architecture%20with%20modern%20additions%2C%20white%20marble%20columns%2C%20manicured%20gardens%2C%20premium%20architectural%20photography%2C%20warm%20golden%20lighting%2C%20Accra%20Ghana%20government%20estate&width=900&height=600&seq=4&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Grand%20neoclassical%20presidential%20residence%20entrance%20hall%20with%20soaring%20marble%20columns%2C%20polished%20terrazzo%20floors%2C%20crystal%20chandeliers%2C%20warm%20golden%20ambient%20lighting%2C%20premium%20interior%20architectural%20photography%2C%20Ghana%20government%20building&width=1200&height=700&seq=detail-1a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Luxury%20state%20dining%20room%20with%20long%20polished%20mahogany%20table%2C%20upholstered%20chairs%2C%20gilded%20wall%20paneling%2C%20floor-to-ceiling%20windows%20with%20garden%20views%2C%20warm%20evening%20lighting%2C%20premium%20interior%20photography&width=1200&height=700&seq=detail-1b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20executive%20office%20suite%20with%20dark%20wood%20paneling%2C%20leather%20executive%20chairs%2C%20panoramic%20city%20views%20through%20floor-to-ceiling%20glass%2C%20warm%20task%20lighting%2C%20premium%20government%20office%20interior&width=1200&height=700&seq=detail-1c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Elegant%20formal%20garden%20with%20manicured%20hedges%2C%20stone%20pathways%2C%20fountains%2C%20and%20lush%20tropical%20landscaping%20surrounding%20a%20neoclassical%20government%20building%20at%20golden%20hour%2C%20premium%20landscape%20architectural%20photography&width=1200&height=700&seq=detail-1d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "YAF Constructions Ltd executed this sensitive project with extraordinary professionalism. The quality of workmanship, respect for protocol, and ability to deliver on an accelerated timeline without compromise was remarkable. The State House now stands as a symbol of modern Ghana.",
      author: "Hon. Samuel Atta Mills",
      role: "Director of Presidential Infrastructure",
      company: "Office of the President, Ghana",
    },
    specs: [
      { label: "Project Value", value: "GH₵340 Million" },
      { label: "Duration", value: "18 Months" },
      { label: "Floor Area", value: "28,000 sqm" },
      { label: "Structures", value: "7 Buildings" },
      { label: "Rooms Renovated", value: "142" },
      { label: "Solar Capacity", value: "450 kW" },
    ],
  },
  {
    id: 2,
    name: "Diamond Heights Residences",
    category: "Residential",
    year: "2023",
    client: "Diamond Properties Ltd",
    location: "Airport Residential Area, Accra, Ghana",
    duration: "24 Months",
    value: "GH₵210M",
    status: "completed",
    description:
      "A luxury 22-story residential tower offering 96 premium apartments with panoramic Atlantic views, world-class amenities, and bespoke interior finishes.",
    longDescription:
      "Diamond Heights Residences redefines premium living in Accra's most prestigious neighborhood. This 22-story tower features 96 meticulously designed apartments ranging from two-bedroom suites to expansive penthouses, all finished with imported Italian marble, German kitchen systems, and smart-home automation. The development includes a rooftop infinity pool with uninterrupted Atlantic Ocean views, a private wellness center, concierge services, and secure underground parking. YAF Constructions Ltd managed every phase from foundation to final handover, navigating the complex logistics of high-rise construction in a coastal environment while maintaining the uncompromising quality standards that define our residential portfolio.",
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20high-rise%20residential%20apartment%20building%20in%20Accra%20Ghana%2C%20modern%20minimalist%20architecture%20with%20floor-to-ceiling%20windows%2C%20warm%20evening%20interior%20glow%2C%20premium%20real%20estate%20photography%2C%20clean%20geometric%20lines%2C%20twilight%20sky&width=900&height=600&seq=5&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Luxury%20penthouse%20living%20room%20with%20floor-to-ceiling%20windows%20overlooking%20Atlantic%20Ocean%20at%20sunset%2C%20modern%20minimalist%20furniture%2C%20polished%20concrete%20floors%2C%20warm%20ambient%20lighting%2C%20premium%20interior%20real%20estate%20photography&width=1200&height=700&seq=detail-2a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20luxury%20apartment%20kitchen%20with%20Italian%20marble%20countertops%2C%20integrated%20German%20appliances%2C%20warm%20wood%20cabinetry%2C%20pendant%20lighting%2C%20open-plan%20design%20with%20city%20views%2C%20premium%20interior%20photography&width=1200&height=700&seq=detail-2b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Rooftop%20infinity%20pool%20on%20luxury%20residential%20tower%20overlooking%20Atlantic%20Ocean%20at%20dusk%2C%20modern%20poolside%20loungers%2C%20warm%20amber%20lighting%2C%20glass%20railings%2C%20premium%20architectural%20photography%2C%20Accra%20Ghana%20skyline&width=1200&height=700&seq=detail-2c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Luxury%20residential%20building%20lobby%20with%20double-height%20ceilings%2C%20marble%20floors%2C%20contemporary%20African%20art%20installations%2C%20warm%20recessed%20lighting%2C%20concierge%20desk%2C%20premium%20interior%20architectural%20photography&width=1200&height=700&seq=detail-2d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "From the first design meeting to the final walkthrough, YAF delivered beyond our wildest expectations. The attention to detail, the quality of finishes, and the seamless project management set a new benchmark for luxury residential construction in Ghana.",
      author: "Nana Agyeman",
      role: "Managing Director",
      company: "Diamond Properties Ltd",
    },
    specs: [
      { label: "Project Value", value: "GH₵210 Million" },
      { label: "Duration", value: "24 Months" },
      { label: "Height", value: "22 Stories" },
      { label: "Apartments", value: "96 Units" },
      { label: "Penthouses", value: "8 Units" },
      { label: "Parking Spaces", value: "186" },
    ],
  },
  {
    id: 3,
    name: "Ghana National Bank HQ",
    category: "Corporate",
    year: "2023",
    client: "Ghana National Bank",
    location: "High Street, Accra, Ghana",
    duration: "30 Months",
    value: "GH₵280M",
    status: "completed",
    description:
      "A 16-story corporate headquarters combining state-of-the-art banking infrastructure with iconic architectural presence on Accra's historic High Street.",
    longDescription:
      "The Ghana National Bank Headquarters stands as a beacon of financial stability and architectural ambition on Accra's historic High Street. This 16-story tower houses the bank's executive leadership, trading floors, retail banking halls, data centers, and secure vault facilities. The design features a distinctive bronze-tinted glass curtain wall that shifts color with the West African sun, symbolizing the nation's mineral wealth. YAF Constructions Ltd delivered this project with military-grade security integration, redundant power and cooling systems, and a column-free trading floor spanning 1,200 square meters. The building has been certified as Ghana's first LEED Gold commercial structure, incorporating rainwater harvesting, solar shading, and a 600kW rooftop solar array.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20corporate%20headquarters%20building%20for%20a%20national%20bank%2C%20sleek%20glass%20tower%20with%20gold%20accent%20details%2C%20professional%20architectural%20photography%2C%20dramatic%20sky%2C%20reflective%20facade%2C%20premium%20construction%20quality%2C%20Accra%20Ghana%20skyline&width=900&height=600&seq=6&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Modern%20bank%20trading%20floor%20with%20rows%20of%20screens%2C%20sleek%20workstations%2C%20polished%20floors%2C%20warm%20overhead%20lighting%2C%20glass-walled%20conference%20rooms%20in%20background%2C%20premium%20corporate%20interior%20photography&width=1200&height=700&seq=detail-3a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Grand%20corporate%20banking%20hall%20with%20soaring%20ceilings%2C%20marble%20floors%2C%20teller%20counters%20with%20wood%20and%20brass%20accents%2C%20warm%20recessed%20lighting%2C%20premium%20commercial%20interior%20photography%2C%20Ghana%20financial%20institution&width=1200&height=700&seq=detail-3b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Executive%20boardroom%20with%20long%20conference%20table%2C%20leather%20chairs%2C%20floor-to-ceiling%20windows%20with%20city%20skyline%20view%2C%20warm%20wood%20paneling%2C%20modern%20lighting%2C%20premium%20corporate%20interior%20photography&width=1200&height=700&seq=detail-3c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20glass%20building%20exterior%20at%20night%20with%20warm%20interior%20lighting%20glowing%20through%20bronze-tinted%20curtain%20wall%2C%20dramatic%20dark%20sky%2C%20reflective%20plaza%20surface%2C%20premium%20architectural%20night%20photography%2C%20Accra%20Ghana&width=1200&height=700&seq=detail-3d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "YAF understood that this building had to be more than functional — it had to inspire confidence. The result is a headquarters that our staff, clients, and shareholders are genuinely proud of. The construction quality is flawless and the systems integration is world-class.",
      author: "Dr. Kwesi Addo",
      role: "Chief Operating Officer",
      company: "Ghana National Bank",
    },
    specs: [
      { label: "Project Value", value: "GH₵280 Million" },
      { label: "Duration", value: "30 Months" },
      { label: "Height", value: "16 Stories" },
      { label: "Floor Area", value: "32,000 sqm" },
      { label: "Trading Floor", value: "1,200 sqm" },
      { label: "Solar Array", value: "600 kW" },
    ],
  },
  {
    id: 4,
    name: "Labone Beach Resort",
    category: "Hospitality",
    year: "2022",
    client: "Labone Hospitality Group",
    location: "Labone, Accra, Ghana",
    duration: "22 Months",
    value: "GH₵185M",
    status: "completed",
    description:
      "A 5-star beachfront resort with 120 suites, multiple restaurants, conference facilities, and an award-winning spa overlooking the Gulf of Guinea.",
    longDescription:
      "Labone Beach Resort represents the pinnacle of West African hospitality design. This 5-star resort features 120 ocean-facing suites, three signature restaurants, a 500-seat conference center, and a world-class wellness spa — all set within 8 hectares of landscaped tropical gardens on the Gulf of Guinea. YAF Constructions Ltd executed this project with particular attention to coastal engineering challenges, including deep-pile foundations, salt-resistant materials, and storm-resilient architecture. The resort's signature infinity pool cantilevers over the beachfront, creating one of Accra's most photographed architectural features. Since opening, the resort has hosted African Union delegations, international film productions, and heads of state from 14 nations.",
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20beachfront%20resort%20hotel%20with%20infinity%20pool%20overlooking%20Atlantic%20Ocean%2C%20contemporary%20tropical%20architecture%2C%20white%20and%20wood%20materials%2C%20golden%20sunset%20lighting%2C%20palm%20trees%2C%20premium%20hospitality%20photography%2C%20Ghana%20coastal%20design&width=900&height=600&seq=7&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Luxury%20resort%20infinity%20pool%20cantilevering%20over%20sandy%20beach%20at%20sunset%2C%20turquoise%20water%2C%20modern%20loungers%2C%20palm%20trees%2C%20warm%20golden%20light%2C%20premium%20hospitality%20architectural%20photography%2C%20Gulf%20of%20Guinea%20coastline&width=1200&height=700&seq=detail-4a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Luxury%20oceanfront%20hotel%20suite%20bedroom%20with%20four-poster%20bed%2C%20white%20linens%2C%20floor-to-ceiling%20glass%20doors%20opening%20to%20private%20balcony%2C%20warm%20morning%20light%2C%20premium%20hospitality%20interior%20photography&width=1200&height=700&seq=detail-4b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Open-air%20luxury%20resort%20restaurant%20with%20thatched%20roof%2C%20ocean%20views%2C%20warm%20wood%20furniture%2C%20ambient%20string%20lighting%2C%20tropical%20landscaping%2C%20premium%20hospitality%20interior%20photography%2C%20evening%20atmosphere&width=1200&height=700&seq=detail-4c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=World-class%20resort%20spa%20with%20natural%20stone%20walls%2C%20warm%20wood%20treatment%20rooms%2C%20indoor%20water%20feature%2C%20soft%20ambient%20lighting%2C%20tropical%20plants%2C%20premium%20wellness%20interior%20photography%2C%20serene%20atmosphere&width=1200&height=700&seq=detail-4d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "YAF didn't just build a resort — they created an experience. Every space, every material choice, every engineering solution was designed to withstand the coast while delivering uncompromising luxury. Our guests feel it the moment they arrive.",
      author: "Efua Asante",
      role: "Chief Executive Officer",
      company: "Labone Hospitality Group",
    },
    specs: [
      { label: "Project Value", value: "GH₵185 Million" },
      { label: "Duration", value: "22 Months" },
      { label: "Land Area", value: "8 Hectares" },
      { label: "Suites", value: "120" },
      { label: "Restaurants", value: "3" },
      { label: "Conference Capacity", value: "500 Seats" },
    ],
  },
  {
    id: 5,
    name: "Tema Industrial Park",
    category: "Industrial",
    year: "2022",
    client: "Tema Logistics & Industrial Co.",
    location: "Tema Free Zone, Ghana",
    duration: "16 Months",
    value: "GH₵125M",
    status: "completed",
    description:
      "A modern 45,000 sqm logistics and light manufacturing park with cold storage, customs processing, and direct port access.",
    longDescription:
      "The Tema Industrial Park was designed from the ground up to serve Ghana's rapidly expanding export and manufacturing sectors. Located within the Tema Free Zone with direct access to West Africa's busiest container port, this 45,000 square meter facility combines climate-controlled warehousing, light manufacturing halls, cold storage units, and integrated customs processing under one roof. YAF Constructions Ltd engineered the site with reinforced slab foundations capable of supporting 50-ton gantry cranes, industrial-grade fire suppression systems, and redundant power infrastructure including a 2MW standby generator plant. The facility is now home to operations for 12 international companies spanning food processing, pharmaceuticals, and automotive parts manufacturing.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20industrial%20warehouse%20and%20logistics%20park%20complex%2C%20clean%20concrete%20and%20steel%20structures%2C%20organized%20loading%20bays%2C%20drone%20aerial%20view%2C%20warm%20sunset%20lighting%20over%20Tema%20Ghana%2C%20premium%20industrial%20real%20estate%20photography&width=900&height=600&seq=8&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Modern%20industrial%20warehouse%20interior%20with%20high%20ceilings%2C%20steel%20trusses%2C%20polished%20concrete%20floor%2C%20organized%20pallet%20racking%2C%20warm%20overhead%20LED%20lighting%2C%20premium%20industrial%20interior%20photography%2C%20clean%20organized%20space&width=1200&height=700&seq=detail-5a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Industrial%20cold%20storage%20facility%20interior%20with%20stainless%20steel%20walls%2C%20LED%20lighting%2C%20organized%20shelving%2C%20frost-resistant%20flooring%2C%20premium%20industrial%20refrigeration%20photography%2C%20clean%20modern%20design&width=1200&height=700&seq=detail-5b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Industrial%20loading%20dock%20with%20multiple%20truck%20bays%2C%20concrete%20apron%2C%20organized%20container%20yard%20in%20background%2C%20warm%20golden%20hour%20lighting%2C%20premium%20logistics%20photography%2C%20Tema%20Ghana%20port%20area&width=1200&height=700&seq=detail-5c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20modern%20industrial%20park%20with%20multiple%20warehouse%20buildings%2C%20organized%20truck%20parking%2C%20green%20landscaping%20buffers%2C%20near%20container%20port%2C%20warm%20sunset%20lighting%2C%20premium%20industrial%20real%20estate%20photography&width=1200&height=700&seq=detail-5d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "Speed and precision were critical for this project — we had tenants waiting. YAF delivered the full facility 6 weeks ahead of schedule with zero safety incidents. The quality of the concrete work and infrastructure has exceeded every engineering audit since handover.",
      author: "Mr. Joseph Boateng",
      role: "General Manager",
      company: "Tema Logistics & Industrial Co.",
    },
    specs: [
      { label: "Project Value", value: "GH₵125 Million" },
      { label: "Duration", value: "16 Months" },
      { label: "Total Area", value: "45,000 sqm" },
      { label: "Warehouses", value: "4 Buildings" },
      { label: "Cold Storage", value: "2,800 sqm" },
      { label: "Power Plant", value: "2 MW" },
    ],
  },
  {
    id: 6,
    name: "University of Ghana Science Complex",
    category: "Institutional",
    year: "2021",
    client: "University of Ghana",
    location: "Legon, Accra, Ghana",
    duration: "28 Months",
    value: "GH₵195M",
    status: "completed",
    description:
      "A cutting-edge science and research complex with 14 specialized laboratories, a 400-seat lecture theater, and Africa's first university nanotechnology cleanroom.",
    longDescription:
      "The University of Ghana Science Complex represents a generational investment in African scientific infrastructure. This 18,500 square meter facility houses 14 specialized laboratories for chemistry, biology, physics, and materials science, a 400-seat tiered lecture theater with simultaneous translation capability, and Africa's first university-grade nanotechnology cleanroom. YAF Constructions Ltd faced the unique challenge of building ultra-precise scientific environments — including vibration-isolated foundations, redundant HVAC with HEPA filtration, and electromagnetic shielding — while maintaining aggressive construction timelines aligned with the academic calendar. The complex now supports research partnerships with MIT, Imperial College London, and the African Institute for Mathematical Sciences.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20university%20science%20complex%20building%20with%20open%20atrium%2C%20glass%20walls%20revealing%20interior%20laboratories%2C%20warm%20red%20African%20soil%20landscaping%2C%20contemporary%20educational%20architecture%2C%20Accra%20Ghana%20campus%2C%20premium%20architectural%20photography&width=900&height=600&seq=9&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Modern%20university%20laboratory%20interior%20with%20long%20white%20benches%2C%20fume%20hoods%2C%20advanced%20equipment%2C%20glass%20walls%20overlooking%20atrium%2C%20bright%20LED%20lighting%2C%20premium%20scientific%20interior%20photography%2C%20clean%20organized%20space&width=1200&height=700&seq=detail-6a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20university%20lecture%20theater%20with%20tiered%20seating%2C%20large%20projection%20screen%2C%20warm%20wood%20accents%2C%20natural%20light%20from%20clerestory%20windows%2C%20premium%20educational%20interior%20photography%2C%20clean%20contemporary%20design&width=1200&height=700&seq=detail-6b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Nanotechnology%20cleanroom%20laboratory%20with%20white%20walls%2C%20yellow%20ambient%20lighting%2C%20specialized%20equipment%20in%20background%2C%20smooth%20epoxy%20floor%2C%20premium%20scientific%20facility%20photography%2C%20sterile%20environment&width=1200&height=700&seq=detail-6c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20university%20science%20building%20exterior%20with%20glass%20atrium%2C%20landscaped%20courtyards%20with%20native%20African%20plants%2C%20students%20walking%20on%20pathways%2C%20warm%20afternoon%20light%2C%20premium%20campus%20architectural%20photography%2C%20Accra%20Ghana&width=1200&height=700&seq=detail-6d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "The precision required for our nanotechnology cleanroom exceeded anything previously built in West Africa. YAF rose to the challenge with world-class engineering, meticulous quality control, and genuine partnership with our research teams. This facility has transformed our scientific capacity.",
      author: "Prof. Nana Osei",
      role: "Vice Chancellor",
      company: "University of Ghana",
    },
    specs: [
      { label: "Project Value", value: "GH₵195 Million" },
      { label: "Duration", value: "28 Months" },
      { label: "Floor Area", value: "18,500 sqm" },
      { label: "Laboratories", value: "14" },
      { label: "Lecture Theater", value: "400 Seats" },
      { label: "Cleanroom Grade", value: "ISO 5" },
    ],
  },
  {
    id: 7,
    name: "Kumasi Metro Interchange",
    category: "Infrastructure",
    year: "2025",
    client: "Ghana Highways Authority",
    location: "Kumasi, Ashanti Region, Ghana",
    duration: "36 Months",
    value: "GH₵450M",
    status: "in-progress",
    progress: 62,
    timeline: [
      { phase: "Site Preparation", completed: true },
      { phase: "Foundation & Piling", completed: true },
      { phase: "Structural Framework", completed: true },
      { phase: "Deck Construction", completed: false },
      { phase: "Road Surfacing", completed: false },
      { phase: "Landscaping & Handover", completed: false },
    ],
    description:
      "A three-tier interchange and arterial road network transforming traffic flow in Ghana's second-largest city, with pedestrian bridges and smart signaling.",
    longDescription:
      "The Kumasi Metro Interchange is the largest infrastructure project ever undertaken in Ghana's Ashanti Region. This three-tier stacked interchange will eliminate one of the city's most congested junctions while creating 14 kilometers of new arterial roads, dedicated BRT lanes, cycle paths, and elevated pedestrian walkways. The design incorporates intelligent traffic management systems, solar-powered street lighting, and landscaped medians with native tree species. YAF Constructions Ltd is currently executing the structural framework phase, with the main flyover deck now 70% complete. Upon completion in late 2026, this project is projected to reduce commute times across Kumasi by up to 40% and serve as a template for urban mobility solutions across West Africa.",
    image:
      "https://readdy.ai/api/search-image?query=Large%20multi-level%20highway%20interchange%20under%20construction%20with%20concrete%20pillars%20and%20steel%20reinforcement%20visible%2C%20cranes%20and%20scaffolding%2C%20warm%20afternoon%20sunlight%2C%20African%20city%20of%20Kumasi%20Ghana%20in%20background%2C%20premium%20infrastructure%20construction%20photography%2C%20dramatic%20engineering%20scale&width=900&height=600&seq=10&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Massive%20concrete%20bridge%20pier%20under%20construction%20with%20rebar%20cages%20and%20formwork%2C%20cranes%20overhead%2C%20warm%20golden%20hour%20light%2C%20premium%20engineering%20photography%2C%20infrastructure%20construction%20site%2C%20Kumasi%20Ghana&width=1200&height=700&seq=detail-7a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20multi-level%20highway%20interchange%20construction%20with%20partially%20completed%20flyover%20ramps%2C%20organized%20construction%20site%2C%20surrounding%20African%20urban%20landscape%2C%20warm%20lighting%2C%20premium%20drone%20infrastructure%20photography&width=1200&height=700&seq=detail-7b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Construction%20workers%20on%20large%20bridge%20deck%20with%20safety%20harnesses%2C%20concrete%20pouring%20operation%2C%20steel%20reinforcement%20mesh%20visible%2C%20warm%20hard%20hat%20lighting%2C%20premium%20documentary%20construction%20photography%2C%20African%20infrastructure&width=1200&height=700&seq=detail-7c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Highway%20construction%20site%20at%20dusk%20with%20tall%20lighting%20towers%20illuminating%20concrete%20structures%2C%20dramatic%20sky%2C%20organized%20material%20staging%20area%2C%20premium%20industrial%20construction%20photography%2C%20African%20infrastructure%20project&width=1200&height=700&seq=detail-7d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "The Kumasi Interchange is transforming our city before our eyes. YAF's engineering capabilities at this scale are unprecedented in the region. Their ability to manage complex multi-phase construction while minimizing disruption to daily traffic has been exceptional.",
      author: "Hon. Simon Osei-Mensah",
      role: "Regional Minister",
      company: "Ashanti Regional Coordinating Council",
    },
    specs: [
      { label: "Project Value", value: "GH₵450 Million" },
      { label: "Duration", value: "36 Months" },
      { label: "Interchange Levels", value: "3 Tiers" },
      { label: "Road Network", value: "14 km" },
      { label: "Bridge Spans", value: "8" },
      { label: "Completion", value: "Q4 2026" },
    ],
  },
  {
    id: 8,
    name: "Ridge Hospital Expansion",
    category: "Healthcare",
    year: "2025",
    client: "Ministry of Health, Ghana",
    location: "Ridge, Accra, Ghana",
    duration: "20 Months",
    value: "GH₵165M",
    status: "in-progress",
    progress: 38,
    timeline: [
      { phase: "Demolition & Site Prep", completed: true },
      { phase: "Foundation Works", completed: true },
      { phase: "Structural Shell", completed: false },
      { phase: "MEP Installation", completed: false },
      { phase: "Interior Fit-Out", completed: false },
      { phase: "Medical Equipment", completed: false },
      { phase: "Commissioning", completed: false },
    ],
    description:
      "A 200-bed specialist wing addition to Accra's premier referral hospital, featuring advanced surgical theaters, oncology center, and a rooftop helipad.",
    longDescription:
      "The Ridge Hospital Expansion addresses Ghana's critical need for world-class specialist healthcare capacity. This 200-bed addition to Accra's flagship referral hospital includes 8 advanced surgical theaters equipped for neurosurgery and cardiac procedures, a comprehensive oncology center with Ghana's first proton therapy suite, a neonatal intensive care unit, and a rooftop helipad for emergency medical evacuations. The building is engineered to withstand seismic activity and features redundant power, medical gas, and water systems with 99.99% uptime guarantees. YAF Constructions Ltd is currently raising the structural shell of the fourth floor, with MEP rough-in work beginning on the completed lower levels. The project is scheduled for handover in Q2 2027, at which point it will increase Ridge Hospital's capacity by 40% and establish West Africa's most advanced cardiac care facility.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20hospital%20building%20under%20construction%20with%20concrete%20structure%20and%20glass%20curtain%20wall%20partially%20installed%2C%20medical%20facility%20architecture%2C%20warm%20daylight%2C%20cranes%20visible%2C%20premium%20healthcare%20construction%20photography%2C%20Accra%20Ghana%20skyline&width=900&height=600&seq=11&orientation=landscape",
    gallery: [
      "https://readdy.ai/api/search-image?query=Hospital%20construction%20site%20with%20concrete%20columns%20and%20steel%20beam%20framework%2C%20medical-grade%20infrastructure%20visible%2C%20organized%20site%2C%20warm%20sunlight%20filtering%20through%20structural%20grid%2C%20premium%20healthcare%20construction%20photography&width=1200&height=700&seq=detail-8a&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20hospital%20interior%20corridor%20under%20construction%20with%20clean%20white%20walls%2C%20polished%20floors%2C%20recessed%20ceiling%20panels%20for%20medical%20gases%2C%20premium%20healthcare%20interior%20photography%2C%20bright%20clinical%20lighting&width=1200&height=700&seq=detail-8b&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Hospital%20operating%20room%20under%20fit-out%20with%20advanced%20ceiling-mounted%20surgical%20lights%2C%20medical%20gas%20outlets%2C%20anti-bacterial%20wall%20cladding%2C%20premium%20medical%20interior%20photography%2C%20sterile%20white%20environment&width=1200&height=700&seq=detail-8c&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Rooftop%20helipad%20on%20modern%20hospital%20building%20under%20construction%20with%20safety%20markings%2C%20aviation%20lighting%2C%20panoramic%20city%20view%2C%20premium%20architectural%20photography%2C%20warm%20golden%20hour%2C%20Accra%20Ghana&width=1200&height=700&seq=detail-8d&orientation=landscape",
    ],
    testimonial: {
      quote:
        "Healthcare construction demands a level of precision that few firms can deliver. YAF's understanding of medical infrastructure — from vibration isolation for imaging suites to redundant life-support systems — gives us confidence that this expansion will meet international accreditation standards.",
      author: "Dr. Bernard Okoe-Boye",
      role: "Minister for Health",
      company: "Ministry of Health, Ghana",
    },
    specs: [
      { label: "Project Value", value: "GH₵165 Million" },
      { label: "Duration", value: "20 Months" },
      { label: "Bed Capacity", value: "200 Beds" },
      { label: "Surgical Theaters", value: "8" },
      { label: "Floor Area", value: "22,000 sqm" },
      { label: "Completion", value: "Q2 2027" },
    ],
  },
];

export const servicesList = [
  {
    id: 1,
    title: "Architectural Design",
    subtitle: "VISION TO BLUEPRINT",
    description:
      "From initial concept sketches to comprehensive construction documentation, our award-winning architects craft structures that balance bold aesthetics with functional excellence. Every design is rooted in Ghanaian context and climate-responsive principles.",
    icon: "ri-building-line",
    features: ["Master Planning", "3D Visualization", "BIM Modeling", "Sustainable Design"],
  },
  {
    id: 2,
    title: "End-to-End Construction",
    subtitle: "GROUND TO GRAND OPENING",
    description:
      "We manage the entire build lifecycle — procurement, site management, quality assurance, and handover. With our ISO-certified processes and veteran project managers, every milestone is delivered on time and within budget.",
    icon: "ri-hammer-line",
    features: ["Project Management", "Quality Assurance", "Safety Compliance", "Cost Control"],
  },
  {
    id: 3,
    title: "Project Management",
    subtitle: "ORCHESTRATING EXCELLENCE",
    description:
      "Our dedicated project management team coordinates every stakeholder, timeline, and deliverable. We leverage modern PM tools and decades of field experience to ensure seamless execution from groundbreaking to ribbon-cutting.",
    icon: "ri-clipboard-line",
    features: ["Stakeholder Coordination", "Timeline Tracking", "Risk Management", "Reporting"],
  },
];