import CONFIG from "config";

/**
 * Класс работы с окружением
 */
class Env {
  /**
   * Получить переменную окружения
   */
  static getEnv(): string {
    const NODE_ENV = process.env.NODE_ENV || "";
    return NODE_ENV.trim();
  }

  /**
   * Приложение запущено режиме разработки
   */
  static isDevelopment(): boolean {
    return Env.getEnv() === "development";
  }

  /**
   * Приложение запущено в прод режиме
   */
  static isProduction(): boolean {
    return Env.getEnv() === "production";
  }

  /**
   * Пока добавим сюда, когда появится больше различий для дев и прод режимов,
   * можно разделить на несколько конфигов config.dev.ts, config.prod.ts,
   * а для работы с ними создать отдельный класс, вроде ConfigManager
   */
  static getPublicPath(): string {
    return Env.isProduction() ? CONFIG.PUBLIC_PATH : "";
  }

  static getApiUrl(): string {
    return process.env.REACT_APP_API_URL || "";
  }
}

export default Env;
