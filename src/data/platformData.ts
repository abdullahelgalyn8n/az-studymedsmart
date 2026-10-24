export type PageRoute = 'home' | 'about' | 'services' | 'courses' | 'course-detail' | 'contact' | 'profile';

export interface LectureItem {
  id: string;
  code: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  locked?: boolean;
}

export interface CurriculumSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  lectures: LectureItem[];
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  instructor: string;
  originalPrice: number;
  discountedPrice: number;
  currency: string;
  lecturesCount: number;
  quizzesCount: number;
  durationWeeks: number;
  skillLevel: string;
  language: string;
  certificate: boolean;
  assessments: boolean;
  bannerImage: string;
  detailImage: string;
  highlights: {
    icon: string;
    text: string;
  }[];
  description: string;
  curriculum: CurriculumSection[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  iconName: 'book' | 'heart' | 'smile' | 'award' | 'stethoscope';
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface TrustCardItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}

export const TICKER_MESSAGES = [
  '🩺 منصة د/عمرو البركي ود/حسام عيسى',
  'شريكك للتفوق في دراستك الطبية ✨',
  '📚 فيديوهات تعليمية مبتكرة',
  'حقق الامتياز مع شرح مبسط ومهارات عملية متطورة! 🩺',
  '🗓️ اشترك الان بخصم يصل الي 50%',
  '💉 انضم إلينا وابدأ رحلتك نحو القمة!',
];

export const EXCELLENCE_PILLARS = [
  {
    id: 'basics',
    emoji: '🩺',
    text: 'تفهم أساسيات كل مادة من أول يوم.',
  },
  {
    id: 'skills',
    emoji: '👨‍⚕️',
    text: 'تتعلم المهارات اللي فعلاً هتفرق معاك في مستقبلك المهني.',
  },
  {
    id: 'plan',
    emoji: '🔬',
    text: 'تحط خطة واضحة لمستقبلك الأكاديمي والوظيفي.',
  },
  {
    id: 'love',
    emoji: '📚',
    text: 'تحب المواد اللي بتدرسها وتتخلص من عقدة المذاكرة.',
  },
];

export const TRUST_CARDS: TrustCardItem[] = [
  {
    id: 'academic',
    title: 'خبرة أكاديمية متميزة',
    description: 'فريقنا بقيادة د/عمرو البركي ود/حسام عيسى يمتلك خبرة واسعة في التعليم الطبي مع سجل حافل بالتفوق.',
    iconSrc: '/images/icon-academic.png',
  },
  {
    id: 'smart',
    title: 'تعليم مبسط وذكي',
    description: 'شرح بأسلوب د/حسام عيسى المميز يجعل المواد الطبية سهلة الفهم وممتعة.',
    iconSrc: '/images/icon-smart.svg',
  },
  {
    id: 'skills',
    title: 'مهارات عملية متقدمة',
    description: 'نركز على تطوير مهاراتك الطبية العملية لضمان التفوق في دراستك ومستقبلك المهني.',
    iconSrc: '/images/icon-skills.png',
  },
  {
    id: 'support',
    title: 'دعم مستمر للطلاب',
    description: 'نقدم دعماً شاملاً لكل مشترك طوال رحلته الدراسية لتحقيق النجاح والتميز.',
    iconSrc: '/images/icon-support.png',
  },
];

export const SERVICE_PILLARS = [
  {
    id: 'time',
    emoji: '⏰',
    title: 'توفير الوقت و المجهود',
    description: 'تنظيم ذكي للمحاضرات والمصادر يختصر عليك ساعات طويلة من البحث والتشتت بين المراجع المختلفة.',
  },
  {
    id: 'followup',
    emoji: '🔄',
    title: 'متابعة دورية و مستمرة',
    description: 'جدول مذاكرة أسبوعي ومتابعة شخصية مع الفريق العلمي لضمان التزامك وتقدمك المستمر طوال الترم.',
  },
  {
    id: 'exams',
    emoji: '📋',
    title: 'امتحانات و واجبات تفاعلية',
    description: 'بنك أسئلة وتدريبات عملية عقب كل محاضرة لقياس مدى استيعابك وتدريبك على نظام امتحانات الكلية.',
  },
];

export const ABOUT_VALUES: ValueItem[] = [
  {
    id: 'professionalism',
    title: 'الاحترافية في الأداء',
    description: 'نلتزم بأعلى معايير الجودة والانضباط في تقديم خدماتنا لضمان رضا الطلاب وثقتهم.',
  },
  {
    id: 'innovation',
    title: 'الابتكار في الحلول',
    description: 'نبحث دائمًا عن طرق جديدة ومبدعة لمواجهة التحديات وتقديم أفضل النتائج.',
  },
  {
    id: 'credibility',
    title: 'المصداقية في التعامل',
    description: 'الشفافية والثقة هي أساس علاقتنا مع طلابنا، نحرص دائمًا على الوضوح والصدق.',
  },
  {
    id: 'excellence',
    title: 'التميز في النتائج',
    description: 'نسعى لتحقيق نتائج ملموسة تحدث فرقًا حقيقيًا في حياة طلابنا الأكاديمية والمهنية.',
  },
  {
    id: 'empowerment',
    title: 'التمكين للأفراد',
    description: 'نمنح طلابنا الأدوات والمعرفة التي يحتاجونها ليصبحوا قادرين على بناء مستقبلهم بثقة واستقلالية.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'ما هي منصة د/عمرو البركي و د/حسام عيسى؟',
    answer: 'منصة تعليمية طبية تهدف إلى تأهيل طلاب الكليات الطبية للوصول إلى أعلى درجات الفهم والتفوق. تقدم المنصة محتوى علمي مبسط، يشمل شرحًا لكل المواد الأساسية والمهارات الطبية المطلوبة.',
    iconName: 'book',
  },
  {
    id: 'faq-2',
    question: 'ما الكليات التي تستهدفها المنصة؟',
    answer: 'المنصة موجهة لطلاب الطب البشري، الصيدلة، التمريض، العلاج الطبيعي، طب الأسنان، وعلوم طبية، والطب البيطري والمعاهد الصحية، وذلك لمساعدتهم على فهم المناهج، واكتساب المهارات، والتفوق في دراستهم من أول يوم.',
    iconName: 'heart',
  },
  {
    id: 'faq-3',
    question: 'هل المحتوى مناسب للمستوى المبتدئ؟',
    answer: 'نعم، جميع الدروس والمهارات مصممة لتناسب الطلاب في السنوات الأولى، وخصوصًا من ليس لديهم أي خلفية طبية. نبدأ من الأساسيات ونبني عليها تدريجيًا بأسلوب مبسط وعملي.',
    iconName: 'smile',
  },
  {
    id: 'faq-4',
    question: 'ما الذي يميز المنصة عن أي مصدر آخر؟',
    answer: 'المنصة تجمع بين الشرح المبسط، المهارات الطبية، التخطيط للمستقبل، وأسرار الامتياز الحقيقي. كما يقدمها نخبة من الأطباء أصحاب الخبرة والنتائج الفعلية على مدار سنوات دراستهم.',
    iconName: 'award',
  },
  {
    id: 'faq-5',
    question: 'هل الكورس يساعدني على المذاكرة وتنظيم الوقت؟',
    answer: 'نعم، الكورس يحتوي على استراتيجيات فعالة لإدارة الوقت، والتعامل مع ضغط الدراسة، وتنظيم المواد. كما يشمل نصائح من د/عمرو البركي عن المذاكرة الذكية والتخطيط الأسبوعي.',
    iconName: 'stethoscope',
  },
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'course-main-foundation',
    slug: 'تاهيل-متكامل',
    title: 'تاهيل متكامل يؤهلك ويضعك على اولى خطوات التفوق في الكليات الطبية',
    shortTitle: 'كورس التأهيل للكليات الطبية',
    category: 'كورسات التاهيل',
    instructor: 'Dr Amr Elbaraky & Dr Hossam eissa',
    originalPrice: 1600,
    discountedPrice: 799,
    currency: 'EGP',
    lecturesCount: 64,
    quizzesCount: 0,
    durationWeeks: 27,
    skillLevel: 'جميع المستويات',
    language: 'English / العربية',
    certificate: true,
    assessments: true,
    bannerImage: '/images/course-banner.jpg',
    detailImage: '/images/course-detail-banner.jpg',
    highlights: [
      {
        icon: '🎯',
        text: 'أول كورس تأهيل متكامل يؤهلك ويضعك على أولى خطوات التفوق في الكليات الطبية: (طب بشري، تمريض، علاج طبيعي، أسنان، علوم , صيدلة علوم صحية تطبيقية طب بيطري معاهد صحية)',
      },
      {
        icon: '⭐',
        text: 'كورس مبسط يضمن لك الامتياز في الكلية لاحتوائه على 7 فروع :شرح كل مواد كليتك ك basics شرح كل ال systems الاسعافات الاولية المهارات الطبية الأساسية، المصطلحات الطبية، الاختصارات وأساسيات كل المواد الطبية',
      },
      {
        icon: '💡',
        text: 'نصائح وأسرار مصادر المذاكرة التي يأتي منها الامتحانات وأخيراً بودكاست مع أشهر صناع المحتوى لكل كلية طبية',
      },
      {
        icon: '🚀',
        text: 'يعلمك كيف تخطط مستقبلك خطوة بخطوة ويكشف لك كل أسرار المعادلات والسفر للخارج',
      },
    ],
    description:
      'اول كورس تاهيل متكامل يؤهلك ويضعك على اولى خطوات التفوق في الكليات الطبية : (طب بشري ،تمريض، علاج طبيعي، اسنان ، صيدلة ,علوم , علوم صحية تطبيقية , طب بيطري والمعاهد الطبية ) ، كورس مبسط يضمن لك الامتياز في الكلية لاحتوائه على 7 فروع :شرح اساسيات كل مواد كليتك وشرح كل اجهزة الجسم و المهارات الطبية الاساسية ، المصطلحات الطبية ، الاختصارات بالاضافة للاسعافات الاولية، نصائح واسرار مصادر المذاكرة التي ياتي منها الامتحانات واخيرا بودكاست مع اشهر صناع المحتوى لكل كلية طبية يعلمك كيف تخطط مستقبلك خطوة بخطوة ويكشف لك كل اسرار المعادلات والسفر للخارج',
    curriculum: [
      {
        id: 'sec-1',
        number: 1,
        title: 'الفرع الأول: المصطلحات الطبية والأساسيات (Medical Terminology & Basics)',
        subtitle: '10 محاضرات تأسيسية من الصفر حتى إتقان قراءة التحاليل والمصطلحات',
        lectures: [
          { id: '1.1', code: '1.1', title: 'المحاضرة التأسيسية الاولى : الاساسيات من الصفر Basics', duration: 'ساعتان', isPreview: true, locked: false },
          { id: '1.2', code: '1.2', title: 'اهم الاختصارات الطبية', duration: '17 دقيقة', isPreview: true, locked: false },
          { id: '1.3', code: '1.3', title: 'مصطلحات الوجه', duration: '14 دقيقة', locked: true },
          { id: '1.4', code: '1.4', title: 'سوائل الجسم Body fluids', duration: '5 دقائق', locked: true },
          { id: '1.5', code: '1.5', title: 'المواد subjects', duration: '15 دقيقة', locked: true },
          { id: '1.6', code: '1.6', title: 'الاتجاهات ومصطلحات الامراض (مهم جدا)', duration: 'ساعة واحدة', locked: true },
          { id: '1.7', code: '1.7', title: 'التحويل من الانجليزية الى اللغة الطبية', duration: '12 دقيقة', locked: true },
          { id: '1.8', code: '1.8', title: 'كلمات وكويزات الجزء الاول', duration: '15 دقيقة', locked: true },
          { id: '1.9', code: '1.9', title: 'كلمات وكويزات الجزء الثاني', duration: '20 دقيقة', locked: true },
          { id: '1.10', code: '1.10', title: 'كيفية قراءة تحاليل الدم (مهم جدا للحياة العملية)', duration: '15 دقيقة', locked: true },
        ],
      },
      {
        id: 'sec-2',
        number: 2,
        title: 'الفرع الثاني: أجهزة الجسم البشرية (Body Systems)',
        subtitle: '8 محاضرات شاملة لشرح كافة أجهزة الجسم بأسلوب مبسط',
        lectures: [
          { id: '2.1', code: '2.1', title: 'جهاز القلب والاوعية الدموية CVS', duration: '25 دقيقة', isPreview: true, locked: false },
          { id: '2.2', code: '2.2', title: 'الجهاز المناعي immune system', duration: '10 دقائق', locked: true },
          { id: '2.3', code: '2.3', title: 'الجهاز التناسلي Reproductive system', duration: '18 دقيقة', locked: true },
          { id: '2.4', code: '2.4', title: 'الجهاز الهضمي GIT', duration: '17 دقيقة', locked: true },
          { id: '2.5', code: '2.5', title: 'جهاز الغدد الصماء Endocrine system', duration: '15 دقيقة', locked: true },
          { id: '2.6', code: '2.6', title: 'الجهاز العصبي Nervous system', duration: '13 دقيقة', locked: true },
          { id: '2.7', code: '2.7', title: 'الجهاز البولي urinary system', duration: '10 دقائق', locked: true },
          { id: '2.8', code: '2.8', title: 'الجهاز التنفسي Respiratory system', duration: '15 دقيقة', locked: true },
        ],
      },
      {
        id: 'sec-3',
        number: 3,
        title: 'الفرع الثالث: الإسعافات الأولية والمهارات الإكلينيكية (First Aid & Clinical Skills)',
        subtitle: '23 محاضرة عملية للتعامل مع الطوارئ والحالات الحرجة',
        lectures: [
          { id: '3.1', code: '3.1', title: 'CPR for adults الانعاش القلبي الرئوي للبالغين', duration: '18 دقيقة', isPreview: true, locked: false },
          { id: '3.2', code: '3.2', title: 'CPR for child', duration: '5 دقائق', locked: true },
          { id: '3.3', code: '3.3', title: 'CPR for baby', duration: '6 دقائق', locked: true },
          { id: '3.4', code: '3.4', title: 'الجلطة الدماغية', duration: '4 دقائق', locked: true },
          { id: '3.5', code: '3.5', title: 'جلطة القلب', duration: '4 دقائق', locked: true },
          { id: '3.6', code: '3.6', title: 'الاختناق في الاطفال', duration: '5 دقائق', locked: true },
          { id: '3.7', code: '3.7', title: 'الاختناق في البالغين', duration: '3 دقائق', locked: true },
          { id: '3.8', code: '3.8', title: 'التعامل مع الحروق', duration: '5 دقائق', locked: true },
          { id: '3.9', code: '3.9', title: 'التعامل مع نزيف الانف', duration: '5 دقائق', locked: true },
          { id: '3.10', code: '3.10', title: 'لدغة الثعبان الاسعافات الاولية', duration: '5 دقائق', locked: true },
          { id: '3.11', code: '3.11', title: 'التعامل مع حالات التسمم', duration: '3 دقائق', locked: true },
          { id: '3.12', code: '3.12', title: 'حالات بلع اللسان', duration: '3 دقائق', locked: true },
          { id: '3.13', code: '3.13', title: 'التعامل مع حالات غيبوبة السكر', duration: '7 دقائق', locked: true },
          { id: '3.14', code: '3.14', title: 'التعامل مع حالات الصرع Epilepsy', duration: '3 دقائق', locked: true },
          { id: '3.15', code: '3.15', title: 'دخول جسم غريب للعين', duration: '5 دقائق', locked: true },
          { id: '3.16', code: '3.16', title: 'التهاب الزائدة', duration: '5 دقائق', locked: true },
          { id: '3.17', code: '3.17', title: 'التهاب المرارة', duration: '5 دقائق', locked: true },
          { id: '3.18', code: '3.18', title: 'التعامل مع الجروح', duration: '4 دقائق', locked: true },
          { id: '3.19', code: '3.19', title: 'هبوط حاد في الدورة الدموية', duration: '4 دقائق', locked: true },
          { id: '3.20', code: '3.20', title: 'ازمة ارتفاع الضغط', duration: '4 دقائق', locked: true },
          { id: '3.21', code: '3.21', title: 'التعامل مع عضة الكلب', duration: '5 دقائق', locked: true },
          { id: '3.22', code: '3.22', title: 'التعامل مع الكسور', duration: '5 دقائق', locked: true },
          { id: '3.23', code: '3.23', title: 'ضربة الشمس', duration: '3 دقائق', locked: true },
        ],
      },
      {
        id: 'sec-4',
        number: 4,
        title: 'الفرع الرابع: تأسيس المواد الأكاديمية الطبية (Academic Medical Subjects)',
        subtitle: '8 محاضرات لتأسيس مواد الكلية الأساسية قبل الدراسة',
        lectures: [
          { id: '4.1', code: '4.1', title: 'Immunology علم المناعة', duration: '31 دقيقة', locked: true },
          { id: '4.2', code: '4.2', title: 'تأسيس Biochemistry الكيمياء الحيوية', duration: '32 دقيقة', locked: true },
          { id: '4.3', code: '4.3', title: 'Histology علم الانسجة', duration: '29 دقيقة', locked: true },
          { id: '4.4', code: '4.4', title: 'Physiology basics علم وظائف الاعضاء', duration: '25 دقيقة', locked: true },
          { id: '4.5', code: '4.5', title: 'تأسيس علم التشريح Anatomy', duration: '34 دقيقة', locked: true },
          { id: '4.6', code: '4.6', title: 'Genetics basics part 1 الوراثة والبيولوجيا الجزيئية', duration: '32 دقيقة', locked: true },
          { id: '4.7', code: '4.7', title: 'Genetics part 2 : DNA', duration: '20 دقيقة', locked: true },
          { id: '4.8', code: '4.8', title: 'Genetics quiz', duration: '6 دقائق', locked: true },
        ],
      },
      {
        id: 'sec-5',
        number: 5,
        title: 'الفرع الخامس: أسرار المذاكرة الذكية والتفوق (Study Tips & Exam Secrets)',
        subtitle: '7 محاضرات حول طرق المذاكرة الفعالة ومصادر الامتحانات',
        lectures: [
          { id: '5.1', code: '5.1', title: 'study tips part 1', duration: '10 دقائق', locked: true },
          { id: '5.2', code: '5.2', title: 'study tips part 2', duration: '10 دقائق', locked: true },
          { id: '5.3', code: '5.3', title: 'study tips part 3', duration: '5 دقائق', locked: true },
          { id: '5.4', code: '5.4', title: 'study tips part 4', duration: '4 دقائق', locked: true },
          { id: '5.5', code: '5.5', title: 'study tips part 5', duration: '5 دقائق', locked: true },
          { id: '5.6', code: '5.6', title: 'study tips part 6', duration: '5 دقائق', locked: true },
          { id: '5.7', code: '5.7', title: 'study tips part 7', duration: '5 دقائق', locked: true },
        ],
      },
      {
        id: 'sec-6',
        number: 6,
        title: 'الفرع السادس: بودكاست الكليات الطبية والتخطيط للمستقبل (Medical Faculties Podcasts)',
        subtitle: '8 لقاءات مع أشهر صناع المحتوى لكل كلية طبية وأسرار المعادلات والسفر',
        lectures: [
          { id: '6.1', code: '6.1', title: 'بودكاست كلية طب بشري', duration: '48 دقيقة', locked: true },
          { id: '6.2', code: '6.2', title: 'بودكاست كلية علاج طبيعي', duration: '19 دقيقة', locked: true },
          { id: '6.3', code: '6.3', title: 'بودكاست كلية تمريض', duration: '25 دقيقة', locked: true },
          { id: '6.4', code: '6.4', title: 'بودكاست كلية اسنان', duration: '20 دقيقة', locked: true },
          { id: '6.5', code: '6.5', title: 'بودكاست كلية صيدلة', duration: '15 دقيقة', locked: true },
          { id: '6.6', code: '6.6', title: 'بودكاست كلية طب بيطري', duration: '15 دقيقة', locked: true },
          { id: '6.7', code: '6.7', title: 'بودكاست كلية تكنولوجيا علوم صحية تطبيقية', duration: '15 دقيقة', locked: true },
          { id: '6.8', code: '6.8', title: 'بودكاست معهد فني صحي', duration: '12 دقيقة', locked: true },
        ],
      },
    ],
  },
];
