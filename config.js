// config.js
export const CONFIG = {
    APP_NAME: "SortWise",
    APP_VERSION: "v1.3.1",
    // API Keys for different environments
    API_KEYS: {
        // Local Development: Keep empty in code! Set via App Settings (saved to LocalStorage) to keep it off GitHub.
        DEV: "",
        // Production (GitHub Pages / deployed) - UPDATE THIS with your restricted Prod key if needed
        PROD: "AIzaSyDzTAl2z3wSNEIvlAdG2XPT7wNqPwyo4Cs"
    },
    DEFAULT_MODEL: "gemini-2.5-pro",
    FALLBACK_MODEL: "gemini-2.5-flash"
};
