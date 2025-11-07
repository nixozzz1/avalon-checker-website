import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';

const UpdatesPage = () => {
  const releases = [
    {
      version: '3.0.0',
      date: '4 ноября 2025',
      changes: [
        'Полностью переработанный интерфейс с современным дизайном',
        'Автоматические обновления через встроенную систему',
        'Улучшенная производительность и стабильность',
        'Новая система фильтрации и поиска порталов',
        'Интеграция с Memory Reader для чтения данных из игры',
        'Темная тема по умолчанию с плавными анимациями'
      ]
    },
    {
      version: '2.9.0',
      date: '4 ноября 2025',
      changes: [
        'Реальные иконки - прямо с avalonroads-97617.web.app',
        'K.png - железный спот (железо)',
        'W.png - деревянный спот (дерево)',
        'P.png - кожаный спот (кожа)',
        'S.png - каменный спот (камень)',
        'Заменены lucide-react на настоящие PNG иконки',
        'Аутентичный дизайн - как на оригинальном сайте'
      ]
    },
    {
      version: '2.8.0',
      date: '4 ноября 2025',
      changes: [
        'Загрузка данных с avalonroads-97617.web.app',
        '252 портала обновлены настоящими ресурсами',
        'Точные значения - железо, дерево, кожа, камень',
        'Автоскрипт fetch-real-resources.js',
        'Больше нет выдумок - только реальные данные'
      ]
    },
    {
      version: '2.7.0',
      date: '4 ноября 2025',
      changes: [
        'Авторизация удалена полностью - больше нет входа и регистрации',
        'Мгновенный запуск - приложение открывается сразу после Welcome screen',
        'Ресурсы теперь РАБОТАЮТ - iron, wood, hide, stone отображаются',
        'Быстрее работа - нет лишних проверок',
        'localStorage очищен - не хранятся credentials'
      ]
    },
    {
      version: '2.6.0',
      date: '4 ноября 2025',
      changes: [
        'Упрощённая авторизация',
        'Регистрация удалена - больше никаких форм регистрации',
        'Только вход - простая форма с username и password',
        'Автосоздание - при первом входе пользователь создаётся автоматически',
        'Email авто - генерируется как username@avalon.local'
      ]
    },
    {
      version: '2.5.0',
      date: '4 ноября 2025',
      changes: [
        '399 порталов обновлено - добавлены данные ресурсов',
        'Железо, дерево, пенька, камень - реальные значения',
        'Умная генерация - чем выше level, тем больше ресурсов',
        'Раздельные режимы - регистрация и вход теперь отдельно',
        'Аккаунт в правом верхнем углу с аватаром'
      ]
    },
    {
      version: '2.4.0',
      date: '4 ноября 2025',
      changes: [
        'Система авторизации - вход и регистрация',
        'Валидация форм - проверка всех полей в реальном времени',
        'Email проверка - regex валидация email адресов',
        'localStorage - сохранение учётных данных',
        'Данные ресурсов порталов в таблице'
      ]
    },
    {
      version: '2.3.0',
      date: '4 ноября 2025',
      changes: [
        'Реальные названия порталов из базы данных',
        'Ротация названий каждые 3 секунды',
        'Свечение текста - drop-shadow фильтры',
        'Web Audio API - синтезированные звуковые эффекты',
        'Автообновление - electron-updater интеграция'
      ]
    },
    {
      version: '2.2.0',
      date: '4 ноября 2025',
      changes: [
        'Welcome Screen показывается только один раз',
        'localStorage проверка при загрузке',
        'Вкладка "Обновления" с историей версий',
        'Timeline дизайн с цветовой кодировкой'
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
          <h1 className="text-5xl font-bold mb-4">
            История <span className="text-gradient">обновлений</span>
          </h1>
          <p className="text-xl text-slate-300">
            Все версии Avalon Checker и их изменения
          </p>
        </motion.div>

        <div className="space-y-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary-500/30 transition-all"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between mb-6 gap-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Tag className="w-5 h-5 text-primary-400" />
                    <h2 className="text-3xl font-bold">
                      Версия <span className="text-gradient">{release.version}</span>
                    </h2>
                    {index === 0 && (
                      <span className="px-3 py-1 text-xs font-semibold bg-primary-500/20 text-primary-400 rounded-full">
                        Latest
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {release.date}
                  </div>
                </div>
              </div>

              {/* Changes */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-300">Что нового:</h3>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 mt-2 flex-shrink-0"></span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Update Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl glass-effect border border-primary-500/20"
        >
          <h3 className="text-2xl font-bold mb-4">Как обновить приложение?</h3>
          <div className="space-y-4 text-slate-300">
            <p>
              <strong className="text-primary-400">Автоматическое обновление:</strong> Приложение автоматически проверяет наличие новых версий при запуске. 
              При обнаружении обновления появится уведомление с предложением установить его.
            </p>
            <p>
              <strong className="text-primary-400">Ручное обновление:</strong> Перейдите на страницу <a href="/download" className="text-primary-400 hover:text-primary-300 underline">Скачать</a> и загрузите последнюю версию. 
              Установщик автоматически обновит существующую установку, сохранив все ваши настройки.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpdatesPage;
