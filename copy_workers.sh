 mkdir -p assets/
 rm assets/*
 rm public/assets/*

 cp  node_modules/@windmill-labs/windmill-react-sdk/dist/assets/* assets/    
 cp  -r node_modules/@windmill-labs/windmill-react-sdk/dist/assets public/
