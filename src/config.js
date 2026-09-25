import 'dotenv/config';

const list = (v='') => v.split(',').map(x=>x.trim()).filter(Boolean);

export const config = {
  botToken: process.env.BOT_TOKEN || '',
  ownerIds: list(process.env.OWNER_IDS),
  defaults: {
    storeName: process.env.STORE_NAME || 'BOTBOX Store',
    currency: process.env.DEFAULT_CURRENCY || 'AFN',
    currencySymbol: process.env.DEFAULT_CURRENCY_SYMBOL || '؋'
  }
};

export function assertConfig() {
  if (!config.botToken) throw new Error('BOT_TOKEN is required');
}
