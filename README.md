# Why `acil` ?

When we get **errors** for some of our applications, we have to `look`. But if you use **acil**, your mistakes will come to your **e-mail** address.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [Getting Started](#getting-started)
- [Setup Environment Variables](#setup-environment-variables)
    - [Using Environment Variable](#using-environment-variable)
    - [Using `acil.json`](#using-aciljson)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

Before we get started, you'll need to install Node and Yarn (or npm) and create a `package.json` for your project if you haven't already.

    yarn add acil @babel/node @babel/core @babel/preset-env --dev
    
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
  "from": "Company Name <no-reply@company.com>",
  
  // Each item in the list should be a tuple of (Full name, email address). Example:
  "admins": ["Developer1 <developer1@company.com>", "Developer2 <developer2@company.com>"],
  
  // !! Add it if you don't use Environment Variable (SENDGRID_API_KEY)
  "sendGridApiKey": "SG.XXX",
  
  "foreverOptions": {
    // https://github.com/foreversd/forever-monitor#options-available-when-using-forever-in-nodejs
  }
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
  
  "sendGridApiKey": "SG.XXX"
}
```
