
# React Application Deployment and CI/CD Integration on AWS

This document provides step-by-step guidance on deploying a React application using AWS services and automating deployment via CI/CD pipelines.

### Static Hosting via AWS S3
To host your React application statically on AWS S3, follow these steps:





There are Two ways to host your React Application over AWS.
* Static hosting via AWS S3 service.
	- Create build of react application at local.
	- Create a bucket into AWS S3.
	- Upload all files/folder inside of build into the Objects of created  
	  bucket.
	- Enable Permissions for accessing public IP of static hosting site.
	- Create policy for hosting or accessing application via s3.
	- You will get website url at Properties section.
	
* Deploy Docker image of React Application into AWS EC2 instances.
	- Create Docker image of React Application at local.
	- Push to Docker hub repository
	- Create instance of EC2.
	- Install Docker in EC2.
	- Pull Docker Image from Docker Hub.
	- Run the Docker image .
	- Enable ports permission in security section.
	


=================================================================

INTEGRATION OF CI/CD 

* Integrate Github repo with AWS S3 .
        - Create Repo over Github .
        - Create React Application at local.
        - Create a file(s3Upload.js) to upload a build to the S3 bucket.
        - Create Access And Secret Key for AWS user over IAM section.
        - Store or setup "Access Key and Secret Key" into Github .
              - Under settings of repository.
              - Under Secret and variables.
              - (Actions) Tab.
              
        - Create a workflow file for gitub actions.
        - Push code to the respected github repository.
        

* Integrate Github repo with Docker image deployment into EC2 instance.
	- Create EC2 instance and git repo.
	- Create Dockerfile of react app at local.
	- Create Account for Docker hub.
	- Store or Configur Docker username and password into Github Security
	  and variables(Actions) tabs inside repo settings.
	- Install Docker into EC2.
	- Create a workflow file to create Docker image , push to the Docker hub
	  and pull Docker image from docker hub and run into EC2 instance.
	- Enable ports permission into securty tab of running ec2 instances.
	

