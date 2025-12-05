import { registerPlugin } from '@capacitor/core';

import type { TwilioVideoIosPlugin } from './definitions';

export const TwilioVideoIos = registerPlugin<TwilioVideoIosPlugin>('TwilioVideoIos');

export * from './definitions';
