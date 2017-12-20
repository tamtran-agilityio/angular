import * as _ from 'lodash';

export function AutoUnsubscribe({ blackList = [], includeArrays = false } = {}) {

  return function (constructor: Function) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        if (this.hasOwnProperty(prop)) {
          const property = this[prop];
          _.indexOf(blackList, prop) === -1 && property && _.isFunction(property.unsubscribe) && property.unsubscribe();

          includeArrays && _.indexOf(blackList, prop) === -1 && Array.isArray(property) &&
          _.each(property, (singleProp) => {
            singleProp && _.isFunction(singleProp.unsubscribe) && singleProp.unsubscribe();
          });
        }
      }
      _.isFunction(original) && original.apply(this, arguments);
    };
  };

}
