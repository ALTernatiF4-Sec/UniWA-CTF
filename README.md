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
  - [Theoretical Background](#theoretical-background)
  - [Operating Systems](#operating-systems)
- [Installation](#installation)
  - [Virtual Environment](#virtual-environment)
  - [Docker Deployment](#docker-deployment)  
- [Tools](#tools)
  - [Bruteforcers](#bruteforcers)
  - [Cryptography](#cryptography)
  - [Exploits](#exploits)
  - [Forensics](#forensics)
  - [Notekeeping](#notekeeping)
  - [Steganography](#stegano)
  - [Web](#web)
  - [Reverse Engineering](#reverse-engineering)

# Introduction

## Who are we
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
Below we introduce some reading material for concepts that we think they are crucial for solving the challenges and the boot2root VMs.

### Cryptography
- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

### Reverse Engineering
- [Reverse Engineering](https://en.wikipedia.org/wiki/Reverse_engineering)
- [Assembly Language](https://en.wikipedia.org/wiki/Assembly_language)
- [Ext4 Filesystem Image](https://ext4.wiki.kernel.org/index.php/Ext4_Howto)

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
- [Code Obfuscation](https://en.wikipedia.org/wiki/Obfuscation_(software))

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
  ```
  # Example of basic usage:
  # First step is to extract the hash from your password protected .zip or .rar and save it to a .txt file
  ```
  ```console
  root@UniWA-CTF:~# zip2john foo.zip > hash.txt
  ```
  ```
  # Then you can crack the hash with john utilizing a ready-made wordlist from those that come out of the 
  # box with penetration testing distros
  ```
  ```console
  root@UniWA-CTF:~# john --format=zip --wordlist /usr/share/wordlists/rockyou.txt hash.txt
  ```

## Cryptography

*Most of the crypto challenges don't require extra tools and they can be solved with the "CyberChef" tool which is integrated in the RootTheBox framework. However, we would like to also provide alternatives, so the user/player can learn about these and be ready to utilize them in future challenges.*

- [Dcode.fr](https://www.dcode.fr) - A website containing various tools that can be utilized for CTFs such as well-known cryptographic ciphers decoders, esoteric programming languages decoders, etc.  
- [Vigenère Cipher Codebreaker](https://www.mygeocachingprofile.com/codebreaker.vigenerecipher.aspx) - An online tool that can brute force the key of a Vigenère ciphertext, with great accuracy. 

## Exploits

*Tools used for solving exploitation challenges in boot2root VMs.* 

- [Metasploit](http://www.metasploit.com/) - Penetration testing framework containing various CVEs and payloads, with a user-friendly terminal based UI for easier use.
- [SearchSploit](https://www.exploit-db.com/searchsploit) - CLI Tool that allows offline searching for exploits contained in the exploit-db.
  ```
  # Example of basic usage:
  # Type "searchsploit" and the name of the service that you are looking for exploits. For example, 
  # if we want to search for Django exploits we type:
  ```
  ```console
  root@UniWA-CTF:~# searchsploit django
  ---------------------------------------------- ---------------------------------
  Exploit Title                                 |  Path
  ---------------------------------------------- ---------------------------------
  Django 3.0 - Cross-Site Request Forgery Token | php/webapps/48303.txt
  Django < 3.0 < 2.2 < 1.11 - Account Hijack    | python/webapps/47879.md
  Django CMS 3.3.0 - Editor Snippet Persistent  | python/webapps/40129.txt
  ---------------------------------------------- ---------------------------------
  ```
  ```
  # The exploit files are usually accessible at /usr/share/exploitdb. Then you can access it with the
  # path provided at the standard output of the searchsploit tool at the "Path" column. An alternative
  # to that is to find yourself the path by using the "locate" command. For example if you wanted to 
  # find the "Django 3.0 - Cross-Site Request Forgery Token" exploit you would have to type:
  ```
  ```console
  root@UniWA-CTF:~# sudo updatedb
  root@UniWA-CTF:~# locate 48303.txt
  /usr/share/exploitdb/exploits/php/webapps/48303.txt
  ```


## Forensics

- [ExifTool](https://exiftool.org/) - A customizable set of Perl modules plus a full-featured CLI application for reading and writing meta information in a wide
variety of files.
- [Wireshark](https://www.wireshark.org/) - Widely-used network protocol analyzer.
- [Tcpflow](https://linux.die.net/man/1/tcpflow) - A CLI tool that captures data transmitted as part of TCP connections (flows), and stores the data in a way that is convenient for protocol analysis or debugging..

## Miscellaneous

- [JavaScript Obfuscator Tool](https://github.com/javascript-obfuscator/javascript-obfuscator) - This tool transforms your original JavaScript source code into a new representation that's harder to understand, copy, re-use and modify without authorization.
- [Deobfuscate Tool](https://github.com/beautify-web/js-beautify) - Beautify, unpack or deobfuscate JavaScript and HTML, make JSON/JSONP readable, etc.

## Notekeeping

- [Cherrytree](https://www.giuspen.com/cherrytree/) - A hierarchical note taking application, featuring rich text and syntax highlighting, storing data in a single xml or sqlite file.

## Reverse Engineering

- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - A software reverse engineering (SRE) framework.
- [Strings](https://en.wikipedia.org/wiki/Strings_(Unix)) - Binary Analysis Utility that finds and prints text strings embedded in binary files such as executables.

## Steganography
- [Steghide](http://steghide.sourceforge.net/) - A steganography program that is able to hide data in various kinds of image- and audio-files.
