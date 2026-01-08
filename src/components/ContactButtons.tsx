import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const ContactButtons = () => {
  const phoneNumber = '79991234567';
  const email = 'info@pcservice.ru';
  const whatsappMessage = 'Здравствуйте! Хочу заказать услугу компьютерного сервиса';
  const telegramUsername = 'pcservice_bot';

  return (
    <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-3">
      <Button
        asChild
        size="lg"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:scale-110 transition-transform"
        title="Написать в WhatsApp"
      >
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="w-14 h-14 rounded-full bg-[#0088cc] hover:bg-[#0077b5] shadow-lg hover:scale-110 transition-transform"
        title="Написать в Telegram"
      >
        <a
          href={`https://t.me/${telegramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="Send" size={24} />
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-accent to-primary shadow-lg hover:scale-110 transition-transform"
        title="Отправить Email"
      >
        <a href={`mailto:${email}`}>
          <Icon name="Mail" size={24} />
        </a>
      </Button>
    </div>
  );
};
