# Why `acil` ?

When we get **errors** for some of our applications, we have to `look`. But if you use **acil**, your mistakes will come to your **e-mail** address.

## Getting Started

Before we get started, you'll need to install Node and Yarn (or npm) and create a `package.json` for your project if you haven't already.


    yarn add acil
    
Open `package.json` and add the following scripts:

```JS
"scripts": {
  "start": "acil server.js" // <-- your server application file
}
```

For custom advanced behavior of **acil**, you can create a **acil.json** in the root of your `project` directory.


Take a look at the following `acil.json` example:

```JS
{
  // Each item in the list should be a tuple of (Full name, email address). Example:
  "admins": ["Developer1 <developer1@company.com>", "Developer2 <developer2@company.com>"],
  
  // !! Add it if you don't use Environment Variable (SENDGRID_API_KEY)
  sendGridApiKey: "xxx"
}
```

# Setup Environment Variables

`Acil` is currently using **sendgrid** for `emails`. For this you need to create [SENDGRID_API_KEY](https://app.sendgrid.com/settings/api_keys).

### Using Environment Variable

    export SENDGRID_API_KEY=XXX

### Using `acil.json`

Add the line **sendGridApiKey** as follows:

  
```JS
{
  ...
  
  sendGridApiKey: "XXX"
}
```
