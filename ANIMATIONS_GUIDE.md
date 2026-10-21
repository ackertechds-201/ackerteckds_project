# Guide des Animations SaaS Professionnelles

Ce guide explique comment utiliser le système d'animations fluides et professionnelles implémenté sur votre site.

## 🎨 Composants d'Animation

### 1. PageTransition
Composant principal qui gère les transitions entre les pages.

```tsx
import PageTransition from "@/components/PageTransition";

// Utilisation automatique dans le layout
<PageTransition>
  {children}
</PageTransition>
```

### 2. ScrollAnimation (Recommandé)
Pour animer des sections avec contrôle total sur le comportement au scroll.

```tsx
import ScrollAnimation from "@/components/ScrollAnimation";

<ScrollAnimation 
  direction="up" 
  delay={0.3}
  duration={0.6}
  triggerOnce={false}
  threshold={0.1}
  resetOnLeave={true}
>
  <VotreContenu />
</ScrollAnimation>
```

**Props disponibles :**
- `direction`: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
- `delay`: nombre (secondes)
- `duration`: nombre (secondes)
- `triggerOnce`: boolean (false = animation à chaque scroll, true = une seule fois)
- `threshold`: nombre (0.1 = 10% de l'élément visible pour déclencher)
- `resetOnLeave`: boolean (réinitialise l'animation quand on quitte la vue)

### 2b. AnimatedSection (Version simple)
Version simplifiée pour les cas d'usage basiques.

```tsx
import AnimatedSection from "@/components/AnimatedSection";

<AnimatedSection 
  direction="up" 
  delay={0.3}
  duration={0.6}
  once={false}  // maintenant false par défaut
>
  <VotreContenu />
</AnimatedSection>
```

### 3. AnimatedText
Pour animer du texte avec effets de mots par mots.

```tsx
import AnimatedText from "@/components/AnimatedText";

<AnimatedText 
  variant="slide"
  delay={0.2}
  staggerDelay={0.05}
  tag="h1"
>
  Votre texte animé
</AnimatedText>
```

**Props disponibles :**
- `variant`: 'fade' | 'slide' | 'bounce' | 'typewriter'
- `delay`: nombre (secondes)
- `staggerDelay`: nombre (délai entre les mots)
- `tag`: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

### 4. AnimatedCard
Pour animer des cartes avec effets modernes.

```tsx
import AnimatedCard from "@/components/AnimatedCard";

<AnimatedCard 
  delay={0.1}
  hover={true}
  glow={true}
  tilt={true}
  index={0}
>
  <VotreCarte />
</AnimatedCard>
```

**Props disponibles :**
- `delay`: nombre (secondes)
- `hover`: boolean (effet au survol)
- `glow`: boolean (effet de lueur)
- `tilt`: boolean (effet d'inclinaison 3D)
- `index`: nombre (pour décaler en cascade)

## 🎯 Classes CSS Animations

### Animations de base
```css
.animate-page-load      /* Chargement de page */
.animate-reveal         /* Révélation progressive */
.animate-wave           /* Vague continue */
.animate-smooth-fade    /* Fondu amélioré */
```

### Effets visuels
```css
.shimmer-effect         /* Brillance qui glisse */
.gradient-animated      /* Gradient animé */
.saas-pulse            /* Pulse moderne */
.text-glow-animated    /* Texte lumineux */
```

### Éléments décoratifs
```css
.floating-particles    /* Particules flottantes */
```

## 🚀 Exemples d'Utilisation

### Page avec sections animées
```tsx
export default function MaPage() {
  return (
    <>
      <ScrollAnimation direction="fade" delay={0.1} triggerOnce={true}>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.3} triggerOnce={false}>
        <Services />
      </ScrollAnimation>

      <ScrollAnimation direction="scale" delay={0.5} triggerOnce={false}>
        <CTA />
      </ScrollAnimation>
    </>
  );
}
```

### Contrôle du comportement au scroll
```tsx
// Animation qui se répète à chaque scroll
<ScrollAnimation direction="up" triggerOnce={false}>
  <Contenu />
</ScrollAnimation>

// Animation qui ne se joue qu'une seule fois
<ScrollAnimation direction="up" triggerOnce={true}>
  <Contenu />
</ScrollAnimation>

// Animation avec déclenchement plus tardif
<ScrollAnimation direction="up" threshold={0.3} triggerOnce={false}>
  <Contenu />
</ScrollAnimation>
```

### Cartes animées en grille
```tsx
{services.map((service, index) => (
  <AnimatedCard 
    key={service.id}
    index={index}
    hover={true}
    glow={true}
    className="marketing-card"
  >
    <ServiceCard service={service} />
  </AnimatedCard>
))}
```

### Titres animés
```tsx
<AnimatedText 
  variant="slide" 
  tag="h1" 
  className="text-4xl font-bold"
>
  Bienvenue sur notre site
</AnimatedText>
```

## ⚡ Performance

Les animations sont optimisées avec :
- **Transformations CSS** pour la performance GPU
- **Easing cubique-bezier** pour des mouvements naturels
- **Staggering** pour des animations en cascade fluides
- **Intersection Observer** pour les animations au scroll

## 🎨 Personnalisation

### Modifier les durées
Dans `globals.css`, ajustez les variables :
```css
:root {
  --animation-duration: 0.6s;
  --animation-stagger: 0.1s;
}
```

### Couleurs d'animation
Modifiez les couleurs dans les animations :
```css
.saas-pulse {
  animation: saas-pulse 2s ease-in-out infinite;
}

@keyframes saas-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(46, 111, 184, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(46, 111, 184, 0);
  }
}
```

## 📱 Responsive

Les animations s'adaptent automatiquement :
- Réduction des durées sur mobile
- Désactivation des animations si `prefers-reduced-motion`
- Optimisation pour les écrans tactiles

## 🔧 Bonnes Pratiques

1. **Utilisez des délais progressifs** pour les animations en cascade
2. **Limitez le nombre d'animations simultanées** pour la performance
3. **Testez sur mobile** pour une expérience optimale
4. **Utilisez `once={true}`** pour les animations qui ne doivent se jouer qu'une fois

## 🎯 Effets SaaS Inclus

- ✅ Transitions de page fluides
- ✅ Animations au scroll déclenchées
- ✅ Effets de survol modernes
- ✅ Animations de texte professionnelles
- ✅ Cartes avec effets 3D
- ✅ Particules décoratives
- ✅ Gradients animés
- ✅ Effets de brillance
- ✅ Pulses pour les CTA

Votre site dispose maintenant d'un système d'animation professionnel de type SaaS ! 🎉
