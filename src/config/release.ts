// Конфигурация релиза приложения
// ВАЖНО: После публикации релиза на GitHub, обновите RELEASE_URL ниже

export const RELEASE_CONFIG = {
  version: '3.0.0',
  
  // URL для скачивания
  // ИНСТРУКЦИЯ: Загрузите файл на https://catbox.moe и вставьте сюда полученную ссылку
  // Пример: 'https://files.catbox.moe/xxxxx.exe'
  RELEASE_URL: 'https://files.catbox.moe/ЗАМЕНИТЕ_НА_ВАШ_КОД.exe',
  
  // Альтернативные источники (если нужно)
  ALTERNATIVE_URLS: {
    // googleDrive: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
    // dropbox: 'https://www.dropbox.com/s/YOUR_LINK/AvalonChecker-Setup-3.0.0.exe?dl=1',
  },
  
  fileName: 'AvalonChecker-Setup-3.0.0.exe',
  sizeInMB: 510,
  minOS: 'Windows 10 64-bit',
  recommendedOS: 'Windows 11 64-bit',
};
