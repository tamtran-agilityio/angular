import {
  environment
} from '@env/environment';

export function LoggerDecorator(): ClassDecorator {
  return function (target: Function) {
    if (!environment.production) {

      const LIFECYCLE_HOOKS = [
        'ngOnInit',
        'ngOnChanges',
        'ngOnDestroy'
      ];
      const component = target.name;

      LIFECYCLE_HOOKS.forEach(hook => {
        const original = target.prototype[hook];

        target.prototype[hook] = function ( ...args ) {
          console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);

          original && original.apply(this, args);
        };
      });
    }
  };
}
