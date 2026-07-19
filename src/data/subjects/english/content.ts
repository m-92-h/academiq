import type { Topic } from "@/types/data";

export const englishTopics: Topic[] = [
  // 1. PARTS OF SPEECH — أجزاء الكلام الثمانية
  {
    id: "en-parts-of-speech",
    title: "أجزاء الكلام (Parts of Speech)",
    subtitle: "تصنيف الكلمات الإنجليزية إلى ثمانية أصناف رئيسية",
    content:
      "تنقسم كلمات اللغة الإنجليزية إلى ثمانية أصناف رئيسية تُعرف بـ Parts of Speech، وفهمها هو أساس بناء الجمل الصحيحة.\n\n" +
      "1) الاسم (Noun): كلمة تدلّ على شخص أو مكان أو شيء أو فكرة.\n" +
      "أمثلة: student, Baghdad, freedom, book.\n" +
      "يقسم الاسم إلى: اسم مُعيَّن (Proper Noun) مثل Iraq، واسم جنس (Common Noun) مثل city، واسم مجموع (Collective Noun) مثل team، واسم مجرد (Abstract Noun) مثل love.\n\n" +
      "2) الفعل (Verb): كلمة تعبّر عن حدث أو حالة.\n" +
      "أمثلة: run, is, have, study.\n" +
      "يُقسَّم إلى: فعل تصرف (Action Verb) مثل write، وفعل رابط (Linking Verb) مثل seem/feel/look، وفعل مساعد (Auxiliary Verb) مثل do/have/will.\n\n" +
      "3) الصفة (Adjective): كلمة تصف الاسم أو تحدد خصائصه.\n" +
      "أمثلة: tall, beautiful, important, first.\n\n" +
      "4) الظرف (Adverb): كلمة تُعدِّل الفعل أو الصفة أو ظرفاً آخر.\n" +
      "أمثلة: quickly, very, here, always.\n\n" +
      "5) الضمير (Pronoun): كلمة تحلّ محلّ الاسم لتجنّب التكرار.\n" +
      "أمثلة: he, she, they, it, we.\n\n" +
      "6) حرف الجر (Preposition): كلمة تربط الاسم أو الضمير بكلمات أخرى لتبيّن العلاقة الزمانية أو المكانية.\n" +
      "أمثلة: in, on, at, by, from.\n\n" +
      "7) أداة الربط (Conjunction): كلمة تصل الجمل أو العبارات أو الكلمات.\n" +
      "أمثلة: and, but, or, because, although.\n\n" +
      "8) أداة التعجب (Interjection): كلمة تعبّر عن انفعال أو مشاعر مفاجئة.\n" +
      "أمثلة: Oh!, Wow!, Oops!, Well!",

    keyPoints: [
      "Noun (اسم) — يدل على شخص أو مكان أو شيء أو فكرة: teacher, city, love",
      "Verb (فعل) — يعبّر عن حدث أو حالة: write, is, seem",
      "Adjective (صفة) — تصف الاسم: smart, large, first",
      "Adverb (ظرف) — يُعدِّل الفعل أو الصفة: slowly, very, often",
      "Pronoun (ضمير) — يحلّ محلّ الاسم: he, she, they",
      "Preposition (حرف جر) — يربط الكلمات: in, on, at, by",
      "Conjunction (أداة ربط) — تصل الجمل والعبارات: and, but, because",
      "Interjection (تعجب) — تعبّر عن انفعال: Oh!, Wow!",
    ],
  },

  // 2. ARTICLES — أدوات التعريف والتنكير
  {
    id: "en-articles",
    title: "أدوات التعريف والتنكير (Articles)",
    subtitle: "استخدام a / an / the بشكل صحيح",
    content:
      "تنقسم الأدوات (Articles) في اللغة الإنجليزية إلى نوعين: أداة التنكير وأداة التعريف.\n\n" +
      "أولاً — أداة التنكير (Indefinite Article): a / an\n" +
      "تُستخدم مع الأسماء المفردة القابلة للعدّ حين يكون الاسم غير محدد أو يُذكر لأول مرة.\n" +
      "• (a) تُستخدم قبل الأسماء التي تبدأ بصوت ساكن (Consonant Sound):\n" +
      "  a book, a university (لأن u هنا تُنطق يو)، a European.\n" +
      "• (an) تُستخدم قبل الأسماء التي تبدأ بصوت متحرك (Vowel Sound):\n" +
      "  an apple, an hour (لأن h صامتة)، an honest man.\n\n" +
      "ثانياً — أداة التعريف (Definite Article): the\n" +
      "تُستخدم مع الأسماء المعروفة والمحددة لدى المتحدث والمستمع معاً.\n" +
      "حالات استخدام (the):\n" +
      "• عند الذكر الثاني للاسم: I saw a dog. The dog was friendly.\n" +
      "• مع الأشياء الوحيدة في وجودها: the sun, the moon, the Earth.\n" +
      "• مع أسماء الجبال والأنهار والمحيطات: the Nile, the Pacific.\n" +
      "• مع الترتيب والأوصاف التفضيلية: the first, the best.\n\n" +
      "ثالثاً — حذف الأداة (Zero Article)\n" +
      "لا تُستخدم أي أداة في الحالات التالية:\n" +
      "• مع أسماء العلم والدول: Iraq, Ahmed.\n" +
      "• مع الأسماء غير المعدودة بشكل عام: Water is important. / I like music.\n" +
      "• مع الجمع حين يُقصد المعنى العام: Books are useful.",

    keyPoints: [
      "(a) — قبل الأصوات الساكنة: a car, a book, a university",
      "(an) — قبل الأصوات المتحركة: an apple, an hour, an idea",
      "(the) — مع المعروف والمحدد: the president, the Nile",
      "(the) — مع الوحيد في وجوده: the sun, the moon",
      "Zero Article — مع الأسماء العامة غير المعدودة: Love is blind",
      "Zero Article — مع أسماء الدول والعلم: Iraq, Ali",
    ],
  },

  // 3. PRONOUNS — الضمائر
  {
    id: "en-pronouns",
    title: "الضمائر (Pronouns)",
    subtitle: "ضمائر الرفع والنصب والملكية والانعكاسية",
    content:
      "الضمير (Pronoun) هو كلمة تحلّ محلّ الاسم لتجنّب التكرار. تنقسم ضمائر اللغة الإنجليزية إلى أنواع عدة:\n\n" +
      "1) ضمائر الفاعل (Subject Pronouns):\n" +
      "تُستخدم حين يكون الضمير فاعلاً في الجملة.\n" +
      "I, You, He, She, It, We, They\n" +
      "مثال: She studies every day. / They are students.\n\n" +
      "2) ضمائر المفعول (Object Pronouns):\n" +
      "تُستخدم حين يكون الضمير مفعولاً به أو بعد حروف الجر.\n" +
      "me, you, him, her, it, us, them\n" +
      "مثال: I saw him yesterday. / She gave it to me.\n\n" +
      "3) ضمائر الملكية المستقلة (Possessive Adjectives):\n" +
      "تسبق الاسم وتدلّ على الملكية.\n" +
      "my, your, his, her, its, our, their\n" +
      "مثال: This is my book. / Their teacher is kind.\n\n" +
      "4) ضمائر الملكية المنفصلة (Possessive Pronouns):\n" +
      "تحلّ محلّ الاسم ولا تسبقه.\n" +
      "mine, yours, his, hers, ours, theirs\n" +
      "مثال: This book is mine. / That car is hers.\n\n" +
      "5) الضمائر الانعكاسية (Reflexive Pronouns):\n" +
      "تُشير إلى أن الفاعل والمفعول شخص واحد، أو تُستخدم للتأكيد.\n" +
      "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves\n" +
      "مثال: He hurt himself. / She made it herself.",

    keyPoints: [
      "Subject Pronouns — فاعل الجملة: I, You, He, She, It, We, They",
      "Object Pronouns — المفعول وما بعد حروف الجر: me, him, her, us, them",
      "Possessive Adjectives — تسبق الاسم: my, your, his, her, our, their",
      "Possessive Pronouns — تحلّ محلّ الاسم: mine, yours, his, hers, ours, theirs",
      "Reflexive Pronouns — انعكاسية: myself, himself, themselves",
    ],
  },

  // 4. QUESTION WORDS — أدوات الاستفهام
  {
    id: "en-question-words",
    title: "أدوات الاستفهام (Question Words)",
    subtitle: "What, Who, Where, When, Why, How وكيفية استخدامها",
    content:
      "أدوات الاستفهام (Wh-Questions) هي الكلمات التي نستخدمها لصياغة الأسئلة التي تطلب معلومات محددة.\n\n" +
      "What — ماذا / ما:\n" +
      "للسؤال عن الشيء أو الفعل.\n" +
      "مثال: What is your name? / What are you doing?\n\n" +
      "Who — مَن:\n" +
      "للسؤال عن شخص (فاعل).\n" +
      "مثال: Who called you? / Who is she?\n\n" +
      "Whom — مَن (مفعول به):\n" +
      "للسؤال عن شخص مفعول به أو بعد حرف جر.\n" +
      "مثال: Whom did you meet? / To whom did you speak?\n\n" +
      "Where — أين:\n" +
      "للسؤال عن المكان.\n" +
      "مثال: Where do you live? / Where is the library?\n\n" +
      "When — متى:\n" +
      "للسؤال عن الزمن.\n" +
      "مثال: When did you arrive? / When is the exam?\n\n" +
      "Why — لماذا:\n" +
      "للسؤال عن السبب.\n" +
      "مثال: Why are you late? / Why did she leave?\n\n" +
      "Which — أيّ:\n" +
      "للاختيار من بين خيارات محددة.\n" +
      "مثال: Which book do you prefer? / Which road is shorter?\n\n" +
      "Whose — لمَن / لمَن تعود الملكية:\n" +
      "للسؤال عن المالك.\n" +
      "مثال: Whose pen is this? / Whose car is parked outside?\n\n" +
      "How — كيف:\n" +
      "للسؤال عن الطريقة أو الحال.\n" +
      "مثال: How do you go to university? / How are you?\n" +
      "ويمكن دمج How مع كلمات أخرى للسؤال عن تفاصيل مختلفة (سيُشرح في درس خاص).",

    keyPoints: [
      "What — السؤال عن الشيء أو الفعل: What is this?",
      "Who — السؤال عن الشخص فاعلاً: Who called?",
      "Where — السؤال عن المكان: Where is the exam hall?",
      "When — السؤال عن الزمن: When does class start?",
      "Why — السؤال عن السبب: Why did he fail?",
      "Which — الاختيار من بين خيارات: Which answer is correct?",
      "Whose — الملكية: Whose book is this?",
      "How — الطريقة والحال: How do you study?",
    ],
  },

  // 5. PRESENT SIMPLE — المضارع البسيط
  {
    id: "en-present-simple",
    title: "المضارع البسيط (Present Simple)",
    subtitle: "الأفعال المعتادة والحقائق الدائمة والمواعيد الثابتة",
    content:
      "المضارع البسيط (Present Simple) يُعبِّر عن الأفعال المعتادة والحقائق الثابتة والروتين اليومي.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + V1 (للفاعل الثالث المفرد نضيف s/es)\n" +
      "\n  I study / He studies / She watches / It runs.\n" +
      "\n• المنفي: Subject + do/does + not + V1\n" +
      "\n  I don't study. / He doesn't watch TV.\n" +
      "\n• السؤال: Do/Does + Subject + V1?\n" +
      "\n  Do you study? / Does she work here?\n\n" +
      "**الاستخدامات:**\n" +
      "1. الروتين والعادات: I wake up at 6 every morning.\n" +
      "2. الحقائق الثابتة والعلمية: The Earth revolves around the Sun.\n" +
      "3. الحقائق العامة: Water boils at 100°C.\n" +
      "4. الجداول الزمنية الرسمية: The train leaves at 8 a.m.\n" +
      "5. التعليمات والإرشادات: First, you open the file, then you click save.\n\n" +
      "الكلمات الدالة على المضارع البسيط (Signal Words):\n" +
      "\nalways — دائماً\n" +
      "\nusually — عادةً\n" +
      "\noften — كثيراً\n" +
      "\nsometimes — أحياناً\n" +
      "\nrarely / seldom — نادراً\n" +
      "\nnever — لا أبداً\n" +
      "\nevery day / week / year — كل يوم / أسبوع / سنة\n" +
      "\non Mondays — كل يوم اثنين\n\n" +
      "أمثلة:\n" +
      "\nShe always reads before sleeping.\n" +
      "\nWe never eat fast food.\n" +
      "\nHe usually goes to the library on Saturdays.",

    keyPoints: [
      "التكوين المثبت: He/She/It + V+s/es — She studies hard",
      "التكوين المنفي: don't / doesn't + V1 — He doesn't play",
      "السؤال: Do/Does + Subject + V1? — Does she teach here?",
      "always, usually, often, sometimes — كلمات دالة على التكرار",
      "every day / on Mondays — للتعبير عن العادات الدورية",
      "الحقائق العلمية والثابتة: The sun rises in the east",
    ],
  },

  // 6. PAST SIMPLE — الماضي البسيط
  {
    id: "en-past-simple",
    title: "الماضي البسيط (Past Simple)",
    subtitle: "الأفعال المنتهية في الماضي بزمن محدد",
    content:
      "الماضي البسيط (Past Simple) يُعبِّر عن أفعال بدأت وانتهت في الماضي، غالباً في وقت محدد معروف.\n\n" +
      "**التكوين:**\n" +
      "\n• الأفعال المنتظمة (Regular Verbs): نضيف (ed) لنهاية الفعل.\n" +
      "\n  study → studied / work → worked / play → played.\n" +
      "\n• الأفعال الشاذة (Irregular Verbs): لها صيغة خاصة في الماضي.\n" +
      "\n  go → went / write → wrote / see → saw / buy → bought.\n" +
      "\n• المنفي: Subject + did not (didn't) + V1\n" +
      "\n  She didn't go to class yesterday.\n" +
      "\n• السؤال: Did + Subject + V1?\n" +
      "\n  Did you finish your homework?\n\n" +
      "**الاستخدامات:**\n" +
      "1. أحداث منتهية في وقت محدد من الماضي:\n" +
      "   I graduated in 2022. / She called me last night.\n" +
      "2. سلسلة أحداث متتالية في الماضي:\n" +
      "   He entered the room, sat down, and opened his book.\n" +
      "3. عادات أو حالات ماضية لم تعد موجودة:\n" +
      "   When I was young, I played football every day.\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nyesterday — أمس\n" +
      "\nlast night / week / year — الليلة الماضية / الأسبوع الماضي / السنة الماضية\n" +
      "\nago — منذ (two days ago, three years ago)\n" +
      "\nin 2020 / in January — في سنة محددة\n" +
      "\nwhen — عندما (في سياق الماضي)\n\n" +
      "**أمثلة:**\n" +
      "\nI visited Baghdad two years ago.\n" +
      "\nShe didn't study last night.\n" +
      "\nDid they pass the national exam?",

    keyPoints: [
      "الأفعال المنتظمة: + ed — worked, studied, played",
      "الأفعال الشاذة: صيغة خاصة — went, wrote, saw, bought",
      "المنفي: didn't + V1 — She didn't come",
      "السؤال: Did + Subject + V1? — Did you study?",
      "yesterday, last, ago, in (year) — الكلمات الدالة",
      "حدث منتهٍ بوقت محدد في الماضي: I finished the exam at noon",
    ],
  },

  // 7. PRESENT CONTINUOUS — المضارع المستمر
  {
    id: "en-present-continuous",
    title: "المضارع المستمر (Present Continuous)",
    subtitle: "الأفعال الجارية الآن أو المخططة في المستقبل القريب",
    content:
      "المضارع المستمر (Present Continuous) يُعبِّر عن أفعال تجري لحظة التحدث، أو أفعال مستمرة حول وقت الحديث، أو خطط مستقبلية محددة مسبقاً.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + am/is/are + V-ing\n" +
      "\n  I am studying. / She is reading. / They are working.\n" +
      "\n• المنفي: Subject + am/is/are + not + V-ing\n" +
      "\n  He is not sleeping. / We aren't listening.\n" +
      "\n• السؤال: Am/Is/Are + Subject + V-ing?\n" +
      "\n  Are you coming? / Is she teaching now?\n\n" +
      "**قواعد إضافة ing:**\n" +
      "\n• الفعل ينتهي بـ e → نحذف e ونضيف ing: write → writing\n" +
      "\n• الفعل المقطع بحرف واحد × مُشكَّل × آخره حرف ساكن → نضاعف: run → running, sit → sitting\n" +
      "\n• الحالة العامة: نضيف ing فقط: study → studying\n\n" +
      "**الاستخدامات:**\n" +
      "1. حدث جارٍ الآن: She is talking on the phone right now.\n" +
      "2. موقف مؤقت مستمر: He is staying at his cousin's house this week.\n" +
      "3. تغيّر وتطور ملحوظ: Technology is improving rapidly.\n" +
      "4. خطة مستقبلية محددة: We are meeting the professor tomorrow.\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nnow — الآن\n" +
      "\nright now — في هذه اللحظة بالذات\n" +
      "\nat the moment — في الوقت الحالي\n" +
      "\ncurrently — حالياً\n" +
      "\ntoday — اليوم (بمعنى مستمر)\n" +
      "\nLook! / Listen! — دليل على حدث جارٍ\n\n" +
      "**أمثلة:**\n" +
      "\nI am preparing for my national exam right now.\n" +
      "\nThey are not paying attention at the moment.\n" +
      "\nIs the professor explaining a new topic?",

    keyPoints: [
      "التكوين: am/is/are + V-ing — She is studying",
      "المنفي: am/is/are + not + V-ing — He isn't sleeping",
      "السؤال: Am/Is/Are + Subject + V-ing? — Are you listening?",
      "now, right now, at the moment, currently — الكلمات الدالة",
      "Look! / Listen! — تدلّان على حدث جارٍ الآن",
      "خطة مستقبلية محددة: We are leaving tomorrow morning",
    ],
  },

  // 8. PAST CONTINUOUS — الماضي المستمر
  {
    id: "en-past-continuous",
    title: "الماضي المستمر (Past Continuous)",
    subtitle: "فعل كان جارياً في لحظة محددة من الماضي",
    content:
      "الماضي المستمر (Past Continuous) يُعبِّر عن فعل كان مستمراً في لحظة أو فترة زمنية محددة في الماضي.\n\n" +
      "**التكوين:**\n" +
      "\n•  المثبت: Subject + was/were + V-ing\n" +
      "\n  I was sleeping. / They were studying.\n" +
      "\n•  المنفي: Subject + was/were + not + V-ing\n" +
      "\n  She wasn't listening. / We weren't playing.\n" +
      "\n•  السؤال: Was/Were + Subject + V-ing?\n" +
      "\n  Were you studying last night? / Was he working?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. فعل كان مستمراً في لحظة محددة من الماضي:\n" +
      "\n   At 10 p.m., she was reading her notes.\n" +
      "\n2. فعل مستمر انقطع بفعل آخر في الماضي (Past Simple):\n" +
      "\n   I was studying when the power went out.\n" +
      "\n   (was studying = Past Continuous | went out = Past Simple)\n" +
      "\n3. فعلان مستمران في نفس الوقت في الماضي:\n" +
      "\n   While she was cooking, he was watching TV.\n" +
      "\n4. وصف خلفية القصة أو السياق:\n" +
      "\n   It was raining, and the streets were empty.\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nwhile — بينما\n" +
      "\nwhen — عندما (مع Past Simple للفعل المقاطِع)\n" +
      "\nat that time — في ذلك الوقت\n" +
      "\nat + وقت محدد في الماضي: at 8 o'clock last night\n" +
      "\nall day / all morning — طوال اليوم / الصباح\n\n" +
      "**أمثلة:**\n" +
      "\nHe was writing his thesis when his laptop crashed.\n" +
      "\nWhile I was walking to university, it started to rain.\n" +
      "\nThey were discussing the results at midnight.",

    keyPoints: [
      "التكوين: was/were + V-ing — He was studying",
      "المنفي: wasn't/weren't + V-ing — She wasn't listening",
      "السؤال: Was/Were + Subject + V-ing?",
      "while, when, at that time — الكلمات الدالة الرئيسية",
      "فعل مستمر + فعل مقاطِع: I was sleeping when he called",
      "وصف السياق في القصة: It was raining heavily",
    ],
  },

  // 9. PRESENT PERFECT — المضارع التام + since / for
  {
    id: "en-present-perfect",
    title: "المضارع التام (Present Perfect) + since / for",
    subtitle: "تجربة حدثت في الماضي لها صلة بالحاضر",
    content:
      "المضارع التام (Present Perfect) يربط الماضي بالحاضر؛ يُعبِّر عن خبرة أو إنجاز أو حدث وقع في الماضي وله أثر أو صلة بالوقت الحالي.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + have/has + Past Participle (V3)\n" +
      "\n  I have finished. / She has arrived. / We have studied.\n" +
      "\n• المنفي: Subject + have/has + not + V3\n" +
      "\n  He hasn't eaten yet. / They haven't submitted the form.\n" +
      "\n• السؤال: Have/Has + Subject + V3?\n" +
      "\n  Have you ever been to London? / Has she passed the exam?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. تجربة حدثت في الماضي دون تحديد زمن:\n" +
      "\n   I have visited three countries.\n" +
      "\n2. حدث تمّ للتو (just):\n" +
      "\n   She has just finished her presentation.\n" +
      "\n3. حدث لم يقع بعد (yet) أو قد وقع (already):\n" +
      "\n   I haven't read this chapter yet. / I have already done it.\n" +
      "\n4. حالة بدأت في الماضي ومستمرة حتى الآن مع since/for:\n" +
      "\n   I have studied English for three years.\n" +
      "\n   She has lived in Baghdad since 2010.\n\n" +
      "**since مقابل for:**\n" +
      "\n• since — منذ (نقطة زمنية محددة):\n" +
      "\n  since 2018 / since January / since I was a child\n" +
      "\n• for — لمدة (فترة زمنية):\n" +
      "\n  for two hours / for a week / for many years\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\njust — للتو\n" +
      "\nalready — بالفعل (جملة مثبتة)\n" +
      "\nyet — بعد (جملة منفية أو سؤال)\n" +
      "\never — في أي وقت (في الأسئلة)\n" +
      "\nnever — لم أبداً\n" +
      "\nsince / for — منذ / لمدة\n" +
      "\nrecently / lately — مؤخراً\n\n" +
      "**أمثلة:**\n" +
      "\nHave you ever taken the national competency exam?\n" +
      "\nI have never failed an exam in my life.\n" +
      "\nShe has been a professor for ten years.\n" +
      "\nThey have just announced the results.",

    keyPoints: [
      "التكوين: have/has + V3 (Past Participle) — She has written",
      "المنفي: haven't/hasn't + V3 — He hasn't called yet",
      "السؤال: Have/Has + Subject + V3? — Have you finished?",
      "just, already, yet, ever, never, recently — كلمات دالة مهمة",
      "since — نقطة زمنية: since 2020 / since Monday",
      "for — فترة زمنية: for two years / for a long time",
    ],
  },

  // 10. PAST PERFECT — الماضي التام
  {
    id: "en-past-perfect",
    title: "الماضي التام (Past Perfect)",
    subtitle: "فعل انتهى قبل فعل آخر في الماضي",
    content:
      "الماضي التام (Past Perfect) يُعبِّر عن فعل اكتمل قبل فعل آخر أو قبل وقت محدد في الماضي. يُرتِّب الأحداث الماضية زمنياً ويُبيّن أيها سبق الآخر.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + had + Past Participle (V3)\n" +
      "\n  I had finished. / She had left. / They had arrived.\n" +
      "\n• المنفي: Subject + had not (hadn't) + V3\n" +
      "\n  He hadn't eaten before the meeting.\n" +
      "\n• السؤال: Had + Subject + V3?\n" +
      "\n  Had you studied before the exam?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. فعل انتهى قبل فعل آخر في الماضي:\n" +
      "\n   When I arrived at the hall, the exam had already started.\n" +
      "\n   (had started = الماضي التام | arrived = الماضي البسيط)\n" +
      "\n2. سبب حالة ماضية:\n" +
      "\n   She was tired because she had studied all night.\n" +
      "\n3. مع before و after لتوضيح ترتيب الأحداث:\n" +
      "\n   He left before I had finished talking.\n" +
      "\n   After she had submitted the form, she felt relieved.\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nbefore — قبل\n" +
      "\nafter — بعد\n" +
      "\nwhen — عندما (لترتيب الأحداث)\n" +
      "\nalready — بالفعل (قبل وقت آخر)\n" +
      "\nby the time — بحلول الوقت الذي\n" +
      "\nas soon as — بمجرد أن\n\n" +
      "**أمثلة:**\n" +
      "\nBy the time the professor entered, students had already sat down.\n" +
      "\nI realized I had forgotten my ID card at home.\n" +
      "\nHe had never studied English before he joined university.",

    keyPoints: [
      "التكوين: had + V3 — She had finished",
      "المنفي: hadn't + V3 — He hadn't slept",
      "السؤال: Had + Subject + V3? — Had you eaten?",
      "before, after, when, by the time, already — الكلمات الدالة",
      "يُرتِّب حدثَين: الماضي التام يسبق الماضي البسيط",
      "When I got home, she had already cooked dinner",
    ],
  },

  // 11. PRESENT PERFECT CONTINUOUS — المضارع التام المستمر
  {
    id: "en-present-perfect-continuous",
    title: "المضارع التام المستمر (Present Perfect Continuous)",
    subtitle: "فعل بدأ في الماضي ومازال مستمراً حتى الآن",
    content:
      "المضارع التام المستمر (Present Perfect Continuous) يُعبِّر عن فعل بدأ في الماضي واستمر حتى وقت الحديث أو انتهى مؤخراً، مع التركيز على استمرارية الفعل وليس نتيجته.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + have/has + been + V-ing\n" +
      "\n  I have been studying for two hours.\n" +
      "\n  She has been working since morning.\n" +
      "\n• المنفي: Subject + have/has + not + been + V-ing\n" +
      "\n  He hasn't been feeling well lately.\n" +
      "\n• السؤال: Have/Has + Subject + been + V-ing?\n" +
      "\n  How long have you been waiting?\n\n" +
      "**الفرق بين Present Perfect و Present Perfect Continuous:**\n" +
      "\n• Present Perfect — يُركِّز على النتيجة أو الإنجاز:\n" +
      "\n  I have read this book. (انتهيت منه)\n" +
      "\n• Present Perfect Continuous — يُركِّز على الاستمرارية:\n" +
      "\n  I have been reading this book. (لا أزال أقرؤه)\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. فعل مستمر حتى الآن:\n" +
      "\n   She has been preparing for the national exam for months.\n" +
      "\n2. فعل انتهى مؤخراً وأثره واضح الآن:\n" +
      "\n   You look tired. Have you been running?\n" +
      "\n3. استفسار عن مدة النشاط:\n" +
      "\n   How long has he been teaching?\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nfor — لمدة (+ فترة زمنية)\n" +
      "\nsince — منذ (+ نقطة زمنية)\n" +
      "\nhow long — منذ متى / كم من الوقت\n" +
      "\nall day / all morning — طوال اليوم / الصباح\n" +
      "\nlately / recently — مؤخراً\n\n" +
      "**أمثلة:**\n" +
      "\nI have been studying English since I entered university.\n" +
      "\nHow long has she been waiting for the result?\n" +
      "\nThey have been working on the project all week.",

    keyPoints: [
      "التكوين: have/has + been + V-ing — I have been reading",
      "المنفي: haven't/hasn't + been + V-ing",
      "السؤال: How long have you been + V-ing?",
      "for + فترة: for three hours — since + نقطة: since 9 a.m.",
      "التركيز على الاستمرارية وليس النتيجة",
      "أثر ظاهر للفعل المنتهي مؤخراً: You look tired. Been exercising?",
    ],
  },

  // 12. PAST PERFECT CONTINUOUS — الماضي التام المستمر
  {
    id: "en-past-perfect-continuous",
    title: "الماضي التام المستمر (Past Perfect Continuous)",
    subtitle: "فعل كان مستمراً في الماضي قبل حدث آخر",
    content:
      "الماضي التام المستمر (Past Perfect Continuous) يُعبِّر عن فعل كان مستمراً لفترة زمنية في الماضي قبل أن يحدث فعل آخر أو قبل وقت محدد.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + had + been + V-ing\n" +
      "\n  She had been studying for five hours before the exam.\n" +
      "\n  They had been waiting for an hour when the bus finally arrived.\n" +
      "\n• المنفي: Subject + had not (hadn't) + been + V-ing\n" +
      "\n  He hadn't been sleeping well before the results were announced.\n" +
      "\n• السؤال: Had + Subject + been + V-ing?\n" +
      "\n  How long had you been learning English before you took the exam?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. فعل استمر لفترة قبل فعل آخر في الماضي:\n" +
      "\n   I had been working on the application for a month before I submitted it.\n" +
      "\n2. سبب حالة ماضية (تفسير نتيجة):\n" +
      "\n   He was exhausted because he had been traveling all day.\n" +
      "\n3. توضيح ترتيب الأحداث في سياق روائي:\n" +
      "\n   She had been teaching for twenty years before she retired.\n\n" +
      "**الفرق بين Past Perfect و Past Perfect Continuous:**\n" +
      "\n• Past Perfect — يُركِّز على اكتمال الفعل:\n" +
      "\n  She had read all the chapters. (أتمّت القراءة)\n" +
      "\n• Past Perfect Continuous — يُركِّز على الاستمرارية:\n" +
      "\n  She had been reading for hours. (العملية نفسها وليس نتيجتها)\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nfor + فترة زمنية — for six months\n" +
      "\nbefore — قبل\n" +
      "\nwhen — عندما\n" +
      "\nby the time — بحلول الوقت\n" +
      "\nbecause — لأن (في تفسير النتيجة)\n\n" +
      "**أمثلة:**\n" +
      "\nBy the time the professor arrived, students had been waiting for 30 minutes.\n" +
      "\nShe had been preparing for the national exam for a year before she passed.",

    keyPoints: [
      "التكوين: had + been + V-ing — He had been working",
      "المنفي: hadn't + been + V-ing",
      "السؤال: Had + Subject + been + V-ing?",
      "for, before, when, by the time — الكلمات الدالة",
      "يُركِّز على استمرارية الفعل لا اكتماله",
      "They had been arguing for hours before they agreed",
    ],
  },

  // 13. FUTURE SIMPLE — المستقبل البسيط
  {
    id: "en-future-simple",
    title: "المستقبل البسيط (Future Simple — will)",
    subtitle: "قرارات لحظية ووعود وتنبؤات مستقبلية",
    content:
      "المستقبل البسيط (Future Simple) يُعبِّر عن القرارات اللحظية والوعود والتنبؤات وما يُتوقع حدوثه في المستقبل.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + will + V1\n" +
      "\n  I will help you. / She will pass the exam. / They will arrive soon.\n" +
      "\n• المنفي: Subject + will not (won't) + V1\n" +
      "\n  He won't be late. / We won't forget.\n" +
      "\n• السؤال: Will + Subject + V1?\n" +
      "\n  Will you come tomorrow? / Will they announce the results?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. قرار لحظي في وقت التحدث:\n" +
      "\n   The phone is ringing. I'll answer it.\n" +
      "\n2. وعد أو عرض مساعدة:\n" +
      "\n   I will help you with your application.\n" +
      "\n3. تنبؤ بناءً على الرأي أو الخبرة:\n" +
      "\n   I think she will succeed in the exam.\n" +
      "\n4. أمور حتمية أو ثابتة في المستقبل:\n" +
      "\n   The exam will take place next month.\n\n" +
      "**going to مقابل will:**\n" +
      "\n• (going to) — خطة محددة مسبقاً أو علامة واضحة:\n" +
      "\n  I am going to study medicine. (قرار مسبق)\n" +
      "\n  Look at those clouds! It is going to rain. (علامة واضحة)\n" +
      "\n• (will) — قرار لحظي أو تنبؤ عام:\n" +
      "\n  I think it will be a great year. / I'll call you later.\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\ntomorrow — غداً\n" +
      "\nnext week / month / year — الأسبوع/الشهر/السنة القادمة\n" +
      "\nsoon — قريباً\n" +
      "\nin the future — في المستقبل\n" +
      "\nI think / I believe / probably — للتنبؤ\n\n" +
      "**أمثلة:**\n" +
      "\nI will submit my application tomorrow.\n" +
      "\nShe won't be available next week.\n" +
      "\nWill the university announce the results soon?",

    keyPoints: [
      "التكوين: will + V1 — I will study",
      "المنفي: won't + V1 — She won't come",
      "السؤال: Will + Subject + V1? — Will you help?",
      "tomorrow, next, soon, in the future — الكلمات الدالة",
      "will — قرار لحظي أو تنبؤ عام",
      "going to — خطة مسبقة أو علامة واضحة في الحاضر",
    ],
  },

  // 14. FUTURE CONTINUOUS — المستقبل المستمر
  {
    id: "en-future-continuous",
    title: "المستقبل المستمر (Future Continuous)",
    subtitle: "فعل سيكون جارياً في لحظة محددة من المستقبل",
    content:
      "المستقبل المستمر (Future Continuous) يُعبِّر عن فعل سيكون مستمراً في لحظة زمنية محددة من المستقبل.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + will + be + V-ing\n" +
      "\n  I will be studying at 8 p.m.\n" +
      "\n  She will be teaching the advanced group next semester.\n" +
      "\n• المنفي: Subject + will not (won't) + be + V-ing\n" +
      "\n  He won't be attending the lecture tomorrow.\n" +
      "\n• السؤال: Will + Subject + be + V-ing?\n" +
      "\n  Will you be using the lab at noon?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. فعل سيكون جارياً في وقت محدد مستقبلاً:\n" +
      "\n   This time next week, I will be sitting in the exam hall.\n" +
      "\n2. خطط أو ترتيبات مستقبلية (بديل لـ going to في السياق الرسمي):\n" +
      "\n   The committee will be announcing the results on Friday.\n" +
      "\n3. السؤال المهذب عن خطط الشخص الآخر:\n" +
      "\n   Will you be needing the car this evening?\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nat this time tomorrow — في هذا الوقت غداً\n" +
      "\nthis time next week/year — في هذا الوقت الأسبوع/السنة القادمة\n" +
      "\nat + وقت محدد في المستقبل: at 5 p.m. tomorrow\n" +
      "\nall day tomorrow — طوال غد\n\n" +
      "**أمثلة:**\n" +
      "\nAt this time next month, I will be waiting for my exam results.\n" +
      "\nThey will be travelling to Basra when you call them.\n" +
      "\nWill she be presenting her research tomorrow morning?",

    keyPoints: [
      "التكوين: will + be + V-ing — She will be studying",
      "المنفي: won't + be + V-ing — He won't be coming",
      "السؤال: Will + Subject + be + V-ing?",
      "at this time tomorrow, this time next week — الكلمات الدالة",
      "فعل سيكون جارياً في لحظة محددة في المستقبل",
      "This time next year, I will be working as a teacher",
    ],
  },

  // 15. FUTURE PERFECT — المستقبل التام
  {
    id: "en-future-perfect",
    title: "المستقبل التام (Future Perfect)",
    subtitle: "فعل سيكتمل قبل وقت محدد في المستقبل",
    content:
      "المستقبل التام (Future Perfect) يُعبِّر عن فعل سيكون قد اكتمل بحلول وقت معيّن في المستقبل.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + will + have + Past Participle (V3)\n" +
      "\n  I will have finished by then.\n" +
      "\n  She will have graduated by next June.\n" +
      "\n• المنفي: Subject + will not (won't) + have + V3\n" +
      "\n  He won't have arrived by midnight.\n" +
      "\n• السؤال: Will + Subject + have + V3?\n" +
      "\n  Will you have completed the application by Friday?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. فعل سيكون قد تمّ قبل وقت أو فعل آخر في المستقبل:\n" +
      "\n   By the time you read this, I will have left the country.\n" +
      "\n2. التنبؤ باكتمال شيء بحلول وقت محدد:\n" +
      "\n   By 2030, scientists will have found a cure for this disease.\n" +
      "\n3. استيفاء شرط أو متطلب مستقبلي:\n" +
      "\n   By next semester, I will have completed all required courses.\n\n" +
      "**الكلمات الدالة (Signal Words):**\n" +
      "\nby + وقت محدد — by tomorrow / by next year / by 5 p.m.\n" +
      "\nby the time — بحلول الوقت الذي\n" +
      "\nbefore + وقت — before midnight\n" +
      "\nwhen — عندما (مع المستقبل)\n\n" +
      "**أمثلة:**\n" +
      "\n By the time the professor arrives, we will have prepared the presentation.\n" +
      "\n She will have defended her thesis by next spring.\n" +
      "\n Will you have finished revising by tomorrow morning?",

    keyPoints: [
      "التكوين: will + have + V3 — I will have finished",
      "المنفي: won't + have + V3 — She won't have arrived",
      "السؤال: Will + Subject + have + V3?",
      "by, by the time, before — الكلمات الدالة الرئيسية",
      "يعبّر عن اكتمال فعل قبل وقت محدد في المستقبل",
      "By next June, I will have passed the national exam",
    ],
  },

  // 16. PREPOSITIONS — حروف الجر
  {
    id: "en-prepositions",
    title: "حروف الجر (Prepositions)",
    subtitle: "at, for, from, in, until, off, on, to, with, by",
    content:
      "حروف الجر (Prepositions) كلمات صغيرة ذات أهمية كبيرة تربط الأسماء والضمائر بكلمات أخرى لتوضيح علاقات الزمان والمكان والطريقة.\n\n" +
      "**AT — عند / في (وقت أو مكان محدد بدقة)**\n" +
      "\n• الوقت: at 8 o'clock / at noon / at midnight / at the weekend\n" +
      "\n• المكان المحدد: at home / at school / at the bus stop\n" +
      "\nمثال: The exam starts at 9 a.m. / She is at the library.\n\n" +
      "**FOR — لـ / من أجل / لمدة**\n" +
      "\n• المدة الزمنية: for two hours / for a week / for many years\n" +
      "\n• الهدف والغرض: This book is for you. / He studied for the exam.\n" +
      "\nمثال: I have been preparing for the exam for three months.\n\n" +
      "**FROM — من (نقطة البداية)**\n" +
      "\n• المكان: from Baghdad / from the university\n" +
      "\n• الوقت: from Monday to Friday / from 8 a.m.\n" +
      "\nمثال: She comes from Mosul. / The course runs from October to June.\n\n" +
      "**IN — في (مكان أو وقت أكبر)**\n" +
      "\n• المكان: in Iraq / in the classroom / in the library\n" +
      "\n• الوقت: in the morning / in 2024 / in January / in summer\n" +
      "\nمثال: He graduated in 2022. / The exam is in the main hall.\n\n" +
      "**UNTIL / TILL — حتى / إلى أن (نهاية زمنية)**\n" +
      "\n• يُعبِّر عن استمرار الفعل حتى وقت محدد.\n" +
      "\nمثال: She studied until midnight. / Wait until I call you.\n\n" +
      "**OFF — عن / بعيداً عن / إيقاف**\n" +
      "\n• الابتعاد أو الانفصال: He got off the bus. / Turn off the light.\n" +
      "\nمثال: Take a day off. / She fell off the chair.\n\n" +
      "**ON — على / في (يوم أو سطح)**\n" +
      "\n• السطح: on the table / on the wall / on the floor\n" +
      "\n• الأيام: on Monday / on my birthday / on weekdays\n" +
      "\n• الوسيلة: on TV / on the phone / on the internet\n" +
      "\nمثال: The results are on the website. / I study on Fridays.\n\n" +
      "**TO — إلى (اتجاه أو وجهة)**\n" +
      "\n• الحركة: go to university / travel to Basra\n" +
      "\n• الوقت: from 9 to 5 / quarter to eight\n" +
      "\nمثال: I go to the library every morning. / She moved to Baghdad.\n\n" +
      "**WITH — مع / بواسطة**\n" +
      "\n• الرفقة: with my colleague / with the professor\n" +
      "\n• الأداة: write with a pen / cut with scissors\n" +
      "\nمثال: He studied with his classmates. / She wrote the essay with a laptop.\n\n" +
      "**BY — بواسطة / بجانب / بحلول**\n" +
      "\n• الوسيلة: by car / by bus / by email\n" +
      "\n• المبني للمجهول: written by the professor\n" +
      "\n• الموعد النهائي: by Friday / by next month\n" +
      "\nمثال: Send your application by email. / The book was written by a famous author.",

    keyPoints: [
      "at — وقت أو مكان محدد: at 9 a.m. / at school",
      "for — مدة زمنية أو غرض: for two hours / for you",
      "from — نقطة البداية: from Baghdad / from Monday",
      "in — مكان أو وقت أكبر: in Iraq / in January",
      "until — نهاية زمنية: until midnight / until Friday",
      "on — سطح أو يوم: on the table / on Monday",
      "to — اتجاه أو وجهة: go to university / travel to Basra",
      "with — رفقة أو أداة: with a friend / with a pen",
      "by — وسيلة أو موعد: by bus / by email / by next week",
      "off — ابتعاد أو انفصال: get off the bus / turn off",
    ],
  },

  // 17. IF CONDITIONALS — الجمل الشرطية
  {
    id: "en-conditionals",
    title: "الجمل الشرطية (Conditional Sentences)",
    subtitle: "الشرطية الصفر والأولى والثانية والثالثة",
    content:
      "الجمل الشرطية (Conditional Sentences) هي جمل تتكون من شرط (if clause) ونتيجة (result clause)، وتعبّر عن علاقة سبب ونتيجة في أزمنة مختلفة.\n\n" +
      "═══ **الشرطية الصفرية (Zero Conditional)** ═══\n" +
      "تُعبِّر عن حقائق علمية ثابتة وما يحدث دائماً كقانون عام.\n" +
      "\nالصيغة: If + Present Simple, Present Simple\n" +
      "\nمثال: If you heat water to 100°C, it boils.\n" +
      "\nمثال: If students study hard, they pass their exams.\n\n" +
      "═══ **الشرطية الأولى (First Conditional)** ═══\n" +
      "تُعبِّر عن حالة حقيقية أو ممكنة في المستقبل.\n" +
      "\nالصيغة: If + Present Simple, will + V1\n" +
      "\nمثال: If I study hard, I will pass the national exam.\n" +
      "\nمثال: If it rains tomorrow, we will cancel the trip.\n" +
      "\nملاحظة: يمكن استبدال will بـ can أو may أو might أو should:\n" +
      "\nIf you work harder, you might get a better result.\n\n" +
      "═══ **الشرطية الثانية (Second Conditional)** ═══\n" +
      "تُعبِّر عن حالة خيالية أو غير محتملة في الحاضر أو المستقبل.\n" +
      "\nالصيغة: If + Past Simple, would + V1\n" +
      "\nمثال: If I had more time, I would study two languages.\n" +
      "\nمثال: If she were the minister, she would improve education.\n" +
      "\nملاحظة: مع الفعل be في الشرطية الثانية نستخدم (were) مع جميع الضمائر:\n" +
      "\nIf I were you, I would apply for this scholarship.\n\n" +
      "═══ **الشرطية الثالثة (Third Conditional)** ═══\n" +
      "تُعبِّر عن حالة مستحيلة في الماضي (ما كان يمكن أن يحدث لو...).\n" +
      "\nالصيغة: If + Past Perfect, would have + V3\n" +
      "\nمثال: If I had studied harder, I would have passed the exam.\n" +
      "\nمثال: If she had known about the deadline, she would have submitted on time.\n\n" +
      "جدول مقارنة سريع:\n\n| الحالة | التركيب القواعدي (Structure) | الاستخدام (Usage) |\n|---|---|---|\n| **Zero** | If + V1 ... V1 | حقيقة ثابتة |\n| **First** | If + V1 ... will + V1 | ممكن في المستقبل |\n| **Second** | If + V2 ... would + V1 | خيالي في الحاضر |\n| **Third** | If + had + V3 ... would have + V3 | مستحيل في الماضي |",

    keyPoints: [
      "Zero Conditional: If + V1, V1 — حقيقة علمية: If you boil water, it evaporates",
      "First Conditional: If + V1, will + V1 — ممكن مستقبلاً: If I study, I will pass",
      "Second Conditional: If + V2, would + V1 — خيالي حاضر: If I had time, I would travel",
      "Third Conditional: If + had + V3, would have + V3 — مستحيل ماضٍ",
      "مع be في الثانية نستخدم were مع جميع الضمائر: If I were you...",
      "يمكن استبدال will بـ can/may/might في الشرطية الأولى",
    ],
  },

  // 18. PASSIVE VOICE — المبني للمجهول
  {
    id: "en-passive-voice",
    title: "المبني للمجهول (Passive Voice)",
    subtitle: "تحويل الجمل من المعلوم إلى المجهول في جميع الأزمنة",
    content:
      "المبني للمجهول (Passive Voice) يُستخدم حين يكون المفعول به أهمّ من الفاعل، أو حين يكون الفاعل مجهولاً أو غير مهم.\n\n" +
      "الصيغة العامة: Object + be (في الزمن المناسب) + Past Participle (V3)\n\n" +
      "**تحويل الأزمنة إلى المبني للمجهول:**\n\n" +
      "المضارع البسيط:\n" +
      "المعلوم: The teacher explains the lesson.\n" +
      "المجهول: The lesson is explained (by the teacher).\n\n" +
      "الماضي البسيط:\n" +
      "المعلوم: The committee approved the application.\n" +
      "المجهول: The application was approved (by the committee).\n\n" +
      "المضارع المستمر:\n" +
      "المعلوم: They are building a new university.\n" +
      "المجهول: A new university is being built.\n\n" +
      "الماضي المستمر:\n" +
      "المعلوم: The professor was explaining the topic.\n" +
      "المجهول: The topic was being explained.\n\n" +
      "المضارع التام:\n" +
      "المعلوم: The university has announced the results.\n" +
      "المجهول: The results have been announced.\n\n" +
      "الماضي التام:\n" +
      "المعلوم: They had submitted the documents.\n" +
      "المجهول: The documents had been submitted.\n\n" +
      "المستقبل البسيط:\n" +
      "المعلوم: The ministry will review all applications.\n" +
      "المجهول: All applications will be reviewed.\n\n" +
      "مع الأفعال الناقصة (Modal Verbs):\n" +
      "الصيغة: Modal + be + V3\n" +
      "مثال: The exam can be postponed. / The form must be filled correctly.\n\n" +
      "متى نستخدم by؟\n" +
      "نذكر الفاعل بعد by فقط حين يكون مهماً للمعنى:\n" +
      "This novel was written by Dostoevsky.\n" +
      "The document was signed by the minister.",

    keyPoints: [
      "الصيغة العامة: be (بالزمن المناسب) + V3",
      "المضارع البسيط: is/are + V3 — The lesson is taught",
      "الماضي البسيط: was/were + V3 — The form was signed",
      "المضارع التام: has/have been + V3 — Results have been announced",
      "المستقبل: will be + V3 — Applications will be reviewed",
      "Modal Passive: Modal + be + V3 — It must be done",
      "by + الفاعل — فقط حين يكون الفاعل مهماً",
    ],
  },

  // 19. REPORTED SPEECH — الكلام المباشر وغير المباشر
  {
    id: "en-reported-speech",
    title: "الكلام المباشر وغير المباشر (Direct & Reported Speech)",
    subtitle: "كيفية نقل الكلام وتحويل الأزمنة والضمائر",
    content:
      "الكلام المباشر (Direct Speech): ننقل كلام الشخص حرفياً بين علامتَي التنصيص.\n" +
      'مثال: She said, "I am studying for the exam."\n\n' +
      "الكلام غير المباشر (Reported Speech / Indirect Speech): ننقل المعنى دون التنصيص مع إجراء تغييرات في الأزمنة والضمائر.\n" +
      "مثال: She said (that) she was studying for the exam.\n\n" +
      "═══ **قاعدة تراجع الأزمنة (Backshift of Tenses)** ═══\n" +
      "عند استخدام فعل القول في الماضي (said/told) تتراجع الأزمنة خطوة للوراء:\n\n" +
      "\nالمضارع البسيط     → الماضي البسيط\n" +
      "\nHe said he studied hard.      → I study hard.\n\n" +
      "\nالمضارع المستمر     → الماضي المستمر\n" +
      "\nShe said she was reading.       → I am reading.\n\n" +
      "\nالماضي البسيط       → الماضي التام\n" +
      "\nHe said he had finished the exam. → I finished the exam.\n\n" +
      "\nالمضارع التام        → الماضي التام\n" +
      "\nShe said she had passed.     → I have passed.\n\n" +
      "\nwould                 → will\n" +
      "\nHe said he would help me.   → I will help you.\n\n" +
      "\ncould                  → can\n" +
      "\nmight                  → may\n" +
      "\nhad to                 → must\n\n" +
      "═══ **تغيير الضمائر** ═══\n" +
      "تتغير الضمائر بحسب من يتحدث ومن يُنقل إليه الكلام:\n" +
      "\nI → he/she\n" +
      "\nwe → they\n" +
      "\nmy → his/her\n" +
      "\nyou (المخاطَب) → he/she/they حسب السياق\n\n" +
      "═══ **تغيير أدوات الزمان والمكان** ═══\n" +
      "\nnow → then\n" +
      "\ntoday → that day\n" +
      "\nyesterday → the day before\n" +
      "\ntomorrow → the next day / the following day\n" +
      "\nhere → there\n" +
      "\nthis → that\n" +
      "\nthese → those\n" +
      "\nlast week → the week before\n" +
      "\nnext week → the following week\n\n" +
      "═══ **نقل الأسئلة (Reported Questions)** ═══\n" +
      "أسئلة Wh: نستخدم أداة الاستفهام ويتحول الترتيب إلى الجملة العادية:\n" +
      "\nWhere do you live? → He asked where I lived.\n" +
      "\nWhen did she arrive? → She asked when I had arrived.\n\n" +
      "\nأسئلة Yes/No: نستخدم if أو whether:\n" +
      "\nAre you coming? → He asked if I was coming.\n" +
      "\nHave you eaten? → She asked whether I had eaten.\n\n" +
      "═══ **نقل الأوامر والطلبات (Reported Commands)** ═══\n" +
      "نستخدم: told/asked/ordered + Object + to + V1\n" +
      "\nOpen your books! → The teacher told us to open our books.\n" +
      "\nPlease sit down. → She asked me to sit down.\n" +
      "\nللنهي (don't): told + Object + not + to + V1\n" +
      "\nDon't be late. → He told me not to be late.",

    keyPoints: [
      'Direct Speech: بين علامتَي تنصيص — She said, "I am ready."',
      "Reported Speech: بدون تنصيص مع تراجع الزمن — She said she was ready",
      "Present Simple → Past Simple في الكلام غير المباشر",
      "will → would / can → could / must → had to",
      "now→then / today→that day / tomorrow→the next day",
      "أسئلة Yes/No: asked if/whether — He asked if she had finished",
      "الأوامر: told/asked + Object + to + V1 — She told him to leave",
    ],
  },

  // 20. RELATIVE PRONOUNS — ضمائر الوصل
  {
    id: "en-relative-pronouns",
    title: "ضمائر الوصل (Relative Pronouns)",
    subtitle: "who, which, whose, where, when — صلة الموصول",
    content:
      "ضمائر الوصل (Relative Pronouns) تُستخدم لربط جملتين معاً وإعطاء معلومات إضافية عن الاسم الذي تسبقها.\n\n" +
      "**WHO — لمن يعود على شخص (فاعل)**\n" +
      "\nيُستخدم مع الأشخاص ويؤدي دور الفاعل في جملة الصلة.\n" +
      "\nمثال: The professor who teaches English is very experienced.\n" +
      "\nمثال: Students who study hard will succeed.\n\n" +
      "**WHOM — لمن يعود على شخص (مفعول به)**\n" +
      "\nيُستخدم مع الأشخاص حين يكون مفعولاً به أو بعد حرف جر (رسمي).\n" +
      "\nمثال: The candidate whom the committee selected was outstanding.\n" +
      "\nمثال: The professor to whom I spoke was very helpful.\n\n" +
      "**WHICH — للأشياء والحيوانات**\n" +
      "\nيُستخدم مع الأشياء وليس الأشخاص.\n" +
      "\nمثال: The exam which I took last month was very difficult.\n" +
      "\nمثال: The university which was founded in 1908 is famous.\n\n" +
      "**WHOSE — للملكية (الأشخاص والأشياء)**\n" +
      "\nيُشير إلى ملكية الاسم الذي يسبقه.\n" +
      "\nمثال: The student whose grades were highest received the scholarship.\n" +
      "\nمثال: This is the book whose author won the Nobel Prize.\n\n" +
      "**WHERE — للمكان**\n" +
      "\nيُستخدم للإشارة إلى مكان.\n" +
      "\nمثال: This is the university where I completed my Bachelor's degree.\n" +
      "\nمثال: She remembers the city where she grew up.\n\n" +
      "**WHEN — للزمان**\n" +
      "\nيُستخدم للإشارة إلى وقت أو فترة زمنية.\n" +
      "\nمثال: I remember the year when I passed the national exam.\n" +
      "\nمثال: That was the moment when everything changed.\n\n" +
      "**THAT — بديل لـ who وwhich (في الجمل التعريفية)**\n" +
      "\nيُستخدم في الجمل التعريفية (Defining Relative Clauses) كبديل لـ who أو which:\n" +
      "\nمثال: The student that passed is my colleague.\n" +
      "\nمثال: The book that I need is out of stock.\n\n" +
      "**الجمل التعريفية مقابل غير التعريفية:**\n" +
      "\n• Defining (ضرورية للمعنى) — بدون فواصل:\n" +
      "\n  The students who studied hard passed. (يُحدِّد أيّ طلاب)\n" +
      "\n• Non-defining (إضافية للمعلومة) — مع فواصل:\n" +
      "\n  Dr. Ahmed, who is our professor, published a new book.\n" +
      "\n  (معلومة إضافية، حذفها لا يُغيِّر المعنى الأساسي)",

    keyPoints: [
      "who — للأشخاص فاعلاً: The teacher who inspired me retired",
      "whom — للأشخاص مفعولاً: The student whom I met was kind",
      "which — للأشياء: The exam which I took was hard",
      "whose — للملكية: The student whose essay won is here",
      "where — للمكان: The city where I was born is beautiful",
      "when — للزمان: The year when I graduated was 2022",
      "that — بديل who/which في الجمل التعريفية",
    ],
  },

  // 21. SOME & ANY
  {
    id: "en-some-any",
    title: "some و any",
    subtitle: "الفرق بين some وany واستخداماتهما",
    content:
      "**some** و **any** كلتاهما تُستخدمان للتعبير عن كمية غير محددة، ولكن لكل منهما سياقات استخدام مختلفة.\n\n" +
      "**SOME — في الجمل المثبتة**\n" +
      "\nتُستخدم في الجمل المثبتة (الإيجابية) مع الأسماء المعدودة الجمع وغير المعدودة:\n" +
      "\nمثال: I have some books to lend you.\n" +
      "\nمثال: She needs some help with her application.\n" +
      "\nمثال: There are some students in the library.\n\n" +
      "**SOME في الأسئلة:**\n" +
      "\nتُستخدم some في الأسئلة حين نتوقع إجابة بـ yes، أو حين نقدم عرضاً أو طلباً:\n" +
      "\nمثال: Would you like some coffee? (عرض — نتوقع قبولاً)\n" +
      "\nمثال: Can I have some water, please? (طلب مؤدَّب)\n\n" +
      "**ANY — في الجمل المنفية والأسئلة العامة**\n" +
      "\nتُستخدم في الجمل المنفية والأسئلة حين لا نتوقع إجابة محددة:\n" +
      "\nمثال: I don't have any money.\n" +
      "\nمثال: Are there any questions?\n" +
      "\nمثال: He didn't bring any documents.\n\n" +
      '**ANY في الجمل المثبتة بمعنى "أيّ":**\n' +
      "\nحين تعني 'أيّ واحد كان' أو 'بلا قيود':\n" +
      "\nمثال: You can choose any answer you want.\n" +
      "\nمثال: Any student who passes will be accepted.\n\n" +
      "**المشتقات الشائعة:**\n" +
      "\nsomething / anything — شيء ما / أي شيء\n" +
      "\nsomeone / anyone — شخص ما / أي شخص\n" +
      "\nsomewhere / anywhere — مكان ما / أي مكان\n" +
      "\nnothing / nobody / nowhere — لا شيء / لا أحد / لا مكان\n\n" +
      "**أمثلة إضافية:**\n" +
      "\nI need some information about the exam.\n" +
      "\nDid you find any mistakes in the essay?\n" +
      "\nThere isn't any electricity now.\n" +
      "\nAnybody can apply for this scholarship.",

    keyPoints: [
      "some — في الجمل المثبتة: I have some books",
      "some — في الأسئلة (عرض أو طلب): Would you like some tea?",
      "any — في الجمل المنفية: I don't have any time",
      "any — في الأسئلة العامة: Are there any problems?",
      "any — بمعنى أيّ في المثبتة: Any student can join",
      "something / anything / nothing — مشتقات مهمة",
    ],
  },

  // 22. COMPARISON — المقارنة
  {
    id: "en-comparison",
    title: "المقارنة (Comparison — Adjectives & Adverbs)",
    subtitle: "درجات الصفة: المفرد والتفضيل والتفضيل المطلق",
    content:
      "المقارنة في اللغة الإنجليزية تنقسم إلى ثلاث درجات: المفرد (**Positive**)، والتفضيل أو المقارنة (**Comparative**)، والتفضيل المطلق أو التفوق (**Superlative**).\n\n" +
      "═══ **الصفات القصيرة (1-2 مقطع)** ═══\n\n" +
      "\nالمفرد: tall / smart / hot\n" +
      "\nالتفضيل: taller / smarter / hotter + than\n" +
      "\nالتفوق: the tallest / the smartest / the hottest\n\n" +
      "**قواعد التهجئة:**\n" +
      "\n• ينتهي بـ e → نضيف r / st فقط: wide → wider → widest\n" +
      "\n• حرف متحرك + حرف ساكن → نضاعف الأخير: big → bigger → biggest / hot → hotter → hottest\n" +
      "\n• ينتهي بـ y سابقها ساكن → نحوّل y إلى ier / iest: easy → easier → easiest / happy → happier → happiest\n\n" +
      "═══ **الصفات الطويلة (2+ مقطع)** ═══\n\n" +
      "\nالمفرد: important / beautiful / difficult\n" +
      "\nالتفضيل: more important / more beautiful + than\n" +
      "\nالتفوق: the most important / the most beautiful\n\n" +
      "═══ **الصفات الشاذة (Irregular)** ═══\n\n" +
      "\ngood → better → the best\n" +
      "\nbad → worse → the worst\n" +
      "\nfar → farther/further → the farthest/furthest\n" +
      "\nlittle → less → the least\n" +
      "\nmuch/many → more → the most\n\n" +
      "═══ **أنواع جمل المقارنة** ═══\n\n" +
      "\n1. المقارنة بالتساوي (as...as):\n" +
      "\n   This exam is as difficult as the previous one.\n" +
      "\n   She works as hard as her sister.\n\n" +
      "\n2. المقارنة بعدم التساوي (not as...as):\n" +
      "\n   This book is not as expensive as that one.\n\n" +
      "\n3. المقارنة التفضيلية (Comparative + than):\n" +
      "\n   English is easier than Arabic grammar.\n" +
      "\n   He scored higher than all his classmates.\n\n" +
      "\n4. التفوق المطلق (the + Superlative):\n" +
      "\n   She is the most dedicated student in the class.\n" +
      "\n   Baghdad is the largest city in Iraq.\n\n" +
      "\n5. الازدياد التدريجي (Comparative + and + Comparative):\n" +
      "\n   The exam is getting harder and harder.\n" +
      "\n   Technology is becoming more and more important.",

    keyPoints: [
      "صفة قصيرة: + er/est — tall → taller → tallest",
      "صفة طويلة: more/most + صفة — more important → most important",
      "شاذة: good→better→best / bad→worse→worst / many→more→most",
      "مقارنة بالتساوي: as + adj + as — She is as smart as him",
      "مقارنة تفضيلية: adj+er + than / more + adj + than",
      "تفوق مطلق: the + est / the most + adj",
    ],
  },

  // 23. HOW QUESTIONS — أسئلة How
  {
    id: "en-how-questions",
    title: "أسئلة How (How Questions)",
    subtitle: "How far, How long, How much, How many, How old, How tall, How often",
    content:
      "كلمة How يمكن دمجها مع كلمات أخرى للسؤال عن تفاصيل مختلفة:\n\n" +
      "**How are you — للسؤال عن الحال**\n" +
      "\nمثال: How are you? — is the weather today?\n\n" +
      "**How far — للسؤال عن المسافة**\n" +
      "\nمثال: How far is Baghdad from Basra?\n" +
      "\nمثال: How far is it to the exam centre?\n\n" +
      "**How long — للسؤال عن طول الفترة الزمنية أو طول الشيء المادي**\n" +
      "\nمثال: How long is the national exam? (كم مدة الامتحان؟)\n" +
      "\nمثال: How long have you been studying English?\n\n" +
      "**How much — للسؤال عن الكمية غير المعدودة أو الأسعار**\n" +
      "\nمثال: How much water do we need for the trip?\n" +
      "\nمثال: How much is the registration fee?\n\n" +
      "**How many — للسؤال عن الكمية المعدودة**\n" +
      "\nمثال: How many students are in this group?\n" +
      "\nمثال: How many chapters does the book have?\n\n" +
      "**How old — للسؤال عن العمر**\n" +
      "\nمثال: How old is the university?\n" +
      "\nمثال: How old are the candidates for this scholarship?\n\n" +
      "**How tall — للسؤال عن الطول (للأشخاص والأشياء)**\n" +
      "\nمثال: How tall is that building?\n" +
      "\nمثال: How tall is the average Iraqi student?\n\n" +
      "**How often — للسؤال عن عدد مرات تكرار الفعل (التردد)**\n" +
      "\nمثال: How often do you take practice exams?\n" +
      "\nمثال: How often does the bus run?\n\n" +
      "**How + صفة أخرى:**\n" +
      "\nHow wide — للسؤال عن العرض: How wide is this road?\n" +
      "\nHow deep — للسؤال عن العمق: How deep is the river?\n" +
      "\nHow fast — للسؤال عن السرعة: How fast does this train travel?\n" +
      "\nHow soon — للسؤال عن القرب الزمني: How soon can you finish?",

    keyPoints: [
      "How far — المسافة: How far is Iraq from Jordan?",
      "How long — الفترة الزمنية أو الطول: How long is the exam?",
      "How much — كمية غير معدودة / سعر: How much is this?",
      "How many — كمية معدودة: How many questions are there?",
      "How old — العمر: How old is the institution?",
      "How tall — الطول المادي: How tall is that tower?",
      "How often — التردد والتكرار: How often do you study?",
    ],
  },

  // 24. TAG QUESTIONS — الأسئلة الذيلية
  {
    id: "en-tag-questions",
    title: "الأسئلة الذيلية (Tag Questions)",
    subtitle: "إضافة ذيل سؤالي لطلب التأكيد أو الموافقة",
    content:
      "الأسئلة الذيلية (**Tag Questions**) هي أسئلة قصيرة تُضاف إلى نهاية الجملة لطلب التأكيد أو الموافقة من المستمع.\n\n" +
      "**القاعدة الأساسية:**\n" +
      "\n• إذا كانت الجملة مثبتة → الذيل منفي\n" +
      "\n• إذا كانت الجملة منفية → الذيل مثبت\n\n" +
      "**التكوين: الفعل المساعد المناسب + الضمير**\n\n" +
      "**مع المضارع البسيط:**\n" +
      "\nShe studies English, doesn't she?\n" +
      "\nThey work hard, don't they?\n\n" +
      "**مع الماضي البسيط:**\n" +
      "\nHe passed the exam, didn't he?\n" +
      "\nYou submitted the form, didn't you?\n\n" +
      "**مع أفعال be:**\n" +
      "\nShe is a teacher, isn't she?\n" +
      "\nThey weren't present, were they?\n\n" +
      "**مع المضارع التام:**\n" +
      "\nYou have finished, haven't you?\n" +
      "\nShe hasn't called, has she?\n\n" +
      "**مع المستقبل (will):**\n" +
      "\nHe will help us, won't he?\n" +
      "\nThey won't be late, will they?\n\n" +
      "**مع الأفعال الناقصة:**\n" +
      "\nYou can speak English, can't you?\n" +
      "\nShe shouldn't go alone, should she?\n" +
      "\nWe must submit today, mustn't we?\n\n" +
      "**حالات خاصة:**\n" +
      "\n• مع I am: I am right, aren't I? (لا نقول amn't I)\n" +
      "\n• مع Let's: Let's take a break, shall we?\n" +
      "\n• مع الأوامر: Open the door, will you? / Stop talking, won't you?\n" +
      "\n• مع nobody/nothing/nobody: Nobody came, did they?\n\n" +
      "**الإجابة على الأسئلة الذيلية:**\n" +
      "\nتأكيد صحة الجملة: Yes, she does. / No, she doesn't.\n" +
      "\nمثال: She studies hard, doesn't she? — Yes, she does.",

    keyPoints: [
      "جملة مثبتة → ذيل منفي: She is smart, isn't she?",
      "جملة منفية → ذيل مثبت: He isn't ready, is he?",
      "المضارع البسيط: do/does في الذيل — They study, don't they?",
      "الماضي البسيط: did في الذيل — He came, didn't he?",
      "will في الذيل: You will try, won't you?",
      "I am → aren't I? (حالة خاصة): I am correct, aren't I?",
      "Let's → shall we: Let's start, shall we?",
    ],
  },

  // 25. PLURALS — الجمع في اللغة الإنجليزية
  {
    id: "en-plurals",
    title: "الجمع في اللغة الإنجليزية (Plural Forms)",
    subtitle: "القواعد المنتظمة والشاذة في تكوين الجمع",
    content:
      "الجمع في اللغة الإنجليزية يتكون وفق قواعد منتظمة وأشكال شاذة تحفظ.\n\n" +
      "═══ **أولاً: القواعد المنتظمة** ═══\n\n" +
      "\n1. القاعدة العامة — نضيف (s):\n" +
      "\nbook → books / student → students / exam → exams\n\n" +
      "\n2. الأسماء المنتهية بـ s, ss, sh, ch, x, z — نضيف (es):\n" +
      "\nbus → buses / class → classes / dish → dishes\n" +
      "\nwatch → watches / box → boxes / quiz → quizzes\n\n" +
      "\n3. الأسماء المنتهية بـ consonant + y — نحوّل y إلى ies:\n" +
      "\ncity → cities / university → universities / baby → babies\n" +
      "\n(لكن: vowel + y → نضيف s فقط: day → days / key → keys)\n\n" +
      "\n4. الأسماء المنتهية بـ f أو fe — نحوّل إلى ves:\n" +
      "\nleaf → leaves / life → lives / wife → wives / knife → knives\n" +
      "\n(استثناء: roof → roofs / belief → beliefs)\n\n" +
      "5. الأسماء المنتهية بـ o:\n" +
      "\n• بعض تأخذ es: tomato → tomatoes / potato → potatoes / hero → heroes\n" +
      "\n• أخرى تأخذ s فقط: photo → photos / piano → pianos / radio → radios\n\n" +
      "═══ **ثانياً: الجمع الشاذ (Irregular Plurals)** ═══\n\n" +
      "\nman → men          woman → women\n" +
      "\nchild → children   person → people\n" +
      "\ntooth → teeth      foot → feet\n" +
      "\nmouse → mice       goose → geese\n" +
      "\nox → oxen         louse → lice\n\n" +
      "═══ **ثالثاً: الأسماء التي لا تتغير (Same Form)** ═══\n\n" +
      "\nsheep → sheep / deer → deer / fish → fish\n" +
      "\naircraft → aircraft / species → species\n\n" +
      "═══ **رابعاً: الجمع اللاتيني واليوناني (Academic)** ═══\n\n" +
      "\ncriterion → criteria     phenomenon → phenomena\n" +
      "\nthesis → theses          analysis → analyses\n" +
      "\ndatum → data             curriculum → curricula\n" +
      "\nalumnus → alumni         appendix → appendices",

    keyPoints: [
      "القاعدة العامة: + s — books, students, exams",
      "s/ss/sh/ch/x/z: + es — buses, dishes, watches, boxes",
      "consonant + y → ies: city → cities / university → universities",
      "f/fe → ves: leaf → leaves / wife → wives",
      "شاذة: man→men / child→children / tooth→teeth / foot→feet",
      "لا تتغير: sheep, deer, fish, aircraft",
      "أكاديمية: thesis→theses / criterion→criteria / data (جمع datum)",
    ],
  },

  // 26. USED TO — قاعدة used to
  {
    id: "en-used-to",
    title: "قاعدة used to",
    subtitle: "التعبير عن عادات ماضية لم تعد موجودة",
    content:
      "**used to** تُعبِّر عن عادة أو حالة أو وضع كان موجوداً في الماضي ولم يعد قائماً في الوقت الحالي.\n\n" +
      "**التكوين:**\n" +
      "\n• المثبت: Subject + used to + V1\n" +
      "\n  I used to wake up early when I was at school.\n" +
      "\n  She used to live in Mosul before the war.\n" +
      "\n• المنفي: Subject + didn't use to + V1 (usedn't to — رسمي قديم)\n" +
      "\n  He didn't use to study English seriously.\n" +
      "\n• السؤال: Did + Subject + use to + V1?\n" +
      "\n  Did you use to play sport at university?\n\n" +
      "**الاستخدامات:**\n" +
      "\n1. عادة ماضية لم تعد موجودة:\n" +
      "\n   I used to drink a lot of coffee, but I stopped last year.\n" +
      "\n2. حالة أو وضع سابق تغيّر:\n" +
      "\n   This building used to be a school. Now it's a hospital.\n" +
      "\n   She used to be very shy. Now she's confident.\n\n" +
      "**الفرق بين used to و would:**\n" +
      "\n• used to — تُستخدم للعادات والحالات الماضية:\n" +
      "\n  She used to be a teacher. (حالة ماضية)\n" +
      "\n• would — تُستخدم للعادات الماضية المتكررة فقط (ليس الحالات):\n" +
      "\n  When I was young, I would read every night. (عادة متكررة)\n" +
      "\n  ✗ She would be a teacher. (غير صحيح مع الحالات)\n\n" +
      "**الفرق بين used to و be used to:**\n" +
      "\n• used to + V1 — ماضٍ لم يعد موجوداً:\n" +
      "\n  I used to study alone. (في الماضي)\n" +
      "\n• be/get used to + V-ing — معتاد على (حاضر):\n" +
      "\n  I am used to studying late. (معتاد على ذلك)\n" +
      "\n  It took time, but I got used to waking up early.\n\n" +
      "**أمثلة:**\n" +
      "\nStudents used to have to memorize all lectures before exams.\n" +
      "\nUniversities didn't use to have online registration systems.\n" +
      "\nDid professors use to give oral exams only?",

    keyPoints: [
      "used to + V1 — عادة ماضية انتهت: I used to smoke",
      "المنفي: didn't use to + V1 — He didn't use to exercise",
      "السؤال: Did + Subject + use to + V1?",
      "would + V1 — عادة ماضية متكررة فقط (ليس الحالات)",
      "be used to + V-ing — معتاد على شيء (حاضر): I am used to studying",
      "get used to + V-ing — التكيّف مع شيء: She got used to the schedule",
    ],
  },

  // 27. MODAL VERBS — الأفعال الناقصة
  {
    id: "en-modal-verbs",
    title: "الأفعال الناقصة (Modal Verbs)",
    subtitle: "can, could, may, might, must, should, will, would, shall, ought to",
    content:
      "**الأفعال الناقصة (Modal Verbs)** أفعال مساعدة تُضاف إلى الفعل الأساسي للتعبير عن الإمكانية والاحتمال والإلزام والإذن وغيرها.\n\n" +
      "**خصائص الأفعال الناقصة:**\n" +
      "\n• لا تأخذ s مع الضمير الثالث المفرد: She can (ليس cans)\n" +
      "\n• تتبع بمصدر الفعل بدون to: She must go. (ليس to go)\n" +
      "\n• لها صيغة واحدة في جميع الأزمنة\n\n" +
      "**CAN — القدرة والإذن والإمكانية (الحاضر)**\n" +
      "\n• القدرة: I can speak three languages.\n" +
      "\n• الإذن (غير رسمي): Can I use your dictionary?\n" +
      "\n• الاحتمال: Studying hard can improve your grades.\n\n" +
      "**COULD — الماضي لـ can / احتمال مؤدَّب**\n" +
      "\n• قدرة في الماضي: When I was young, I could run fast.\n" +
      "\n• طلب مؤدَّب: Could you explain this again?\n" +
      "\n• احتمال ضعيف: It could rain tomorrow.\n\n" +
      "**MAY — الإذن الرسمي / الاحتمال**\n" +
      "\n• إذن رسمي: You may enter the hall now.\n" +
      "\n• احتمال: She may pass the exam. (ممكن)\n\n" +
      "**MIGHT — احتمال أضعف من may**\n" +
      "\n• احتمال ضعيف: He might be late today.**\n" +
      "\n• في الكلام غير المباشر (ماضي may): She said she might come.\n\n" +
      "**MUST — إلزام ذاتي / استنتاج قوي**\n" +
      "\n• إلزام ذاتي قوي: You must submit the form today.\n" +
      "\n• استنتاج قوي: She studies 10 hours a day. She must be dedicated.\n\n" +
      "**HAVE TO — إلزام خارجي**\n" +
      "\n• قواعد وقوانين: I have to wear formal clothes for the interview.\n" +
      "\n• الفرق: must (إلزام داخلي/ذاتي) — have to (إلزام خارجي)\n\n" +
      "**SHOULD — النصيحة والواجب الأخلاقي**\n" +
      "\n• نصيحة: You should start preparing early.\n" +
      "\n• توقع معقول: She should arrive by noon.\n\n" +
      "**OUGHT TO — مثل should لكن أكثر رسمية**\n" +
      "\n• Candidates ought to read the instructions carefully.\n\n" +
      "**WILL — المستقبل والتطوع والوعد (راجع درس Future)**\n\n" +
      "**WOULD — الماضي لـ will / الطلب المؤدَّب / الشرطية**\n" +
      "\n• طلب مؤدَّب: Would you help me?\n" +
      "\n• الشرطية: I would travel if I had time.\n\n" +
      "**SHALL — المستقبل الرسمي / الاقتراح (مع I/We)**\n" +
      "\n• اقتراح: Shall I open the window?\n" +
      "\n• رسمي: We shall proceed with the plan.\n\n" +
      "**الأفعال الناقصة في الماضي (Modal + have + V3):**\n" +
      "\ncould have done — كان بإمكانه أن يفعل\n" +
      "\nshould have done — كان يجب أن يفعل (لم يفعل ويُعبَّر عن الندم)\n" +
      "\nmust have done — يجب أن يكون قد فعل (استنتاج عن الماضي)\n" +
      "\nmight have done — ربما فعل\n" +
      "\nمثال: She should have studied harder. (لم تدرس بجد — ندم)",

    keyPoints: [
      "can — قدرة وإذن غير رسمي: I can speak English",
      "could — قدرة ماضية وطلب مؤدَّب: Could you repeat that?",
      "may — إذن رسمي واحتمال: You may leave now",
      "must — إلزام ذاتي واستنتاج: You must attend / She must be tired",
      "have to — إلزام خارجي (قوانين): I have to register online",
      "should — نصيحة: You should revise before the exam",
      "Modal + have + V3: should have studied (ندم على الماضي)",
    ],
  },

  // 28. LANGUAGE FUNCTIONS — وظائف اللغة
  {
    id: "en-language-functions",
    title: "وظائف اللغة (Language Functions)",
    subtitle: "كيف نُحدِّد الغرض من الكلام: إبداء الرأي، التعبير، الطلب...",
    content:
      "**وظائف اللغة (Language Functions)** هي الأغراض التواصلية التي يؤديها الكلام. في امتحانات اللغة الإنجليزية، يُطلب منك تحديد وظيفة الجملة أو الحوار من بين خيارات عدة.\n\n" +
      "**كيف تُحدِّد وظيفة اللغة؟**\n" +
      "انظر إلى:\n" +
      "\n1. المحتوى العاطفي للجملة (ماذا يشعر المتحدث؟)\n" +
      "\n2. الكلمات الدالة (well done / I'm sorry / I suggest / I promise...)\n" +
      "\n3. السياق العام للحوار (ما الموقف؟)\n\n" +
      "═══ **أولاً: وظائف التعبير العاطفي** ═══\n\n" +
      "to express sympathy (التعاطف):\n" +
      '"I\'m so sorry to hear that. You must be going through a tough time."\n\n' +
      "to express appreciation (التقدير):\n" +
      '"Thank you so much. I really appreciate everything you\'ve done."\n\n' +
      "to express admiration (الإعجاب):\n" +
      "\"Wow, that's incredible! I'm really impressed by your work.\"\n\n" +
      "to express approval (الموافقة):\n" +
      '"That\'s a great idea! I think we should go ahead with it."\n\n' +
      "to express disapproval (عدم الموافقة):\n" +
      "\"I don't think that's a good idea at all.\"\n\n" +
      "to express satisfaction (الرضا):\n" +
      '"I\'m very pleased with the results. Everything went well."\n\n' +
      "to express dissatisfaction (عدم الرضا):\n" +
      "\"I'm not happy with this at all. It's not what we agreed on.\"\n\n" +
      "to express surprise (المفاجأة):\n" +
      '"Oh! I can\'t believe it! I had no idea!"\n\n' +
      "to express happiness (السعادة):\n" +
      "\"I'm so happy about this! It's the best news I've ever heard!\"\n\n" +
      "to express sadness (الحزن):\n" +
      '"I feel so sad about what happened. It\'s really heartbreaking."\n\n' +
      "to express anger (الغضب):\n" +
      "\"I'm really angry about this. It's completely unacceptable!\"\n\n" +
      "to express fear (الخوف):\n" +
      '"I\'m afraid of taking this exam. What if I fail?"\n\n' +
      "to express hope (الأمل):\n" +
      '"I hope things will get better. I\'m optimistic about the future."\n\n' +
      "to express regret (الأسف):\n" +
      '"I\'m really sorry I missed the deadline. I deeply regret it."\n\n' +
      "to express relief (الارتياح):\n" +
      "\"Thank goodness! I'm so relieved it's over.\"\n\n" +
      "to express gratitude (الامتنان):\n" +
      '"I\'m extremely grateful for your support throughout this journey."\n\n' +
      "to express disappointment (خيبة الأمل):\n" +
      '"I\'m really disappointed. I expected much better results."\n\n' +
      "to express concern (الاهتمام/القلق):\n" +
      "\"I'm quite concerned about the number of students who didn't attend.\"\n\n" +
      "to express indifference (عدم الاكتراث):\n" +
      '"I don\'t really care either way. Whatever you decide is fine."\n\n' +
      "to express envy (الحسد):\n" +
      '"I really envy your ability to learn languages so quickly."\n\n' +
      "to express disgust (الاشمئزاز):\n" +
      "\"That's disgusting! I can't stand it.\"\n\n" +
      "to express dislike (عدم الإعجاب):\n" +
      '"I really dislike the new schedule. It\'s very inconvenient."\n\n' +
      "to express pleasure (المتعة):\n" +
      "\"It's a pleasure to meet you. I've heard so much about you.\"\n\n" +
      "to express pity (الشفقة):\n" +
      '"What a shame! Poor thing, I really feel sorry for her."\n\n' +
      "to express ignorance (الجهل):\n" +
      '"I have absolutely no idea about this topic."\n\n' +
      "to express shock (الصدمة):\n" +
      '"I\'m completely shocked. I never expected this to happen."\n\n' +
      "to express anxiety (القلق):\n" +
      "\"I'm very anxious about tomorrow's interview. I hope it goes well.\"\n\n" +
      "to express unwillingness (عدم الرغبة):\n" +
      "\"I'd rather not attend. I don't feel comfortable going there.\"\n\n" +
      "to express displeasure (الاستياء):\n" +
      '"I\'m not at all pleased with the way things have been handled."\n\n' +
      "to express likes (الإعجاب/التفضيل):\n" +
      '"I really enjoy studying English. I love learning new vocabulary."\n\n' +
      "to express preferences (الأفضلية):\n" +
      '"I prefer studying in the morning. I find it more productive."\n\n' +
      "to express condolences (التعازي):\n" +
      '"Please accept my sincere condolences. I\'m so sorry for your loss."\n\n' +
      "to express unhappiness (التعاسة):\n" +
      '"I\'ve been feeling really unhappy lately. Nothing seems to go right."\n\n' +
      "to express wonder/admiration (الإعجاب الشديد):\n" +
      "\"It's absolutely breathtaking! I've never seen anything like it.\"\n\n" +
      "═══ **ثانياً: وظائف التواصل والتفاعل** ═══\n\n" +
      "to propose / to suggest (الاقتراح):\n" +
      '"Why don\'t we study together? / I suggest we meet tomorrow."\n\n' +
      "to advise (المشورة والنصيحة):\n" +
      '"You should start preparing early. I advise you not to wait."\n\n' +
      "to warn (التحذير):\n" +
      '"Be careful! If you don\'t register on time, you might lose your place."\n\n' +
      "to promise (الوعد):\n" +
      '"I promise I will do my best to help you succeed."\n\n' +
      "to request (الطلب المؤدَّب):\n" +
      '"Could you please send me the documents by tomorrow?"\n\n' +
      "to order / to command (الأمر):\n" +
      '"Submit your application immediately."\n\n' +
      "to invite (الدعوة):\n" +
      '"Would you like to join us for the study session tonight?"\n\n' +
      "to apologize (الاعتذار):\n" +
      '"I\'m terribly sorry for the inconvenience caused."\n\n' +
      "to compliment (الإطراء):\n" +
      '"Your presentation was excellent! I was very impressed."\n\n' +
      "to praise (الثناء والمدح):\n" +
      '"Well done! You\'ve done an outstanding job on this project."\n\n' +
      "to congratulate (التهنئة):\n" +
      '"Congratulations on your excellent results! You deserve it."\n\n' +
      "to welcome (الترحيب):\n" +
      '"Welcome to our academic programme! We\'re glad to have you."\n\n' +
      "to greet (التحية):\n" +
      "\"Good morning, everyone. I hope you're all ready for today's session.\"\n\n" +
      "to thank (الشكر):\n" +
      '"Thank you for your time and effort. It means a lot."\n\n' +
      "to refuse (الرفض):\n" +
      "\"I'm afraid I can't accept these conditions.\"\n\n" +
      "to agree (الموافقة):\n" +
      '"Absolutely! I completely agree with your point."\n\n' +
      "to disagree (المعارضة):\n" +
      "\"I see your point, but I'm afraid I don't agree with this approach.\"\n\n" +
      "to persuade (الإقناع):\n" +
      "\"I'm sure you'll find this beneficial. Just give it a try!\"\n\n" +
      "to encourage (التشجيع):\n" +
      "\"Keep going! You're doing brilliantly. Don't give up!\"\n\n" +
      "to discourage (عدم التشجيع):\n" +
      "\"I wouldn't recommend that path. It's quite risky.\"\n\n" +
      "to blame (اللوم):\n" +
      '"It\'s your fault this happened. You should have been more careful."\n\n' +
      "to criticize (الانتقاد):\n" +
      '"The essay lacks structure and proper citations."\n\n' +
      "to complain (الشكوى):\n" +
      '"I\'d like to report a problem with the registration system."\n\n' +
      "to demand (المطالبة):\n" +
      '"We demand a clear explanation for this decision."\n\n' +
      "to deny (الإنكار):\n" +
      '"I completely deny these accusations. I had nothing to do with it."\n\n' +
      "to defend (الدفاع):\n" +
      '"I stand by my decision. I believe it was the right thing to do."\n\n' +
      "to clarify (التوضيح):\n" +
      '"Let me clarify what I meant. I didn\'t intend to offend anyone."\n\n' +
      "to explain (الشرح):\n" +
      '"Allow me to explain how the registration process works."\n\n' +
      "to inform (الإعلام والإخبار):\n" +
      '"I\'m writing to inform you that your application has been received."\n\n' +
      "to announce (الإعلان):\n" +
      '"We are pleased to announce the results of the national exam."\n\n' +
      "to confirm (التأكيد):\n" +
      '"I can confirm that the exam will take place on the 20th."\n\n' +
      "to remind (التذكير):\n" +
      '"I\'d like to remind you that the deadline is this Friday."\n\n' +
      "to describe (الوصف):\n" +
      '"The building is large, modern, and located in the city centre."\n\n' +
      "to compare (المقارنة):\n" +
      '"Online learning is more flexible but less interactive than traditional methods."\n\n' +
      "to inquire / to enquire (الاستفسار):\n" +
      '"I\'d like to inquire about the application requirements."\n\n' +
      "to doubt (الشك):\n" +
      '"I\'m not sure whether this approach will work. I have serious doubts."\n\n' +
      "to consent (الموافقة الرسمية):\n" +
      '"I consent to the terms and conditions stated in the document."\n\n' +
      "to object (الاعتراض):\n" +
      '"I object to this decision. It is unfair to the students."\n\n' +
      "to bargain (المساومة):\n" +
      '"Can we negotiate a better deal? I believe there\'s room for compromise."\n\n' +
      "to plead (الالتماس):\n" +
      '"I\'m begging you to reconsider my application. Please give me a chance."\n\n' +
      "to beg (التوسل):\n" +
      '"Please, I\'m asking you not to make this decision without consulting us."\n\n' +
      "to appeal (الاستئناف/النداء):\n" +
      '"I would like to appeal against the decision to reject my application."\n\n' +
      "to threaten (التهديد):\n" +
      '"If this situation continues, we will have no choice but to take legal action."\n\n' +
      "to volunteer (التطوع):\n" +
      '"I\'d be happy to volunteer to help with the event."\n\n' +
      "to introduce (التقديم):\n" +
      '"Allow me to introduce myself. I\'m Dr. Hassan, your new supervisor."\n\n' +
      "to take leave (المغادرة/الوداع):\n" +
      '"It was a pleasure meeting you all. I must be going now. Goodbye!"\n\n' +
      "to interrupt (المقاطعة):\n" +
      '"Sorry to interrupt, but could I ask a quick question?"\n\n' +
      "to support (الدعم):\n" +
      '"I fully support your proposal. I think it\'s an excellent initiative."\n\n' +
      "to condemn (الإدانة):\n" +
      '"We strongly condemn this act of academic dishonesty."\n\n' +
      "to console / to comfort (المواساة والتريح):\n" +
      "\"Don't worry, everything will be okay. I'm here for you.\"\n\n" +
      "to wish (التمني):\n" +
      '"I wish you all the best in your national exams."\n\n' +
      "to pacify (التهدئة):\n" +
      '"Calm down, please. Let\'s discuss this rationally."\n\n' +
      "to direct (التوجيه):\n" +
      '"Please proceed to the second floor. The registration office is there."\n\n' +
      "to assure (الضمان والطمأنينة):\n" +
      '"I assure you that we will do everything in our power to help you."\n\n' +
      "to offer (العرض):\n" +
      '"I\'d like to offer my assistance if you need any help with the forms."\n\n' +
      "to accept (القبول):\n" +
      '"I\'m happy to accept your invitation to present at the conference."\n\n' +
      "to allow / to permit (السماح):\n" +
      '"Students are allowed to use dictionaries during the exam."\n\n' +
      "to urge (الحث):\n" +
      '"I urge all students to submit their applications before the deadline."\n\n' +
      "to instruct (الإرشاد):\n" +
      '"Please follow the instructions written on the exam paper carefully."\n\n' +
      "to compel / to force (الإجبار):\n" +
      '"The new regulation compelled all applicants to resubmit their documents."\n\n' +
      "to brief (الإيجاز):\n" +
      '"Let me brief you on the key points before the meeting begins."\n\n' +
      "to scold (التأنيب):\n" +
      '"The professor scolded the student for submitting a plagiarized paper."\n\n' +
      "to protest (الاحتجاج):\n" +
      '"We protest against this unfair decision and demand an immediate review."\n\n' +
      "to claim (الادعاء):\n" +
      '"He claims to have submitted the form, but there is no record of it."\n\n' +
      "to accuse (الاتهام):\n" +
      '"She was accused of cheating during the national competency exam."\n\n' +
      "to reject (الرفض القاطع):\n" +
      '"The committee rejected the proposal due to insufficient evidence."\n\n' +
      "to tell (الإخبار):\n" +
      '"She told me the results would be published next week."\n\n' +
      "to ask (السؤال):\n" +
      '"He asked the professor about the exam format."\n\n' +
      "to question (التشكيك أو الاستجواب):\n" +
      '"The board questioned the accuracy of the submitted documents."\n\n' +
      "to regret (الندم):\n" +
      '"I deeply regret not preparing better for this opportunity."\n\n' +
      "to approve (الموافقة الرسمية):\n" +
      '"The committee has approved all applications received before the deadline."\n\n' +
      "to compromise (التفاهم والحل الوسط):\n" +
      '"Both sides agreed to compromise and find a solution acceptable to everyone."\n\n' +
      "to forgive (التسامح):\n" +
      '"I forgive you for what happened. Let\'s move forward."\n\n' +
      "to hope (الأمل):\n" +
      '"I hope to receive a positive response regarding my application."\n\n' +
      "to accuse (الاتهام): She accused him of lying.\n" +
      "to decline (الرفض والإنكار): I must decline your offer respectfully.\n" +
      "to express interest (الاهتمام): I'm very interested in joining this programme.",

    keyPoints: [
      "وظائف اللغة = الغرض من الكلام (التعاطف، الإعجاب، الرفض...)",
      "تعبير عاطفي: sympathy, admiration, approval, happiness, fear...",
      "تواصل اجتماعي: greet, invite, thank, apologize, congratulate...",
      "التوجيه والإقناع: advise, warn, persuade, urge, encourage...",
      "الموقف: agree, disagree, refuse, object, consent...",
      "اقرأ السياق جيداً: الكلمات المفتاحية تكشف الوظيفة",
      "مثال: Well done! / Impressive! → to express admiration",
    ],
  },
];
