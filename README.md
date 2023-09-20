# BUILT AN ONLINE CODING PLATFORM FROM SCRATCH AND DOCKERISED THE APPLICATION AND FINALLY HOSTED IN EC2 SERVER

# BELOW ARE THE STEPS:



# HOSTING A MERN APPLICATION ON EC2 INSTANCE

# STEPS:

1.Launch the instance..(in mycase I launched t2.micro)

2.ssh to the instance and clone the github repo using git clone

3.install the latest node package(in my case I installed nodev18.18.0 since my different packages in the application was not supporting lower version)

```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install v18.18.0
  node -v
```

4.go inside the folder and enter the environment variables needed in the project along with other modules.

5.Open the port 3000 and 8000 in security group
![Screenshot (163)](https://github.com/HIMA10SHREE/Coding-platform/assets/52618743/ea90e87e-c228-4d44-bb38-e279543f505d)


6.run the command inside the ec2
![Screenshot (160)](https://github.com/HIMA10SHREE/Coding-platform/assets/52618743/2ab4133f-d2e4-433b-ba33-cb8826600b5d)

6.Hit the public IP in the ec2 server

![Screenshot (161)](https://github.com/HIMA10SHREE/Coding-platform/assets/52618743/8f8add3c-fc23-485e-a780-1fa1f51d16bc)



# Commands to run docker:

building image:
```bash
  docker build -t imagename:version .
  ```

  eg: docker build -t himashree/onlinecoding_platform:latest .

to containeraise image:

```bash
  docker container run -d -p 3000:3000 -p 8000:8000 himashree/onlinecoding_platform:latest
```
additional command:

to check continers:
```bash
  docker container ls
```

