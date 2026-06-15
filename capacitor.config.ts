import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dailyinsight.news',
  appName: 'Daily Insight News',
  webDir: 'public',
  server: {
    url: 'https://daily-insight-blush.vercel.app/',
    cleartext: false
  }
};

export default config;