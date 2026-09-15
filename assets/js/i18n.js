/**
 * EMSAR GROUP — i18n
 *
 * Translation dictionary for AZ / EN / RU.
 * Markup uses `data-i18n="path.to.key"` to bind text content.
 *
 * To add a new translatable string in HTML:
 *   <p data-i18n="some.key">Default Azerbaijani text</p>
 * Then add `some.key` under each language below.
 *
 * Default language is AZ. The user's choice is persisted in localStorage.
 */
(function () {
    'use strict';

    const DICT = {
        az: {
            nav: {
                home: 'EMSAR GROUP',
                about: 'Haqqımızda',
                projects: 'Layihələrimiz',
                services: 'Xidmətlər',
                solutions: 'SOLUTIONS',
                consulting: 'CONSULTING',
                studio: '3D Studio',
                blog: 'Blog',
                partners: 'Tərəfdaşlar',
                contact: 'Əlaqə',
                cta: 'Ödənişsiz Konsultasiya'
            },
            partners: {
                badge: 'Tərəfdaşlar'
            },
            hero: {
                badge: 'Azərbaycanın inteqrasiya edilmiş biznes ekosistemi',
                titleLine1: 'Bir Tərəfdaş',
                titleLine2: 'Bütün Biznes Ehtiyaclarınız',
                subtitle: 'Biznesinizin İT infrastrukturunu qurur, mühasibatlıq, vergi və gömrük əməliyyatlarınızı idarə edir, kreativ tədbir və brend layihələrinizi icra edirik — hamısı vahid koordinasiyalı komandadan. Bir tərəfdaşlıq sazişi, bir hesabat strukturu, bir cavabdeh tərəf — daha az iclas, daha sürətli nəticə.',
                ctaPrimary: 'Ödənişsiz Konsultasiya Sifariş Et',
                ctaSecondary: 'Xidmətlərimizə Bax'
            },
            stats: {
                badge: 'KOMANDAMIZIN GÖSTƏRİCİLƏRİ',
                years: 'il sahə təcrübəsi',
                yearsSub: 'komanda heyətimizdə',
                projects: 'tamamlanmış layihə',
                projectsSub: 'müxtəlif sahələrdə',
                support: 'sürətli texniki dəstək',
                supportSub: 'hər iş günü əlçatan'
            },
            groups: {
                solutions: 'IT həlləri, proqramlaşdırma və kiber təhlükəsizlik',
                consulting: 'Mühasibatlıq, kadr, vergi və gömrük xidmətləri',
                studio: 'Tezliklə',
                cta: 'Ətraflı →',
                ecosystem: 'Texnoloji həllər, peşəkar korporativ konsaltinq və vizual inkişaf istiqamətlərini birləşdirən vahid ekosistem — biznesinizi bütövlüklə gələcəyə daşıyan sinerji.'
            },
            why: {
                badge: 'NİYƏ EMSAR GROUP ?',
                title: 'Bir komanda. Tam dəstək. Tək cavabdehlik.',
                p1: 'Azərbaycan biznes mühitində orta ölçülü bir layihənin üç-dörd ayrı təchizatçı arasında səpələnməsi adi haldır. İT komandası serveri qurur, mühasibat onun amortizasiyasını yazır, gömrük broker isə idxal sənədlərini hazırlayır. Üç müqavilə, üç faktura, üç kommunikasiya kanalı — və problem bir tərəfdən digərinə ötürüldükdə vaxt itir, məsuliyyət bulanıqlaşır.',
                p2: 'EMSAR GROUP bu modeli yenidən qurur. Şirkətinizin İT infrastrukturu, kiber təhlükəsizliyi, mühasibatlıq və vergi uçotu, kadr kargüzarlığı və gömrük rəsmiləşdirilməsi — hamısı eyni ofisdə, eyni layihə meneceri altında idarə olunur. Hər qərar texniki, maliyyə və tənzimləyici tərəfləri eyni anda nəzərə alır.',
                card1: {
                    title: 'Çarpaz təcrübə',
                    desc: 'İT mütəxəssislərimiz amortizasiya prinsiplərini, mühasibatlarımız İT aktivlərinin uçotunu, gömrük komandamız HS kodlarını bilir. Hər həll texniki, maliyyə və tənzimləyici bucaqdan qiymətləndirilir.'
                },
                card2: {
                    title: 'Sürətli icra',
                    desc: 'Üç ayrı təchizatçı arasında məlumat ötürülməsi orta layihənin müddətini iki dəfə uzadır. Vahid komanda kommunikasiyanı sıfıra endirir — qərarlar saatlar ərzində verilir.'
                },
                card3: {
                    title: 'Şəffaf hesabatlılıq',
                    desc: 'Bir tərəfdaşlıq sazişi, bir layihə meneceri, bir aylıq hesabat. Sənədləşmə Vergi və Gömrük Məcəllələrinin tələblərinə tam uyğun aparılır.'
                },
                next: {
                    label: 'NÖVBƏTI İSTİQAMƏT',
                    title: 'EMSAR 3D STUDIO — tezliklə',
                    desc: 'Mövcud xidmət portfelimizə tezliklə korporativ tədbir texnikası (səs, işıq, LED ekran), 3D vizualizasiya və kreativ istehsal əlavə olunacaq. Yeniliklərdən xəbərdar olmaq üçün əlaqə formasını doldurun.'
                }
            },
            projects: {
                badge: 'Layihələrimiz',
                soon: 'Tezliklə',
                cta: 'Ətraflı Məlumat →',
                emsarrx: {
                    category: 'SaaS platforma',
                    desc: 'Test'
                },
                cantam: {
                    category: 'E-commerce platforma',
                    desc: 'Onlayn satış platforması — modern stack üzərində qurulan B2C marketplace.'
                },
                derby: {
                    category: 'Mobil Tətbiq',
                    desc: 'Özünə komanda qur, kadrosunu formalaşdır və digər komandalarla oyun axtar. "Sabah saat 18:00-da Olimpik Stadionda 5v5 oyun axtarırıq" — canlı çat ilə birbaşa əlaqə.'
                },
            },
            testimonials: {
                badge: 'Müştəri rəyləri',
                title: 'Bizimlə işləmiş rəhbərlərin sözü',
                t1: { quote: 'EMSAR GROUP ilə İT və mühasibatlığı eyni komandadan idarə etmək layihə vaxtımızı 3 dəfə qısaltdı. Tövsiyə edirik.', name: 'Rəşad Məmmədov', role: '' },
                t2: { quote: 'Vergi yoxlaması zamanı bütün sənədləşmənin Vergi və Gömrük Məcəllələrinə uyğun hazırlandığını gördük. Audit prosesi gözlədiyimizdən qısa oldu.', name: 'Gülşən Hüseynova', role: '' },
                t3: { quote: 'Texniki layihə qurarkən vergi və gömrük məsələlərini ayrıca komandalarla müzakirə etməyə ehtiyac qalmadı. Tək komanda üç tərəfi də nəzərə aldı.', name: 'Kənan Əliyev', role: '' }
            },
            about: {
                badge: 'Haqqımızda',
                breadcrumb: 'Haqqımızda',
                h1a: 'İxtisaslaşmış xidmətlər',
                h1b: 'Koordinasiyalı icra',
                lead: 'Müasir biznesin uğuru bir neçə amilin uzlaşmasından asılıdır — düzgün texnologiya, dəqiq mühasibatlıq, qanunvericiliyə uyğun gömrük rəsmiləşdirilməsi və hər birinin bir-biri ilə koordinasiyası. EMSAR GROUP məhz bu uzlaşmanı təmin etmək üçün formalaşmışdır.',
                vision: {
                    label: 'BAXIŞIMIZ',
                    title: 'Müasir biznes ixtisaslaşma və əməkdaşlıq tələb edir',
                    p1: 'Hər il Azərbaycan biznes mühiti daha da mürəkkəbləşir. Yeni vergi tənzimləməsi, yeni gömrük rejimləri, yeni texniki standartlar, yeni rəqəmsal tələblər. Bu mühitdə uğur qazanan şirkətlər iki əks gücü balanslaşdıra bilənlərdir: dərin ixtisaslaşma və geniş əhatə.',
                    p2: 'Bir tərəfdə hər sahənin öz dərin ixtisası lazımdır — vergi məsələsində ümumi anlayış kifayət etmir, kiber təhlükəsizlikdə təcrübəsiz peşəkar zərərvericidir. Digər tərəfdə isə bu sahələr bir-biri ilə kəsişir.',
                    p3: 'EMSAR GROUP bu balansı yaratmaq üçün quruldu. Biz "hər işi görən" generalist deyilik. Lakin "yalnız bir sahəni bilən" təcrid olmuş təchizatçı da deyilik. Aramızda fərq budur: ixtisaslaşmış komandalar, koordinasiyalı struktur.'
                },
                principles: {
                    label: 'İNANDIĞIMIZ PRİNSİPLƏR',
                    title: 'Üç prinsip üzərində qurulmuşuq',
                    c1: { title: 'Dərinlik üstündən genişlik', desc: 'Bir mütəxəssis on sahəni səthi bilməkdənsə, üç sahəni dərin bilən üç mütəxəssis daha çox dəyər yaradır.' },
                    c2: { title: 'Yerli kontekst, beynəlxalq standart', desc: 'Vergi Məcəlləsi nüansları və Gömrük Komitəsi prosedurları beynəlxalq icra keyfiyyəti ilə birləşir.' },
                    c3: { title: 'Şəffaflıq peşəkarlığın əsasıdır', desc: 'Müştəri kim ilə müqavilə imzaladığını və hansı komandanın işi gördüyünü öncədən bilməlidir.' }
                },
                structure: {
                    label: 'TƏŞKİLAT STRUKTURU',
                    title: 'İki ixtisaslaşmış şirkət, bir koordinasiya komandası',
                    intro: 'EMSAR GROUP iki ayrı hüquqi şəxsdən ibarət təşkilati quruluşdur. Bu, formalist seçim deyil — peşəkar zərurətdir. Hər istiqamət öz tənzimləyici çərçivəsində fəaliyyət göstərdiyindən, müştəri profilinə uyğun cavab alır.',
                    s1: { desc: 'Texnologiya istiqamətində ixtisaslaşmış struktur. İT infrastrukturu, kiber təhlükəsizlik və proqram inkişafı bu şirkətin ixtisas sahəsidir.' },
                    s2: { desc: 'Maliyyə və tənzimləyici istiqamətdə ixtisaslaşmış struktur. Mühasibatlıq, vergi, kadr və gömrük bu şirkətin ixtisas sahəsidir.' },
                    voen: 'VÖEN:',
                    addr: 'Ünvan:',
                    contact: 'Əlaqə:',
                    note: 'Müştəri iş sifariş etdiyi sahəyə görə müvafiq şirkətlə müqavilə imzalayır. Birdən çox sahədə əməkdaşlıq olduqda vahid layihə menecmenti və hesabat təmin olunur. Daxili mexanizm bizim işimizdir, müştəri yalnız nəticə görür.'
                },
                team: {
                    label: 'KOMANDA',
                    title: 'Yerli sahə təcrübəsindən gələn komanda',
                    p1: 'EMSAR GROUP-un əsas gücü onun komandasıdır. Hər iki şirkətin mütəxəssisləri Azərbaycan biznes mühitində formalaşmış, yerli reallıqları və beynəlxalq standartları balanslaşdıra bilən peşəkarlardır.',
                    p2: 'İT komandamız layihələri layihələndirmədən tətbiqə qədər aparır. Mühasibat komandamız hər ay onlarla biznesin maliyyə strukturunu idarə edir, gömrük komandamız idxal-ixrac sənədləşməsində gündəlik təcrübəyə malikdir.',
                    p3: 'Hər layihə üçün təyin olunmuş əlaqə şəxsi var. Bu, müştəri ilə daimi və konsistent kommunikasiyanı təmin edir.'
                },
                services: {
                    label: 'XİDMƏTLƏR',
                    title: 'Hansı işləri görürük',
                    s1: { title: 'SOLUTIONS istiqaməti', desc: 'İT infrastrukturunun layihələndirilməsi və quraşdırılması, veb və mobil tətbiqlərin inkişafı, kiber təhlükəsizlik auditi və penetrasiya testləri.', cta: 'SOLUTIONS səhifəsinə bax →' },
                    s2: { title: 'CONSULTING istiqaməti', desc: 'Aylıq mühasibatlıq xidmətləri, vergi bəyannamələri, dövlət qeydiyyatı prosesləri, kadr sənədləşməsi və gömrük təmsilçiliyi.', cta: 'CONSULTING səhifəsinə bax →' }
                },
                next: {
                    label: 'İNKİŞAFIMIZ DAVAM EDİR',
                    title: 'Növbəti istiqamət',
                    desc: 'EMSAR GROUP dayanmadan inkişaf edir. Yaxın aylarda mövcud xidmət portfelimizə yeni istiqamət əlavə olunacaq. Yeniliklərdən xəbərdar olmaq üçün bizimlə əlaqə saxlayın.'
                },
                ctaTitle: 'Sizin biznesiniz, bizim ixtisasımız',
                ctaBody: 'Hansı sahədə dəstəyə ehtiyacınız varsa, ilk addım sadədir. Ödənişsiz ilkin konsultasiya zamanı layihənizi birlikdə müzakirə edirik.',
                ctaBtn: 'Ödənişsiz Konsultasiya Sifariş Et →'
            },
            contact: {
                badge: 'Əlaqə',
                title: 'Ödənişsiz konsultasiya sifariş et',
                lead: '1 iş günü ərzində əlaqə saxlayırıq. Heç bir öhdəlik yoxdur — sadəcə layihənizi danışaq.',
                phone: 'Telefon',
                email: 'E-poçt',
                address: 'Ünvan',
                addressValue: 'TIVI Plaza, 3-cü mərtəbə, 1 Hacı Murad küçəsi, Bakı',
                whatsappCta: 'WhatsApp ilə yaz',
                emailNote: 'Spesifik xidmətlər üçün: solutions · consulting'
            },
            form: {
                name: 'Adınız *',
                email: 'Email *',
                company: 'Şirkət',
                service: 'Maraqlandığınız xidmət',
                serviceChoose: 'Seçin...',
                serviceSolutions: 'İT həlləri / proqramlaşdırma',
                serviceConsulting: 'Mühasibatlıq / gömrük',
                serviceStudio: '3D Studio',
                serviceMultiple: 'Bir neçə xidmət',
                message: 'Layihəniz haqqında',
                submit: 'Sorğunu Göndər',
                submitWa: 'WhatsApp ilə göndər',
                privacy: 'Məlumatlarınız gizli saxlanılır və yalnız sizə cavab vermək üçün istifadə olunur.',
                statusSent: 'Email tətbiqi açıldı. Mesajı tamamlayıb göndərin — 1 iş günü ərzində cavab veririk.',
                statusError: 'Bütün məcburi sahələri doldurun.',
                statusSending: 'Göndərilir...'
            },
            footer: {
                tagline: 'Azərbaycanın inteqrasiya edilmiş biznes ekosistemi',
                follow: 'Bizi İzləyin',
                contact: 'Əlaqə',
                rights: 'Bütün hüquqlar qorunur',
                privacy: 'Məxfilik Siyasəti',
                cookie: 'Cookie Siyasəti'
            },
            back: 'Geri qayıt',
            notFound: {
                code: '404',
                title: 'Səhifə tapılmadı',
                desc: 'Axtardığınız səhifə mövcud deyil və ya köçürülüb.',
                btn: 'Ana Səhifəyə Qayıt'
            },
            breadcrumb: { home: 'EMSAR GROUP' },
            solutions: {
                badge: 'EMSAR SOLUTIONS',
                title: 'İT, Proqramlaşdırma və Kiber Təhlükəsizlik',
                lead: 'Şirkətinizin rəqəmsal əsasını qururuq — fiziki infrastrukturdan tam dövrəli proqram həllərinə və penetrasiya testlərinə qədər. Hər layihə həm texniki, həm də biznes tələblərinə uyğun layihələndirilir.',
                approach: {
                    label: 'YANAŞMAMIZ',
                    title: 'Texnologiyanı biznesin xidmətinə qoyuruq',
                    p1: 'Modern biznesdə İT texnologiyası özlüyündə dəyər deyil — biznes nəticələrinin alətidir. Server quraşdırılması, veb tətbiq inkişafı və ya kiber audit — hər layihə biznesin konkret problemini həll etmək məqsədi daşımalıdır.',
                    p2: 'EMSAR SOLUTIONS komandası hər layihəni iki bucaqdan qiymətləndirir: texniki olaraq düzgün qurulması və biznes baxımından dəyər yaratması. Bu yanaşma layihənin uzunmüddətli istismar dövrü boyunca özünü doğruldur.'
                },
                it: {
                    label: 'İT HƏLLƏRİ',
                    title: 'Güclü infrastruktur və şəbəkə',
                    lead: 'Rəqəmsal əməliyyatlarınızın əsasını təşkil edən təhlükəsiz və genişlənə bilən İT mühitləri layihələndirir və tətbiq edirik.',
                    col1Title: 'Video müşahidə və giriş nəzarəti',
                    col1i1: '4K çözünürlüklü IP CCTV və hibrid analoq sistemlər',
                    col1i2: 'Üz tanıma və kartlı giriş ilə çoxsəviyyəli identifikasiya',
                    col1i3: 'Avtomatlaşdırılmış turniket və elektromaqnit qapı həlləri',
                    col1i4: 'Mərkəzləşdirilmiş səlahiyyət və auditin idarə edilməsi',
                    col2Title: 'Kabel və şəbəkə infrastrukturu',
                    col2i1: 'Korporativ LAN/WAN və hibrid bulud arxitekturası',
                    col2i2: 'CAT5e-dən fiber optikaya qədər tam kabel həlləri',
                    col2i3: 'Server otağı və data mərkəzi quraşdırılması',
                    col2i4: 'Çoxsəviyyəli switch, router və firewall inteqrasiyası',
                    col3Title: 'Telefon və rabitə sistemləri',
                    col3i1: 'IP PBX əsaslı korporativ kommunikasiya sistemləri',
                    col3i2: 'VoIP və hibrid telefon şəbəkələri',
                    col3i3: 'Audio-video interkom və konfrans həlləri',
                    col3i4: 'Ofis və yaşayış komplekslərinin domofon sistemləri'
                },
                programming: {
                    label: 'PROQRAMLAŞDIRMA',
                    title: 'Rəqəmsal həllərin inkişafı',
                    lead: 'Müasir texnologiyalardan istifadə edərək sürətli, təhlükəsiz və miqyaslana bilən proqram həlləri hazırlayırıq. Backend, frontend və mobil tərəfləri əhatə edən tam dövrəli inkişaf prosesi təqdim edirik.',
                    col1Title: 'Node.js',
                    col1i1: 'Mikroservis arxitekturası ilə miqyaslana bilən backend',
                    col1i2: 'Real-vaxt rejimli tətbiqlər və canlı məlumat axını',
                    col1i3: 'REST və GraphQL API arxitekturası',
                    col1i4: 'Yüksək yüklənməyə davamlı sistem dizaynı',
                    col2Title: 'React',
                    col2i1: 'Modern Single Page Application arxitekturası',
                    col2i2: 'Komponent əsaslı, yenidən istifadə edilə bilən struktur',
                    col2i3: 'Server-side rendering və performans optimizasiyası',
                    col2i4: 'API inteqrasiyası və state idarəetməsi',
                    col3Title: 'Flutter',
                    col3i1: 'iOS və Android üçün vahid kod bazasında inkişaf',
                    col3i2: 'Native səviyyəyə yaxın performans və animasiya',
                    col3i3: 'Offline-first və çox dilli dəstək arxitekturası',
                    col3i4: 'Platformaspesifik xüsusiyyətlərə tam inteqrasiya',
                    col4Title: 'Laravel (PHP)',
                    col4i1: 'Strukturlaşdırılmış MVC backend arxitekturası',
                    col4i2: 'Korporativ admin panellər və CMS həlləri',
                    col4i3: 'Rol əsaslı autentifikasiya və avtorizasiya',
                    col4i4: 'Verilənlər bazasının strukturu və optimizasiyası'
                },
                cyber: {
                    label: 'KİBER TƏHLÜKƏSİZLİK',
                    title: 'Qabaqcıl penetrasiya testləri',
                    lead: 'Rəqəmsal aktivlərinizi ciddi zəiflik qiymətləndirmələri və proaktiv müdafiə strategiyaları ilə qoruyuruq. OWASP standartlarına uyğun metodologiya ilə həm xarici, həm də daxili təhdid mənzərəsini qiymətləndiririk.',
                    col1Title: 'Veb / API Nüfuzetmə Testləri (WEB-API)',
                    col1i1: 'OWASP Top 10 metodologiyasına əsaslanan auditlər',
                    col1i2: 'Black-box və White-box penetrasiya testləri',
                    col1i3: 'Süni intellekt həlləri integrasiyalarının təhlükəsizlik qiymətləndirilməsi',
                    col2Title: 'Xarici / Daxili Şəbəkə Nüfuzetmə Testləri (EXT / INT)',
                    col2i1: 'Xarici perimetr zəiflik qiymətləndirməsi',
                    col2i2: 'Daxili şəbəkə və Active Directory zəiflik qiymətləndirməsi',
                    col2i3: 'Simsiz şəbəkə zəiflik qiymətləndirməsi',
                    col3Title: 'Mobil tətbiq təhlükəsizliyi (MOBILE)',
                    col3i1: 'iOS və Android üçün OWASP MASVS auditi',
                    col3i2: 'Reverse engineering və dinamik analiz',
                    col3i3: 'Uzunmüddətli təhlükəsizlik araşdırılması'
                },
                ctaTitle: 'Layihəniz üçün hazırıq',
                ctaBody: 'Sıfırdan İT infrastrukturu, mövcud sistemin yenilənməsi, yaxud penetrasiya testi — bir iş günü ərzində geri dönüş edirik. Heç bir öhdəlik yoxdur — sadəcə layihənizi danışaq.',
                ctaBtn: 'Ödənişsiz Konsultasiya Sifariş Et →'
            },
            consulting: {
                badge: 'EMSAR CONSULTING',
                title: 'Mühasibatlıq, Kadr və Gömrük Xidmətləri',
                lead: 'Maliyyə uçotunuz, kadr proseslər və gömrük rəsmiləşdirməsi — hamısı tək koordinasiyalı komandadan.',
                approach: {
                    label: 'YANAŞMAMIZ',
                    title: 'Sahibkarın gündəlik narahatlıqlarını alırıq',
                    p1: 'Sahibkar mühasibat sənədlərinin doğru tərtib olunduğunu, vergi bəyannamələrinin vaxtında verildiyini, gömrük rüsumlarının düzgün hesablandığını yoxlamaq üçün vaxt itirməməlidir. Onun işi biznesi inkişaf etdirmək, sənədlər deyil.',
                    p2: 'EMSAR CONSULTING komandası bu məsuliyyəti tam üzərinə götürür. Vergi Məcəlləsi, Gömrük Məcəlləsi, "Mühasibat uçotu haqqında" Qanun və əmək qanunvericiliyi bizim üçün gündəlik iş alətləridirlər. Müştəri yalnız aylıq hesabat alır, qalanı bizim işimizdir.'
                },
                accounting: {
                    label: 'MÜHASİBATLIQ',
                    title: 'Dəqiq maliyyə idarəetməsi',
                    lead: 'Sahibkarların mühasibatlıq, vergi və maliyyə uçotu üzrə bütün ehtiyaclarını tək ünvandan qarşılayırıq. Hər biznesin ölçüsünə və sahəsinə uyğun fərdi yanaşma təqdim edirik.',
                    col1Title: 'Aylıq mühasibatlıq xidmətləri',
                    col1i1: 'Mühasibat və vergi uçotunun tam təşkili',
                    col1i2: 'Bank əməliyyatlarının uçotu və sənədləşdirilməsi',
                    col1i3: 'Hesab-faktura və elektron qaimələrin tértibi',
                    col1i4: 'Gündəlik cari maliyyə əməliyyatlarının idarəsi',
                    col2Title: 'Vergi bəyannamələri və hesabatlar',
                    col2i1: 'Aylıq, rüblük və illik vergi hesabatları',
                    col2i2: 'ƏDV qeydiyyatı və bəyannamələrinin təqdimi',
                    col2i3: 'DSMF hesabatı və işçi sosial sığorta',
                    col2i4: 'Statistik kod və hesabatların təqdim olunması',
                    col3Title: 'Vergi planlaşdırması və konsultasiya',
                    col3i1: 'Vergi rejiminin optimal seçilməsi',
                    col3i2: 'Sadələşdirilmiş və ümumi vergi rejimi qiymətləndirilməsi',
                    col3i3: 'Vergi yoxlamasına hazırlıq və müşayiət',
                    col3i4: 'Şirkətlərin dövlət qeydiyyatı və ləğv edilməsi'
                },
                hr: {
                    label: 'KADR XİDMƏTLƏRİ',
                    title: 'Tam kadr kargüzarlığı',
                    lead: 'Əmək Məcəlləsi və yerli HR praktikasına uyğun kompleks kadr idarəetməsi. İşə qəbuldan işdən azad olunmaya qədər bütün sənədləşmə və proseslərin idarə edilməsi.',
                    col1Title: 'İşə qəbul və əmək sənədləri',
                    col1i1: 'Əmək müqavilələrinin tértibi və qeydiyyatı',
                    col1i2: 'İşə qəbul və işdən azad olma sənədləşməsi',
                    col1i3: 'Vəzifə təlimatları və daxili nizam-intizam qaydaları',
                    col1i4: 'Əmək kitabçaları və şəxsi işlərin idarəsi',
                    col2Title: 'Əmək haqqı və hesablamalar',
                    col2i1: 'Əmək haqqı hesablanması və ödəniş cədvəlləri',
                    col2i2: 'Sosial sığorta və işsizlik sığortası tutulmaları',
                    col2i3: 'Məzuniyyət, xəstəlik və əlavə ödənişlər',
                    col2i4: 'Bonus və mükafat sistemlərinin sənədləşməsi',
                    col3Title: 'HR konsultasiyası və xüsusi hallar',
                    col3i1: 'Xarici işçilər üçün iş icazələrinin alınması',
                    col3i2: 'Əmək mübahisələrində hüquqi konsultasiya',
                    col3i3: 'Kollektiv müqavilələrin hazırlanması',
                    col3i4: 'Şirkət daxili HR proseslərinin auditi'
                },
                customs: {
                    label: 'GÖMRÜK XİDMƏTLƏRİ',
                    title: 'Sürətli və şəffaf rəsmiləşdirmə',
                    lead: 'İdxal və ixrac əməliyyatlarınızı peşəkar gömrük komandamızla sadələşdiririk. Gömrük Məcəlləsinin tələblərinə tam uyğun və operativ rəsmiləşdirmə təmin edirik.',
                    col1Title: 'Gömrük rəsmiləşdirilməsi',
                    col1i1: 'Tam gömrük təmsilçiliyi və broker xidməti',
                    col1i2: 'Bütün növ gömrük bəyannamələrinin tértibi',
                    col1i3: 'İdxal-ixrac sənədlərinin hazırlanması',
                    col1i4: 'İcazə və sertifikatların alınması',
                    col2Title: 'HS kod və rüsum hesablamaları',
                    col2i1: 'HS kodlarının dəqiq müəyyənləşdirilməsi',
                    col2i2: 'Gömrük rüsumu, ƏDV və aksiz hesablanması',
                    col2i3: 'Tarif preferensiyalarından istifadə',
                    col2i4: 'İdxal-ixrac vergi optimallaşdırılması'
                },
                ctaTitle: 'Sənədlərinizi peşəkarlara həvalə edin',
                ctaBody: 'Yeni şirkət qeydiyyatı, davam edən mühasibatlıq, yaxud gömrük məsləhəti — 1 iş günü ərzində geri dönüş edirik. Heç bir öhdəlik yoxdur — sadəcə layihənizi danışaq.',
                ctaBtn: 'Ödənişsiz Konsultasiya Sifariş Et →'
            },
            studio: {
                badge: 'EMSAR 3D STUDIO',
                teaser: 'TEZLIKLƏ',
                label: 'EMSAR 3D STUDIO',
                title: 'EMSAR 3D STUDIO tezliklə istifadəyə açılacaq.',
                lead: 'EMSAR GROUP portfelinin növbəti istiqamətini hazırlayırıq. Detallı məlumat və xidmət portfeli yaxın aylarda təqdim ediləcək.',
                approach: {
                    label: 'TƏKLİFLƏRİNİZ',
                    title: 'Sizin tələbinizlə qururuq',
                    p1: 'EMSAR 3D STUDIO xidmət portfelini formalaşdırırıq və biznes auditoriyamızın real ehtiyaclarına uyğun qurmaq istəyirik. Əgər bizim Studio xidmətlərimizə daxil etməyimizi istədiyiniz konkret bir yanaşma, texniki həll və ya kreativ format varsa — bizə bildirin.',
                    p2: 'Tədbir təşkili, brend kampaniyası, prezentasiya istehsalı, vizual layihə — hansı sahədə hansı boşluğu görürsünüzsə, təklifinizi qeyd alır və strategiyamızda nəzərə alırıq. Sizin perspektiviniz Studio buraxılışını daha doğru istiqamətə yönəltməyə kömək edir.'
                },
                steps: {
                    label: 'NeCƏ İŞLƏYİR',
                    title: 'Üç sadə addım',
                    s1title: 'Təklifinizi göndərin',
                    s1body: 'Əlaqə formumuz vasitəsilə hansı Studio xidmətini görməyə həvəsiniz olduğunu bizə bildirin.',
                    s2title: 'Komandamız qiymətləndirir',
                    s2body: 'Hər təklif daxili strateji müzakirədən nəzərdən keçirilir və xidmət portfelinin formalaşmasında istifadə olunur.',
                    s3title: 'Buraxılışdan ilk siz xəbər tutursunuz',
                    s3body: 'Studio aktivləşdikdə təklif vermiş müştərilərimizə ilkin elan və əməkdaşlıq dəvəti göndərilir.'
                },
                infoBanner: 'İndilik mövcud xidmətlərimiz üzrə dəstəyə ehtiyacınız varsa, ',
                ctaTitle: 'Təklifinizi paylaşın',
                ctaBody: 'Studio xidmət portfelinə hansı yanaşmanın daxil olmasını istəyirinizsə, bizə bildirin. Buraxılış xəbərlərini ilk siz alacaqsınız.',
                ctaBtn: 'Teklif Göndər →'
            },
            cta: {
                title: 'Layihəniz üçün hazırıq',
                body: '1 iş günü ərzində geri dönüş edirik. Heç bir öhdəlik yoxdur — sadəcə layihənizi danışaq.'
            },
            blog: {
                backToAll: 'Bütün məqalələrə qayıt',
                pageLabel: 'BLOG',
                pageTitle: 'Biznes baxışları və peşəkar təcrübələr.',
                pageLead: 'İT, mühasibatlıq, vergi və kiber təhlükəsizlik sahələrində praktiki məsləhətlər.',
                filterAll: 'Hamısı',
                filterIt: 'İT və Texnologiya',
                filterMuhasibatliq: 'Mühasibatlıq və Vergi',
                filterKadr: 'Kadr və HR',
                filterGomruk: 'Gömrük',
                filterKiber: 'Kiber Təhlükəsizlik',
                featuredBadge: 'SEÇİLMİŞ',
                featuredCat: 'MÜHASİBATLIQ VƏ VERGİ',
                featuredTitle: 'ƏDV qeydiyyatı: Bakıda kiçik biznes nə vaxt qeydiyyata düşməlidir',
                featuredDesc: 'Aylıq dövriyyə hədlərini, könüllü qeydiyyatın üstünlüklərini və ümumi rejim ilə müqayisəni izah edirik.',
                featuredMeta: 'EMSAR CONSULTING · 8 dəq oxu · 15 Aprel 2026',
                c1Cat: 'İT VƏ TEXNOLOGIYA', c1Title: 'Şirkət üçün CRM seçərkən 5 əsas meyar', c1Desc: 'Yanlış CRM seçimi illik on minlərlə manat itkisi yaradır.', c1Meta: '6 dəq oxu · 8 Aprel 2026',
                c2Cat: 'KİBER TƏHLÜKƏSİZLİK', c2Title: 'Phishing hücumları: işçilərinizi necə qoruyursunuz', c2Desc: 'Texniki və davranış əsaslı müdafiə yanaşmaları.', c2Meta: '7 dəq oxu · 1 Aprel 2026',
                c3Cat: 'KADR VƏ HR', c3Title: 'Əmək müqaviləsi: 6 məcburi şərt', c3Desc: 'Əmək Məcəlləsinə uyğun müqavilə nümunəsi.', c3Meta: '5 dəq oxu · 25 Mart 2026',
                c4Cat: 'GÖMRÜK VƏ İDXAL-İXRAC', c4Title: 'HS kod səhvinin gizli xərci', c4Desc: 'Yanlış HS kod gömrük rüsumu hesabını 2-3 dəfə dəyişir.', c4Meta: '9 dəq oxu · 18 Mart 2026',
                c5Cat: 'MÜHASİBATLIQ VƏ VERGİ', c5Title: 'Vergi yoxlamasına 7 addımlıq hazırlıq', c5Desc: 'Cərimə riskini 60% azaldan praktiki addımlar.', c5Meta: '10 dəq oxu · 11 Mart 2026',
                c6Cat: 'İT VƏ TEXNOLOGIYA', c6Title: 'Server otağı standartları', c6Desc: 'Hava dövranı, soyutma və kabel təşkili.', c6Meta: '8 dəq oxu · 4 Mart 2026',
                noResults: 'Bu kateqoriyada məqalə tapılmadı.'
            }
        },

        en: {
            nav: {
                home: 'EMSAR GROUP',
                about: 'About',
                projects: 'Projects',
                services: 'Services',
                solutions: 'SOLUTIONS',
                consulting: 'CONSULTING',
                studio: '3D Studio',
                blog: 'Blog',
                partners: 'Partners',
                contact: 'Contact',
                cta: 'Free Consultation'
            },
            partners: {
                badge: 'Partners'
            },
            hero: {
                badge: "Azerbaijan's integrated business ecosystem",
                titleLine1: 'One Partner.',
                titleLine2: 'All Your Business Needs.',
                subtitle: 'EMSAR GROUP builds your company\'s IT infrastructure, manages your HR, tax and accounting, handles your customs processes, and offers professional modern-technology-driven services for your brand\'s advertising and creative projects.',
                ctaPrimary: 'Book Free Consultation',
                ctaSecondary: 'Explore Services'
            },
            stats: {
                badge: 'OUR TEAM\'S METRICS',
                years: 'years of experience',
                yearsSub: 'within our team',
                projects: 'completed projects',
                projectsSub: 'across various fields',
                support: 'fast technical support',
                supportSub: 'every business day'
            },
            groups: {
                solutions: 'IT solutions, software development & cybersecurity',
                consulting: 'Accounting, HR, tax and customs services',
                studio: 'Coming Soon',
                cta: 'Learn more →',
                ecosystem: 'Technology solutions, professional corporate consulting and visual development — a unified ecosystem that carries your business into the future.'
            },
            why: {
                badge: 'WHY EMSAR GROUP ?',
                title: 'One team. Full support. One accountability.',
                p1: 'In Azerbaijan\'s business environment, a mid-size project typically gets split across three or four separate vendors. The IT team builds the server, accounting writes its depreciation, the customs broker prepares import documents. Three contracts, three invoices, three communication channels — and as problems get passed between them, time is lost and responsibility blurs.',
                p2: 'EMSAR GROUP rebuilds this model. Your company\'s IT infrastructure, cybersecurity, accounting and tax records, HR administration, and customs clearance — all managed in the same office, under the same project manager. Every decision accounts for technical, financial, and regulatory dimensions at once.',
                card1: {
                    title: 'Cross-domain expertise',
                    desc: 'Our IT specialists know depreciation principles, our accountants understand IT asset accounting, our customs team knows HS codes. Every solution is evaluated from technical, financial, and regulatory angles.'
                },
                card2: {
                    title: 'Fast execution',
                    desc: 'Passing information between three separate vendors doubles the average project timeline. A single team reduces communication overhead to zero — decisions are made in hours.'
                },
                card3: {
                    title: 'Transparent accountability',
                    desc: 'One partnership agreement, one project manager, one monthly report. Documentation is maintained in full compliance with the Tax and Customs Codes.'
                },
                next: {
                    label: 'NEXT DIRECTION',
                    title: 'EMSAR 3D STUDIO — coming soon',
                    desc: 'Corporate event technology (sound, lighting, LED screens), 3D visualization and creative production will be added to our service portfolio soon. Fill out the contact form to stay updated.'
                }
            },
            projects: {
                badge: 'Our projects',
                soon: 'Coming Soon',
                cta: 'More Details →',
                emsarrx: {
                    category: 'SaaS platform',
                    desc: 'Test'
                },
                cantam: {
                    category: 'E-commerce platform',
                    desc: 'Online retail platform — a modern-stack B2C marketplace.'
                },
                derby: {
                    category: 'Mobile App',
                    desc: 'Build your team, shape your squad, and find matches with other teams. "Looking for a 5v5 game tomorrow at 18:00 at Olympic Stadium" — direct contact via live chat.'
                },
            },
            testimonials: {
                badge: 'Testimonials',
                title: 'What leaders we\'ve worked with say',
                t1: { quote: 'Running IT and accounting from the same team with EMSAR GROUP cut our project timelines by 3x. Highly recommended.', name: 'Rashad Mammadov', role: '' },
                t2: { quote: 'During the tax audit we found that all documentation had been prepared in full compliance with the Tax and Customs Codes. The audit process was shorter than we expected.', name: 'Gulshan Huseynova', role: '' },
                t3: { quote: 'While setting up the technical project, there was no need to discuss tax and customs issues with separate teams. One team covered all three sides.', name: 'Kenan Aliyev', role: '' }
            },
            about: {
                badge: 'About us',
                breadcrumb: 'About us',
                h1a: 'Specialised services',
                h1b: 'Coordinated delivery',
                lead: 'The success of a modern business depends on the alignment of several factors — the right technology, accurate accounting, legally compliant customs clearance, and the coordination of each with the others. EMSAR GROUP was formed precisely to ensure this alignment.',
                vision: {
                    label: 'OUR VISION',
                    title: 'Modern business demands specialisation and collaboration',
                    p1: "Every year Azerbaijan's business environment becomes more complex. New tax regulations, new customs regimes, new technical standards, new digital requirements. The companies that succeed in this environment are those that can balance two opposing forces: deep specialisation and broad reach.",
                    p2: "On one side, each domain demands its own deep expertise — a general understanding of tax issues is not enough, an inexperienced professional in cybersecurity is actively harmful. On the other side, these domains intersect with one another.",
                    p3: 'EMSAR GROUP was built to create this balance. We are not generalists who "do everything." Nor are we isolated vendors who "know only one domain." The difference is this: specialised teams, coordinated structure.'
                },
                principles: {
                    label: 'OUR PRINCIPLES',
                    title: 'Built on three principles',
                    c1: { title: 'Depth over breadth', desc: 'Three specialists who know three domains deeply create more value than one generalist with shallow knowledge across ten.' },
                    c2: { title: 'Local context, international standards', desc: 'The nuances of the Tax Code and Customs Committee procedures combine with international execution quality.' },
                    c3: { title: 'Transparency is the basis of professionalism', desc: 'The client should know in advance who they are signing the contract with and which team is doing the work.' }
                },
                structure: {
                    label: 'ORGANISATIONAL STRUCTURE',
                    title: 'Two specialised companies, one coordination team',
                    intro: 'EMSAR GROUP is an organisational structure comprising two separate legal entities. This is not a formalistic choice — it is a professional necessity. Because each direction operates within its own regulatory framework, the client receives a response tailored to their profile.',
                    s1: { desc: 'A structure specialised in technology. IT infrastructure, cybersecurity and software development are the areas of expertise of this company.' },
                    s2: { desc: 'A structure specialised in finance and regulation. Accounting, tax, HR and customs are the areas of expertise of this company.' },
                    voen: 'TIN:',
                    addr: 'Address:',
                    contact: 'Contact:',
                    note: 'The client signs a contract with the relevant company according to the domain they are ordering. When collaborating in more than one domain, unified project management and reporting are provided. The internal mechanism is our business — the client sees only the result.'
                },
                team: {
                    label: 'TEAM',
                    title: 'A team rooted in local industry experience',
                    p1: "EMSAR GROUP's core strength is its team. The specialists of both companies have been shaped by Azerbaijan's business environment — professionals who can balance local realities with international standards.",
                    p2: 'Our IT team takes projects from design to deployment. Our accounting team manages the financial structure of dozens of businesses every month, and our customs team has day-to-day experience in import-export documentation.',
                    p3: 'A designated contact person is assigned to every project. This ensures continuous and consistent communication with the client.'
                },
                services: {
                    label: 'SERVICES',
                    title: 'What we do',
                    s1: { title: 'SOLUTIONS division', desc: 'IT infrastructure design and installation, web and mobile application development, cybersecurity audits and penetration testing.', cta: 'View SOLUTIONS page →' },
                    s2: { title: 'CONSULTING division', desc: 'Monthly accounting services, tax declarations, state registration processes, HR documentation and customs representation.', cta: 'View CONSULTING page →' }
                },
                next: {
                    label: 'WE KEEP GROWING',
                    title: 'Next direction',
                    desc: 'EMSAR GROUP is constantly evolving. A new direction will be added to our existing service portfolio in the coming months. Get in touch to stay updated.'
                },
                ctaTitle: 'Your business, our expertise',
                ctaBody: 'Whatever domain you need support in, the first step is simple. During a free initial consultation, we discuss your project together.',
                ctaBtn: 'Book Free Consultation →'
            },
            contact: {
                badge: 'Contact',
                title: 'Book a free consultation',
                lead: 'We respond within 1 business day. No commitment — let\'s just talk about your project.',
                phone: 'Phone',
                email: 'Email',
                address: 'Address',
                addressValue: 'TIVI Plaza, 3rd Floor, 1 Haji Murad Street, Baku',
                whatsappCta: 'Message us on WhatsApp',
                emailNote: 'For specific services: solutions · consulting'
            },
            form: {
                name: 'Your name *',
                email: 'Email *',
                company: 'Company',
                service: 'Service of interest',
                serviceChoose: 'Choose...',
                serviceSolutions: 'IT / software development',
                serviceConsulting: 'Accounting / customs',
                serviceStudio: '3D Studio',
                serviceMultiple: 'Multiple services',
                message: 'About your project',
                submit: 'Send Request',
                submitWa: 'Send via WhatsApp',
                privacy: 'Your information stays private and is used only to reply to you.',
                statusSent: 'Email app opened. Send the message — we reply within 1 business day.',
                statusError: 'Please fill in all required fields.',
                statusSending: 'Sending...'
            },
            footer: {
                tagline: "Azerbaijan's integrated business ecosystem — IT, accounting, customs and 3D Studio from one address.",
                follow: 'Follow us',
                contact: 'Contact',
                rights: 'All rights reserved',
                privacy: 'Privacy Policy',
                cookie: 'Cookie Policy'
            },
            back: 'Go back',
            notFound: {
                code: '404',
                title: 'Page Not Found',
                desc: 'The page you are looking for does not exist or has been moved.',
                btn: 'Back to Home'
            },
            breadcrumb: { home: 'EMSAR GROUP' },
            solutions: {
                badge: 'EMSAR SOLUTIONS',
                title: 'IT, Software & Cybersecurity',
                lead: 'We build the digital foundation of your company — from physical infrastructure to full-stack software solutions and penetration testing. Every project is engineered to meet both technical and business requirements.',
                approach: {
                    label: 'OUR APPROACH',
                    title: 'Technology in the service of business',
                    p1: 'In modern business, IT technology is not valuable in itself — it is a tool for business results. Server installation, web application development or a cyber audit — every project must aim to solve a concrete business problem.',
                    p2: 'The EMSAR SOLUTIONS team evaluates every project from two angles: technically correct implementation and business value creation. This approach proves itself over the long-term lifecycle of the project.'
                },
                it: {
                    label: 'IT SOLUTIONS',
                    title: 'Robust infrastructure & networking',
                    lead: 'We design and deploy secure, scalable IT environments that form the foundation of your digital operations.',
                    col1Title: 'Video surveillance & access control',
                    col1i1: '4K IP CCTV and hybrid analog systems',
                    col1i2: 'Multi-level identification with face recognition and card access',
                    col1i3: 'Automated turnstile and electromagnetic door solutions',
                    col1i4: 'Centralised authority and audit management',
                    col2Title: 'Cabling & network infrastructure',
                    col2i1: 'Corporate LAN/WAN and hybrid cloud architecture',
                    col2i2: 'Full cabling solutions from CAT5e to fiber optic',
                    col2i3: 'Server room and data centre installation',
                    col2i4: 'Multi-layer switch, router and firewall integration',
                    col3Title: 'Phone & communication systems',
                    col3i1: 'IP PBX-based corporate communication systems',
                    col3i2: 'VoIP and hybrid telephone networks',
                    col3i3: 'Audio-video intercom and conferencing solutions',
                    col3i4: 'Intercom systems for offices and residential complexes'
                },
                programming: {
                    label: 'PROGRAMMING',
                    title: 'Digital solution development',
                    lead: 'We build fast, secure and scalable software solutions using modern technologies. We offer an end-to-end development process covering backend, frontend and mobile.',
                    col1Title: 'Node.js',
                    col1i1: 'Scalable backend with microservice architecture',
                    col1i2: 'Real-time applications and live data streams',
                    col1i3: 'REST and GraphQL API architecture',
                    col1i4: 'High-load tolerant system design',
                    col2Title: 'React',
                    col2i1: 'Modern Single Page Application architecture',
                    col2i2: 'Component-based, reusable structure',
                    col2i3: 'Server-side rendering and performance optimisation',
                    col2i4: 'API integration and state management',
                    col3Title: 'Flutter',
                    col3i1: 'Cross-platform iOS and Android development',
                    col3i2: 'Near-native performance and animation',
                    col3i3: 'Offline-first and multilingual support architecture',
                    col3i4: 'Full integration of platform-specific features',
                    col4Title: 'Laravel (PHP)',
                    col4i1: 'Structured MVC backend architecture',
                    col4i2: 'Corporate admin panels and CMS solutions',
                    col4i3: 'Role-based authentication and authorisation',
                    col4i4: 'Database structure and optimisation'
                },
                cyber: {
                    label: 'CYBERSECURITY',
                    title: 'Advanced penetration testing',
                    lead: 'We protect your digital assets with rigorous vulnerability assessments and proactive defence strategies. We evaluate both external and internal threat landscapes using OWASP-compliant methodology.',
                    col1Title: 'Web / API Penetration Testing (WEB-API)',
                    col1i1: 'Audits based on OWASP Top 10 methodology',
                    col1i2: 'Black-box and White-box penetration tests',
                    col1i3: 'Security assessment of AI solution integrations',
                    col2Title: 'External / Internal Network Penetration Testing (EXT / INT)',
                    col2i1: 'External perimeter vulnerability assessment',
                    col2i2: 'Internal network and Active Directory vulnerability assessment',
                    col2i3: 'Wireless network vulnerability assessment',
                    col3Title: 'Mobile Application Security (MOBILE)',
                    col3i1: 'OWASP MASVS audit for iOS and Android',
                    col3i2: 'Reverse engineering and dynamic analysis',
                    col3i3: 'Long-term security research'
                },
                ctaTitle: 'Ready for your project',
                ctaBody: 'IT infrastructure from scratch, existing system upgrade or penetration test — we respond within 1 business day. No obligations — just tell us about your project.',
                ctaBtn: 'Request Free Consultation →'
            },
            consulting: {
                badge: 'EMSAR CONSULTING',
                title: 'Accounting, HR and Customs Services',
                lead: 'Your finances, HR processes and customs paperwork — all from one coordinated team.',
                approach: {
                    label: 'OUR APPROACH',
                    title: "Taking away the entrepreneur's daily worries",
                    p1: "An entrepreneur shouldn't have to spend time verifying that accounting documents are correctly prepared, tax declarations filed on time, or customs duties properly calculated. Their job is to grow the business, not the paperwork.",
                    p2: 'The EMSAR CONSULTING team takes this responsibility fully. The Tax Code, Customs Code, the Accounting Law and labour legislation are our everyday working tools. The client receives a monthly report — the rest is our business.'
                },
                accounting: {
                    label: 'ACCOUNTING',
                    title: 'Precise financial management',
                    lead: "We cover all accounting, tax and financial record-keeping needs of entrepreneurs from one address. We offer a personalised approach tailored to each business's size and sector.",
                    col1Title: 'Monthly accounting services',
                    col1i1: 'Full organisation of accounting and tax records',
                    col1i2: 'Recording and documenting bank transactions',
                    col1i3: 'Preparation of invoices and e-documents',
                    col1i4: 'Management of daily financial operations',
                    col2Title: 'Tax declarations and reports',
                    col2i1: 'Monthly, quarterly and annual tax reports',
                    col2i2: 'VAT registration and declaration submission',
                    col2i3: 'DSMF report and employee social insurance',
                    col2i4: 'Submission of statistical codes and reports',
                    col3Title: 'Tax planning and consultation',
                    col3i1: 'Optimal tax regime selection',
                    col3i2: 'Simplified and general tax regime assessment',
                    col3i3: 'Tax audit preparation and support',
                    col3i4: 'State registration and liquidation of companies'
                },
                hr: {
                    label: 'HR SERVICES',
                    title: 'Complete HR record-keeping',
                    lead: 'Comprehensive HR management in accordance with the Labour Code and local HR practices. Management of all documentation and processes from hiring to dismissal.',
                    col1Title: 'Recruitment and employment documents',
                    col1i1: 'Preparation and registration of employment contracts',
                    col1i2: 'Hiring and dismissal documentation',
                    col1i3: 'Job descriptions and internal discipline rules',
                    col1i4: 'Management of labour books and personal files',
                    col2Title: 'Payroll and calculations',
                    col2i1: 'Payroll calculation and payment schedules',
                    col2i2: 'Social and unemployment insurance deductions',
                    col2i3: 'Vacation, sick leave and additional payments',
                    col2i4: 'Documentation of bonus and incentive systems',
                    col3Title: 'HR consultation and special cases',
                    col3i1: 'Obtaining work permits for foreign employees',
                    col3i2: 'Legal consultation on labour disputes',
                    col3i3: 'Preparation of collective agreements',
                    col3i4: 'Internal HR process audit'
                },
                customs: {
                    label: 'CUSTOMS SERVICES',
                    title: 'Fast and transparent clearance',
                    lead: 'We simplify your import and export operations with our professional customs team. We ensure fast clearance fully compliant with the Customs Code requirements.',
                    col1Title: 'Customs clearance',
                    col1i1: 'Full customs representation and brokerage service',
                    col1i2: 'Preparation of all types of customs declarations',
                    col1i3: 'Preparation of import-export documents',
                    col1i4: 'Obtaining permits and certificates',
                    col2Title: 'HS code and duty calculations',
                    col2i1: 'Accurate identification of HS codes',
                    col2i2: 'Customs duty, VAT and excise calculation',
                    col2i3: 'Utilisation of tariff preferences',
                    col2i4: 'Import-export tax optimisation'
                },
                ctaTitle: 'Delegate your documents to professionals',
                ctaBody: 'New company registration, ongoing accounting, or customs consultation — we respond within 1 business day. No commitment — let\'s just discuss your project.',
                ctaBtn: 'Book Free Consultation →'
            },
            studio: {
                badge: 'EMSAR 3D STUDIO',
                teaser: 'COMING SOON',
                label: 'EMSAR 3D STUDIO',
                title: 'EMSAR 3D STUDIO is launching soon.',
                lead: 'We are preparing the next direction of the EMSAR GROUP portfolio. Detailed information and service portfolio will be presented in the coming months.',
                approach: {
                    label: 'YOUR PROPOSALS',
                    title: 'We build with your input',
                    p1: 'We are shaping the EMSAR 3D STUDIO service portfolio and want to build it in line with the real needs of our business audience. If there is a specific approach, technical solution or creative format you would like us to include — let us know.',
                    p2: 'Event production, brand campaign, presentation materials, visual project — whatever gap you see, we take note of your proposal and factor it into our strategy. Your perspective helps steer the Studio launch in the right direction.'
                },
                steps: {
                    label: 'HOW IT WORKS',
                    title: 'Three simple steps',
                    s1title: 'Send your proposal',
                    s1body: 'Use our contact form to let us know which Studio service you would like to see.',
                    s2title: 'Our team evaluates',
                    s2body: 'Every proposal goes through an internal strategic review and is used in shaping the service portfolio.',
                    s3title: 'You hear about the launch first',
                    s3body: 'When Studio goes live, clients who submitted proposals receive a priority announcement and partnership invitation.'
                },
                infoBanner: 'If you need support from our existing services in the meantime, ',
                ctaTitle: 'Share your proposal',
                ctaBody: 'Tell us which approach you would like included in the Studio service portfolio. You will be the first to receive launch news.',
                ctaBtn: 'Send Proposal →'
            },
            cta: {
                title: "We're ready for your project",
                body: 'We respond within 1 business day. No commitment — let\'s just talk about your project.'
            },
            blog: {
                backToAll: 'Back to all articles',
                pageLabel: 'BLOG',
                pageTitle: 'Business insights and professional expertise.',
                pageLead: 'Practical advice and expert knowledge in IT, accounting, tax and cybersecurity.',
                filterAll: 'All',
                filterIt: 'IT & Technology',
                filterMuhasibatliq: 'Accounting & Tax',
                filterKadr: 'HR & People',
                filterGomruk: 'Customs & Trade',
                filterKiber: 'Cybersecurity',
                featuredBadge: 'FEATURED',
                featuredCat: 'ACCOUNTING & TAX',
                featuredTitle: 'VAT registration: when should a small business in Baku register?',
                featuredDesc: 'We explain monthly turnover thresholds, the benefits of voluntary registration and a comparison with the simplified regime.',
                featuredMeta: 'EMSAR CONSULTING · 8 min read · 15 April 2026',
                c1Cat: 'IT & TECHNOLOGY', c1Title: '5 key criteria when choosing a CRM for your company', c1Desc: 'The wrong CRM choice can cost tens of thousands per year.', c1Meta: '6 min read · 8 April 2026',
                c2Cat: 'CYBERSECURITY', c2Title: 'Phishing attacks: how to protect your employees', c2Desc: 'Technical and behavioural defence approaches.', c2Meta: '7 min read · 1 April 2026',
                c3Cat: 'HR & PEOPLE', c3Title: 'Employment contract: 6 mandatory conditions', c3Desc: 'A contract template compliant with the Labour Code.', c3Meta: '5 min read · 25 March 2026',
                c4Cat: 'CUSTOMS & TRADE', c4Title: 'The hidden cost of HS code errors', c4Desc: 'A wrong HS code can change your customs duty calculation 2-3x.', c4Meta: '9 min read · 18 March 2026',
                c5Cat: 'ACCOUNTING & TAX', c5Title: '7-step preparation plan for a tax audit', c5Desc: 'Practical steps that reduce penalty risk by 60%.', c5Meta: '10 min read · 11 March 2026',
                c6Cat: 'IT & TECHNOLOGY', c6Title: 'Server room standards', c6Desc: 'Airflow, cooling and cable management essentials.', c6Meta: '8 min read · 4 March 2026',
                noResults: 'No articles found in this category.'
            }
        },

        ru: {
            nav: {
                home: 'EMSAR GROUP',
                about: 'О нас',
                projects: 'Проекты',
                services: 'Услуги',
                solutions: 'SOLUTIONS',
                consulting: 'CONSULTING',
                studio: '3D Studio',
                blog: 'Блог',
                partners: 'Партнёры',
                contact: 'Контакты',
                cta: 'Бесплатная консультация'
            },
            partners: {
                badge: 'Партнёры'
            },
            hero: {
                badge: 'Интегрированная бизнес-экосистема Азербайджана',
                titleLine1: 'Один партнёр.',
                titleLine2: 'Все ваши бизнес-задачи.',
                subtitle: 'EMSAR GROUP выстраивает ИТ-инфраструктуру вашей компании, управляет кадровым, налоговым и бухгалтерским учётом, решает таможенные процессы и предлагает профессиональные услуги на базе современных технологий для рекламных и креативных проектов вашего бренда.',
                ctaPrimary: 'Заказать бесплатную консультацию',
                ctaSecondary: 'Наши услуги'
            },
            stats: {
                badge: 'ПОКАЗАТЕЛИ НАШЕЙ КОМАНДЫ',
                years: 'лет опыта в отрасли',
                yearsSub: 'в нашей команде',
                projects: 'завершённых проектов',
                projectsSub: 'в разных областях',
                support: 'быстрая техническая поддержка',
                supportSub: 'каждый рабочий день'
            },
            groups: {
                solutions: 'ИТ-решения, разработка ПО и кибербезопасность',
                consulting: 'Бухгалтерия, кадры, налоги и таможня',
                studio: 'Скоро',
                cta: 'Подробнее →',
                ecosystem: 'ИТ-решения, профессиональный корпоративный консалтинг и визуальное развитие — единая экосистема, которая несёт ваш бизнес в будущее.'
            },
            why: {
                badge: 'ПОЧЕМУ EMSAR GROUP ?',
                title: 'Одна команда. Полная поддержка. Единая ответственность.',
                p1: 'В азербайджанской бизнес-среде проект среднего масштаба, как правило, распределяется между тремя-четырьмя разными подрядчиками. ИТ-команда устанавливает сервер, бухгалтерия начисляет амортизацию, таможенный брокер готовит документы. Три договора, три счёта, три канала коммуникации — и каждый раз, когда проблема переходит от одной стороны к другой, теряется время и размывается ответственность.',
                p2: 'EMSAR GROUP перестраивает эту модель. ИТ-инфраструктура, кибербезопасность, бухгалтерский и налоговый учёт, кадровое делопроизводство и таможенное оформление — всё управляется в одном офисе, под руководством одного менеджера проекта. Каждое решение одновременно учитывает технические, финансовые и регуляторные аспекты.',
                card1: {
                    title: 'Кросс-доменная экспертиза',
                    desc: 'Наши ИТ-специалисты знают принципы амортизации, бухгалтеры — учёт ИТ-активов, таможенная команда — коды ТН ВЭД. Каждое решение оценивается с технической, финансовой и регуляторной точки зрения.'
                },
                card2: {
                    title: 'Быстрое исполнение',
                    desc: 'Передача информации между тремя подрядчиками удваивает среднее время реализации проекта. Единая команда сводит коммуникационные издержки к нулю — решения принимаются за часы.'
                },
                card3: {
                    title: 'Прозрачная отчётность',
                    desc: 'Один договор о партнёрстве, один менеджер проекта, один ежемесячный отчёт. Документация ведётся в полном соответствии с требованиями Налогового и Таможенного кодексов.'
                },
                next: {
                    label: 'СЛЕДУЮЩЕЕ НАПРАВЛЕНИЕ',
                    title: 'EMSAR 3D STUDIO — скоро',
                    desc: 'В наш портфель услуг скоро будут добавлены корпоративная техника для мероприятий (звук, свет, LED-экраны), 3D-визуализация и креативное производство. Заполните форму обратной связи, чтобы быть в курсе обновлений.'
                }
            },
            projects: {
                badge: 'Наши проекты',
                soon: 'Скоро',
                cta: 'Подробнее →',
                emsarrx: {
                    category: 'SaaS платформа',
                    desc: 'Test'
                },
                cantam: {
                    category: 'E-commerce платформа',
                    desc: 'Онлайн-платформа продаж — B2C маркетплейс на современном стеке.'
                },
                derby: {
                    category: 'Мобильное приложение',
                    desc: 'Собери команду, сформируй состав и ищи матчи с другими командами. «Ищем игру 5v5 завтра в 18:00 на Олимпийском стадионе» — прямой контакт через живой чат.'
                },
            },
            testimonials: {
                badge: 'Отзывы',
                title: 'Что говорят руководители, с которыми мы работали',
                t1: { quote: 'Управление ИТ и бухгалтерией одной командой EMSAR GROUP сократило наши сроки реализации проекта в 3 раза. Рекомендуем.', name: 'Рашад Мамедов', role: '' },
                t2: { quote: 'В ходе налоговой проверки мы убедились, что вся документация подготовлена в полном соответствии с Налоговым и Таможенным кодексами. Аудит прошёл быстрее, чем мы ожидали.', name: 'Гюльшан Гусейнова', role: '' },
                t3: { quote: 'При реализации технического проекта не было необходимости обсуждать налоговые и таможенные вопросы с отдельными командами. Одна команда учла все три стороны.', name: 'Кенан Алиев', role: '' }
            },
            about: {
                badge: 'О нас',
                breadcrumb: 'О нас',
                h1a: 'Специализированные услуги',
                h1b: 'Скоординированное исполнение',
                lead: 'Успех современного бизнеса зависит от согласованности нескольких факторов — правильных технологий, точного бухучёта, соответствующего законодательству таможенного оформления и координации каждого из них. EMSAR GROUP был создан именно для обеспечения этой согласованности.',
                vision: {
                    label: 'НАШ ВЗГЛЯД',
                    title: 'Современный бизнес требует специализации и сотрудничества',
                    p1: 'Каждый год бизнес-среда Азербайджана становится всё сложнее. Новые налоговые регуляции, новые таможенные режимы, новые технические стандарты, новые цифровые требования. Компании, добивающиеся успеха в этой среде, — те, кто может сбалансировать два противоположных фактора: глубокую специализацию и широкий охват.',
                    p2: 'С одной стороны, каждая область требует глубокой экспертизы — общего понимания налоговых вопросов недостаточно, неопытный специалист в кибербезопасности может нанести вред. С другой стороны, эти области пересекаются между собой.',
                    p3: 'EMSAR GROUP был создан для достижения этого баланса. Мы не «универсалы, делающие всё». Но мы и не изолированные поставщики, знающие лишь одну область. Наша суть: специализированные команды, скоординированная структура.'
                },
                principles: {
                    label: 'НАШИ ПРИНЦИПЫ',
                    title: 'Построены на трёх принципах',
                    c1: { title: 'Глубина важнее широты', desc: 'Три специалиста, глубоко знающие три области, создают больше ценности, чем один универсал с поверхностными знаниями в десяти.' },
                    c2: { title: 'Местный контекст, международные стандарты', desc: 'Нюансы Налогового кодекса и процедуры Таможенного комитета сочетаются с международным качеством исполнения.' },
                    c3: { title: 'Прозрачность — основа профессионализма', desc: 'Клиент должен заранее знать, с кем он подписывает договор и какая команда выполняет работу.' }
                },
                structure: {
                    label: 'ОРГАНИЗАЦИОННАЯ СТРУКТУРА',
                    title: 'Две специализированные компании, одна координационная команда',
                    intro: 'EMSAR GROUP — организационная структура, состоящая из двух отдельных юридических лиц. Это не формальный выбор — это профессиональная необходимость. Поскольку каждое направление работает в своей регуляторной среде, клиент получает ответ, соответствующий его профилю.',
                    s1: { desc: 'Структура, специализирующаяся в области технологий. ИТ-инфраструктура, кибербезопасность и разработка ПО — области компетенции этой компании.' },
                    s2: { desc: 'Структура, специализирующаяся в области финансов и регулирования. Бухгалтерия, налоги, кадры и таможня — области компетенции этой компании.' },
                    voen: 'ИНН:',
                    addr: 'Адрес:',
                    contact: 'Контакт:',
                    note: 'Клиент заключает договор с соответствующей компанией в зависимости от заказываемой области. При сотрудничестве в нескольких областях обеспечивается единое управление проектом и отчётность. Внутренний механизм — наше дело, клиент видит только результат.'
                },
                team: {
                    label: 'КОМАНДА',
                    title: 'Команда, выросшая из местного отраслевого опыта',
                    p1: 'Главная сила EMSAR GROUP — её команда. Специалисты обеих компаний сформировались в азербайджанской бизнес-среде — профессионалы, умеющие балансировать между местными реалиями и международными стандартами.',
                    p2: 'Наша ИТ-команда ведёт проекты от проектирования до внедрения. Наша бухгалтерская команда ежемесячно управляет финансовой структурой десятков предприятий, а таможенная команда имеет ежедневный опыт в документировании импорта и экспорта.',
                    p3: 'Для каждого проекта назначается ответственный контактный сотрудник. Это обеспечивает постоянную и последовательную коммуникацию с клиентом.'
                },
                services: {
                    label: 'УСЛУГИ',
                    title: 'Что мы делаем',
                    s1: { title: 'Направление SOLUTIONS', desc: 'Проектирование и монтаж ИТ-инфраструктуры, разработка веб- и мобильных приложений, аудит кибербезопасности и пентесты.', cta: 'Перейти на страницу SOLUTIONS →' },
                    s2: { title: 'Направление CONSULTING', desc: 'Ежемесячные бухгалтерские услуги, налоговые декларации, процессы государственной регистрации, кадровая документация и таможенное представительство.', cta: 'Перейти на страницу CONSULTING →' }
                },
                next: {
                    label: 'МЫ ПРОДОЛЖАЕМ РАЗВИВАТЬСЯ',
                    title: 'Следующее направление',
                    desc: 'EMSAR GROUP постоянно развивается. В ближайшие месяцы к существующему портфелю услуг будет добавлено новое направление. Свяжитесь с нами, чтобы быть в курсе.'
                },
                ctaTitle: 'Ваш бизнес — наша экспертиза',
                ctaBody: 'В какой бы области вам ни потребовалась поддержка, первый шаг прост. На бесплатной первичной консультации мы совместно обсуждаем ваш проект.',
                ctaBtn: 'Заказать бесплатную консультацию →'
            },
            contact: {
                badge: 'Контакты',
                title: 'Закажите бесплатную консультацию',
                lead: 'Отвечаем в течение 1 рабочего дня. Без обязательств — просто обсудим ваш проект.',
                phone: 'Телефон',
                email: 'Email',
                address: 'Адрес',
                addressValue: 'TIVI Plaza, 3-й этаж, ул. Гаджи Мурад, 1, Баку',
                whatsappCta: 'Написать в WhatsApp',
                emailNote: 'По конкретным услугам: solutions · consulting'
            },
            form: {
                name: 'Ваше имя *',
                email: 'Email *',
                company: 'Компания',
                service: 'Интересующая услуга',
                serviceChoose: 'Выберите...',
                serviceSolutions: 'ИТ / разработка ПО',
                serviceConsulting: 'Бухгалтерия / таможня',
                serviceStudio: '3D Studio',
                serviceMultiple: 'Несколько услуг',
                message: 'О вашем проекте',
                submit: 'Отправить запрос',
                submitWa: 'Отправить через WhatsApp',
                privacy: 'Ваши данные конфиденциальны и используются только для ответа.',
                statusSent: 'Открыто почтовое приложение. Отправьте сообщение — ответим в течение 1 рабочего дня.',
                statusError: 'Заполните все обязательные поля.',
                statusSending: 'Отправка...'
            },
            footer: {
                tagline: 'Интегрированная бизнес-экосистема Азербайджана — ИТ, бухгалтерия, таможня и 3D Studio с одного адреса.',
                follow: 'Подписывайтесь',
                contact: 'Контакты',
                rights: 'Все права защищены',
                privacy: 'Политика конфиденциальности',
                cookie: 'Политика Cookie'
            },
            back: 'Назад',
            notFound: {
                code: '404',
                title: 'Страница не найдена',
                desc: 'Страница, которую вы ищете, не существует или была перемещена.',
                btn: 'На главную'
            },
            breadcrumb: { home: 'EMSAR GROUP' },
            solutions: {
                badge: 'EMSAR SOLUTIONS',
                title: 'ИТ, разработка ПО и кибербезопасность',
                lead: 'Создаём цифровой фундамент вашей компании — от физической инфраструктуры до full-stack программных решений и пентестов. Каждый проект проектируется с учётом как технических, так и бизнес-требований.',
                approach: {
                    label: 'НАШ ПОДХОД',
                    title: 'Технологии на службе бизнеса',
                    p1: 'В современном бизнесе ИТ-технологии сами по себе не представляют ценности — они являются инструментом достижения бизнес-результатов. Установка серверов, разработка веб-приложений или кибераудит — каждый проект должен быть направлен на решение конкретной бизнес-задачи.',
                    p2: 'Команда EMSAR SOLUTIONS оценивает каждый проект с двух сторон: технически правильная реализация и создание бизнес-ценности. Этот подход оправдывает себя на протяжении всего жизненного цикла проекта.'
                },
                it: {
                    label: 'ИТ РЕШЕНИЯ',
                    title: 'Надёжная инфраструктура и сети',
                    lead: 'Проектируем и внедряем безопасные, масштабируемые ИТ-среды, составляющие основу ваших цифровых операций.',
                    col1Title: 'Видеонаблюдение и контроль доступа',
                    col1i1: '4K IP CCTV и гибридные аналоговые системы',
                    col1i2: 'Многоуровневая идентификация с распознаванием лиц и картами доступа',
                    col1i3: 'Автоматические турникеты и электромагнитные двери',
                    col1i4: 'Централизованное управление правами и аудитом',
                    col2Title: 'Кабельная и сетевая инфраструктура',
                    col2i1: 'Корпоративная LAN/WAN и гибридная облачная архитектура',
                    col2i2: 'Полный комплекс кабельных решений от CAT5e до оптоволокна',
                    col2i3: 'Установка серверных комнат и центров обработки данных',
                    col2i4: 'Интеграция многоуровневых коммутаторов, маршрутизаторов и межсетевых экранов',
                    col3Title: 'Телефонные и коммуникационные системы',
                    col3i1: 'Корпоративные коммуникационные системы на базе IP PBX',
                    col3i2: 'VoIP и гибридные телефонные сети',
                    col3i3: 'Аудио-видео домофоны и конференц-системы',
                    col3i4: 'Домофонные системы для офисов и жилых комплексов'
                },
                programming: {
                    label: 'ПРОГРАММИРОВАНИЕ',
                    title: 'Разработка цифровых решений',
                    lead: 'Создаём быстрые, безопасные и масштабируемые программные решения с использованием современных технологий. Предоставляем полный цикл разработки, охватывающий backend, frontend и мобильную разработку.',
                    col1Title: 'Node.js',
                    col1i1: 'Масштабируемый backend на микросервисной архитектуре',
                    col1i2: 'Приложения реального времени и потоки живых данных',
                    col1i3: 'REST и GraphQL API архитектура',
                    col1i4: 'Системы с высокой устойчивостью к нагрузкам',
                    col2Title: 'React',
                    col2i1: 'Современная архитектура Single Page Application',
                    col2i2: 'Компонентная, повторно используемая структура',
                    col2i3: 'Server-side rendering и оптимизация производительности',
                    col2i4: 'Интеграция API и управление состоянием',
                    col3Title: 'Flutter',
                    col3i1: 'Кроссплатформенная разработка для iOS и Android',
                    col3i2: 'Производительность и анимация близкие к нативным',
                    col3i3: 'Архитектура с поддержкой offline и мультиязычности',
                    col3i4: 'Полная интеграция платформоспецифичных функций',
                    col4Title: 'Laravel (PHP)',
                    col4i1: 'Структурированная MVC backend архитектура',
                    col4i2: 'Корпоративные admin панели и CMS решения',
                    col4i3: 'Ролевая аутентификация и авторизация',
                    col4i4: 'Структура и оптимизация базы данных'
                },
                cyber: {
                    label: 'КИБЕРБЕЗОПАСНОСТЬ',
                    title: 'Продвинутое тестирование на проникновение',
                    lead: 'Защищаем ваши цифровые активы с помощью строгих оценок уязвимостей и проактивных стратегий защиты. Оцениваем как внешний, так и внутренний ландшафт угроз по методологии OWASP.',
                    col1Title: 'Веб / API тестирование на проникновение (WEB-API)',
                    col1i1: 'Аудиты на основе методологии OWASP Top 10',
                    col1i2: 'Black-box и White-box тесты на проникновение',
                    col1i3: 'Оценка безопасности интеграций ИИ-решений',
                    col2Title: 'Внешнее / Внутреннее тестирование сети (EXT / INT)',
                    col2i1: 'Оценка уязвимостей внешнего периметра',
                    col2i2: 'Оценка уязвимостей внутренней сети и Active Directory',
                    col2i3: 'Оценка уязвимостей беспроводных сетей',
                    col3Title: 'Безопасность мобильных приложений (MOBILE)',
                    col3i1: 'OWASP MASVS аудит для iOS и Android',
                    col3i2: 'Обратная разработка и динамический анализ',
                    col3i3: 'Долгосрочные исследования безопасности'
                },
                ctaTitle: 'Готовы к вашему проекту',
                ctaBody: 'ИТ-инфраструктура с нуля, обновление существующей системы или тест на проникновение — мы отвечаем в течение 1 рабочего дня. Никаких обязательств — просто расскажите о своём проекте.',
                ctaBtn: 'Запросить бесплатную консультацию →'
            },
            consulting: {
                badge: 'EMSAR CONSULTING',
                title: 'Бухгалтерия, кадры и таможня',
                lead: 'Финансовый учёт, кадровые процессы и таможенное оформление — всё одной координированной командой.',
                approach: {
                    label: 'НАШ ПОДХОД',
                    title: 'Берём на себя повседневные заботы предпринимателя',
                    p1: 'Предприниматель не должен тратить время на проверку правильности составления бухгалтерских документов, своевременной подачи налоговых деклараций или корректного расчёта таможенных пошлин. Его задача — развивать бизнес, а не разбираться в бумагах.',
                    p2: 'Команда EMSAR CONSULTING берёт эту ответственность на себя полностью. Налоговый кодекс, Таможенный кодекс, Закон о бухгалтерском учёте и трудовое законодательство — наши ежедневные рабочие инструменты. Клиент получает ежемесячный отчёт — всё остальное наше дело.'
                },
                accounting: {
                    label: 'БУХГАЛТЕРИЯ',
                    title: 'Точное финансовое управление',
                    lead: 'Закрываем все потребности предпринимателей в области бухгалтерского, налогового и финансового учёта с одного адреса. Предлагаем индивидуальный подход, адаптированный к размеру и отрасли каждого бизнеса.',
                    col1Title: 'Ежемесячные бухгалтерские услуги',
                    col1i1: 'Полная организация бухгалтерского и налогового учёта',
                    col1i2: 'Учёт и документирование банковских операций',
                    col1i3: 'Составление счетов-фактур и электронных накладных',
                    col1i4: 'Управление текущими финансовыми операциями',
                    col2Title: 'Налоговые декларации и отчёты',
                    col2i1: 'Ежемесячные, квартальные и годовые налоговые отчёты',
                    col2i2: 'Регистрация НДС и подача деклараций',
                    col2i3: 'Отчёт ДФСС и социальное страхование сотрудников',
                    col2i4: 'Представление статистических кодов и отчётов',
                    col3Title: 'Налоговое планирование и консультации',
                    col3i1: 'Оптимальный выбор налогового режима',
                    col3i2: 'Оценка упрощённого и общего налогового режима',
                    col3i3: 'Подготовка и сопровождение при налоговой проверке',
                    col3i4: 'Государственная регистрация и ликвидация компаний'
                },
                hr: {
                    label: 'КАДРОВЫЕ УСЛУГИ',
                    title: 'Полное кадровое делопроизводство',
                    lead: 'Комплексное управление персоналом в соответствии с Трудовым кодексом и местными HR-практиками. Управление всей документацией и процессами от найма до увольнения.',
                    col1Title: 'Приём на работу и трудовые документы',
                    col1i1: 'Составление и регистрация трудовых договоров',
                    col1i2: 'Документирование найма и увольнения',
                    col1i3: 'Должностные инструкции и правила внутреннего распорядка',
                    col1i4: 'Ведение трудовых книжек и личных дел',
                    col2Title: 'Зарплата и расчёты',
                    col2i1: 'Расчёт заработной платы и платёжные ведомости',
                    col2i2: 'Отчисления по социальному и страхованию от безработицы',
                    col2i3: 'Отпуска, больничные и дополнительные выплаты',
                    col2i4: 'Документирование систем премирования и поощрений',
                    col3Title: 'HR-консультации и особые случаи',
                    col3i1: 'Оформление разрешений на работу для иностранных сотрудников',
                    col3i2: 'Юридические консультации по трудовым спорам',
                    col3i3: 'Подготовка коллективных договоров',
                    col3i4: 'Аудит внутренних HR-процессов компании'
                },
                customs: {
                    label: 'ТАМОЖЕННЫЕ УСЛУГИ',
                    title: 'Быстрое и прозрачное оформление',
                    lead: 'Упрощаем ваши операции по импорту и экспорту с помощью профессиональной таможенной команды. Обеспечиваем оперативное оформление в полном соответствии с требованиями Таможенного кодекса.',
                    col1Title: 'Таможенное оформление',
                    col1i1: 'Полное таможенное представительство и брокерские услуги',
                    col1i2: 'Составление всех видов таможенных деклараций',
                    col1i3: 'Подготовка импортно-экспортных документов',
                    col1i4: 'Получение разрешений и сертификатов',
                    col2Title: 'Коды ТН ВЭД и расчёт пошлин',
                    col2i1: 'Точное определение кодов ТН ВЭД',
                    col2i2: 'Расчёт таможенных пошлин, НДС и акцизов',
                    col2i3: 'Использование тарифных преференций',
                    col2i4: 'Оптимизация налогообложения при импорте-экспорте'
                },
                ctaTitle: 'Передайте документы профессионалам',
                ctaBody: 'Регистрация новой компании, текущее бухгалтерское обслуживание или таможенная консультация — отвечаем в течение 1 рабочего дня. Без обязательств — просто обсудим ваш проект.',
                ctaBtn: 'Заказать бесплатную консультацию →'
            },
            studio: {
                badge: 'EMSAR 3D STUDIO',
                teaser: 'СКОРО',
                label: 'EMSAR 3D STUDIO',
                title: 'EMSAR 3D STUDIO скоро открывается.',
                lead: 'Мы готовим следующее направление портфеля EMSAR GROUP. Подробная информация и портфель услуг будут представлены в ближайшие месяцы.',
                approach: {
                    label: 'ВАШИ ПРЕДЛОЖЕНИЯ',
                    title: 'Строим по вашим запросам',
                    p1: 'Мы формируем портфель услуг EMSAR 3D STUDIO и хотим выстроить его в соответствии с реальными потребностями нашей бизнес-аудитории. Если у вас есть конкретный подход, техническое решение или креативный формат, который вы хотели бы видеть — сообщите нам.',
                    p2: 'Организация мероприятий, брендовая кампания, производство презентаций, визуальный проект — в какой бы области вы ни увидели пробел, мы принимаем ваше предложение к сведению и учитываем в нашей стратегии. Ваша перспектива помогает направить запуск Studio в правильную сторону.'
                },
                steps: {
                    label: 'КАК ЭТО РАБОТАЕТ',
                    title: 'Три простых шага',
                    s1title: 'Отправьте предложение',
                    s1body: 'Через нашу контактную форму сообщите нам, какую услугу Studio вы хотели бы видеть.',
                    s2title: 'Наша команда оценивает',
                    s2body: 'Каждое предложение проходит внутреннее стратегическое обсуждение и используется при формировании портфеля услуг.',
                    s3title: 'Вы узнаёте о запуске первыми',
                    s3body: 'Когда Studio запустится, клиенты, отправившие предложения, получат приоритетное объявление и приглашение к партнёрству.'
                },
                infoBanner: 'Если вам нужна поддержка по нашим текущим услугам, ',
                ctaTitle: 'Поделитесь предложением',
                ctaBody: 'Сообщите нам, какой подход вы хотели бы включить в портфель услуг Studio. Вы первыми получите новости о запуске.',
                ctaBtn: 'Отправить предложение →'
            },
            cta: {
                title: 'Мы готовы к вашему проекту',
                body: 'Отвечаем в течение 1 рабочего дня. Без обязательств — просто обсудим ваш проект.'
            },
            blog: {
                backToAll: 'Вернуться ко всем статьям',
                pageLabel: 'БЛОГ',
                pageTitle: 'Бизнес-аналитика и профессиональный опыт.',
                pageLead: 'Практические советы и экспертные знания в области ИТ, бухгалтерии, налогов и кибербезопасности.',
                filterAll: 'Все',
                filterIt: 'ИТ и технологии',
                filterMuhasibatliq: 'Бухгалтерия и налоги',
                filterKadr: 'Кадры и HR',
                filterGomruk: 'Таможня и ВЭД',
                filterKiber: 'Кибербезопасность',
                featuredBadge: 'ИЗБРАННОЕ',
                featuredCat: 'БУХГАЛТЕРИЯ И НАЛОГИ',
                featuredTitle: 'Регистрация НДС: когда малый бизнес в Баку обязан встать на учёт?',
                featuredDesc: 'Объясняем пороги ежемесячного оборота, преимущества добровольной регистрации и сравнение с упрощённым режимом.',
                featuredMeta: 'EMSAR CONSULTING · 8 мин чтения · 15 апреля 2026',
                c1Cat: 'ИТ И ТЕХНОЛОГИИ', c1Title: '5 ключевых критериев при выборе CRM для компании', c1Desc: 'Неправильный выбор CRM обходится в десятки тысяч в год.', c1Meta: '6 мин чтения · 8 апреля 2026',
                c2Cat: 'КИБЕРБЕЗОПАСНОСТЬ', c2Title: 'Фишинговые атаки: как защитить своих сотрудников', c2Desc: 'Технические и поведенческие подходы к защите.', c2Meta: '7 мин чтения · 1 апреля 2026',
                c3Cat: 'КАДРЫ И HR', c3Title: 'Трудовой договор: 6 обязательных условий', c3Desc: 'Шаблон договора в соответствии с Трудовым кодексом.', c3Meta: '5 мин чтения · 25 марта 2026',
                c4Cat: 'ТАМОЖНЯ И ВЭД', c4Title: 'Скрытая стоимость ошибок в коде ТН ВЭД', c4Desc: 'Неверный код ТН ВЭД может изменить расчёт пошлины в 2-3 раза.', c4Meta: '9 мин чтения · 18 марта 2026',
                c5Cat: 'БУХГАЛТЕРИЯ И НАЛОГИ', c5Title: '7-шаговый план подготовки к налоговой проверке', c5Desc: 'Практические шаги, снижающие риск штрафов на 60%.', c5Meta: '10 мин чтения · 11 марта 2026',
                c6Cat: 'ИТ И ТЕХНОЛОГИИ', c6Title: 'Стандарты серверной комнаты', c6Desc: 'Вентиляция, охлаждение и организация кабельного хозяйства.', c6Meta: '8 мин чтения · 4 марта 2026',
                noResults: 'В этой категории статей не найдено.'
            }
        }
    };

    const STORAGE_KEY = 'emsar.lang';
    const DEFAULT_LANG = 'az';

    function get(obj, path) {
        return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    }

    function applyTranslations(lang) {
        const dict = DICT[lang] || DICT[DEFAULT_LANG];
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = get(dict, key);
            if (typeof value === 'string') {
                if (el.children.length === 0) {
                    el.textContent = value;
                } else {
                    // Element has children — only update the text nodes that look like translatable copy.
                    // Convention: when the source uses inner <b> wrappers (e.g. About paragraphs), we leave them alone.
                    // For simple cases without children we already handled it above.
                    // For complex nodes, only swap if the dictionary value is a plain text replacement
                    // and the element has no nested-translation children.
                    const hasNestedI18n = el.querySelector('[data-i18n]');
                    if (!hasNestedI18n) {
                        el.textContent = value;
                    }
                }
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const spec = el.getAttribute('data-i18n-attr');
            const [attr, key] = spec.split('|');
            const value = get(dict, key);
            if (typeof value === 'string') el.setAttribute(attr, value);
        });

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.querySelectorAll('[data-lang-block]').forEach((block) => {
            block.style.display = block.getAttribute('data-lang-block') === lang ? '' : 'none';
        });
    }

    function getInitialLang() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && DICT[saved]) return saved;
        } catch (e) { /* ignore storage errors */ }
        const browser = (navigator.language || 'az').slice(0, 2);
        return DICT[browser] ? browser : DEFAULT_LANG;
    }

    function setLang(lang) {
        if (!DICT[lang]) return;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
        applyTranslations(lang);
        window.dispatchEvent(new CustomEvent('lang:change', { detail: { lang } }));
    }

    function init() {
        applyTranslations(getInitialLang());
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.EmsarI18n = { setLang, getLang: getInitialLang, dict: DICT };
})();
