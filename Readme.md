# AuctionReady 

## Project Description
Auction Ready is a web-based internal network application designed for mobile compatability that allows real time management of the auction preparation process for the home owner and auctioneer. This application makes it easier than ever to produce a shared, image-based manifest of estate items and provides both auctioneer and estate client control over what is being auctioned. The app is also designed to produce a finalized, photo-based manifest for the estate client of the items to be taken away for auction. Once the process is complete, the auctioneer is left with a complete electronic database of the items for auction which can be quickly uploaded to third party auctioneering sites.

Although the app is produced with the auction preparation process in mind, it is also an ideal tool for cataloguing personal item collections or preparation for household events such as yard or garage sales.

## Technologies Used
* Hibernate - Version 5.6.1.Final
* mysql-connector-java - Version 8.0.27
* junit - Version 4.11
* javax.servet - Version 2.5
* Tomcat - Version 8.5.72
* @material-ui/core - Version 4.12.3
* @material-ui/icons - Version 4.11.2
* Axios Version - 0.24.0
* Body-parser - Version 1.19.0
* Bootstrap - Version 4.6.1
* Cors - Version 2.8.5
* Express(node server) - Version 4.17.1
* Multer Version - Version 1.4.3
* Path Version - Version 0.12.7
* React Version - Version 17.0.2
* React-bootstrap - Version 2.0.3
* React-dom - Version 17.0.2
* React-redux - Version 7.2.6
* React-router-dom - Version 6.0.2
* React-to-print - Version 2.14.1
* Redux - Version 4.1.2
* HTML5 - Version 5
* JavaScript - Version ES2015
* CSS - Version 3
* Java - Version 17
* Spring - Version 5.3
* MySQL Version 8.0.27

## Features
* Login/Logout
* Designatable custom server node IP address for different client residences
* Self-formatting Navigation Bar
  - Drop down icon feature
  - Auto-collapse to adjust to variable user interfaces
  - Variable feature access for auctioneer and client
* Estate identification
* Photo capture feature as part of item form description
* Photo storage to front-end server folder
* Co-ordinated photo and form data storage to back-end database
* Real-time manifest compilation which includes photo and data
* Item manifest removal feature to allow auctioneers and clients to decide on final manifest
* Item card formatting for easy item/data identification
* Photo/data card enlargement
* Item by category filtering
* Print to PDF feature to allow documented finalization of completed manifest for auction.

## To-do list:
* Register Page
* Allow auctioneer to view list of estates instead of entering a User ID to enter the estate
* Design a reactive interface to autoformat for different device interfaces 
* Connection a cloud server to save data instead of MySQL 

## Getting Started
* Install git from this link: https://git-scm.com/download/win
* Run the command in the command line: $ git clone https://github.com/fh-walser/AuctionReady/
* install MySQL: https://dev.mysql.com/downloads/installer/
* Login to MySQL with: $ mysql -u USERNAME -p PASSWORD
* Create MySQL database with: $ CREATE DATABASE revature
* Open the GitHub repo, open the backend folder, and open AuctionReady in Maven or Eclipse.
* Go into src.main.resources.application.properties and edit the username and password properties to match your database.
* Go into src.main.test.java.com.revature.spring.boot.data.demo.repositories.AuctionRepositoryTest, run the class, this will create tables as necessary. 
* Run the SpringBootDataDemoApplication, this will start the backend server on port 9002.
* Open the front end folder in react. 
* Open a terminal, run $ npm install to download all node modules.
* Then run the command $npm start, this will start the front-end server.  
* Find your ip address: on linux, run hostname -I in your terminal. On windows, select Start > Settings > Network & internet > Wi-Fi and then select the Wi-Fi network you're connected to. Under Properties, look for your IP address listed next to IPv4 address

## Usage
1. Ensure that Express front-end and Tomcat back-end servers are running on a central computer (ideally a laptop brought to premises).
2. Open the browser of your choice on a mobile device connected to wifi on an internal network (this should be the client's home network).
3. In the URL bar, enter the IP address of your central node computer/laptop.
4. You should then get a Login Page for the app.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146430849-de555dd4-43bd-4962-ab87-dd3403181dfc.PNG" width="400px" height="866px" />
</p>

5. Enter an auctioneer or client username and password as appropriate and the IP address for the server node computer (same as entered in the browser's address bar).
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431036-782cea26-d942-44a9-b964-6c6018bf2c75.PNG" width="400px" height="866px" />
</p>

6. A client will have access to a limited navigation menu.
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431111-8c73cd1a-5070-4c77-a7ba-79ce72ab1f71.PNG" width="400px" height="866px" />
</p>

7. If this is the first time on the estate, enter the estate name for the new job.
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431172-6bff467a-8315-4846-85fc-c09cb847658d.PNG" width="400px" height="866px" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146432688-7fcaef3f-aaad-469c-b9f6-01125bc5359e.PNG" width="400px" height="866px" />
</p>

8. Once entered you will be taken to the Full Manifest Page. As no items have been entered, this will be blank. Click the hamburger icon in the upper right-hand corner of the app to see your menu selections.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431278-d479d30e-844c-409c-ac8e-3f182106b12f.PNG" width="400px" height="866px" />
</p>

9. To start cataloging, click on the Catalog Items menu selection.
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431319-4cae9225-2a6f-4719-aeb7-8ea61edf452f.PNG" width="400px" height="866px" />
</p>

10. Click on the camera icon to take a photo of an item.
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431405-710caaae-2346-421f-9c4b-808fcc2f3353.PNG" width="400px" height="866px" />
</p>

11. While on camera, you can accept or reject the photo.
12. Enter the Lot number, Category, Number of Items, Description and a Value or Value Range for each item. You may use any notation for value range you prefer (100-150, 100.00-150.00, 100/150, etc.)
13. Once image and data are completed, click on "Catalog" to enter the data into the system.
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431520-137e9d7a-982d-4414-9e50-456470c9ad4f.PNG" width="400px" height="866px" />
</p>

14. The Catalog Items page will reload to allow you to quickly catalog a number of items in succession.
15. To see the complete list of items catalogued so far, use the apps selection menu to navigate to the Full Manifest page.
16. Here you get a real time update of each item as it is added to the manifest. Each item is displayed, along with its photo, on a individualized data card.
17. In the event that either an auctioneer or client changes his or her mind regarding inclusion of an item for auction, simply click on the Remove button on the data card corresponding to the item.
 
<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431645-036a3dfe-e66d-4fce-bc71-9b6cdd16e8a4.PNG" width="400px" height="866px" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146431997-dab065cf-55d2-4ffe-97cb-64c89a4d9d93.PNG" width="400px" height="866px" />
</p>

18. To see items grouped together by category, navigate to the By Category page.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146432151-e89c7950-7ca5-405e-9afe-bc2a6ea9fccf.PNG" width="400px" height="866px" />
</p>

19. Select a cateogry to see all items on the manifest grouped by that category.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146432273-584c35ef-1e3b-442b-b726-96802d38e6bc.PNG" width="400px" height="866px" />
</p>

20. To see an enlarge photo and datacard for a particular item, simply click on the item description. This will work for both the Full Manifest and By Category pages.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146432488-ed34f8b2-f405-40a4-be03-3a3bdc35260c.PNG" width="400px" height="866px" />
</p>

21. To produce a finalized PDF version of the completed manifest, navigate to the Full Manifest page from the app selection menu and click on the Print to PDF button at the top of the completed manifest. This operation is repeatable so additional items can be entered after printing and a new PDF can be produced.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146433111-bf9d36e1-e8f2-4f80-a0bb-a0a022da5fb7.PNG" width="400px" height="866px" />
</p>

22. To log out, simply choose Logout from the app selection menu. If necessary you can log directly back in from that page.

<p align="center">
  <img src="https://user-images.githubusercontent.com/92759483/146433180-7c807fb3-6291-48bd-91b6-575182572590.PNG" width="400px" height="866px" />
</p>

## Contributors

* William Bechtle
* Frank Walser
