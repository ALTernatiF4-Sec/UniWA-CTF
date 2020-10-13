<p align="center">
  <img src="/documentation/img/logo.png">
</p>
<p align="center"> <b>DOCUMENTATION</b> </p>

<p align="center">
  <span>English</span> |
  <a href="https://github.com/ALTernatiF4-Sec/UniWA-CTF/tree/master/documentation/greek">Ελληνικά</a> |
  <a href="/link/gia/rwsika">Pусский</a> 
</p>

### Contents
- [Introduction](#introduction)
  - [Who we are](#who-we-are)
  - [The project](#the-project)
  - [Free and Open-Source software](#free-and-open-source-software)
- [Getting Started](#getting-started)
  - [Theoretical Background](#theoretical-background)
  - [Operating Systems](#operating-systems)
- [Installation](#installation)
  - [Virtual Environment](#virtual-environment)
  - [Docker Deployment](#docker-deployment)  

# Introduction

## Who we are

ALTernatiF4 is a team created by [mwm0s](https://github.com/mwmos) and [AlexS51](https://github.com/AlexS51). We are two senior students in the Electrical and Electronics Engineering Department at the University Of West Attica. We formed the team to cooperate and release our final year's thesis project under that label. Special thanks to [Ejento](https://github.com/Ejento) for helping us with his experience.

```console
root@UniWA-CTF:~# whoami
mwm0s
- CCNA
- Cybersecurity Enthusiast
- GNU/Linux Power User
- FOSS Advocate
```

```console
root@UniWA-CTF:~# whoami
AlexS51 
- RPG Gamer
- Ethical Hacking Beginner
```

## The project
UniWA-CTF is our final year's thesis project. It's a begginer-friendly CTF challenge designed to introduce students in various terms and techniques used in the Cybersecurity field from the perspective of the attacker. We used the [RootTheBox](https://github.com/moloch--/RootTheBox) engine, which is giving the admin an easy to use GUI, allows the user to use a variety of themes, has the CyberChef tool integrated and also introduces some Gamification elements to improve user engagement.


## Free and Open-Source Software
We took the decision to use only Free and Open-Source Software (FOSS). This decision's based on the fact that we ourselves got a ton of help building that project from the FOSS community. Also most of the times that type of software comes free of charge, that helps not only us the developers but also the end-user, as he/she is not obligated to buy some licence to participate, clone or contribute to the project.   

# Installation

## Virtual Environment
Our boxes are made with [Oracle VM VirtualBox](https://www.virtualbox.org/). Its installation is an easy process which is described greatly at their website. Below we provide instructions to import and use our VMs using VirtualBox. 

- Step 1: Open VirtualBox and press Ctrl+H.
- Step 2: Click on the "Create" button and close the window.
- Step 3: Press Ctrl+I.
- Step 4: In the "File" form you can type the path to the VM that you want to import, or click the button at the right side.
- Step 5: Click "Next" and then "Import".
- Step 6: Right click on the imported VM and select "Settings".
- Step 7: Click on the "Network" tab and make sure that the Network Adapter is attached to the "Host-only Adapter".

## Docker Deployment

### Clone UniWA-CTF
1. Clone the UniWA-CTF repository 
   ```console
   root@UniWA-CTF:~# git clone https://github.com/ALTernatiF4-Sec/UniWA-CTF.git
   ```
2. Switch to the downloaded directory
   ```console
   root@UniWA-CTF:~# cd UniWA-CTF
   ```
3. Compose the application with docker-compose
   ```console
   root@UniWA-CTF:~# docker-compose up
   ```
   
### Run UniWA-CTF

By default UniWA-CTF runs on port 8888. To access it just write `http://localhost:8888` (or the IP of the machine if you are using a VM) on your browser. The default admin credentials are:

Username:`admin`

Password:`rootthebox`
