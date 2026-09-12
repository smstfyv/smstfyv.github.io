# background.md — Ana Sayfa Arka Plan Renkleri, Overlay ve Izgara (Kletka) Doku̇mlaŗı̧

---

## 1. BODY (Sayfa Geneli)

```css
body {
    background-color: #0A0A0A;   /* var(--primary) */
}
```

| Özellik | Değer |
|---------|-------|
| Renk | `#0A0A0A` |
| Opaklık | `%100` (katı) |

---

## 2. HERO PORTAL BÖLÜMÜ

### 2a. Ana Arka Plan (`.hero-portal-bg`)

```css
.hero-portal-bg {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse at 20% 0%, rgba(37, 99, 235, 0.25), transparent 60%),
        radial-gradient(ellipse at 80% 100%, rgba(16, 185, 129, 0.15), transparent 55%),
        var(--primary);
    z-index: -1;
}
```

| Katman | Renk | Opaklık | Konum | Yayılm |
|--------|------|---------|-------|--------|
| Mavi radial | `rgba(37, 99, 235, 0.25)` | `%25` | sol üst (`20% 0%`) | `transparent 60%` |
| Yeşil radial | `rgba(16, 185, 129, 0.15)` | `%15` | sağ alt (`80% 100%`) | `transparent 55%` |
| Zemin | `#0A0A0A` | `%100` | tamamı | — |

### 2b. Izgara Deseni / Kletka (`.hero-portal-bg::after`)

```css
.hero-portal-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}
```

| Özellik | Değer |
|---------|-------|
| **Xat rengi** | `rgba(255, 255, 255, 0.04)` — çox açıq ağ |
| **Xat opaklığı** | `%4` |
| **Xat qalınlığı** | `1px` |
| **Xat arası** | `60px × 60px` |
| **Mask** | Mərkəzdən kənara doğru itibar — mərkəzdə `black 30%`, kənar `transparent 80%` |
| **Effekt** | Mərkəzdə daha aydın, kənara doğru yox olur |

---

## 3. GROUP CARD (Portal Kartları) Overlay

### 3a. Kart Overlay (`.group-card::after`)

```css
.group-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.9));
    transition: background 0.5s ease;
    z-index: -1;
}
```

| Nöqtə | Renk | Opaklık |
|-------|------|---------|
| Üst | `rgba(10, 10, 10, 0.4)` | `%40` |
| Alt | `rgba(10, 10, 10, 0.9)` | `%90` |

### 3b. Kart Hover Overlay

```css
.group-card:hover::after {
    background: rgba(37, 99, 235, 0.3);
}
```

| Durum | Renk | Opaklık |
|-------|------|---------|
| Hover | `rgba(37, 99, 235, 0.3)` | `%30` mavi |

### 3c. Kart İkon Arka Planı

```css
.group-card-icon {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.group-card:hover .group-card-icon {
    background: #2563EB;       /* var(--secondary) */
    border-color: #2563EB;
    box-shadow: 0 0 30px #2563EB;
}
```

| Durum | Arka Plan | Opaklık | Kenarlık |
|-------|-----------|---------|----------|
| Normal | `rgba(255, 255, 255, 0.1)` | `%10` | `rgba(255, 255, 255, 0.2)` — `%20` |
| Hover | `#2563EB` | `%100` | `#2563EB` + gölge |

---

## 4. STATS ROW (İstatistik Kutusu)

```css
.stats-row {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
}

.stat-komanda-card {
    background: rgba(255, 255, 255, 0.04);
}
```

| Eleman | Arka Plan | Opaklık | Kenarlık |
|--------|-----------|---------|----------|
| Row konteyner | `rgba(255, 255, 255, 0.03)` | `%3` | `rgba(255, 255, 255, 0.1)` — `%10` |
| Kart | `rgba(255, 255, 255, 0.04)` | `%4` | — |

---

## 5. WHY BÖLÜMÜ

```css
.why-section {
    background: linear-gradient(to bottom, var(--primary), #0d0d0d);
}

.why-card {
    background: var(--card-bg);   /* rgba(23, 23, 23, 0.7) */
    border: 1px solid var(--border);  /* rgba(255, 255, 255, 0.1) */
}

.why-card:hover {
    border-color: rgba(37, 99, 235, 0.5);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12);
}

.why-icon-blue {
    background: rgba(37, 99, 235, 0.12);
}

.why-icon-green {
    background: rgba(16, 185, 129, 0.12);
}

.why-icon-orange {
    background: rgba(245, 158, 11, 0.12);
}
```

| Eleman | Arka Plan | Opaklık |
|--------|-----------|---------|
| Section | gradient `#0A0A0A` → `#0D0D0D` | `%100` |
| Kart | `rgba(23, 23, 23, 0.7)` | `%70` |
| Kart hover kenar | `rgba(37, 99, 235, 0.5)` | `%50` |
| Kart hover gölge | `rgba(37, 99, 235, 0.12)` | `%12` |
| Mavi ikon | `rgba(37, 99, 235, 0.12)` | `%12` |
| Yeşil ikon | `rgba(16, 185, 129, 0.12)` | `%12` |
| Turuncu ikon | `rgba(245, 158, 11, 0.12)` | `%12` |

---

## 6. PROJECTS BÖLÜMÜ

```css
.projects-section {
    background: #000000;
}

.project-card {
    background: var(--card-bg);   /* rgba(23, 23, 23, 0.7) */
    border: 1px solid var(--border);  /* rgba(255, 255, 255, 0.1) */
}

.project-overlay {
    background: rgba(0, 0, 0, 0.5);
}

.project-overlay-detailed {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 30%, rgba(0, 0, 0, 0.45));
}
```

| Eleman | Arka Plan | Opaklık |
|--------|-----------|---------|
| Section | `#000000` | katı siyah |
| Kart | `rgba(23, 23, 23, 0.7)` | `%70` |
| Overlay (sadə) | `rgba(0, 0, 0, 0.5)` | `%50` |
| Overlay (detallı) alt | `rgba(0, 0, 0, 0.45)` | `%45` |
| Overlay (detallı) üst | `rgba(0, 0, 0, 0.92)` | `%92` |

---

## 7. PARTNERS BÖLÜMÜ

```css
.partners-section {
    background: #000000;
}

.partner-logo-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

| Eleman | Arka Plan | Opaklık |
|--------|-----------|---------|
| Section | `#000000` | katı |
| Logo kartı | `rgba(255, 255, 255, 0.03)` | `%3` |

---

## 8. TESTIMONIALS BÖLÜMÜ

```css
.testimonials-section {
    background: linear-gradient(to bottom, #0a0a0a, var(--primary));
}

.testimonial-card {
    background: var(--card-bg);   /* rgba(23, 23, 23, 0.7) */
    border: 1px solid var(--border);
}

.testimonial-card:hover {
    border-color: rgba(37, 99, 235, 0.4);
}

.t-avatar-blue {
    background: rgba(37, 99, 235, 0.2);
}

.t-avatar-green {
    background: rgba(16, 185, 129, 0.2);
}

.t-avatar-orange {
    background: rgba(245, 158, 11, 0.2);
}
```

| Eleman | Arka Plan | Opaklık |
|--------|-----------|---------|
| Section | gradient `#0A0A0A` → `#0A0A0A` | katı |
| Kart | `rgba(23, 23, 23, 0.7)` | `%70` |
| Mavi avatar | `rgba(37, 99, 235, 0.2)` | `%20` |
| Yeşil avatar | `rgba(16, 185, 129, 0.2)` | `%20` |
| Turuncu avatar | `rgba(245, 158, 11, 0.2)` | `%20` |

---

## 9. CONTACT BÖLÜMÜ

```css
.contact-section {
    background: var(--primary);   /* #0A0A0A */
}

.contact-card {
    background: var(--card-bg);   /* rgba(23, 23, 23, 0.7) */
    border: 1px solid var(--border);
    backdrop-filter: blur(20px);
}

.detail-icon {
    background: rgba(37, 99, 235, 0.1);
}

.form-row input,
.form-row select,
.form-row textarea {
    background: rgba(255, 255, 255, 0.04);
}

.form-row input:focus {
    background: rgba(37, 99, 235, 0.06);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
}
```

| Eleman | Arka Plan | Opaklık |
|--------|-----------|---------|
| Section | `#0A0A0A` | katı |
| Contact kart | `rgba(23, 23, 23, 0.7)` | `%70` |
| İkon arka planı | `rgba(37, 99, 235, 0.1)` | `%10` |
| Input normal | `rgba(255, 255, 255, 0.04)` | `%4` |
| Input focus | `rgba(37, 99, 235, 0.06)` | `%6` |
| Input focus gölge | `rgba(37, 99, 235, 0.18)` | `%18` |

---

## 10. FOOTER

```css
.footer {
    background: var(--primary);   /* #0A0A0A */
    border-top: 1px solid var(--border);  /* rgba(255, 255, 255, 0.1) */
}

.social-icon {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
    background: #2563EB;
    border-color: #2563EB;
}
```

| Eleman | Arka Plan | Opaklık |
|--------|-----------|---------|
| Footer | `#0A0A0A` | katı |
| Social ikon | `rgba(255, 255, 255, 0.03)` | `%3` |
| Social hover | `#2563EB` | katı |

---

## 11. WHATSAPP FLOATING

```css
.wa-float {
    background: #25D366;
    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
}

@keyframes waPulse {
    0%, 100% { box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.5); }
    50% { box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4), 0 0 0 14px rgba(37, 211, 102, 0); }
}
```

| Durum | Arka Plan | Gölge |
|-------|-----------|-------|
| Normal | `#25D366` | `rgba(37, 211, 102, 0.4)` |
| Pulse başı | — | `rgba(37, 211, 102, 0.5)` — `%50` |
| Pulse sonu | — | `rgba(37, 211, 102, 0)` — `%0` (şəffaf) |

---

## 12. BLOG CARD THUMB (Kletka / Izgara Doku) — Bonus

```css
.blog-card-thumb::before {
    background:
        radial-gradient(ellipse at 22% 22%, rgba(255,255,255,0.22) 0%, transparent 52%),
        linear-gradient(160deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 100%);
}

.blog-card-thumb::after {
    background-image:
        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 28px 28px;
}
```

| Katman | Özellik | Değer |
|--------|---------|-------|
| Işıq radial | Renk | `rgba(255,255,255,0.22)` — `%22` |
| | Yayılma | `transparent 52%` |
| Gradient alt | Renk | `rgba(0,0,0,0.08)` → `rgba(0,0,0,0.5)` |
| **Kletka xatları** | Renk | `rgba(255,255,255,0.06)` — `%6` |
| | Xat qalınlığı | `1px` |
| | Xat arası | `28px × 28px` |

---

## 13. NAVBAR

```css
#navbar {
    background: transparent;
}

#navbar.scrolled {
    background: #FFFFFF;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.lang-switcher {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.lang-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

.lang-btn.active {
    background: #2563EB;
}

.nav-dropdown-menu::before {
    background: #111827;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 8px 30px rgba(0,0,0,0.45);
}
```

| Eleman | Durum | Arka Plan | Opaklık |
|--------|-------|-----------|---------|
| Navbar | Normal | `transparent` | şəffaf |
| Navbar | Scroll | `#FFFFFF` | katı |
| Lang switcher | Normal | `rgba(255, 255, 255, 0.04)` | `%4` |
| Lang btn | Hover | `rgba(255, 255, 255, 0.1)` | `%10` |
| Lang btn | Aktif | `#2563EB` | katı |
| Dropdown | — | `#111827` | katı |
| Dropdown gölge | — | `rgba(0,0,0,0.45)` | `%45` |

---

## 14. TÜM OPASİTY RENKLERİNİ̇N TEK TABLODA ÖZETİ

| Opasite | Beyaz (`rgba(255,255,255,...)`) | Siyah (`rgba(0,0,0,...)`) | Mavi (`rgba(37,99,235,...)`) | Yeşil (`rgba(16,185,129,...)`) | Turuncu (`rgba(245,158,11,...)`) |
|---------|-------------------------------|--------------------------|------------------------------|-------------------------------|--------------------------------|
| `%3` | stats row, kart, social ikon | — | — | — | — |
| `%4` | kart arka planı, input, lang | — | — | — | — |
| `%5` | — | — | — | — | — |
| `%6` | kletka xatları, input focus | — | input focus bg | — | — |
| `%8` | — | proje overlay alt | — | — | — |
| `%10` | ikon, border, lang hover | — | badge bg, ikon bg | — | — |
| `%12` | — | — | why ikon, hover gölge | why ikon | why ikon |
| `%14` | — | — | — | — | — |
| `%15` | — | — | — | hero yeşil radial | — |
| `%18` | — | — | input focus gölge | status dot pulse | — |
| `%20` | — | — | avatar bg | avatar bg | avatar bg |
| `%22` | — | — | — | — | — |
| `%25` | — | — | hero mavi radial | — | — |
| `%30` | — | — | kart hover overlay | — | — |
| `%32` | stat sub metin | — | — | — | — |
| `%35` | — | — | — | — | — |
| `%40` | — | group card overlay üst | — | — | — |
| `%45` | — | proje overlay alt | — | — | — |
| `%50` | stat label, proje overlay | — | why hover border | — | — |
| `%55` | — | — | — | — | — |
| `%70` | — | — | kart bg (`--card-bg`) | — | — |
| `%85` | — | group card overlay alt | — | — | — |
| `%90` | — | proje overlay üst | — | — | — |
| `%92` | — | — | soon badge start | — | — |
| `%100` | `#FFFFFF`, `#2563EB`, `#25D366` | `#000000`, `#0A0A0A`, `#0D0D0D` | `#2563EB` (hover) | `#10B981` | `#F59E0B` |

---

## 15. KLETKA (IZGARA) XƏTLƏRININ MÜQAYISƏSI

| Yer | Xat Rengi | Opaklık | Xat Arası | Mask |
|-----|-----------|---------|-----------|------|
| Hero Portal | `rgba(255,255,255,0.04)` | `%4` | `60px × 60px` | var — mərkəzdən kənara itibar |
| Blog Card Thumb | `rgba(255,255,255,0.06)` | `%6` | `28px × 28px` | yox — tam görünür |
