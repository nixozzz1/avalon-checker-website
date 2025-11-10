// Конфигурация релиза приложения
// ВАЖНО: После публикации релиза на GitHub, обновите RELEASE_URL ниже

export const RELEASE_CONFIG = {
  version: '3.0.0',
  
  // URL для скачивания из GitHub Releases
  RELEASE_URL: 'https://github.com/nixozzz1/avalon-checker-website/releases/download/v3.0.0/AvalonChecker-Setup-3.0.0.exe',
  
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
