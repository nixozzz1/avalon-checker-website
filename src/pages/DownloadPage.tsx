import { motion } from 'framer-motion';
import { Download, CheckCircle2, Monitor, HardDrive, Cpu, Wifi } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">Последняя версия 3.0.0</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Скачать <span className="text-gradient">Avalon Checker</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Профессиональный инструмент для мониторинга Авалонов в Albion Online
          </p>
        </motion.div>

        {/* Main Download Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl p-12 mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Windows версия</h2>
            <p className="text-xl text-white/90 mb-8">
              Полнофункциональное приложение для Windows 10/11
            </p>

            <div className="flex flex-col items-center space-y-4">
              <a
                href="/release/AvalonChecker-Setup-3.0.0.exe"
                download
                className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
              >
                <Download className="w-7 h-7" />
                <span>Скачать Avalon Checker 3.0.0</span>
              </a>
              
              <div className="flex items-center space-x-6 text-white/80 text-sm">
                <span className="flex items-center">
                  <Monitor className="w-4 h-4 mr-2" />
                  Windows 10/11
                </span>
                <span className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-2" />
                  ~510 MB
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  v3.0.0
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl glass-effect border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-3 text-green-500" />
              Минимальные требования
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <Monitor className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                <span><strong className="text-white">ОС:</strong> Windows 10 64-bit</span>
              </li>
              <li className="flex items-start">
                <Cpu className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                <span><strong className="text-white">Процессор:</strong> Intel Core i3 или аналог</span>
              </li>
              <li className="flex items-start">
                <HardDrive className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                <span><strong className="text-white">RAM:</strong> 4 GB</span>
              </li>
              <li className="flex items-start">
                <HardDrive className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                <span><strong className="text-white">Место:</strong> 1 GB свободного места</span>
              </li>
              <li className="flex items-start">
                <Wifi className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                <span><strong className="text-white">Интернет:</strong> Требуется для обновления данных</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl glass-effect border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-3 text-primary-500" />
              Рекомендуемые требования
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <Monitor className="w-5 h-5 mr-3 mt-0.5 text-accent-400 flex-shrink-0" />
                <span><strong className="text-white">ОС:</strong> Windows 11 64-bit</span>
              </li>
              <li className="flex items-start">
                <Cpu className="w-5 h-5 mr-3 mt-0.5 text-accent-400 flex-shrink-0" />
                <span><strong className="text-white">Процессор:</strong> Intel Core i5 или выше</span>
              </li>
              <li className="flex items-start">
                <HardDrive className="w-5 h-5 mr-3 mt-0.5 text-accent-400 flex-shrink-0" />
                <span><strong className="text-white">RAM:</strong> 8 GB или больше</span>
              </li>
              <li className="flex items-start">
                <HardDrive className="w-5 h-5 mr-3 mt-0.5 text-accent-400 flex-shrink-0" />
                <span><strong className="text-white">Место:</strong> 2 GB свободного места</span>
              </li>
              <li className="flex items-start">
                <Wifi className="w-5 h-5 mr-3 mt-0.5 text-accent-400 flex-shrink-0" />
                <span><strong className="text-white">Интернет:</strong> Стабильное широкополосное соединение</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Installation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 rounded-2xl glass-effect border border-primary-500/20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Как установить?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Скачайте', desc: 'Нажмите кнопку скачивания выше' },
              { step: '2', title: 'Запустите', desc: 'Откройте скачанный .exe файл' },
              { step: '3', title: 'Установите', desc: 'Следуйте инструкциям установщика' },
              { step: '4', title: 'Готово!', desc: 'Запустите приложение с рабочего стола' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Quick */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
        >
          <h3 className="text-2xl font-bold mb-6">Частые вопросы</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <strong className="text-white">Нужна ли авторизация?</strong>
              <p>Нет, desktop версия работает полностью автономно без авторизации.</p>
            </div>
            <div>
              <strong className="text-white">Безопасно ли приложение?</strong>
              <p>Да, приложение использует только официальные API Albion Online и не вмешивается в игру.</p>
            </div>
            <div>
              <strong className="text-white">Есть автообновление?</strong>
              <p>Да, приложение автоматически проверяет и устанавливает обновления.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadPage;
