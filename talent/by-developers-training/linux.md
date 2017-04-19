What is Linux? (documentation needed)
What components does a laptop have? (documentation needed)
What software does a laptop include?
Bios (documentation needed)
Boot Manager (documentation needed)
Operating System (documentation needed)
Turn your computer on
Click on the top right settings icon
Click Shut Down
Insert USB key
Turn your laptop back on
As soon as the screen lights up start hitting F2 until you get a green screen with the BIOS
Click on “Secure Boot”
Click on “Disable” and then hit “Apply” - (explain what it’s for)
Click Exit and shut the laptop down
Turn computer back on and start hitting F12 until you get the Boot Mode
Select UEFI {whatever}
Now you are in the Boot Manager, it will select the first option (Antergos) after a few seconds
You will get a Live version of the Antergos Distribution, which is running from the USB-key - explain what Live version are for
Click on the down-facing arrow on the top right corner
Now click on the WiFi icon and connect to the source{d} WiFi network - the keyboard will be setup on American layout, take it into account when inserting the password
You need to wait a few minutes because Cnchi needs to update. You will get a notification on the top right corner once this is done.
Click on “Install It”
Select your language
If all items are marked in the next screen click the “>” in the top right
Select your geography
Select your time-zone
Select your keyboard layout
Select Xfce - explain why
Enable the following options:
 Arch User Repository (AUR) Support - explain what it is
Bluetooth
Decide if you want Chromium and/or Firefox - documentation on Chromium
Flash plugins
Kernel (LTS version) - explain what it is
LibreOffice
Printing Support
Select “Erase disk and install Antergos” - explain how a hard drive works (SD[A], NVM, etc.), partitions, etc.
Choose the following options:
In “Select drive” select “Unknown [512 GB](/dev/nvme0n1)”
In “Bootloader” select “Grub2”
In “Device” select “Unknown [512 GB](/dev/nvme0n1)”
In the summary page click the “>” in the top right
Fill out your details and choose for it to “Require your password to sign in”. Once you are done hit “Save”
Now it will download and install all packages it needs
When asked if you want to restart select “Yes”
Remove USB-Key
You will be given two options on bootup, but Antergos will be chosen automatically after a few seconds
After that you will see the display manager, which you will remove soon. Here you need to hit ctrl+fn+alt+F2 to go to the Shell 2 - explain shells
You will be shown a black console where you need to login with the credentials you set up before in step X
As you’ve noticed, the font seems very small. We’re going to fix that now.
First we’re going to to use the package manager to install the Terminus font. Type “yaourt terminus” in the shell and select “community/terminus-font” by typing the number assigned to it and hitting enter.
Once you do this you will see a prompt “[sudo] password for {user}”. This is asking you for your password to allow the installation.
Once you do this you will be asked to confirm your willingness to install Terminus. You can do this by either hitting enter (since the “Y” is in capital letters and hence default) or by typing “y” and then hitting enter.
The installation of Terminus is now complete. Now we need to apply the font. In order to do this type “sudo nano /etc/vconsole.conf” and hit enter. You will be asked for your password. - explain what the vconsole.conf file is for
One line under the “KEYMAP=es” write “FONT=ter-232n” and exit the editor by hitting ctrl+x. You will be asked if you want to save before exiting, which you can do by hitting “y” and hitting enter.
Now you need to reboot for the changes to be applied. For this type “reboot” in the console and hit enter.
Login again, you can already see the font being bigger.
Now we are going to remove the display manager. In order to do this type “pacman -R lightdm light-locker lightdm-webkit2-greeter light-locker-settings” and hit enter. You will be asked for your password.
Now you need to reboot your laptop again to check if the display manager is still there.
Login again
Next we are going to setup a pagination mechanism. Explain why
To do this type “nano .bashrc” and hit enter. Explain what “.bashrc” is
In the file add a line in the bottom and write “PAGER=less” and close the file. - Explain environment variables
Now we’re going to install the i3 windows manager - i3 documentation
Type “yaourt --pager i3-wm” in the console and install it. Explain pagination
Now we need to configure i3 for it to boot with X. Explain X
For this type “nano .xinitrc” and add type in the first line “#!/bin/sh”. Explain #!/bin/sh and .xinitrc
In the next line write “exec i3” and close the file.
Now type “startx” and hit enter to start X
Now we have again a resolution problem, which we will solve soon.
Follow the tutorial of the modal window:
Hit enter to select “Yes” to initialize the setup file
Hit enter to select the Windows key as “cmd”
Now exit X by hitting ctrl+alt+backspace.
To fix the resolution of X we need to change something on .xinitrc. Type “nano .xinitrc” in the console, add a line after the first one and type “export GDK_SCALE=2”, add yet another line after that that says “export GDK_DPI_SCALE=1” and add a third line after that and type “xrandr --output eDP1 --dpi 216 --auto”. Now close the file. - Explain xrandr and export
Now start X again by typing “startx” and hitting enter
Once inside of X you can launch the console by hitting cmd+enter
Installing Chrome
Type “yaourt google-chrome” and install it. When asked if you want to “Edit PKGBUILD ?” type “n” to say no. When asked if you want to “Edit google-chrome.install ?” type “n” again to say no. When asked if you want to “Continue building google-chrome ?” hit enter to select yes (“Y” is in capital letter meaning it’s the default). When asked if you want to “Continue installing google-chrome ?” hit enter to select yes (“Y” is in capital letter meaning it’s the default). When asked if you want to “Proceed with installation ?” hit enter to select yes (“Y” is in capital letter meaning it’s the default).
To launch it type “google-chrome-stable” in the console and hit enter.
dmenu
For an easier to launch programs install dmenu. Once installed it will work by hitting cmd+d and then typing the name of the program you want to launch.
i3status
I3 Status is a bottom bar for X that will display relevant information.
Install i3status
Hit cmd+shift+r to refresh X so that it gets applied. Explain how to customize i3
Explain how to customize it further
How to setup workspaces for bootup
You can change from one workspace to another you just need to hit cmd+{number_of_workspace}. To open a workspace you just need to hit cmd + the number of the workspace you want to create.
To move a window to another workspace hit cmd+shift+{number_of_workspace}
You can open several windows in a workspace. To rearrange them hit cmd+shift+arrow.
To resize a window first hit cmd+r to enter resize mode and now use the arrows to resize the window. This only works when several windows are open in the same workspace
How to use USB-keys
Explain mounting
Insert a USB-key into your laptop
Now we need to check the name that the laptop has given your USB-key. For doing this you need to screen print a file with the information about all the partitions connected to the laptop. Type “cat /proc/partitions” and hit enter. Explain “cat”. Your USB-keys will be labeled sda, sdb, etc. in order of having connected them.
If you want more information on your partitions, write “df -h” to get more information. Explain “df”
If you want to make sure you are mounting the right USB-key, write “journal -e” to see the log of the system and see if one of the partitions shown before has been connected when. That will tell you which partition is your USB-key.
Now we need to mount it in a folder. For that we need to create a folder where you will mount USBs by typing mkdir /mnt/{name_of_folder} (e.g. “usb”, “keys”, etc.)
Explain “mnt”
We’re going to create an alias by editing the “.bashrc” file in order to make make a simpler way of mounting keys. 
Type “nano .bashrc” and hit enter
In the last line type “alias mount-all=’sudo mount -o gid=users, fmask=113,dmask=002’. 
Close the file and close X by tping exit and hitting enter.
Open a new terminal
Type “mount-all /dev/sda1 /mnt/{name_of_folder}”
Now you can type “ls /mnt/llave” to view the content of the USB-key
You can never disconnect a USB-key without unmounting. To unmount a USB-key type “sudo umount /mnt/{name_of_folder}. You need to be outside of the folder for this to work. To go to the home folder you can either type “~” or “$HOME” and hit enter.
To see if it’s been correctly unmounted type “cat /proc/partitions” and hit enter.
Setting up WiFi Networks
Run nmtui
Select “Activate a Connection” and choose which WiFi you want to connect to/
Setup a monitor
Install lxrandr
Execute lxrandr and turn the screen on. You can select the desired resolution.
Setup function keys
Explain i3 config file
Edit the i3 config file by typing “nano ~/.config/i3/config” and adding at the end of the file: 
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
Close the file
Refresh X

