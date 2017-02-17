//Data To be stored in the local storage 
 data={
	"userInformation":                   //Information of the user...
	{
		"userId":147468574,
		"EmailId":"sanjay564@gmail.com",
		"firstName":"sanjay",
		"lastName":"Mahto",
		"fullName":"Sanjay Mahto",
		"sex":"male",
		"dateOfBirth":"8-september-1993",
		"address":
		{
			"street":"dev bhavan",
			"landmark":"Near chaudhary petrol pump",
			"city":"Ranchi",
			"state":"Jharkhand",
			"country":"India",
			"pin":835217,
			"phoneNumber":["+91-6354736472","+91-7654384752"]
		}
	},                                          
	"productsCategory":                           //Products information...
 	{
		"Electronics":
		{
			"MobilePhones":
			[
				{
					"brand":"Apple",
				"Apple":[
				{
				"brand":"Apple",
				"mobileId":1234,
				"mobileName":"Apple iPhone 5s",
				"mobileDescription":"1 GB RAM| 16 GB ROM | 4.7 inch Retina Display | Li-ion Battery | 1 year warranty."
				},
				{
				"brand":"Apple",
				"mobileId":1235,
				"mobileName":"Apple iPhone 6s",
				"mobileDescription":"2 GB RAM| 16 GB ROM | 5.5 inch Retina Display | Li-ion Battery | 1 year warranty."
				}
				]
				},
				{
					"brand":"samsung",
				"Samsung":[
				{
				"brand":"samsung",
				"mobileId":1657,
				"mobileName":"Samsung Galsxy On5",
				"mobileDescription":"1.5 GB RAM| 8 GB ROM | 5 inch HD Display | 2600 mAh Li-ion Battery | 1 year Manufacturer warranty."
				},
				{
				"brand":"samsung",
				"mobileId":1658,
				"mobileName":"Samsung Galaxy On7",
				"mobileDescription":"2 GB RAM| 8 GB ROM | 5.5 inch HD Display |  3000 mAh Li-ion Battery | 1 year Manufacturer warranty."
				}
				]
				},
				{
					"brand":"motorola",
				"Motorola":[
				{
				"brand":"motorola",
				"mobileId":1867,
				"mobileName":"Moto E3 Power",
				"mobileDescription":"2 GB RAM| 16 GB ROM | 5 inch HD Display | 3500 mAh Li-ion Battery | 1 year Manufacturer warranty."
				},
				{
				"brand":"motorola",	
				"mobileId":1868,
				"mobileName":"Moto M",
				"mobileDescription":"3 GB RAM| 32 GB ROM | 5.5 inch Full HD Display |  3050 mAh Li-ion Battery | 1 year Manufacturer warranty."
				}
				]
				}
			]
		},
		"Appliances":
		{
				"Television":
			[
				{
					"brand":"sony",
				"Sony":[
				{
				"brand":"sony",
				"televisionId":2656,
				"modelName":"Sony Bravia KLV-22413D",
				"modelDescription":"Full HD | 1920x1080 Resolution | 20 W Speaker Out | 1 year Sony Domestic warranty."
				},
				{
				"brand":"sony",
				"TelevisionId":2864,
				"modelName":"Sony Bravia KLV-32R3032D",
				"modelDescription":"Full HD | 1920x768 Resolution | 10 W Speaker Out | 1 year Sony Domestic warranty."
				}
				]
				},
				{
					"brand":"samsung",
				"Samsung":[
				{
				"brand":"samsung",	
				"televisionId":5657,
				"modelName":"Samsung 32J4003",
				"modelDescription":"HD Ready| 1366x768 Resolution | 10 W speaker out | 1 year Manufacturer warranty."
				},
				{
				"brand":"samsung",	
				"televisionId":5984,
				"modelName":"Samsung UA40AK63000LXKL",
				"modelDescription":"Full HD| 1920x1080 Resolution | 20 W speaker out | 1 year Manufacturer warranty."
				}
				]
				},
				{
					"brand":"micromax",
				"Micromax":[
				{
				"brand":"micromax",
				"televisionId":9784,
				"modelName":"Micromax canvas 32 CANVAS S",
				"modelDescription":"HD Ready| 1366X768 Resolution| 20 W Speaker out | 1 year Manufacturer warranty."
				},
				{
				"brand":"micromax",	
				"televisionId":9785,
				"modelName":"Micromax canvas 32 J45366S",
				"modelDescription":"Full HD| 1920X1024 Resolution| 20 W Speaker out | 1 year Manufacturer warranty."
				}
				]
				}
			]
		},
		"Books":
		{
				"EducationalAndProfessionals":
			[
				{
				"AcademicTextbooks":[
				{
				"bookId":3868,
				"bookName":"Theory of machines 4th Edition",
				"bookDescription":"English | Paperback "
				},
				{
				"bookId":3869,
				"bookName":"Digital Fundamentals of Digital Electronics",
				"bookDescription":"English | Paperback "
				}
				]
				}
			],
				"Fictions":
			[
				{
				"HistoryAndPoliticsBooks":[
				{
				"bookId":3892,
				"bookName":"India after Gandhi-The History worlds largest Democracy.",
				"bookDescription":"English | Paperback | Ramchandra Guha"
				},
				{
				"bookId":3899,
				"bookName":"Discovery Of India",
				"bookDescription":"English | Paperback | Jawaharlal Nehru"
				}
				]
				}
			],
				"ReligionAndSpirituality":
			[
				{
				"HolyBooks":[
				{
				"bookId":4865,
				"bookName":"Shrimad bhagwad gita",
				"bookDescription":"English | Hardcover | The Times Of India."
				},
				{
				"bookId":4866,
				"bookName":"Ramayana",
				"bookDescription":"English | Paperback |  C.Rajgopalachari."
				}
				]
				}
			]	
		}
	}
};
dataObject = JSON.stringify(data);                       //Converting the data into String...
localStorage.setItem("JSONData", dataObject);            //Storing the data into JSONData...
/****************************************************************************************************************************/

//Retrieving data:
StringData = localStorage.getItem("JSONData");          //Storing the data into the variable StringData...
objectData = JSON.parse(StringData);                    //Converting the data into Object...

/***************************************************************************************************************************/

function readUserData(objectData)                   //Function to read the user Information...
{
	console.log("User Information:\n");
console.log(objectData.userInformation);            //to read userInformation
	console.log("user Address\n");
console.log(objectData.userInformation.address);    //to read address of user
var x=0;
	console.log("user PhoneNumber\n");
for(x in objectData.userInformation.address.phoneNumber)
{
console.log(objectData.userInformation.address.phoneNumber[x]);     //to read the PhoneNumber of user
}
}
readUserData(objectData);
/***************************************************************************************************************************/
function readProductData(objectData)           //Function to read the product Information...
{
	var x=0,y=0;
	console.log("Product Information:\n");
	for(x in objectData.productsCategory.Electronics.MobilePhones)
{
  for(y in objectData.productsCategory.Electronics.MobilePhones[x].Apple)
  {
		console.log(objectData.productsCategory.Electronics.MobilePhones[x].Apple[y]);
  } 
   for(y in objectData.productsCategory.Electronics.MobilePhones[x].Samsung)
  {
		console.log(objectData.productsCategory.Electronics.MobilePhones[x].Samsung[y]);
  } 
   for(y in objectData.productsCategory.Electronics.MobilePhones[x].Motorola)
  {
		console.log(objectData.productsCategory.Electronics.MobilePhones[x].Motorola[y]);
  }   
}
	for(x in objectData.productsCategory.Appliances.Television)     //To display the information of all the televisions
{
  for(y in objectData.productsCategory.Appliances.Television[x].Sony)
  {
		console.log(objectData.productsCategory.Appliances.Television[x].Sony[y]);
  } 
   for(y in objectData.productsCategory.Appliances.Television[x].Samsung)
  {
		console.log(objectData.productsCategory.Appliances.Television[x].Samsung[y]);
  } 
   for(y in objectData.productsCategory.Appliances.Television[x].Micromax)
  {
		console.log(objectData.productsCategory.Appliances.Television[x].Micromax[y]);
  }   
}
	for(x in objectData.productsCategory.Books.EducationalAndProfessionals)     //To display the information of all the Books in Educational and professionals
{
  for(y in objectData.productsCategory.Books.EducationalAndProfessionals[x].AcademicTextbooks)
  {
		console.log(objectData.productsCategory.Books.EducationalAndProfessionals[x].AcademicTextbooks[y]);
  } 
}
}
readProductData(objectData);                             //Calling the function to display the information...
/*****************************************************************************************************************************/
// Function to find a particular entry from JSON store using a name or id (whatever field you want)...
function findData(objectData,televisionName)      //function to find samsung UA40AK63000LXKL model from the JSON Store...
{
	var x=0;
	for(x in objectData.productsCategory.Appliances.Television)    
{ 
   for(y in objectData.productsCategory.Appliances.Television[x].Samsung)
  {
	 if(objectData.productsCategory.Appliances.Television[x].Samsung[y].modelName==televisionName)
	 {
	console.log("Model Information: Samsung UA40AK63000LXKL \n");
	console.log(objectData.productsCategory.Appliances.Television[x].Samsung[y]);
	 }
	}

  }
}
findData(objectData,"Samsung UA40AK63000LXKL");   //calling function to find the information about Samsung UA40AK63000LXKL...
/*****************************************************************************************************************************/
// Function to find a particular entry by its position/index (index in the array)...
function findByIndex(objectData,index)            //Function to find the data on index 1 of all the mobilephones array...
{
	var x=0;
	console.log("data on Index 1 of all the mobilephones array: \n");
	for(x in objectData.productsCategory.Electronics.MobilePhones)
	{
 
		if(objectData.productsCategory.Electronics.MobilePhones[x].brand=="Apple")
		console.log(objectData.productsCategory.Electronics.MobilePhones[x].Apple[index]);
	if(objectData.productsCategory.Electronics.MobilePhones[x].brand=="samsung")
		console.log(objectData.productsCategory.Electronics.MobilePhones[x].Samsung[index]);
	if(objectData.productsCategory.Electronics.MobilePhones[x].brand=="motorola")
		console.log(objectData.productsCategory.Electronics.MobilePhones[x].Motorola[index]);
	}
}
findByIndex(objectData,1);                //calling function to find the data on index 1 of all the mobilephones array...