/*********************************************************************************
*  WEB222 ? Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Hyunji Cho       Student ID: #128065182       Date: 2019-06-11
*
********************************************************************************/ 

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];

var CustomerDB = {  
    customers : [],
    addresses : [],
    stores : [],
    
    insertData: function(allData) {
        for (var i = 0; i < allData.length; i++) {
            if (allData[i].type == "store") CustomerDB.addStore(allData[i]);            
            if (allData[i].type == "customer") CustomerDB.addCustomer(allData[i]);            
            if (allData[i].type == "address") CustomerDB.addAddress(allData[i]);
        }
    },
    
    addCustomer: function(customerObj) {
        customerObj.data.add_date = new Date();
        this.customers.push(customerObj);
    },

    outputCustomerById: function(customer_id) {     
        for (var i = 0; i < this.customers.length; i++) {     
          var customerData=this.customers[i].data;
          var getAddByID = CustomerDB.getAddressById(customerData.address_id);          
            if (customerData.customer_id == customer_id) { 
              var customer = customerData.customer_id + ": " + customerData.first_name + " " + customerData.last_name + " (" + customerData.email + ")";
              var address = getAddByID;
              var date = customerData.add_date.toString();  
              break;
            }
        }
        var fullCustomer = "Customer " + customer + "\n" + "Home Address: " + address + "\n" + "Joined: " + date + "\n";
        return fullCustomer;
    },

    outputAllCustomers: function() {
        console.log("All Customers" + "\n\n");      
        for (var i = 0; i < this.customers.length; i++) {
            console.log(CustomerDB.outputCustomerById(this.customers[i].data.customer_id) + "\n" );
        }
    },

    outputCustomersByStore: function(store_id) {
        console.log("Customer in Store: " + CustomerDB.getStoreById(store_id) + "\n\n");      
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].data.store_id == store_id) console.log(CustomerDB.outputCustomerById(this.customers[i].data.customer_id) + "\n");            
        }
    },

    removeCustomerById: function(customer_id) {
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].data.customer_id == customer_id) {
                CustomerDB.removeAddressById(this.customers[i].data.address_id);
                this.customers.splice(i,1);
            }
        }
    },

    addAddress: function(addressObj) {
        this.addresses.push(addressObj);
    },

    getAddressById: function(address_id) {
      for (var i=0; i< this.addresses.length; i++){
          var addressData=this.addresses[i].data;
          if (this.addresses[i].data.address_id == address_id){
                var address = addressData.address;
                var city = addressData.city;
                var province = addressData.province;
                var postal_code = addressData.postal_code;
                break;
          }
      }
      var fullAddress = address + ' ' + city + ', ' + province + '. ' + postal_code;
      return fullAddress;
    },

    outputAllAddresses: function() {
        console.log("All Addresses" + "\n\n");      
        for (var i = 0; i < this.addresses.length; i++) {
          var ad =  this.addresses[i].data;
          console.log("Address " + ad.address_id+ ": " + CustomerDB.getAddressById(ad.address_id) + "\n\n");
        }
    },

    removeAddressById: function(address_id) {
        var count = 0;
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].data.address_id == address_id) count++;         
        }
        for (var i = 0; i < this.stores.length; i++) {
            if (this.stores[i].data.address_id == address_id) count++;            
        }
        if (count == 1) {
            for (var i = 0; i < this.addresses.length; i++) {
                if (this.addresses[i].data.address_id == address_id)
                this.addresses.splice(i, 1);
            }
        }
    },

    addStore: function(storeObj) {
        this.stores.push(storeObj);
    },

    getStoreById: function(store_id) {
        for (var i = 0; i < this.stores.length; i++) {
            if (this.stores[i].data.store_id == store_id) return this.stores[i].data.name;
        }
    },

    outputAllStores: function() {
        console.log("All Stores" + "\n\n");      
        for (var i = 0; i < this.stores.length; i++) {
            var storeData= this.stores[i].data;
            console.log("Store " + storeData.store_id + ": " + storeData.name + '\n' + "Location: " + CustomerDB.getAddressById(storeData.address_id) + "\n\n");
        }
    }
};





/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/


// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 
