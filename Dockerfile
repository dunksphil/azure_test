FROM node:12.20
 
COPY . .
 
CMD [ "node", "./index.js" ]
 

