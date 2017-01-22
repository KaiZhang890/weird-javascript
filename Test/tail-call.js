// 计算 n!，不使用循环结构
function a(n) {
  if (n == 0) {
    return 1;
  }
  return n * a(n - 1);
}

function b(n, result) {
  'use strict';
  if (n == 0) {
    return result;
  }

  return b(n - 1, result * n);
}

/*
函数 a，这类前一次计算依赖于自身状态和后一次计算结果的过程，称之为递归过程（Recursive Process）,
因为它最后总要回到之前的计算中才能获得最后结果。

函数 b，这类每次计算结果仅依赖于自身状态的过程我们就称之为迭代过程（Iterative Process）。

既然每次计算都包含着本次计算所需的所有状态，那就说明没有必要把前面一次计算的函数调用压入栈中。
因为不会再用到之前的调用了，这种不将前一次函数调用压入栈中的优化，称作 Tail Call Optimization。
*/
console.log(a(4));
console.log(b(4, 1));

//a — tail-call.js:6RangeError: Maximum call stack size exceeded.
//console.log(a(100000));
//console.log(b(1000000, 1));
