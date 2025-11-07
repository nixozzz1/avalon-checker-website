import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, Github } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Что такое Avalon Checker?',
      answer: 'Avalon Checker - это настольное приложение для Windows, которое помогает игрокам Albion Online отслеживать порталы Авалонов в реальном времени. Приложение показывает расположение порталов, время их распада и другую полезную информацию.'
    },
    {
      question: 'Нужна ли авторизация через Discord?',
      answer: 'Нет! Desktop версия Avalon Checker полностью автономна и не требует авторизации через Discord или любые другие сервисы. Просто скачайте, установите и используйте.'
    },
    {
      question: 'Безопасно ли использовать это приложение?',
      answer: 'Да, приложение абсолютно безопасно. Оно использует только публичные API Albion Online и не вмешивается в процесс игры. Все данные берутся из официальных источников.'
    },
    {
      question: 'Какие системные требования?',
      answer: 'Минимальные требования: Windows 10 64-bit, 4 GB RAM, 1 GB свободного места. Рекомендуется Windows 11 с 8 GB RAM для оптимальной производительности.'
    },
    {
      question: 'Как установить приложение?',
      answer: 'Скачайте установщик с главной страницы, запустите его и следуйте инструкциям. Установка занимает несколько минут. После установки приложение автоматически создаст ярлык на рабочем столе.'
    },
    {
      question: 'Как часто обновляются данные?',
      answer: 'Приложение автоматически обновляет данные каждые 30 секунд, получая актуальную информацию о порталах с серверов Albion Online.'
    },
    {
      question: 'Могу ли я использовать приложение во время игры?',
      answer: 'Да, приложение специально оптимизировано для работы в фоновом режиме и не влияет на производительность игры. Вы можете держать его открытым на втором мониторе или переключаться Alt+Tab.'
    },
    {
      question: 'Есть ли мобильная версия?',
      answer: 'На данный момент доступна только Windows версия. Мобильная версия и версия для других операционных систем находятся в разработке.'
    },
    {
      question: 'Приложение не запускается, что делать?',
      answer: 'Убедитесь, что у вас установлена последняя версия Windows и все системные обновления. Попробуйте запустить от имени администратора. Если проблема сохраняется, свяжитесь с поддержкой.'
    },
    {
      question: 'Как связаться с разработчиком?',
      answer: 'Вы можете связаться через GitHub (nixozzz) или Discord сервер проекта. Ссылки находятся в футере сайта.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Часто задаваемые <span className="text-gradient">вопросы</span>
          </h1>
          <p className="text-xl text-slate-300">
            Ответы на популярные вопросы об Avalon Checker
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl glass-effect border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">Не нашли ответ?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Если у вас есть другие вопросы, свяжитесь с нами через Discord или GitHub
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://discord.gg/avalon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discord сообщество
              </a>
              <a
                href="https://github.com/nixozzz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-2xl border border-white/20"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub профиль
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
