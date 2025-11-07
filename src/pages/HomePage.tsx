import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Star, Eye, Map, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Быстрый поиск',
      description: 'Мгновенно находите нужные порталы Авалонов с помощью продвинутой системы поиска и фильтрации. Сортируйте по времени распада, ресурсам или локации',
      screenshot: '/screenshots/screen1.png',
      reverse: false
    },
    {
      icon: Shield,
      title: 'Гибкие настройки',
      description: 'Настройте приложение под свои нужды: интервал обновления, уведомления, тема интерфейса и многое другое. Полный контроль над функционалом',
      screenshot: '/screenshots/screen2.png',
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Версия 3.0.0 доступна</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Avalon Checker</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Профессиональный инструмент для мониторинга Авалонов в Albion Online. 
              Отслеживайте порталы, планируйте маршруты и доминируйте в игре.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/download"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl font-semibold text-lg hover:scale-105 transition-transform glow-effect group"
              >
                <span>Скачать для Windows</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/docs"
                className="inline-flex items-center space-x-3 px-8 py-4 glass-effect rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <Eye className="w-5 h-5" />
                <span>Узнать больше</span>
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Windows 10/11 • Бесплатно • Без авторизации
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Sections with Screenshots */}
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <section
            key={index}
            className={`py-20 px-4 ${index % 2 === 1 ? 'bg-slate-900/30' : ''}`}
          >
            <div className="container mx-auto max-w-6xl">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${feature.reverse ? 'md:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: feature.reverse ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={feature.reverse ? 'md:order-2' : 'md:order-1'}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Screenshot with 3D Effect */}
                <motion.div
                  initial={{ opacity: 0, x: feature.reverse ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={feature.reverse ? 'md:order-1' : 'md:order-2'}
                >
                  <motion.div
                    whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    className="relative group"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Screenshot */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary-500/50 transition-all shadow-2xl">
                      <img
                        src={feature.screenshot}
                        alt={feature.title}
                        className="w-full h-auto"
                        style={{
                          transform: 'translateZ(50px)'
                        }}
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700"><rect fill="%23334155" width="1200" height="700"/><text x="50%" y="50%" fill="%2394a3b8" text-anchor="middle" font-size="32" font-family="sans-serif">${feature.title}</text></svg>`;
                        }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Все необходимое <span className="text-gradient">в одном месте</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Мощные инструменты для эффективного мониторинга Авалонов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Map,
                title: 'Интерактивная карта',
                description: 'Визуализация всех порталов на карте мира с возможностью построения маршрутов'
              },
              {
                icon: Bell,
                title: 'Умные уведомления',
                description: 'Настраиваемые оповещения о новых порталах и близких к распаду'
              },
              {
                icon: Star,
                title: 'Автономная работа',
                description: 'Полный функционал без необходимости авторизации через Discord'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl glass-effect hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-white">Готовы начать?</h2>
              <p className="text-xl text-white/90 mb-8">
                Скачайте Avalon Checker и получите преимущество в Albion Online
              </p>
              <Link
                to="/download"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                <span>Скачать сейчас</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
