import { motion } from 'framer-motion';
import { Book, Download, Settings, Search } from 'lucide-react';

const DocsPage = () => {
  const sections = [
    {
      icon: Download,
      title: 'Установка',
      content: [
        { subtitle: '1. Скачайте установщик', text: 'Перейдите на главную страницу и нажмите кнопку "Скачать для Windows".' },
        { subtitle: '2. Запустите установку', text: 'Откройте скачанный файл AvalonChecker-Setup-3.0.0.exe.' },
        { subtitle: '3. Следуйте инструкциям', text: 'Выберите папку для установки и дождитесь завершения процесса.' },
        { subtitle: '4. Запустите приложение', text: 'Используйте ярлык на рабочем столе или в меню Пуск.' }
      ]
    },
    {
      icon: Search,
      title: 'Поиск',
      content: [
        { subtitle: 'Быстрый поиск', text: 'Используйте строку поиска в верхней части приложения для быстрого нахождения нужных порталов по названию зоны.' }
      ]
    },
    {
      icon: Settings,
      title: 'Настройки',
      content: [
        { subtitle: 'Тема', text: 'Выберите предпочитаемую цветовую схему (темная/светлая).' },
        { subtitle: 'Язык', text: 'Измените язык интерфейса (Русский/English).' },
        { subtitle: 'Автозапуск', text: 'Настройте запуск приложения вместе с Windows.' }
      ]
    }
  ];


  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
            <Book className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Документация</span>
          </h1>
          <p className="text-xl text-slate-300">
            Полное руководство по использованию Avalon Checker
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-8 rounded-2xl glass-effect border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-primary-500/20">
                      <h3 className="text-lg font-semibold mb-2 text-primary-400">
                        {item.subtitle}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
        >
          <h3 className="text-xl font-bold mb-4">💡 Полезные советы</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 mt-2"></span>
              <span>Держите приложение открытым на втором мониторе для мгновенного доступа к информации о порталах</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 mt-2"></span>
              <span>Регулярно обновляйте приложение для получения новых функций и исправлений</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default DocsPage;
