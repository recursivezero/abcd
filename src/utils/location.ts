export interface Location {
  name: string;
  capital: string;
  isState: boolean;
  multiple?: { summer: string; winter: string };
}

export const locations: Location[] = [
  // States
  { name: "Andhra Pradesh", capital: "Amaravati", isState: true },
  { name: "Arunachal Pradesh", capital: "Itanagar", isState: true },
  { name: "Assam", capital: "Dispur", isState: true },
  { name: "Bihar", capital: "Patna", isState: true },
  { name: "Chhattisgarh", capital: "Raipur", isState: true },
  { name: "Goa", capital: "Panaji", isState: true },
  { name: "Gujarat", capital: "Gandhinagar", isState: true },
  { name: "Haryana", capital: "Chandigarh", isState: true },
  { name: "Himachal Pradesh", capital: "Shimla", isState: true, multiple: { summer: "Shimla", winter: "Dharmshala" } },
  { name: "Jharkhand", capital: "Ranchi", isState: true },
  { name: "Karnataka", capital: "Bengaluru", isState: true },
  { name: "Kerala", capital: "Thiruvananthapuram", isState: true },
  { name: "Madhya Pradesh", capital: "Bhopal", isState: true },
  {
    name: "Maharashtra",
    capital: "Mumbai",
    isState: true,
    multiple: { summer: "Mumbai", winter: "Nagpur" }
  },
  { name: "Manipur", capital: "Imphal", isState: true },
  { name: "Meghalaya", capital: "Shillong", isState: true },
  { name: "Mizoram", capital: "Aizawl", isState: true },
  { name: "Nagaland", capital: "Kohima", isState: true },
  { name: "Odisha", capital: "Bhubaneswar", isState: true },
  { name: "Punjab", capital: "Chandigarh", isState: true },
  { name: "Rajasthan", capital: "Jaipur", isState: true },
  { name: "Sikkim", capital: "Gangtok", isState: true },
  { name: "Tamil Nadu", capital: "Chennai", isState: true },
  { name: "Telangana", capital: "Hyderabad", isState: true },
  { name: "Tripura", capital: "Agartala", isState: true },
  { name: "Uttar Pradesh", capital: "Lucknow", isState: true },
  { name: "Uttarakhand", capital: "Dehradun", isState: true },
  { name: "West Bengal", capital: "Kolkata", isState: true },

  // Union Territories
  { name: "Andaman and Nicobar Islands", capital: "Port Blair", isState: false },
  { name: "Chandigarh", capital: "Chandigarh", isState: false },
  { name: "Dadra and Nagar Haveli and Daman and Diu", capital: "Daman", isState: false },
  {
    name: "Jammu and Kashmir",
    capital: "Srinagar",
    isState: false,
    multiple: { summer: "Srinagar", winter: "Jammu" }
  },
  { name: "Ladakh", capital: "Leh", isState: false },
  { name: "Lakshadweep", capital: "Kavaratti", isState: false },
  { name: "Delhi", capital: "New Delhi", isState: false },
  { name: "Puducherry", capital: "Puducherry", isState: false }
];

export const state_list = locations.filter((loc) => loc.isState);
export const ut_list = locations.filter((loc) => !loc.isState);
