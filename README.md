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
  - [Directory Enumeration](#directory-enumeration)
  - [Exploits](#exploits)
  - [Forensics](#forensics)
  - [Notekeeping](#notekeeping)
  - [Miscellaneous](#miscellaneous)
  - [Reverse Engineering](#reverse-engineering)
  - [Web](#web)

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
- [Base64](https://en.wikipedia.org/wiki/Base64)
- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)
- [Substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher)

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
4. There is an issue that doesn't allow our logo to appear. The workaround that works is to delete the downloaded repo
   and re-compose it.
   ```console
   root@UniWA-CTF:~# cd ..
   root@UniWA-CTF:~# rm -r UniWA-CTF
   root@UniWA-CTF:~# git clone https://github.com/ALTernatiF4-Sec/UniWA-CTF.git
   root@UniWA-CTF:~# cd UniWA-CTF
   root@UniWA-CTF:~# docker-compose up
   ```
   
### Run UniWA-CTF

By default UniWA-CTF runs on port 8888. To access it just write `http://localhost:8888` (or the IP of the machine if you are using a VM) on your browser. The default admin credentials are:

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
- [base64](https://linux.die.net/man/1/base64) - Base64 encode/decode data and print to standard output
  ```
  # Example of basic usage:
  # You can encode messages by piping the stdout to the base64 program
  ```
  ```console
  root@UniWA-CTF:~# echo "Hello World!" | base64
  SGVsbG8gV29ybGQhCg==
  ```
  ```
  # You can decode messages with the --decode option 
  ```
  ```console
  root@UniWA-CTF:~# echo "SGVsbG8gV29ybGQhCg==" | base64 --decode
  Hello World!
  ```

## Directory Enumeration

- [Dirb](http://dirb.sourceforge.net/) - A Web Content Scanner.It looks for existing (and/or hidden) Web Objects. It basically works by launching a dictionary based attack against a web server and analyzing the response.
  ```
  # Example of basic usage:
  # To scan the HTTP port (80) with the default dirb wordlist the syntax is the following
  ```
  ```console
  root@UniWA-CTF:~# dirb http://<IP ADDRESS>:80
  ```
  ```
  # To scan with a custom wordlist you have to type: 
  ```
  ```console
  root@UniWA-CTF:~# dirb http://<IP ADDRESS>:80 /path/to/the/wordlist
  ```
  ```
  # More options and info can be found in the manual page. You can read it by typing:
  ```
  ```console
  root@UniWA-CTF:~# man dirb
  ```
- [Dirbuster](https://owasp.org/projects/) - A multi threaded Java application designed to brute force directories and files names on web/application servers.
- [Gobuster](https://github.com/OJ/gobuster) - Directory/File, DNS and VHost busting tool written in Go.
  ```
  # Example of basic usage:
  # To scan the HTTP port (80) with the wordlist of your choice, you type the following:
  ```
  ```console
  root@UniWA-CTF:~# gobuster -u http://<IP ADDRESS>:80 -w /path/to/the/wordlist -o /path/to/your/output/file
  ```
  ```
  # More options and info can be found in the help page. You can read it by typing:
  ```
  ```console
  root@UniWA-CTF:~# gobuster --help
  ```

## Exploits

*Tools used for solving exploitation challenges in boot2root VMs.*

- [GTFObins](https://gtfobins.github.io/) - A curated list of Unix binaries that can be exploited by an attacker to bypass local security restrictions.
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

- [ExifTool](https://exiftool.org/) - A customizable set of Perl modules plus a full-featured CLI application for reading and writing meta information in a wide.
  ```
  # Example of basic usage:
  ```
  ```console
  root@UniWA-CTF:~# exiftool /path/to/your/file
  ```
variety of files.
- [Steghide](http://steghide.sourceforge.net/) - A steganography program that is able to hide data in various kinds of image- and audio-files.
  ```
  # Example of basic usage:
  # This command will embed the file secret.txt in the cover file picture.jpg. 
  ```
  ```console
  root@UniWA-CTF:~# steghide embed -cf picture.jpg -ef secret.txt
  Enter passphrase:
  Re-Enter passphrase:
  embedding "secret.txt" in "picture.jpg"... done
  ```
  ```
  # After you have embedded your secret data as shown above you can send the file picture.jpg to the person who should
  # receive the secret message. The receiver has to use steghide in the following way: 
  ```
  ```console
  root@UniWA-CTF:~# steghide extract -sf picture.jpg
  Enter passphrase:
  wrote extracted data to "secret.txt".
  ```
  ```
  # If the supplied passphrase is correct, the contents of the original file secret.txt will be extracted from the stego 
  # file picture.jpg and saved in the current directory.
  # More options and info can be found in the manual page. You can read it by typing:
  ```
  ```console
  root@UniWA-CTF:~# man steghide
  ```
  
- [Tcpflow](https://linux.die.net/man/1/tcpflow) - A CLI tool that captures data transmitted as part of TCP connections (flows), and stores the data in a way that is convenient for protocol analysis or debugging.
  ```
  # Example of basic usage:
  ```
  ```console
  root@UniWA-CTF:~# tcpflow -r foo.pcapng
  ```
  ```
  # Stdout won't give something but if you ls the contents of your folder you will see that
  # there are some new folders and files that you can enumerate.
  ```
- [Wireshark](https://www.wireshark.org/) - Widely-used network protocol analyzer.


## Miscellaneous

- [JavaScript Obfuscator Tool](https://wtools.io/javascript-obfuscator) - Online tool that transforms your original JavaScript source code into a new representation that's harder to understand, copy, re-use and modify without authorization.
  ```
  # Example of basic usage:
  # Type your JavaScript code to the obfuscator tool.
  ```
  ```console
  // Paste your JavaScript code here
  function hi() {
  console.log("Hello World!");
  }
  hi();
  ```
  ```
  # Click the "Obfuscate" button.
  # The result will be something similar to the one below.
  ```
  ```console
  eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e) {return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 0(){4.3("2 1!")}0();',6,6,'hi|World|Hello|log|console|function'.split('|'),0,{}))
  ```

- [Deobfuscate Tool](https://github.com/beautify-web/js-beautify) - Beautify, unpack or deobfuscate JavaScript and HTML, make JSON/JSONP readable, etc.
  ```
  # This tool deobfuscate Javascript code. Type the obfuscate code of above example, then click Ctrl+Enter and as result will be taken the source code.
  ```

## Notekeeping

- [Cherrytree](https://www.giuspen.com/cherrytree/) - A hierarchical note taking application, featuring rich text and syntax highlighting, storing data in a single xml or sqlite file.

## Reverse Engineering

- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - A software reverse engineering (SRE) framework.
- [IDA Freeware](https://www.hex-rays.com/products/ida/support/download_freeware/) - The IDA Disassembler and Debugger is an interactive, programmable, extensible, multi-processor disassembler hosted on Windows, Linux, or Mac OS X. IDA has become the de-facto standard for the analysis of hostile code, vulnerability research and commercial-off-the-shelf validation.
- [File (command)](https://en.wikipedia.org/wiki/File_(command)) - The file command is a standard program of Unix and Unix-like operating systems for recognizing the type of data contained in a computer file.
  ```
  # Example of basic usage:
  ```
  ```console
  root@UniWA-CTF:~# file example1.c 
  example1.c: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux
  x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=62e095619860c76a7fc2fa6a5706e93a1e901403, not stripped
  ```
- [GDB](https://www.gnu.org/software/gdb/) - The GNU Project Debugger.
  ```
  # Example of basic usage:
  ```
  ```console
  root@UniWA-CTF:~# gdb example1.c
  GNU gdb (Ubuntu 8.1-0ubuntu3.2) 8.1.0.20180409-git
  Copyright (C) 2018 Free Software Foundation, Inc.
  License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
  This is free software: you are free to change and redistribute it.
  There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
  and "show warranty" for details.
  This GDB was configured as "x86_64-linux-gnu".
  Type "show configuration" for configuration details.
  For bug reporting instructions, please see:
  <http://www.gnu.org/software/gdb/bugs/>.
  Find the GDB manual and other documentation resources online at:
  <http://www.gnu.org/software/gdb/documentation/>.
  For help, type "help".
  Type "apropos word" to search for commands related to "word"...
  Reading symbols from example1.c...(no debugging symbols found)...done.
  (gdb) run
  Starting program: /home/ubusrv/example1.c 
  Hello World [Inferior 1 (process 7142) exited normally]
  ```
  ```
  # To run the program type 'run' and if the debugger dont found errors on source code, the program will be executed normally.
  ```
- [Strings](https://en.wikipedia.org/wiki/Strings_(Unix)) - Binary Analysis Utility that finds and prints text strings embedded in binary files such as executables.
  ```
  # Example of basic usage:
  ```
  ```console
  root@UniWA-CTF:~# strings example1.c
  /lib64/ld-linux-x86-64.so.2
  libc.so.6
  printf
  __cxa_finalize
  __libc_start_main
  GLIBC_2.2.5
  _ITM_deregisterTMCloneTable
  __gmon_start__
  _ITM_registerTMCloneTable
  AWAVI
  AUATL
  []A\A]A^A_
  Hello World
  ;*3$"
  GCC: (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0
  crtstuff.c
  deregister_tm_clones
  __do_global_dtors_aux
  completed.7698
  __do_global_dtors_aux_fini_array_entry
  frame_dummy
  __frame_dummy_init_array_entry
  example.c
  __FRAME_END__
  __init_array_end
  ...
  ```
  ```
