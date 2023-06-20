// MIT License

// Copyright (c) 2016-present Matt Phillips <mattphillips>

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Modified version of deep-object-diff arrayDiff, which isn't availalbe from the npm library
// Source: https://github.com/mattphillips/deep-object-diff/blob/main/src/arrayDiff.js

// Rather than returning explicit changes inside an array, if changes exist, the newer array is
// returned with the delta

export const isArray = (a) => Array.isArray(a);
export const isDate = (d) => d instanceof Date;
export const isEmpty = (o) => Object.keys(o).length === 0;
export const isObject = (o) => o != null && typeof o === 'object';
export const hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args);
export const isEmptyObject = (o) => isObject(o) && isEmpty(o);
export const makeObjectWithoutPrototype = () => Object.create(null);

export const diff = (lhs, rhs) => {
  if (lhs === rhs) return {}; // equal return no diff

  if (!isObject(lhs) || !isObject(rhs)) return rhs; // return updated rhs

  const l = lhs;
  const r = rhs;

  const deletedValues = Object.keys(l).reduce((acc, key) => {
    return hasOwnProperty(r, key) ? acc : { ...acc, [key]: undefined };
  }, {});

  if (isDate(l) || isDate(r)) {
    if (l.valueOf() === r.valueOf()) return {};
    return r;
  }

  if (Array.isArray(r) && Array.isArray(l)) {
    // If empty array, return it
    if (r.length === 0) return r;

    const deletedValues = l.reduce((acc, item, index) => {
      return hasOwnProperty(r, index) ? acc.concat(item) : acc.concat(undefined);
    }, []);

    const result = r.reduce((acc, rightItem, index) => {
      if (!hasOwnProperty(deletedValues, index)) {
        return acc.concat(rightItem);
      }

      const leftItem = l[index];
      const difference = diff(rightItem, leftItem);

      if (isObject(difference) && isEmpty(difference) && !isDate(difference)) {
        delete acc[index];
        return acc; // return no diff
      }

      return acc
        .slice(0, index)
        .concat(rightItem)
        .concat(acc.slice(index + 1)); // return updated key
    }, deletedValues);

    return result.filter((n) => n).length === 0 ? undefined : [...r];
  }

  const delta = Object.keys(r).reduce((acc, key) => {
    if (!hasOwnProperty(l, key)) return { ...acc, [key]: r[key] }; // return added r key

    const difference = diff(l[key], r[key]);

    if (isArray(difference) && isEmpty(difference)) {
      acc[key] = difference;
    } else if (isObject(difference) && isEmpty(difference) && !isDate(difference)) {
      return acc; // return no diff
    }

    return { ...acc, [key]: difference }; // return updated key
  }, deletedValues);

  // Delete undefined values
  Object.keys(delta).forEach((key) => {
    if (delta[key] === undefined) {
      delete delta[key];
    }
  });

  return delta;
};
