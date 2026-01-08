import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Чем могу помочь?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Узнать цены',
    'Записаться на визит',
    'Время работы',
    'Связаться с оператором'
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('цен') || lowerInput.includes('стоимость')) {
      return 'Наши цены: Переустановка Windows от 1500₽, Установка программ от 800₽, Выезд на дом от 500₽, Ремонт от 1000₽. Хотите записаться?';
    }
    
    if (lowerInput.includes('запис') || lowerInput.includes('визит')) {
      return 'Отлично! Пожалуйста, заполните форму онлайн-записи ниже на странице или позвоните нам по телефону +7 (999) 123-45-67';
    }
    
    if (lowerInput.includes('время') || lowerInput.includes('работ') || lowerInput.includes('график')) {
      return 'Мы работаем ежедневно с 9:00 до 21:00 без выходных. Возможен выезд в нерабочее время по договорённости.';
    }
    
    if (lowerInput.includes('оператор') || lowerInput.includes('специалист') || lowerInput.includes('человек')) {
      return 'Свяжитесь с нашим оператором по телефону +7 (999) 123-45-67 или через WhatsApp/Telegram. Мы ответим в течение 5 минут!';
    }

    return 'Спасибо за ваш вопрос! Позвоните нам по +7 (999) 123-45-67 или напишите в WhatsApp/Telegram для подробной консультации.';
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSend();
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl hover:scale-110 transition-transform"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] glass-effect shadow-2xl animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Headphones" size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg">Поддержка</CardTitle>
                  <p className="text-xs text-white/80">Обычно отвечаем мгновенно</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col h-[calc(100%-140px)] p-0">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Быстрые ответы:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Введите сообщение..."
                  className="bg-background/50"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
