export default (state, action) => {
    switch (action.type) {
        case 'DELETE_PRODUCT':
            return {
                ...state,
                addToCart: state.addToCart.filter(productBought => productBought.id !== action.payload) // it recieves the  productBought id of productBought to be deleted inside payload, 
                                                                                                          // .filter filters all addToCart that are not equal to payload productBrought, so productBought inside payload gets deleted 
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                addToCart: [action.payload, ...state.addToCart] //here action.payload has the new productBought recieved and this new productBought is simply put inside the array before the current addToCart inside state.addToCart.
            }
        default:
            return state;
    }
}