import totk from './data/totk.json';
import botw from './data/botw.json';
import eow from './data/eow.json';
import amiibo from './data/amiibo.json';
import acnh from './data/acnh.json';
import residents from './data/residents.json';

export const APP_TITLE = '游戏攻略手册';
export const APP_SUBTITLE = '塞尔达传说 · 动物森友会';

const GAMES = [
  { id: 'totk', name: '塞尔达传说', sub: '王国之泪', icon: '⚔️', color: '#E8A33D', deep: '#1E5B8E', data: totk },
  { id: 'botw', name: '塞尔达传说', sub: '旷野之息', icon: '🏹', color: '#7FB069', deep: '#3E7A4E', data: botw },
  { id: 'eow', name: '塞尔达传说', sub: '智慧的再现', icon: '✨', color: '#C792EA', deep: '#6B4A9E', data: eow },
  { id: 'amiibo', name: '塞尔达传说', sub: 'amiibo 图鉴', icon: '🎴', color: '#E0A84A', deep: '#8E5B1E', data: amiibo },
  { id: 'acnh', name: '集合啦！', sub: '动物森友会', icon: '🏝️', color: '#7EC86E', deep: '#4C9A4C', data: acnh },
  { id: 'residents', name: '动森', sub: '居民图鉴', icon: '🐾', color: '#E8A0A0', deep: '#9E4A4A', data: residents },
];

export default GAMES;
