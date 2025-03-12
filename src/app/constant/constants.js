exports.endpoints = (theEndpoint) => {
    return () => {const endpoint = `localhost:3000/api/${theEndpoint}`}
}