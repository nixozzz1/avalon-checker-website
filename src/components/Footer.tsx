import { Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/icon.ico" alt="Avalon Checker" className="w-8 h-8" />
              <h3 className="text-lg font-bold text-gradient">Avalon Checker</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Современное приложение для мониторинга Авалонов в Albion Online. 
              Отслеживайте порталы в реальном времени.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-300">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-slate-400 hover:text-primary-400 transition-colors">Главная</a></li>
              <li><a href="/updates" className="text-slate-400 hover:text-primary-400 transition-colors">Обновления</a></li>
              <li><a href="/faq" className="text-slate-400 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="/docs" className="text-slate-400 hover:text-primary-400 transition-colors">Документация</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-300">Связаться</h4>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/nixozzz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/avalon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-slate-400">
          <p>&copy; 2025 nixozzz. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
