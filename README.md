<p align="center">
  <img src="/documentation/img/logo.png">
</p>
<p align="center"> <b>DOCUMENTATION</b> </p>

<p align="center">
  <span>English</span> |
  <a href="https://github.com/mwmos/uniWA-CTF/tree/master/documentation/greek">Ελληνικά</a> |
  <a href="/link/gia/rwsika">Pусский</a> 
</p>

### Contents
- [Introduction](#introduction)
  - [Who are we](#who-are-we)
  - [The project](#the-project)
  - [Free and Open-Source software](#free-and-open-source-software)
- [Getting Started](#getting-started)
  - [Virtual Environment](#virtual-environment)
  - [Operating Systems](#operating-systems)
- [Tools](#tools)
  - [Bruteforcers](#bruteforcers)
  - [Cryptography](#cryptography)
  - [Exploits](#exploits)
  - [Forensics](#forensics)
  - [Notekeeping](#notekeeping)
  - [Steganography](#stegano)
  - [Web](#web)

# Introduction

## Who are we
ALTernatiF4 is a team created by [mwm0s](https://github.com/mwmos) and [AlexS51](https://github.com/AlexS51). We are two senior students in the Electrical and Electronics Engineering Department at the University Of West Attica. We formed the team to cooperate and release our final year's thesis project under that label. We're also looking forward to reqruit new members so that we can participate in CTF challenges at a competitive level.   

```
root@UniWA-CTF:~# whoami
mwm0s
- CCNA
- Cybersecurity Enthusiast
- GNU/Linux Power User
- FOSS Advocate
```

```
root@UniWA-CTF:~# whoami
AlexS51 

```

## The project
UniWA-CTF is our final year's thesis project. It's a begginer-friendly CTF challenge designed to introduce students in various terms and techniques used in the Cybersecurity field from the perspective of the attacker. We used the [RootTheBox](https://github.com/moloch--/RootTheBox) engine, which is giving the admin an easy to use GUI, allows the user to use a variety of themes, has the CyberChef tool integrated and also introduces some Gamification elements to improve user engagement.


## Free and Open-Source Software
We took the decision to use only Free and Open-Source Software (FOSS). This decision's based on the fact that we ourselves got a ton of help building that project from the FOSS community. Also most of the times that type of software comes free of charge, that helps not only us the developers but also the end-user, as he/she is not obligated to buy some licence to participate, clone or contribute to the project.   

# Getting Started

## Theoretical Background
Below we introduce some reading material for concepts that we think they are crucial for solving the challenges and the boot2root VMs.

### Cryptography
- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

### Reverse Engineering

### Forensics
- [Exif](https://en.wikipedia.org/wiki/Exif)
- [pcap](https://en.wikipedia.org/wiki/Pcap)

### Web
- [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)

### OSINT

### Miscellaneous
- [Esoteric Programming Languages](https://en.wikipedia.org/wiki/Esoteric_programming_language)
- [Magic Bytes](https://en.wikipedia.org/wiki/List_of_file_signatures)
- [Dictionary Attack](https://en.wikipedia.org/wiki/Dictionary_attack)

## Operating Systems
*We suggest that you use a GNU/Linux based penetration testing distribitution to solve the challenges. Although technically you could use the OS of your taste, many of the tools that we suggest are coming pre-installed and ready to use in the distributions described below, so that you can just install them on a VM and start hacking!*

- [BlackArch](https://blackarch.org/) - An Arch Linux-based distribution backed by a community of volunteers.
- [Kali Linux](https://www.kali.org/) - A Debian-based distribution maintained and funded by Offensive Security.
- [Parrot OS](https://www.parrotsec.org/) - A Debian-based distribution which includes, except the penetration testing tools, also a bunch of privacy tools. A community-driven project supported by Parrot Security.

# Installation

## Virtual Environment

## Docker Deployment

### Clone UniWA-CTF
1. Clone the Github repository, `git clone ....`
2. Switch to the downloaded directory, `cd ...`

### Run UniWA-CTF
`docker-compose up`

By default UniWA-CTF runs on port 8888. To access it just write `http://localhost:8888` on your browser. The default admin credentials are:

Username:`admin`

Password:`rootthebox`

# Tools

## Bruteforcers

- [John The Ripper](http://www.openwall.com/john/) - Swiss army knife of Password Cracking.
- [Zip2john](https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/src/zip2john.c) - Tool allowing to extract the hash of a password protected .zip file, so that can be cracked with John The Ripper.


## Cryptography

*Most of the crypto challenges don't require extra tools and they can be solved with the "CyberChef" tool which is integrated in the RootTheBox framework. However, we would like to also provide alternatives, so the user/player can learn about these and be ready to utilize them in future challenges.*

- [Dcode.fr](https://www.dcode.fr) - A website containing various tools that can be utilized for CTFs such as well-known cryptographic ciphers decoders, esoteric programming languages decoders, etc.  
- [Vigenère Cipher Codebreaker](https://www.mygeocachingprofile.com/codebreaker.vigenerecipher.aspx) - An online tool that can brute force the key of a Vigenère ciphertext, with great accuracy. 

## Exploits

*Tools used for solving exploitation challenges in boot2root VMs.* 

- [Metasploit](http://www.metasploit.com/) - Penetration testing framework containing various CVEs and payloads, with a user-friendly terminal based UI for easier use.
- [SearchSploit](https://www.exploit-db.com/searchsploit) - CLI Tool that allows offline searching for exploits contained in the exploit-db.

## Forensics

- [ExifTool](https://exiftool.org/) - A customizable set of Perl modules plus a full-featured CLI application for reading and writing meta information in a wide
variety of files.
- [Wireshark](https://www.wireshark.org/) - Widely-used network protocol analyzer.
- [Tcpflow](https://linux.die.net/man/1/tcpflow) - A CLI tool that captures data transmitted as part of TCP connections (flows), and stores the data in a way that is convenient for protocol analysis or debugging..

## Notekeeping

- [Cherrytree](https://www.giuspen.com/cherrytree/) - A hierarchical note taking application, featuring rich text and syntax highlighting, storing data in a single xml or sqlite file.
