import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.language": "Language",
    "nav.projects": "Projects",

    // Hero
    "hero.title": "Professional Building Services",
    "hero.subtitle": "Excellence in HVAC, Electrical, Fire Safety & More",
    "hero.cta": "Explore Services",
    "hero.watch": "Watch Our Story",
    "hero.projects": "View MEP Projects",
    "hero.video.title": "Our MEP Excellence Story",
    "hero.video.description":
      "Discover how we became Saudi Arabia's leading MEP contractor, delivering exceptional HVAC, fire safety, electrical, and plumbing solutions across the kingdom.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions for all your building needs",
    "services.hvac": "HVAC Solutions",
    "services.hvac.desc":
      "Complete heating, ventilation, and air conditioning services for optimal comfort",
    "services.electrical": "Electrical Services",
    "services.electrical.desc": "Professional electrical installations, repairs, and maintenance",
    "services.fire": "Fire Safety Solutions",
    "services.fire.desc": "Comprehensive fire protection systems and safety compliance",
    "services.plumbing": "Plumbing Solutions",
    "services.plumbing.desc": "Expert plumbing services for residential and commercial properties",
    "services.security": "Surveillance & Security",
    "services.security.desc": "Advanced security systems and monitoring solutions",
    "services.maintenance": "Maintenance Contracts",
    "services.maintenance.desc":
      "Preventive maintenance programs to keep your systems running smoothly",
    "services.learnmore": "Learn More",

    // Service Details
    "detail.overview": "Overview",
    "detail.features": "Key Features",
    "detail.benefits": "Benefits",
    "detail.contact": "Contact Us",

    // HVAC Detail
    "hvac.feature1": "System Installation & Design",
    "hvac.feature2": "Regular Maintenance Programs",
    "hvac.feature3": "Emergency Repair Services",
    "hvac.feature4": "Energy Efficiency Optimization",
    "hvac.benefit1": "Improved indoor air quality",
    "hvac.benefit2": "Reduced energy costs",
    "hvac.benefit3": "Extended equipment lifespan",

    // Electrical Detail
    "electrical.feature1": "Complete Electrical Installations",
    "electrical.feature2": "Power Distribution Systems",
    "electrical.feature3": "Lighting Solutions",
    "electrical.feature4": "Safety Inspections & Testing",
    "electrical.benefit1": "Enhanced safety compliance",
    "electrical.benefit2": "Reliable power supply",
    "electrical.benefit3": "Modern lighting efficiency",

    // Fire Safety Detail
    "fire.feature1": "Fire Alarm Systems",
    "fire.feature2": "Sprinkler Installation",
    "fire.feature3": "Emergency Lighting",
    "fire.feature4": "Safety Audits & Compliance",
    "fire.benefit1": "Life-saving protection",
    "fire.benefit2": "Regulatory compliance",
    "fire.benefit3": "Insurance cost reduction",

    // Plumbing Detail
    "plumbing.feature1": "Pipe Installation & Repair",
    "plumbing.feature2": "Drainage Systems",
    "plumbing.feature3": "Water Heater Services",
    "plumbing.feature4": "Leak Detection & Prevention",
    "plumbing.benefit1": "Water conservation",
    "plumbing.benefit2": "Prevent costly damages",
    "plumbing.benefit3": "Improved water quality",

    // Security Detail
    "security.feature1": "CCTV Camera Systems",
    "security.feature2": "Access Control Solutions",
    "security.feature3": "24/7 Monitoring",
    "security.feature4": "Smart Security Integration",
    "security.benefit1": "Enhanced property protection",
    "security.benefit2": "Real-time monitoring",
    "security.benefit3": "Peace of mind",

    // Maintenance Detail
    "maintenance.feature1": "Scheduled Inspections",
    "maintenance.feature2": "Preventive Maintenance",
    "maintenance.feature3": "Priority Service Response",
    "maintenance.feature4": "Detailed Reporting",
    "maintenance.benefit1": "Reduced downtime",
    "maintenance.benefit2": "Cost-effective operations",
    "maintenance.benefit3": "Extended equipment life",

    // About Section
    "about.title": "Leading MEP Contractor Delivering End-to-End Solutions",
    "about.subtitle": "Excellence in Building Services Since 2005",
    "about.description":
      "We are a leading provider of comprehensive building services, committed to delivering excellence in HVAC, electrical, fire safety, plumbing, security, and maintenance solutions. With over 18 years of experience, our team of certified professionals ensures your property operates at peak efficiency.",
    "about.cta": "Explore MEP Capabilities",
    "about.consulting": "Free MEP Consulting",
    "about.mission": "Our Mission",
    "about.mission.text":
      "To provide reliable, efficient, and innovative building services that exceed client expectations while maintaining the highest standards of safety and quality.",

    // Why Choose Us
    "why.title": "Why Choose Us",
    "why.subtitle": "The benefits of working with us",
    "why.reason1": "Certified Professionals",
    "why.reason1.desc":
      "Our team consists of highly trained and certified technicians with extensive industry experience.",
    "why.reason2": "24/7 Emergency Service",
    "why.reason2.desc":
      "Round-the-clock support for urgent repairs and emergency situations to minimize downtime.",
    "why.reason3": "Quality Guaranteed",
    "why.reason3.desc":
      "We stand behind our work with comprehensive warranties and quality assurance programs.",
    "why.reason4": "Cost-Effective Solutions",
    "why.reason4.desc":
      "Competitive pricing without compromising on quality or service excellence.",

    // Stats
    "stats.projects": "Projects Completed",
    "stats.clients": "Happy Clients",
    "stats.years": "Years Experience",
    "stats.team": "Expert Team Members",

    // Testimonials
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "What our clients say about us",
    "testimonial1.text":
      "Outstanding service! Their HVAC team installed our new system efficiently and professionally. Highly recommended for any building service needs.",
    "testimonial1.author": "Ahmed Al-Rashid",
    "testimonial1.position": "Facility Manager, Dubai Tower",
    "testimonial2.text":
      "We've been using their maintenance contract for 3 years. Always responsive, professional, and thorough. Great value for money.",
    "testimonial2.author": "Sarah Johnson",
    "testimonial2.position": "Property Owner",
    "testimonial3.text":
      "Their fire safety audit was comprehensive and helped us achieve full compliance. The team was knowledgeable and patient with all our questions.",
    "testimonial3.author": "Mohammed Hassan",
    "testimonial3.position": "Safety Director, Al-Noor Complex",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.cta": "Request MEP Consultation",
    "faq.q1": "What areas do you serve?",
    "faq.a1":
      "We provide services across all major cities and surrounding areas. Contact us to confirm coverage in your specific location.",
    "faq.q2": "Do you offer emergency services?",
    "faq.a2": "Yes, we provide 24/7 emergency services for urgent repairs and critical situations.",
    "faq.q3": "Are your technicians certified?",
    "faq.a3":
      "Absolutely. All our technicians hold relevant certifications and undergo regular training to stay current with industry standards.",
    "faq.q4": "What is included in a maintenance contract?",
    "faq.a4":
      "Our maintenance contracts include scheduled inspections, preventive maintenance, priority service response, and detailed reporting.",
    "faq.q5": "What areas do you serve?",
    "faq.a5":
      "We provide services across all major cities and surrounding areas. Contact us to confirm coverage in your specific location.",

    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle": "We'd love to hear from you",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.service": "Service Interested In",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.address": "123 Business District, Dubai, UAE",
    "contact.email.label": "Email",
    "contact.phone.label": "Phone",
    "contact.hours": "Business Hours",
    "contact.hours.text": "Monday - Friday: 8:00 AM - 6:00 PM",
    "contact.hours.text2": "Saturday: 9:00 AM - 2:00 PM",

    // About Page
    "aboutpage.hero": "Leading Building Services Provider",
    "aboutpage.story.title": "Our Story",
    "aboutpage.story.text":
      "Founded in 2005, we have grown from a small local service provider to a comprehensive building services company serving hundreds of clients across the region. Our commitment to excellence and customer satisfaction has been the cornerstone of our success.",
    "aboutpage.values.title": "Our Values",
    "aboutpage.value1": "Integrity",
    "aboutpage.value1.desc": "We conduct business with honesty and transparency",
    "aboutpage.value2": "Excellence",
    "aboutpage.value2.desc": "We strive for the highest quality in everything we do",
    "aboutpage.value3": "Innovation",
    "aboutpage.value3.desc": "We embrace new technologies and methods",
    "aboutpage.value4": "Safety",
    "aboutpage.value4.desc": "We prioritize the safety of our team and clients",

    // Benefits
    "benefits.subtitle": "What We Do",
    "benefits.title": "The Benefits For You",
    "benefits.title1": "Reliable MEP Design & Installation",
    "benefits.desc1":
      "End-to-end HVAC, fire fighting, electrical, and plumbing engineered to Saudi codes for safe, efficient buildings.",
    "benefits.button1": "Request Quote",
    "benefits.title2": "Safety, Compliance & Quality",
    "benefits.desc2":
      "NFPA and Saudi Building Code compliance with testing, commissioning, and complete handover documentation.",
    "benefits.button2": "See Certifications",
    "benefits.title3": "Proactive Maintenance & 24/7 Support",
    "benefits.desc3":
      "Scheduled preventive maintenance, priority response, and reduced downtime to extend system lifespan.",
    "benefits.button3": "Maintenance Plans",

    // Hero Search
    "hero.search.title": "Find Your Perfect Service",
    "hero.search.subtitle": "Specialized in HVAC, fire fighting, electrical, and plumbing",
    "hero.search.service": "Service Needed?",
    "hero.search.servicePlaceholder": "HVAC, Electrical, Plumbing...",
    "hero.search.type": "Service Type",
    "hero.search.typePlaceholder": "Commercial & Residential",
    "hero.search.location": "Location",
    "hero.search.locationPlaceholder": "Dhahran, Dammam, Khobar...",
    "hero.search.filters": "Filters",
    "hero.search.searchNow": "Search Now",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.language": "اللغة",
    "nav.projects": "المشاريع",

    // Hero
    "hero.title": "خدمات المباني الاحترافية",
    "hero.subtitle": "التميز في التكييف والكهرباء والسلامة من الحرائق والمزيد",
    "hero.cta": "استكشف الخدمات",
    "hero.watch": "شاهد قصتنا",
    "hero.projects": "عرض مشاريع MEP",
    "hero.video.title": "قصة تميزنا في MEP",
    "hero.video.description":
      "اكتشف كيف أصبحنا مقاول MEP الرائد في المملكة العربية السعودية، نقدم حلولاً استثنائية في التكييف والسلامة من الحرائق والكهرباء والسباكة في جميع أنحاء المملكة.",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول شاملة لجميع احتياجات مبناك",
    "services.hvac": "حلول التكييف",
    "services.hvac.desc": "خدمات كاملة للتدفئة والتهوية وتكييف الهواء للراحة المثلى",
    "services.electrical": "الخدمات الكهربائية",
    "services.electrical.desc": "التركيبات الكهربائية الاحترافية والإصلاحات والصيانة",
    "services.fire": "حلول السلامة من الحرائق",
    "services.fire.desc": "أنظمة حماية شاملة من الحرائق والامتثال للسلامة",
    "services.plumbing": "حلول السباكة",
    "services.plumbing.desc": "خدمات سباكة متخصصة للعقارات السكنية والتجارية",
    "services.security": "المراقبة والأمن",
    "services.security.desc": "أنظمة أمنية متقدمة وحلول مراقبة",
    "services.maintenance": "عقود الصيانة",
    "services.maintenance.desc": "برامج صيانة وقائية للحفاظ على أنظمتك تعمل بسلاسة",
    "services.learnmore": "اعرف المزيد",

    // Service Details
    "detail.overview": "نظرة عامة",
    "detail.features": "الميزات الرئيسية",
    "detail.benefits": "الفوائد",
    "detail.contact": "اتصل بنا",

    // HVAC Detail
    "hvac.feature1": "تصميم وتركيب الأنظمة",
    "hvac.feature2": "برامج الصيانة الدورية",
    "hvac.feature3": "خدمات الإصلاح الطارئة",
    "hvac.feature4": "تحسين كفاءة الطاقة",
    "hvac.benefit1": "تحسين جودة الهواء الداخلي",
    "hvac.benefit2": "تقليل تكاليف الطاقة",
    "hvac.benefit3": "إطالة عمر المعدات",

    // Electrical Detail
    "electrical.feature1": "التركيبات الكهربائية الكاملة",
    "electrical.feature2": "أنظمة توزيع الطاقة",
    "electrical.feature3": "حلول الإضاءة",
    "electrical.feature4": "فحوصات السلامة والاختبار",
    "electrical.benefit1": "تعزيز الامتثال للسلامة",
    "electrical.benefit2": "إمدادات طاقة موثوقة",
    "electrical.benefit3": "كفاءة الإضاءة الحديثة",

    // Fire Safety Detail
    "fire.feature1": "أنظمة إنذار الحريق",
    "fire.feature2": "تركيب الرشاشات",
    "fire.feature3": "الإضاءة الطارئة",
    "fire.feature4": "عمليات تدقيق السلامة والامتثال",
    "fire.benefit1": "حماية منقذة للحياة",
    "fire.benefit2": "الامتثال التنظيمي",
    "fire.benefit3": "تخفيض تكاليف التأمين",

    // Plumbing Detail
    "plumbing.feature1": "تركيب وإصلاح الأنابيب",
    "plumbing.feature2": "أنظمة الصرف",
    "plumbing.feature3": "خدمات سخانات المياه",
    "plumbing.feature4": "كشف ومنع التسربات",
    "plumbing.benefit1": "توفير المياه",
    "plumbing.benefit2": "منع الأضرار المكلفة",
    "plumbing.benefit3": "تحسين جودة المياه",

    // Security Detail
    "security.feature1": "أنظمة كاميرات المراقبة",
    "security.feature2": "حلول التحكم في الوصول",
    "security.feature3": "مراقبة على مدار الساعة",
    "security.feature4": "التكامل الأمني الذكي",
    "security.benefit1": "تعزيز حماية الممتلكات",
    "security.benefit2": "المراقبة في الوقت الفعلي",
    "security.benefit3": "راحة البال",

    // Maintenance Detail
    "maintenance.feature1": "الفحوصات المجدولة",
    "maintenance.feature2": "الصيانة الوقائية",
    "maintenance.feature3": "استجابة خدمة ذات أولوية",
    "maintenance.feature4": "تقارير مفصلة",
    "maintenance.benefit1": "تقليل وقت التوقف",
    "maintenance.benefit2": "عمليات فعالة من حيث التكلفة",
    "maintenance.benefit3": "إطالة عمر المعدات",

    // About Section
    "about.title": "مقاول MEP رائد يقدم حلولاً شاملة",
    "about.subtitle": "التميز في خدمات المباني منذ 2005",
    "about.description":
      "نحن مزود رائد لخدمات المباني الشاملة، ملتزمون بتقديم التميز في حلول التكييف والكهرباء والسلامة من الحرائق والسباكة والأمن والصيانة. مع أكثر من 18 عامًا من الخبرة، يضمن فريقنا من المحترفين المعتمدين عمل ممتلكاتك بأقصى كفاءة.",
    "about.cta": "استكشف قدرات MEP",
    "about.consulting": "استشارة MEP مجانية",
    "about.mission": "مهمتنا",
    "about.mission.text":
      "تقديم خدمات مباني موثوقة وفعالة ومبتكرة تتجاوز توقعات العملاء مع الحفاظ على أعلى معايير السلامة والجودة.",

    // Why Choose Us
    "why.title": "لماذا تختارنا",
    "why.subtitle": "فوائد العمل معنا",
    "why.reason1": "محترفون معتمدون",
    "why.reason1.desc": "يتكون فريقنا من فنيين مدربين ومعتمدين بشكل كبير مع خبرة صناعية واسعة.",
    "why.reason2": "خدمة الطوارئ على مدار الساعة",
    "why.reason2.desc": "دعم على مدار الساعة للإصلاحات العاجلة وحالات الطوارئ لتقليل وقت التوقف.",
    "why.reason3": "جودة مضمونة",
    "why.reason3.desc": "نقف وراء عملنا بضمانات شاملة وبرامج ضمان الجودة.",
    "why.reason4": "حلول فعالة من حيث التكلفة",
    "why.reason4.desc": "أسعار تنافسية دون التنازل عن الجودة أو التميز في الخدمة.",

    // Stats
    "stats.projects": "المشاريع المكتملة",
    "stats.clients": "العملاء السعداء",
    "stats.years": "سنوات الخبرة",
    "stats.team": "أعضاء الفريق الخبراء",

    // Testimonials
    "testimonials.title": "شهادات العملاء",
    "testimonials.subtitle": "ماذا يقول عملاؤنا عنا",
    "testimonial1.text":
      "خدمة رائعة! قام فريق التكييف الخاص بهم بتركيب نظامنا الجديد بكفاءة واحترافية. موصى به للغاية لأي احتياجات خدمة المباني.",
    "testimonial1.author": "أحمد الراشد",
    "testimonial1.position": "مدير المرافق، برج دبي",
    "testimonial2.text":
      "نستخدم عقد الصيانة الخاص بهم منذ 3 سنوات. دائمًا سريع الاستجابة ومحترف وشامل. قيمة رائعة مقابل المال.",
    "testimonial2.author": "سارة جونسون",
    "testimonial2.position": "مالكة عقار",
    "testimonial3.text":
      "كانت مراجعة السلامة من الحرائق شاملة وساعدتنا على تحقيق الامتثال الكامل. كان الفريق على دراية وصبور مع جميع أسئلتنا.",
    "testimonial3.author": "محمد حسن",
    "testimonial3.position": "مدير السلامة، مجمع النور",

    // FAQ
    "faq.title": "الأسئلة المتكررة",
    "faq.cta": "طلب استشارة MEP",
    "faq.q1": "ما هي المناطق التي تخدمونها؟",
    "faq.a1":
      "نقدم الخدمات في جميع المدن الكبرى والمناطق المحيطة. اتصل بنا لتأكيد التغطية في موقعك المحدد.",
    "faq.q2": "هل تقدمون خدمات طوارئ؟",
    "faq.a2": "نعم، نقدم خدمات طوارئ على مدار الساعة للإصلاحات العاجلة والحالات الحرجة.",
    "faq.q3": "هل الفنيون معتمدون؟",
    "faq.a3":
      "بالتأكيد. جميع الفنيين لدينا يحملون الشهادات ذات الصلة ويخضعون للتدريب المنتظم للبقاء على اطلاع دائم بمعايير الصناعة.",
    "faq.q4": "ما الذي يشمله عقد الصيانة؟",
    "faq.a4":
      "تشمل عقود الصيانة لدينا الفحوصات المجدولة والصيانة الوقائية واستجابة الخدمة ذات الأولوية والتقارير المفصلة.",
    "faq.q5": "ما هي المناطق التي تخدمونها؟",
    "faq.a5":
      "نقدم الخدمات في جميع المدن الكبرى والمناطق المحيطة. اتصل بنا لتأكيد التغطية في موقعك المحدد.",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.subtitle": "نحب أن نسمع منك",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.service": "الخدمة المهتم بها",
    "contact.message": "رسالتك",
    "contact.send": "إرسال الرسالة",
    "contact.info": "معلومات الاتصال",
    "contact.address": "123 حي الأعمال، دبي، الإمارات",
    "contact.email.label": "البريد الإلكتروني",
    "contact.phone.label": "الهاتف",
    "contact.hours": "ساعات العمل",
    "contact.hours.text": "الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً",
    "contact.hours.text2": "السبت: 9:00 صباحًا - 2:00 مساءً",

    // About Page
    "aboutpage.hero": "مزود خدمات المباني الرائد",
    "aboutpage.story.title": "قصتنا",
    "aboutpage.story.text":
      "تأسست في عام 2005، نمونا من مزود خدمة محلي صغير إلى شركة خدمات مباني شاملة تخدم مئات العملاء في جميع أنحاء المنطقة. كان التزامنا بالتميز ورضا العملاء حجر الزاوية في نجاحنا.",
    "aboutpage.values.title": "قيمنا",
    "aboutpage.value1": "النزاهة",
    "aboutpage.value1.desc": "نمارس الأعمال بصدق وشفافية",
    "aboutpage.value2": "التميز",
    "aboutpage.value2.desc": "نسعى لتحقيق أعلى جودة في كل ما نقوم به",
    "aboutpage.value3": "الابتكار",
    "aboutpage.value3.desc": "نتبنى التقنيات والأساليب الجديدة",
    "aboutpage.value4": "السلامة",
    "aboutpage.value4.desc": "نعطي الأولوية لسلامة فريقنا وعملائنا",

    // Benefits
    "benefits.subtitle": "ما نفعله",
    "benefits.title": "الفوائد لك",
    "benefits.title1": "تصميم وتركيب MEP موثوق",
    "benefits.desc1":
      "تكييف ومكافحة حرائق وكهرباء وسباكة شاملة مصممة وفقاً للقوانين السعودية للمباني الآمنة والفعالة.",
    "benefits.button1": "طلب عرض أسعار",
    "benefits.title2": "السلامة والامتثال والجودة",
    "benefits.desc2":
      "امتثال NFPA وكود البناء السعودي مع الاختبار والتشغيل والتوثيق الكامل للتسليم.",
    "benefits.button2": "رؤية الشهادات",
    "benefits.title3": "صيانة استباقية ودعم على مدار الساعة",
    "benefits.desc3": "صيانة وقائية مجدولة واستجابة أولوية وتقليل التوقف لإطالة عمر النظام.",
    "benefits.button3": "خطط الصيانة",

    // Hero Search
    "hero.search.title": "ابحث عن خدمتك المثالية",
    "hero.search.subtitle": "متخصصون في التكييف ومكافحة الحرائق والكهرباء والسباكة",
    "hero.search.service": "الخدمة المطلوبة؟",
    "hero.search.servicePlaceholder": "التكييف، الكهرباء، السباكة...",
    "hero.search.type": "نوع الخدمة",
    "hero.search.typePlaceholder": "تجاري وسكني",
    "hero.search.location": "الموقع",
    "hero.search.locationPlaceholder": "الظهران، الدمام، الخبر...",
    "hero.search.filters": "المرشحات",
    "hero.search.searchNow": "ابحث الآن",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage || "en";
    }
    return "en";
  });

  // Update document attributes when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save to localStorage
      localStorage.setItem("language", language);

      // Update document attributes
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;

      // Update body class for RTL support
      document.body.classList.remove("rtl", "ltr");
      document.body.classList.add(language === "ar" ? "rtl" : "ltr");
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    const translation = translations[language][key];
    if (translation) {
      return translation;
    }

    // Fallback to English if translation not found
    const englishTranslation = translations.en[key];
    if (englishTranslation) {
      return englishTranslation;
    }

    // If no translation found, return a formatted version of the key
    // This helps with debugging missing translations
    console.warn(`Translation missing for key: ${key} in language: ${language}`);
    return key.split(".").pop() || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
