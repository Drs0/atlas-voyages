import { TravelPackage } from '@/types/package';

export const packages: TravelPackage[] = [
  {
    id: 'pkg-1',
    slug: 'sahara-merzouga',
    category: 'desert',
    durationDays: 4,
    durationNights: 3,
    title: {
      fr: "L'Épopée du Sahara & Bivouac sous les Étoiles",
      ar: "ملحمة الصحراء الكبرى وليلة تحت النجوم",
    },
    subtitle: {
      fr: "Traversée de l'Atlas, oasis préservées et dunes dorées d'Erg Chebbi",
      ar: "عبور جبال الأطلس، واحات خلابة وكثبان عرق الشبي الذهبية",
    },
    overview: {
      fr: "Un itinéraire immersif reliant les kasbahs historiques de l'Atlas aux vastes dunes de Merzouga. Cet exemple illustre la présentation d'un circuit saharien complet avec hébergement sous tente nomade et transport privé.",
      ar: "رحلة استكشافية متكاملة تربط قصبات الأطلس التاريخية بكثبان مرزوكة الشاسعة. يوضح هذا النموذج تقديم برنامج صحراوي متكامل مع إقامة في مخيم ونقل خاص.",
    },
    startingPriceMAD: 3800,
    coverImage: '/images/sahara.jpg',
    bestSeason: {
      fr: 'Octobre à Avril',
      ar: 'من أكتوبر إلى أبريل',
    },
    featured: true,
    itinerary: [
      {
        day: 1,
        title: {
          fr: 'Marrakech - Col du Tichka - Kasbah Aït Ben Haddou - Dadès',
          ar: 'مراكش - ممر تيشكا - قصبة آيت بن حدو - وادي دادس',
        },
        description: {
          fr: 'Départ matinal à travers le Haut Atlas, visite de la kasbah classée au patrimoine mondial, puis continuation vers les gorges verdoyantes.',
          ar: 'انطلاق صباحي عبر جبال الأطلس الكبير، زيارة القصبة التاريخية المصنفة تراثاً عالمياً، ثم التوجه نحو المضايق الخضراء.',
        },
      },
      {
        day: 2,
        title: {
          fr: 'Gorges de Tinghir - Vallée des Roses - Dunes de Merzouga',
          ar: 'مضايق تنغير - وادي الورود - كثبان مرزوكة',
        },
        description: {
          fr: 'Découverte des palmeraies du Tafilalet et arrivée aux pieds des dunes pour assister au coucher de soleil sur le désert.',
          ar: 'استكشاف واحات تافيلالت والوصول إلى سفح الكثبان الرملية لمشاهدة غروب الشمس الساحر فوق رمال الصحراء.',
        },
      },
      {
        day: 3,
        title: {
          fr: 'Erg Chebbi - Balade chamelière & Nuit en campement nomade',
          ar: 'عرق الشبي - جولة الإبل والمبيت في المخيم الصحراوي',
        },
        description: {
          fr: 'Journée consacrée aux rencontres locales, découverte de la musique Gnawa à Khamlia et nuit sous tente berbère aménagée.',
          ar: 'يوم مخصص للتعرف على التراث المحلي، الاستماع لموسيقى كناوة في قرية خملية، والمبيت في مخيم مجهز.',
        },
      },
      {
        day: 4,
        title: {
          fr: 'Lever de soleil sur les dunes - Retour vers Marrakech',
          ar: 'شروق الشمس فوق الكثبان - العودة نحو مراكش',
        },
        description: {
          fr: 'Réveil aux premières lueurs sur les crêtes de sable, petit-déjeuner traditionnel et trajet retour via Ouarzazate.',
          ar: 'استيقاظ باكر لمشاهدة الشروق فوق الرمال، إفطار تقليدي ورحلة العودة عبر مدينة ورزازات.',
        },
      },
    ],
    inclusions: {
      fr: [
        'Transport privé climatisé avec chauffeur (Exemple indicatif de service)',
        'Hébergement en riad et campement désert (Exemple indicatif)',
        'Petits-déjeuners et dîners mentionnés au programme',
        'Balade dromadaire au coucher de soleil (Prestation échantillon)',
      ],
      ar: [
        'مركبة خاصة مكيفة مع سائق (نموذج توضيحي للخدمة)',
        'إقامة في رياض ومخيم صحراوي (مثال استرشادي)',
        'وجبات الإفطار والعشاء المدرجة في البرنامج',
        'جولة على ظهور الإبل وقت الغروب (خدمة نموذجية)',
      ],
    },
    exclusions: {
      fr: [
        'Vols internationaux ou intérieurs',
        'Déjeuners et boissons personnelles',
        'Dépenses personnelles et pourboires discrétionnaires',
      ],
      ar: [
        'تذاكر الطيران الدولية أو الداخلية',
        'وجبات الغداء والمشروبات الشخصية',
        'المصاريف الشخصية والإكراميات الاختيارية',
      ],
    },
  },
  {
    id: 'pkg-2',
    slug: 'villes-imperiales',
    category: 'imperial',
    durationDays: 6,
    durationNights: 5,
    title: {
      fr: 'Splendeurs des Cités Impériales',
      ar: 'روائع المدن الإمبراطورية العريقة',
    },
    subtitle: {
      fr: 'De Rabat à Marrakech, l’héritage millénaire des dynasties chérifiennes',
      ar: 'من الرباط إلى مراكش، التراث العريق والتاريخ المعماري الأصيل',
    },
    overview: {
      fr: "Un grand classique du voyage culturel marocain reliant les quatre capitales historiques du Royaume : Rabat, Meknès, Fès et Marrakech. Conçu pour mettre en valeur le patrimoine architectural, les médinas et les trésors d'artisanat.",
      ar: 'جولة كلاسيكية في التاريخ المغربي العريق تربط العواصم التاريخية الأربع: الرباط، مكناس، فاس ومراكش. صُممت لتسليط الضوء على العمارة والمدن العتيقة والحرف اليدوية.',
    },
    startingPriceMAD: 5900,
    coverImage: '/images/imperial.jpg',
    bestSeason: {
      fr: 'Toute l’année (idéal Printemps / Automne)',
      ar: 'طوال العام (مثالي في فصلي الربيع والخريف)',
    },
    featured: true,
    itinerary: [
      {
        day: 1,
        title: {
          fr: 'Casablanca - Rabat, capitale administrative',
          ar: 'الدار البيضاء - الرباط، عاصمة المملكة',
        },
        description: {
          fr: 'Aperçu de la corniche et route vers Rabat : Tour Hassan, Mausolée Mohammed V et Kasbah des Oudayas.',
          ar: 'إطلالة على كورنيش البيضاء والتوجه للرباط: صومعة حسان، ضريح محمد الخامس وقصبة الأوداية.',
        },
      },
      {
        day: 2,
        title: {
          fr: 'Rabat - Cité romaine de Volubilis - Meknès - Fès',
          ar: 'الرباط - موقع وليلي الأثري - مكناس - فاس',
        },
        description: {
          fr: 'Visite des mosaïques antiques de Volubilis, passage par la porte Bab Mansour à Meknès et installation à Fès.',
          ar: 'زيارة الفسيفساء الرومانية في وليلي، المرور بباب المنصور بمكناس والاستقرار في فاس.',
        },
      },
      {
        day: 3,
        title: {
          fr: 'Fès : Immersion dans la plus ancienne médina du monde',
          ar: 'فاس : جولة في أقدم مدينة عتيقة في العالم',
        },
        description: {
          fr: 'Visite guidée des souks séculaires, mosquée Al Quaraouiyine, medersas ciselées et tanneries traditionnelles Chouara.',
          ar: 'جولة في الأسواق القديمة، جامع القرويين، المدارس التاريخية ومدابغ شوارة التقليدية.',
        },
      },
      {
        day: 4,
        title: {
          fr: 'Fès - Moyen Atlas - Ifrane - Béni Mellal',
          ar: 'فاس - الأطلس المتوسط - إفران - بني ملال',
        },
        description: {
          fr: 'Traversée des forêts de cèdres du Moyen Atlas, découverte de la station d’Ifrane et route vers la plaine du Tadla.',
          ar: 'عبور غابات الأرز بالأطلس المتوسط، استكشاف مدينة إفران والتوجه عبر سهول تادلة.',
        },
      },
      {
        day: 5,
        title: {
          fr: 'Arrivée à Marrakech : Palais et Jardins',
          ar: 'الوصول إلى مراكش : القصور والحدائق التاريخية',
        },
        description: {
          fr: 'Découverte du Palais Bahia, de la Koutoubia et animation en fin d’après-midi sur la célèbre place Jemaa el-Fna.',
          ar: 'زيارة قصر الباهية، صومعة الكتبية وأجواء ساحة جامع الفنا الشهيرة قبيل الغروب.',
        },
      },
      {
        day: 6,
        title: {
          fr: 'Marrakech : Médina et clôture du voyage',
          ar: 'مراكش : أسواق المدينة واختتام البرنامج',
        },
        description: {
          fr: 'Matinée consacrée aux artisans de la médina et assistance pour les transferts retour.',
          ar: 'جولة صباحية بين حرفيي المدينة العتيقة واستكمال ترتيبات المغادرة والعودة.',
        },
      },
    ],
    inclusions: {
      fr: [
        'Transport touristique dédié pour le circuit (Exemple indicatif de service)',
        'Hébergement en riads et hôtels sélectionnés (Exemple indicatif)',
        'Formule petits-déjeuners inclus',
        'Droits d’entrée aux monuments historiques échantillonnés',
      ],
      ar: [
        'نقل سياحي مخصص طوال أيام الرحلة (نموذج للعرض)',
        'إقامة في رياضات وفنادق مختارة (مثال استرشادي)',
        'وجبات الإفطار اليومية مشمولة',
        'تذاكر الدخول للمواقع الأثرية النموذجية',
      ],
    },
    exclusions: {
      fr: [
        'Dépenses personnelles et pourboires',
        'Repas du midi et du soir non spécifiés',
        'Assurances voyage',
      ],
      ar: [
        'المصاريف الشخصية والإكراميات',
        'وجبات الغداء والعشاء غير المحددة',
        'تأمين السفر',
      ],
    },
  },
  {
    id: 'pkg-3',
    slug: 'haut-atlas-vallees',
    category: 'atlas',
    durationDays: 3,
    durationNights: 2,
    title: {
      fr: 'Haut Atlas & Rencontres Berbères',
      ar: 'الأطلس الكبير والقرى الأمازيغية',
    },
    subtitle: {
      fr: 'Au pied du Mont Toubkal : sentiers alpins, terrasses agricoles et hospitalité montagnarde',
      ar: 'عند سفح جبل توبقال : ممرات جبلية، واحات خضراء وكرم الضيافة الأمازيغية',
    },
    overview: {
      fr: "Une parenthèse revigorante en altitude, idéale pour les amateurs de grands espaces et d'authenticité rurale. Échappez à l'agitation urbaine pour contempler les sommets enneigés et partager des moments simples dans les villages de pierre.",
      ar: 'رحلة طبيعية في أعالي الجبال، مثالية لعشاق المناظر البانورامية والأصالة القروية. ابتعاد عن صخب المدينة للتأمل في القمم الشاهقة وزيارة القرى الجبلية العريقة.',
    },
    startingPriceMAD: 2400,
    coverImage: '/images/atlas.jpg',
    bestSeason: {
      fr: 'Avril à Novembre',
      ar: 'من أبريل إلى نوفمبر',
    },
    featured: true,
    itinerary: [
      {
        day: 1,
        title: {
          fr: 'Marrakech - Gorges de Moulay Brahim - Vallée d’Imlil',
          ar: 'مراكش - مضايق مولاي إبراهيم - وادي إمليل',
        },
        description: {
          fr: 'Ascension vers le parc national du Toubkal, installation en auberge avec vue panoramique et première marche d’acclimatation.',
          ar: 'الصعود نحو المنتزه الوطني لتوبقال، الاستقرار في نُزُل ذي إطلالة بانورامية وجولة مشي استكشافية أولى.',
        },
      },
      {
        day: 2,
        title: {
          fr: 'Sentiers muletiers et villages d’altitude d’Aroumd',
          ar: 'ممرات جبلية وقرى أرمد في أعالي الوادي',
        },
        description: {
          fr: 'Randonnée accessible à travers les vergers de noyers et maisons en pisé, avec dégustation de thé à la menthe chez l’habitant.',
          ar: 'مسار مشي بين بساتين الجوز ومنازل الطين التقليدية، مع جلسة شاي بالنعناع لدى عائلة محلية.',
        },
      },
      {
        day: 3,
        title: {
          fr: 'Plateau du Kik - Lac Lalla Takerkoust - Retour Marrakech',
          ar: 'هضبة كيك - بحيرة لالة تاكركوست - العودة لمراكش',
        },
        description: {
          fr: 'Descente panoramique par les pistes calcaires du plateau du Kik, pause au bord du lac et retour à Marrakech en milieu d’après-midi.',
          ar: 'نزول عبر هضبة كيك الجيرية، استراحة على ضفاف البحيرة والعودة إلى مراكش بعد الظهيرة.',
        },
      },
    ],
    inclusions: {
      fr: [
        'Transfert privé aller-retour depuis Marrakech (Exemple indicatif)',
        'Hébergement 2 nuits en maison d’hôtes montagnarde',
        'Demi-pension (Petits-déjeuners et dîners du terroir)',
        'Accompagnateur de marche pour les balades pédestres (Exemple indicatif)',
      ],
      ar: [
        'نقل خاص ذهاباً وإياباً من مراكش (نموذج توضيحي)',
        'إقامة ليلتين في دار ضيافة جبلية أصيلة',
        'إقامة نصف شاملة (إفطار وعشاء من خيرات المنطقة)',
        'مرافق محلي لجولات المشي في المسارات الجبلية (مثال للعرض)',
      ],
    },
    exclusions: {
      fr: [
        'Équipement personnel de randonnée',
        'Pourboires et boissons en dehors des repas',
        'Dépenses non expressément prévues',
      ],
      ar: [
        'المعدات الشخصية للمشي الجبلي',
        'الإكراميات والمشروبات خارج الوجبات',
        'المصاريف الفردية غير المذكورة',
      ],
    },
  },
];
