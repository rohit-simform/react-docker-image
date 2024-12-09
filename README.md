React Application Deployment on AWS
This guide covers two methods for hosting your React application on AWS and integrating CI/CD pipelines for efficient deployment.

Deployment Methods
1. Static Hosting via AWS S3
Steps:
Build the React application locally using npm run build.
Create an S3 bucket in AWS.
Upload all files/folders from the build directory to the S3 bucket's objects.
Enable public access permissions for the bucket.
Create a bucket policy to allow static hosting.
Retrieve the website URL from the Properties section of the bucket.
2. Deploy Docker Image on AWS EC2
Steps:
Build a Docker image of the React application locally.
Push the image to a Docker Hub repository.
Create an EC2 instance on AWS.
Install Docker on the EC2 instance.
Pull the Docker image from Docker Hub.
Run the Docker image on the EC2 instance.
Enable port permissions in the EC2 security group to allow access.
Integration of CI/CD
1. Integrate GitHub Repo with AWS S3
Steps:
Create a GitHub repository.
Develop a React application locally.
Write a script (s3Upload.js) to upload the build directory to the S3 bucket.
Generate AWS Access and Secret Keys for an IAM user.
Store the keys in GitHub under:
Repository Settings > Secrets and Variables > Actions.
Create a GitHub Actions workflow file to automate the upload process.
Push the React project to the GitHub repository.
2. Integrate GitHub Repo with Docker Image Deployment on EC2
Steps:
Set up an EC2 instance and a GitHub repository.
Create a Dockerfile for the React application.
Create a Docker Hub account.
Store Docker Hub credentials in GitHub under:
Repository Settings > Secrets and Variables > Actions.
Install Docker on the EC2 instance.
Write a GitHub Actions workflow file to:
Build the Docker image.
Push it to Docker Hub.
Pull the image on the EC2 instance.
Run the image on the EC2 instance.
Enable port permissions in the EC2 instance's security group.
Follow these steps to efficiently deploy and automate your React application on AWS.