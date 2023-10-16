// Import functions which are needed to get data from the CMS
import makeClient from '$lib/functionality/prismic/client'

export async function load({ params, parent }) {
    const { work } = params
    // Get api from client and include the session cookie which is important for the preview mode
    const api = await makeClient()

    // Get data from the current page
    const document = await api.getByUID('work', work)
    const { setup } = await parent()

    // Return the data which we got above
    return {
      setup,
      document
    }
}