```
[root@centos7 ~]$ hostnamectl set-hostname centos77.magedu.com             # 使用这个命令会立即生效且重启也生效
[root@centos7 ~]$ hostname # 查看下
centos77.magedu.com
[root@centos7 ~]$ vim /etc/hosts                                           # 编辑下hosts文件， 给127.0.0.1添加hostname
[root@centos7 ~]$ cat /etc/hosts # 检查
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4 centos77.magedu.com
::1 localhost localhost.localdomain localhost6 localhost6.localdomain6
```
