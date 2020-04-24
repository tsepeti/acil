# Why `acil` ?

When we get **errors** for some of our applications, we have to `look`. But if you use **acil**, your mistakes will come to your **e-mail** address.

## How to run

    yarn add acil
    
Open `package.json` and add the following scripts:

```JS
"scripts": {
  "start": "acil server.js" // <-- your server application file
}
```

For custom advanced behavior of **acil**, you can create a **acil.json** in the root of your `project` directory.


Take a look at the following `acil.json` example:

#### Each item in the list should be a tuple of (Full name, email address). Example:

```JSON
{
  "admins": ["Developer1 <developer1@company.com>", "Developer2 <developer2@company.com>"]
}
```
