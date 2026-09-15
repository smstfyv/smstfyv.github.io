# EMSAR GROUP - Dil Tərcümələri və Blog URL Strukturu

## Fayl: `lang/translations.json`

Bu fayl bütün dillərdəki (AZ, EN, RU) tərcümələri ehtiva edir. Struktur如下:

```json
{
  "az": { ... },
  "en": { ... },
  "ru": { ... }
}
```

Hər dil özü içində eyni açarlar (keys) ilə təşkil olunmuşdur:
- `nav` - Naviqasiya
- `hero` - Əsas bölmə
- `stats` - Statistikalar
- `why` - Niyə EMSAR GROUP
- `projects` - Layihələr
- `testimonials` - Müştəri rəyləri
- `about` - Haqqımızda
- `contact` - Əlaqə
- `form` - Əlaqə formu
- `footer` - Alt bilgi
- `solutions` - İT həlləri
- `consulting` - Mühasibatlıq
- `studio` - 3D Studio
- `blog` - Blog

---

## Blog URL Strukturu

### `/blog.html` ni URL-də görünmür?

Layihədə `blog.html` faylı yoxdur. Blog səhifəsi **qovluq strukturu** ilə işləyir:

```
blog/
  index.html          ← /blog/ və ya /blog URL-inə xidmət edir
  crm-secimi/
    index.html        ← /blog/crm-secimi/
  phishing-mucadile/
    index.html        ← /blog/phishing-mucadile/
  vergi-yoxlamasi/
    index.html        ← /blog/vergi-yoxlamasi/
    ru/
      index.html      ← /blog/vergi-yoxlamasi/ru/
```

### Necə işləyir?

Apache/Nginx serverləri **qovluq index faylı** mexanizmindən istifadə edir:

1. İstifadəçi `/blog/crm-secimi/` URL-inə daxil olur
2. Server `blog/crm-secimi/` qovluğuna baxır
3. Həmin qovluqda `index.html` faylı tapır
4. Həmin faylı istifadəçiyə göstərir

Bu sayədə URL-lər təmiz və oxunaqlı olur:
- `/blog/` → blog səhifəsi
- `/blog/crm-secimi/` → CRM məqaləsi
- `/blog/vergi-yoxlamasi/` → Vergi yoxlaması məqaləsi

### Dillər blog məqalələrində

Bəzi blog məqalələrində dil blokları `data-lang-block` atributu ilə idarə olunur:

```html
<div data-lang-block="az">Azərbaycanca məzmun</div>
<div data-lang-block="en">English content</div>
<div data-lang-block="ru">Русский контент</div>
```

JavaScript bu blokları激活-də deaktiv edir və istifadəçinin seçdiyi dili göstərir.

### Mövcud blog məqalələri

| URL | Mövzu |
|-----|-------|
| `/blog/crm-secimi/` | CRM seçimi |
| `/blog/phishing-mucadile/` | Phishing hücumları |
| `/blog/emek-muqavilesi/` | Əmək müqaviləsi |
| `/blog/hs-kod-sehvi/` | HS kod səhvi |
| `/blog/vergi-yoxlamasi/` | Vergi yoxlaması (AZ + RU) |
| `/blog/server-otagi-standartlari/` | Server otağı standartları (AZ + RU) |
| `/blog/adv-qeydiyyati/` | ƏDV qeydiyyatı |
