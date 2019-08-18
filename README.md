### a node package Chello  

Install

```
npm i chello
```

### NOTE

published at NPM

How to Publish & Update a Package
[https://www.npmjs.cn/getting-started/publishing-npm-packages/]



#### Publish a Package

To publish, you must be a user on the npm registry. If you aren't a user, create an account by using `npm adduser`

If you created a user account on the site, use `npm login` to access your account from your terminal.
```
npm login
```
or
```
npm adduser
```

```
npm whoami
```


```
npm publish
```

#### Update a Package

1. How to Update the Version Number

When you make changes, you can update the package using
```
npm version <update_type>
```
where `<update_type>` is one of the semantic versioning release types, patch, minor, or major.

This command will change the version number in `package.json`.

note

```
new product first Release start with 1.0.0

patch release  increment the third digit  e.g.   1.0.1

minor release  increment the middle digit  e.g.   1.1.0

major release  increment the first digit  e.g.   2.0.0

```

2. How to Update the Read Me File

The README displayed on the site will not be updated unless a new version of your package is published, so you need to run npm version patch and npm publish to update the documentation displayed on the site.

### Understanding Packages and Modules

Node.js and npm have very specific definitions of packages and modules, which are easy to mix up. We'll discuss those definitions here, make them distinct, and explain why certain default files are named the way they are.

A package is any of the following:

1.  A folder containing a program described by a package.json file.
2.  A gzipped tarball containing (a).
3.  A url that resolves to (b).
4.  A <name>@<version> that is published on the registry with (c).
5.  A <name>@<tag> that points to (d).
6.  A <name> that has a latest tag satisfying (e).
7.  A git url that, when cloned, results in (a).



A module is anything that can be loaded with require() in a Node.js program. The following are all examples of things that can be loaded as modules:

* A folder with a package.json file containing a main field.
* A folder with an index.js file in it.
* A JavaScript file.

`Most npm packages are modules`
