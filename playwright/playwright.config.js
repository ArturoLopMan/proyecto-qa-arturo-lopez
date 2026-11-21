// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Variables de entorno desde el .env junto a este archivo
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  testIgnore: '**/ejercicios/**',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  // Reintentos: 1 en local, 2 en CI (on-first-retry necesita al menos 1)
  retries: process.env.CI ? 2 : 1,

  // Máximo 3 tests a la vez: el sitio solo admite 6 eventos por usuario
  workers: process.env.CI ? 1 : 3,

  reporter: [
    ['list'],                                                        // terminal
    ['html', { outputFolder: 'playwright-report', open: 'never' }],  // reporte navegable
    ['json', { outputFile: 'results.json' }],                        // datos para métricas
  ],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',   // captura solo si el test falla
    trace: 'on-first-retry',         // trace solo cuando se reintenta
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});