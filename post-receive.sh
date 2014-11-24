#!/bin/sh
forever stop xoxo
GIT_WORK_TREE=/home/ec2-user/xoxo/
export GIT_WORK_TREE
git checkout -f
cd $GIT_WORK_TREE
npm install --production
forever start -a -o /home/ec2-user/logs/xoxoout.log -e /home/ec2-user/logs/xoxoerr.log -l /home/ec2-user/logs/xoxo.log --uid "xoxo" --sourceDir "/home/ec2-user/xoxo" server/server.js