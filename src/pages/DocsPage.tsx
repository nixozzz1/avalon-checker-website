import { motion } from 'framer-motion';
import { Book, Download, Settings, Map, Search, Bell } from 'lucide-react';

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
      title: 'Поиск и фильтрация',
      content: [
        { subtitle: 'Быстрый поиск', text: 'Используйте строку поиска в верхней части приложения для быстрого нахождения нужных порталов по названию зоны.' },
        { subtitle: 'Фильтры', text: 'Применяйте фильтры по времени распада, типу портала, уровню опасности для более точных результатов.' },
        { subtitle: 'Сортировка', text: 'Кликните на заголовки колонок для сортировки списка порталов по различным параметрам.' },
        { subtitle: 'Избранное', text: 'Добавляйте часто используемые порталы в избранное для быстрого доступа.' }
      ]
    },
    {
      icon: Map,
      title: 'Работа с картой',
      content: [
        { subtitle: 'Просмотр карты', text: 'Переключитесь на вкладку "Карта" для визуализации всех активных порталов на интерактивной карте мира.' },
        { subtitle: 'Навигация', text: 'Используйте мышь для перемещения по карте и колесико для масштабирования.' },
        { subtitle: 'Детали портала', text: 'Кликните на портал для просмотра подробной информации о нем.' },
        { subtitle: 'Построение маршрута', text: 'Выберите несколько порталов для построения оптимального маршрута.' }
      ]
    },
    {
      icon: Settings,
      title: 'Настройки',
      content: [
        { subtitle: 'Интервал обновления', text: 'Настройте частоту автоматического обновления данных (от 30 секунд до 5 минут).' },
        { subtitle: 'Уведомления', text: 'Включите/выключите уведомления о новых порталах или порталах, близких к распаду.' },
        { subtitle: 'Тема', text: 'Выберите предпочитаемую цветовую схему (темная/светлая).' },
        { subtitle: 'Язык', text: 'Измените язык интерфейса (Русский/English).' },
        { subtitle: 'Автозапуск', text: 'Настройте запуск приложения вместе с Windows.' }
      ]
    },
    {
      icon: Bell,
      title: 'Уведомления',
      content: [
        { subtitle: 'Настройка уведомлений', text: 'В разделе настроек выберите типы событий, о которых хотите получать уведомления.' },
        { subtitle: 'Звуковые оповещения', text: 'Включите звуковые сигналы для важных событий.' },
        { subtitle: 'Приоритеты', text: 'Установите приоритеты для различных зон, чтобы получать уведомления только о важных порталах.' }
      ]
    }
  ];

  const shortcuts = [
    { keys: 'Ctrl + R', action: 'Обновить данные вручную' },
    { keys: 'Ctrl + F', action: 'Открыть поиск' },
    { keys: 'Ctrl + M', action: 'Переключиться на карту' },
    { keys: 'Ctrl + ,', action: 'Открыть настройки' },
    { keys: 'Esc', action: 'Закрыть модальное окно' }
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

        {/* Keyboard Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl glass-effect border border-primary-500/20"
        >
          <h2 className="text-2xl font-bold mb-6">Горячие клавиши</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5"
              >
                <span className="text-slate-300">{shortcut.action}</span>
                <kbd className="px-3 py-1.5 text-sm font-semibold bg-slate-800 border border-slate-600 rounded">
                  {shortcut.keys}
                </kbd>
              </div>
            ))}
          </div>
        </motion.div>

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
              <span>Настройте уведомления для важных зон, чтобы не пропустить выгодные порталы</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 mt-2"></span>
              <span>Используйте фильтры по времени распада, чтобы планировать свои действия заранее</span>
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
