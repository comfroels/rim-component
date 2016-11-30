**RimDev Angular 2 Component Starter (Based on Quickstart on [angular.io](https://angular.io))**
---

**To get started...**
*The following will start a local development server with the `tsc` compiler watching*

```
git clone
cd rim-component/
npm install
npm run start
```

**To run with AoT**

You must comment/uncomment the corresponding labeled AoT lines in the following files:
 - `app/main.ts`
 - `index.html`

**Note:**
*When AoT compiling, an `aot` directory will appear at the root of the project. Do NOT touch or change the files inside as any changes will not be saved and are what Angular uses internally*

Run to start:
*The following will use `ngc` to AoT compile and `rollup.js` to tree shake the code, then start a development server using the compiled bundle*

```
npm run start-aot
```
