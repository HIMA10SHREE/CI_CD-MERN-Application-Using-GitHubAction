# CI_CD OF MERN APPLICATION USING GITHUB ACTION

![Screenshot (173)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/4eebe825-e70a-4d97-b167-38532240f508)


1.Launch an EC2 instance on AWS
 runner spec:
     a. Ubuntu
     b. t2.medium
     c. 30 gb size

2.  Set the runner on EC2 with the commands mentioned in github runner

3.  Create a yaml workflow

4.  set the env variables under Secrets and variables

5.  In the EC2 install docker

```bash
##Install in Amazon Ubuntu
#!/bin/bash
sudo apt update -y

sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" -y

sudo apt update -y

apt-cache policy docker-ce -y

sudo apt install docker-ce -y

#sudo systemctl status docker

sudo chmod 777 /var/run/docker.sock
```

6. Install node version 18 or above

```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install v18.18.0
  node -v
```

7. login to the dockerhub using credentials
```bash
docker login
```


8.open the security ports
![Screenshot (165)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/b57ba4da-6eeb-412e-a05a-5bced2c03895)

9. run the runner
![Screenshot (166)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/17891288-fb0f-4a9d-8239-8c8a0cf3c13c)

10 run the security codeql
![Screenshot (169)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/303530f7-328f-46cc-8bb7-2d1f5e0b4ea5)


![Screenshot (170)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/5f6b7207-e645-4deb-a1eb-632e80d74b2d)

![Screenshot (172)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/bdda9eb1-7121-4b76-b7f1-e2aea411eb40)

11. the website is running to the port 3000
![Screenshot (167)](https://github.com/HIMA10SHREE/CI_CD-MERN-Application-Using-GitHubAction/assets/52618743/b764a205-8122-4432-9181-55be1d3f2357)








