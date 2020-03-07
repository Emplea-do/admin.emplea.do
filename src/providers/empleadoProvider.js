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
      data: json,
    })),

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination
    const { field, order } = params.sort
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    }

    const querifyUrl = `${prepareUrl}/${resource}?${stringify(query)}`
    return request(querifyUrl).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        headers
          .get('content-range')
          .split('/')
          .pop(),
        10
      ),
    }))
  },

  update: (resource, params) =>
    request(`${prepareUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  delete: (resource, params) =>
    request(`${prepareUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({
        id: params.ids,
      }),
    }
    const querifyUrl = `${prepareUrl}/${resource}?${stringify(query)}`
    return request(querifyUrl, {
      method: 'DELETE',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }))
  },
}

export default empleadoProvider
