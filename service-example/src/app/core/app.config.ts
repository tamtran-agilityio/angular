import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    apiEndpoint: string;
    title: string;
    names: string;
}

export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection',
    names: ' DJ '
};
