# Análise de Problemas com Imagens - Desktop

## Imagens Verificadas
- ✅ `/logo-saude-real.png` - 779KB - OK
- ✅ `/hero-microgreens.jpg` - 101KB - OK
- ✅ `/qr-scanning.jpg` - 98KB - OK
- ✅ `/growing-microgreens.jpg` - 155KB - OK

## Problemas Identificados

### 1. **Tamanho do Logo no Header (Desktop)**
**Linha 14-22 em `app/page.tsx`:**
```tsx
<div className="container flex h-40 md:h-48 items-center justify-center px-4 md:px-6 max-w-7xl mx-auto">
  <Image 
    src="/logo-saude-real.png"
    alt="SR Saúde Real Logo"
    width={400}
    height={400}
    className="h-32 md:h-40 w-auto object-contain"
  />
</div>
```

**Problema:** O logo tem dimensões fixas de 400x400px mas está sendo renderizado com `h-32 md:h-40` (128px mobile, 160px desktop). O logo pode estar muito pequeno no desktop.

### 2. **Possível Problema com Next.js Image Optimization**
As imagens estão usando o componente `next/image` que requer configuração adequada. Se não estiver configurado corretamente, as imagens podem não carregar.

### 3. **Classes Responsivas Inconsistentes**
Algumas imagens têm classes que podem estar causando problemas de exibição:
- Hero image (linha 92-99): `w-full h-auto object-cover`
- QR scanning (linha 170-176): `w-full h-auto`
- Growing microgreens (linha 390-396): `w-full h-auto`

## Soluções Propostas

### Solução 1: Aumentar tamanho do logo no desktop
Alterar a classe do logo para:
```tsx
className="h-32 md:h-48 lg:h-56 w-auto object-contain"
```

### Solução 2: Adicionar unsharp mask e otimização
Adicionar propriedades de otimização ao Next.js Image:
```tsx
<Image
  src="/logo-saude-real.png"
  alt="SR Saúde Real Logo"
  width={600}
  height={600}
  className="h-32 md:h-48 lg:h-56 w-auto object-contain"
  priority
  quality={95}
/>
```

### Solução 3: Verificar next.config.mjs
Garantir que a configuração de imagens está correta.
