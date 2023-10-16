	// Import functions which are needed to get data from the CMS
	import makeClient from '$lib/functionality/prismic/client';

	export async function load({ url }) {
		// Get api from client and include the session cookie which is important for the preview mode
		const api = await makeClient();
		
		// Get data from setup page
		const setup = await api.getSingle('setup');

		// Get data from home page
		const document = await api.getSingle('home', {
      graphQuery: `{
        home {
          ...homeFields
          body {
            ...on cv_section__simple_ {
              non-repeat {
                ...non-repeatFields
              }
            }
            ...on work_a {
              non-repeat {
                work {
                  ...on work {
                    ...workFields
                  }
                }
                column_a_width
              }
            }
            ...on work_a_b {
              repeat {
                work {
                  ...on work {
                    ...workFields
                  }
                }
                column
              }
              non-repeat {
                column_a_width
                column_b_width
              }
            }
            ...on work_a_b_c {
              repeat {
                work {
                  ...on work {
                    ...workFields
                  }
                }
                column
              }
              non-repeat {
                column_a_width
                column_b_width
                column_c_width
              }
            }
            ...on work_a_b_c_d {
              repeat {
                work {
                  ...on work {
                    ...workFields
                  }
                }
                column
              }
              non-repeat {
                column_a_width
                column_b_width
                column_c_width
                column_d_width
              }
            }
          }
        }
      }`
    });

    if (setup && document) {      
      // Return the data which we got above
      return {
        document,
        setup,
        url
      };
    }
	}
