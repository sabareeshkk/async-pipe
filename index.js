/**
 * used to compose async-functions like lodash/flow --but more advanced !!;)
 * its functional always functional !!!!
 * @param {Array} fns
 * @param {any} initParam
 */

const pipe = async (fns, initParam) => fns
  .reduce(async (result, job) => {
    const response = await job(result);
    return response;
  }, initParam);

module.exports = {
  pipe,
};
