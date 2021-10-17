module.exports = {
    schema: [ "https://spacexdata.herokuapp.com/graphql" ],
    documents: ["./src/api/*.graphql"],
    overwrite: true,
    generates: {
        './src/api/index.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
                apolloReactHooksImportFrom: "@apollo/client"
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};

// # overwrite: true
// # schema: "https://spacexdata.herokuapp.com/graphql"
// # documents: ["./src/api/*.graphql"]
// # generates:
// #   "src/api/index.tsx":
// #     plugins:
// #       - "typescript"
// #       - "typescript-operations"
// #       - "typescript-react-apollo"
// #     config:
// #       - skipTypename: false
// #       - withHooks: true
// #       - withHOC: false
// #       - withComponent: false
// #       - apolloReactHooksImportFrom: "@apollo/client"
// #   ./graphql.schema.json:
// #     plugins:
// #       - "introspection"
