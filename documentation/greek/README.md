<p align="center">
  <img src="/documentation/img/logo.png">
</p>
<p align="center"> <b>DOCUMENTATION</b> </p>

<p align="center">
  <a href="https://github.com/ALTernatiF4-Sec/UniWA-CTF/blob/master/README.md">English</a> |
  <span>Ελληνικά</span> |
  <a href="link/gia/rwssika">Pусский</a> 
</p>

### Contents
- [Εισαγωγή](#Εισαγωγή)
  - [Ποιοί είμαστε](#Ποιοί-είμαστε)
  - [Το εγχείρημα](#Το-εγχείρημα)
  - [Ελεύθερο Λογισμικό και Λογισμικό Ανοιχτού Κώδικα](#Ελεύθερο-Λογισμικό-και-Λογισμικό-Ανοιχτού-Κώδικα)
- [Ξεκινώντας](#Ξεκινώντας)
  - [Θεωρητικό Υπόβαθρο](#Θεωρητικό-Υπόβαθρο)
  - [Λειτουργικά Συστήματα](#Λειτουργικά-Συστήματα)
- [Εγκατάσταση](#Εγκατάσταση)
  - [Εικονικό Περιβάλλον](#Εικονικό-Περιβάλλον)
  - [Docker Deployment](#docker-deployment)  
- [Εργαλεία](#Εργαλεία)
  - [Bruteforcers](#bruteforcers)
  - [Κρυπτογραφία](#Κρυπτογραφία)
  - [Exploits](#exploits)
  - [Forensics](#forensics)
  - [Διαχείριση Σημειώσεων](#Διαχείριση-Σημειώσεων)
  - [Στεγανογραφία](#Στεγανογραφία)
  - [Web](#web)
  - [Αντίστροφη Μηχανική](#Αντίστροφη-Μηχανική)

# Εισαγωγή

## Ποιοί είμαστε
Η AlternatiF4 είναι μια ομάδα που δημιουργήθηκε από τους [mwm0s](https://github.com/mwmos) και [AlexS51](https://github.com/AlexS51). Είμαστε δύο τελειόφοιτοι φοιτητές του τμήματος Ηλεκτρολόγων και Ηλεκτρονικών Μηχανικών του Πανεπιστημίου Δυτικής Αττικής. Η ομάδα δημιουργήθηκε με σκοπό την συνεργασία κατά την συγγραφή της διπλωματικής μας εργασίας καθώς και να εκδοθεί το συγκεκριμένο πρότζεκτ κάτω από το συγκεκριμένο label. Επίσης θα μας ήταν ευχάριστο το να επικοινωνήσει μαζί μας κόσμος που ενδιαφέρεται για το γνωστικό πεδίο της Ασφάλειας Υ/Σ και των CTFs, καθώς είναι στους στόχους μας να συμμετάσχουμε σε CTF challenges σε ανταγωνιστικό επίπεδο. 
 
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

## Το εγχείρημα
Το UniWA-CTF είναι η διπλωματική μας εργασία. Πρόκειται για ένα φιλικό σε αρχάριους CTF challenge, σχεδιασμένο για να εισάγει τους φοιτητές (ή οποιονδήποτε το χρησιμοποιεί) σε διάφορες ορολογίες και τεχνικές που χρησιμοποιούνται στο πεδίο της Κυβερνοασφάλειας, από την σκοπιά του επιτιθέμενου. Για να επιτευχθεί αυτό χρησιμοποιήσαμε το [RootTheBox](https://github.com/moloch--/RootTheBox) engine, το οποίο παρέχει στον διαχειριστή ένα απλό στην χρήση GUI, επιτρέπει στον χρήστη να χρησιμοποιήσει μια πλειάδα θεμάτων, έχει ενσωματωμένο το εργαλείο CyberChef, ενώ τέλος περιέχει κάποια στοιχεία Gamification τα οποία κάνουν την εμπειρία πιο ευχάριστη.


## Ελεύθερο Λογισμικό και Λογισμικό Ανοιχτού Κώδικα
Για τη δημιουργία της διπλωματικής χρησιμοποιήθηκε αποκλειστικά Ελεύθερο Λογισμικό και Λογισμικό Ανοιχτού Κώδικα (ΕΛΛΑΚ). Η απόφαση αυτή βασίστηκε το γεγονός ότι η βοηθηθήκαμε πάρα πολύ από την κοινότητα του ΕΛΛΑΚ. Επίσης τις περισσότερες φορές αυτό το είδος λογισμικού είναι δωρεάν, αυτό βοηθάει όχι μόνο εμάς σαν developers αλλά και τον τελικό χρήστη, καθώς δεν υπάρχει η ανάγκη αγοράς κάποιας άδειας λογισμικού για να χρησιμοποιήσει, να κλωνοποιήσει ή να προσφέρει στο πρότζεκτ.   

# Ξεκινώντας

## Θεωρητικό Υπόβαθρο
Παρακάτω παραθέτονται κάποιες πηγές για θέματα στα οποία θεωρούμε ότι ο τελικός χρήστης πρέπει να έχει κάποια οικειότητα έτσι ώστε να ξεκινήσει να λύνει τα challenges και τα boot2root VMs.

### Κρυπτογραφία
- [Κώδικας του Καίσαρα](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Αλγόριθμος κρυπτογράφησης Vigenère](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

### Αντίστροφη Μηχανική
- [Αντίστροφη Μηχανική](https://en.wikipedia.org/wiki/Reverse_engineering)
- [Γλώσσα Assembly](https://en.wikipedia.org/wiki/Assembly_language)
- [Εικόνα Συστήματος Αρχείων Ext4](https://ext4.wiki.kernel.org/index.php/Ext4_Howto)

### Forensics
- [Exif](https://en.wikipedia.org/wiki/Exif)
- [pcap](https://en.wikipedia.org/wiki/Pcap)

### Web
- [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection)

### OSINT

### Διάφορα
- [Εσωτερικές Γλώσσες Προγραμματισμού](https://en.wikipedia.org/wiki/Esoteric_programming_language)
- [Magic Bytes](https://en.wikipedia.org/wiki/List_of_file_signatures)
- [Επίθεση Λεξικού](https://en.wikipedia.org/wiki/Dictionary_attack)
- [Code Obfuscation](https://en.wikipedia.org/wiki/Obfuscation_(software))

## Λειτουργικά Συστήματα

*Συνιστούμε να χρησιμοποιήσετε μια εξειδικευμένη διανομή GNU/Linux για την λύση των challenges. Παρότι είναι εφικτό να χρησιμοποιήσετε οποιοδήποτε λειτουργικό της αρεσκείας σας, πολλά από τα προτεινόμενα εργαλεία έρχονται προεγκατεστημένα και έτοιμα προς χρήση με τις παρακάτω διανομές, έτσι ώστε να ξεκινήσετε το hacking κατ'ευθείαν μετά από την επιτυχή εγκατάσταση κάποιας από αυτής μέσα σε μια εικονική μηχανη.*

- [BlackArch](https://blackarch.org/) - An Arch Linux-based distribution backed by a community of volunteers.
- [Kali Linux](https://www.kali.org/) - A Debian-based distribution maintained and funded by Offensive Security.
- [Parrot OS](https://www.parrotsec.org/) - A Debian-based distribution which includes, except the penetration testing tools, also a bunch of privacy tools. A community-driven project supported by Parrot Security.

# Εγκατάσταση

## Εικονικό Περιβάλλον
Οι εικονικές μηχανές μας έχουν δημιουργηθεί αξιοποιώντας το λογσιμικό [Oracle VM VirtualBox](https://www.virtualbox.org/). Η εγκατάσταση του είναι μια απλή διαδικασία η οποία περιγράφεται εκτενώς στην ιστοσελίδα του. Παρακάτω παραθέτουμε οδηγίες για την εισαγωγή των μηχανών μας στο περιβάλλον του VirtualBox.

- Βήμα 1: Ξεκινήστε το VirtualBox και πατήστε Ctrl+H.
- Βήμα 2: Κάντε κλικ στο κουμπί "Create" και στη συνέχεια κλείστε το παράθυρο.
- Βήμα 3: Πατήστε Ctrl+I.
- Βήμα 4: Στην φόρμα "File" μπορείτε να πληκτρολογήσετε την διαδρομή της εικονικής μηχανής την οποία επιθυμείτε να εισάγετε ή κάντε κλικ στο κουμπί στην δεξιά πλευρά.
- Βήμα 5: Κάντε κλικ στο κουμπί "Next" και στη συνέχεια "Import".
- Βήμα 6: Κάντε δεξί κλικ στην εικονική μηχανή και επιλέξτε "Settings".
- Βήμα 7: Κάντε κλικ στην καρτέλα "Network" και σιγουρευτείτε ότι ο Network Adapter είναι στην επιλογή "Host-only Adapter".

## Docker Deployment

### Clone UniWA-CTF
1. Clone the Github repository, `git clone ....`
2. Switch to the downloaded directory, `cd ...`

### Run UniWA-CTF
`docker-compose up`

By default UniWA-CTF runs on port 8888. To access it just write `http://localhost:8888` on your browser. The default admin credentials are:

Username:`admin`

Password:`rootthebox`

# Εργαλεία

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

## Κρυπτογραφία

*Οι περισσότερες από τις προκλήσεις με θέμα την κρυπτογραφία δεν χρειάζονται επιπλέον εργαλεία και μπορούν να λυθούν αξιοποιώντας το εργαλείο "CyberChef" το οποίο είναι ενσωματωμένο στο RootTheBox. Παρ' όλα αυτά παρέχουμε και κάποια εναλλακτικά εργαλεία με τα οποία θεωρούμε ότι είναι καλό να υπάρχει κάποια οικειότητα.*

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
- [Steghide](http://steghide.sourceforge.net/) - A steganography program that is able to hide data in various kinds of image- and audio-files.
- [Tcpflow](https://linux.die.net/man/1/tcpflow) - A CLI tool that captures data transmitted as part of TCP connections (flows), and stores the data in a way that is convenient for protocol analysis or debugging.
- [Wireshark](https://www.wireshark.org/) - Widely-used network protocol analyzer.

## Διάφορα

- [JavaScript Obfuscator Tool](https://github.com/javascript-obfuscator/javascript-obfuscator) - This tool transforms your original JavaScript source code into a new representation that's harder to understand, copy, re-use and modify without authorization.
- [Deobfuscate Tool](https://github.com/beautify-web/js-beautify) - Beautify, unpack or deobfuscate JavaScript and HTML, make JSON/JSONP readable, etc.

## Διαχείριση Σημειώσεων 

- [Cherrytree](https://www.giuspen.com/cherrytree/) - A hierarchical note taking application, featuring rich text and syntax highlighting, storing data in a single xml or sqlite file.

## Αντίστροφη Μηχανική

- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - A software reverse engineering (SRE) framework.
- [Strings](https://en.wikipedia.org/wiki/Strings_(Unix)) - Binary Analysis Utility that finds and prints text strings embedded in binary files such as executables.
