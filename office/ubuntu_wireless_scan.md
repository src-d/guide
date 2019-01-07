How to scan over-the-air in Ubuntu using our MFP
================================================

We've got Samsung C480FW. Given the recent acquisition of Samsung Printers division by HP,
everybody expects HP to gradually drop support of Samsung printers. Thus they are likely to stop working
properly in future macOS and Linux versions. It sucks, and there are already problems with scanning on Mojave.
Anyway, here are the instructions how to scan on Ubuntu 18.04.

```
wget http://www.bchemnet.com/suldr/pool/debian/extra/su/suldr-keyring_2_all.deb
sudo dpkg -i suldr-keyring_2_all.deb
rm suldr-keyring_2_all.deb
echo "deb http://www.bchemnet.com/suldr/ debian extra" | sudo tee -a /etc/apt/sources.list.d/bchemnet.list
sudo apt update
sudo apt install suld-driver-4.01.17  # or any newer
cd  # empty args mean ~
sudo /opt/Samsung/mfp/bin/netdiscovery --all --scanner
# should output:
# ip: 192.168.1.51    slp: 0,0,0,0 snmp: 1,1,0 vendor: Samsung dsc: "C48x Series"
sudo usermod -G lp -a $(whoami)
```

Log out or restart to kill all your processes and make the `usermod` group change active.

That's it! Open "Simple Scan" and it should detect our office scanner.
