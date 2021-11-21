export const GET_WISHLISTITEMS_BY_CATEGORY = `
query MyQuery($categoryName: String = "") {
  wishlistItem(where: {category: {name: {_eq: $categoryName}}}) {
    id
    lat
    lng
    item
    request
    category {
      id
      name
    }
    customer {
      username
    }
  }
}
`
// {
//   "categoryName": "groceries"
// }

export const GET_OFFERS_BY_BUSINESS = `
query MyQuery($businessId: uuid = "") {
  business(where: {id: {_eq: $businessId}}) {
    offers {
      accepted
      deliveryDate
      price
      wishlistItem {
        id
        customer {
          username
        }
        item
        lat
        lng
      }
    }
  }
}
`
// {
//   "businessId": "f0aad200-9d41-4517-887f-751da7eb4ac4"
// }

export const SIGN_IN_BUSINESS = `
query MyQuery($password: String = "", $username: String = "") {
  business(where: {password: {_eq: $password}, username: {_eq: $username}}) {
    businessName
    id
    category {
      name
      id
    }
    lat
    lng
    username
  }
}
`
// {
//   "password": "secret",
//   "username": "Apu"
// }