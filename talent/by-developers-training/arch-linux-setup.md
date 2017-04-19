# Basics<br>
1. What is Linux? (documentation needed)<br>
2. What components does a laptop have? (documentation needed)<br>
3. What software does a laptop include?<br>
4. Bios (documentation needed)<br>
5. Boot Manager (documentation needed)<br>
6. Operating System (documentation needed)<br>
# Installing Antergos
1. Antergos Explanation
2. Insert USB key into your laptop<br>
3. Turn your laptop on<br>
4. As soon as the screen lights up start hitting F2 until you get a green screen with the BIOS<br>
5. Click on “Secure Boot”<br>
6. Click on “Disable” and then hit “Apply” - (explain what it’s for)<br>
7. Click Exit and shut the laptop down<br>
8. Turn computer back on and start hitting F12 until you get the Boot Mode<br>
9. Select UEFI {whatever}<br>
10. Now you are in the Boot Manager, it will select the first option (Antergos) after a few seconds<br>
11. You will get a Live version of the Antergos Distribution, which is running from the USB-key - explain what Live versions are for<br>
12. Click on the down-facing arrow on the top right corner<br>
13. Now click on the WiFi icon and connect to the source{d} WiFi network - the keyboard will be setup on American layout, take it into account when inserting the password<br>
14. You need to wait a few minutes because Cnchi needs to update. You will get a notification on the top right corner once this is done.<br>
15. Click on “Install It”<br>
16. Select English as your language<br>
17. If all items are marked in the next screen click the “>” in the top right<br>
18. Select your geography<br>
19. Select your time-zone<br>
20. Select your keyboard layout<br>
21. Select Xfce - explain why<br>
22. Enable the following options:<br>
 22.1 Arch User Repository (AUR) Support - explain what it is<br>
 22.2 Bluetooth<br>
 22.3 Decide if you want Chromium and/or Firefox - documentation on Chromium<br>
 22.4 Flash plugins<br>
 22.5 Kernel (LTS version) - explain what it is<br>
 22.6 LibreOffice<br>
 22.7 Printing Support<br>
23. Select “Erase disk and install Antergos” - explain how a hard drive works (SD[A], NVM, etc.), partitions, etc.<br>
24. Choose the following options:<br>
 24.1 In “Select drive” select “Unknown [512 GB](/dev/nvme0n1)”<br>
 24.2 In “Bootloader” select “Grub2”<br>
 24.3 In “Device” select “Unknown [512 GB](/dev/nvme0n1)”<br>
25. In the summary page click the “>” in the top right<br>
26. Fill out your details and choose for it to “Require your password to sign in”. Once you are done hit “Save”<br>
27. Now it will download and install all packages it needs<br>
28. When asked if you want to restart select “Yes”<br>
29. Remove USB-Key once your laptop has shut down<br>
# Setting up 
1. When your laptop boots up, you will be given two options, but Antergos will be chosen automatically after a few seconds<br>
2. After that you will see the display manager, which you will remove soon. Here you need to hit ctrl+fn+alt+F2 to go to the Shell 2 - explain shells<br>
3. You will be shown a black console where you need to login with the credentials you set up before in step 26.<br>
## As you’ve noticed, the font seems very small. We’re going to fix that now.<br>
1. First we’re going to to use the package manager to install the Terminus font. Type `yaourt terminus` in the shell and select “community/terminus-font” by typing the number assigned to it and hitting enter.<br>
2. Once you do this you will see a prompt “[sudo] password for {user}”. This is asking you for your password to allow the installation.<br>
3. Once you do this you will be asked to confirm your willingness to install Terminus. You can do this by either hitting enter (since the “Y” is in capital letters and hence default) or by typing “y” and then hitting enter.<br>
4. The installation of Terminus is now complete. Now we need to apply the font. In order to do this type “sudo nano /etc/vconsole.conf” and hit enter. You will be asked for your password. - explain what the vconsole.conf file is for<br>
5. One line under the “KEYMAP=es” write “FONT=ter-232n” and exit the editor by hitting ctrl+x. You will be asked if you want to save before exiting, which you can do by hitting “y” and hitting enter.<br>
6. Now you need to reboot for the changes to be applied. For this type “reboot” in the console and hit enter.<br>
7. Login again, you can already see the font being bigger.<br>
## Removing the display manager<br>
1. Explain Package Managers
2. Type “pacman -R lightdm light-locker lightdm-webkit2-greeter light-locker-settings” and hit enter. You will be asked for your password.<br>
3. Now you need to reboot your laptop again to check if the display manager is still there.<br>
4. Login again<br>
## Setup a pagination mechanism.<br>
1. Why do we need paination?<br>
2. To do this type “nano .bashrc” and hit enter. Explain what “.bashrc” is<br>
3. In the file add a line in the bottom and write “PAGER=less” and close the file. - Explain environment variables<br>
## Installing the i3 windows manager<br>
1. i3 documentation<br>
2. Type “yaourt --pager i3-wm” in the console and install it. Explain pagination<br>
## Configuring i3 for it to boot with X<br>
1. What is X?
2. For this type “nano .xinitrc” and add type in the first line “#!/bin/sh”. Explain #!/bin/sh and .xinitrc<br>
3. In the next line write “exec i3” and close the file.<br>
4. Now type “startx” and hit enter to start X<br>
5. Follow the tutorial of the modal window:<br>
6. Hit enter to select “Yes” to initialize the setup file<br>
7. Hit enter to select the Windows key as “cmd”<br>
8. Now exit X by hitting ctrl+alt+backspace.<br>
## Fixing resolution in X
1. To fix the resolution of X we need to change something on .xinitrc. Type “nano .xinitrc” in the console, add a line after the first one and type “export GDK_SCALE=2”, add yet another line after that that says “export GDK_DPI_SCALE=1” and add a third line after that and type “xrandr --output eDP1 --dpi 216 --auto”. Now close the file.<br>
2. xrandr explanation
3. export explanation
4. Now start X again by typing “startx” and hitting enter<br>
## Installing Chrome<br>
1. Once inside of X launch the console by hitting cmd+enter<br>
2. Type “yaourt google-chrome” and install it. When asked if you want to “Edit PKGBUILD ?” type “n” to say no. When asked if you want to “Edit google-chrome.install ?” type “n” again to say no. When asked if you want to “Continue building google-chrome ?” hit enter to select yes (“Y” is in capital letter meaning it’s the default). When asked if you want to “Continue installing google-chrome ?” hit enter to select yes (“Y” is in capital letter meaning it’s the default). When asked if you want to “Proceed with installation ?” hit enter to select yes (“Y” is in capital letter meaning it’s the default).<br>
3. To launch it type “google-chrome-stable” in the console and hit enter.<br>
## Installing dmenu<br>
1. For an easier to launch programs install dmenu. Once installed it will work by hitting cmd+d and then typing the name of the program you want to launch.<br>
2. Install dmenu using the same method we've used in the previous examples
## Installing i3status<br>
1. I3 Status is a bottom bar for X that will display relevant information.<br>
2. Install i3status<br>
3. Hit cmd+shift+r to refresh X so that it gets applied.<br>
4. Explain how to customize it further<br>
## How to setup workspaces for bootup<br>
1. To change from one workspace to another you just need to hit cmd+{number_of_workspace}. 
2. To open a new workspace you just need to hit cmd + the number of the workspace you want to create.<br>
3. To move a window to another workspace hit cmd+shift+{number_of_workspace}<br>
4. You can open several windows in a workspace. 
5. To rearrange them hit cmd+shift+arrow.<br>
6. To resize a window first hit cmd+r to enter resize mode and now use the arrows to resize the window. This only works when several windows are open in the same workspace<br>
7. You can set up workplaces with concrete programs to launch upon starting X
## How to use USB-keys<br>
1. Explain mounting<br>
2. Insert a USB-key into your laptop<br>
3. Now we need to check the name that the laptop has given your USB-key. For doing this you need to screen print a file with the information about all the partitions connected to the laptop. Type “cat /proc/partitions” and hit enter. Explain “cat”. Your USB-keys will be labeled sda, sdb, etc. in order of having connected them.<br>
4. If you want more information on your partitions, write “df -h” to get more information. Explain “df”<br>
5. If you want to make sure you are mounting the right USB-key, write “journal -e” to see the log of the system and see if one of the partitions shown before has been connected when. That will tell you which partition is your USB-key.<br>
6. Now we need to mount it in a folder. For that we need to create a folder where you will mount USBs by typing mkdir /mnt/{name_of_folder} (e.g. “usb”, “keys”, etc.)<br>
7. Explain “mnt”<br>
8. We’re going to create an alias by editing the “.bashrc” file in order to make make a simpler way of mounting keys.<br>
9. Type “nano .bashrc” and hit enter<br>
10. In the last line type “alias mount-all=’sudo mount -o gid=users, fmask=113,dmask=002’.<br>
11. Close the file and close X by tping exit and hitting enter.<br>
12. Open a new terminal<br>
13. Type “mount-all /dev/sda1 /mnt/{name_of_folder}”<br>
14. Now you can type “ls /mnt/llave” to view the content of the USB-key<br>
15. You can never disconnect a USB-key without unmounting. To unmount a USB-key type “sudo umount /mnt/{name_of_folder}. You need to be outside of the folder for this to work. To go to the home folder you can either type “~” or “$HOME” and hit enter.<br>
16. To see if it’s been correctly unmounted type “cat /proc/partitions” and hit enter.<br>
## Setting up WiFi Networks<br>
1. Run nmtui<br>
2. Select “Activate a Connection” and choose which WiFi you want to connect to/<br>
## Setup a monitor<br>
1. Install lxrandr<br>
2. Execute lxrandr and turn the screen on. You can select the desired resolution.<br>
## Setup function keys<br>
1. Explain i3 config file<br>
2. Edit the i3 config file by typing “nano ~/.config/i3/config” and adding at the end of the file:<br>
```
# Multimedia Keys<br>
# increase volume<br>
bindsym XF86AudioRaiseVolume exec amixer -q set Master 5%+ unmute<br>
# decrease volume<br>
bindsym XF86AudioLowerVolume exec amixer -q set Master 5%- unmute<br>
# mute volume<br>
bindsym XF86AudioMute exec amixer -q set Master mute<br>
# pause / play / next / previous<br>
bindsym XF86AudioPlay exec playerctl play-pause<br>
bindsym XF86AudioNext exec playerctl next<br>
bindsym XF86AudioPrev exec playerctl previous<br>
# increase screen brightness<br>
bindsym XF86MonBrightnessUp exec xbacklight -inc 20<br>
# decrease screen brightness<br>
bindsym XF86MonBrightnessDown exec xbacklight -dec 20<br>
```
3. Close the file<br>
4. Refresh X<br>
