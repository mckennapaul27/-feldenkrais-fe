import {
    ApolloClient,
    InMemoryCache,
    gql,
    HttpLink,
    concat,
    ApolloLink,
} from '@apollo/client';

// const httpLink = new HttpLink({
//     uri: `${
//         // process.env.NODE_ENV === 'development'
//         //     ? 'http://localhost:1337'
//         //     : process.env.NEXT_PUBLIC_STRAPI_API_URL
//         process.env.NEXT_PUBLIC_STRAPI_API_URL
//     }/graphql`,
// });

// const authMiddleware = new ApolloLink((operation, forward) => {
//     // add the authorization to the headers
//     operation.setContext(({ headers = {} }) => ({
//         headers: {
//             ...headers,
//             authorization: `Bearer ${
//                 // process.env.NODE_ENV === 'development'
//                 //     ? process.env.API_TOKEN_1_LOCAL
//                 //     : process.env.API_TOKEN_1
//                 process.env.NODE_ENV === 'development'
//                     ? process.env.API_TOKEN_1
//                     : process.env.API_TOKEN_1
//             }`,
//         },
//     }));

//     return forward(operation);
// });
// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: concat(authMiddleware, httpLink),
// });

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
    cache: new InMemoryCache(),
});

export async function getPagePaths() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages {
                    data {
                        id
                        attributes {
                            slug
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getPageBySlug({ slug }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($slug: String) {
                pages(filters: { slug: { eq: $slug } }) {
                    data {
                        id
                        attributes {
                            title
                            content
                            slug
                        }
                    }
                }
            }
        `,
        variables: {
            slug,
        },
    });

    return result;
}

export async function getMemberPaths() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: practitioners {
                    data {
                        id
                        attributes {
                            slug
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getMemberBySlug({ slug }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($slug: String) {
                pages: practitioners(filters: { slug: { eq: $slug } }) {
                    data {
                        id
                        attributes {
                            name
                            profile
                            slug
                        }
                    }
                }
            }
        `,
        variables: {
            slug,
        },
    });

    return result;
}

export async function getLocationPaths() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: locations {
                    data {
                        id
                        attributes {
                            location
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getRegionByLocation({ location }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($location: String) {
                pages: locations(filters: { location: { eq: $location } }) {
                    data {
                        id
                        attributes {
                            location
                            practitioners {
                                data {
                                    id
                                    attributes {
                                        name
                                        address
                                        phone
                                        email
                                        website
                                        qualification
                                        slug
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            location,
        },
    });

    return result;
}

export async function getClassesByRegion({ location }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($location: String) {
                pages: locations(filters: { location: { eq: $location } }) {
                    data {
                        id
                        attributes {
                            location
                            classes {
                                data {
                                    id
                                    attributes {
                                        extraNotes
                                        startTime
                                        endTime
                                        dayOfWeek
                                        people: practitioners {
                                            data {
                                                attributes {
                                                    name
                                                    qualification
                                                    address
                                                    phone
                                                    email
                                                    website
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            location,
        },
    });

    return result;
}

export async function getWorkshops() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                workshops(sort: "date:desc") {
                    data {
                        id
                        attributes {
                            date
                            workshopName
                            contactName
                            contactEmail
                            contactNumber
                            facebookLink
                            location
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getGlobalData() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                global {
                    data {
                        attributes {
                            navLink {
                                id
                                isDropDown
                                text
                                url
                                dropDown {
                                    id
                                    text
                                    url
                                }
                            }
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getBenefitPaths() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: benefitPages {
                    data {
                        id
                        attributes {
                            slug
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getBenefitBySlug({ slug }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($slug: String) {
                pages: benefitPages(filters: { slug: { eq: $slug } }) {
                    data {
                        id
                        attributes {
                            title
                            content
                            slug
                        }
                    }
                }
            }
        `,
        variables: {
            slug,
        },
    });

    return result;
}
