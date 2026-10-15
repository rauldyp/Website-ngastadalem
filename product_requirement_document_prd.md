# Product Requirement Document (PRD)

## Ngastadalam Architecture Studio – Brand Introduction Landing Page

## 1. Project Overview & Scope

### 1.1 Overview
Dokumen ini menetapkan spesifikasi fungsional dan teknis untuk landing page perkenalan studio resmi **Ngastadalam**, sebuah studio arsitektur dan rancang bangun kontemporer. Landing page ini berorientasi pada profil merek (*brand introduction*), kurasi karya, filosofi kontekstual, dan kredibilitas studio dengan pendekatan editorial minimalis kelas atas.

### 1.2 Core Objectives
* **Brand Introduction & Narrative:** Memperkenalkan identitas, nilai arsitektur, dan filosofi rancangan Ngastadalam kepada publik dan calon klien.
* **Curated Portfolio Showcase:** Menampilkan seleksi proyek unggulan secara imersif dan berkelas.
* **High-End Architectural Aesthetic:** Mengadaptasi gaya editorial minimalis dengan proporsi visual, *negative space*, dan tipografi yang kuat.
* **Direct Client Inquiries:** Membuka saluran komunikasi langsung bagi klien potensial melalui email terintegrasi dan direct link (WhatsApp/Form).

---

## 2. Target Audience & Personas

1. **Private Homeowners & Villa Owners:** Klien perorangan yang mencari arsitek berkarakter kuat untuk merancang hunian personal, villa peristirahatan, atau renovasi bernilai estetika tinggi.
2. **Boutique Commercial Developers:** Pengusaha kuliner (kafe/restoran), hotel butik, atau ruang komersial yang mengutamakan identitas spasial dan atmosfer desain.
3. **Design Community & Media:** Kurator penghargaan arsitektur, jurnalis arsitektur, dan kolaborator industri.

---

## 3. Struktur Halaman & Narasi Konten

Landing page terdiri dari 8 seksi berurutan yang membentuk alur cerita studio dari filosofi hingga kontak langsung:

### Section 1: Hero Section (The Impression)
* **Title:** *"Designed to Belong."*
* **Description:** Pernyataan singkat relasi spasial bangunan terhadap bentang alam dan konteks lokalnya.
* **Header / Nav:** Logo teks minimalis `NGASTADALAM` di sisi kiri, tautan menu ringkas di sisi kanan.
* **Background:** Citra arsitektural beresolusi tinggi dengan bingkai hangat dan sirkulasi cahaya alami.
* **Scroll Indicator:** Ikon kapsul/panah halus bertuliskan *Scroll Down*.

### Section 2: Statement & Milestones (Identity & Scale)
* **Sub-label:** `// ABOUT NGASTADALAM`
* **Statement Heading:** *"We design architecture shaped by landscape, material, and light as spaces that belong to it."*
* **Key Numbers (3 Kolom):**
  * `10+` Years of Experience
  * `120+` Projects Completed
  * `12` Industry Awards
* **Visual Anchor:** Foto aksen detail material batu/kayu fasad pada sudut rendah (*low angle*).

### Section 3: Scope of Services (Interactive Matrix)
* **Sub-label:** `// OUR SERVICES`
* **Service List (Split Layout):**
  1. Residential
  2. Commercial
  3. Planning Applications
  4. Design Development
  5. Construction Documentation
  6. Contract Admin
* **Interaction:** Kursor pengguna yang melayang (*hover*) pada nama layanan secara langsung memperbarui foto sampel dan deskripsi 1–2 kalimat pada kartu pratinjau di sisi kanan.

### Section 4: Featured Works (Dark Contrast Canvas)
* **Background:** Deep Charcoal / Obsidian Black (`#0C0D0E`) untuk memberikan jeda dramatis.
* **Sub-label:** `// FEATURED WORKS`
* **Headline:** *"Projects We're Proud Of"*
* **Project Display:** Kartu gambar proyek utama dengan detail nama proyek, tahun, lokasi, dan tautan pratinjau studi kasus.

### Section 5: Client Stories & Testimonials (Validation)
* **Sub-label:** `// TESTIMONIAL`
* **Headline:** *"Story From Our Clients"*
* **Layout:** Dua kolom (kiri: foto hasil karya yang dihuni; kanan: kutipan pengalaman klien, nama klien, tipe proyek, serta kendali paginasi slider).

### Section 6: Landscape Image Break
* Banner horizontal penuh (*full-bleed*) menampilkan karya lanskap atau detail skylight untuk mengatur ritme visual sebelum penutup.

### Section 7: Call to Action (The Invitation)
* **Background:** Foto monolitik dengan overlay gradien lembut.
* **Headline:** *"Let's Create Something That Belongs."*
* **Action:** Tombol interaktif *Start a Consultation* / *Inquire via WhatsApp*.

### Section 8: Minimalist Studio Footer
* **Direct Mail:** Teks email berukuran besar `hello@ngastadalam.studio ↗`
* **Office Location:** Studio address (e.g., Jakarta / Denpasar / Yogyakarta).
* **Navigation Links:** About, Practice, Works, Recognition, Contact, Legal/Privacy.

---

## 4. Functional Specifications

| ID | Fitur / Komponen | Kebutuhan Fungsional |
| :--- | :--- | :--- |
| **FR-01** | **Interactive Service Hover** | Transisi instan gambar pratinjau dan teks saat kursor berpindah antar-layanan tanpa reload halaman. |
| **FR-02** | **Smooth Scroll Navigation** | Klik menu header menggulir halus (*smooth scroll*) ke seksi yang dituju. |
| **FR-03** | **Interactive Number Counter** | Angka pencapaian (10+, 120+, 12) menghitung naik saat pertama kali masuk ke area layar (*IntersectionObserver*). |
| **FR-04** | **Testimonial Carousel** | Slider ulasan klien dengan navigasi titik dan tombol geser, mendukung touch swipe pada perangkat mobile. |
| **FR-05** | **Direct Communication Modal / Link** | Integrasi cepat tombol WhatsApp resmi dan tautan `mailto:` dengan subjek terformat. |
| **FR-06** | **Responsive Image Rendering** | Optimasi aset gambar dengan *next-gen format* (AVIF/WebP) dan *lazy loading* untuk menjaga kecepatan muat. |

---

## 5. Non-Functional Specifications

1. **Performa Kecepatan:** Skor Google Lighthouse Desktop $\ge 90$; LCP (Largest Contentful Paint) $< 2.2$ detik.
2. **Kualitas Tampilan:** Responsif penuh pada resolusi 375px (Mobile), 768px (Tablet), 1024px (Laptop), dan 1440px+ (Desktop Monitor).
3. **Standar Aksesibilitas:** Kontras teks memenuhi rasio minimal WCAG AA (4.5:1 untuk teks normal).