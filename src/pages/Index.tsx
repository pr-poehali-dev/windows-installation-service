import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { toast } from 'sonner';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });

  const services = [
    {
      icon: 'RefreshCw',
      title: 'Переустановка Windows',
      description: 'Быстрая переустановка Windows 10/11 с сохранением данных. Настройка системы под ваши задачи.',
      price: 'от 1500₽'
    },
    {
      icon: 'Package',
      title: 'Установка программ',
      description: 'Установка и настройка необходимых программ: офисных, графических, антивирусов и других.',
      price: 'от 800₽'
    },
    {
      icon: 'Truck',
      title: 'Выезд на дом',
      description: 'Быстрый выезд специалиста в течение часа. Работаем по всему городу без выходных.',
      price: 'от 500₽'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт компьютеров',
      description: 'Диагностика и ремонт ПК: замена комплектующих, чистка от пыли, устранение неисправностей.',
      price: 'от 1000₽'
    }
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      text: 'Отличный сервис! Мастер приехал через 30 минут, быстро переустановил Windows. Всё работает отлично!',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      text: 'Очень довольна! Установили все программы, объяснили как пользоваться. Цены адекватные.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Профессионалы своего дела. Быстро нашли проблему с компьютером и устранили её. Рекомендую!',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро вы можете приехать?',
      answer: 'В большинстве случаев мы можем приехать в течение 1-2 часов после вашего звонка. Для срочных случаев доступен экспресс-выезд в течение 30 минут за дополнительную плату.'
    },
    {
      question: 'Сколько времени занимает переустановка Windows?',
      answer: 'Стандартная переустановка Windows занимает 1-2 часа в зависимости от скорости компьютера и дополнительных настроек. Установка программ может потребовать дополнительное время.'
    },
    {
      question: 'Вы даёте гарантию на работы?',
      answer: 'Да, мы предоставляем гарантию на все выполненные работы сроком от 1 до 6 месяцев в зависимости от вида услуги.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату наличными, банковской картой, переводом на карту или через систему быстрых платежей (СБП).'
    },
    {
      question: 'Работаете ли вы в выходные?',
      answer: 'Да, мы работаем без выходных с 9:00 до 21:00. Возможен выезд в нерабочее время по предварительной договорённости.'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime || !formData.name || !formData.phone || !formData.service) {
      toast.error('Пожалуйста, заполните все обязательные поля');
      return;
    }
    toast.success('Заявка принята! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', comment: '' });
    setDate(undefined);
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Monitor" size={32} className="text-primary" />
            <span className="text-2xl font-bold gradient-text">PC Service</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl opacity-30"></div>
        <div className="container mx-auto relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Компьютерный сервис
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Переустановка Windows, установка программ, выезд на дом и ремонт компьютеров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться онлайн
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Профессиональное обслуживание компьютерной техники
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-effect hover:scale-105 transition-all duration-300 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl gradient-text text-center">Онлайн-запись</CardTitle>
              <CardDescription className="text-center text-lg">
                Выберите удобное время для выезда специалиста
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Выберите услугу *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.title}>{service.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Дата визита *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start bg-background/50">
                          <Icon name="Calendar" size={18} className="mr-2" />
                          {date ? format(date, 'PP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ru}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время визита *</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий (необязательно)</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Опишите проблему или пожелания..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Более 500 довольных клиентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о наших услугах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-effect rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="glass-effect hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={28} className="text-white" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-primary">+7 (999) 123-45-67</p>
                  <p className="text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={28} className="text-white" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-secondary">info@pcservice.ru</p>
                  <p className="text-muted-foreground mt-2">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={28} className="text-white" />
                  </div>
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-accent">г. Москва</p>
                  <p className="text-muted-foreground mt-2">Выезд по всему городу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 PC Service. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
