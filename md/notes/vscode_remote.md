[a text](https://zhuanlan.zhihu.com/p/82568294)

vscode plugin search "remote development"

**install SSH Client**
powershell(**admin**)
Get-WindowsCapability -Online | ? Name -like 'OpenSSH\*'

Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

command prompt, cd %USERPROFILE%/.ssh

ssh-keygen -t rsa -b 4096
