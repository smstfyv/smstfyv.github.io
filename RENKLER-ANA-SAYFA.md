# EMSAR GROUP — Ana Sayfa (index.html) Renk Kılavuzu

## 1. Tasarım Sistemi (CSS Custom Properties)

| Değişken | Değer | Kullanım |
|----------|-------|----------|
| `--primary` | `#0A0A0A` | Body arka plan, ana arka plan rengi |
| `--secondary` | `#2563EB` | Ana marka mavisi (butonlar, badge, linkler) |
| `--accent` | `#10B981` | Ana marka yeşili (accent, status dot) |
| `--text-main` | `#F9FAFB` | Ana metin rengi (beyaz) |
| `--text-muted` | `#9CA3AF` | Sönümlü metin rengi (gri) |
| `--card-bg` | `rgba(23, 23, 23, 0.7)` | Kart arka planları (yarı saydam) |
| `--border` | `rgba(255, 255, 255, 0.1)` | Kenarlık rengi |
| `--glass-bg` | `rgba(255, 255, 255, 0.03)` | Cam efekti arka planı |

---

## 2. Bölümlere Göre Arka Plan Renkleri

| Bölüm | Arka Plan | Değer |
|-------|-----------|-------|
| **Body** | `--primary` | `#0A0A0A` |
| **Navbar (varsayılan)** | şeffaf | `transparent` |
| **Navbar (scroll)** | beyaz | `#FFFFFF` |
| **Hero Portal** | radial gradient + primary | `radial-gradient(ellipse at 20% 0%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(16,185,129,0.15), transparent 55%), #0A0A0A` |
| **Hero grid pattern** | çizgi ızgarası | `rgba(255, 255, 255, 0.04)` |
| **Stats Row** | cam arka plan | `rgba(255, 255, 255, 0.03)` |
| **Stat Kartları** | yarı saydam beyaz | `rgba(255, 255, 255, 0.04)` |
| **Group Portal (kartlar)** | arka plan resmi + overlay | `linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.9))` |
| **Group Kart hover** | mavi overlay | `rgba(37, 99, 235, 0.3)` |
| **Why Section** | gradient | `linear-gradient(to bottom, #0A0A0A, #0D0D0D)` |
| **Why Kartları** | `--card-bg` | `rgba(23, 23, 23, 0.7)` |
| **Projects Section** | siyah | `#000000` |
| **Proje Kartları** | `--card-bg` | `rgba(23, 23, 23, 0.7)` |
| **Proje Overlay** | siyah gradient | `linear-gradient(to top, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.45))` |
| **Partners Section** | siyah | `#000000` |
| **Partner Kartları** | çok hafif beyaz | `rgba(255, 255, 255, 0.03)` |
| **Testimonials Section** | gradient | `linear-gradient(to bottom, #0A0A0A, #0A0A0A)` |
| **Testimonial Kartları** | `--card-bg` | `rgba(23, 23, 23, 0.7)` |
| **Contact Section** | `--primary` | `#0A0A0A` |
| **Contact Kart** | `--card-bg` | `rgba(23, 23, 23, 0.7)` |
| **Footer** | `--primary` | `#0A0A0A` |

---

## 3. Buton Renkleri

### Primary Buton (`.btn-primary`)
| Durum | Arka Plan | Metin | Gölge |
|-------|-----------|-------|-------|
| Normal | `#2563EB` | `#FFFFFF` | — |
| Hover | `#1d4ed8` | `#FFFFFF` | `0 10px 20px rgba(37, 99, 235, 0.3)` |

### Outline Buton (`.btn-outline`)
| Durum | Arka Plan | Kenarlık | Metin |
|-------|-----------|----------|-------|
| Normal | `transparent` | `rgba(255, 255, 255, 0.1)` | `#F9FAFB` |
| Hover | `rgba(255, 255, 255, 0.1)` | — | `#F9FAFB` |

### Nav CTA Buton
| Durum | Arka Plan | Metin | Gölge |
|-------|-----------|-------|-------|
| Normal | `#2563EB` | `#FFFFFF` | — |
| Hover | `#1d4ed8` | `#FFFFFF` | `0 8px 20px rgba(37, 99, 235, 0.35)` |

### WhatsApp Buton (`.wa-float`)
| Durum | Arka Plan | Metin | Gölge |
|-------|-----------|-------|-------|
| Normal | `#25D366` | `#FFFFFF` | `0 10px 30px rgba(37, 211, 102, 0.4)` |
| Hover | `#25D366` | `#FFFFFF` | `0 14px 40px rgba(37, 211, 102, 0.55)` |

---

## 4. Kart Renkleri

### Group Kartlar (Portal)
| Durum | Arka Plan | Kenarlık | İkon Arka Planı | İkon Kenarlığı |
|-------|-----------|----------|-----------------|----------------|
| Normal | arka plan resmi + `rgba(10,10,10,0.4)` → `rgba(10,10,10,0.9)` | — | `rgba(255, 255, 255, 0.1)` | `rgba(255, 255, 255, 0.2)` |
| Hover | resim + `rgba(37, 99, 235, 0.3)` | — | `#2563EB` | `#2563EB` |

### Why Kartlar
| Durum | Arka Plan | Kenarlık | Gölge |
|-------|-----------|----------|-------|
| Normal | `rgba(23, 23, 23, 0.7)` | `rgba(255, 255, 255, 0.1)` | — |
| Hover | `rgba(23, 23, 23, 0.7)` | `rgba(37, 99, 235, 0.5)` | `0 20px 40px rgba(37, 99, 235, 0.12)` |

### Proje Kartları
| Durum | Arka Plan | Kenarlık |
|-------|-----------|----------|
| Normal | `rgba(23, 23, 23, 0.7)` | `rgba(255, 255, 255, 0.1)` |

### Testimonial Kartlar
| Durum | Arka Plan | Kenarlık |
|-------|-----------|----------|
| Normal | `rgba(23, 23, 23, 0.7)` | `rgba(255, 255, 255, 0.1)` |
| Hover | — | `rgba(37, 99, 235, 0.4)` |

### Partner Logo Kartları
| Durum | Arka Plan | Kenarlık |
|-------|-----------|----------|
| Normal | `rgba(255, 255, 255, 0.03)` | `rgba(255, 255, 255, 0.1)` |
| Hover | — | `rgba(37, 99, 235, 0.4)` |

### Contact Kart
| Durum | Arka Plan | Kenarlık | Kenar Yuvarlaklığı |
|-------|-----------|----------|-------------------|
| Normal | `rgba(23, 23, 23, 0.7)` | `rgba(255, 255, 255, 0.1)` | `32px` |

---

## 5. İkon Renkleri (Why Bölümü)

| İkon | Arka Plan | Renk |
|------|-----------|------|
| Mavi (`.why-icon-blue`) | `rgba(37, 99, 235, 0.12)` | `#2563EB` |
| Yeşil (`.why-icon-green`) | `rgba(16, 185, 129, 0.12)` | `#10B981` |
| Turuncu (`.why-icon-orange`) | `rgba(245, 158, 11, 0.12)` | `#F59E0B` |

---

## 6. Avatar Renkleri (Testimonial)

| Avatar | Arka Plan | Metin | Kenarlık |
|--------|-----------|-------|----------|
| Mavi (`.t-avatar-blue`) | `rgba(37, 99, 235, 0.2)` | `#93c5fd` | `1px solid rgba(37, 99, 235, 0.35)` |
| Yeşil (`.t-avatar-green`) | `rgba(16, 185, 129, 0.2)` | `#6ee7b7` | `1px solid rgba(16, 185, 129, 0.35)` |
| Turuncu (`.t-avatar-orange`) | `rgba(245, 158, 11, 0.2)` | `#fcd34d` | `1px solid rgba(245, 158, 11, 0.35)` |

---

## 7. Text Gradient

| Kullanım | Gradient |
|----------|----------|
| Başlık (`.text-gradient`) | `linear-gradient(90deg, #2563EB, #10B981)` |
| Glitch efekti (mavi) | `text-shadow: 2px 0 #2563EB` |
| Glitch efekti (yeşil) | `text-shadow: -2px 0 #10B981` |

---

## 8. Badge Renkleri

| Badge | Arka Plan | Metin | Kenarlık |
|-------|-----------|-------|----------|
| Varsayılan (`.badge`) | `rgba(37, 99, 235, 0.1)` | `#2563EB` | `1px solid rgba(37, 99, 235, 0.2)` |
| Hero Badge | aynı | aynı | aynı |
| Stats Badge | aynı | aynı | aynı |

---

## 9. Proje Tag ve Badge Renkleri

| Eleman | Arka Plan | Kenarlık | Metin |
|--------|-----------|----------|-------|
| Proje Tag | `rgba(37, 99, 235, 0.2)` | `1px solid rgba(37, 99, 235, 0.4)` | `#93c5fd` |
| Tezliklə Badge | `linear-gradient(135deg, rgba(37,99,235,0.92), rgba(16,185,129,0.85))` | — | `#FFFFFF` |

---

## 10. Form Renkleri

| Eleman | Arka Plan | Kenarlık | Metin |
|--------|-----------|----------|-------|
| Input/Select/Textarea | `rgba(255, 255, 255, 0.04)` | `rgba(255, 255, 255, 0.1)` | `#FFFFFF` |
| Focus durumu | `rgba(37, 99, 235, 0.06)` | `#2563EB` | — |
| Focus gölgesi | — | — | `0 0 0 3px rgba(37, 99, 235, 0.18)` |
| Select option | `#1A1A1A` | — | `#FFFFFF` |
| Label | — | — | `#9CA3AF` |
| Form durumu (hata) | — | — | `#f87171` |

---

## 11. Stat Kart Kenarlık Renkleri

| Stat | Sol Kenarlık |
|------|-------------|
| Mavi (`.stat-accent-blue`) | `#2563EB` |
| Yeşil (`.stat-accent-green`) | `#10B981` |
| Amber (`.stat-accent-amber`) | `#F59E0B` |

---

## 12. Navbar Renkleri

| Durum | Arka Plan | Link Rengi | Logo | Mobil Toggle |
|-------|-----------|------------|------|-------------|
| Normal | `transparent` | `#FFFFFF` | `filter: brightness(0) invert(1)` (beyaz) | `#FFFFFF` |
| Scroll | `#FFFFFF` | `#1A2567` | orijinal (mavi, filtre yok) | `#1A2567` |

### Dropdown Menu
| Durum | Arka Plan | Kenarlık | Metin |
|-------|-----------|----------|-------|
| Desktop | `#111827` | `rgba(255, 255, 255, 0.1)` | `#9CA3AF` |
| Hover | — | — | `#F9FAFB` |

---

## 13. Footer Renkleri

| Eleman | Renk |
|--------|------|
| Arka plan | `#0A0A0A` |
| Kenarlık üst | `rgba(255, 255, 255, 0.1)` |
| Linkler | `#9CA3AF` |
| Hover | `#2563EB` |
| Social ikon arka plan | `rgba(255, 255, 255, 0.03)` |
| Social ikon kenarlık | `rgba(255, 255, 255, 0.1)` |
| Social ikon hover | `#2563EB` arka plan + `#FFFFFF` metin |

---

## 14. Yıldız ve Emoji Renkleri

| Eleman | Renk |
|--------|------|
| Yıldızlar (`.testimonial-stars`) | `#facc15` |
| Güvenlik ikonu (açık durum) | `#ff4d4d` |

---

## 15. Lang Switcher Renkleri

| Durum | Arka Plan | Kenarlık | Metin |
|-------|-----------|----------|-------|
| Normal | `rgba(255, 255, 255, 0.04)` | `rgba(255, 255, 255, 0.1)` | `#FFFFFF` |
| Hover | `rgba(255, 255, 255, 0.1)` | — | `#FFFFFF` |
| Aktif | `#2563EB` | — | `#FFFFFF` |
| Scroll Normal | `rgba(0, 0, 0, 0.04)` | `rgba(0, 0, 0, 0.1)` | `#1A2567` |
| Scroll Aktif | `#2563EB` | — | `#FFFFFF` |

---

## 16. Kısa Özet — Ana Marka Renkleri

| Renk | Hex | Kullanım |
|------|-----|----------|
| Siyah | `#0A0A0A` | Body arka plan |
| Mavi | `#2563EB` | Butonlar, badge, linkler, accent |
| Yeşil | `#10B981` | Accent, status dot, gradient |
| Beyaz | `#F9FAFB` / `#FFFFFF` | Ana metin, nav linkler |
| Gri | `#9CA3AF` | Sönümlü metin, label'lar |
| Koyu Mavi | `#1A2567` | Scroll navbar link rengi |
| Amber | `#F59E0B` | Turuncu accent, stat kenarlığı |
| WhatsApp Yeşili | `#25D366` | WhatsApp floating buton |
| Light Mavi | `#93c5fd` | Proje tag metni, avatar |
| Light Yeşil | `#6ee7b7` | Avatar |
| Light Sarı | `#fcd34d` | Avatar |
| Sarı | `#facc15` | Yıldızlar |
| Hata Kırmızı | `#f87171` | Form hata mesajı |
