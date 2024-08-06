import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 2,
  fullyParallel: true,
});