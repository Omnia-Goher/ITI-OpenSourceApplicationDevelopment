#!/bin/bash

# Check if script is being run as root
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 
   exit 1
fi
while true; do
   # Get current date and time
   DATE=$(date +"%Y-%m-%d %H:%M:%S")

   # Get system load and append it to the system-load log file
   LOAD=$(uptime)
   echo "$DATE - $LOAD" >> /var/log/system-load
   sleep 60
done