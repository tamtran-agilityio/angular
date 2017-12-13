/**
 * Handle simple decorators show log
 * @param prefix the title about component
 */
export function LogDecorator(prefix?: string) {
  // console.log(prefix);
  return function (target) {
    // console.log('Our decorated class', target);
  };
}


