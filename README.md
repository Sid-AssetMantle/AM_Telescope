# AssetMantle Telescope Integration

## Setup
1. Install cosmology/telescope & create-cosmos-app

   `npm install -g @cosmology/telescope create-cosmos-app`
   
2. Generate the telescope boilerplate. Add author, module name, description, email, github username, etc.
   
   `cca --boilerplate telescope`
   
3. Install proto templates (osmosis, cosmos, ibc, etc.). Add AssetMantle module and schema proto folders, also add the License and README file to the folder.
   
   `telescope install`
   `telescope install @protobufs/osmosis`
   
   Select all the proto templates that are needed (select using space)
   
5. Transpile using yarn
   
   `yarn codegen`
   
6. Complete transpilation
    
   `telescope transpile`
   
   proto path - ./proto
   
   src/codegen path - ./src/codegen
   
7. Typescript code will be generated for all the protos in the codegen folder inside src.
