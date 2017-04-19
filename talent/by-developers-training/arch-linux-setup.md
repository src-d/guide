# Basics<br>
1. What is Linux? (documentation needed)<br>
2. What components does a laptop have? (documentation needed)<br>
3. What software does a laptop include?<br>
4. Bios (documentation needed)<br>
5. Boot Manager (documentation needed)<br>
6. Operating System (documentation needed)<br>
# Installing Antergos
1. Antergos Explanation<br>
2. Insert USB key into your laptop<br>
3. Turn your laptop on<br>
4. As soon as the screen lights up start hitting F2 until you get a green screen with the BIOS<br>
5. Click on `Secure Boot`<br>
6. Click on `Disable` and then hit `Apply` - (explain what it’s for)<br>
7. Click Exit and shut the laptop down<br>
8. Turn computer back on and start hitting F12 until you get the Boot Mode<br>
9. Select UEFI {whatever}<br>
10. Now you are in the Boot Manager, it will select the first option (Antergos) after a few seconds<br>
11. You will get a Live version of the Antergos Distribution, which is running from the USB-key<br>
12. Explain what Live versions are<br>
13. Click on the down-facing arrow on the top right corner<br>
14. Now click on the WiFi icon and connect to the source{d} WiFi network. The keyboard will be setup on American layout, take it into account when inserting the password<br>
15. You need to wait a few minutes because Cnchi needs to update. You will get a notification on the top right corner once this is done.<br>
16. Explain what Cnchi is<br>
17. Click on `Install It`<br>
18. Select English as your language<br>
19. If all items are marked in the next screen click the `>` in the top right<br>
20. Select your geography<br>
21. Select your time-zone<br>
22. Select your keyboard layout<br>
23. Select Xfce<br>
24. Explain Xfce<br>
25. Enable the following options:<br>
 25.1 Arch User Repository (AUR) Support<br>
  25.1.1 Explain what AUR is<br>
 25.2 Bluetooth<br>
 25.3 Decide if you want Chromium and/or Firefox<br>
  25.3.1 Explain what Chromium is<br>
 25.4 Flash plugins<br>
 25.5 Kernel (LTS version)<br>
  25.5.1 Explain what an LTS Kernel is<br>
 25.6 LibreOffice<br>
 25.7 Printing Support<br>
26. Select `Erase disk and install Antergos`<br>
27. Explain how a hard drive works (SD[A], NVM, etc.), partitions, etc.<br>
28. Choose the following options:<br>
 28.1 In `Select drive` select `Unknown [512 GB](/dev/nvme0n1)`<br>
 28.2 In `Bootloader` select `Grub2`<br>
 28.3 In `Device` select `Unknown [512 GB](/dev/nvme0n1)`<br>
29. In the summary page click the `>` in the top right<br>
30. Fill out your details and choose for it to `Require your password to sign in`. Once you are done hit `Save`<br>
31. Now it will download and install all packages it needs<br>
32. When asked if you want to restart select `Yes`<br>
33. Remove USB-Key once your laptop has shut down<br>
# Setting up 
1. When your laptop boots up, you will be given two options, but Antergos will be chosen automatically after a few seconds<br>
2. After that you will see the display manager, which you will remove soon. Here you need to hit ctrl+fn+alt+F2 to go to the Shell 2
3. Explain shells<br>
4. You will be shown a black console where you need to login with the credentials you set up before in step 26.<br>
## As you’ve noticed, the font seems very small. We’re going to fix that now.<br>
1. First we’re going to to use the package manager to install the Terminus font. Type `yaourt terminus` in the shell and select `community/terminus-font` by typing the number assigned to it and hitting enter.<br>
2. Once you do this you will see a prompt `[sudo] password for {user}`. This is asking you for your password to allow the installation.<br>
3. Once you do this you will be asked to confirm your willingness to install Terminus. You can do this by either hitting enter (since the `Y` is in capital letters and hence default) or by typing `y` and then hitting enter.<br>
4. The installation of Terminus is now complete. Now we need to apply the font. In order to do this type `sudo nano /etc/vconsole.conf` and hit enter.<br>
5. You will be asked for your password.<br>
6. Explain what the vconsole.conf file is for<br>
7. One line under the `KEYMAP=es` write `FONT=ter-232n` and exit the editor by hitting ctrl+x. You will be asked if you want to save before exiting, which you can do by typing `y` and hitting enter.<br>
8. Now you need to reboot for the changes to be applied. For this type `reboot` in the console and hit enter.<br>
9. Login again, you can already see the font being bigger.<br>
## Removing the display manager<br>
1. Explain Package Managers<br>
2. Explain what a Display Manager is<br>
3. Type `pacman -R lightdm light-locker lightdm-webkit2-greeter light-locker-settings` and hit enter to uninstall the Display Manager. You will be asked for your password.<br>
4. Now you need to reboot your laptop again to check if the display manager is still there.<br>
5. Login again<br>
## Setup a pagination mechanism.<br>
1. Explain pagination?<br>
2. To do this type `nano .bashrc` and hit enter.<br>
3. Explain what `.bashrc` is<br>
4. In the file add a line in the bottom and write `PAGER=less` and close the file.<br>
5. Explain environment variables<br>
## Installing the i3 windows manager<br>
1. i3 documentation<br>
2. Type `yaourt --pager i3-wm` in the console and install it.<br>
## Configuring i3 for it to boot with X<br>
1. What is X?<br>
2. For this type `nano .xinitrc` and add type in the first line `#!/bin/sh`.<br>
3. Explain `#!/bin/sh`<br>
4. Explain `.xinitrc`<br>
5. In the next line write “exec i3” and close the file.<br>
6. Now type `startx` and hit enter to start X<br>
7. Follow the tutorial of the modal window:<br>
8. Hit enter to select `Yes` to initialize the setup file<br>
9. Hit enter to select the Windows key as `cmd`<br>
10. Now exit X by hitting ctrl+alt+backspace.<br>
## Fixing resolution in X
1. To fix the resolution of X we need to change something on .xinitrc. Type `nano .xinitrc` in the console, add a line after the first one and type `export GDK_SCALE=2`, add yet another line after that that says `export GDK_DPI_SCALE=1` and add a third line after that and type `xrandr --output eDP1 --dpi 216 --auto`. Now close the file.<br>
2. xrandr explanation
3. export explanation
4. Now start X again by typing `startx` and hitting enter<br>
## Installing Chrome<br>
1. Once inside of X launch the console by hitting cmd+enter<br>
2. Type `yaourt google-chrome` and install it. When asked if you want to `Edit PKGBUILD ?` type `n` to reject. <br>
3. When asked if you want to `Edit google-chrome.install ?` type `n` again to reject.<br>
4. When asked if you want to `Continue building google-chrome ?` hit enter to confirm (`Y` is in capital letter meaning it’s the default).<br>
5. When asked if you want to `Continue installing google-chrome ?` hit enter to confirm (`Y` is in capital letter meaning it’s the default).<br>
6. When asked if you want to `Proceed with installation ?` hit enter to select yes (`Y` is in capital letter meaning it’s the default).<br>
7. To launch it type `google-chrome-stable` in the console and hit enter.<br>
## Installing dmenu<br>
1. For an easier to launch programs install dmenu. Once installed it will work by hitting cmd+d and then typing the name of the program you want to launch.<br>
2. Install dmenu using the same method we've used in the previous examples<br>
## Installing i3status<br>
1. I3 Status is a bottom bar for X that will display relevant information.<br>
2. Install i3status<br>
3. Hit cmd+shift+r to refresh X so that it gets applied.<br>
4. Explain how to customize it further<br>
## How to setup workspaces for bootup<br>
1. To change from one workspace to another you just need to hit cmd+{number_of_workspace}.<br>
2. To open a new workspace you just need to hit cmd + the number of the workspace you want to create.<br>
3. To move a window to another workspace hit cmd+shift+{number_of_workspace}.<br>
4. You can open several windows in a workspace.<br>
5. To rearrange them hit cmd+shift+arrow.<br>
6. To resize a window first hit cmd+r to enter resize mode and now use the arrows to resize the window. This only works when several windows are open in the same workspace.<br>
7. You can set up workplaces with concrete programs to launch upon starting X.<br>
## How to use USB-keys<br>
1. Explain mounting<br>
2. Insert a USB-key into your laptop.<br>
3. Now we need to check the name that the laptop has given your USB-key. For doing this you need to screen print a file with the information about all the partitions connected to the laptop. Type `cat /proc/partitions` and hit enter. Explain `cat`. Your USB-keys will be labeled `sda`, `sdb`, etc. in order of having connected them.<br>
4. If you want more information on your partitions, write `df -h`.<br>
5. Explain `df`<br>
6. If you want to make sure you are mounting the right USB-key, write `journal -e` to see the log of the system and see if one of the partitions shown before has been connected when. That will tell you which partition is your USB-key.<br>
7. Explain `journal`<br>
8. Now we need to mount it in a folder. For that we need to create a folder where you will mount USBs by typing `mkdir /mnt/usb`.<br>
9. Explain `mnt`<br>
10. Explain `mkdir`<br>
8. We’re going to create an alias by editing the `.bashrc` file in order to make make a simpler way of mounting keys.<br>
9. Type `nano .bashrc` and hit enter<br>
10. In the last line type `alias mount-all=’sudo mount -o gid=users, fmask=113,dmask=002’`.<br>
11. Close the file and close X by tping `exit` and hitting enter.<br>
12. Open a new terminal<br>
13. Type `mount-all /dev/sda1 /mnt/usb`<br>
14. Now you can type `ls /mnt/usb` to view the content of the USB-key<br>
15. You can never disconnect a USB-key without unmounting. To unmount a USB-key type `sudo umount /mnt/usb`. You need to be outside of the folder for this to work. To go to the home folder you can either type `~` or `$HOME` and hit enter.<br>
16. To see if it’s been correctly unmounted type `cat /proc/partitions` and hit enter.<br>
## Setting up WiFi Networks<br>
1. Run nmtui<br>
2. Select `Activate a Connection` and choose which WiFi you want to connect to/<br>
## Setup a monitor<br>
1. Option:<br>
 1.1 Create a new file for your monitor configurations by typing `nano ~/.config/i3/screen.sh`<br>
 1.2 Type the following code into it:<br>
  ```
   #!/usr/bin/env bash

  IN="eDP1"
  EXT="DP1"

  xrandr > /dev/null
  xrandr | grep "$EXT disconnected" > /dev/null

  if [ $? -eq 0 ]; then
    xrandr --output $IN --dpi 216 --primary --auto --output $EXT --off
    #xmodmap -e "pointer = 1 2 3" 2> /dev/null
    echo "-> Laptop mode"
  else
    xrandr --output $IN --auto --output $EXT --primary --dpi 96 --auto
    #xmodmap -e "pointer = 3 2 1" 2> /dev/null
    echo "-> Desktop mode"
  fi
  ```
 1.3 Open `~/.config/i3/config` and add `bindsym $mod+Shift+s exec ~/.config/i3/screen.sh`<br>
 1.4 Restart X<br>
 1.5 In order to detect a screen use cmd+shift+s<br>
2. Option (less optimal):<br>
 2.1 Install lxrandr<br>
 2.2 Execute lxrandr and turn the screen on. You can select the desired resolution.<br>
## Setup function keys<br>
1. Explain i3 config file<br>
2. Edit the i3 config file by typing `nano ~/.config/i3/config` and adding at the end of the file:<br>
```
# Multimedia Keys
# increase volume
bindsym XF86AudioRaiseVolume exec amixer -q set Master 5%+ unmute
# decrease volume
bindsym XF86AudioLowerVolume exec amixer -q set Master 5%- unmute
# mute volume
bindsym XF86AudioMute exec amixer -q set Master mute
# pause / play / next / previous
bindsym XF86AudioPlay exec playerctl play-pause
bindsym XF86AudioNext exec playerctl next
bindsym XF86AudioPrev exec playerctl previous
# increase screen brightness
bindsym XF86MonBrightnessUp exec xbacklight -inc 20
# decrease screen brightness
bindsym XF86MonBrightnessDown exec xbacklight -dec 20
```
3. Close the file<br>
4. Refresh X<br>
