/**
 * used to compose async-functions like lodash/flow --but more advanced !!;)
 * its functional always functional !!!!
 * @param {asyncFunctions} fns
 * @param {any} initParam
 */

const flow = async (fns, initParam) => fns.reduce(async (result, job) => await job(result), initParam);
