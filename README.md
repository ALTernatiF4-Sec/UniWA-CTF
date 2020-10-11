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
- [Tools](#tools)
  - [Bruteforcers](#bruteforcers)
  - [Cryptography](#cryptography)
  - [Directory Enumeration](#directory-enumeration)
  - [Exploits](#exploits)
  - [Forensics](#forensics)
  - [Notekeeping](#notekeeping)
  - [Miscellaneous](#miscellaneous)
  - [Reverse Engineering](#reverse-engineering)
  - [Web](#web)

# Introduction

## Who we are

ALTernatiF4 is a team created by [mwm0s](https://github.com/mwmos) and [AlexS51](https://github.com/AlexS51). We are two senior students in the Electrical and Electronics Engineering Department at the University Of West Attica. We formed the team to cooperate and release our final year's thesis project under that label. We're also looking forward to reqruit new members so that we can participate in CTF challenges at a competitive level.   

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

# Getting Started

## Theoretical Background
Below we introduce some reading material for concepts that we think they are crucial for solving the challenges and the boot2root VMs. You don't have to be a master in every single topic, but a level of familiarity is required.

### Cryptography
- [Base64](https://en.wikipedia.org/wiki/Base64)
- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher)
- [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

### Reverse Engineering
- [Reverse Engineering](https://en.wikipedia.org/wiki/Reverse_engineering)
- [Assembly Language](https://en.wikipedia.org/wiki/Assembly_language)
- [Ext4 Filesystem Image](https://ext4.wiki.kernel.org/index.php/Ext4_Howto)

### Forensics
- [Exif](https://en.wikipedia.org/wiki/Exif)
- [pcap](https://en.wikipedia.org/wiki/Pcap)

### Web
- [Robots Exclusion Stndard](https://en.wikipedia.org/wiki/Robots_exclusion_standard)
- [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)

### OSINT

### Miscellaneous
- [Code Obfuscation](https://en.wikipedia.org/wiki/Obfuscation_(software))
- [Dictionary Attack](https://en.wikipedia.org/wiki/Dictionary_attack)
- [Esoteric Programming Languages](https://en.wikipedia.org/wiki/Esoteric_programming_language)
- [Magic Bytes](https://en.wikipedia.org/wiki/List_of_file_signatures)

## Operating Systems
*We suggest that you use a GNU/Linux based penetration testing distribitution to solve the challenges. Although technically you could use the OS of your taste, many of the tools that we suggest are coming pre-installed and ready to use in the distributions described below, so that you can just install them on a VM and start hacking!*

- [BlackArch](https://blackarch.org/) - An Arch Linux-based distribution backed by a community of volunteers.
- [Kali Linux](https://www.kali.org/) - A Debian-based distribution maintained and funded by Offensive Security.
- [Parrot OS](https://www.parrotsec.org/) - A Debian-based distribution which includes, except the penetration testing tools, also a bunch of privacy tools. A community-driven project supported by Parrot Security.

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
