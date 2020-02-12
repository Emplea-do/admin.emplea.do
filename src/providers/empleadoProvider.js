import { fetchUtils } from 'react-admin'
import { stringify } from 'query-string'
import { map } from 'ramda'

const httpClient = fetchUtils.fetchJson
const apiUrl = process.env.REACT_APP_API_URL
const empleadoProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination

    const prepareUrl = `${apiUrl}/${resource}?${stringify({
      pageNumber: page,
      pageSize: perPage,
    })}`

    return httpClient(prepareUrl).then(({ headers, json }) => {
      const { results, currentPage, pageCount, pageSize, rowCount } = json

      return {
        data: map(job => ({ id: job.jobOpportunityId, ...job }), results),
        total: results.length,

        page: currentPage,
        perPage: pageSize,
        total: rowCount,
      }
    })
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),
}

export default empleadoProvider
