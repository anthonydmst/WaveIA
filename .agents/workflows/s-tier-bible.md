---
description: S-Tier God Mode Bible (Generic Template) - Source de vérité unique pour Architecture, Standards, Gouvernance et Performance sous Astro.
---

# ☄️ S-TIER GOD MODE BIBLE — V1.0 GENERIC TEMPLATE

**Architecture · Standards · Gouvernance · Performance · Hygiène · GEO**

> **Statut** : Template de Référence (God Universe Edition)
> **Objectif** : Performance < 1.0s LCP | SEO God Tier | GEO Ready

---

## 🧭 PARTIE 0 — GOUVERNANCE & HYGIÈNE

### 0.1 Principe Fondamental

Ce standard est contractuel pour tout projet S-Tier.

- **Zéro Duplication** : Un composant ne doit exister qu'à un seul endroit (Atomic Design).
- **Zéro Remnant** : Aucun fichier orphelin, aucune classe inutilisée, aucun package inutile.
- **Mandat God Tier** : Toute nouvelle page DOIT impérativement hériter des attributs God Tier (Kinetic Engine, Glassmorphism, Performance Extreme) dès sa création.

---

## 🧠 PARTIE 1 — MANIFESTE TECHNIQUE (ASTRO)

### 1.1 Core Engine: Performance Overclock
- **Prefetch Total** : Configurer `prefetch: { prefetchAll: true, defaultStrategy: 'viewport' }`.
- **Client Prerender** : Activer `experimental: { clientPrerender: true }` (Speculation Rules API).
- **Navigation (Zero Flickering)** : Utiliser `<ClientRouter />` obligatoirement.

### 1.2 Images (Galaxy Ultimate Optimization)
- **Composant `<Image />`** : Utilisation exclusive de `astro:assets`.
- **LCP Signal** : L'image Hero DOIT inclure `fetchpriority="high"` et `loading="eager"`.
- **Responsive Widths** : Utiliser `widths={[640, 1280, 1920]}` et `sizes` précis. Jamais de surpoids inutile.
- **CLS Prevention** : Toujours fournir `width` et `height` ou aspect-ratio CSS.

### 1.3 TypeScript God Mode
- **Zero "Any" Policy**.
- **Zod schemas** pour toutes les Content Collections.

---

## 🧩 PARTIE 2 — ARCHITECTURE & SEO

### 2.1 Structure des Composants
- `src/components/atoms/` : Éléments de base (Boutons, Badges).
- `src/components/molecules/` : Combinaisons (Cartes, Champs).
- `src/components/organisms/` : Blocs autonomes (Hero, TrustSection, FAQ).
- `src/components/templates/` : Gabarits de pages (PillarPage).

### 2.2 SEO & GEO God Tier (S++ Galaxy)
- **JSON-LD Centralisé** : Utiliser un fichier `config.ts` unique pour les données d'entité.
- **Entity Binding** : Schema `Organization` complet avec `founder` (Person), `knowsAbout` (expertise), et `areaServed` (maillage).
- **BreadcrumbSchema** : Obligatoire sur toute page navigable.
- **Geo Meta Tags** : `geo.region`, `geo.placename`, `geo.position` injectés dynamiquement.
- **`id="main-content"`** : Présent sur la balise `<main>` pour l'accessibilité.

---

## ⚡ PARTIE 3 — PERFORMANCE CONTRACTUELLE

| Metric         | Seuil God Mode |
| :------------- | :------------- |
| **LCP**        | ≤ 1.2s         |
| **CLS**        | 0              |
| **JS Initial** | ≤ 28kB gzippé  |

### 3.1 Vitals Monitor
- **GSAP Batching** : Utiliser `ScrollTrigger.batch()` pour les animations de masse.
- **Idle Init** : Initialiser les scripts non-critiques via `requestIdleCallback`.

---

## 🌌 PARTIE 4 — KINETIC ENGINE & VISUALS

### 4.1 Atmospheric Depth
- **Film Grain** : Overlay fractal léger (`opacity: 0.035`) pour briser l'aspect trop "propre".
- **Glassmorphism** : Utilisation de `.hairline-glass` avec `oklch` et `backdrop-blur`.
- **Grid Visibility** : La grille technique (cadrillage) doit rester le fond de teint visible du projet.

### 4.2 Standard de Spacing (Rhythm)
- **Section Padding** : Standard `py-16 md:py-20` pour un rythme régulier.
- **Container** : `max-w-7xl mx-auto px-6 lg:px-12`.
- **Separators** : Utiliser `.separator-glow` entre les organismes majeurs.

---

## 🧹 PARTIE 5 — ARCHITECTURE DONNÉES

### 5.1 Content Collections
- Utilisation stricte de `src/content/config.ts`.
- Pas de fichiers de données orphelins (`*-data.ts`).
- **Validation Zod** : Chaque champ obligatoire (slug, date, meta) doit être typé et validé.

---

## 🤖 PARTIE 6 — AI AUTHORITY (GEO)

### 6.1 robots.txt & llms.txt
- **robots.txt** : Autorisation explicite des bots de citation IA (`OAI-SearchBot`, `PerplexityBot`, etc.).
- **llms.txt** : Route dynamique reflétant l'autorité, les métriques et les données fraîches du site.

### 6.2 Entity Authority (CES)
- **Format Claim-Evidence-Source** pour tout contenu informatif.
- `ExpertiseSchema` lié aux entités Wikidata locales ou sectorielles.

---

## 🛠️ PARTIE 7 — CHECKLIST DE DISCIPLINE

1. [ ] **Clean Build** : `npx tsc --noEmit` passe sans erreur.
2. [ ] **SEO Check** : JSON-LD valide sans erreur sur l'outil de test Google.
3. [ ] **Performance Check** : Lighthouse > 95 sur tous les metrics.
4. [ ] **Hygiène** : `npm run audit` = 0 vulnérabilité.

---

_Fin du Template Generic Bible S-Tier_
