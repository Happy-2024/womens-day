import { ADDRESS, DELETEADD } from "../actions/AddressAction";

const address = [
  {
    "addressType": "Home",
    "firstName": "Abi",
    "lastName": "p",
    "email": "abi4300@gmal.com ",
    "company": "technokey",
    "address1": "Add1",
    "address2": "Add2",
    "country": "India",
    "state": "Tamilnadu",
    "city": "coimbatore",
    "postalCode": "608651",
    "mobileNumber": "987654345",
    "landmark": "RTO office opp"
},
{
  "addressType": "Home",
  "firstName": "raj",
  "lastName": "m",
  "email": "raj4200@gmal.com ",
  "company": "tecy",
  "address1": "Add1",
  "address2": "Add2",
  "country": "India",
  "state": "Tamilnadu",
  "city": "Tiruchendur",
  "postalCode": "608651",
  "mobileNumber": "987654345",
  "landmark": " church opp"
},
]
 
const Addressreducer = (state = address, action) => {   
  switch (action.type) {
    case ADDRESS:
        return [...state,action.key]; // Use the spread operator to add all items from action.data    
    
    case DELETEADD:
     return state.filter((item, index) => index !== action.index);
            
    default:
        return state;
    }
  };
  
  export default Addressreducer;