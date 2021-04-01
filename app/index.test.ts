import {a} from '@libs/a'
import {b} from '@libs/b'

import {main} from './index'

describe("app", () => {
  it("prints a and b", () => {
    let logs: any[] = [];
    console.log = function () {
      logs.push([].slice.call(arguments));
    };
    main();
    expect(logs[0]).toEqual([a, b]);
  });
});
