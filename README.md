# Big Tomato Case Study

In late 2017, tomato farmer, Toma Toe, purchased struggling tomato sauce manufacturer, Big Tomato Sauce Co. (BTSC). He knew that BTSC relied too heavily on antiquated methods and technologies to produce their sauce. One of the first investments Toma plans to make is launching a new web application to monitor and track the farms tomato usage. Toma has already begun to brag to other farmers that this new web platform will help him achieve the greatest “farm to sauce” efficiency in town. Toma is confident that this one investment will be the catalyst in increasing the company’s incredibly low profit margin.

After sitting through countless demos from various tech companies, farmer Toma decided to engage Ernst & Young LLP (EY). The two parties have discussed and agreed upon the minimal viable product specifications. EY has already started development but requires your help to get them across the finish line. See instructions below for setting up your local dev environment and the tasks assigned to you. 
 
## Pre-requisites:
  - Register for a  github account (if you do not already have one)
  - Install Dependencies 
  - [Git tools](http://msysgit.github.io/)
  - [Node JS](https://nodejs.org/en/)

## Setting Up Local Repository

  - Create a directory on your local machine where you would like to save the checkpoint repository. 

  - Using your command line, navigate to the directory you just created. Using git clone, clone the repository onto your local machine. 

  - Using the command line, navigate to the newly cloned repository on your machine.

  - Run the command ```npm install```
    - If running this command alters the .package.json file and the .json file, use the ```git checkout``` command to discard those changes. Running ```git status``` will give you instructions on how to use ```git checkout```.

  - When you are ready to run the site locally, run the commands:
	  - ```npm run dev``` 
	  - ```npm run api```

Note: You will need to run these commands in seperate command line windows. The command ```npm run dev``` runs a local server on your machine that hosts the site. The command ```npm run api``` runs a mock api that hosts all of the data for the assessment.  

You are now ready to start working on the site. The site is set up with LiveReload. This means that when you save your code in your text editor, the page will automatically reload for you. We have noticed that there are a few instances where the LiveReload can lag, so if you are not seeing your changes immediately, give it a few seconds to catch up. 

## Requirements: 

### General

  - Use git branching (i.e., do not push code to master).
  - Write all angular code (Angular 1) consistent with the [John Papa Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).
  - DO NOT USE ES6 or later. 
  - Stick to the requirements, however, if you feel that there are other opportunities to improve the code or create new features feel free to do so. 

### Navigation

Top Navigation: A basic bootstrap top navigation menu directive has been started for you. Use the bootstrap [nav-bar docs](https://getbootstrap.com/docs/3.3/components/#navbar) to implement the following features:

### Data Visualization

  - The EY Developer team has already started putting together the required data visluazations. The page contains one data visualization using Angular-Chart.js to display 'Total Ounces of Tomatoes Produced By Color By Season' in Bar-Chart form. We need your help to create an Angular-Chart.js Line-Chart displaying Total Tomoato Revnue by Season. 

### Grid Display