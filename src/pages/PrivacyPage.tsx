import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      icon: Database,
      title: 'Сбор данных',
      content: 'Avalon Checker не собирает, не хранит и не передает никакие персональные данные пользователей. Приложение работает полностью локально на вашем устройстве.'
    },
    {
      icon: Eye,
      title: 'Отслеживание',
      content: 'Мы не используем никакие системы аналитики или отслеживания. Ваши действия в приложении остаются конфиденциальными и не регистрируются.'
    },
    {
      icon: Lock,
      title: 'Безопасность',
      content: 'Все данные о порталах получаются напрямую из публичных API Albion Online. Приложение не требует доступа к вашему аккаунту игры или любой другой личной информации.'
    },
    {
      icon: UserCheck,
      title: 'Авторизация',
      content: 'Desktop версия не требует авторизации через Discord или любые другие сервисы. Вам не нужно создавать аккаунт или предоставлять какие-либо данные для использования приложения.'
    },
    {
      icon: AlertCircle,
      title: 'Автоматические обновления',
      content: 'При проверке обновлений приложение отправляет запрос на наш сервер с версией приложения. Никакая дополнительная информация не передается.'
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Политика <span className="text-gradient">конфиденциальности</span>
          </h1>
          <p className="text-xl text-slate-300">
            Ваша конфиденциальность - наш приоритет
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl glass-effect border border-white/10 mb-8"
        >
          <p className="text-slate-300 leading-relaxed mb-6">
            Последнее обновление: 7 ноября 2024 года
          </p>
          <p className="text-slate-300 leading-relaxed">
            Avalon Checker создан с фокусом на конфиденциальность пользователей. 
            Мы верим, что ваши данные принадлежат только вам, и придерживаемся принципов 
            минимального сбора данных и максимальной прозрачности.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-xl glass-effect border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl glass-effect border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-6">Дополнительная информация</h2>
          
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Cookies</h3>
              <p className="leading-relaxed">
                Desktop приложение не использует cookies. Веб-версия сайта может использовать 
                технические cookies для обеспечения базовой функциональности, но не для отслеживания.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Сторонние сервисы</h3>
              <p className="leading-relaxed">
                Приложение взаимодействует только с официальным API Albion Online для получения 
                данных о порталах. Мы не используем сторонние сервисы аналитики или рекламы.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Хранение данных</h3>
              <p className="leading-relaxed">
                Все настройки приложения хранятся локально на вашем устройстве. При удалении 
                приложения все данные будут полностью удалены с вашего компьютера.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Изменения политики</h3>
              <p className="leading-relaxed">
                Мы можем обновлять эту политику конфиденциальности время от времени. 
                О любых изменениях будет сообщено через приложение и на этой странице.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Вопросы о конфиденциальности?</h3>
          <p className="text-slate-300 mb-6">
            Если у вас есть вопросы или замечания по поводу нашей политики конфиденциальности, 
            свяжитесь с нами.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/nixozzz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/avalon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors"
            >
              Discord
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
