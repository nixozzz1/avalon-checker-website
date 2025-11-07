import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle, Lock, Eye } from 'lucide-react';

const SecurityPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Безопасность</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Avalon Checker проверен VirusTotal и полностью безопасен для использования
          </p>
        </motion.div>

        {/* VirusTotal Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* VirusTotal Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-green-500/50 transition-all shadow-2xl">
                <img
                  src="/screenshots/screen3.png"
                  alt="VirusTotal Scan Result"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="800"><rect fill="%23334155" width="1000" height="800"/><text x="50%" y="50%" fill="%2394a3b8" text-anchor="middle" font-size="32" font-family="sans-serif">VirusTotal Scan Result</text></svg>`;
                  }}
                />
                <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-green-500/90 backdrop-blur-sm flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Безопасно</span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-4">Результаты сканирования VirusTotal</h2>
              <p className="text-xl text-slate-300 mb-6">
                Приложение проверено более чем 70 антивирусными системами
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">0 обнаружений</h3>
                    <p className="text-slate-300">Ни одна из 70+ антивирусных систем не обнаружила угроз</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Регулярные проверки</h3>
                    <p className="text-slate-300">Каждая новая версия автоматически проверяется перед публикацией</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Открытый процесс</h3>
                    <p className="text-slate-300">Вы всегда можете самостоятельно проверить файл на virustotal.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Гарантии безопасности</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl glass-effect border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Нет вирусов</h3>
              <p className="text-slate-300">
                Проверено более чем 70 антивирусными системами на VirusTotal
              </p>
            </div>

            <div className="p-6 rounded-xl glass-effect border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасный код</h3>
              <p className="text-slate-300">
                Приложение не собирает личные данные и не требует администраторских прав
              </p>
            </div>

            <div className="p-6 rounded-xl glass-effect border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Открытый процесс</h3>
              <p className="text-slate-300">
                Использует только публичные API и не изменяет игровые файлы
              </p>
            </div>
          </div>
        </motion.div>

        {/* What We Don't Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass-effect border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-primary-400" />
            Что мы НЕ делаем
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
              <p className="text-slate-300">
                <strong className="text-white">Не изменяем игру:</strong> Приложение не вмешивается в процесс Albion Online
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
              <p className="text-slate-300">
                <strong className="text-white">Не собираем данные:</strong> Никакой телеметрии или отслеживания пользователей
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
              <p className="text-slate-300">
                <strong className="text-white">Не требуем root:</strong> Работает с обычными правами пользователя
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
              <p className="text-slate-300">
                <strong className="text-white">Не содержим рекламу:</strong> Полностью бесплатное приложение без встроенной рекламы
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-primary-500/10 border border-green-500/20 text-center"
        >
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Регулярные проверки</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Каждая новая версия приложения проверяется на VirusTotal перед публикацией. 
            Вы всегда можете самостоятельно проверить установочный файл на 
            <a href="https://www.virustotal.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline ml-1">
              virustotal.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityPage;
