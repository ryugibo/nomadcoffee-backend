# nomadcoffee-backend

- [x] Task One: Models

  - [x] Create a Category model with a relationshops to CoffeeShop
  - [x] Create a CoffeeShop model with a relationship to the User that created the CoffeeShop and relationships to Category
  - [x] Create a CoffeeShopPhoto model with a relationship to the CoffeeShop

---

- [ ] Task Two: Resolvers

  Create the following resolvers: createCoffeeShop,seeCoffeeShops,seeCoffeeShop,seeCategory,seeCategories,editCoffeeShop

  - [x] createCoffeeShop should create a CoffeeShop, it should create a Category if it does not exist (the same way we created Hashtags on #6.4 and should upload and create a CoffeeShopPhoto for each uploaded file.
  - [ ] seeCoffeeShops should list all the CoffeeShop with pagination.
  - [ ] seeCoffeeShop should get a CoffeeShop by id.
  - [ ] seeCategory should list all the CoffeeShop inside of a Category with pagination.
  - [ ] seeCategories should list all the Category and should have a totalShops computed field that counts all the CoffeeShop inside of the Category, it should also have pagination
  - [ ] editCoffeeShop should edit a CoffeeShop
