Command to build for production:
npm run build:rollup 

Command to build the showcase:
npm run build-showcase:rollup

If you add new icons to src/assets/icons, in order to view them on dev environment, you will have to 
do a new "npm start", since this commands includes "copy-icons" which copies src/assets/icons to "dev/assets/icons".