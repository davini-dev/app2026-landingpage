import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Leaf, Shield, QrCode, Sprout, Heart, Star, MapPin, Truck, Calendar, Smartphone, TrendingUp, Award, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header - Clean & Simple */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="container flex h-40 md:h-56 lg:h-64 items-center justify-center px-4 md:px-6 max-w-7xl mx-auto">
          <Image 
            src="/logo-saude-real.png"
            alt="SR Saúde Real Logo"
            width={600}
            height={600}
            className="h-32 md:h-48 lg:h-56 w-auto object-contain"
            priority
            quality={95}
          />
        </div>
      </header>

      {/* Hero Section - Modern & Mobile-First */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative px-4 md:px-6 py-6 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-3 md:space-y-5 text-center lg:text-left">
              <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 text-xs md:text-sm font-medium border-primary/20">
                <Leaf className="w-3 h-3 md:w-4 md:h-4" />
                100% Rastreável por QR Code
              </Badge>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                Saúde de verdade na palma da sua mão
              </h2>
              
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Microverdes frescos cultivados no litoral sul de SP. 
                Tecnologia de rastreamento + nutrição poderosa = sua saúde em outro nível!
              </p>
              
              {/* Location Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-muted">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="font-medium">Jd. Real, Praia Grande - SP</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-muted">
                  <Truck className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                  <span className="font-medium">Peruíbe → Santos</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 pt-1 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-lg px-5 md:px-8 h-11 md:h-14 shadow-lg shadow-primary/20">
                  Experimentar Agora
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-sm md:text-lg px-5 md:px-8 h-11 md:h-14 bg-transparent border-2">
                  <QrCode className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Ver Rastreamento
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-8">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">40x</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Mais Nutrientes</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">100%</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Orgânico</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">1000+</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">Clientes</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-4 -right-4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src="/hero-microgreens.jpg"
                  alt="Microverdes frescos"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                  quality={90}
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Colhido Hoje
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info Banner */}
      <section id="entrega" className="bg-gradient-to-r from-primary via-accent to-primary py-4 md:py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm opacity-90">Entregas</p>
                <p className="font-bold text-lg">Terça e Sexta</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm opacity-90">Cobertura</p>
                <p className="font-bold text-lg">Peruíbe até Santos</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm opacity-90">Localização</p>
                <p className="font-bold text-lg">Jd. Real, Praia Grande</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Tracking Section - Tech-Focused */}
      <section id="rastreamento" className="py-12 md:py-16 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              <Smartphone className="w-4 h-4 mr-2" />
              Tecnologia de Rastreamento
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
              Escaneie o QR Code e veja tudo sobre seu alimento
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              Transparência total em um clique. Toda a jornada do seu microverde, da semente até sua mesa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src="/qr-scanning.jpg"
                  alt="Escaneando QR Code"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover"
                  quality={90}
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card border-2 border-primary/20 p-4 md:p-6 rounded-2xl shadow-2xl max-w-xs backdrop-blur-sm bg-background/95">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Tecnologia QR</p>
                    <p className="text-sm text-muted-foreground">Rastreamento instantâneo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                Como funciona o rastreamento?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Cada embalagem tem um QR Code exclusivo. Basta apontar a câmera do seu celular e descobrir:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-base md:text-lg">Data do Plantio</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Exatamente quando suas sementes foram plantadas</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-accent/10 border border-accent/20 hover:bg-accent/15 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-base md:text-lg">Condições de Cultivo</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Temperatura, umidade e todos os cuidados</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-secondary/20 border border-secondary/30 hover:bg-secondary/30 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shadow-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-base md:text-lg">Data da Colheita</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Frescor máximo: da colheita até você</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-base md:text-lg">Certificações</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Todos os selos de qualidade orgânica</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Testar Rastreamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Modern Cards */}
      <section id="beneficios" className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
              Por que escolher nossos microverdes?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
              Tecnologia, sabor e saúde em cada porção. Veja o que nos torna especiais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl">40x Mais Nutrientes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  Concentração surpreendente de vitaminas, minerais e antioxidantes. Saúde poderosa em cada porção!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 shadow-lg">
                  <Leaf className="w-7 h-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl">100% Orgânico</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  Zero agrotóxicos ou químicas. Apenas água, luz e muito cuidado com a natureza.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-4 shadow-lg">
                  <Heart className="w-7 h-7 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl">Ultra Fresco</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  Colhido no dia da entrega. Do nosso cultivo direto para sua mesa com frescor máximo!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl">Sustentável</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  95% menos água, cultivo vertical eficiente. Saúde para você e o planeta!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 shadow-lg">
                  <Star className="w-7 h-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl">Sabor Intenso</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  Explosão de sabor que transforma pratos simples em experiências gourmet incríveis!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-4 shadow-lg">
                  <QrCode className="w-7 h-7 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg md:text-xl">Rastreável</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  QR Code em cada embalagem. Transparência total da semente até você!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growing Process - Tech Aesthetic */}
      <section id="cultivo" className="py-12 md:py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="space-y-4 order-2 lg:order-1">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                <Sprout className="w-4 h-4 mr-2" />
                Processo Tecnológico
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-balance">
                Cultivo inteligente com tecnologia de ponta
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Combinamos inovação tecnológica com sustentabilidade. Cada lote é monitorado digitalmente 24/7.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Award, text: 'Sementes orgânicas certificadas de alta qualidade' },
                  { icon: Smartphone, text: 'Monitoramento digital de temperatura e umidade' },
                  { icon: Leaf, text: 'Iluminação LED otimizada que simula luz solar' },
                  { icon: Shield, text: 'Sistema de irrigação inteligente - 95% menos água' },
                  { icon: Heart, text: 'Colheita manual para preservar todos os nutrientes' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src="/growing-microgreens.jpg"
                  alt="Cultivo tecnológico de microverdes"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Design */}
      <section id="depoimentos" className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Quem já experimenta, aprova!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              Mais de 1.000 pessoas já transformaram suas refeições. Veja o que dizem sobre nós.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                    <AvatarImage src="/avatar-1.jpg" alt="Ana Paula" />
                    <AvatarFallback className="bg-primary/10">AP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-base">Ana Paula Silva</p>
                    <p className="text-sm text-muted-foreground">Nutricionista</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  "O rastreamento por QR code é sensacional! Como nutricionista, sempre recomendo aos meus pacientes. 
                  Qualidade incomparável e transparência total no processo."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                    <AvatarImage src="/avatar-2.jpg" alt="Carlos Eduardo" />
                    <AvatarFallback className="bg-primary/10">CE</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-base">Carlos Eduardo</p>
                    <p className="text-sm text-muted-foreground">Chef de Cozinha</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  "Uso nos pratos do restaurante e os clientes adoram! O sabor intenso e o frescor fazem toda diferença. 
                  Produtos de altíssima qualidade, sempre!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/80 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                    <AvatarImage src="/avatar-3.jpg" alt="Juliana Santos" />
                    <AvatarFallback className="bg-primary/10">JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-base">Juliana Santos</p>
                    <p className="text-sm text-muted-foreground">Mãe e Fitness</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  "Meus filhos adoram nos sucos e saladas! Saber que é 100% orgânico e poder rastrear tudo me dá total segurança. 
                  Recomendo para todas as mães!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - Mobile Optimized */}
      <section id="faq" className="py-12 md:py-16 pb-20 md:pb-24 bg-background">
        <div className="container max-w-3xl px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Perguntas frequentes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              Tudo que você precisa saber sobre nossos microverdes. Ficou com dúvida? É só chamar!
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4 mb-16 md:mb-20">
            <AccordionItem value="item-1" className="border-2 rounded-xl px-4 md:px-6 bg-card hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                O que são microverdes afinal?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Microverdes são vegetais e ervas colhidos logo após brotarem (7-14 dias). 
                Nessa fase, concentram até 40x mais nutrientes que versões maduras! 
                São verdadeiros "super-heróis" da alimentação saudável.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-xl px-4 md:px-6 bg-card hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                Como funciona o rastreamento por QR Code?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Super simples! Cada embalagem tem um QR Code exclusivo. Abra a câmera do celular, 
                aponte para o código e veja todas as informações: data de plantio, condições de cultivo, 
                colheita e certificações. Transparência total instantânea!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-xl px-4 md:px-6 bg-card hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                Quanto tempo dura na geladeira?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Com cuidado adequado, de 5 a 7 dias fresquinhos! Mantenha na embalagem original fechada, 
                na gaveta de vegetais da geladeira. Use apenas o que precisa e feche bem novamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-xl px-4 md:px-6 bg-card hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                Como usar nas receitas?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A criatividade é o limite! Saladas, sanduíches, tacos, omeletes, smoothies, sucos, sopas, 
                pizzas... Ficam lindos como decoração também! Dica: adicione no final do preparo para 
                preservar nutrientes e sabor intenso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-xl px-4 md:px-6 bg-card hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                Para onde vocês entregam?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Entregamos em todo o litoral sul de São Paulo, desde Peruíbe até Santos! 
                Estamos localizados no Jd. Real, Praia Grande. Entregas às terças e sextas-feiras 
                para garantir máximo frescor. Consulte disponibilidade no WhatsApp!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 rounded-xl px-4 md:px-6 bg-card hover:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                São realmente mais nutritivos?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4">
                Absolutamente! Estudos científicos comprovam que microverdes têm até 40x mais nutrientes 
                que vegetais maduros. Ricos em vitaminas C, E, K, antioxidantes e minerais essenciais. 
                Explosão de nutrição em cada porção!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

       {/* CTA Section - Final Push */}
      <section id="contato" className="mt-12 md:mt-16 py-12 md:py-16 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Pronto para revolucionar sua alimentação?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 text-pretty leading-relaxed">
              Junte-se a mais de 1.000 pessoas que já escolheram saúde, qualidade e transparência. 
              Experimente e sinta a diferença!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-base md:text-lg px-6 md:px-8 h-12 md:h-14 shadow-2xl">
                <Heart className="w-5 h-5 mr-2" />
                Fazer Meu Pedido
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14 bg-transparent border-2 border-background text-background hover:bg-background/10">
                Falar no WhatsApp
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 pt-2">
              <Shield className="w-4 h-4" />
              <span>Garantia de qualidade e frescor máximo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern & Complete */}
      <footer className="bg-foreground/5 border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/file-00000000a598720e82830eabc876f836-20-281-29.png"
                  alt="SR Saúde Real Logo"
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-primary/20"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">SR Saúde Real</h3>
                  <p className="text-sm text-muted-foreground">Microverdes PG</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-md leading-relaxed">
                Cultivando saúde com tecnologia e transparência. Do litoral sul de São Paulo 
                para sua mesa, com qualidade e rastreabilidade garantidas.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Jd. Real, Praia Grande - SP</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-base">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
                <li><a href="#rastreamento" className="hover:text-primary transition-colors">Rastreamento</a></li>
                <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-base">Entregas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Terça e Sexta-feira
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary" />
                  Peruíbe até Santos
                </li>
                <li className="pt-3">
                  <a href="#" className="text-primary hover:underline font-medium">Consultar disponibilidade</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-10 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 SR Saúde Real - Microverdes PG. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">Feito com 💚 no litoral sul de São Paulo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
