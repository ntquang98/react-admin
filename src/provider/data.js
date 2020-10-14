export default {
  'currency': [
    {
      id: 1,
      currency_type: null,
      currency: "BTC",
      symbol: "₿",
      quoting_precision: 1,
    },
    {
      id: 2,
      currency_type: null,
      currency: "ETH",
      symbol: "Ξ",
      quoting_precision:1
    },
    {
      id: 3,
      currency_type: "FIAT",
      currency: "VND",
      symbol: "₫",
      quoting_precision: 1,
    },
    {
      id: 4,
      currency_type: "FIAT",
      currency: "USD",
      symbol: "$",
      quoting_precision: 1,
    }
  ],
  'users': [
    {
      id: 1,
      confirm: true,
      currency: "VND",
      first_name: "Quang",
      last_name: "Nguyen",
      password: "quang123",
    },
    {
     id: 2,
     currency: "USD",
     first_name: "Quang 1",
     last_name: "Nguyen 1",
     password: "quang123",
    }
  ],
  'accounts': [
    {
      id: 1,
     currency: "VND",
     user_id: 1,
    },
    {
      id: 1,
     currency: "USD",
     user_id: 2
    }
  ],
  'admin_users': [
    {
      id:1,
      email: "quangnt123@gmail.cpm",
      first_name: "admin",
      last_name: "admin",
      password: "admin",
    },
    {
      id:2,
      email: "quangnt@gmail.com",
      first_name: "admin1",
      last_name: "admin1",
      password: "admin",
    }, 
  ],
  'admin_user_roles': [
    {role_id: 1, admin_user_id: 1},
    {role_id: 2, admin_user_id: 2}
  ],
  'roles': [
    {id: 1, name: "super admin"}, 
    {id: 2, name: "admin"},
  ],

}