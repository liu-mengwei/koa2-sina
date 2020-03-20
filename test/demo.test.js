/* 
 * @Anthor: liumengwei
 * @Date: 2020-03-20 15:04:57
 * @LastEditors: liumengwei
 * @LastEditTime: 2020-03-20 15:32:23
 * @Description: 描述
 */

// 测试纯函数， 相同的输入一定是相同的输出 

function add(a, b) {
  return a + b;
}

test('demo测试用例', () => {
  let res = add(10, 20);
  expect(res).toBe(30, '11');
})
