
// MATH OBJECT
// Math
// onstant PI
console.log(Math.PI);

//Methods
//pow, min, max, round, ceil, floor, trunc,random

// power 
console.log(Math.pow(3, 2)); // exponential
console.log(Math.min(23, 4, 2, -98)); // minimum number of a set
console.log(Math.max(-23, -4, -2, -98)); // maximum number of a set

// round, ceil (up), floor (down), trunc (removes)
console.log(Math.round(7.55)); // normal rounding off nums
console.log(Math.ceil(91.2)); // round up
console.log(Math.floor(99.9)); // round Down
console.log(Math.trunc(10.23)); // removes the dp

// random - random pseudo nums between 0 - 1(exclusive)
console.log(Math.random());
// 0 - 10
console.log(Math.trunc(Math.random() * 11));
// 1 - 10

// 1 -20
const randomNumberr = Math.floor(Math.random() *20) + 1;
console.log(randomNumberr);

const customers = ['Ola', 'Blessing', 'Pious', 'Moshood', 'Season', 'Samuel']
// pick a random lucky winner
const randomLuckyWinner = Math.floor(Math.random() * customers.length);
console.log(customers[randomLuckyWinner]);

// to generate between a minimum and maximum number
const min = 5;
const max = 10;
const rNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rNum);

const customer2 = {
  id: "CUST-2025-0001",
  personalInfo: {
    firstName: "Ademola",
    lastName: "Adeyemi",
    gender: "Male",
    dateOfBirth: "1990-06-12",
    nationality: "Nigerian",
    maritalStatus: "Married",
    profileImage: "https://example.com/profiles/ademola.jpg",
  },
  contactInfo: {
    email: "ademola.adeyemi@example.com",
    phone: "+2348012345678",
    secondaryPhone: "+2348098765432",
    address: {
      street: "12 Bode Thomas Street",
      city: "Lagos",
      state: "Lagos State",
      country: "Nigeria",
      postalCode: "100001",
    },
  },
  accountInfo: {
    username: "ademola90",
    passwordHash: "", // hashed in reality
    registeredAt: "2023-04-10T08:30:00Z",
    lastLogin: "2025-08-16T13:45:00Z",
    status: "active", // active | suspended | inactive
    roles: ["customer", "premium_member"],
    loyaltyPoints: 2450,
    tier: "Gold", // Bronze, Silver, Gold, Platinum
  },
  preferences: {
    language: "English",
    currency: "NGN",
    newsletterSubscribed: true,
    smsAlerts: false,
    preferredContactMethod: "email", // email | sms | phone
    interests: ["Tech", "Sports", "Travel", "Finance"],
  },
  paymentInfo: {
    defaultMethod: "Visa Card",
    cards: [
      {
        cardType: "Visa",
        last4Digits: "1234",
        expiry: "08/27",
        billingAddress: "12 Bode Thomas Street, Lagos",
      },
    ],
    bankAccounts: [
      {
        bankName: "GTBank",
        accountNumber: "0123456789",
        accountType: "Savings",
      },
    ],
  },
  orders: [
    {
      orderId: "ORD-2025-001",
      date: "2025-07-20T15:32:00Z",
      amount: 120000,
      status: "Delivered",
      items: [
        { name: "MacBook Air", quantity: 1, price: 95000 },
        { name: "Wireless Mouse", quantity: 1, price: 25000 },
      ],
    },
    {
      orderId: "ORD-2025-002",
      date: "2025-08-05T10:12:00Z",
      amount: 45000,
      status: "Shipped",
      items: [
        { name: "Noise Cancelling Headphones", quantity: 1, price: 45000 },
      ],
    },
  ],
  supportTickets: [
    {
      ticketId: "TKT-2025-101",
      subject: "Late Delivery",
      status: "resolved",
      createdAt: "2025-06-01T11:00:00Z",
      resolvedAt: "2025-06-03T16:00:00Z",
    },
  ],
  socialProfiles: {
    twitter: "https://twitter.com/ademola90",
    linkedin: "https://linkedin.com/in/ademola-adeyemi",
    facebook: "https://facebook.com/ademola.adeyemi",
  },
  meta: {
    createdBy: "system",
    updatedBy: "admin01",
    createdAt: "2023-04-10T08:30:00Z",
    updatedAt: "2025-08-10T09:20:00Z",
    tags: ["VIP", "EarlyAdopter", "HighSpender"],
  },
};
console.log(customer2.orders[1].items[0].price);
console.log(customer2.orders[0].items[1].name);

console.log(customer2.paymentInfo.bankAccounts[0].bankName);
console.log(customer2.socialProfiles.facebook);

const transfer = {
  type: "debit",
  amount: 2000,
  timestamps: {
    date: "",
    time: "",
  },
  status: "initiated",
  transactionId: "3636736367",
  recipient: {
    bankName: "Polaris",
    accountNumber: "7873783",
    name: "Ade Ola",
  },
  reInitiateTransfer:function(){
    if(this.status !== 'completed'){

    }
  },
  checksAccount:function(){

  }
};





