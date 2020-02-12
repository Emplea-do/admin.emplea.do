import { fetchUtils } from 'react-admin'
import { stringify } from 'query-string'
import { map } from 'ramda'

/**
 * TODO:
 *
 * Implements
 * - create
 * - getMany
 * - getManyReference
 * - update
 * - updateMany
 * - delete
 * - deleteMany
 * - approve
 * - approveMany
 *
 */
const request = fetchUtils.fetchJson
const { REACT_APP_API_URL, NODE_ENV, REACT_APP_PROXY_URL } = process.env

const prepareUrl =
  !NODE_ENV || NODE_ENV === 'development'
    ? `${REACT_APP_PROXY_URL}/${REACT_APP_API_URL}`
    : REACT_APP_API_URL

const empleadoProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination

    const querifyUrl = `${prepareUrl}/${resource}?${stringify({
      pageNumber: page,
      pageSize: perPage,
    })}`

    return request(querifyUrl).then(({ headers, json }) => {
      const { results, currentPage, pageSize, rowCount } = json

      return {
        data: map(job => ({ id: job.jobOpportunityId, ...job }), results),
        page: currentPage,
        perPage: pageSize,
        total: rowCount,
      }
    })
  },

  getOne: (resource, params) =>
    request(`${prepareUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json.result,
    })),
}

export default empleadoProvider
