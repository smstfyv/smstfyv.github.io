# 2. Bölüm — Stats Row (Kartlar / İstatistikler)

## HTML

```html
<!-- Stats counter -->
<div class="stats-row reveal-delay-1">
    <div class="stats-komanda-header">
        <span class="badge hero-badge stats-komanda-badge" data-i18n="stats.badge">KOMANDAMIZIN GÖSTƏRİCİLƏRİ</span>
    </div>
    <div class="stats-komanda-grid">
        <div class="stat-komanda-card stat-accent-blue">
            <div class="stat-komanda-val">
                <span class="stat-number" data-count="10">10</span><span class="stat-komanda-sfx">+</span>
            </div>
            <div class="stat-komanda-lbl" data-i18n="stats.years">il sahə təcrübəsi</div>
            <div class="stat-komanda-sub" data-i18n="stats.yearsSub">komanda heyətimizdə</div>
        </div>
        <div class="stat-komanda-card stat-accent-green">
            <div class="stat-komanda-val">
                <span class="stat-number" data-count="50">50</span><span class="stat-komanda-sfx">+</span>
            </div>
            <div class="stat-komanda-lbl" data-i18n="stats.projects">tamamlanmış layihə</div>
            <div class="stat-komanda-sub" data-i18n="stats.projectsSub">müxtəlif sahələrdə</div>
        </div>
        <div class="stat-komanda-card stat-accent-amber">
            <div class="stat-komanda-val-text">24/7</div>
            <div class="stat-komanda-lbl" data-i18n="stats.support">sürətli texniki dəstək</div>
            <div class="stat-komanda-sub" data-i18n="stats.supportSub">hər iş günü əlçatan</div>
        </div>
    </div>
</div>
```

---

## CSS

### 1. Reveal Animasyon (Scroll-triggered)

```css
.reveal-delay-1 {
    transition-delay: 0.2s;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-delay-1.active {
    opacity: 1;
    transform: translateY(0);
}
```

### 2. Badge (üst başlık etiketi)

```css
.badge {
    display: inline-block;
    padding: 6px 12px;
    background: rgba(37, 99, 235, 0.1);
    color: #2563EB;                          /* var(--secondary) */
    border-radius: 50px;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    border: 1px solid rgba(37, 99, 235, 0.2);
}

.hero-badge {
    font-size: 0.85rem !important;
    margin-bottom: 32px;
}
```

### 3. Stats Row (dış kabuk)

```css
.stats-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    max-width: 1100px;
    margin: 80px auto 0;
    padding: 28px 24px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);   /* var(--border) */
    border-radius: 24px;
    backdrop-filter: blur(20px);
}
```

### 4. Badge Başlık Konteyneri

```css
.stats-komanda-header {
    text-align: center;
}

.stats-komanda-badge {
    font-size: 0.72rem !important;
    font-weight: 700 !important;
    letter-spacing: 1.8px;
    margin-bottom: 0 !important;
}
```

### 5. Kart Grid (3 sütunlu ızgara)

```css
.stats-komanda-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    width: 100%;
}
```

### 6. Tekil Kart

```css
.stat-komanda-card {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 14px;
    padding: 24px 22px;
    border-left: 3px solid transparent;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.stat-komanda-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
```

### 7. Sol Kenarlık Renkleri (Accent)

```css
.stat-accent-blue  { border-left-color: #2563EB; }   /* var(--secondary) */
.stat-accent-green { border-left-color: #10B981; }   /* var(--accent) */
.stat-accent-amber { border-left-color: #F59E0B; }
```

### 8. Değer Satırı (Sayı + Ek)

```css
.stat-komanda-val {
    display: flex;
    align-items: baseline;
    gap: 1px;
    margin-bottom: 10px;
    line-height: 1;
}
```

### 9. Sayı (10, 50)

```css
.stat-number {
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 800;
    color: #fff;
    line-height: 1;
    font-variant-numeric: tabular-nums;
}
```

### 10. Ek Sembolü (+)

```css
.stat-komanda-sfx {
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 800;
    color: #fff;
    line-height: 1;
}
```

### 11. Metin Tabanlı Değer (24/7)

```css
.stat-komanda-val-text {
    font-size: clamp(2.2rem, 4vw, 3rem);
    font-weight: 800;
    color: #fff;
    line-height: 1;
    margin-bottom: 10px;
}
```

### 12. Label (Ana yazı)

```css
.stat-komanda-lbl {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.4;
}
```

### 13. Alt yazı (sub)

```css
.stat-komanda-sub {
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.32);
    line-height: 1.4;
    margin-top: 2px;
}
```

---

## Mobil Responsive

### 968px ve altı (Tablet)

```css
@media (max-width: 968px) {
    .stats-row {
        gap: 18px;
        padding: 22px 16px;
        margin-top: 50px;
    }

    .stats-komanda-grid {
        gap: 10px;
    }

    .stat-komanda-card {
        padding: 20px 16px;
    }
}
```

### 480px ve altı (Küçük Telefon)

```css
@media (max-width: 480px) {
    .stats-komanda-grid {
        grid-template-columns: 1fr;        /* 3 sütun → 1 sütun */
    }

    .stat-number,
    .stat-komanda-val-text {
        font-size: 2rem;
    }

    .stat-komanda-sfx {
        font-size: 1.4rem;
    }
}
```

---

## Renk Özeti

| Eleman | Renk | Değer |
|--------|------|-------|
| Row arka plan | çok hafif beyaz | `rgba(255, 255, 255, 0.03)` |
| Row kenarlık | hafif beyaz | `rgba(255, 255, 255, 0.1)` |
| Kart arka plan | çok hafif beyaz | `rgba(255, 255, 255, 0.04)` |
| Kart hover gölge | siyah | `rgba(0, 0, 0, 0.35)` |
| Mavi sol kenarlık | cobalt mavi | `#2563EB` |
| Yeşil sol kenarlık | zümrüt yeşili | `#10B981` |
| Amber sol kenarlık | amber | `#F59E0B` |
| Sayı rengi | beyaz | `#FFFFFF` |
| Label rengi | yarım beyaz | `rgba(255, 255, 255, 0.5)` |
| Sub rengi | çeyrek beyaz | `rgba(255, 255, 255, 0.32)` |
| Badge arka plan | açık mavi | `rgba(37, 99, 235, 0.1)` |
| Badge metin | mavi | `#2563EB` |
| Badge kenarlık | açık mavi | `rgba(37, 99, 235, 0.2)` |

---

## Boyut Özeti (Desktop vs Mobil)

| Özellik | Desktop (>968px) | Tablet (≤968px) | Telefon (≤480px) |
|---------|-----------------|-----------------|-----------------|
| Grid sütun | `repeat(3, 1fr)` | `repeat(3, 1fr)` | `1fr` (tek sütun) |
| Grid gap | `14px` | `10px` | `10px` |
| Kart padding | `24px 22px` | `20px 16px` | `20px 16px` |
| Row padding | `28px 24px` | `22px 16px` | `22px 16px` |
| Row margin-top | `80px` | `50px` | `50px` |
| Row gap | `22px` | `18px` | `18px` |
| Sayı font | `clamp(2.2rem, 4vw, 3rem)` | `clamp(2.2rem, 4vw, 3rem)` | `2rem` |
| Ek font | `clamp(1.4rem, 2.5vw, 2rem)` | `clamp(1.4rem, 2.5vw, 2rem)` | `1.4rem` |
